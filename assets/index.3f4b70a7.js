var Ax=Object.defineProperty;var Px=(t,e,n)=>e in t?Ax(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(Px(t,typeof e!="symbol"?e+"":e,n),n);const Lx=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Lx();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F0={exports:{}},U0={},Me={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),Dx=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),xp=Symbol.iterator;function Gx(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V0=Object.assign,G0={};function uo(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||B0}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H0(){}H0.prototype=uo.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||B0}var Qd=Zd.prototype=new H0;Qd.constructor=Zd;V0(Qd,uo.prototype);Qd.isPureReactComponent=!0;var yp=Array.isArray,W0=Object.prototype.hasOwnProperty,Jd={current:null},$0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,i)&&!$0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:Jd.current}}function Hx(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function Wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wx(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case Dx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_c(o,0):i,yp(r)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),Cl(r,e,n,"",function(u){return u})):r!=null&&(Kd(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_c(s,a);o+=Cl(s,e,n,l,r)}else if(l=Gx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $x(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Tl={transition:null},jx={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Jd};Oe.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=uo;Oe.Fragment=Ix;Oe.Profiler=zx;Oe.PureComponent=Zd;Oe.StrictMode=kx;Oe.Suspense=Ux;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=V0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W0.call(e,l)&&!$0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Oe.createElement=j0;Oe.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:Fx,render:t}};Oe.isValidElement=Kd;Oe.lazy=function(t){return{$$typeof:Vx,_payload:{_status:-1,_result:t},_init:$x}};Oe.memo=function(t,e){return{$$typeof:Bx,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Oe.useContext=function(t){return Qt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Oe.useId=function(){return Qt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Qt.current.useRef(t)};Oe.useState=function(t){return Qt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Qt.current.useTransition()};Oe.version="18.2.0";(function(t){t.exports=Oe})(Me);const ai=Rx(Me.exports);/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Me.exports;function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qx=typeof Object.is=="function"?Object.is:Xx,Yx=Ys.useState,Zx=Ys.useEffect,Qx=Ys.useLayoutEffect,Jx=Ys.useDebugValue;function Kx(t,e){var n=e(),i=Yx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Qx(function(){r.value=n,r.getSnapshot=e,xc(r)&&s({inst:r})},[t,n,e]),Zx(function(){return xc(r)&&s({inst:r}),t(function(){xc(r)&&s({inst:r})})},[t]),Jx(n),n}function xc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qx(t,n)}catch{return!0}}function ey(t,e){return e()}var ty=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ey:Kx;U0.useSyncExternalStore=Ys.useSyncExternalStore!==void 0?Ys.useSyncExternalStore:ty;(function(t){t.exports=U0})(F0);var X0={exports:{}},q0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=Me.exports,ny=F0.exports;function iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ry=typeof Object.is=="function"?Object.is:iy,sy=ny.useSyncExternalStore,oy=Eu.useRef,ay=Eu.useEffect,ly=Eu.useMemo,uy=Eu.useDebugValue;q0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=oy(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ly(function(){function l(m){if(!u){if(u=!0,c=m,m=i(m),r!==void 0&&o.hasValue){var _=o.value;if(r(_,m))return f=_}return f=m}if(_=f,ry(c,m))return _;var h=i(m);return r!==void 0&&r(_,h)?_:(c=m,f=h)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=sy(t,s[0],s[1]);return ay(function(){o.hasValue=!0,o.value=a},[a]),uy(a),a};(function(t){t.exports=q0})(X0);var eh={exports:{}},gn={},Y0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,k){var B=I.length;I.push(k);e:for(;0<B;){var K=B-1>>>1,O=I[K];if(0<r(O,k))I[K]=k,I[B]=O,B=K;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var k=I[0],B=I.pop();if(B!==k){I[0]=B;e:for(var K=0,O=I.length,V=O>>>1;K<V;){var X=2*(K+1)-1,ae=I[X],A=X+1,xe=I[A];if(0>r(ae,B))A<O&&0>r(xe,ae)?(I[K]=xe,I[A]=B,K=A):(I[K]=ae,I[X]=B,K=X);else if(A<O&&0>r(xe,B))I[K]=xe,I[A]=B,K=A;else break e}}return k}function r(I,k){var B=I.sortIndex-k.sortIndex;return B!==0?B:I.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var k=n(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=I)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(u)}}function S(I){if(h=!1,x(I),!_)if(n(l)!==null)_=!0,W(w);else{var k=n(u);k!==null&&J(S,k.startTime-I)}}function w(I,k){_=!1,h&&(h=!1,g(y),y=-1),m=!0;var B=d;try{for(x(k),f=n(l);f!==null&&(!(f.expirationTime>k)||I&&!N());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var O=K(f.expirationTime<=k);k=t.unstable_now(),typeof O=="function"?f.callback=O:f===n(l)&&i(l),x(k)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var X=n(u);X!==null&&J(S,X.startTime-k),V=!1}return V}finally{f=null,d=B,m=!1}}var C=!1,L=null,y=-1,T=5,R=-1;function N(){return!(t.unstable_now()-R<T)}function re(){if(L!==null){var I=t.unstable_now();R=I;var k=!0;try{k=L(!0,I)}finally{k?ee():(C=!1,L=null)}}else C=!1}var ee;if(typeof v=="function")ee=function(){v(re)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,j=U.port2;U.port1.onmessage=re,ee=function(){j.postMessage(null)}}else ee=function(){p(re,0)};function W(I){L=I,C||(C=!0,ee())}function J(I,k){y=p(function(){I(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var B=d;d=k;try{return I()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=d;d=I;try{return k()}finally{d=B}},t.unstable_scheduleCallback=function(I,k,B){var K=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=B+O,I={id:c++,callback:k,priorityLevel:I,startTime:B,expirationTime:O,sortIndex:-1},B>K?(I.sortIndex=B,e(u,I),n(l)===null&&I===n(u)&&(h?(g(y),y=-1):h=!0,J(S,B-K))):(I.sortIndex=O,e(l,I),_||m||(_=!0,W(w))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var k=d;return function(){var B=d;d=k;try{return I.apply(this,arguments)}finally{d=B}}}})(Z0);(function(t){t.exports=Z0})(Y0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=Me.exports,pn=Y0.exports;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J0=new Set,ea={};function Zr(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(ea[t]=e,t=0;t<e.length;t++)J0.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},Mp={};function fy(t){return Of.call(Mp,t)?!0:Of.call(wp,t)?!1:cy.test(t)?Mp[t]=!0:(wp[t]=!0,!1)}function dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hy(t,e,n,i){if(e===null||typeof e>"u"||dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);It[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);It[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);It[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hy(e,n,r,i)&&(n=null),i||r===null?fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),ev=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),tv=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,yc;function ko(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function wc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function py(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Ff:return"Profiler";case rh:return"StrictMode";case Uf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ev:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function my(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gy(t){var e=nv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=gy(t))}function iv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=nv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rv(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function Hf(t,e){rv(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wf(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wf(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(zo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function sv(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ov(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ov(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vy=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function lv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function uv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _y=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(_y[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yf=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,Us=null,Bs=null;function Pp(t){if(t=Aa(t)){if(typeof Zf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Pu(e),Zf(t.stateNode,t.type,e))}}function cv(t){Us?Bs?Bs.push(t):Bs=[t]:Us=t}function fv(){if(Us){var t=Us,e=Bs;if(Bs=Us=null,Pp(t),e)for(t=0;t<e.length;t++)Pp(e[t])}}function dv(t,e){return t(e)}function hv(){}var Mc=!1;function pv(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return dv(t,e,n)}finally{Mc=!1,(Us!==null||Bs!==null)&&(hv(),fv())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Qf=!1;if(Mi)try{var So={};Object.defineProperty(So,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Qf=!1}function xy(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ho=!1,Wl=null,$l=!1,Jf=null,yy={onError:function(t){Ho=!0,Wl=t}};function Sy(t,e,n,i,r,s,o,a,l){Ho=!1,Wl=null,xy.apply(yy,arguments)}function wy(t,e,n,i,r,s,o,a,l){if(Sy.apply(this,arguments),Ho){if(Ho){var u=Wl;Ho=!1,Wl=null}else throw Error(se(198));$l||($l=!0,Jf=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lp(t){if(Qr(t)!==t)throw Error(se(188))}function My(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lp(r),t;if(s===i)return Lp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function gv(t){return t=My(t),t!==null?vv(t):null}function vv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vv(t);if(e!==null)return e;t=t.sibling}return null}var _v=pn.unstable_scheduleCallback,Rp=pn.unstable_cancelCallback,Ey=pn.unstable_shouldYield,by=pn.unstable_requestPaint,vt=pn.unstable_now,Cy=pn.unstable_getCurrentPriorityLevel,lh=pn.unstable_ImmediatePriority,xv=pn.unstable_UserBlockingPriority,jl=pn.unstable_NormalPriority,Ty=pn.unstable_LowPriority,yv=pn.unstable_IdlePriority,bu=null,ri=null;function Ay(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Ry,Py=Math.log,Ly=Math.LN2;function Ry(t){return t>>>=0,t===0?32:31-(Py(t)/Ly|0)|0}var Oa=64,Fa=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=n&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function Dy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=Dy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sv(){var t=Oa;return Oa<<=1,(Oa&4194240)===0&&(Oa=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function wv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Mv,ch,Ev,bv,Cv,ed=!1,Ua=[],Xi=null,qi=null,Yi=null,ia=new Map,ra=new Map,Vi=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dp(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ny(t,e,n,i,r){switch(e){case"focusin":return Xi=wo(Xi,t,e,n,i,r),!0;case"dragenter":return qi=wo(qi,t,e,n,i,r),!0;case"mouseover":return Yi=wo(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,wo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,wo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Tv(t){var e=wr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=mv(n),e!==null){t.blockedOn=e,Cv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=Aa(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){Al(t)&&n.delete(e)}function Oy(){ed=!1,Xi!==null&&Al(Xi)&&(Xi=null),qi!==null&&Al(qi)&&(qi=null),Yi!==null&&Al(Yi)&&(Yi=null),ia.forEach(Ip),ra.forEach(Ip)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Oy)))}function sa(t){function e(r){return Mo(r,t)}if(0<Ua.length){Mo(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&Mo(Xi,t),qi!==null&&Mo(qi,t),Yi!==null&&Mo(Yi,t),ia.forEach(e),ra.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)Tv(n),n.blockedOn===null&&Vi.shift()}var Vs=Ai.ReactCurrentBatchConfig,ql=!0;function Fy(t,e,n,i){var r=Ze,s=Vs.transition;Vs.transition=null;try{Ze=1,fh(t,e,n,i)}finally{Ze=r,Vs.transition=s}}function Uy(t,e,n,i){var r=Ze,s=Vs.transition;Vs.transition=null;try{Ze=4,fh(t,e,n,i)}finally{Ze=r,Vs.transition=s}}function fh(t,e,n,i){if(ql){var r=td(t,e,n,i);if(r===null)kc(t,e,i,Yl,n),Dp(t,i);else if(Ny(r,t,e,n,i))i.stopPropagation();else if(Dp(t,i),e&4&&-1<zy.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&Mv(s),s=td(t,e,n,i),s===null&&kc(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var Yl=null;function td(t,e,n,i){if(Yl=null,t=ah(i),t=wr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cy()){case lh:return 1;case xv:return 4;case jl:case Ty:return 16;case yv:return 536870912;default:return 16}default:return 16}}var Wi=null,dh=null,Pl=null;function Pv(){if(Pl)return Pl;var t,e=dh,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function kp(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:kp,this.isPropagationStopped=kp,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=vn(co),Ta=ct({},co,{view:0,detail:0}),By=vn(Ta),bc,Cc,Eo,Cu=ct({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(bc=t.screenX-Eo.screenX,Cc=t.screenY-Eo.screenY):Cc=bc=0,Eo=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),zp=vn(Cu),Vy=ct({},Cu,{dataTransfer:0}),Gy=vn(Vy),Hy=ct({},Ta,{relatedTarget:0}),Tc=vn(Hy),Wy=ct({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=vn(Wy),jy=ct({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=vn(jy),qy=ct({},co,{data:0}),Np=vn(qy),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qy[t])?!!e[t]:!1}function ph(){return Jy}var Ky=ct({},Ta,{key:function(t){if(t.key){var e=Yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=vn(Ky),tS=ct({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=vn(tS),nS=ct({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),iS=vn(nS),rS=ct({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=vn(rS),oS=ct({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=vn(oS),lS=[9,13,27,32],mh=Mi&&"CompositionEvent"in window,Wo=null;Mi&&"documentMode"in document&&(Wo=document.documentMode);var uS=Mi&&"TextEvent"in window&&!Wo,Lv=Mi&&(!mh||Wo&&8<Wo&&11>=Wo),Fp=String.fromCharCode(32),Up=!1;function Rv(t,e){switch(t){case"keyup":return lS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function cS(t,e){switch(t){case"compositionend":return Dv(e);case"keypress":return e.which!==32?null:(Up=!0,Fp);case"textInput":return t=e.data,t===Fp&&Up?null:t;default:return null}}function fS(t,e){if(bs)return t==="compositionend"||!mh&&Rv(t,e)?(t=Pv(),Pl=dh=Wi=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function Iv(t,e,n,i){cv(i),e=Zl(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,oa=null;function hS(t){Wv(t,0)}function Tu(t){var e=As(t);if(iv(e))return t}function pS(t,e){if(t==="change")return e}var kv=!1;if(Mi){var Ac;if(Mi){var Pc="oninput"in document;if(!Pc){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Pc=typeof Vp.oninput=="function"}Ac=Pc}else Ac=!1;kv=Ac&&(!document.documentMode||9<document.documentMode)}function Gp(){$o&&($o.detachEvent("onpropertychange",zv),oa=$o=null)}function zv(t){if(t.propertyName==="value"&&Tu(oa)){var e=[];Iv(e,oa,t,ah(t)),pv(hS,e)}}function mS(t,e,n){t==="focusin"?(Gp(),$o=e,oa=n,$o.attachEvent("onpropertychange",zv)):t==="focusout"&&Gp()}function gS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(oa)}function vS(t,e){if(t==="click")return Tu(e)}function _S(t,e){if(t==="input"||t==="change")return Tu(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:xS;function aa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Of.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,e){var n=Hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function Nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ov(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=Ov(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nv(n.ownerDocument.documentElement,n)){if(i!==null&&gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wp(n,s);var o=Wp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SS=Mi&&"documentMode"in document&&11>=document.documentMode,Cs=null,nd=null,jo=null,id=!1;function $p(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||Cs==null||Cs!==Hl(i)||(i=Cs,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&aa(jo,i)||(jo=i,i=Zl(nd,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},Lc={},Fv={};Mi&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Au(t){if(Lc[t])return Lc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fv)return Lc[t]=e[n];return t}var Uv=Au("animationend"),Bv=Au("animationiteration"),Vv=Au("animationstart"),Gv=Au("transitionend"),Hv=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Hv.set(t,e),Zr(e,[t])}for(var Rc=0;Rc<jp.length;Rc++){var Dc=jp[Rc],wS=Dc.toLowerCase(),MS=Dc[0].toUpperCase()+Dc.slice(1);lr(wS,"on"+MS)}lr(Uv,"onAnimationEnd");lr(Bv,"onAnimationIteration");lr(Vv,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Gv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wy(i,e,void 0,t),t.currentTarget=null}function Wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xp(r,a,u),s=l}}}if($l)throw t=Jf,$l=!1,Jf=null,t}function nt(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||($v(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),$v(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Ga]){t[Ga]=!0,J0.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Ic("selectionchange",!1,e))}}function $v(t,e,n,i){switch(Av(e)){case 1:var r=Fy;break;case 4:r=Uy;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pv(function(){var u=s,c=ah(n),f=[];e:{var d=Hv.get(t);if(d!==void 0){var m=hh,_=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":m=eS;break;case"focusin":_="focus",m=Tc;break;case"focusout":_="blur",m=Tc;break;case"beforeblur":case"afterblur":m=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=iS;break;case Uv:case Bv:case Vv:m=$y;break;case Gv:m=sS;break;case"scroll":m=By;break;case"wheel":m=aS;break;case"copy":case"cut":case"paste":m=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Op}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=na(v,g),S!=null&&h.push(ua(v,S,x)))),p)break;v=v.return}0<h.length&&(d=new m(d,_,null,n,c),f.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Yf&&(_=n.relatedTarget||n.fromElement)&&(wr(_)||_[Ei]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?wr(_):null,_!==null&&(p=Qr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(h=zp,S="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Op,S="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?d:As(m),x=_==null?d:As(_),d=new h(S,v+"leave",m,n,c),d.target=p,d.relatedTarget=x,S=null,wr(c)===u&&(h=new h(g,v+"enter",_,n,c),h.target=x,h.relatedTarget=p,S=h),p=S,m&&_)t:{for(h=m,g=_,v=0,x=h;x;x=ts(x))v++;for(x=0,S=g;S;S=ts(S))x++;for(;0<v-x;)h=ts(h),v--;for(;0<x-v;)g=ts(g),x--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=ts(h),g=ts(g)}h=null}else h=null;m!==null&&qp(f,d,m,h,!1),_!==null&&p!==null&&qp(f,p,_,h,!0)}}e:{if(d=u?As(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=pS;else if(Bp(d))if(kv)w=_S;else{w=gS;var C=mS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=vS);if(w&&(w=w(t,u))){Iv(f,w,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Wf(d,"number",d.value)}switch(C=u?As(u):window,t){case"focusin":(Bp(C)||C.contentEditable==="true")&&(Cs=C,nd=u,jo=null);break;case"focusout":jo=nd=Cs=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,$p(f,n,c);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":$p(f,n,c)}var L;if(mh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else bs?Rv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Lv&&n.locale!=="ko"&&(bs||y!=="onCompositionStart"?y==="onCompositionEnd"&&bs&&(L=Pv()):(Wi=c,dh="value"in Wi?Wi.value:Wi.textContent,bs=!0)),C=Zl(u,y),0<C.length&&(y=new Np(y,t,null,n,c),f.push({event:y,listeners:C}),L?y.data=L:(L=Dv(n),L!==null&&(y.data=L)))),(L=uS?cS(t,n):fS(t,n))&&(u=Zl(u,"onBeforeInput"),0<u.length&&(c=new Np("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=L))}Wv(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ua(t,s,r)),s=na(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(CS,"")}function Ha(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(se(425))}function Ql(){}var rd=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(t){return Zp.resolve(null).then(t).catch(PS)}:ad;function PS(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ti="__reactFiber$"+fo,ca="__reactProps$"+fo,Ei="__reactContainer$"+fo,ld="__reactEvents$"+fo,LS="__reactListeners$"+fo,RS="__reactHandles$"+fo;function wr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qp(t);t!==null;){if(n=t[ti])return n;t=Qp(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[ti]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Pu(t){return t[ca]||null}var ud=[],Ps=-1;function ur(t){return{current:t}}function it(t){0>Ps||(t.current=ud[Ps],ud[Ps]=null,Ps--)}function tt(t,e){Ps++,ud[Ps]=t.current,t.current=e}var sr={},Gt=ur(sr),rn=ur(!1),zr=sr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function Jl(){it(rn),it(Gt)}function Jp(t,e,n){if(Gt.current!==sr)throw Error(se(168));tt(Gt,e),tt(rn,n)}function jv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,my(t)||"Unknown",r));return ct({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,zr=Gt.current,tt(Gt,t),tt(rn,rn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=jv(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,it(rn),it(Gt),tt(Gt,t)):it(rn),tt(rn,n)}var vi=null,Lu=!1,Nc=!1;function Xv(t){vi===null?vi=[t]:vi.push(t)}function DS(t){Lu=!0,Xv(t)}function cr(){if(!Nc&&vi!==null){Nc=!0;var t=0,e=Ze;try{var n=vi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Lu=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),_v(lh,cr),r}finally{Ze=e,Nc=!1}}return null}var Ls=[],Rs=0,eu=null,tu=0,wn=[],Mn=0,Nr=null,_i=1,xi="";function mr(t,e){Ls[Rs++]=tu,Ls[Rs++]=eu,eu=t,tu=e}function qv(t,e,n){wn[Mn++]=_i,wn[Mn++]=xi,wn[Mn++]=Nr,Nr=t;var i=_i;t=xi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Wn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function vh(t){t.return!==null&&(mr(t,1),qv(t,1,0))}function _h(t){for(;t===eu;)eu=Ls[--Rs],Ls[Rs]=null,tu=Ls[--Rs],Ls[Rs]=null;for(;t===Nr;)Nr=wn[--Mn],wn[Mn]=null,xi=wn[--Mn],wn[Mn]=null,_i=wn[--Mn],wn[Mn]=null}var hn=null,dn=null,st=!1,Un=null;function Yv(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(st){var e=dn;if(e){var n=e;if(!em(t,e)){if(cd(t))throw Error(se(418));e=Zi(n.nextSibling);var i=hn;e&&em(t,e)?Yv(i,n):(t.flags=t.flags&-4097|2,st=!1,hn=t)}}else{if(cd(t))throw Error(se(418));t.flags=t.flags&-4097|2,st=!1,hn=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Wa(t){if(t!==hn)return!1;if(!st)return tm(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=dn)){if(cd(t))throw Zv(),Error(se(418));for(;e;)Yv(t,e),e=Zi(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Zi(t.stateNode.nextSibling):null;return!0}function Zv(){for(var t=dn;t;)t=Zi(t.nextSibling)}function Js(){dn=hn=null,st=!1}function xh(t){Un===null?Un=[t]:Un.push(t)}var IS=Ai.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nu=ur(null),iu=null,Ds=null,yh=null;function Sh(){yh=Ds=iu=null}function wh(t){var e=nu.current;it(nu),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){iu=t,yh=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(nn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(iu===null)throw Error(se(308));Ds=t,iu.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Mr=null;function Mh(t){Mr===null?Mr=[t]:Mr.push(t)}function Qv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Ve&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function nm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,h=a;switch(d=e,m=n,h.tag){case 1:if(_=h.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=ct({},f,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Kv=new Q0.Component().refs;function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ru={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ki(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&($n(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Ki(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&($n(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&($n(e,t,i,n),Rl(e,t,i))}};function rm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function e_(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=sn(e)?zr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ru,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Kv,Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=sn(e)?zr:Gt.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ru.enqueueReplaceState(r,r.state,null),ru(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Kv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function om(t){var e=t._init;return e(t._payload)}function t_(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=er(g,v),g.index=0,g.sibling=null,g}function s(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,x,S){return v===null||v.tag!==6?(v=Hc(x,g.mode,S),v.return=g,v):(v=r(v,x),v.return=g,v)}function l(g,v,x,S){var w=x.type;return w===Es?c(g,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ui&&om(w)===v.type)?(S=r(v,x.props),S.ref=bo(g,v,x),S.return=g,S):(S=Ol(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,v,x),S.return=g,S)}function u(g,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Wc(x,g.mode,S),v.return=g,v):(v=r(v,x.children||[]),v.return=g,v)}function c(g,v,x,S,w){return v===null||v.tag!==7?(v=Lr(x,g.mode,S,w),v.return=g,v):(v=r(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hc(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return x=Ol(v.type,v.key,v.props,null,g.mode,x),x.ref=bo(g,null,v),x.return=g,x;case Ms:return v=Wc(v,g.mode,x),v.return=g,v;case Ui:var S=v._init;return f(g,S(v._payload),x)}if(zo(v)||yo(v))return v=Lr(v,g.mode,x,null),v.return=g,v;$a(g,v)}return null}function d(g,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return x.key===w?l(g,v,x,S):null;case Ms:return x.key===w?u(g,v,x,S):null;case Ui:return w=x._init,d(g,v,w(x._payload),S)}if(zo(x)||yo(x))return w!==null?null:c(g,v,x,S,null);$a(g,x)}return null}function m(g,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,a(v,g,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ka:return g=g.get(S.key===null?x:S.key)||null,l(v,g,S,w);case Ms:return g=g.get(S.key===null?x:S.key)||null,u(v,g,S,w);case Ui:var C=S._init;return m(g,v,x,C(S._payload),w)}if(zo(S)||yo(S))return g=g.get(x)||null,c(v,g,S,w,null);$a(v,S)}return null}function _(g,v,x,S){for(var w=null,C=null,L=v,y=v=0,T=null;L!==null&&y<x.length;y++){L.index>y?(T=L,L=null):T=L.sibling;var R=d(g,L,x[y],S);if(R===null){L===null&&(L=T);break}t&&L&&R.alternate===null&&e(g,L),v=s(R,v,y),C===null?w=R:C.sibling=R,C=R,L=T}if(y===x.length)return n(g,L),st&&mr(g,y),w;if(L===null){for(;y<x.length;y++)L=f(g,x[y],S),L!==null&&(v=s(L,v,y),C===null?w=L:C.sibling=L,C=L);return st&&mr(g,y),w}for(L=i(g,L);y<x.length;y++)T=m(L,g,y,x[y],S),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?y:T.key),v=s(T,v,y),C===null?w=T:C.sibling=T,C=T);return t&&L.forEach(function(N){return e(g,N)}),st&&mr(g,y),w}function h(g,v,x,S){var w=yo(x);if(typeof w!="function")throw Error(se(150));if(x=w.call(x),x==null)throw Error(se(151));for(var C=w=null,L=v,y=v=0,T=null,R=x.next();L!==null&&!R.done;y++,R=x.next()){L.index>y?(T=L,L=null):T=L.sibling;var N=d(g,L,R.value,S);if(N===null){L===null&&(L=T);break}t&&L&&N.alternate===null&&e(g,L),v=s(N,v,y),C===null?w=N:C.sibling=N,C=N,L=T}if(R.done)return n(g,L),st&&mr(g,y),w;if(L===null){for(;!R.done;y++,R=x.next())R=f(g,R.value,S),R!==null&&(v=s(R,v,y),C===null?w=R:C.sibling=R,C=R);return st&&mr(g,y),w}for(L=i(g,L);!R.done;y++,R=x.next())R=m(L,g,y,R.value,S),R!==null&&(t&&R.alternate!==null&&L.delete(R.key===null?y:R.key),v=s(R,v,y),C===null?w=R:C.sibling=R,C=R);return t&&L.forEach(function(re){return e(g,re)}),st&&mr(g,y),w}function p(g,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===Es){if(C.tag===7){n(g,C.sibling),v=r(C,x.props.children),v.return=g,g=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ui&&om(w)===C.type){n(g,C.sibling),v=r(C,x.props),v.ref=bo(g,C,x),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}x.type===Es?(v=Lr(x.props.children,g.mode,S,x.key),v.return=g,g=v):(S=Ol(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,v,x),S.return=g,g=S)}return o(g);case Ms:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=r(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=Wc(x,g.mode,S),v.return=g,g=v}return o(g);case Ui:return C=x._init,p(g,v,C(x._payload),S)}if(zo(x))return _(g,v,x,S);if(yo(x))return h(g,v,x,S);$a(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,x),v.return=g,g=v):(n(g,v),v=Hc(x,g.mode,S),v.return=g,g=v),o(g)):n(g,v)}return p}var Ks=t_(!0),n_=t_(!1),Pa={},si=ur(Pa),fa=ur(Pa),da=ur(Pa);function Er(t){if(t===Pa)throw Error(se(174));return t}function bh(t,e){switch(tt(da,e),tt(fa,t),tt(si,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}it(si),tt(si,e)}function eo(){it(si),it(fa),it(da)}function i_(t){Er(da.current);var e=Er(si.current),n=jf(e,t.type);e!==n&&(tt(fa,t),tt(si,n))}function Ch(t){fa.current===t&&(it(si),it(fa))}var at=ur(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Th(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var Dl=Ai.ReactCurrentDispatcher,Fc=Ai.ReactCurrentBatchConfig,Or=0,lt=null,wt=null,Tt=null,ou=!1,Xo=!1,ha=0,kS=0;function zt(){throw Error(se(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(Or=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?FS:US,t=n(i,r),Xo){s=0;do{if(Xo=!1,ha=0,25<=s)throw Error(se(301));s+=1,Tt=wt=null,e.updateQueue=null,Dl.current=BS,t=n(i,r)}while(Xo)}if(Dl.current=au,e=wt!==null&&wt.next!==null,Or=0,Tt=wt=lt=null,ou=!1,e)throw Error(se(300));return t}function Lh(){var t=ha!==0;return ha=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?lt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Pn(){if(wt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Tt===null?lt.memoizedState:Tt.next;if(e!==null)Tt=e,wt=t;else{if(t===null)throw Error(se(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Tt===null?lt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function pa(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,lt.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function r_(){}function s_(t,e){var n=lt,i=Pn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Rh(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,ma(9,a_.bind(null,n,i,r,e),void 0,null),At===null)throw Error(se(349));(Or&30)!==0||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,i){e.value=n,e.getSnapshot=i,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function c_(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function am(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,lt,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f_(){return Pn().memoizedState}function Il(t,e,n,i){var r=Kn();lt.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Du(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}lt.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function lm(t,e){return Il(8390656,8,t,e)}function Rh(t,e){return Du(2048,8,t,e)}function d_(t,e){return Du(4,2,t,e)}function h_(t,e){return Du(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,p_.bind(null,e,t),n)}function Dh(){}function g_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return(Or&21)===0?(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n):(Yn(n,e)||(n=Sv(),lt.lanes|=n,Fr|=n,t.baseState=!0),e)}function zS(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{Ze=n,Fc.transition=i}}function x_(){return Pn().memoizedState}function NS(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))S_(e,n);else if(n=Qv(t,e,n,i),n!==null){var r=qt();$n(n,t,i,r),w_(n,e,i)}}function OS(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))S_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qv(t,e,r,i),n!==null&&(r=qt(),$n(n,t,i,r),w_(n,e,i))}}function y_(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function S_(t,e){Xo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w_(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var au={readContext:An,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},FS={readContext:An,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NS.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:am,useDebugValue:Dh,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=am(!1),e=t[0];return t=zS.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Kn();if(st){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),At===null)throw Error(se(349));(Or&30)!==0||o_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lm(l_.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,a_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=At.identifierPrefix;if(st){var n=xi,i=_i;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},US={readContext:An,useCallback:g_,useContext:An,useEffect:Rh,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Uc,useRef:f_,useState:function(){return Uc(pa)},useDebugValue:Dh,useDeferredValue:function(t){var e=Pn();return __(e,wt.memoizedState,t)},useTransition:function(){var t=Uc(pa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1},BS={readContext:An,useCallback:g_,useContext:An,useEffect:Rh,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Bc,useRef:f_,useState:function(){return Bc(pa)},useDebugValue:Dh,useDeferredValue:function(t){var e=Pn();return wt===null?e.memoizedState=t:__(e,wt.memoizedState,t)},useTransition:function(){var t=Bc(pa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:x_,unstable_isNewReconciler:!1};function to(t,e){try{var n="",i=e;do n+=py(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VS=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uu||(uu=!0,bd=i),md(t,e)},n}function E_(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tw.bind(null,t,e,n),e.then(t,t))}function cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fm(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var GS=Ai.ReactCurrentOwner,nn=!1;function Xt(t,e,n,i){e.child=t===null?n_(e,null,n,i):Ks(e,t.child,n,i)}function dm(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=Ph(t,e,n,i,s,r),n=Lh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(st&&n&&vh(e),e.flags|=1,Xt(t,e,i,r),e.child)}function hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b_(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function b_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(nn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return gd(t,e,n,i,r)}function C_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ks,cn),cn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ks,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(ks,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(ks,cn),cn|=i;return Xt(t,e,r,n),e.child}function T_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var s=sn(n)?zr:Gt.current;return s=Qs(e,s),Gs(e,r),n=Ph(t,e,n,i,s,r),i=Lh(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(st&&i&&vh(e),e.flags|=1,Xt(t,e,n,r),e.child)}function pm(t,e,n,i,r){if(sn(n)){var s=!0;Kl(e)}else s=!1;if(Gs(e,r),e.stateNode===null)kl(t,e),e_(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=sn(n)?zr:Gt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&sm(e,o,i,u),Bi=!1;var d=e.memoizedState;o.state=d,ru(e,i,o,r),l=e.memoizedState,a!==i||d!==l||rn.current||Bi?(typeof c=="function"&&(hd(e,n,c,i),l=e.memoizedState),(a=Bi||rm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:On(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=sn(n)?zr:Gt.current,l=Qs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&sm(e,o,i,l),Bi=!1,d=e.memoizedState,o.state=d,ru(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||rn.current||Bi?(typeof m=="function"&&(hd(e,n,m,i),_=e.memoizedState),(u=Bi||rm(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){T_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kp(e,n,!1),Ci(t,e,s);i=e.stateNode,GS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function A_(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),bh(t,e.containerInfo)}function mm(t,e,n,i,r){return Js(),xh(r),e.flags|=256,Xt(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=_d,t):Ih(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&xh(i),Ks(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(se(422))),ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zu({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ks(e,t.child,null,o),e.child.memoizedState=xd(o),e.memoizedState=_d,s);if((e.mode&1)===0)return ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Vc(s,i,void 0),ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=At,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),$n(i,t,r,-1))}return Uh(),i=Vc(Error(se(421))),ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Zi(r.nextSibling),hn=e,st=!0,Un=null,t!==null&&(wn[Mn++]=_i,wn[Mn++]=xi,wn[Mn++]=Nr,_i=t.id,xi=t.overflow,Nr=e),e=Ih(e,i.children),e.flags|=4096,e)}function gm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=at.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gm(t,n,e);else if(t.tag===19)gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&su(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:A_(e),Js();break;case 5:i_(e);break;case 1:sn(e.type)&&Kl(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?P_(t,e,n):(tt(at,at.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return L_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,C_(t,e,n)}return Ci(t,e,n)}var R_,yd,D_,I_;R_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};D_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(si.current);var s=null;switch(n){case"input":r=Gf(t,r),i=Gf(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=$f(t,r),i=$f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}Xf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $S(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return sn(e.type)&&Jl(),Nt(e),null;case 3:return i=e.stateNode,eo(),it(rn),it(Gt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(Ad(Un),Un=null))),yd(t,e),Nt(e),null;case 5:Ch(e);var r=Er(da.current);if(n=e.type,t!==null&&e.stateNode!=null)D_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Nt(e),null}if(t=Er(si.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[ca]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)nt(Oo[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":bp(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Tp(i,s),nt("invalid",i)}Xf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":za(i),Cp(i,s,!0);break;case"textarea":za(i),Ap(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ov(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[ca]=i,R_(t,e,!1,!1),e.stateNode=t;e:{switch(o=qf(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)nt(Oo[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":bp(t,i),r=Gf(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Tp(t,i),r=$f(t,i),nt("invalid",t);break;default:r=i}Xf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&av(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&ih(t,s,l,o))}switch(n){case"input":za(t),Cp(t,i,!1);break;case"textarea":za(t),Ap(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Er(da.current),Er(si.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Nt(e),null;case 13:if(it(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&dn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Zv(),Js(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ti]=e}else Js(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Un!==null&&(Ad(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(at.current&1)!==0?Mt===0&&(Mt=3):Uh())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return eo(),yd(t,e),t===null&&la(e.stateNode.containerInfo),Nt(e),null;case 10:return wh(e.type._context),Nt(e),null;case 17:return sn(e.type)&&Jl(),Nt(e),null;case 19:if(it(at),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>no&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=su(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Nt(e),null}else 2*vt()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(cn&1073741824)!==0&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function jS(t,e){switch(_h(e),e.tag){case 1:return sn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),it(rn),it(Gt),Th(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(it(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(at),null;case 4:return eo(),null;case 10:return wh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Xa=!1,Bt=!1,XS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){pt(t,e,i)}}var vm=!1;function qS(t,e){if(rd=ql,t=Ov(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},ql=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:On(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=vm,vm=!1,_}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k_(t){var e=t.alternate;e!==null&&(t.alternate=null,k_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ca],delete e[ld],delete e[LS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z_(t){return t.tag===5||t.tag===3||t.tag===4}function _m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Lt=null,Fn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)N_(t,e,n),n=n.sibling}function N_(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:Bt||Is(n,e);case 6:var i=Lt,r=Fn;Lt=null,Ri(t,e,n),Lt=i,Fn=r,Lt!==null&&(Fn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Fn?(t=Lt,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),sa(t)):zc(Lt,n.stateNode));break;case 4:i=Lt,r=Fn,Lt=n.stateNode.containerInfo,Fn=!0,Ri(t,e,n),Lt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Sd(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Bt&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ri(t,e,n),Bt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(i){var r=iw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Fn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Lt===null)throw Error(se(160));N_(s,o,r),Lt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}function O_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Jn(t),i&4){try{qo(3,t,t.return),Iu(3,t)}catch(h){pt(t,t.return,h)}try{qo(5,t,t.return)}catch(h){pt(t,t.return,h)}}break;case 1:Dn(e,t),Jn(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(Dn(e,t),Jn(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(h){pt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rv(r,s),qf(a,o);var u=qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?uv(r,f):c==="dangerouslySetInnerHTML"?av(r,f):c==="children"?ta(r,f):ih(r,c,f,u)}switch(a){case"input":Hf(r,s);break;case"textarea":sv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(h){pt(t,t.return,h)}}break;case 6:if(Dn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){pt(t,t.return,h)}}break;case 3:if(Dn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(h){pt(t,t.return,h)}break;case 4:Dn(e,t),Jn(t);break;case 13:Dn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=vt())),i&4&&xm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||c,Dn(e,t),Bt=u):Dn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(ve=t,c=t.child;c!==null;){for(f=ve=c;ve!==null;){switch(d=ve,m=d.child,d.tag){case 0:case 11:case 14:case 15:qo(4,d,d.return);break;case 1:Is(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){pt(i,n,h)}}break;case 5:Is(d,d.return);break;case 22:if(d.memoizedState!==null){Sm(f);continue}}m!==null?(m.return=d,ve=m):Sm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lv("display",o))}catch(h){pt(t,t.return,h)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){pt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Jn(t),i&4&&xm(t);break;case 21:break;default:Dn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=_m(t);Ed(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_m(t);Md(t,a,o);break;default:throw Error(se(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){ve=t,F_(t)}function F_(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=Xa;var u=Bt;if(Xa=o,(Bt=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?wm(r):l!==null?(l.return=o,ve=l):wm(r);for(;s!==null;)ve=s,F_(s),s=s.sibling;ve=r,Xa=a,Bt=u}ym(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ve=s):ym(t)}}function ym(t){for(;ve!==null;){var e=ve;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Bt||Iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&im(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}im(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Bt||e.flags&512&&wd(e)}catch(d){pt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Sm(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function wm(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{wd(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var ZS=Math.ceil,lu=Ai.ReactCurrentDispatcher,kh=Ai.ReactCurrentOwner,Tn=Ai.ReactCurrentBatchConfig,Ve=0,At=null,yt=null,Dt=0,cn=0,ks=ur(0),Mt=0,ga=null,Fr=0,ku=0,zh=0,Yo=null,en=null,Nh=0,no=1/0,mi=null,uu=!1,bd=null,Ji=null,qa=!1,$i=null,cu=0,Zo=0,Cd=null,zl=-1,Nl=0;function qt(){return(Ve&6)!==0?vt():zl!==-1?zl:zl=vt()}function Ki(t){return(t.mode&1)===0?1:(Ve&2)!==0&&Dt!==0?Dt&-Dt:IS.transition!==null?(Nl===0&&(Nl=Sv()),Nl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t)}function $n(t,e,n,i){if(50<Zo)throw Zo=0,Cd=null,Error(se(185));Ca(t,n,i),((Ve&2)===0||t!==At)&&(t===At&&((Ve&2)===0&&(ku|=n),Mt===4&&Gi(t,Dt)),on(t,i),n===1&&Ve===0&&(e.mode&1)===0&&(no=vt()+500,Lu&&cr()))}function on(t,e){var n=t.callbackNode;Iy(t,e);var i=Xl(t,t===At?Dt:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?DS(Mm.bind(null,t)):Xv(Mm.bind(null,t)),AS(function(){(Ve&6)===0&&cr()}),n=null;else{switch(wv(i)){case 1:n=lh;break;case 4:n=xv;break;case 16:n=jl;break;case 536870912:n=yv;break;default:n=jl}n=j_(n,U_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U_(t,e){if(zl=-1,Nl=0,(Ve&6)!==0)throw Error(se(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Xl(t,t===At?Dt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=fu(t,i);else{e=i;var r=Ve;Ve|=2;var s=V_();(At!==t||Dt!==e)&&(mi=null,no=vt()+500,Pr(t,e));do try{KS();break}catch(a){B_(t,a)}while(1);Sh(),lu.current=s,Ve=r,yt!==null?e=0:(At=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(r=Kf(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=ga,Pr(t,0),Gi(t,i),on(t,vt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!QS(r)&&(e=fu(t,i),e===2&&(s=Kf(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=ga,Pr(t,0),Gi(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,en,mi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Nh+500-vt(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(gr.bind(null,t,en,mi),e);break}gr(t,en,mi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZS(i/1960))-i,10<i){t.timeoutHandle=ad(gr.bind(null,t,en,mi),i);break}gr(t,en,mi);break;case 5:gr(t,en,mi);break;default:throw Error(se(329))}}}return on(t,vt()),t.callbackNode===n?U_.bind(null,t):null}function Td(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=en,en=n,e!==null&&Ad(e)),t}function Ad(t){en===null?en=t:en.push.apply(en,t)}function QS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~zh,e&=~ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Mm(t){if((Ve&6)!==0)throw Error(se(327));Hs();var e=Xl(t,0);if((e&1)===0)return on(t,vt()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var i=Kf(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=ga,Pr(t,0),Gi(t,e),on(t,vt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,en,mi),on(t,vt()),null}function Oh(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(no=vt()+500,Lu&&cr())}}function Ur(t){$i!==null&&$i.tag===0&&(Ve&6)===0&&Hs();var e=Ve;Ve|=1;var n=Tn.transition,i=Ze;try{if(Tn.transition=null,Ze=1,t)return t()}finally{Ze=i,Tn.transition=n,Ve=e,(Ve&6)===0&&cr()}}function Fh(){cn=ks.current,it(ks)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TS(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:eo(),it(rn),it(Gt),Th();break;case 5:Ch(i);break;case 4:eo();break;case 13:it(at);break;case 19:it(at);break;case 10:wh(i.type._context);break;case 22:case 23:Fh()}n=n.return}if(At=t,yt=t=er(t.current,null),Dt=cn=e,Mt=0,ga=null,zh=ku=Fr=0,en=Yo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function B_(t,e){do{var n=yt;try{if(Sh(),Dl.current=au,ou){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ou=!1}if(Or=0,Tt=wt=lt=null,Xo=!1,ha=0,kh.current=null,n===null||n.return===null){Mt=1,ga=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=cm(o);if(m!==null){m.flags&=-257,fm(m,o,a,s,e),m.mode&1&&um(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){um(s,u,e),Uh();break e}l=Error(se(426))}}else if(st&&a.mode&1){var p=cm(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),fm(p,o,a,s,e),xh(to(l,a));break e}}s=l=to(l,a),Mt!==4&&(Mt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=M_(s,l,e);nm(s,g);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ji===null||!Ji.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=E_(s,a,e);nm(s,S);break e}}s=s.return}while(s!==null)}H_(n)}catch(w){e=w,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(1)}function V_(){var t=lu.current;return lu.current=au,t===null?au:t}function Uh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),At===null||(Fr&268435455)===0&&(ku&268435455)===0||Gi(At,Dt)}function fu(t,e){var n=Ve;Ve|=2;var i=V_();(At!==t||Dt!==e)&&(mi=null,Pr(t,e));do try{JS();break}catch(r){B_(t,r)}while(1);if(Sh(),Ve=n,lu.current=i,yt!==null)throw Error(se(261));return At=null,Dt=0,Mt}function JS(){for(;yt!==null;)G_(yt)}function KS(){for(;yt!==null&&!Ey();)G_(yt)}function G_(t){var e=$_(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?H_(t):yt=e,kh.current=null}function H_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=$S(n,e,cn),n!==null){yt=n;return}}else{if(n=jS(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function gr(t,e,n){var i=Ze,r=Tn.transition;try{Tn.transition=null,Ze=1,ew(t,e,n,i)}finally{Tn.transition=r,Ze=i}return null}function ew(t,e,n,i){do Hs();while($i!==null);if((Ve&6)!==0)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ky(t,s),t===At&&(yt=At=null,Dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qa||(qa=!0,j_(jl,function(){return Hs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Tn.transition,Tn.transition=null;var o=Ze;Ze=1;var a=Ve;Ve|=4,kh.current=null,qS(t,n),O_(n,t),yS(sd),ql=!!rd,sd=rd=null,t.current=n,YS(n),by(),Ve=a,Ze=o,Tn.transition=s}else t.current=n;if(qa&&(qa=!1,$i=t,cu=r),s=t.pendingLanes,s===0&&(Ji=null),Ay(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uu)throw uu=!1,t=bd,bd=null,t;return(cu&1)!==0&&t.tag!==0&&Hs(),s=t.pendingLanes,(s&1)!==0?t===Cd?Zo++:(Zo=0,Cd=t):Zo=0,cr(),null}function Hs(){if($i!==null){var t=wv(cu),e=Tn.transition,n=Ze;try{if(Tn.transition=null,Ze=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,cu=0,(Ve&6)!==0)throw Error(se(331));var r=Ve;for(Ve|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if((ve.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:qo(8,c,s)}var f=c.child;if(f!==null)f.return=c,ve=f;else for(;ve!==null;){c=ve;var d=c.sibling,m=c.return;if(k_(c),c===u){ve=null;break}if(d!==null){d.return=m,ve=d;break}ve=m}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}ve=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ve=g;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ve=x;else e:for(o=v;ve!==null;){if(a=ve,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Iu(9,a)}}catch(w){pt(a,a.return,w)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(Ve=r,cr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(bu,t)}catch{}i=!0}return i}finally{Ze=n,Tn.transition=e}}return!1}function Em(t,e,n){e=to(n,e),e=M_(t,e,1),t=Qi(t,e,1),e=qt(),t!==null&&(Ca(t,1,e),on(t,e))}function pt(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=to(n,t),t=E_(e,t,1),e=Qi(e,t,1),t=qt(),e!==null&&(Ca(e,1,t),on(e,t));break}}e=e.return}}function tw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Dt&n)===n&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>vt()-Nh?Pr(t,0):zh|=n),on(t,e)}function W_(t,e){e===0&&((t.mode&1)===0?e=1:(e=Fa,Fa<<=1,(Fa&130023424)===0&&(Fa=4194304)));var n=qt();t=bi(t,e),t!==null&&(Ca(t,e,n),on(t,n))}function nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function iw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),W_(t,n)}var $_;$_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return nn=!1,WS(t,e,n);nn=(t.flags&131072)!==0}else nn=!1,st&&(e.flags&1048576)!==0&&qv(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=Qs(e,Gt.current);Gs(e,n),r=Ph(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=Ru,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,st&&s&&vh(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sw(i),t=On(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=pm(null,e,i,t,n);break e;case 11:e=dm(null,e,i,t,n);break e;case 14:e=hm(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),pm(t,e,i,r,n);case 3:e:{if(A_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jv(t,e),ru(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(se(423)),e),e=mm(t,e,i,n,r);break e}else if(i!==r){r=to(Error(se(424)),e),e=mm(t,e,i,n,r);break e}else for(dn=Zi(e.stateNode.containerInfo.firstChild),hn=e,st=!0,Un=null,n=n_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Ci(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),T_(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return P_(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),dm(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(nu,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!rn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=An(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),hm(t,e,i,r,n);case 15:return b_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),kl(t,e),e.tag=1,sn(i)?(t=!0,Kl(e)):t=!1,Gs(e,n),e_(e,i,r),pd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return L_(t,e,n);case 22:return C_(t,e,n)}throw Error(se(156,e.tag))};function j_(t,e){return _v(t,e)}function rw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new rw(t,e,n,i)}function Bh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sw(t){if(typeof t=="function")return Bh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Lr(n.children,r,s,e);case rh:o=8,r|=8;break;case Ff:return t=bn(12,n,e,r|2),t.elementType=Ff,t.lanes=s,t;case Uf:return t=bn(13,n,e,r),t.elementType=Uf,t.lanes=s,t;case Bf:return t=bn(19,n,e,r),t.elementType=Bf,t.lanes=s,t;case tv:return zu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case ev:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case Ui:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function zu(t,e,n,i){return t=bn(22,t,i,e),t.elementType=tv,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ow(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,s,o,a,l){return t=new ow(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function aw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function X_(t){if(!t)return sr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(sn(n))return jv(t,n,e)}return e}function q_(t,e,n,i,r,s,o,a,l){return t=Vh(n,i,!0,t,r,s,o,a,l),t.context=X_(null),n=t.current,i=qt(),r=Ki(n),s=Si(i,r),s.callback=e!=null?e:null,Qi(n,s,r),t.current.lanes=r,Ca(t,r,i),on(t,i),t}function Nu(t,e,n,i){var r=e.current,s=qt(),o=Ki(r);return n=X_(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&($n(t,r,o,s),Rl(t,r,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function lw(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}Ou.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Nu(t,e,null,null)};Ou.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Nu(null,t,null,null)}),e[Ei]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&Tv(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function uw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=du(o);s.call(u)}}var o=q_(e,i,t,0,null,!1,!1,"",Cm);return t._reactRootContainer=o,t[Ei]=o.current,la(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=du(l);a.call(u)}}var l=Vh(t,0,!1,null,null,!1,!1,"",Cm);return t._reactRootContainer=l,t[Ei]=l.current,la(t.nodeType===8?t.parentNode:t),Ur(function(){Nu(e,l,n,i)}),l}function Uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=du(o);a.call(l)}}Nu(e,o,t,r)}else o=uw(n,e,t,r,i);return du(o)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(uh(e,n|1),on(e,vt()),(Ve&6)===0&&(no=vt()+500,cr()))}break;case 13:Ur(function(){var i=bi(t,1);if(i!==null){var r=qt();$n(i,t,1,r)}}),Gh(t,1)}};ch=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=qt();$n(e,t,134217728,n)}Gh(t,134217728)}};Ev=function(t){if(t.tag===13){var e=Ki(t),n=bi(t,e);if(n!==null){var i=qt();$n(n,t,e,i)}Gh(t,e)}};bv=function(){return Ze};Cv=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Zf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pu(i);if(!r)throw Error(se(90));iv(i),Hf(i,r)}}}break;case"textarea":sv(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};dv=Oh;hv=Ur;var cw={usingClientEntryPoint:!1,Events:[Aa,As,Pu,cv,fv,Oh]},To={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fw={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gv(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{bu=Ya.inject(fw),ri=Ya}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(se(200));return aw(t,e,null,n)};gn.createRoot=function(t,e){if(!Wh(t))throw Error(se(299));var n=!1,i="",r=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,la(t.nodeType===8?t.parentNode:t),new Hh(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=gv(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Ur(t)};gn.hydrate=function(t,e,n){if(!Fu(e))throw Error(se(200));return Uu(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q_(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ei]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ou(e)};gn.render=function(t,e,n){if(!Fu(e))throw Error(se(200));return Uu(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(se(40));return t._reactRootContainer?(Ur(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};gn.unstable_batchedUpdates=Oh;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Uu(t,e,n,!1,i)};gn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=gn})(eh);function dw(t){t()}let Z_=dw;const hw=t=>Z_=t,pw=()=>Z_,or=ai.createContext(null);function Q_(){return Me.exports.useContext(or)}const mw=()=>{throw new Error("uSES not initialized!")};let J_=mw;const gw=t=>{J_=t},vw=(t,e)=>t===e;function _w(t=or){const e=t===or?Q_:()=>Me.exports.useContext(t);return function(i,r=vw){const{store:s,subscription:o,getServerState:a}=e(),l=J_(o.addNestedSub,s.getState,a||s.getState,i,r);return Me.exports.useDebugValue(l),l}}const xw=_w();function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hu.apply(this,arguments)}function yw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var K_={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=typeof Symbol=="function"&&Symbol.for,$h=Pt?Symbol.for("react.element"):60103,jh=Pt?Symbol.for("react.portal"):60106,Bu=Pt?Symbol.for("react.fragment"):60107,Vu=Pt?Symbol.for("react.strict_mode"):60108,Gu=Pt?Symbol.for("react.profiler"):60114,Hu=Pt?Symbol.for("react.provider"):60109,Wu=Pt?Symbol.for("react.context"):60110,Xh=Pt?Symbol.for("react.async_mode"):60111,$u=Pt?Symbol.for("react.concurrent_mode"):60111,ju=Pt?Symbol.for("react.forward_ref"):60112,Xu=Pt?Symbol.for("react.suspense"):60113,Sw=Pt?Symbol.for("react.suspense_list"):60120,qu=Pt?Symbol.for("react.memo"):60115,Yu=Pt?Symbol.for("react.lazy"):60116,ww=Pt?Symbol.for("react.block"):60121,Mw=Pt?Symbol.for("react.fundamental"):60117,Ew=Pt?Symbol.for("react.responder"):60118,bw=Pt?Symbol.for("react.scope"):60119;function _n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case $h:switch(t=t.type,t){case Xh:case $u:case Bu:case Gu:case Vu:case Xu:return t;default:switch(t=t&&t.$$typeof,t){case Wu:case ju:case Yu:case qu:case Hu:return t;default:return e}}case jh:return e}}}function e1(t){return _n(t)===$u}Qe.AsyncMode=Xh;Qe.ConcurrentMode=$u;Qe.ContextConsumer=Wu;Qe.ContextProvider=Hu;Qe.Element=$h;Qe.ForwardRef=ju;Qe.Fragment=Bu;Qe.Lazy=Yu;Qe.Memo=qu;Qe.Portal=jh;Qe.Profiler=Gu;Qe.StrictMode=Vu;Qe.Suspense=Xu;Qe.isAsyncMode=function(t){return e1(t)||_n(t)===Xh};Qe.isConcurrentMode=e1;Qe.isContextConsumer=function(t){return _n(t)===Wu};Qe.isContextProvider=function(t){return _n(t)===Hu};Qe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===$h};Qe.isForwardRef=function(t){return _n(t)===ju};Qe.isFragment=function(t){return _n(t)===Bu};Qe.isLazy=function(t){return _n(t)===Yu};Qe.isMemo=function(t){return _n(t)===qu};Qe.isPortal=function(t){return _n(t)===jh};Qe.isProfiler=function(t){return _n(t)===Gu};Qe.isStrictMode=function(t){return _n(t)===Vu};Qe.isSuspense=function(t){return _n(t)===Xu};Qe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bu||t===$u||t===Gu||t===Vu||t===Xu||t===Sw||typeof t=="object"&&t!==null&&(t.$$typeof===Yu||t.$$typeof===qu||t.$$typeof===Hu||t.$$typeof===Wu||t.$$typeof===ju||t.$$typeof===Mw||t.$$typeof===Ew||t.$$typeof===bw||t.$$typeof===ww)};Qe.typeOf=_n;(function(t){t.exports=Qe})(K_);var qh=K_.exports,Cw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Aw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},t1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yh={};Yh[qh.ForwardRef]=Aw;Yh[qh.Memo]=t1;function Tm(t){return qh.isMemo(t)?t1:Yh[t.$$typeof]||Cw}var Pw=Object.defineProperty,Lw=Object.getOwnPropertyNames,Am=Object.getOwnPropertySymbols,Rw=Object.getOwnPropertyDescriptor,Dw=Object.getPrototypeOf,Pm=Object.prototype;function n1(t,e,n){if(typeof e!="string"){if(Pm){var i=Dw(e);i&&i!==Pm&&n1(t,i,n)}var r=Lw(e);Am&&(r=r.concat(Am(e)));for(var s=Tm(t),o=Tm(e),a=0;a<r.length;++a){var l=r[a];if(!Tw[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=Rw(e,l);try{Pw(t,l,u)}catch{}}}}return t}var Iw=n1,Zh={exports:{}},Je={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=Symbol.for("react.element"),Jh=Symbol.for("react.portal"),Zu=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),ec=Symbol.for("react.context"),kw=Symbol.for("react.server_context"),tc=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),sc=Symbol.for("react.lazy"),zw=Symbol.for("react.offscreen"),i1;i1=Symbol.for("react.module.reference");function Rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qh:switch(t=t.type,t){case Zu:case Ju:case Qu:case nc:case ic:return t;default:switch(t=t&&t.$$typeof,t){case kw:case ec:case tc:case sc:case rc:case Ku:return t;default:return e}}case Jh:return e}}}Je.ContextConsumer=ec;Je.ContextProvider=Ku;Je.Element=Qh;Je.ForwardRef=tc;Je.Fragment=Zu;Je.Lazy=sc;Je.Memo=rc;Je.Portal=Jh;Je.Profiler=Ju;Je.StrictMode=Qu;Je.Suspense=nc;Je.SuspenseList=ic;Je.isAsyncMode=function(){return!1};Je.isConcurrentMode=function(){return!1};Je.isContextConsumer=function(t){return Rn(t)===ec};Je.isContextProvider=function(t){return Rn(t)===Ku};Je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qh};Je.isForwardRef=function(t){return Rn(t)===tc};Je.isFragment=function(t){return Rn(t)===Zu};Je.isLazy=function(t){return Rn(t)===sc};Je.isMemo=function(t){return Rn(t)===rc};Je.isPortal=function(t){return Rn(t)===Jh};Je.isProfiler=function(t){return Rn(t)===Ju};Je.isStrictMode=function(t){return Rn(t)===Qu};Je.isSuspense=function(t){return Rn(t)===nc};Je.isSuspenseList=function(t){return Rn(t)===ic};Je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Zu||t===Ju||t===Qu||t===nc||t===ic||t===zw||typeof t=="object"&&t!==null&&(t.$$typeof===sc||t.$$typeof===rc||t.$$typeof===Ku||t.$$typeof===ec||t.$$typeof===tc||t.$$typeof===i1||t.getModuleId!==void 0)};Je.typeOf=Rn;(function(t){t.exports=Je})(Zh);function Nw(){const t=pw();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!r||e===null||(r=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Lm={notify(){},get:()=>[]};function Ow(t,e){let n,i=Lm;function r(f){return l(),i.subscribe(f)}function s(){i.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),i=Nw())}function u(){n&&(n(),n=void 0,i.clear(),i=Lm)}const c={addNestedSub:r,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>i};return c}const Fw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uw=Fw?Me.exports.useLayoutEffect:Me.exports.useEffect;var oc={exports:{}},ac={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=Me.exports,Vw=Symbol.for("react.element"),Gw=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Ww=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$w={key:!0,ref:!0,__self:!0,__source:!0};function r1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hw.call(e,i)&&!$w.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vw,type:t,key:s,ref:o,props:r,_owner:Ww.current}}ac.Fragment=Gw;ac.jsx=r1;ac.jsxs=r1;(function(t){t.exports=ac})(oc);const Kt=oc.exports.Fragment,Y=oc.exports.jsx,et=oc.exports.jsxs;function jw({store:t,context:e,children:n,serverState:i}){const r=Me.exports.useMemo(()=>{const a=Ow(t);return{store:t,subscription:a,getServerState:i?()=>i:void 0}},[t,i]),s=Me.exports.useMemo(()=>t.getState(),[t]);return Uw(()=>{const{subscription:a}=r;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[r,s]),Y((e||or).Provider,{value:r,children:n})}function s1(t=or){const e=t===or?Q_:()=>Me.exports.useContext(t);return function(){const{store:i}=e();return i}}const Xw=s1();function qw(t=or){const e=t===or?Xw:s1(t);return function(){return e().dispatch}}const Yw=qw();gw(X0.exports.useSyncExternalStoreWithSelector);hw(eh.exports.unstable_batchedUpdates);var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));var Rm=function(t){return t},Dm="beforeunload",Zw="hashchange",Qw="popstate";function Jw(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var y=Br(i.location.hash.substr(1)),T=y.pathname,R=T===void 0?"/":T,N=y.search,re=N===void 0?"":N,ee=y.hash,U=ee===void 0?"":ee,j=r.state||{};return[j.idx,Rm({pathname:R,search:re,hash:U,state:j.usr||null,key:j.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var y=br.Pop,T=s(),R=T[0],N=T[1];if(m.length){if(R!=null){var re=c-R;re&&(o={action:y,location:N,retry:function(){C(re*-1)}},C(re))}}else x(y)}}i.addEventListener(Qw,a),i.addEventListener(Zw,function(){var y=s(),T=y[1];$c(T)!==$c(f)&&a()});var l=br.Pop,u=s(),c=u[0],f=u[1],d=km(),m=km();c==null&&(c=0,r.replaceState(hu({},r.state,{idx:c}),""));function _(){var y=document.querySelector("base"),T="";if(y&&y.getAttribute("href")){var R=i.location.href,N=R.indexOf("#");T=N===-1?R:R.slice(0,N)}return T}function h(y){return _()+"#"+(typeof y=="string"?y:$c(y))}function p(y,T){return T===void 0&&(T=null),Rm(hu({pathname:f.pathname,hash:"",search:""},typeof y=="string"?Br(y):y,{state:T,key:Kw()}))}function g(y,T){return[{usr:y.state,key:y.key,idx:T},h(y)]}function v(y,T,R){return!m.length||(m.call({action:y,location:T,retry:R}),!1)}function x(y){l=y;var T=s();c=T[0],f=T[1],d.call({action:l,location:f})}function S(y,T){var R=br.Push,N=p(y,T);function re(){S(y,T)}if(v(R,N,re)){var ee=g(N,c+1),U=ee[0],j=ee[1];try{r.pushState(U,"",j)}catch{i.location.assign(j)}x(R)}}function w(y,T){var R=br.Replace,N=p(y,T);function re(){w(y,T)}if(v(R,N,re)){var ee=g(N,c),U=ee[0],j=ee[1];r.replaceState(U,"",j),x(R)}}function C(y){r.go(y)}var L={get action(){return l},get location(){return f},createHref:h,push:S,replace:w,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(T){return d.push(T)},block:function(T){var R=m.push(T);return m.length===1&&i.addEventListener(Dm,Im),function(){R(),m.length||i.removeEventListener(Dm,Im)}}};return L}function Im(t){t.preventDefault(),t.returnValue=""}function km(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function Kw(){return Math.random().toString(36).substr(2,8)}function $c(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Br(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const o1=Me.exports.createContext(null),Kh=Me.exports.createContext(null),ep=Me.exports.createContext({outlet:null,matches:[]});function Vr(t,e){if(!t)throw new Error(e)}function e2(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Br(e):e,r=l1(i.pathname||"/",n);if(r==null)return null;let s=a1(t);t2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=c2(s[a],r);return o}function a1(t,e,n,i){return e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i=""),t.forEach((r,s)=>{let o={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(i)||Vr(!1),o.relativePath=o.relativePath.slice(i.length));let a=Rr([i,o.relativePath]),l=n.concat(o);r.children&&r.children.length>0&&(r.index===!0&&Vr(!1),a1(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:l2(a,r.index),routesMeta:l})}),e}function t2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:u2(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const n2=/^:\w+$/,i2=3,r2=2,s2=1,o2=10,a2=-2,zm=t=>t==="*";function l2(t,e){let n=t.split("/"),i=n.length;return n.some(zm)&&(i+=a2),e&&(i+=r2),n.filter(r=>!zm(r)).reduce((r,s)=>r+(n2.test(s)?i2:s===""?s2:o2),i)}function u2(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function c2(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=f2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let f=a.route;s.push({params:i,pathname:Rr([r,c.pathname]),pathnameBase:u1(Rr([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=Rr([r,c.pathnameBase]))}return s}function f2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=d2(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=h2(a[f]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function d2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(i.push(a),"([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,e?void 0:"i"),i]}function h2(t,e){try{return decodeURIComponent(t)}catch{return t}}function p2(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Br(t):t;return{pathname:n?n.startsWith("/")?n:m2(n,e):e,search:v2(i),hash:_2(r)}}function m2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function g2(t,e,n){let i=typeof t=="string"?Br(t):t,r=t===""||i.pathname===""?"/":i.pathname,s;if(r==null)s=n;else{let a=e.length-1;if(r.startsWith("..")){let l=r.split("/");for(;l[0]==="..";)l.shift(),a-=1;i.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=p2(i,s);return r&&r!=="/"&&r.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function l1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),u1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),v2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lc(){return Me.exports.useContext(Kh)!=null}function c1(){return lc()||Vr(!1),Me.exports.useContext(Kh).location}function tp(){lc()||Vr(!1);let{basename:t,navigator:e}=Me.exports.useContext(o1),{matches:n}=Me.exports.useContext(ep),{pathname:i}=c1(),r=JSON.stringify(n.map(a=>a.pathnameBase)),s=Me.exports.useRef(!1);return Me.exports.useEffect(()=>{s.current=!0}),Me.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=g2(a,JSON.parse(r),i);t!=="/"&&(u.pathname=Rr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,r,i])}function x2(t,e){lc()||Vr(!1);let{matches:n}=Me.exports.useContext(ep),i=n[n.length-1],r=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=c1(),a;if(e){var l;let d=typeof e=="string"?Br(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Vr(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",f=e2(t,{pathname:c});return y2(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},r,d.params),pathname:Rr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Rr([s,d.pathnameBase])})),n)}function y2(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,i,r)=>Me.exports.createElement(ep.Provider,{children:i.route.element!==void 0?i.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,r+1))}}),null)}function S2(t){let{basename:e="/",children:n=null,location:i,navigationType:r=br.Pop,navigator:s,static:o=!1}=t;lc()&&Vr(!1);let a=u1(e),l=Me.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Br(i));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=i,_=Me.exports.useMemo(()=>{let h=l1(u,a);return h==null?null:{pathname:h,search:c,hash:f,state:d,key:m}},[a,u,c,f,d,m]);return _==null?null:Me.exports.createElement(o1.Provider,{value:l},Me.exports.createElement(Kh.Provider,{children:n,value:{location:_,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w2(t){let{basename:e,children:n,window:i}=t,r=Me.exports.useRef();r.current==null&&(r.current=Jw({window:i}));let s=r.current,[o,a]=Me.exports.useState({action:s.action,location:s.location});return Me.exports.useLayoutEffect(()=>s.listen(a),[s]),Me.exports.createElement(S2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const M2=()=>Y("div",{children:"Course"}),E2=()=>Y("div",{children:"Document"}),mp=class{constructor(){E(this,"type");E(this,"nativeEvent");E(this,"target");E(this,"currentTarget");E(this,"_stoped");E(this,"touchId");E(this,"keyCode");E(this,"delta")}setTo(e,n,i){return this.type=e,this.currentTarget=n,this.target=i,this}stopPropagation(){this._stoped=!0}get altKey(){return this.nativeEvent.altKey}get ctrlKey(){return this.nativeEvent.ctrlKey}get shiftKey(){return this.nativeEvent.shiftKey}get charCode(){return this.nativeEvent.charCode}get keyLocation(){return this.nativeEvent.location||this.nativeEvent.keyLocation}};let pe=mp;E(pe,"EMPTY",new mp),E(pe,"MOUSE_DOWN","mousedown"),E(pe,"MOUSE_UP","mouseup"),E(pe,"CLICK","click"),E(pe,"RIGHT_MOUSE_DOWN","rightmousedown"),E(pe,"RIGHT_MOUSE_UP","rightmouseup"),E(pe,"RIGHT_CLICK","rightclick"),E(pe,"MOUSE_MOVE","mousemove"),E(pe,"MOUSE_OVER","mouseover"),E(pe,"MOUSE_OUT","mouseout"),E(pe,"MOUSE_WHEEL","mousewheel"),E(pe,"ROLL_OVER","mouseover"),E(pe,"ROLL_OUT","mouseout"),E(pe,"DOUBLE_CLICK","doubleclick"),E(pe,"CHANGE","change"),E(pe,"CHANGED","changed"),E(pe,"RESIZE","resize"),E(pe,"ADDED","added"),E(pe,"REMOVED","removed"),E(pe,"DISPLAY","display"),E(pe,"UNDISPLAY","undisplay"),E(pe,"ERROR","error"),E(pe,"COMPLETE","complete"),E(pe,"LOADED","loaded"),E(pe,"READY","ready"),E(pe,"PROGRESS","progress"),E(pe,"INPUT","input"),E(pe,"RENDER","render"),E(pe,"OPEN","open"),E(pe,"MESSAGE","message"),E(pe,"CLOSE","close"),E(pe,"KEY_DOWN","keydown"),E(pe,"KEY_PRESS","keypress"),E(pe,"KEY_UP","keyup"),E(pe,"FRAME","enterframe"),E(pe,"DRAG_START","dragstart"),E(pe,"DRAG_MOVE","dragmove"),E(pe,"DRAG_END","dragend"),E(pe,"ENTER","enter"),E(pe,"SELECT","select"),E(pe,"BLUR","blur"),E(pe,"FOCUS","focus"),E(pe,"VISIBILITY_CHANGE","visibilitychange"),E(pe,"FOCUS_CHANGE","focuschange"),E(pe,"PLAYED","played"),E(pe,"PAUSED","paused"),E(pe,"STOPPED","stopped"),E(pe,"START","start"),E(pe,"END","end"),E(pe,"COMPONENT_ADDED","componentadded"),E(pe,"COMPONENT_REMOVED","componentremoved"),E(pe,"RELEASED","released"),E(pe,"LINK","link"),E(pe,"LABEL","label"),E(pe,"FULL_SCREEN_CHANGE","fullscreenchange"),E(pe,"DEVICE_LOST","devicelost"),E(pe,"TRANSFORM_CHANGED","transformchanged"),E(pe,"ANIMATION_CHANGED","animationchanged"),E(pe,"TRAIL_FILTER_CHANGE","trailfilterchange"),E(pe,"TRIGGER_ENTER","triggerenter"),E(pe,"TRIGGER_STAY","triggerstay"),E(pe,"TRIGGER_EXIT","triggerexit");class ie{}E(ie,"NUMBER_0",48),E(ie,"NUMBER_1",49),E(ie,"NUMBER_2",50),E(ie,"NUMBER_3",51),E(ie,"NUMBER_4",52),E(ie,"NUMBER_5",53),E(ie,"NUMBER_6",54),E(ie,"NUMBER_7",55),E(ie,"NUMBER_8",56),E(ie,"NUMBER_9",57),E(ie,"A",65),E(ie,"B",66),E(ie,"C",67),E(ie,"D",68),E(ie,"E",69),E(ie,"F",70),E(ie,"G",71),E(ie,"H",72),E(ie,"I",73),E(ie,"J",74),E(ie,"K",75),E(ie,"L",76),E(ie,"M",77),E(ie,"N",78),E(ie,"O",79),E(ie,"P",80),E(ie,"Q",81),E(ie,"R",82),E(ie,"S",83),E(ie,"T",84),E(ie,"U",85),E(ie,"V",86),E(ie,"W",87),E(ie,"X",88),E(ie,"Y",89),E(ie,"Z",90),E(ie,"F1",112),E(ie,"F2",113),E(ie,"F3",114),E(ie,"F4",115),E(ie,"F5",116),E(ie,"F6",117),E(ie,"F7",118),E(ie,"F8",119),E(ie,"F9",120),E(ie,"F10",121),E(ie,"F11",122),E(ie,"F12",123),E(ie,"F13",124),E(ie,"F14",125),E(ie,"F15",126),E(ie,"NUMPAD",21),E(ie,"NUMPAD_0",96),E(ie,"NUMPAD_1",97),E(ie,"NUMPAD_2",98),E(ie,"NUMPAD_3",99),E(ie,"NUMPAD_4",100),E(ie,"NUMPAD_5",101),E(ie,"NUMPAD_6",102),E(ie,"NUMPAD_7",103),E(ie,"NUMPAD_8",104),E(ie,"NUMPAD_9",105),E(ie,"NUMPAD_ADD",107),E(ie,"NUMPAD_DECIMAL",110),E(ie,"NUMPAD_DIVIDE",111),E(ie,"NUMPAD_ENTER",108),E(ie,"NUMPAD_MULTIPLY",106),E(ie,"NUMPAD_SUBTRACT",109),E(ie,"SEMICOLON",186),E(ie,"EQUAL",187),E(ie,"COMMA",188),E(ie,"MINUS",189),E(ie,"PERIOD",190),E(ie,"SLASH",191),E(ie,"BACKQUOTE",192),E(ie,"LEFTBRACKET",219),E(ie,"BACKSLASH",220),E(ie,"RIGHTBRACKET",221),E(ie,"QUOTE",222),E(ie,"ALTERNATE",18),E(ie,"BACKSPACE",8),E(ie,"CAPS_LOCK",20),E(ie,"COMMAND",15),E(ie,"CONTROL",17),E(ie,"DELETE",46),E(ie,"ENTER",13),E(ie,"ESCAPE",27),E(ie,"PAGE_UP",33),E(ie,"PAGE_DOWN",34),E(ie,"END",35),E(ie,"HOME",36),E(ie,"LEFT",37),E(ie,"UP",38),E(ie,"RIGHT",39),E(ie,"DOWN",40),E(ie,"SHIFT",16),E(ie,"SPACE",32),E(ie,"TAB",9),E(ie,"INSERT",45);class b2{startUp(){console.log("test module start up."),this.addEvent()}exit(){console.log("test module exit."),this.dispose(),this.removeEvent()}dispose(){}addEvent(){Rt.ED.on(pe.KEY_DOWN,this,this.onkeydown)}removeEvent(){Rt.ED.off(pe.KEY_DOWN,this,this.onkeydown)}onkeydown(e){switch(e.keyCode){case ie.ESCAPE:console.log("press escape key");break}}}class C2{startUp(){}dispose(){}}class T2{startUp(){}dispose(){}render(){let e=Rt.MGR.scene,n=e.main.render,i=e.main.css2dRender,r=e.main.camera,s=e.main.scene;n&&n.render(s,r),i&&i.render(s,r)}}var Gn=(t=>(t.CAD_SERVICE="service.cad",t.SCHEME_SERVICE="service.scheme",t.SCENE_SERVICE="service.scene",t.MESH_SERVICE="service.mesh",t))(Gn||{}),ht=(t=>(t[t.NONE=-1]="NONE",t[t.ROTATE=0]="ROTATE",t[t.ZOOM=1]="ZOOM",t[t.PAN=2]="PAN",t[t.TOUCH_ROTATE=3]="TOUCH_ROTATE",t[t.TOUCH_ZOOM_PAN=4]="TOUCH_ZOOM_PAN",t))(ht||{}),Pd=(t=>(t[t.COLOR_PIURITY_DEPTH=2369840]="COLOR_PIURITY_DEPTH",t[t.COLOR_PIURITY_LIGHT=13816790]="COLOR_PIURITY_LIGHT",t))(Pd||{});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="143",jc={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},A2=0,Nm=1,P2=2,f1=1,L2=2,Fo=3,va=0,jn=1,Gr=2,R2=1,tr=0,Ws=1,Om=2,Fm=3,Um=4,D2=5,Ss=100,I2=101,k2=102,Bm=103,Vm=104,z2=200,N2=201,O2=202,F2=203,d1=204,h1=205,U2=206,B2=207,V2=208,G2=209,H2=210,W2=0,$2=1,j2=2,Ld=3,X2=4,q2=5,Y2=6,Z2=7,p1=0,Q2=1,J2=2,wi=0,K2=1,eM=2,tM=3,nM=4,iM=5,m1=300,io=301,ro=302,Rd=303,Dd=304,uc=306,Id=1e3,Bn=1001,kd=1002,tn=1003,Gm=1004,Hm=1005,En=1006,rM=1007,cc=1008,Hr=1009,sM=1010,oM=1011,g1=1012,aM=1013,Cr=1014,Tr=1015,_a=1016,lM=1017,uM=1018,$s=1020,cM=1021,fM=1022,ii=1023,dM=1024,hM=1025,Dr=1026,so=1027,pM=1028,mM=1029,gM=1030,vM=1031,_M=1033,Xc=33776,qc=33777,Yc=33778,Zc=33779,Wm=35840,$m=35841,jm=35842,Xm=35843,xM=36196,qm=37492,Ym=37496,Zm=37808,Qm=37809,Jm=37810,Km=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,ug=37821,cg=36492,Wr=3e3,ot=3001,yM=3200,SM=3201,wM=0,MM=1,gi="srgb",Ar="srgb-linear",Qc=7680,EM=519,zd=35044,fg="300 es",Nd=1035;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,dg=180/Math.PI;function nr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function fn(t,e,n){return Math.max(e,Math.min(n,t))}function bM(t,e){return(t%e+e)%e}function Kc(t,e,n){return(1-n)*t+n*e}function hg(t){return(t&t-1)===0&&t!==0}function Od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(){Cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],p=r[3],g=r[6],v=r[1],x=r[4],S=r[7],w=r[2],C=r[5],L=r[8];return s[0]=o*h+a*v+l*w,s[3]=o*p+a*x+l*C,s[6]=o*g+a*S+l*L,s[1]=u*h+c*v+f*w,s[4]=u*p+c*x+f*C,s[7]=u*g+c*S+f*L,s[2]=d*h+m*v+_*w,s[5]=d*p+m*x+_*C,s[8]=d*g+m*S+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=m*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function v1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ef={[gi]:{[Ar]:Ir},[Ar]:{[gi]:Fl}},In={legacyMode:!0,get workingColorSpace(){return Ar},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(ef[e]&&ef[e][n]!==void 0){const i=ef[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},_1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},kn={h:0,s:0,l:0},Za={h:0,s:0,l:0};function tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Qa(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ar){return this.r=e,this.g=n,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ar){if(e=bM(e,1),n=fn(n,0,1),i=fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tf(o,s,e+1/3),this.g=tf(o,s,e),this.b=tf(o,s,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,n=gi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,In.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,In.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,In.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,In.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=gi){const i=_1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Fl(e.r),this.g=Fl(e.g),this.b=Fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return In.fromWorkingColorSpace(Qa(this,St),e),fn(St.r*255,0,255)<<16^fn(St.g*255,0,255)<<8^fn(St.b*255,0,255)<<0}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ar){In.fromWorkingColorSpace(Qa(this,St),n);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ar){return In.fromWorkingColorSpace(Qa(this,St),n),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=gi){return In.fromWorkingColorSpace(Qa(this,St),e),e!==gi?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(kn),kn.h+=e,kn.s+=n,kn.l+=i,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kn),e.getHSL(Za);const i=Kc(kn.h,Za.h,n),r=Kc(kn.s,Za.s,n),s=Kc(kn.l,Za.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=_1;let ns;class x1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=xa("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class y1{constructor(e=null){this.isSource=!0,this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?x1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CM=0;class Ln extends ho{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,i=Bn,r=Bn,s=En,o=cc,a=ii,l=Hr,u=1,c=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=nr(),this.name="",this.source=new y1(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=m1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],_=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(m+1)/2,w=(g+1)/2,C=(c+d)/4,L=(f+h)/4,y=(_+p)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-h)/v,this.z=(d-c)/v,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $r extends ho{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:En,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new y1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class S1 extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TM extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=h;return}if(f!==h||l!==d||u!==m||c!==_){let p=1-a;const g=l*d+u*m+c*_+f*h,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,g*v);p=Math.sin(p*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*p+d*S,u=u*p+m*S,c=c*p+_*S,f=f*p+h*S,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*m-u*d,e[n+1]=l*_+c*d+u*f-a*m,e[n+2]=u*_+c*m+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"YXZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"ZXY":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"ZYX":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"YZX":this._x=d*c*f+u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f-d*m*_;break;case"XZY":this._x=d*c*f-u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rf=new D,pg=new po;class La{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)dr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(dr)}else i.boundingBox===null&&i.computeBoundingBox(),sf.copy(i.boundingBox),sf.applyMatrix4(e.matrixWorld),this.union(sf);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ja.subVectors(this.max,Ao),is.subVectors(e.a,Ao),rs.subVectors(e.b,Ao),ss.subVectors(e.c,Ao),Di.subVectors(rs,is),Ii.subVectors(ss,rs),hr.subVectors(is,ss);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!of(n,is,rs,ss,Ja)||(n=[1,0,0,0,1,0,0,0,1],!of(n,is,rs,ss,Ja))?!1:(Ka.crossVectors(Di,Ii),n=[Ka.x,Ka.y,Ka.z],of(n,is,rs,ss,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new D,new D,new D,new D,new D,new D,new D,new D],dr=new D,sf=new La,is=new D,rs=new D,ss=new D,Di=new D,Ii=new D,hr=new D,Ao=new D,Ja=new D,Ka=new D,pr=new D;function of(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),c=i.dot(pr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const AM=new La,mg=new D,el=new D,af=new D;class fc{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){af.subVectors(e,this.center);const n=af.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(af.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?el.set(0,0,1).multiplyScalar(e.radius):el.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(mg.copy(e.center).add(el)),this.expandByPoint(mg.copy(e.center).sub(el)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new D,lf=new D,tl=new D,ki=new D,uf=new D,nl=new D,cf=new D;class w1{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.direction).multiplyScalar(n).add(this.origin),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lf.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(lf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),a=ki.dot(this.direction),l=-ki.dot(tl),u=ki.lengthSq(),c=Math.abs(1-o*o);let f,d,m,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const h=1/c;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(tl).multiplyScalar(d).add(lf),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){uf.subVectors(n,e),nl.subVectors(i,e),cf.crossVectors(uf,nl);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(ki,nl));if(l<0)return null;const u=a*this.direction.dot(uf.cross(ki));if(u<0||l+u>o)return null;const c=-a*ki.dot(cf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,m,_,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,_=a*c,h=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=d-h*u,n[9]=-a*l,n[2]=h-d*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,_=u*c,h=u*f;n[0]=d+h*a,n[4]=_*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=m*a-_,n[6]=h+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,_=u*c,h=u*f;n[0]=d-h*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*c,n[9]=h-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,_=a*c,h=a*f;n[0]=l*c,n[4]=_*u-m,n[8]=d*u+h,n[1]=l*f,n[5]=h*u+d,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,_=a*l,h=a*u;n[0]=l*c,n[4]=h-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+_,n[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*u,_=a*l,h=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+h,n[5]=o*c,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*c,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),zi.crossVectors(i,ln),zi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),zi.crossVectors(i,ln)),zi.normalize(),il.crossVectors(ln,zi),r[0]=zi.x,r[4]=il.x,r[8]=ln.x,r[1]=zi.y,r[5]=il.y,r[9]=ln.y,r[2]=zi.z,r[6]=il.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],p=i[10],g=i[14],v=i[3],x=i[7],S=i[11],w=i[15],C=r[0],L=r[4],y=r[8],T=r[12],R=r[1],N=r[5],re=r[9],ee=r[13],U=r[2],j=r[6],W=r[10],J=r[14],I=r[3],k=r[7],B=r[11],K=r[15];return s[0]=o*C+a*R+l*U+u*I,s[4]=o*L+a*N+l*j+u*k,s[8]=o*y+a*re+l*W+u*B,s[12]=o*T+a*ee+l*J+u*K,s[1]=c*C+f*R+d*U+m*I,s[5]=c*L+f*N+d*j+m*k,s[9]=c*y+f*re+d*W+m*B,s[13]=c*T+f*ee+d*J+m*K,s[2]=_*C+h*R+p*U+g*I,s[6]=_*L+h*N+p*j+g*k,s[10]=_*y+h*re+p*W+g*B,s[14]=_*T+h*ee+p*J+g*K,s[3]=v*C+x*R+S*U+w*I,s[7]=v*L+x*N+S*j+w*k,s[11]=v*y+x*re+S*W+w*B,s[15]=v*T+x*ee+S*J+w*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],p=e[11],g=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+h*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],p=e[14],g=e[15],v=f*p*u-h*d*u+h*l*m-a*p*m-f*l*g+a*d*g,x=_*d*u-c*p*u-_*l*m+o*p*m+c*l*g-o*d*g,S=c*h*u-_*f*u+_*a*m-o*h*m-c*a*g+o*f*g,w=_*f*l-c*h*l-_*a*d+o*h*d+c*a*p-o*f*p,C=n*v+i*x+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*g-i*d*g)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*L,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*L,e[4]=x*L,e[5]=(c*p*s-_*d*s+_*r*m-n*p*m-c*r*g+n*d*g)*L,e[6]=(_*l*s-o*p*s-_*r*u+n*p*u+o*r*g-n*l*g)*L,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*L,e[8]=S*L,e[9]=(_*f*s-c*h*s-_*i*m+n*h*m+c*i*g-n*f*g)*L,e[10]=(o*h*s-_*a*s+_*i*u-n*h*u-o*i*g+n*a*g)*L,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*m-n*a*m)*L,e[12]=w*L,e[13]=(c*h*r-_*f*r+_*i*d-n*h*d-c*i*p+n*f*p)*L,e[14]=(_*a*r-o*h*r-_*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,_=s*f,h=o*c,p=o*f,g=a*f,v=l*u,x=l*c,S=l*f,w=i.x,C=i.y,L=i.z;return r[0]=(1-(h+g))*w,r[1]=(m+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*L,r[9]=(p-v)*L,r[10]=(1-(d+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,c=1/o,f=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new D,zn=new ut,PM=new D(0,0,0),LM=new D(1,1,1),zi=new D,il=new D,ln=new D,gg=new ut,vg=new po;class Ra{constructor(e=0,n=0,i=0,r=Ra.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ra.DefaultOrder="XYZ";Ra.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class M1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const _g=new D,as=new po,di=new ut,rl=new D,Po=new D,DM=new D,IM=new po,xg=new D(1,0,0),yg=new D(0,1,0),Sg=new D(0,0,1),kM={type:"added"},wg={type:"removed"};class kt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DefaultUp.clone();const e=new D,n=new Ra,i=new po,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Cn}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=kt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new M1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,n){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Po,rl,this.up):di.lookAt(rl,Po,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),as.setFromRotationMatrix(di),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(wg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,DM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DefaultUp=new D(0,1,0);kt.DefaultMatrixAutoUpdate=!0;const Nn=new D,hi=new D,ff=new D,pi=new D,ls=new D,us=new D,Mg=new D,df=new D,hf=new D,pf=new D;class ni{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),hi.subVectors(i,n),ff.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(hi),l=Nn.dot(ff),u=hi.dot(hi),c=hi.dot(ff),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi),l.set(0,0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),hi.subVectors(e,n),Nn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ni.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),us.subVectors(s,i),df.subVectors(e,i);const l=ls.dot(df),u=us.dot(df);if(l<=0&&u<=0)return n.copy(i);hf.subVectors(e,r);const c=ls.dot(hf),f=us.dot(hf);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ls,o);pf.subVectors(e,s);const m=ls.dot(pf),_=us.dot(pf);if(_>=0&&m<=_)return n.copy(s);const h=m*u-l*_;if(h<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(us,a);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return Mg.subVectors(s,r),a=(f-c)/(f-c+(m-_)),n.copy(r).addScaledVector(Mg,a);const g=1/(p+h+d);return o=h*g,a=d*g,n.copy(i).addScaledVector(ls,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zM=0;class mo extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Ws,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=d1,this.blendDst=h1,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ld,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===R2;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==va&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ip extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=p1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,sl=new Pe;class Xn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=zd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new je),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Pe),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Et),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class E1 extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b1 extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const Sn=new ut,mf=new kt,cs=new D,un=new La,Lo=new La,Ct=new D;class li extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v1(e)?b1:E1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(un.min,Lo.min),un.expandByPoint(Ct),Ct.addVectors(un.max,Lo.max),un.expandByPoint(Ct)):(un.expandByPoint(Lo.min),un.expandByPoint(Lo.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(cs.fromBufferAttribute(e,u),Ct.add(cs)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new D,c[R]=new D;const f=new D,d=new D,m=new D,_=new Pe,h=new Pe,p=new Pe,g=new D,v=new D;function x(R,N,re){f.fromArray(r,R*3),d.fromArray(r,N*3),m.fromArray(r,re*3),_.fromArray(o,R*2),h.fromArray(o,N*2),p.fromArray(o,re*2),d.sub(f),m.sub(f),h.sub(_),p.sub(_);const ee=1/(h.x*p.y-p.x*h.y);!isFinite(ee)||(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(ee),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(ee),u[R].add(g),u[N].add(g),u[re].add(g),c[R].add(v),c[N].add(v),c[re].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,N=S.length;R<N;++R){const re=S[R],ee=re.start,U=re.count;for(let j=ee,W=ee+U;j<W;j+=3)x(i[j+0],i[j+1],i[j+2])}const w=new D,C=new D,L=new D,y=new D;function T(R){L.fromArray(s,R*3),y.copy(L);const N=u[R];w.copy(N),w.sub(L.multiplyScalar(L.dot(N))).normalize(),C.crossVectors(y,N);const ee=C.dot(c[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=ee}for(let R=0,N=S.length;R<N;++R){const re=S[R],ee=re.start,U=re.count;for(let j=ee,W=ee+U;j<W;j+=3)T(i[j+0]),T(i[j+1]),T(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)d[_++]=u[m++]}return new Xn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eg=new ut,fs=new w1,gf=new fc,Ni=new D,Oi=new D,Fi=new D,vf=new D,_f=new D,xf=new D,ol=new D,al=new D,ll=new D,ul=new Pe,cl=new Pe,fl=new Pe,yf=new D,dl=new D;class yi extends kt{constructor(e=new li,n=new ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gf.copy(i.boundingSphere),gf.applyMatrix4(s),e.ray.intersectsSphere(gf)===!1)||(Eg.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Eg),i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const L=a.getX(w),y=a.getX(w+1),T=a.getX(w+2);o=hl(this,v,e,fs,l,u,c,f,d,L,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);o=hl(this,r,e,fs,l,u,c,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const L=w,y=w+1,T=w+2;o=hl(this,v,e,fs,l,u,c,f,d,L,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=g,S=g+1,w=g+2;o=hl(this,r,e,fs,l,u,c,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function OM(t,e,n,i,r,s,o,a){let l;if(e.side===jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Gr,a),l===null)return null;dl.copy(a),dl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(dl);return u<n.near||u>n.far?null:{distance:u,point:dl.clone(),object:t}}function hl(t,e,n,i,r,s,o,a,l,u,c,f){Ni.fromBufferAttribute(r,u),Oi.fromBufferAttribute(r,c),Fi.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){ol.set(0,0,0),al.set(0,0,0),ll.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=d[_],g=s[_];p!==0&&(vf.fromBufferAttribute(g,u),_f.fromBufferAttribute(g,c),xf.fromBufferAttribute(g,f),o?(ol.addScaledVector(vf,p),al.addScaledVector(_f,p),ll.addScaledVector(xf,p)):(ol.addScaledVector(vf.sub(Ni),p),al.addScaledVector(_f.sub(Oi),p),ll.addScaledVector(xf.sub(Fi),p)))}Ni.add(ol),Oi.add(al),Fi.add(ll)}t.isSkinnedMesh&&(t.boneTransform(u,Ni),t.boneTransform(c,Oi),t.boneTransform(f,Fi));const m=OM(t,e,n,i,Ni,Oi,Fi,yf);if(m){a&&(ul.fromBufferAttribute(a,u),cl.fromBufferAttribute(a,c),fl.fromBufferAttribute(a,f),m.uv=ni.getUV(yf,Ni,Oi,Fi,ul,cl,fl,new Pe)),l&&(ul.fromBufferAttribute(l,u),cl.fromBufferAttribute(l,c),fl.fromBufferAttribute(l,f),m.uv2=ni.getUV(yf,Ni,Oi,Fi,ul,cl,fl,new Pe));const _={a:u,b:c,c:f,normal:new D,materialIndex:0};ni.getNormal(Ni,Oi,Fi,_.normal),m.face=_}return m}class Da extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(u,3)),this.setAttribute("normal",new qn(c,3)),this.setAttribute("uv",new qn(f,2));function _(h,p,g,v,x,S,w,C,L,y,T){const R=S/L,N=w/y,re=S/2,ee=w/2,U=C/2,j=L+1,W=y+1;let J=0,I=0;const k=new D;for(let B=0;B<W;B++){const K=B*N-ee;for(let O=0;O<j;O++){const V=O*R-re;k[h]=V*v,k[p]=K*x,k[g]=U,u.push(k.x,k.y,k.z),k[h]=0,k[p]=0,k[g]=C>0?1:-1,c.push(k.x,k.y,k.z),f.push(O/L),f.push(1-B/y),J+=1}}for(let B=0;B<y;B++)for(let K=0;K<L;K++){const O=d+K+j*B,V=d+K+j*(B+1),X=d+(K+1)+j*(B+1),ae=d+(K+1)+j*B;l.push(O,V,ae),l.push(V,X,ae),I+=6}a.addGroup(m,I,T),m+=I,d+=J}}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ft(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function FM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const UM={clone:oo,merge:Ft};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C1 extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends C1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dg*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=90,hs=1;class GM extends kt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Vt(ds,hs,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Vt(ds,hs,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Vt(ds,hs,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Vt(ds,hs,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Vt(ds,hs,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const u=new Vt(ds,hs,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new D(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=wi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class T1 extends Ln{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends $r{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new T1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),s=new jr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:tr});s.uniforms.tEquirect.value=n;const o=new yi(r,s),a=n.minFilter;return n.minFilter===cc&&(n.minFilter=En),new GM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Sf=new D,WM=new D,$M=new Cn;class vr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sf.subVectors(i,n).cross(WM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$M.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new fc,pl=new D;class rp{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],m=i[9],_=i[10],h=i[11],p=i[12],g=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,h-d,x-p).normalize(),n[1].setComponents(a+r,f+l,h+d,x+p).normalize(),n[2].setComponents(a+s,f+u,h+m,x+g).normalize(),n[3].setComponents(a-s,f-u,h-m,x-g).normalize(),n[4].setComponents(a-o,f-c,h-_,x-v).normalize(),n[5].setComponents(a+o,f+c,h+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,m=c.updateRange;t.bindBuffer(f,u),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class dc extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,m=[],_=[],h=[],p=[];for(let g=0;g<c;g++){const v=g*d-o;for(let x=0;x<u;x++){const S=x*f-s;_.push(S,-v,0),h.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+u*g,S=v+u*(g+1),w=v+1+u*(g+1),C=v+1+u*g;m.push(x,S,C),m.push(S,w,C)}this.setIndex(m),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(p,2))}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM="vec3 transformed = vec3( position );",e3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t3=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,n3=`#ifdef USE_IRIDESCENCE
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
#endif`,i3=`#ifdef USE_BUMPMAP
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
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d3=`#define PI 3.141592653589793
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
}`,h3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p3=`vec3 transformedNormal = objectNormal;
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
#endif`,m3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,v3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x3="gl_FragColor = linearToOutputTexel( gl_FragColor );",y3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S3=`#ifdef USE_ENVMAP
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
#endif`,w3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M3=`#ifdef USE_ENVMAP
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
#endif`,E3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b3=`#ifdef USE_ENVMAP
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
#endif`,C3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L3=`#ifdef USE_GRADIENTMAP
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
}`,R3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I3=`vec3 diffuse = vec3( 1.0 );
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
#endif`,k3=`uniform bool receiveShadow;
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
#endif`,z3=`#if defined( USE_ENVMAP )
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
#endif`,N3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,F3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,B3=`PhysicalMaterial material;
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
#endif`,V3=`struct PhysicalMaterial {
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
}`,G3=`
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
#endif`,H3=`#if defined( RE_IndirectDiffuse )
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
#endif`,W3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
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
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,oE=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#ifdef USE_SHADOWMAP
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
#endif`,EE=`#ifdef USE_SHADOWMAP
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
#endif`,bE=`#ifdef USE_SHADOWMAP
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
#endif`,CE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,FE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,UE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,BE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,VE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,GE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#include <envmap_common_pars_fragment>
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
}`,qE=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
}`,ZE=`#define DISTANCE
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
}`,QE=`#define DISTANCE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eb=`uniform float scale;
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,rb=`#define LAMBERT
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
}`,sb=`uniform vec3 diffuse;
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
}`,ob=`#define MATCAP
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
}`,ab=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,vb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,xb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:XM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:ZM,aomap_fragment:QM,aomap_pars_fragment:JM,begin_vertex:KM,beginnormal_vertex:e3,bsdfs:t3,iridescence_fragment:n3,bumpmap_pars_fragment:i3,clipping_planes_fragment:r3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:o3,clipping_planes_vertex:a3,color_fragment:l3,color_pars_fragment:u3,color_pars_vertex:c3,color_vertex:f3,common:d3,cube_uv_reflection_fragment:h3,defaultnormal_vertex:p3,displacementmap_pars_vertex:m3,displacementmap_vertex:g3,emissivemap_fragment:v3,emissivemap_pars_fragment:_3,encodings_fragment:x3,encodings_pars_fragment:y3,envmap_fragment:S3,envmap_common_pars_fragment:w3,envmap_pars_fragment:M3,envmap_pars_vertex:E3,envmap_physical_pars_fragment:z3,envmap_vertex:b3,fog_vertex:C3,fog_pars_vertex:T3,fog_fragment:A3,fog_pars_fragment:P3,gradientmap_pars_fragment:L3,lightmap_fragment:R3,lightmap_pars_fragment:D3,lights_lambert_vertex:I3,lights_pars_begin:k3,lights_toon_fragment:N3,lights_toon_pars_fragment:O3,lights_phong_fragment:F3,lights_phong_pars_fragment:U3,lights_physical_fragment:B3,lights_physical_pars_fragment:V3,lights_fragment_begin:G3,lights_fragment_maps:H3,lights_fragment_end:W3,logdepthbuf_fragment:$3,logdepthbuf_pars_fragment:j3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:q3,map_fragment:Y3,map_pars_fragment:Z3,map_particle_fragment:Q3,map_particle_pars_fragment:J3,metalnessmap_fragment:K3,metalnessmap_pars_fragment:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:aE,normal_pars_vertex:lE,normal_vertex:uE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,output_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:bE,shadowmask_pars_fragment:CE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:PE,skinnormal_vertex:LE,specularmap_fragment:RE,specularmap_pars_fragment:DE,tonemapping_fragment:IE,tonemapping_pars_fragment:kE,transmission_fragment:zE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:FE,uv_vertex:UE,uv2_pars_fragment:BE,uv2_pars_vertex:VE,uv2_vertex:GE,worldpos_vertex:HE,background_vert:WE,background_frag:$E,cube_vert:jE,cube_frag:XE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:ZE,distanceRGBA_frag:QE,equirect_vert:JE,equirect_frag:KE,linedashed_vert:eb,linedashed_frag:tb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:rb,meshlambert_frag:sb,meshmatcap_vert:ob,meshmatcap_frag:ab,meshnormal_vert:lb,meshnormal_frag:ub,meshphong_vert:cb,meshphong_frag:fb,meshphysical_vert:db,meshphysical_frag:hb,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:vb,shadow_vert:_b,shadow_frag:xb,sprite_vert:yb,sprite_frag:Sb},ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Cn},uv2Transform:{value:new Cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Cn}}},ei={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Cn},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:Ft([ce.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ei.physical={uniforms:Ft([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function wb(t,e,n,i,r,s){const o=new je(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function m(h,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===uc)?(u===void 0&&(u=new yi(new Da(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:oo(ei.cube.uniforms),vertexShader:ei.cube.vertexShader,fragmentShader:ei.cube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new yi(new dc(2,2),new jr({name:"BackgroundMaterial",uniforms:oo(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){n.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:m}}function Mb(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(U,j,W,J,I){let k=!1;if(o){const B=h(J,W,j);u!==B&&(u=B,m(u.object)),k=g(U,J,W,I),k&&v(U,J,W,I)}else{const B=j.wireframe===!0;(u.geometry!==J.id||u.program!==W.id||u.wireframe!==B)&&(u.geometry=J.id,u.program=W.id,u.wireframe=B,k=!0)}I!==null&&n.update(I,34963),(k||c)&&(c=!1,y(U,j,W,J),I!==null&&t.bindBuffer(34963,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,j,W){const J=W.wireframe===!0;let I=a[U.id];I===void 0&&(I={},a[U.id]=I);let k=I[j.id];k===void 0&&(k={},I[j.id]=k);let B=k[J];return B===void 0&&(B=p(d()),k[J]=B),B}function p(U){const j=[],W=[],J=[];for(let I=0;I<r;I++)j[I]=0,W[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:J,object:U,attributes:{},index:null}}function g(U,j,W,J){const I=u.attributes,k=j.attributes;let B=0;const K=W.getAttributes();for(const O in K)if(K[O].location>=0){const X=I[O];let ae=k[O];if(ae===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;B++}return u.attributesNum!==B||u.index!==J}function v(U,j,W,J){const I={},k=j.attributes;let B=0;const K=W.getAttributes();for(const O in K)if(K[O].location>=0){let X=k[O];X===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),I[O]=ae,B++}u.attributes=I,u.attributesNum=B,u.index=J}function x(){const U=u.newAttributes;for(let j=0,W=U.length;j<W;j++)U[j]=0}function S(U){w(U,0)}function w(U,j){const W=u.newAttributes,J=u.enabledAttributes,I=u.attributeDivisors;W[U]=1,J[U]===0&&(t.enableVertexAttribArray(U),J[U]=1),I[U]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,j),I[U]=j)}function C(){const U=u.newAttributes,j=u.enabledAttributes;for(let W=0,J=j.length;W<J;W++)j[W]!==U[W]&&(t.disableVertexAttribArray(W),j[W]=0)}function L(U,j,W,J,I,k){i.isWebGL2===!0&&(W===5124||W===5125)?t.vertexAttribIPointer(U,j,W,I,k):t.vertexAttribPointer(U,j,W,J,I,k)}function y(U,j,W,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=J.attributes,k=W.getAttributes(),B=j.defaultAttributeValues;for(const K in k){const O=k[K];if(O.location>=0){let V=I[K];if(V===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const X=V.normalized,ae=V.itemSize,A=n.get(V);if(A===void 0)continue;const xe=A.buffer,Z=A.type,_e=A.bytesPerElement;if(V.isInterleavedBufferAttribute){const oe=V.data,we=oe.stride,ue=V.offset;if(oe.isInstancedInterleavedBuffer){for(let me=0;me<O.locationSize;me++)w(O.location+me,oe.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let me=0;me<O.locationSize;me++)S(O.location+me);t.bindBuffer(34962,xe);for(let me=0;me<O.locationSize;me++)L(O.location+me,ae/O.locationSize,Z,X,we*_e,(ue+ae/O.locationSize*me)*_e)}else{if(V.isInstancedBufferAttribute){for(let oe=0;oe<O.locationSize;oe++)w(O.location+oe,V.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let oe=0;oe<O.locationSize;oe++)S(O.location+oe);t.bindBuffer(34962,xe);for(let oe=0;oe<O.locationSize;oe++)L(O.location+oe,ae/O.locationSize,Z,X,ae*_e,ae/O.locationSize*oe*_e)}}else if(B!==void 0){const X=B[K];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(O.location,X);break;case 3:t.vertexAttrib3fv(O.location,X);break;case 4:t.vertexAttrib4fv(O.location,X);break;default:t.vertexAttrib1fv(O.location,X)}}}}C()}function T(){re();for(const U in a){const j=a[U];for(const W in j){const J=j[W];for(const I in J)_(J[I].object),delete J[I];delete j[W]}delete a[U]}}function R(U){if(a[U.id]===void 0)return;const j=a[U.id];for(const W in j){const J=j[W];for(const I in J)_(J[I].object),delete J[I];delete j[W]}delete a[U.id]}function N(U){for(const j in a){const W=a[j];if(W[U.id]===void 0)continue;const J=W[U.id];for(const I in J)_(J[I].object),delete J[I];delete W[U.id]}}function re(){ee(),c=!0,u!==l&&(u=l,m(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:ee,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function Eb(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function bb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),_=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=d>0,S=o||e.has("OES_texture_float"),w=x&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function Cb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new Cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||i!==0||r;return r=d,n=c(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,x=v*4;let S=g.clippingState||null;l.value=S,S=c(_,d,x,m);for(let w=0;w!==x;++w)S[w]=n[w];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const g=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=m;x!==h;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Tb(t){let e=new WeakMap;function n(o,a){return a===Rd?o.mapping=io:a===Dd&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rd||a===Dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new HM(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ji extends C1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,bg=[.125,.215,.35,.446,.526,.582],yr=20,wf=new ji,Cg=new je;let Mf=null;const _r=(1+Math.sqrt(5))/2,ms=1/_r,Tg=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_r,ms),new D(0,_r,-ms),new D(ms,0,_r),new D(-ms,0,_r),new D(_r,ms,0),new D(-_r,ms,0)];class Ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Mf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf),e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:_a,format:ii,encoding:Wr,depthBuffer:!1},r=Pg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(s)),this._blurMaterial=Pb(s,e,n)}return r}_compileMaterial(e){const n=new yi(this._lodPlanes[0],e);this._renderer.compile(n,wf)}_sceneToCubeUV(e,n,i,r){const a=new Vt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Cg),c.toneMapping=wi,c.autoClear=!1;const m=new ip({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),_=new yi(new Da,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Cg),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;ml(r,v*x,g>2?x:0,x,x),c.setRenderTarget(r),h&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tg[(r-1)%Tg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new yi(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),h=s/_,p=isFinite(s)?1+Math.floor(c*h):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const g=[];let v=0;for(let L=0;L<yr;++L){const y=L/h,T=Math.exp(-y*y/2);g.push(T),L===0?v+=T:L<p&&(v+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-zs?r-x+zs:0),C=4*(this._cubeSize-S);ml(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(f,wf)}}function Ab(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zs?l=bg[o-t+zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,h=3,p=2,g=1,v=new Float32Array(h*_*m),x=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,y=C>2?0:-1,T=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(T,h*_*C),x.set(d,p*_*C);const R=[C,C,C,C,C,C];S.set(R,g*_*C)}const w=new li;w.setAttribute("position",new Xn(v,h)),w.setAttribute("uv",new Xn(x,p)),w.setAttribute("faceIndex",new Xn(S,g)),e.push(w),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Pb(t,e,n){const i=new Float32Array(yr),r=new D(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Lg(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rg(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function Lb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Rd||l===Dd,c=l===io||l===ro;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Ag(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Ag(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Rb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Db(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],C=v[x+1],L=v[x+2];d.push(w,C,C,L,L,w)}}else{const v=_.array;h=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,C=x+1,L=x+2;d.push(w,C,C,L,L,w)}}const p=new(v1(d)?b1:E1)(d,1);p.version=h;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Ib(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function f(d,m,_){if(_===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function kb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zb(t,e){return t[0]-e[0]}function Nb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ef(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function Ob(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let W=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var _=W;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let R=0;S===!0&&(R=1),w===!0&&(R=2),C===!0&&(R=3);let N=c.attributes.position.count*R,re=1;N>e.maxTextureSize&&(re=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ee=new Float32Array(N*re*4*p),U=new S1(ee,N,re,p);U.type=Tr,U.needsUpdate=!0;const j=R*4;for(let J=0;J<p;J++){const I=L[J],k=y[J],B=T[J],K=N*re*4*J;for(let O=0;O<I.count;O++){const V=O*j;S===!0&&(o.fromBufferAttribute(I,O),I.normalized===!0&&Ef(o,I),ee[K+V+0]=o.x,ee[K+V+1]=o.y,ee[K+V+2]=o.z,ee[K+V+3]=0),w===!0&&(o.fromBufferAttribute(k,O),k.normalized===!0&&Ef(o,k),ee[K+V+4]=o.x,ee[K+V+5]=o.y,ee[K+V+6]=o.z,ee[K+V+7]=0),C===!0&&(o.fromBufferAttribute(B,O),B.normalized===!0&&Ef(o,B),ee[K+V+8]=o.x,ee[K+V+9]=o.y,ee[K+V+10]=o.z,ee[K+V+11]=B.itemSize===4?o.w:1)}}g={count:p,texture:U,size:new Pe(N,re)},s.set(c,g),c.addEventListener("dispose",W)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let w=0;w<h;w++)p[w]=[w,0];i[c.id]=p}for(let w=0;w<h;w++){const C=p[w];C[0]=w,C[1]=m[w]}p.sort(Nb);for(let w=0;w<8;w++)w<h&&p[w][1]?(a[w][0]=p[w][0],a[w][1]=p[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(zb);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const C=a[w],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+w)!==g[L]&&c.setAttribute("morphTarget"+w,g[L]),v&&c.getAttribute("morphNormal"+w)!==v[L]&&c.setAttribute("morphNormal"+w,v[L]),r[w]=y,x+=y):(g&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const S=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Fb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const P1=new Ln,L1=new S1,R1=new TM,D1=new T1,Dg=[],Ig=[],kg=new Float32Array(16),zg=new Float32Array(9),Ng=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dg[r];if(s===void 0&&(s=new Float32Array(r),Dg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Ig[e];n===void 0&&(n=new Int32Array(e),Ig[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function Hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;Ng.set(i),t.uniformMatrix2fv(this.addr,!1,Ng),Zt(n,i)}}function Wb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;zg.set(i),t.uniformMatrix3fv(this.addr,!1,zg),Zt(n,i)}}function $b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;kg.set(i),t.uniformMatrix4fv(this.addr,!1,kg),Zt(n,i)}}function jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xb(t,e){const n=this.cache;Yt(n,e)||(t.uniform2iv(this.addr,e),Zt(n,e))}function qb(t,e){const n=this.cache;Yt(n,e)||(t.uniform3iv(this.addr,e),Zt(n,e))}function Yb(t,e){const n=this.cache;Yt(n,e)||(t.uniform4iv(this.addr,e),Zt(n,e))}function Zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Qb(t,e){const n=this.cache;Yt(n,e)||(t.uniform2uiv(this.addr,e),Zt(n,e))}function Jb(t,e){const n=this.cache;Yt(n,e)||(t.uniform3uiv(this.addr,e),Zt(n,e))}function Kb(t,e){const n=this.cache;Yt(n,e)||(t.uniform4uiv(this.addr,e),Zt(n,e))}function eC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||P1,r)}function tC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||R1,r)}function nC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D1,r)}function iC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||L1,r)}function rC(t){switch(t){case 5126:return Ub;case 35664:return Bb;case 35665:return Vb;case 35666:return Gb;case 35674:return Hb;case 35675:return Wb;case 35676:return $b;case 5124:case 35670:return jb;case 35667:case 35671:return Xb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return Qb;case 36295:return Jb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function sC(t,e){t.uniform1fv(this.addr,e)}function oC(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function aC(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function lC(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function uC(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cC(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fC(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dC(t,e){t.uniform1iv(this.addr,e)}function hC(t,e){t.uniform2iv(this.addr,e)}function pC(t,e){t.uniform3iv(this.addr,e)}function mC(t,e){t.uniform4iv(this.addr,e)}function gC(t,e){t.uniform1uiv(this.addr,e)}function vC(t,e){t.uniform2uiv(this.addr,e)}function _C(t,e){t.uniform3uiv(this.addr,e)}function xC(t,e){t.uniform4uiv(this.addr,e)}function yC(t,e,n){const i=e.length,r=hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||P1,r[s])}function SC(t,e,n){const i=e.length,r=hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||R1,r[s])}function wC(t,e,n){const i=e.length,r=hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||D1,r[s])}function MC(t,e,n){const i=e.length,r=hc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||L1,r[s])}function EC(t){switch(t){case 5126:return sC;case 35664:return oC;case 35665:return aC;case 35666:return lC;case 35674:return uC;case 35675:return cC;case 35676:return fC;case 5124:case 35670:return dC;case 35667:case 35671:return hC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return MC}}class bC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rC(n.type)}}class CC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=EC(n.type)}}class TC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function Og(t,e){t.seq.push(e),t.map[e.id]=e}function AC(t,e,n){const i=t.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Og(n,u===void 0?new bC(a,t,e):new CC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new TC(a),Og(n,f)),n=f}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let PC=0;function LC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function RC(t){switch(t){case Wr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ug(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LC(t.getShaderSource(e),o)}else return r}function DC(t,e){const n=RC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function IC(t,e){let n;switch(e){case K2:n="Linear";break;case eM:n="Reinhard";break;case tM:n="OptimizedCineon";break;case nM:n="ACESFilmic";break;case iM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function kC(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Uo).join(`
`)}function zC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NC(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Uo(t){return t!==""}function Bg(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(OC,FC)}function FC(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Fd(n)}const UC=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,BC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(t){return t.replace(BC,I1).replace(UC,VC)}function VC(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),I1(t,e,n,i)}function I1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===L2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fo&&(e="SHADOWMAP_TYPE_VSM"),e}function HC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function $C(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case p1:e="ENVMAP_BLENDING_MULTIPLY";break;case Q2:e="ENVMAP_BLENDING_MIX";break;case J2:e="ENVMAP_BLENDING_ADD";break}return e}function jC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GC(n),u=HC(n),c=WC(n),f=$C(n),d=jC(n),m=n.isWebGL2?"":kC(n),_=zC(s),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[_].filter(Uo).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(p=[Hg(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[m,Hg(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==wi?IC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,DC("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Fd(o),o=Bg(o,n),o=Vg(o,n),a=Fd(a),a=Bg(a,n),a=Vg(a,n),o=Gg(o),a=Gg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,S=v+g+a,w=Fg(r,35633,x),C=Fg(r,35632,S);if(r.attachShader(h,w),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),R=r.getShaderInfoLog(w).trim(),N=r.getShaderInfoLog(C).trim();let re=!0,ee=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const U=Ug(r,w,"vertex"),j=Ug(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+U+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||N==="")&&(ee=!1);ee&&(this.diagnostics={runnable:re,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:N,prefix:g}})}r.deleteShader(w),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ul(r,h)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=NC(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=PC++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=C,this}let qC=0;class YC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new ZC(e);n.set(e,i)}return n.get(e)}}class ZC{constructor(e){this.id=qC++,this.code=e,this.usedTimes=0}}function QC(t,e,n,i,r,s,o){const a=new M1,l=new YC,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,R,N,re){const ee=N.fog,U=re.geometry,j=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?n:e).get(y.envMap||j),J=!!W&&W.mapping===uc?W.image.height:null,I=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const k=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,B=k!==void 0?k.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let O,V,X,ae;if(I){const we=ei[I];O=we.vertexShader,V=we.fragmentShader}else O=y.vertexShader,V=y.fragmentShader,l.update(y),X=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const A=t.getRenderTarget(),xe=y.alphaTest>0,Z=y.clearcoat>0,_e=y.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:y.type,vertexShader:O,fragmentShader:V,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:A===null?t.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Wr,map:!!y.map,matcap:!!y.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===MM,tangentSpaceNormalMap:y.normalMapType===wM,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ot,clearcoat:Z,clearcoatMap:Z&&!!y.clearcoatMap,clearcoatRoughnessMap:Z&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!y.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!y.iridescenceMap,iridescenceThicknessMap:_e&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ws,alphaMap:!!y.alphaMap,alphaTest:xe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:wi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gr,flipSided:y.side===jn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function x(y){const T=_[y.type];let R;if(T){const N=ei[T];R=UM.clone(N.uniforms)}else R=y.uniforms;return R}function S(y,T){let R;for(let N=0,re=u.length;N<re;N++){const ee=u[N];if(ee.cacheKey===T){R=ee,++R.usedTimes;break}}return R===void 0&&(R=new XC(t,T,y,s),u.push(R)),R}function w(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function JC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function KC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $g(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,d){n.length>1&&n.sort(f||KC),i.length>1&&i.sort(d||Wg),r.length>1&&r.sort(d||Wg)}function c(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function eT(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new $g,t.set(i,[s])):r>=t.get(i).length?(s=new $g,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function tT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new je};break;case"SpotLight":n={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function nT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iT=0;function rT(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function sT(t,e){const n=new tT,i=nT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(c,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let h=0,p=0,g=0,v=0,x=0,S=0,w=0,C=0;c.sort(rT);const L=f!==!0?Math.PI:1;for(let T=0,R=c.length;T<R;T++){const N=c[T],re=N.color,ee=N.intensity,U=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=re.r*ee*L,m+=re.g*ee*L,_+=re.b*ee*L;else if(N.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(N.sh.coefficients[W],ee);else if(N.isDirectionalLight){const W=n.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*L),N.castShadow){const J=N.shadow,I=i.get(N);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,r.directionalShadow[h]=I,r.directionalShadowMap[h]=j,r.directionalShadowMatrix[h]=N.shadow.matrix,S++}r.directional[h]=W,h++}else if(N.isSpotLight){const W=n.get(N);if(W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(re).multiplyScalar(ee*L),W.distance=U,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,N.castShadow){const J=N.shadow,I=i.get(N);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,r.spotShadow[g]=I,r.spotShadowMap[g]=j,r.spotShadowMatrix[g]=N.shadow.matrix,C++}r.spot[g]=W,g++}else if(N.isRectAreaLight){const W=n.get(N);W.color.copy(re).multiplyScalar(ee),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=W,v++}else if(N.isPointLight){const W=n.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity*L),W.distance=N.distance,W.decay=N.decay,N.castShadow){const J=N.shadow,I=i.get(N);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,r.pointShadow[p]=I,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=N.shadow.matrix,w++}r.point[p]=W,p++}else if(N.isHemisphereLight){const W=n.get(N);W.skyColor.copy(N.color).multiplyScalar(ee*L),W.groundColor.copy(N.groundColor).multiplyScalar(ee*L),r.hemi[x]=W,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==g||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==C)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,y.directionalLength=h,y.pointLength=p,y.spotLength=g,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=C,r.version=iT++)}function u(c,f){let d=0,m=0,_=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const S=c[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function jg(t,e){const n=new sT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function oT(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new jg(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new jg(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class aT extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lT extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
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
}`;function fT(t,e,n){let i=new rp;const r=new Pe,s=new Pe,o=new Et,a=new aT({depthPacking:SM}),l=new lT,u={},c=n.maxTextureSize,f={0:jn,1:va,2:Gr},d=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:uT,fragmentShader:cT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new yi(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f1,this.render=function(S,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.state;R.setBlending(tr),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let N=0,re=S.length;N<re;N++){const ee=S[N],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const j=U.getFrameExtents();if(r.multiply(j),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==Fo?{minFilter:tn,magFilter:tn}:{};U.map=new $r(r.x,r.y,J),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const W=U.getViewportCount();for(let J=0;J<W;J++){const I=U.getViewport(J);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),R.viewport(o),U.updateMatrices(ee,J),i=U.getFrustum(),x(w,C,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Fo&&g(U,C),U.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,y,T)};function g(S,w){const C=e.update(h);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,m,h,null)}function v(S,w,C,L,y,T){let R=null;const N=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0?R=N:R=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const re=R.uuid,ee=w.uuid;let U=u[re];U===void 0&&(U={},u[re]=U);let j=U[ee];j===void 0&&(j=R.clone(),U[ee]=j),R=j}return R.visible=w.visible,R.wireframe=w.wireframe,T===Fo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=y),R}function x(S,w,C,L,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Fo)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const N=e.update(S),re=S.material;if(Array.isArray(re)){const ee=N.groups;for(let U=0,j=ee.length;U<j;U++){const W=ee[U],J=re[W.materialIndex];if(J&&J.visible){const I=v(S,J,L,C.near,C.far,y);t.renderBufferDirect(C,null,N,I,S,W)}}}else if(re.visible){const ee=v(S,re,L,C.near,C.far,y);t.renderBufferDirect(C,null,N,ee,S,null)}}const R=S.children;for(let N=0,re=R.length;N<re;N++)x(R[N],w,C,L,y)}}function dT(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const ge=new Et;let Q=null;const he=new Et(0,0,0,0);return{setMask:function(de){Q!==de&&!z&&(t.colorMask(de,de,de,de),Q=de)},setLocked:function(de){z=de},setClear:function(de,We,bt,gt,Pi){Pi===!0&&(de*=gt,We*=gt,bt*=gt),ge.set(de,We,bt,gt),he.equals(ge)===!1&&(t.clearColor(de,We,bt,gt),he.copy(ge))},reset:function(){z=!1,Q=null,he.set(-1,0,0,0)}}}function s(){let z=!1,ge=null,Q=null,he=null;return{setTest:function(de){de?xe(2929):Z(2929)},setMask:function(de){ge!==de&&!z&&(t.depthMask(de),ge=de)},setFunc:function(de){if(Q!==de){if(de)switch(de){case W2:t.depthFunc(512);break;case $2:t.depthFunc(519);break;case j2:t.depthFunc(513);break;case Ld:t.depthFunc(515);break;case X2:t.depthFunc(514);break;case q2:t.depthFunc(518);break;case Y2:t.depthFunc(516);break;case Z2:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=de}},setLocked:function(de){z=de},setClear:function(de){he!==de&&(t.clearDepth(de),he=de)},reset:function(){z=!1,ge=null,Q=null,he=null}}}function o(){let z=!1,ge=null,Q=null,he=null,de=null,We=null,bt=null,gt=null,Pi=null;return{setTest:function(ft){z||(ft?xe(2960):Z(2960))},setMask:function(ft){ge!==ft&&!z&&(t.stencilMask(ft),ge=ft)},setFunc:function(ft,ui,xn){(Q!==ft||he!==ui||de!==xn)&&(t.stencilFunc(ft,ui,xn),Q=ft,he=ui,de=xn)},setOp:function(ft,ui,xn){(We!==ft||bt!==ui||gt!==xn)&&(t.stencilOp(ft,ui,xn),We=ft,bt=ui,gt=xn)},setLocked:function(ft){z=ft},setClear:function(ft){Pi!==ft&&(t.clearStencil(ft),Pi=ft)},reset:function(){z=!1,ge=null,Q=null,he=null,de=null,We=null,bt=null,gt=null,Pi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,L=null,y=null,T=!1,R=null,N=null,re=null,ee=null,U=null;const j=t.getParameter(35661);let W=!1,J=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),W=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),W=J>=2);let k=null,B={};const K=t.getParameter(3088),O=t.getParameter(2978),V=new Et().fromArray(K),X=new Et().fromArray(O);function ae(z,ge,Q){const he=new Uint8Array(4),de=t.createTexture();t.bindTexture(z,de),t.texParameteri(z,10241,9728),t.texParameteri(z,10240,9728);for(let We=0;We<Q;We++)t.texImage2D(ge+We,0,6408,1,1,0,6408,5121,he);return de}const A={};A[3553]=ae(3553,3553,1),A[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(2929),l.setFunc(Ld),He(!1),Re(Nm),xe(2884),Ge(tr);function xe(z){d[z]!==!0&&(t.enable(z),d[z]=!0)}function Z(z){d[z]!==!1&&(t.disable(z),d[z]=!1)}function _e(z,ge){return m[z]!==ge?(t.bindFramebuffer(z,ge),m[z]=ge,i&&(z===36009&&(m[36160]=ge),z===36160&&(m[36009]=ge)),!0):!1}function oe(z,ge){let Q=h,he=!1;if(z)if(Q=_.get(ge),Q===void 0&&(Q=[],_.set(ge,Q)),z.isWebGLMultipleRenderTargets){const de=z.texture;if(Q.length!==de.length||Q[0]!==36064){for(let We=0,bt=de.length;We<bt;We++)Q[We]=36064+We;Q.length=de.length,he=!0}}else Q[0]!==36064&&(Q[0]=36064,he=!0);else Q[0]!==1029&&(Q[0]=1029,he=!0);he&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function we(z){return p!==z?(t.useProgram(z),p=z,!0):!1}const ue={[Ss]:32774,[I2]:32778,[k2]:32779};if(i)ue[Bm]=32775,ue[Vm]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(ue[Bm]=z.MIN_EXT,ue[Vm]=z.MAX_EXT)}const me={[z2]:0,[N2]:1,[O2]:768,[d1]:770,[H2]:776,[V2]:774,[U2]:772,[F2]:769,[h1]:771,[G2]:775,[B2]:773};function Ge(z,ge,Q,he,de,We,bt,gt){if(z===tr){g===!0&&(Z(3042),g=!1);return}if(g===!1&&(xe(3042),g=!0),z!==D2){if(z!==v||gt!==T){if((x!==Ss||C!==Ss)&&(t.blendEquation(32774),x=Ss,C=Ss),gt)switch(z){case Ws:t.blendFuncSeparate(1,771,1,771);break;case Om:t.blendFunc(1,1);break;case Fm:t.blendFuncSeparate(0,769,0,1);break;case Um:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ws:t.blendFuncSeparate(770,771,1,771);break;case Om:t.blendFunc(770,1);break;case Fm:t.blendFuncSeparate(0,769,0,1);break;case Um:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,w=null,L=null,y=null,v=z,T=gt}return}de=de||ge,We=We||Q,bt=bt||he,(ge!==x||de!==C)&&(t.blendEquationSeparate(ue[ge],ue[de]),x=ge,C=de),(Q!==S||he!==w||We!==L||bt!==y)&&(t.blendFuncSeparate(me[Q],me[he],me[We],me[bt]),S=Q,w=he,L=We,y=bt),v=z,T=null}function Ae(z,ge){z.side===Gr?Z(2884):xe(2884);let Q=z.side===jn;ge&&(Q=!Q),He(Q),z.blending===Ws&&z.transparent===!1?Ge(tr):Ge(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const he=z.stencilWrite;u.setTest(he),he&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?xe(32926):Z(32926)}function He(z){R!==z&&(z?t.frontFace(2304):t.frontFace(2305),R=z)}function Re(z){z!==A2?(xe(2884),z!==N&&(z===Nm?t.cullFace(1029):z===P2?t.cullFace(1028):t.cullFace(1032))):Z(2884),N=z}function Fe(z){z!==re&&(W&&t.lineWidth(z),re=z)}function Ue(z,ge,Q){z?(xe(32823),(ee!==ge||U!==Q)&&(t.polygonOffset(ge,Q),ee=ge,U=Q)):Z(32823)}function Ke(z){z?xe(3089):Z(3089)}function Ht(z){z===void 0&&(z=33984+j-1),k!==z&&(t.activeTexture(z),k=z)}function P(z,ge){k===null&&Ht();let Q=B[k];Q===void 0&&(Q={type:void 0,texture:void 0},B[k]=Q),(Q.type!==z||Q.texture!==ge)&&(t.bindTexture(z,ge||A[z]),Q.type=z,Q.texture=ge)}function M(){const z=B[k];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function F(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){V.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),V.copy(z))}function Se(z){X.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function Ie(z,ge){let Q=f.get(ge);Q===void 0&&(Q=new WeakMap,f.set(ge,Q));let he=Q.get(z);he===void 0&&(he=t.getUniformBlockIndex(ge,z.name),Q.set(z,he))}function Xe(z,ge){const he=f.get(ge).get(z);c.get(z)!==he&&(t.uniformBlockBinding(ge,he,z.__bindingPointIndex),c.set(z,he))}function mt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},k=null,B={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,L=null,y=null,T=!1,R=null,N=null,re=null,ee=null,U=null,V.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:Z,bindFramebuffer:_e,drawBuffers:oe,useProgram:we,setBlending:Ge,setMaterial:Ae,setFlipSided:He,setCullFace:Re,setLineWidth:Fe,setPolygonOffset:Ue,setScissorTest:Ke,activeTexture:Ht,bindTexture:P,unbindTexture:M,compressedTexImage2D:F,texImage2D:be,texImage3D:ye,updateUBOMapping:Ie,uniformBlockBinding:Xe,texStorage2D:Ce,texStorage3D:q,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:fe,scissor:Ee,viewport:Se,reset:mt}}function hT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return g?new OffscreenCanvas(P,M):xa("canvas")}function x(P,M,F,te){let le=1;if((P.width>te||P.height>te)&&(le=te/Math.max(P.width,P.height)),le<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const fe=M?Od:Math.floor,Ce=fe(le*P.width),q=fe(le*P.height);h===void 0&&(h=v(Ce,q));const be=F?v(Ce,q):h;return be.width=Ce,be.height=q,be.getContext("2d").drawImage(P,0,0,Ce,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ce+"x"+q+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return hg(P.width)&&hg(P.height)}function w(P){return a?!1:P.wrapS!==Bn||P.wrapT!==Bn||P.minFilter!==tn&&P.minFilter!==En}function C(P,M){return P.generateMipmaps&&M&&P.minFilter!==tn&&P.minFilter!==En}function L(P){t.generateMipmap(P)}function y(P,M,F,te,le=!1){if(a===!1)return M;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=M;return M===6403&&(F===5126&&(fe=33326),F===5131&&(fe=33325),F===5121&&(fe=33321)),M===33319&&(F===5126&&(fe=33328),F===5131&&(fe=33327),F===5121&&(fe=33323)),M===6408&&(F===5126&&(fe=34836),F===5131&&(fe=34842),F===5121&&(fe=te===ot&&le===!1?35907:32856),F===32819&&(fe=32854),F===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function T(P,M,F){return C(P,F)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){return P===tn||P===Gm||P===Hm?9728:9729}function N(P){const M=P.target;M.removeEventListener("dispose",N),ee(M),M.isVideoTexture&&_.delete(M)}function re(P){const M=P.target;M.removeEventListener("dispose",re),j(M)}function ee(P){const M=i.get(P);if(M.__webglInit===void 0)return;const F=P.source,te=p.get(F);if(te){const le=te[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&U(P),Object.keys(te).length===0&&p.delete(F)}i.remove(P)}function U(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const F=P.source,te=p.get(F);delete te[M.__cacheKey],o.memory.textures--}function j(P){const M=P.texture,F=i.get(P),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)t.deleteFramebuffer(F.__webglFramebuffer[le]),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[le]);else{if(t.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let le=0;le<F.__webglColorRenderbuffer.length;le++)F.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[le]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,fe=M.length;le<fe;le++){const Ce=i.get(M[le]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(M[le])}i.remove(M),i.remove(P)}let W=0;function J(){W=0}function I(){const P=W;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),W+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.encoding),M.join()}function B(P,M){const F=i.get(P);if(P.isVideoTexture&&Ke(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,P,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,F.__webglTexture)}function K(P,M){const F=i.get(P);if(P.version>0&&F.__version!==P.version){Z(F,P,M);return}n.activeTexture(33984+M),n.bindTexture(35866,F.__webglTexture)}function O(P,M){const F=i.get(P);if(P.version>0&&F.__version!==P.version){Z(F,P,M);return}n.activeTexture(33984+M),n.bindTexture(32879,F.__webglTexture)}function V(P,M){const F=i.get(P);if(P.version>0&&F.__version!==P.version){_e(F,P,M);return}n.activeTexture(33984+M),n.bindTexture(34067,F.__webglTexture)}const X={[Id]:10497,[Bn]:33071,[kd]:33648},ae={[tn]:9728,[Gm]:9984,[Hm]:9986,[En]:9729,[rM]:9985,[cc]:9987};function A(P,M,F){if(F?(t.texParameteri(P,10242,X[M.wrapS]),t.texParameteri(P,10243,X[M.wrapT]),(P===32879||P===35866)&&t.texParameteri(P,32882,X[M.wrapR]),t.texParameteri(P,10240,ae[M.magFilter]),t.texParameteri(P,10241,ae[M.minFilter])):(t.texParameteri(P,10242,33071),t.texParameteri(P,10243,33071),(P===32879||P===35866)&&t.texParameteri(P,32882,33071),(M.wrapS!==Bn||M.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,10240,R(M.magFilter)),t.texParameteri(P,10241,R(M.minFilter)),M.minFilter!==tn&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===Tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function xe(P,M){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const te=M.source;let le=p.get(te);le===void 0&&(le={},p.set(te,le));const fe=k(M);if(fe!==P.__cacheKey){le[fe]===void 0&&(le[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),le[fe].usedTimes++;const Ce=le[P.__cacheKey];Ce!==void 0&&(le[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&U(M)),P.__cacheKey=fe,P.__webglTexture=le[fe].texture}return F}function Z(P,M,F){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const le=xe(P,M),fe=M.source;if(n.activeTexture(33984+F),n.bindTexture(te,P.__webglTexture),fe.version!==fe.__currentVersion||le===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Ce=w(M)&&S(M.image)===!1;let q=x(M.image,Ce,!1,c);q=Ht(M,q);const be=S(q)||a,ye=s.convert(M.format,M.encoding);let Ee=s.convert(M.type),Se=y(M.internalFormat,ye,Ee,M.encoding,M.isVideoTexture);A(te,M,be);let Ie;const Xe=M.mipmaps,mt=a&&M.isVideoTexture!==!0,z=fe.__currentVersion===void 0||le===!0,ge=T(M,q,be);if(M.isDepthTexture)Se=6402,a?M.type===Tr?Se=36012:M.type===Cr?Se=33190:M.type===$s?Se=35056:Se=33189:M.type===Tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Dr&&Se===6402&&M.type!==g1&&M.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cr,Ee=s.convert(M.type)),M.format===so&&Se===6402&&(Se=34041,M.type!==$s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$s,Ee=s.convert(M.type))),z&&(mt?n.texStorage2D(3553,1,Se,q.width,q.height):n.texImage2D(3553,0,Se,q.width,q.height,0,ye,Ee,null));else if(M.isDataTexture)if(Xe.length>0&&be){mt&&z&&n.texStorage2D(3553,ge,Se,Xe[0].width,Xe[0].height);for(let Q=0,he=Xe.length;Q<he;Q++)Ie=Xe[Q],mt?n.texSubImage2D(3553,Q,0,0,Ie.width,Ie.height,ye,Ee,Ie.data):n.texImage2D(3553,Q,Se,Ie.width,Ie.height,0,ye,Ee,Ie.data);M.generateMipmaps=!1}else mt?(z&&n.texStorage2D(3553,ge,Se,q.width,q.height),n.texSubImage2D(3553,0,0,0,q.width,q.height,ye,Ee,q.data)):n.texImage2D(3553,0,Se,q.width,q.height,0,ye,Ee,q.data);else if(M.isCompressedTexture){mt&&z&&n.texStorage2D(3553,ge,Se,Xe[0].width,Xe[0].height);for(let Q=0,he=Xe.length;Q<he;Q++)Ie=Xe[Q],M.format!==ii?ye!==null?mt?n.compressedTexSubImage2D(3553,Q,0,0,Ie.width,Ie.height,ye,Ie.data):n.compressedTexImage2D(3553,Q,Se,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?n.texSubImage2D(3553,Q,0,0,Ie.width,Ie.height,ye,Ee,Ie.data):n.texImage2D(3553,Q,Se,Ie.width,Ie.height,0,ye,Ee,Ie.data)}else if(M.isDataArrayTexture)mt?(z&&n.texStorage3D(35866,ge,Se,q.width,q.height,q.depth),n.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ye,Ee,q.data)):n.texImage3D(35866,0,Se,q.width,q.height,q.depth,0,ye,Ee,q.data);else if(M.isData3DTexture)mt?(z&&n.texStorage3D(32879,ge,Se,q.width,q.height,q.depth),n.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ye,Ee,q.data)):n.texImage3D(32879,0,Se,q.width,q.height,q.depth,0,ye,Ee,q.data);else if(M.isFramebufferTexture){if(z)if(mt)n.texStorage2D(3553,ge,Se,q.width,q.height);else{let Q=q.width,he=q.height;for(let de=0;de<ge;de++)n.texImage2D(3553,de,Se,Q,he,0,ye,Ee,null),Q>>=1,he>>=1}}else if(Xe.length>0&&be){mt&&z&&n.texStorage2D(3553,ge,Se,Xe[0].width,Xe[0].height);for(let Q=0,he=Xe.length;Q<he;Q++)Ie=Xe[Q],mt?n.texSubImage2D(3553,Q,0,0,ye,Ee,Ie):n.texImage2D(3553,Q,Se,ye,Ee,Ie);M.generateMipmaps=!1}else mt?(z&&n.texStorage2D(3553,ge,Se,q.width,q.height),n.texSubImage2D(3553,0,0,0,ye,Ee,q)):n.texImage2D(3553,0,Se,ye,Ee,q);C(M,be)&&L(te),fe.__currentVersion=fe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function _e(P,M,F){if(M.image.length!==6)return;const te=xe(P,M),le=M.source;if(n.activeTexture(33984+F),n.bindTexture(34067,P.__webglTexture),le.version!==le.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ce=M.image[0]&&M.image[0].isDataTexture,q=[];for(let Q=0;Q<6;Q++)!fe&&!Ce?q[Q]=x(M.image[Q],!1,!0,u):q[Q]=Ce?M.image[Q].image:M.image[Q],q[Q]=Ht(M,q[Q]);const be=q[0],ye=S(be)||a,Ee=s.convert(M.format,M.encoding),Se=s.convert(M.type),Ie=y(M.internalFormat,Ee,Se,M.encoding),Xe=a&&M.isVideoTexture!==!0,mt=le.__currentVersion===void 0||te===!0;let z=T(M,be,ye);A(34067,M,ye);let ge;if(fe){Xe&&mt&&n.texStorage2D(34067,z,Ie,be.width,be.height);for(let Q=0;Q<6;Q++){ge=q[Q].mipmaps;for(let he=0;he<ge.length;he++){const de=ge[he];M.format!==ii?Ee!==null?Xe?n.compressedTexSubImage2D(34069+Q,he,0,0,de.width,de.height,Ee,de.data):n.compressedTexImage2D(34069+Q,he,Ie,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?n.texSubImage2D(34069+Q,he,0,0,de.width,de.height,Ee,Se,de.data):n.texImage2D(34069+Q,he,Ie,de.width,de.height,0,Ee,Se,de.data)}}}else{ge=M.mipmaps,Xe&&mt&&(ge.length>0&&z++,n.texStorage2D(34067,z,Ie,q[0].width,q[0].height));for(let Q=0;Q<6;Q++)if(Ce){Xe?n.texSubImage2D(34069+Q,0,0,0,q[Q].width,q[Q].height,Ee,Se,q[Q].data):n.texImage2D(34069+Q,0,Ie,q[Q].width,q[Q].height,0,Ee,Se,q[Q].data);for(let he=0;he<ge.length;he++){const We=ge[he].image[Q].image;Xe?n.texSubImage2D(34069+Q,he+1,0,0,We.width,We.height,Ee,Se,We.data):n.texImage2D(34069+Q,he+1,Ie,We.width,We.height,0,Ee,Se,We.data)}}else{Xe?n.texSubImage2D(34069+Q,0,0,0,Ee,Se,q[Q]):n.texImage2D(34069+Q,0,Ie,Ee,Se,q[Q]);for(let he=0;he<ge.length;he++){const de=ge[he];Xe?n.texSubImage2D(34069+Q,he+1,0,0,Ee,Se,de.image[Q]):n.texImage2D(34069+Q,he+1,Ie,Ee,Se,de.image[Q])}}}C(M,ye)&&L(34067),le.__currentVersion=le.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function oe(P,M,F,te,le){const fe=s.convert(F.format,F.encoding),Ce=s.convert(F.type),q=y(F.internalFormat,fe,Ce,F.encoding);i.get(M).__hasExternalTextures||(le===32879||le===35866?n.texImage3D(le,0,q,M.width,M.height,M.depth,0,fe,Ce,null):n.texImage2D(le,0,q,M.width,M.height,0,fe,Ce,null)),n.bindFramebuffer(36160,P),Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,te,le,i.get(F).__webglTexture,0,Fe(M)):t.framebufferTexture2D(36160,te,le,i.get(F).__webglTexture,0),n.bindFramebuffer(36160,null)}function we(P,M,F){if(t.bindRenderbuffer(36161,P),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(F||Ue(M)){const le=M.depthTexture;le&&le.isDepthTexture&&(le.type===Tr?te=36012:le.type===Cr&&(te=33190));const fe=Fe(M);Ue(M)?d.renderbufferStorageMultisampleEXT(36161,fe,te,M.width,M.height):t.renderbufferStorageMultisample(36161,fe,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,P)}else if(M.depthBuffer&&M.stencilBuffer){const te=Fe(M);F&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let le=0;le<te.length;le++){const fe=te[le],Ce=s.convert(fe.format,fe.encoding),q=s.convert(fe.type),be=y(fe.internalFormat,Ce,q,fe.encoding),ye=Fe(M);F&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,ye,be,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,ye,be,M.width,M.height):t.renderbufferStorage(36161,be,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,le=Fe(M);if(M.depthTexture.format===Dr)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,le):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===so)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,le):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function me(P){const M=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(F){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),we(M.__webglDepthbuffer[te],P,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),we(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function Ge(P,M,F){const te=i.get(P);M!==void 0&&oe(te.__webglFramebuffer,P,P.texture,36064,3553),F!==void 0&&me(P)}function Ae(P){const M=P.texture,F=i.get(P),te=i.get(M);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,Ce=S(P)||a;if(le){F.__webglFramebuffer=[];for(let q=0;q<6;q++)F.__webglFramebuffer[q]=t.createFramebuffer()}else{if(F.__webglFramebuffer=t.createFramebuffer(),fe)if(r.drawBuffers){const q=P.texture;for(let be=0,ye=q.length;be<ye;be++){const Ee=i.get(q[be]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ue(P)===!1){const q=fe?M:[M];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let be=0;be<q.length;be++){const ye=q[be];F.__webglColorRenderbuffer[be]=t.createRenderbuffer(),t.bindRenderbuffer(36161,F.__webglColorRenderbuffer[be]);const Ee=s.convert(ye.format,ye.encoding),Se=s.convert(ye.type),Ie=y(ye.internalFormat,Ee,Se,ye.encoding),Xe=Fe(P);t.renderbufferStorageMultisample(36161,Xe,Ie,P.width,P.height),t.framebufferRenderbuffer(36160,36064+be,36161,F.__webglColorRenderbuffer[be])}t.bindRenderbuffer(36161,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),we(F.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(le){n.bindTexture(34067,te.__webglTexture),A(34067,M,Ce);for(let q=0;q<6;q++)oe(F.__webglFramebuffer[q],P,M,36064,34069+q);C(M,Ce)&&L(34067),n.unbindTexture()}else if(fe){const q=P.texture;for(let be=0,ye=q.length;be<ye;be++){const Ee=q[be],Se=i.get(Ee);n.bindTexture(3553,Se.__webglTexture),A(3553,Ee,Ce),oe(F.__webglFramebuffer,P,Ee,36064+be,3553),C(Ee,Ce)&&L(3553)}n.unbindTexture()}else{let q=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?q=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(q,te.__webglTexture),A(q,M,Ce),oe(F.__webglFramebuffer,P,M,36064,q),C(M,Ce)&&L(q),n.unbindTexture()}P.depthBuffer&&me(P)}function He(P){const M=S(P)||a,F=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,le=F.length;te<le;te++){const fe=F[te];if(C(fe,M)){const Ce=P.isWebGLCubeRenderTarget?34067:3553,q=i.get(fe).__webglTexture;n.bindTexture(Ce,q),L(Ce),n.unbindTexture()}}}function Re(P){if(a&&P.samples>0&&Ue(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],F=P.width,te=P.height;let le=16384;const fe=[],Ce=P.stencilBuffer?33306:36096,q=i.get(P),be=P.isWebGLMultipleRenderTargets===!0;if(be)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,null),n.bindFramebuffer(36160,q.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,null,0);n.bindFramebuffer(36008,q.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,q.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){fe.push(36064+ye),P.depthBuffer&&fe.push(Ce);const Ee=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(Ee===!1&&(P.depthBuffer&&(le|=256),P.stencilBuffer&&(le|=1024)),be&&t.framebufferRenderbuffer(36008,36064,36161,q.__webglColorRenderbuffer[ye]),Ee===!0&&(t.invalidateFramebuffer(36008,[Ce]),t.invalidateFramebuffer(36009,[Ce])),be){const Se=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Se,0)}t.blitFramebuffer(0,0,F,te,0,0,F,te,le,9728),m&&t.invalidateFramebuffer(36008,fe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),be)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ye,36161,q.__webglColorRenderbuffer[ye]);const Ee=i.get(M[ye]).__webglTexture;n.bindFramebuffer(36160,q.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ye,3553,Ee,0)}n.bindFramebuffer(36009,q.__webglMultisampledFramebuffer)}}function Fe(P){return Math.min(f,P.samples)}function Ue(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ke(P){const M=o.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function Ht(P,M){const F=P.encoding,te=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Nd||F!==Wr&&(F===ot?a===!1?e.has("EXT_sRGB")===!0&&te===ii?(P.format=Nd,P.minFilter=En,P.generateMipmaps=!1):M=x1.sRGBToLinear(M):(te!==ii||le!==Hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),M}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=K,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ue}function pT(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Hr)return 5121;if(s===lM)return 32819;if(s===uM)return 32820;if(s===sM)return 5120;if(s===oM)return 5122;if(s===g1)return 5123;if(s===aM)return 5124;if(s===Cr)return 5125;if(s===Tr)return 5126;if(s===_a)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cM)return 6406;if(s===ii)return 6408;if(s===dM)return 6409;if(s===hM)return 6410;if(s===Dr)return 6402;if(s===so)return 34041;if(s===pM)return 6403;if(s===fM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===mM)return 36244;if(s===gM)return 33319;if(s===vM)return 33320;if(s===_M)return 36249;if(s===Xc||s===qc||s===Yc||s===Zc)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wm||s===$m||s===jm||s===Xm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$m)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qm||s===Ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===qm)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ym)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zm||s===Qm||s===Jm||s===Km||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===ug)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Km)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ng)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ig)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===og)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ag)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ug)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cg)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class mT extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gl extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i);if(u.joints[h.jointName]===void 0){const v=new gl;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[h.jointName]=v,u.add(v)}const g=u.joints[h.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class vT extends Ln{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Dr,c!==Dr&&c!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Dr&&(i=Cr),i===void 0&&c===so&&(i=$s),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1}}class _T extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,m=null;const _=n.getContextAttributes();let h=null,p=null;const g=[],v=[],x=new Vt;x.layers.enable(1),x.viewport=new Et;const S=new Vt;S.layers.enable(2),S.viewport=new Et;const w=[x,S],C=new mT;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=g[k];return B===void 0&&(B=new Cf,g[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=g[k];return B===void 0&&(B=new Cf,g[k]=B),B.getGripSpace()},this.getHand=function(k){let B=g[k];return B===void 0&&(B=new Cf,g[k]=B),B.getHandSpace()};function T(k){const B=v.indexOf(k.inputSource);if(B===-1)return;const K=g[B];K!==void 0&&K.dispatchEvent({type:k.type,data:k.inputSource})}function R(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",N);for(let k=0;k<g.length;k++){const B=v[k];B!==null&&(v[k]=null,g[k].disconnect(B))}L=null,y=null,e.setRenderTarget(h),d=null,f=null,c=null,r=null,p=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",R),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,B),r.updateRenderState({baseLayer:d}),p=new $r(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Hr,encoding:e.outputEncoding})}else{let B=null,K=null,O=null;_.depth&&(O=_.stencil?35056:33190,B=_.stencil?so:Dr,K=_.stencil?$s:Cr);const V={colorFormat:32856,depthFormat:O,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(V),r.updateRenderState({layers:[f]}),p=new $r(f.textureWidth,f.textureHeight,{format:ii,type:Hr,depthTexture:new vT(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const X=e.properties.get(p);X.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(k){for(let B=0;B<k.removed.length;B++){const K=k.removed[B],O=v.indexOf(K);O>=0&&(v[O]=null,g[O].dispatchEvent({type:"disconnected",data:K}))}for(let B=0;B<k.added.length;B++){const K=k.added[B];let O=v.indexOf(K);if(O===-1){for(let X=0;X<g.length;X++)if(X>=v.length){v.push(K),O=X;break}else if(v[X]===null){v[X]=K,O=X;break}if(O===-1)break}const V=g[O];V&&V.dispatchEvent({type:"connected",data:K})}}const re=new D,ee=new D;function U(k,B,K){re.setFromMatrixPosition(B.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const O=re.distanceTo(ee),V=B.projectionMatrix.elements,X=K.projectionMatrix.elements,ae=V[14]/(V[10]-1),A=V[14]/(V[10]+1),xe=(V[9]+1)/V[5],Z=(V[9]-1)/V[5],_e=(V[8]-1)/V[0],oe=(X[8]+1)/X[0],we=ae*_e,ue=ae*oe,me=O/(-_e+oe),Ge=me*-_e;B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ge),k.translateZ(me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ae=ae+me,He=A+me,Re=we-Ge,Fe=ue+(O-Ge),Ue=xe*A/He*Ae,Ke=Z*A/He*Ae;k.projectionMatrix.makePerspective(Re,Fe,Ue,Ke,Ae,He)}function j(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;C.near=S.near=x.near=k.near,C.far=S.far=x.far=k.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const B=k.parent,K=C.cameras;j(C,B);for(let V=0;V<K.length;V++)j(K[V],B);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),k.position.copy(C.position),k.quaternion.copy(C.quaternion),k.scale.copy(C.scale),k.matrix.copy(C.matrix),k.matrixWorld.copy(C.matrixWorld);const O=k.children;for(let V=0,X=O.length;V<X;V++)O[V].updateMatrixWorld(!0);K.length===2?U(C,x,S):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let W=null;function J(k,B){if(u=B.getViewerPose(l||o),m=B,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let O=!1;K.length!==C.cameras.length&&(C.cameras.length=0,O=!0);for(let V=0;V<K.length;V++){const X=K[V];let ae=null;if(d!==null)ae=d.getViewport(X);else{const xe=c.getViewSubImage(f,X);ae=xe.viewport,V===0&&(e.setRenderTargetTextures(p,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(p))}let A=w[V];A===void 0&&(A=new Vt,A.layers.enable(V),A.viewport=new Et,w[V]=A),A.matrix.fromArray(X.transform.matrix),A.projectionMatrix.fromArray(X.projectionMatrix),A.viewport.set(ae.x,ae.y,ae.width,ae.height),V===0&&C.matrix.copy(A.matrix),O===!0&&C.cameras.push(A)}}for(let K=0;K<g.length;K++){const O=v[K],V=g[K];O!==null&&V!==void 0&&V.update(O,B,l||o)}W&&W(k,B),m=null}const I=new A1;I.setAnimationLoop(J),this.setAnimationLoop=function(k){W=k},this.dispose=function(){}}}function xT(t,e){function n(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===jn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===jn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===jn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,w,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(35345,x);for(let C=0,L=S.length;C<L;C++){const y=S[C];if(m(y,C,w)===!0){const T=y.value,R=y.__offset;typeof T=="number"?(y.__data[0]=T,t.bufferSubData(35345,R,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),t.bufferSubData(35345,R,y.__data))}}t.bindBuffer(35345,null)}function m(v,x,S){const w=v.value;if(S[x]===void 0)return typeof w=="number"?S[x]=w:S[x]=w.clone(),!0;if(typeof w=="number"){if(S[x]!==w)return S[x]=w,!0}else{const C=S[x];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;let C=0;for(let L=0,y=x.length;L<y;L++){const T=x[L],R=h(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,L>0){C=S%w;const N=w-C;C!==0&&N-R.boundary<0&&(S+=w-C,T.__offset=S)}S+=R.storage}return C=S%w,C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function h(v){const x=v.value,S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function ST(){const t=xa("canvas");return t.style.display="block",t}function k1(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:ST(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wr,this.physicallyCorrectLights=!1,this.toneMapping=wi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,g=0,v=0,x=null,S=-1,w=null;const C=new Et,L=new Et;let y=null,T=e.width,R=e.height,N=1,re=null,ee=null;const U=new Et(0,0,T,R),j=new Et(0,0,T,R);let W=!1;const J=new rp;let I=!1,k=!1,B=null;const K=new ut,O=new Pe,V=new D,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return x===null?N:1}let A=n;function xe(b,G){for(let $=0;$<b.length;$++){const H=b[$],ne=e.getContext(H,G);if(ne!==null)return ne}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${np}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Xe,!1),e.addEventListener("webglcontextcreationerror",mt,!1),A===null){const G=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&G.shift(),A=xe(G,b),A===null)throw xe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,_e,oe,we,ue,me,Ge,Ae,He,Re,Fe,Ue,Ke,Ht,P,M,F,te,le,fe,Ce,q,be,ye;function Ee(){Z=new Rb(A),_e=new bb(A,Z,t),Z.init(_e),q=new pT(A,Z,_e),oe=new dT(A,Z,_e),we=new kb,ue=new JC,me=new hT(A,Z,oe,ue,_e,q,we),Ge=new Tb(h),Ae=new Lb(h),He=new jM(A,_e),be=new Mb(A,Z,He,_e),Re=new Db(A,He,we,be),Fe=new Fb(A,Re,He,we),le=new Ob(A,_e,me),M=new Cb(ue),Ue=new QC(h,Ge,Ae,Z,_e,be,M),Ke=new xT(h,ue),Ht=new eT,P=new oT(Z,_e),te=new wb(h,Ge,oe,Fe,c,o),F=new fT(h,Fe,_e),ye=new yT(A,we,_e,oe),fe=new Eb(A,Z,we,_e),Ce=new Ib(A,Z,we,_e),we.programs=Ue.programs,h.capabilities=_e,h.extensions=Z,h.properties=ue,h.renderLists=Ht,h.shadowMap=F,h.state=oe,h.info=we}Ee();const Se=new _T(h,A);this.xr=Se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(T,R,!1))},this.getSize=function(b){return b.set(T,R)},this.setSize=function(b,G,$){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,R=G,e.width=Math.floor(b*N),e.height=Math.floor(G*N),$!==!1&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(T*N,R*N).floor()},this.setDrawingBufferSize=function(b,G,$){T=b,R=G,N=$,e.width=Math.floor(b*$),e.height=Math.floor(G*$),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,G,$,H){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,G,$,H),oe.viewport(C.copy(U).multiplyScalar(N).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,G,$,H){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,G,$,H),oe.scissor(L.copy(j).multiplyScalar(N).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){oe.setScissorTest(W=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,G=!0,$=!0){let H=0;b&&(H|=16384),G&&(H|=256),$&&(H|=1024),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Xe,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ht.dispose(),P.dispose(),ue.dispose(),Ge.dispose(),Ae.dispose(),Fe.dispose(),be.dispose(),ye.dispose(),Ue.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",We),Se.removeEventListener("sessionend",bt),B&&(B.dispose(),B=null),gt.stop()};function Ie(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=we.autoReset,G=F.enabled,$=F.autoUpdate,H=F.needsUpdate,ne=F.type;Ee(),we.autoReset=b,F.enabled=G,F.autoUpdate=$,F.needsUpdate=H,F.type=ne}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function z(b){const G=b.target;G.removeEventListener("dispose",z),ge(G)}function ge(b){Q(b),ue.remove(b)}function Q(b){const G=ue.get(b).programs;G!==void 0&&(G.forEach(function($){Ue.releaseProgram($)}),b.isShaderMaterial&&Ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,$,H,ne,Le){G===null&&(G=X);const De=ne.isMesh&&ne.matrixWorld.determinant()<0,ze=Ex(b,G,$,H,ne);oe.setMaterial(H,De);let ke=$.index;const Ye=$.attributes.position;if(ke===null){if(Ye===void 0||Ye.count===0)return}else if(ke.count===0)return;let Be=1;H.wireframe===!0&&(ke=Re.getWireframeAttribute($),Be=2),be.setup(ne,H,ze,$,ke);let $e,dt=fe;ke!==null&&($e=He.get(ke),dt=Ce,dt.setIndex($e));const fr=ke!==null?ke.count:Ye.count,Jr=$.drawRange.start*Be,Kr=$.drawRange.count*Be,Qn=Le!==null?Le.start*Be:0,qe=Le!==null?Le.count*Be:1/0,es=Math.max(Jr,Qn),_t=Math.min(fr,Jr+Kr,Qn+qe)-1,yn=Math.max(0,_t-es+1);if(yn!==0){if(ne.isMesh)H.wireframe===!0?(oe.setLineWidth(H.wireframeLinewidth*ae()),dt.setMode(1)):dt.setMode(4);else if(ne.isLine){let Li=H.linewidth;Li===void 0&&(Li=1),oe.setLineWidth(Li*ae()),ne.isLineSegments?dt.setMode(1):ne.isLineLoop?dt.setMode(2):dt.setMode(3)}else ne.isPoints?dt.setMode(0):ne.isSprite&&dt.setMode(4);if(ne.isInstancedMesh)dt.renderInstances(es,yn,ne.count);else if($.isInstancedBufferGeometry){const Li=Math.min($.instanceCount,$._maxInstanceCount);dt.renderInstances(es,yn,Li)}else dt.render(es,yn)}},this.compile=function(b,G){d=P.get(b),d.init(),_.push(d),b.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights(h.physicallyCorrectLights),b.traverse(function($){const H=$.material;if(H)if(Array.isArray(H))for(let ne=0;ne<H.length;ne++){const Le=H[ne];pc(Le,b,$)}else pc(H,b,$)}),_.pop(),d=null};let he=null;function de(b){he&&he(b)}function We(){gt.stop()}function bt(){gt.start()}const gt=new A1;gt.setAnimationLoop(de),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(b){he=b,Se.setAnimationLoop(b),b===null?gt.stop():gt.start()},Se.addEventListener("sessionstart",We),Se.addEventListener("sessionend",bt),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(G),G=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,G,x),d=P.get(b,_.length),d.init(),_.push(d),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(K),k=this.localClippingEnabled,I=M.init(this.clippingPlanes,k,G),f=Ht.get(b,m.length),f.init(),m.push(f),Pi(b,G,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,ee),I===!0&&M.beginShadows();const $=d.state.shadowsArray;if(F.render($,b,G),I===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,b),d.setupLights(h.physicallyCorrectLights),G.isArrayCamera){const H=G.cameras;for(let ne=0,Le=H.length;ne<Le;ne++){const De=H[ne];ft(f,b,De,De.viewport)}}else ft(f,b,G);x!==null&&(me.updateMultisampleRenderTarget(x),me.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(h,b,G),be.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Pi(b,G,$,H){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){H&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const De=Fe.update(b),ze=b.material;ze.visible&&f.push(b,De,ze,$,V.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==we.render.frame&&(b.skeleton.update(),b.skeleton.frame=we.render.frame),!b.frustumCulled||J.intersectsObject(b))){H&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const De=Fe.update(b),ze=b.material;if(Array.isArray(ze)){const ke=De.groups;for(let Ye=0,Be=ke.length;Ye<Be;Ye++){const $e=ke[Ye],dt=ze[$e.materialIndex];dt&&dt.visible&&f.push(b,De,dt,$,V.z,$e)}}else ze.visible&&f.push(b,De,ze,$,V.z,null)}}const Le=b.children;for(let De=0,ze=Le.length;De<ze;De++)Pi(Le[De],G,$,H)}function ft(b,G,$,H){const ne=b.opaque,Le=b.transmissive,De=b.transparent;d.setupLightsView($),Le.length>0&&ui(ne,G,$),H&&oe.viewport(C.copy(H)),ne.length>0&&xn(ne,G,$),Le.length>0&&xn(Le,G,$),De.length>0&&xn(De,G,$),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ui(b,G,$){const H=_e.isWebGL2;B===null&&(B=new $r(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?_a:Hr,minFilter:cc,samples:H&&s===!0?4:0})),h.getDrawingBufferSize(O),H?B.setSize(O.x,O.y):B.setSize(Od(O.x),Od(O.y));const ne=h.getRenderTarget();h.setRenderTarget(B),h.clear();const Le=h.toneMapping;h.toneMapping=wi,xn(b,G,$),h.toneMapping=Le,me.updateMultisampleRenderTarget(B),me.updateRenderTargetMipmap(B),h.setRenderTarget(ne)}function xn(b,G,$){const H=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const De=b[ne],ze=De.object,ke=De.geometry,Ye=H===null?De.material:H,Be=De.group;ze.layers.test($.layers)&&Mx(ze,G,$,ke,Ye,Be)}}function Mx(b,G,$,H,ne,Le){b.onBeforeRender(h,G,$,H,ne,Le),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(h,G,$,H,b,Le),ne.transparent===!0&&ne.side===Gr?(ne.side=jn,ne.needsUpdate=!0,h.renderBufferDirect($,G,H,ne,b,Le),ne.side=va,ne.needsUpdate=!0,h.renderBufferDirect($,G,H,ne,b,Le),ne.side=Gr):h.renderBufferDirect($,G,H,ne,b,Le),b.onAfterRender(h,G,$,H,ne,Le)}function pc(b,G,$){G.isScene!==!0&&(G=X);const H=ue.get(b),ne=d.state.lights,Le=d.state.shadowsArray,De=ne.state.version,ze=Ue.getParameters(b,ne.state,Le,G,$),ke=Ue.getProgramCacheKey(ze);let Ye=H.programs;H.environment=b.isMeshStandardMaterial?G.environment:null,H.fog=G.fog,H.envMap=(b.isMeshStandardMaterial?Ae:Ge).get(b.envMap||H.environment),Ye===void 0&&(b.addEventListener("dispose",z),Ye=new Map,H.programs=Ye);let Be=Ye.get(ke);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===De)return vp(b,ze),Be}else ze.uniforms=Ue.getUniforms(b),b.onBuild($,ze,h),b.onBeforeCompile(ze,h),Be=Ue.acquireProgram(ze,ke),Ye.set(ke,Be),H.uniforms=ze.uniforms;const $e=H.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=M.uniform),vp(b,ze),H.needsLights=Cx(b),H.lightsStateVersion=De,H.needsLights&&($e.ambientLightColor.value=ne.state.ambient,$e.lightProbe.value=ne.state.probe,$e.directionalLights.value=ne.state.directional,$e.directionalLightShadows.value=ne.state.directionalShadow,$e.spotLights.value=ne.state.spot,$e.spotLightShadows.value=ne.state.spotShadow,$e.rectAreaLights.value=ne.state.rectArea,$e.ltc_1.value=ne.state.rectAreaLTC1,$e.ltc_2.value=ne.state.rectAreaLTC2,$e.pointLights.value=ne.state.point,$e.pointLightShadows.value=ne.state.pointShadow,$e.hemisphereLights.value=ne.state.hemi,$e.directionalShadowMap.value=ne.state.directionalShadowMap,$e.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,$e.spotShadowMap.value=ne.state.spotShadowMap,$e.spotShadowMatrix.value=ne.state.spotShadowMatrix,$e.pointShadowMap.value=ne.state.pointShadowMap,$e.pointShadowMatrix.value=ne.state.pointShadowMatrix);const dt=Be.getUniforms(),fr=Ul.seqWithValue(dt.seq,$e);return H.currentProgram=Be,H.uniformsList=fr,Be}function vp(b,G){const $=ue.get(b);$.outputEncoding=G.outputEncoding,$.instancing=G.instancing,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Ex(b,G,$,H,ne){G.isScene!==!0&&(G=X),me.resetTextureUnits();const Le=G.fog,De=H.isMeshStandardMaterial?G.environment:null,ze=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Wr,ke=(H.isMeshStandardMaterial?Ae:Ge).get(H.envMap||De),Ye=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Be=!!H.normalMap&&!!$.attributes.tangent,$e=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,fr=!!$.morphAttributes.color,Jr=H.toneMapped?h.toneMapping:wi,Kr=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qn=Kr!==void 0?Kr.length:0,qe=ue.get(H),es=d.state.lights;if(I===!0&&(k===!0||b!==w)){const an=b===w&&H.id===S;M.setState(H,b,an)}let _t=!1;H.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==es.state.version||qe.outputEncoding!==ze||ne.isInstancedMesh&&qe.instancing===!1||!ne.isInstancedMesh&&qe.instancing===!0||ne.isSkinnedMesh&&qe.skinning===!1||!ne.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ke||H.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==M.numPlanes||qe.numIntersection!==M.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Be||qe.morphTargets!==$e||qe.morphNormals!==dt||qe.morphColors!==fr||qe.toneMapping!==Jr||_e.isWebGL2===!0&&qe.morphTargetsCount!==Qn)&&(_t=!0):(_t=!0,qe.__version=H.version);let yn=qe.currentProgram;_t===!0&&(yn=pc(H,G,ne));let Li=!1,_o=!1,mc=!1;const Wt=yn.getUniforms(),xo=qe.uniforms;if(oe.useProgram(yn.program)&&(Li=!0,_o=!0,mc=!0),H.id!==S&&(S=H.id,_o=!0),Li||w!==b){if(Wt.setValue(A,"projectionMatrix",b.projectionMatrix),_e.logarithmicDepthBuffer&&Wt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,_o=!0,mc=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const an=Wt.map.cameraPosition;an!==void 0&&an.setValue(A,V.setFromMatrixPosition(b.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Wt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ne.isSkinnedMesh)&&Wt.setValue(A,"viewMatrix",b.matrixWorldInverse)}if(ne.isSkinnedMesh){Wt.setOptional(A,ne,"bindMatrix"),Wt.setOptional(A,ne,"bindMatrixInverse");const an=ne.skeleton;an&&(_e.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Wt.setValue(A,"boneTexture",an.boneTexture,me),Wt.setValue(A,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gc=$.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&_e.isWebGL2===!0)&&le.update(ne,$,H,yn),(_o||qe.receiveShadow!==ne.receiveShadow)&&(qe.receiveShadow=ne.receiveShadow,Wt.setValue(A,"receiveShadow",ne.receiveShadow)),_o&&(Wt.setValue(A,"toneMappingExposure",h.toneMappingExposure),qe.needsLights&&bx(xo,mc),Le&&H.fog===!0&&Ke.refreshFogUniforms(xo,Le),Ke.refreshMaterialUniforms(xo,H,N,R,B),Ul.upload(A,qe.uniformsList,xo,me)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ul.upload(A,qe.uniformsList,xo,me),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Wt.setValue(A,"center",ne.center),Wt.setValue(A,"modelViewMatrix",ne.modelViewMatrix),Wt.setValue(A,"normalMatrix",ne.normalMatrix),Wt.setValue(A,"modelMatrix",ne.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const an=H.uniformsGroups;for(let vc=0,Tx=an.length;vc<Tx;vc++)if(_e.isWebGL2){const _p=an[vc];ye.update(_p,yn),ye.bind(_p,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function bx(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Cx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,G,$){ue.get(b.texture).__webglTexture=G,ue.get(b.depthTexture).__webglTexture=$;const H=ue.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=$===void 0,H.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,G){const $=ue.get(b);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,$=0){x=b,g=G,v=$;let H=!0;if(b){const ke=ue.get(b);ke.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),H=!1):ke.__webglFramebuffer===void 0?me.setupRenderTarget(b):ke.__hasExternalTextures&&me.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture)}let ne=null,Le=!1,De=!1;if(b){const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture)&&(De=!0);const Ye=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ne=Ye[G],Le=!0):_e.isWebGL2&&b.samples>0&&me.useMultisampledRTT(b)===!1?ne=ue.get(b).__webglMultisampledFramebuffer:ne=Ye,C.copy(b.viewport),L.copy(b.scissor),y=b.scissorTest}else C.copy(U).multiplyScalar(N).floor(),L.copy(j).multiplyScalar(N).floor(),y=W;if(oe.bindFramebuffer(36160,ne)&&_e.drawBuffers&&H&&oe.drawBuffers(b,ne),oe.viewport(C),oe.scissor(L),oe.setScissorTest(y),Le){const ke=ue.get(b.texture);A.framebufferTexture2D(36160,36064,34069+G,ke.__webglTexture,$)}else if(De){const ke=ue.get(b.texture),Ye=G||0;A.framebufferTextureLayer(36160,36064,ke.__webglTexture,$||0,Ye)}S=-1},this.readRenderTargetPixels=function(b,G,$,H,ne,Le,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){oe.bindFramebuffer(36160,ze);try{const ke=b.texture,Ye=ke.format,Be=ke.type;if(Ye!==ii&&q.convert(Ye)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Be===_a&&(Z.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Be!==Hr&&q.convert(Be)!==A.getParameter(35738)&&!(Be===Tr&&(_e.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-H&&$>=0&&$<=b.height-ne&&A.readPixels(G,$,H,ne,q.convert(Ye),q.convert(Be),Le)}finally{const ke=x!==null?ue.get(x).__webglFramebuffer:null;oe.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(b,G,$=0){const H=Math.pow(2,-$),ne=Math.floor(G.image.width*H),Le=Math.floor(G.image.height*H);me.setTexture2D(G,0),A.copyTexSubImage2D(3553,$,0,0,b.x,b.y,ne,Le),oe.unbindTexture()},this.copyTextureToTexture=function(b,G,$,H=0){const ne=G.image.width,Le=G.image.height,De=q.convert($.format),ze=q.convert($.type);me.setTexture2D($,0),A.pixelStorei(37440,$.flipY),A.pixelStorei(37441,$.premultiplyAlpha),A.pixelStorei(3317,$.unpackAlignment),G.isDataTexture?A.texSubImage2D(3553,H,b.x,b.y,ne,Le,De,ze,G.image.data):G.isCompressedTexture?A.compressedTexSubImage2D(3553,H,b.x,b.y,G.mipmaps[0].width,G.mipmaps[0].height,De,G.mipmaps[0].data):A.texSubImage2D(3553,H,b.x,b.y,De,ze,G.image),H===0&&$.generateMipmaps&&A.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,$,H,ne=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,ke=q.convert(H.format),Ye=q.convert(H.type);let Be;if(H.isData3DTexture)me.setTexture3D(H,0),Be=32879;else if(H.isDataArrayTexture)me.setTexture2DArray(H,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,H.flipY),A.pixelStorei(37441,H.premultiplyAlpha),A.pixelStorei(3317,H.unpackAlignment);const $e=A.getParameter(3314),dt=A.getParameter(32878),fr=A.getParameter(3316),Jr=A.getParameter(3315),Kr=A.getParameter(32877),Qn=$.isCompressedTexture?$.mipmaps[0]:$.image;A.pixelStorei(3314,Qn.width),A.pixelStorei(32878,Qn.height),A.pixelStorei(3316,b.min.x),A.pixelStorei(3315,b.min.y),A.pixelStorei(32877,b.min.z),$.isDataTexture||$.isData3DTexture?A.texSubImage3D(Be,ne,G.x,G.y,G.z,Le,De,ze,ke,Ye,Qn.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Be,ne,G.x,G.y,G.z,Le,De,ze,ke,Qn.data)):A.texSubImage3D(Be,ne,G.x,G.y,G.z,Le,De,ze,ke,Ye,Qn),A.pixelStorei(3314,$e),A.pixelStorei(32878,dt),A.pixelStorei(3316,fr),A.pixelStorei(3315,Jr),A.pixelStorei(32877,Kr),ne===0&&H.generateMipmaps&&A.generateMipmap(Be),oe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,oe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wT extends k1{}wT.prototype.isWebGL1Renderer=!0;class MT extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class ET{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=zd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new D;class pu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}setX(e,n){return this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Xn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class z1 extends mo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const Ro=new D,vs=new D,_s=new D,xs=new Pe,Do=new Pe,N1=new ut,vl=new D,Io=new D,_l=new D,Xg=new Pe,Tf=new Pe,qg=new Pe;class bT extends kt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new li;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ET(n,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new pu(i,3,0,!1)),gs.setAttribute("uv",new pu(i,2,3,!1))}this.geometry=gs,this.material=e!==void 0?e:new z1,this.center=new Pe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),N1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-_s.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xl(vl.set(-.5,-.5,0),_s,o,vs,r,s),xl(Io.set(.5,-.5,0),_s,o,vs,r,s),xl(_l.set(.5,.5,0),_s,o,vs,r,s),Xg.set(0,0),Tf.set(1,0),qg.set(1,1);let a=e.ray.intersectTriangle(vl,Io,_l,!1,Ro);if(a===null&&(xl(Io.set(-.5,.5,0),_s,o,vs,r,s),Tf.set(0,1),a=e.ray.intersectTriangle(vl,_l,Io,!1,Ro),a===null))return;const l=e.ray.origin.distanceTo(Ro);l<e.near||l>e.far||n.push({distance:l,point:Ro.clone(),uv:ni.getUV(Ro,vl,Io,_l,Xg,Tf,qg,new Pe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(t,e,n,i,r,s){xs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Do.x=s*xs.x-r*xs.y,Do.y=r*xs.x+s*xs.y):Do.copy(xs),t.copy(e),t.x+=Do.x,t.y+=Do.y,t.applyMatrix4(N1)}class O1 extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yg=new D,Zg=new D,Qg=new ut,Af=new w1,yl=new fc;class CT extends kt{constructor(e=new li,n=new O1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yg.fromBufferAttribute(n,r-1),Zg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yg.distanceTo(Zg);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;Qg.copy(r).invert(),Af.copy(e.ray).applyMatrix4(Qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new D,c=new D,f=new D,d=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){const w=_.getX(x),C=_.getX(x+1);if(u.fromBufferAttribute(p,w),c.fromBufferAttribute(p,C),Af.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||n.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){if(u.fromBufferAttribute(p,x),c.fromBufferAttribute(p,x+1),Af.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Jg=new D,Kg=new D;class TT extends CT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Jg.fromBufferAttribute(n,r),Kg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jg.distanceTo(Kg);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const e0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class AT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const PT=new AT;class F1{constructor(e){this.manager=e!==void 0?e:PT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class LT extends F1{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=e0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=xa("img");function l(){c(),e0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class RT extends F1{constructor(e){super(e)}load(e,n,i,r){const s=new Ln,o=new LT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class U1 extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class DT extends U1{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.groundColor=new je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const t0=new ut,n0=new D,i0=new D;class IT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),n.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i0),n.updateMatrixWorld(),t0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kT extends IT{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zT extends U1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.target=new kt,this.shadow=new kT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NT extends TT{constructor(e=10,n=10,i=4473924,r=8947848){i=new je(i),r=new je(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,m=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const h=d===s?i:r;h.toArray(u,m),m+=3,h.toArray(u,m),m+=3,h.toArray(u,m),m+=3,h.toArray(u,m),m+=3}const c=new li;c.setAttribute("position",new qn(l,3)),c.setAttribute("color",new qn(u,3));const f=new O1({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const ys=new D,r0=new ut,s0=new ut,o0=new D,a0=new D;class OT{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.autoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.updateMatrixWorld(),r0.copy(_.matrixWorldInverse),s0.multiplyMatrices(_.projectionMatrix,r0),u(m,m,_),d(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,o=r/2,l.style.width=m+"px",l.style.height=_+"px"};function u(m,_,h){if(m.isCSS2DObject){ys.setFromMatrixPosition(m.matrixWorld),ys.applyMatrix4(s0);const p=m.visible===!0&&ys.z>=-1&&ys.z<=1&&m.layers.test(h.layers)===!0;if(m.element.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(n,_,h);const v=m.element;v.style.transform="translate(-50%,-50%) translate("+(ys.x*s+s)+"px,"+(-ys.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(n,_,h)}const g={distanceToCameraSquared:c(h,m)};a.objects.set(m,g)}for(let p=0,g=m.children.length;p<g;p++)u(m.children[p],_,h)}function c(m,_){return o0.setFromMatrixPosition(m.matrixWorld),a0.setFromMatrixPosition(_.matrixWorld),o0.distanceToSquared(a0)}function f(m){const _=[];return m.traverse(function(h){h.isCSS2DObject&&_.push(h)}),_}function d(m){const _=f(m).sort(function(p,g){if(p.renderOrder!==g.renderOrder)return g.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(g).distanceToCameraSquared;return v-x}),h=_.length;for(let p=0,g=_.length;p<g;p++)_[p].element.style.zIndex=h-p}}}class l0{constructor(e,n,i){E(this,"camera");E(this,"domElement");E(this,"enabled");E(this,"screen");E(this,"rotateSpeed");E(this,"zoomSpeed");E(this,"panSpeed");E(this,"noRotate");E(this,"noZoom");E(this,"noPan");E(this,"staticMoving");E(this,"dynamicDampingFactor");E(this,"minDistance");E(this,"maxDistance");E(this,"keys");E(this,"mouseButtons");E(this,"target");E(this,"target0");E(this,"position0");E(this,"up0");E(this,"zoom0");E(this,"lastZoom");E(this,"EPS");E(this,"lastPosition");E(this,"_eye");E(this,"_movePrev");E(this,"_moveCurr");E(this,"_lastAxis");E(this,"_zoomStart");E(this,"_zoomEnd");E(this,"_panStart");E(this,"_panEnd");E(this,"_pointers");E(this,"_pointerPositions");E(this,"_state");E(this,"_touchZoomDistanceStart");E(this,"_touchZoomDistanceEnd");E(this,"_lastAngle");E(this,"context_menu");E(this,"pointer_down");E(this,"pointer_move");E(this,"pointer_up");E(this,"pointer_cancel");E(this,"mouse_wheel");E(this,"_rendDom");E(this,"_meshCenter");E(this,"_isRY",!0);n===void 0&&console.warn("TrackCameraCtrl: domElement is undefined."),n===document&&console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.'),this._rendDom=i,this.camera=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=3,this.zoomSpeed=3,this.panSpeed=2.5,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!0,this.dynamicDampingFactor=20,this.minDistance=500,this.maxDistance=5e5,this.mouseButtons={LEFT:jc.ROTATE,MIDDLE:jc.DOLLY,RIGHT:jc.PAN},this.target=new D(0,1500,0),this.EPS=1e-6,this.lastPosition=new D,this.lastZoom=1,this._lastAngle=0,this._state=ht.NONE,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._eye=new D,this._movePrev=new Pe,this._moveCurr=new Pe,this._lastAxis=new D,this._zoomStart=new Pe,this._zoomEnd=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._pointers=[],this._pointerPositions={},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.up0=this.camera.up.clone(),this.zoom0=this.camera.zoom,this.addEve(),this.handleResize(),this.update()}clearData(){this._rendDom=null,this.camera=null,this.domElement=null,this.screen=null,this.mouseButtons=null,this.target=null,this.lastPosition=null,this._eye=null,this._movePrev=null,this._moveCurr=null,this._lastAxis=null,this._zoomStart=null,this._zoomEnd=null,this._panStart=null,this._panEnd=null,this._pointers=null,this._pointerPositions=null,this.target0=null,this.position0=null,this.up0=null,this.context_menu=null,this.pointer_down=null,this.pointer_move=null,this.pointer_up=null,this.pointer_cancel=null,this.mouse_wheel=null}dispose(){this.removeEve(),this.clearData()}addEve(){console.log("track add eve"),this.context_menu=e=>{this.contextmenu(e)},this.pointer_down=e=>{this.onPointerDown(e)},this.pointer_move=e=>{this.onPointerMove(e)},this.pointer_up=e=>{this.onPointerUp(e)},this.pointer_cancel=e=>{this.onPointerCancel(e)},this.mouse_wheel=e=>{this.onMouseWheel(e)},this.domElement.addEventListener("contextmenu",this.context_menu),this.domElement.addEventListener("pointerdown",this.pointer_down),this.domElement.addEventListener("pointercancel",this.pointer_cancel),this.domElement.addEventListener("wheel",this.mouse_wheel,{passive:!1})}removeEve(){this.domElement.removeEventListener("contextmenu",this.context_menu),this.domElement.removeEventListener("pointerdown",this.pointer_down),this.domElement.removeEventListener("pointercancel",this.pointer_cancel),this.domElement.removeEventListener("wheel",this.mouse_wheel),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up)}handleResize(){this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight}getMouseOnScreen(e,n){let i=new Pe,r=(e-this.screen.left)/this.screen.width,s=(n-this.screen.top)/this.screen.height;return i.set(r,s),i}getMouseOnCircle(e,n){let i=new Pe,r=(e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),s=(this.screen.height+2*(this.screen.top-n))/this.screen.width;return i.set(r,s),i}rotateCamera(){let e=new D,n=new po,i=new D,r=new D,s=new D,o=new D;o.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let a=o.length();if(a){let u=this._moveCurr.clone().sub(this._movePrev.clone()).angle();if(this._isRY=u>Math.PI*.25&&u<Math.PI*.75||u>Math.PI*1.25&&u<Math.PI*1.75,this._eye.copy(this.camera.position).sub(this.target),i.copy(this._eye).normalize(),r.copy(this.camera.up).normalize(),s.crossVectors(r,i).normalize(),this._isRY?(s.setLength(0),r.setLength(this._moveCurr.y-this._movePrev.y)):(s.setLength(this._moveCurr.x-this._movePrev.x),r.setLength(0)),o.copy(r.add(s)),a*=this.rotateSpeed,this._isRY)e.crossVectors(o,this._eye).normalize();else{let c=this.camera.up.clone(),f=new D;c.y>1||c.y<-1?f.set(0,-1,0):f.set(0,1,0),e.copy(f),a=this._moveCurr.x-this._movePrev.x>0?-a:a}n.setFromAxisAngle(e,a),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)),this._lastAxis.copy(e),this._lastAngle=a}else!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.camera.position).sub(this.target),n.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)));this._movePrev.copy(this._moveCurr)}zoomCamera(){let e;this._state===ht.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.camera instanceof Vt?this._eye.multiplyScalar(e):this.camera instanceof ji?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.camera instanceof Vt?this._eye.multiplyScalar(e):this.camera instanceof ji?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor),this._eye.length()/165}adjustCameraUp(e){e.y>0?this.camera.up.set(0,1,0):e.y<0?this.camera.up.set(0,-1,0):e.x>0?this.camera.up.set(1,0,0):e.x<0?this.camera.up.set(-1,0,0):e.z>0?this.camera.up.set(0,0,1):e.z<0&&this.camera.up.set(0,0,-1)}panCameraByKey(e=-1){let n=new D,i=new D,r=new D,s=this._eye.length()*this.panSpeed*.01;if(r.x=e===0?s:e===1?-s:0,r.y=e===2?s:e===3?-s:0,r.z=e===4?s:e===5?-s:0,r.x!==0&&n.copy(this._eye).cross(this.camera.up).setLength(r.x),r.y!==0){let o=new D(0,1,0);n.add(i.copy(o).setLength(r.y))}if(r.z!==0){let o=new D(-this._eye.x,0,-this._eye.z);n.add(i.copy(o).setLength(r.z))}this.camera.position.add(n),this.target.add(n),this.update()}panCamera(){let e=new Pe,n=new D,i=new D;if(e.copy(this._panEnd).sub(this._panStart),e.lengthSq()){if(this.camera instanceof ji){const l=(this.camera.right-this.camera.left)/this.camera.zoom/this._rendDom.clientWidth,u=(this.camera.top-this.camera.bottom)/this.camera.zoom/this._rendDom.clientHeight;e.x*=l*.04,e.y*=u*.04}e.multiplyScalar(this._eye.length()*this.panSpeed);let r=new D(0,1,0),s=this.camera.position.y>=0?-this._eye.x:this._eye.x,o=this.camera.position.y>=0?-this._eye.z:this._eye.z,a=new D(s,0,o);i.copy(this._eye).cross(r).setLength(e.x),i.add(n.copy(a).setLength(e.y)),this.camera.position.add(i),this.target.add(i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(e.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}update(){this._eye.subVectors(this.camera.position,this.target),this.noRotate||this.rotateCamera(),this.noZoom||this.zoomCamera(),this.noPan||this.panCamera(),this.camera.position.addVectors(this.target,this._eye),this.camera instanceof Vt?(this.checkDistances(),this.camera.lookAt(this.target),this.lastPosition.distanceToSquared(this.camera.position)>this.EPS&&this.lastPosition.copy(this.camera.position)):this.camera instanceof ji?(this.camera.lookAt(this.target),(this.lastPosition.distanceToSquared(this.camera.position)>this.EPS||this.lastZoom!==this.camera.zoom)&&(this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom)):console.warn("TrackCameraCtrl: undefine camera type")}reset(){this._state=ht.NONE,this.target.copy(this.target0),this.camera.position.copy(this.position0),this.camera.up.copy(this.up0),this.camera.zoom=this.zoom0,this.camera.updateProjectionMatrix(),this._eye.subVectors(this.camera.position,this.target),this.camera.lookAt(this.target),this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom}onPointerDown(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this.pointer_move),this.domElement.addEventListener("pointerup",this.pointer_up)),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.onMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.onMouseMove(e))}onPointerUp(e){e.pointerType==="touch"?this.onTouchEnd(e):this.onMouseUp(),this.removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up))}onPointerCancel(e){this.removePointer(e)}keyup(){this.enabled!==!1&&(this._state=ht.NONE)}onMouseDown(e){switch(e.button){case this.mouseButtons.LEFT:this._state=ht.ROTATE;break;case this.mouseButtons.MIDDLE:this._state=ht.PAN;break;case this.mouseButtons.RIGHT:this._state=ht.PAN;break;default:this._state=ht.NONE;break}this._state===ht.ROTATE&&!this.noRotate?(this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):this._state===ht.ZOOM&&!this.noZoom?(this._zoomStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):this._state===ht.PAN&&!this.noPan&&(this._panStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart))}onMouseMove(e){this._state===ht.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._meshCenter?this._meshCenter:this.target):this._state===ht.ZOOM&&!this.noZoom?this._zoomEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)):this._state===ht.PAN&&!this.noPan&&this._panEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._state!=ht.NONE&&this.update()}zoomCameraByTarget(e){var n=e.clientX/this.screen.width*2-1,i=-(e.clientY/this.screen.height)*2+1;let r=new D(n,i,.5);r.unproject(this.camera);let s=3;r.sub(this.camera.position).setLength(s),e.deltaY<0?(this.camera.position.add(r),this.target.add(r)):(this.camera.position.sub(r),this.target.sub(r))}onMouseUp(){this._state=ht.NONE}onMouseWheel(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.zoomCameraByTarget(e),this.update()}}resetMouse(){}onTouchStart(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._state=ht.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this._state=ht.TOUCH_ZOOM_PAN;const n=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(n*n+i*i);const r=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this.getMouseOnScreen(r,s)),this._panEnd.copy(this._panStart);break}}onTouchMove(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY));break;default:const n=this.getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+r*r);const s=(e.pageX+n.x)/2,o=(e.pageY+n.y)/2;this._panEnd.copy(this.getMouseOnScreen(s,o));break}}onTouchEnd(e){switch(this._pointers.length){case 0:this._state=ht.NONE;break;case 1:this._state=ht.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this._state=ht.TOUCH_ZOOM_PAN,this._moveCurr.copy(this.getMouseOnCircle(e.pageX-this._movePrev.x,e.pageY-this._movePrev.y)),this._movePrev.copy(this._moveCurr);break}}contextmenu(e){this.enabled!==!1&&e.preventDefault()}addPointer(e){this._pointers.push(e)}removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Pe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}}class FT{constructor(){E(this,"frustumSize",1e4);E(this,"PLANE_WIDTH",2e6);E(this,"PLANE_HEIGTH",2e6);E(this,"near",100);E(this,"far",1e6);E(this,"_scene");E(this,"_plane");E(this,"_grid");E(this,"_ambLight");E(this,"_pcamera");E(this,"_ocamera");E(this,"_camera");E(this,"_render");E(this,"_css2dReder");E(this,"_viewWidth");E(this,"_viewHeight");E(this,"_posTips");E(this,"_trackCtrl");E(this,"_controls");this._viewWidth=window.innerWidth,this._viewHeight=window.innerHeight,this.createScene(),this.createPCamera(),this.createPlane(),this.createGrid(),this.createLight(),this.createCSS2DRender(),this.createRender(),this.createControls()}get scene(){return this._scene}get camera(){return this._camera}get render(){return this._render}get css2dRender(){return this._css2dReder}get controls(){return this._controls}set viewWidth(e){this._viewWidth=e}get viewWidth(){return this._viewWidth}set viewHeight(e){this._viewHeight=e}get viewHeight(){return this._viewHeight}get PlaneMesh(){return this._plane}get posPoint(){return this._posTips}dispose(){this.removeEvent()}addEvent(){}removeEvent(){}createCSS2DRender(){this._css2dReder=new OT,this._css2dReder.setSize(window.innerWidth,window.innerHeight),this._css2dReder.domElement.style.position="absolute",this._css2dReder.domElement.style.top="0px"}onCameraTargetChange(e){this._posTips&&(this._posTips.visible=e!=null),e&&this._posTips.position.set(e.x,e.y,e.z)}createCenterPoint(){let e=require("@/assets/img/s.png");const n=new RT().load(e),i=new z1({map:n,sizeAttenuation:!1,depthWrite:!1,depthTest:!1});this._posTips=new bT(i),this._posTips.name="nos_rsdic",this._posTips.scale.set(.04,.04,.04),this._scene.add(this._posTips),this._posTips.visible=!1}changeBackground(e){let n=e===1?new je(Pd.COLOR_PIURITY_LIGHT):e===2?new je(Pd.COLOR_PIURITY_DEPTH):null;this._scene.background=n}changeCamera(e){console.log("aerial scene change camera");let n=this._camera.position.clone();this._camera=e==0?this._pcamera:this._ocamera,this._camera.position.set(n.x,n.y,n.z),this._camera.lookAt(this._trackCtrl.target.x,this._trackCtrl.target.y,this._trackCtrl.target.z),this._camera.up.copy(this._trackCtrl.camera.up),this._trackCtrl.camera=this._camera,this._trackCtrl.update(),this._controls=this._trackCtrl}createTrackCtrl(e){this._trackCtrl=new l0(e,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createScene(){this._scene=new MT}createPCamera(){this._pcamera=new Vt(60,window.innerWidth/window.innerHeight,this.near,this.far),this._pcamera.position.set(-1e4,1e4,1e4),this._pcamera.lookAt(new D(0,1500,0)),this._camera=this._pcamera}createOCamera(){let e=this._viewWidth/this._viewHeight;this._ocamera=new ji(this.frustumSize*e/-2,this.frustumSize*e/2,this.frustumSize/2,this.frustumSize/-2,1,1e5),this._ocamera.position.set(-1e4,1e4,1e4),this._ocamera.lookAt(new D(0,1500,0)),this._scene.add(this._ocamera)}createControls(){this._trackCtrl=new l0(this._camera,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createPlane(){let e=new dc(this.PLANE_WIDTH,this.PLANE_HEIGTH);this._plane=new yi(e,new ip({color:13421772,reflectivity:0,transparent:!0,opacity:.1,side:Gr})),this._plane.rotation.x=-Math.PI/2,this._plane.position.set(0,-1,0),this._plane.visible=!1,this._scene.add(this._plane)}createGrid(){this._grid=new NT(this.PLANE_WIDTH/10,this.PLANE_WIDTH/1e4,13421772,13421772),this._grid.material.opacity=.6,this._grid.material.transparent=!0,this._grid.position.set(0,-1,0),this._scene.add(this._grid)}createLight(){const e=new DT(16777215,4473924,.6);e.position.set(0,2e4,0),this._scene.add(e);let n=new zT(16777215,.6);n.position.set(0,1e5,1e5),this._scene.add(n)}createRender(){this._render=new k1({precision:"highp",antialias:!0,alpha:!0}),this._render.setSize(window.innerWidth,window.innerHeight),this._render.setPixelRatio(window.devicePixelRatio),this._render.outputEncoding=ot}grideShow(e){this._grid.visible=e}onResize(){if(this._trackCtrl&&(this._trackCtrl.screen.width=this._viewWidth,this._trackCtrl.screen.height=this._viewHeight),this._render.setSize(this._viewWidth,this._viewHeight),this._css2dReder.setSize(this._viewWidth,this._viewHeight),this.camera instanceof Vt)this._camera.aspect=this._viewWidth/this._viewHeight,this.camera.updateProjectionMatrix();else if(this.camera instanceof ji){let e=this._viewWidth/this._viewHeight;this._camera.left=-this.frustumSize*e/2,this._camera.right=this.frustumSize*e/2,this._camera.top=this.frustumSize/2,this._camera.bottom=-this.frustumSize/2,this._camera.updateProjectionMatrix()}}onsetview(e){this._viewWidth=e.width,this._viewHeight=e.height,this.onResize()}}class UT{constructor(){E(this,"_main")}get main(){return this._main}startUp(){this._main=new FT}dispose(){}onResize(){}mountedMainScene(){Rt.container.appendChild(this._main.render.domElement),Rt.container.appendChild(this._main.css2dRender.domElement)}}class BT{constructor(){E(this,"scene",new UT);E(this,"render",new T2);E(this,"mesh",new C2);E(this,"test",new b2)}startUp(){this.mesh.startUp(),this.scene.startUp(),this.render.startUp(),this.test.startUp()}}const Jo=class{constructor(){E(this,"_serviceFactory");E(this,"_serviceList");this._serviceFactory=new Map,this._serviceList=new Map}static get ins(){return this._ins||(this._ins=new Jo),this._ins}static RegSer(e,n){if(Jo.ins._serviceFactory.has(e))throw new Error("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u6B64\u7C7B\u578B\u7684\u670D\u52A1\u5DE5\u5382\uFF0C\u8BF7\u52FF\u518D\u6B21\u6CE8\u518C");Jo.ins._serviceFactory.set(e,n)}getService(e){let n;if(this._serviceList.has(e))n=this._serviceList.get(e);else if(this._serviceFactory.has(e)){let i=this._serviceFactory.get(e);i&&(n=this.initService(i))}return n&&n.inited||console.log("[ServiceManager] \u6709\u4EBA\u62FF\u5230\u4E86\u4E00\u4E2A\u7A7A\u7684\u670D\u52A1\u5BF9\u8C61::",e),n}initService(e){var n=e.createService();return this._serviceList.set(n.type,n),n.serviceInit(),n}removeService(e){if(this._serviceList.has(e)){var n=this._serviceList.get(e);n&&n.dispose(),this._serviceList.delete(e)}}};let kr=Jo;E(kr,"_ins");class VT{constructor(){E(this,"_scheme");E(this,"_cad");E(this,"_scene");E(this,"_mesh")}static hasService(e){return kr.ins.getService(e)!=null}tryGetService(e){var n=kr.ins.getService(e);if(!n)throw Error("\u670D\u52A1\u83B7\u53D6\u5931\u8D25:"+e);return n}get cad(){return this._cad==null&&(this._cad=this.tryGetService(Gn.CAD_SERVICE)),this._cad}get scheme(){return this._scheme==null&&(this._scheme=this.tryGetService(Gn.SCHEME_SERVICE)),this._scheme}get scene(){return this._scene==null&&(this._scene=this.tryGetService(Gn.SCENE_SERVICE)),this._scene}get mesh(){return this._mesh==null&&(this._mesh=this.tryGetService(Gn.MESH_SERVICE)),this._mesh}}const Sr=class{constructor(e=null,n=null,i=null,r=!1){E(this,"caller");E(this,"method");E(this,"args");E(this,"once",!1);E(this,"_id",0);this.setTo(e,n,i,r)}setTo(e,n,i,r=!1){return this._id=Sr._gid++,this.caller=e,this.method=n,this.args=i,this.once=r,this}run(){if(this.method==null)return null;var e=this._id,n=this.method.apply(this.caller,this.args);return this._id===e&&this.once&&this.recover(),n}runWith(e){if(this.method==null)return null;var n=this._id;if(e==null)var i=this.method.apply(this.caller,this.args);else!this.args&&!e.unshift?i=this.method.call(this.caller,e):this.args?i=this.method.apply(this.caller,this.args.concat(e)):i=this.method.apply(this.caller,e);return this._id===n&&this.once&&this.recover(),i}clear(){return this.caller=null,this.method=null,this.args=null,this}recover(){this._id>0&&(this._id=0,Sr._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Sr._pool.length?Sr._pool.pop().setTo(e,n,i,r):new Sr(e,n,i,r)}};let Bo=Sr;E(Bo,"_pool",[]),E(Bo,"_gid",1);const gp=class{constructor(){E(this,"_events")}hasListener(e){var n=this._events&&this._events[e];return!!n}event(e,n=null){if(!this._events||!this._events[e])return!1;var i=this._events[e];if(i.run)i.once&&delete this._events[e],n!=null?i.runWith(n):i.run();else{for(var r=0,s=i.length;r<s;r++){var o=i[r];o&&(n!=null?o.runWith(n):o.run()),(!o||o.once)&&(i.splice(r,1),r--,s--)}i.length===0&&this._events&&!this._events[e].run&&delete this._events[e]}return!0}on(e,n,i,r=null){return this._createListener(e,n,i,r,!1)}once(e,n,i,r=null){return this._createListener(e,n,i,r,!0)}_createListener(e,n,i,r,s,o=!0){o&&this.off(e,n,i,s);var a=Vl.create(n||this,i,r,s);this._events||(this._events={});var l=this._events;return l[e]?l[e].run?l[e]=[l[e],a]:l[e].push(a):l[e]=a,this}off(e,n,i,r=!1){if(!this._events||!this._events[e])return this;var s=this._events[e];if(s!=null)if(s.run)(!n||s.caller===n)&&(i==null||s.method===i)&&(!r||s.once)&&(delete this._events[e],s.recover());else{for(var o=0,a=0,l=s.length;a<l;a++){var u=s[a];if(!u){o++;continue}u&&(!n||u.caller===n)&&(i==null||u.method===i)&&(!r||u.once)&&(o++,s[a]=null,u.recover())}o===l&&delete this._events[e]}return this}offAll(e=null){var n=this._events;if(!n)return this;if(e)this._recoverHandlers(n[e]),delete n[e];else{for(var i in n)this._recoverHandlers(n[i]);this._events=null}return this}offAllCaller(e){if(e&&this._events)for(var n in this._events)this.off(n,e,null);return this}_recoverHandlers(e){if(!!e)if(e.run)e.recover();else for(var n=e.length-1;n>-1;n--)e[n]&&(e[n].recover(),e[n]=null)}isMouseEvent(e){return gp.MOUSE_EVENTS[e]||!1}};let Bl=gp;E(Bl,"MOUSE_EVENTS",{rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0});const Os=class extends Bo{constructor(e,n,i,r){super(e,n,i,r)}recover(){this._id>0&&(this._id=0,Os._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Os._pool.length?Os._pool.pop().setTo(e,n,i,r):new Os(e,n,i,r)}};let Vl=Os;E(Vl,"_pool",[]);const jt=class{static init(){jt._addEvent("keydown"),jt._addEvent("keypress"),jt._addEvent("keyup")}static _addEvent(e){window.document.addEventListener(e,function(n){jt.preventDefault(n),jt._dispatch(n,e)},!1)}static _dispatch(e,n){jt._event._stoped=!1,jt._event.nativeEvent=e,jt._event.keyCode=e.keyCode||e.which||e.charCode,n==="keydown"?jt._pressKeys[jt._event.keyCode]=!0:n==="keyup"&&(jt._pressKeys[jt._event.keyCode]=null),Rt.ED.event(n,e)}static hasKeyDown(e){return jt._pressKeys[e]}static preventDefault(e){let n=e.ctrlKey;e.keyCode;let i=e.key;n&&(i=="s"||i=="z")&&e.preventDefault()}};let ws=jt;E(ws,"_pressKeys",{}),E(ws,"enabled",!0),E(ws,"_event",new pe);class B1{constructor(e,n,i){E(this,"_type");E(this,"_serviceClass");E(this,"_syncInit");this._type=e,this._serviceClass=n,this._syncInit=i}get type(){return this._type}createService(){return new this._serviceClass}get asyncInitService(){return this._syncInit}}class V1{constructor(e){E(this,"_type");E(this,"_firstInit");E(this,"_inited");E(this,"_disposed");this._firstInit=!1,this._inited=!1,this._type=e,this._disposed=!1}get type(){return this._type}serviceInit(){this._firstInit||(this._firstInit=!0,this.onInit())}notifyServiceInited(e=!0){if(this._disposed)throw Error("\u5DF2\u88AB\u9500\u6BC1");e&&(this._inited=!0)}get inited(){return this._inited}dispose(){this.onDispose(),this._disposed=!0}onInit(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u5E76\u5728\u5B8C\u6210\u521D\u59CB\u5316\u540E\u901A\u8FC7 notifyServiceInited \u901A\u77E5\u51FA\u6765")}onDispose(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u7528\u4E8E\u91CA\u653E\u670D\u52A1")}}class GT{dispose(){}}class HT extends V1{constructor(){super(Gn.CAD_SERVICE);E(this,"_ctrl");this._ctrl=new GT}onDispose(){this._ctrl.dispose()}onInit(){this.notifyServiceInited()}}class WT extends B1{constructor(){super(Gn.CAD_SERVICE,HT)}}class $T extends V1{constructor(){super(Gn.CAD_SERVICE)}onDispose(){}onInit(){this.notifyServiceInited()}mountedMainScene(){Rt.MGR.scene.mountedMainScene()}}class jT extends B1{constructor(){super(Gn.SCENE_SERVICE,$T)}}class XT{static init(){kr.RegSer(Gn.CAD_SERVICE,new WT),kr.RegSer(Gn.SCENE_SERVICE,new jT)}}const Ko=class{startUp(){console.log("BIM start up."),XT.init(),ws.init(),Ko.MGR.startUp(),window.addEventListener("resize",()=>this.onWindowResize()),this.startRenderLoop()}exit(){console.log("BIM exit.")}startRenderLoop(){Ko.MGR.render.render(),requestAnimationFrame(()=>this.startRenderLoop())}onWindowResize(){console.log("windows resize"),Ko.MGR.scene.onResize()}};let Rt=Ko;E(Rt,"mode"),E(Rt,"container"),E(Rt,"MGR",new BT),E(Rt,"SC",new VT),E(Rt,"ED",new Bl);class qT extends ai.Component{constructor(){super(...arguments);E(this,"container",ai.createRef())}componentDidMount(){console.log("editor mount"),this.container&&(Rt.container=this.container.current,Rt.SC.scene.mountedMainScene())}componentWillUnmount(){console.log("editor unmount")}render(){return Y(Kt,{children:Y("div",{id:"bim",ref:this.container})})}}const YT=()=>Y("div",{children:"Example"});function ZT(t){function e(O,V,X,ae,A){for(var xe=0,Z=0,_e=0,oe=0,we,ue,me=0,Ge=0,Ae,He=Ae=we=0,Re=0,Fe=0,Ue=0,Ke=0,Ht=X.length,P=Ht-1,M,F="",te="",le="",fe="",Ce;Re<Ht;){if(ue=X.charCodeAt(Re),Re===P&&Z+oe+_e+xe!==0&&(Z!==0&&(ue=Z===47?10:47),oe=_e=xe=0,Ht++,P++),Z+oe+_e+xe===0){if(Re===P&&(0<Fe&&(F=F.replace(d,"")),0<F.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:F+=X.charAt(Re)}ue=59}switch(ue){case 123:for(F=F.trim(),we=F.charCodeAt(0),Ae=1,Ke=++Re;Re<Ht;){switch(ue=X.charCodeAt(Re)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(ue=X.charCodeAt(Re+1)){case 42:case 47:e:{for(He=Re+1;He<P;++He)switch(X.charCodeAt(He)){case 47:if(ue===42&&X.charCodeAt(He-1)===42&&Re+2!==He){Re=He+1;break e}break;case 10:if(ue===47){Re=He+1;break e}}Re=He}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;Re++<P&&X.charCodeAt(Re)!==ue;);}if(Ae===0)break;Re++}switch(Ae=X.substring(Ke,Re),we===0&&(we=(F=F.replace(f,"").trim()).charCodeAt(0)),we){case 64:switch(0<Fe&&(F=F.replace(d,"")),ue=F.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Fe=V;break;default:Fe=W}if(Ae=e(V,Fe,Ae,ue,A+1),Ke=Ae.length,0<I&&(Fe=n(W,F,Ue),Ce=a(3,Ae,Fe,V,ee,re,Ke,ue,A,ae),F=Fe.join(""),Ce!==void 0&&(Ke=(Ae=Ce.trim()).length)===0&&(ue=0,Ae="")),0<Ke)switch(ue){case 115:F=F.replace(C,o);case 100:case 109:case 45:Ae=F+"{"+Ae+"}";break;case 107:F=F.replace(v,"$1 $2"),Ae=F+"{"+Ae+"}",Ae=j===1||j===2&&s("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=F+Ae,ae===112&&(Ae=(te+=Ae,""))}else Ae="";break;default:Ae=e(V,n(V,F,Ue),Ae,ae,A+1)}le+=Ae,Ae=Ue=Fe=He=we=0,F="",ue=X.charCodeAt(++Re);break;case 125:case 59:if(F=(0<Fe?F.replace(d,""):F).trim(),1<(Ke=F.length))switch(He===0&&(we=F.charCodeAt(0),we===45||96<we&&123>we)&&(Ke=(F=F.replace(" ",":")).length),0<I&&(Ce=a(1,F,V,O,ee,re,te.length,ae,A,ae))!==void 0&&(Ke=(F=Ce.trim()).length)===0&&(F="\0\0"),we=F.charCodeAt(0),ue=F.charCodeAt(1),we){case 0:break;case 64:if(ue===105||ue===99){fe+=F+X.charAt(Re);break}default:F.charCodeAt(Ke-1)!==58&&(te+=r(F,we,ue,F.charCodeAt(2)))}Ue=Fe=He=we=0,F="",ue=X.charCodeAt(++Re)}}switch(ue){case 13:case 10:Z===47?Z=0:1+we===0&&ae!==107&&0<F.length&&(Fe=1,F+="\0"),0<I*B&&a(0,F,V,O,ee,re,te.length,ae,A,ae),re=1,ee++;break;case 59:case 125:if(Z+oe+_e+xe===0){re++;break}default:switch(re++,M=X.charAt(Re),ue){case 9:case 32:if(oe+xe+Z===0)switch(me){case 44:case 58:case 9:case 32:M="";break;default:ue!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:oe+Z+xe===0&&(Fe=Ue=1,M="\f"+M);break;case 108:if(oe+Z+xe+U===0&&0<He)switch(Re-He){case 2:me===112&&X.charCodeAt(Re-3)===58&&(U=me);case 8:Ge===111&&(U=Ge)}break;case 58:oe+Z+xe===0&&(He=Re);break;case 44:Z+_e+oe+xe===0&&(Fe=1,M+="\r");break;case 34:case 39:Z===0&&(oe=oe===ue?0:oe===0?ue:oe);break;case 91:oe+Z+_e===0&&xe++;break;case 93:oe+Z+_e===0&&xe--;break;case 41:oe+Z+xe===0&&_e--;break;case 40:if(oe+Z+xe===0){if(we===0)switch(2*me+3*Ge){case 533:break;default:we=1}_e++}break;case 64:Z+_e+oe+xe+He+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<oe+xe+_e))switch(Z){case 0:switch(2*ue+3*X.charCodeAt(Re+1)){case 235:Z=47;break;case 220:Ke=Re,Z=42}break;case 42:ue===47&&me===42&&Ke+2!==Re&&(X.charCodeAt(Ke+2)===33&&(te+=X.substring(Ke,Re+1)),M="",Z=0)}}Z===0&&(F+=M)}Ge=me,me=ue,Re++}if(Ke=te.length,0<Ke){if(Fe=V,0<I&&(Ce=a(2,te,Fe,O,ee,re,Ke,ae,A,ae),Ce!==void 0&&(te=Ce).length===0))return fe+te+le;if(te=Fe.join(",")+"{"+te+"}",j*U!==0){switch(j!==2||s(te,2)||(U=0),U){case 111:te=te.replace(S,":-moz-$1")+te;break;case 112:te=te.replace(x,"::-webkit-input-$1")+te.replace(x,"::-moz-$1")+te.replace(x,":-ms-input-$1")+te}U=0}}return fe+te+le}function n(O,V,X){var ae=V.trim().split(p);V=ae;var A=ae.length,xe=O.length;switch(xe){case 0:case 1:var Z=0;for(O=xe===0?"":O[0]+" ";Z<A;++Z)V[Z]=i(O,V[Z],X).trim();break;default:var _e=Z=0;for(V=[];Z<A;++Z)for(var oe=0;oe<xe;++oe)V[_e++]=i(O[oe]+" ",ae[Z],X).trim()}return V}function i(O,V,X){var ae=V.charCodeAt(0);switch(33>ae&&(ae=(V=V.trim()).charCodeAt(0)),ae){case 38:return V.replace(g,"$1"+O.trim());case 58:return O.trim()+V.replace(g,"$1"+O.trim());default:if(0<1*X&&0<V.indexOf("\f"))return V.replace(g,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+V}function r(O,V,X,ae){var A=O+";",xe=2*V+3*X+4*ae;if(xe===944){O=A.indexOf(":",9)+1;var Z=A.substring(O,A.length-1).trim();return Z=A.substring(0,O).trim()+Z+";",j===1||j===2&&s(Z,1)?"-webkit-"+Z+Z:Z}if(j===0||j===2&&!s(A,1))return A;switch(xe){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(N,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return Z=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+A+"-ms-flex-pack"+Z+A;case 1005:return _.test(A)?A.replace(m,":-webkit-")+A.replace(m,":-moz-")+A:A;case 1e3:switch(Z=A.substring(13).trim(),V=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(V)){case 226:Z=A.replace(w,"tb");break;case 232:Z=A.replace(w,"tb-rl");break;case 220:Z=A.replace(w,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+Z+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(V=(A=O).length-10,Z=(A.charCodeAt(V)===33?A.substring(0,V):A).substring(O.indexOf(":",7)+1).trim(),xe=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:A=A.replace(Z,"-webkit-"+Z)+";"+A;break;case 207:case 102:A=A.replace(Z,"-webkit-"+(102<xe?"inline-":"")+"box")+";"+A.replace(Z,"-webkit-"+Z)+";"+A.replace(Z,"-ms-"+Z+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return Z=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+Z+"-ms-flex-"+Z+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(y,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(y,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(R.test(O)===!0)return(Z=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?r(O.replace("stretch","fill-available"),V,X,ae).replace(":fill-available",":stretch"):A.replace(Z,"-webkit-"+Z)+A.replace(Z,"-moz-"+Z.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,X+ae===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+A}return A}function s(O,V){var X=O.indexOf(V===1?":":"{"),ae=O.substring(0,V!==3?X:10);return X=O.substring(X+1,O.length-1),k(V!==2?ae:ae.replace(T,"$1"),X,V)}function o(O,V){var X=r(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return X!==V+";"?X.replace(L," or ($1)").substring(4):"("+V+")"}function a(O,V,X,ae,A,xe,Z,_e,oe,we){for(var ue=0,me=V,Ge;ue<I;++ue)switch(Ge=J[ue].call(c,O,me,X,ae,A,xe,Z,_e,oe,we)){case void 0:case!1:case!0:case null:break;default:me=Ge}if(me!==V)return me}function l(O){switch(O){case void 0:case null:I=J.length=0;break;default:if(typeof O=="function")J[I++]=O;else if(typeof O=="object")for(var V=0,X=O.length;V<X;++V)l(O[V]);else B=!!O|0}return l}function u(O){return O=O.prefix,O!==void 0&&(k=null,O?typeof O!="function"?j=1:(j=2,k=O):j=0),u}function c(O,V){var X=O;if(33>X.charCodeAt(0)&&(X=X.trim()),K=X,X=[K],0<I){var ae=a(-1,V,X,X,ee,re,0,0,0,0);ae!==void 0&&typeof ae=="string"&&(V=ae)}var A=e(W,X,V,0,0);return 0<I&&(ae=a(-2,A,X,X,ee,re,A.length,0,0,0),ae!==void 0&&(A=ae)),K="",U=0,re=ee=1,A}var f=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,_=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,y=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,N=/([^-])(image-set\()/,re=1,ee=1,U=0,j=1,W=[],J=[],I=0,k=null,B=0,K="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var QT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function JT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var KT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u0=JT(function(t){return KT.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Hn(){return(Hn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var c0=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},Ud=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Zh.exports.typeOf(t)},mu=Object.freeze([]),ir=Object.freeze({});function ao(t){return typeof t=="function"}function f0(t){return t.displayName||t.name||"Component"}function op(t){return t&&typeof t.styledComponentId=="string"}var lo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ap=typeof window<"u"&&"HTMLElement"in window,eA=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),tA={};function Xr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var nA=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&Xr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=i.length;u<c;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),Gl=new Map,gu=new Map,Qo=1,Sl=function(t){if(Gl.has(t))return Gl.get(t);for(;gu.has(Qo);)Qo++;var e=Qo++;return Gl.set(t,e),gu.set(e,t),e},iA=function(t){return gu.get(t)},rA=function(t,e){e>=Qo&&(Qo=e+1),Gl.set(t,e),gu.set(e,t)},sA="style["+lo+'][data-styled-version="5.3.5"]',oA=new RegExp("^"+lo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),aA=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},lA=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(oA);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(rA(u,l),aA(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},uA=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},G1=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(lo))return c}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(lo,"active"),i.setAttribute("data-styled-version","5.3.5");var o=uA();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},cA=function(){function t(n){var i=this.element=G1(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}Xr(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),fA=function(){function t(n){var i=this.element=G1(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),dA=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),d0=ap,hA={isServer:!ap,useCSSOMInjection:!eA},vu=function(){function t(n,i,r){n===void 0&&(n=ir),i===void 0&&(i={}),this.options=Hn({},hA,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&ap&&d0&&(d0=!1,function(s){for(var o=document.querySelectorAll(sA),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(lo)!=="active"&&(lA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Sl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(Hn({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new dA(o):s?new cA(o):new fA(o),new nA(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(Sl(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(Sl(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Sl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=iA(o);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(o);if(l&&u&&l.size){var c=lo+".g"+o+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),pA=/(a)(d)/gi,h0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Bd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=h0(e%52)+n;return(h0(e%52)+n).replace(pA,"$1-$2")}var Ns=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},H1=function(t){return Ns(5381,t)};function W1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ao(n)&&!op(n))return!1}return!0}var mA=H1("5.3.5"),gA=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&W1(e),this.componentId=n,this.baseHash=Ns(mA,n),this.baseStyle=i,vu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=qr(this.rules,e,n,i).join(""),a=Bd(Ns(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ns(this.baseHash,i.hash),f="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")f+=m;else if(m){var _=qr(m,e,n,i),h=Array.isArray(_)?_.join(""):_;c=Ns(c,h+d),f+=h}}if(f){var p=Bd(c>>>0);if(!n.hasNameForId(r,p)){var g=i(f,"."+p,void 0,r);n.insertRules(r,p,g)}s.push(p)}}return s.join(" ")},t}(),vA=/^\s*\/\/.*$/gm,_A=[":","[",".","#"];function xA(t){var e,n,i,r,s=t===void 0?ir:t,o=s.options,a=o===void 0?ir:o,l=s.plugins,u=l===void 0?mu:l,c=new ZT(a),f=[],d=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,v,x,S,w,C,L,y,T,R){switch(g){case 1:if(T===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(y===0)return v+"/*|*/";break;case 3:switch(y){case 102:case 112:return h(x[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(p)}}}(function(h){f.push(h)}),m=function(h,p,g){return p===0&&_A.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function _(h,p,g,v){v===void 0&&(v="&");var x=h.replace(vA,""),S=p&&g?g+" "+p+" { "+x+" }":x;return e=v,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),c(g||!p?"":p,S)}return c.use([].concat(u,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,m))},d,function(h){if(h===-2){var p=f;return f=[],p}}])),_.hash=u.length?u.reduce(function(h,p){return p.name||Xr(15),Ns(h,p.name)},5381).toString():"",_}var $1=ai.createContext();$1.Consumer;var j1=ai.createContext(),yA=(j1.Consumer,new vu),Vd=xA();function X1(){return Me.exports.useContext($1)||yA}function q1(){return Me.exports.useContext(j1)||Vd}var SA=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Vd);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return Xr(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Vd),this.name+e.hash},t}(),wA=/([A-Z])/,MA=/([A-Z])/g,EA=/^ms-/,bA=function(t){return"-"+t.toLowerCase()};function p0(t){return wA.test(t)?t.replace(MA,bA).replace(EA,"-ms-"):t}var m0=function(t){return t==null||t===!1||t===""};function qr(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=qr(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(m0(t))return"";if(op(t))return"."+t.styledComponentId;if(ao(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return qr(l,e,n,i)}var u;return t instanceof SA?n?(t.inject(n,i),t.getName(i)):t:Ud(t)?function c(f,d){var m,_,h=[];for(var p in f)f.hasOwnProperty(p)&&!m0(f[p])&&(Array.isArray(f[p])&&f[p].isCss||ao(f[p])?h.push(p0(p)+":",f[p],";"):Ud(f[p])?h.push.apply(h,c(f[p],p)):h.push(p0(p)+": "+(m=p,(_=f[p])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||m in QT?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(h,["}"]):h}(t):t.toString()}var g0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Y1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return ao(t)||Ud(t)?g0(qr(c0(mu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:g0(qr(c0(t,n)))}var Z1=function(t,e,n){return n===void 0&&(n=ir),t.theme!==n.theme&&t.theme||e||n.theme},CA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TA=/(^-|-$)/g;function Pf(t){return t.replace(CA,"-").replace(TA,"")}var Q1=function(t){return Bd(H1(t)>>>0)};function wl(t){return typeof t=="string"&&!0}var Gd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},AA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function PA(t,e,n){var i=t[n];Gd(e)&&Gd(i)?J1(i,e):t[n]=e}function J1(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(Gd(o))for(var a in o)AA(a)&&PA(t,o[a],a)}return t}var ya=ai.createContext();ya.Consumer;function LA(t){var e=Me.exports.useContext(ya),n=Me.exports.useMemo(function(){return function(i,r){if(!i)return Xr(14);if(ao(i)){var s=i(r);return s}return Array.isArray(i)||typeof i!="object"?Xr(8):r?Hn({},r,{},i):i}(t.theme,e)},[t.theme,e]);return t.children?ai.createElement(ya.Provider,{value:n},t.children):null}var Lf={};function K1(t,e,n){var i=op(t),r=!wl(t),s=e.attrs,o=s===void 0?mu:s,a=e.componentId,l=a===void 0?function(v,x){var S=typeof v!="string"?"sc":Pf(v);Lf[S]=(Lf[S]||0)+1;var w=S+"-"+Q1("5.3.5"+S+Lf[S]);return x?x+"-"+w:w}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(v){return wl(v)?"styled."+v:"Styled("+f0(v)+")"}(t):u,f=e.displayName&&e.componentId?Pf(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;i&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(v,x,S){return t.shouldForwardProp(v,x,S)&&e.shouldForwardProp(v,x,S)}:t.shouldForwardProp);var _,h=new gA(n,f,i?t.componentStyle:void 0),p=h.isStatic&&o.length===0,g=function(v,x){return function(S,w,C,L){var y=S.attrs,T=S.componentStyle,R=S.defaultProps,N=S.foldedComponentIds,re=S.shouldForwardProp,ee=S.styledComponentId,U=S.target,j=function(ae,A,xe){ae===void 0&&(ae=ir);var Z=Hn({},A,{theme:ae}),_e={};return xe.forEach(function(oe){var we,ue,me,Ge=oe;for(we in ao(Ge)&&(Ge=Ge(Z)),Ge)Z[we]=_e[we]=we==="className"?(ue=_e[we],me=Ge[we],ue&&me?ue+" "+me:ue||me):Ge[we]}),[Z,_e]}(Z1(w,Me.exports.useContext(ya),R)||ir,w,y),W=j[0],J=j[1],I=function(ae,A,xe,Z){var _e=X1(),oe=q1(),we=A?ae.generateAndInjectStyles(ir,_e,oe):ae.generateAndInjectStyles(xe,_e,oe);return we}(T,L,W),k=C,B=J.$as||w.$as||J.as||w.as||U,K=wl(B),O=J!==w?Hn({},w,{},J):w,V={};for(var X in O)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?V.as=O[X]:(re?re(X,u0,B):!K||u0(X))&&(V[X]=O[X]));return w.style&&J.style!==w.style&&(V.style=Hn({},w.style,{},J.style)),V.className=Array.prototype.concat(N,ee,I!==ee?I:null,w.className,J.className).filter(Boolean).join(" "),V.ref=k,Me.exports.createElement(B,V)}(_,v,x,p)};return g.displayName=c,(_=ai.forwardRef(g)).attrs=d,_.componentStyle=h,_.displayName=c,_.shouldForwardProp=m,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):mu,_.styledComponentId=f,_.target=i?t.target:t,_.withComponent=function(v){var x=e.componentId,S=function(C,L){if(C==null)return{};var y,T,R={},N=Object.keys(C);for(T=0;T<N.length;T++)y=N[T],L.indexOf(y)>=0||(R[y]=C[y]);return R}(e,["componentId"]),w=x&&x+"-"+(wl(v)?v:Pf(f0(v)));return K1(v,Hn({},S,{attrs:d,componentId:w}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?J1({},t.defaultProps,v):v}}),_.toString=function(){return"."+_.styledComponentId},r&&Iw(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var Hd=function(t){return function e(n,i,r){if(r===void 0&&(r=ir),!Zh.exports.isValidElementType(i))return Xr(1,String(i));var s=function(){return n(i,r,Y1.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,Hn({},r,{},o))},s.attrs=function(o){return e(n,i,Hn({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(K1,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Hd[t]=Hd(t)});var RA=function(){function t(n,i){this.rules=n,this.componentId=i,this.isStatic=W1(n),vu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,i,r,s){var o=s(qr(this.rules,i,r,s).join(""),""),a=this.componentId+n;r.insertRules(a,a,o)},e.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.renderStyles=function(n,i,r,s){n>2&&vu.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,i,r,s)},t}();function DA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Y1.apply(void 0,[t].concat(n)),s="sc-global-"+Q1(JSON.stringify(r)),o=new RA(r,s);function a(u){var c=X1(),f=q1(),d=Me.exports.useContext(ya),m=Me.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(m,u,c,d,f),Me.exports.useLayoutEffect(function(){if(!c.server)return l(m,u,c,d,f),function(){return o.removeStyles(m,c)}},[m,u,c,d,f]),null}function l(u,c,f,d,m){if(o.isStatic)o.renderStyles(u,tA,f,m);else{var _=Hn({},c,{theme:Z1(c,d,a.defaultProps)});o.renderStyles(u,_,f,m)}}return ai.memo(a)}const Te=Hd,IA=Te.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 50vh;
    z-index: 1;

`,kA=()=>Y(Kt,{children:Y(IA,{})});function ex(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zA(t,e){if(t==null)return{};var n=yw(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function NA(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,FA=NA(function(t){return OA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function v0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function UA(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v0(Object(n),!0).forEach(function(i){ex(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function BA(t){return FA(t)}function VA(t){return Object.keys(t).reduce(function(e,n){return BA(n)&&(e[n]=t[n]),e},{})}var GA=Me.exports.forwardRef(function(t,e){var n=t.children,i=t.iconAttrs;t.iconVerticalAlign;var r=t.iconViewBox,s=t.size,o=t.title,a=zA(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),l=UA({viewBox:r,height:t.height!==void 0?t.height:s,width:t.width!==void 0?t.width:s,"aria-hidden":o==null?"true":void 0,focusable:"false",role:o!=null?"img":void 0},i),u=VA(a);return et("svg",{...l,...u,ref:e,children:[o&&Y("title",{children:o},"icon-title"),n]})}),Zn=Te(GA).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],function(t){return t.iconVerticalAlign}),tx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"})})});tx.displayName="Sketch";const HA=Te.div`
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
    
`,WA=Te(tx)`
  color: rgb(242, 112, 19);
  margin: 0 5px;
`,nx=t=>Y(Kt,{children:et(HA,{...t,children:[Y(WA,{title:"Sketch Icon",size:"32"}),Y("span",{children:"Bim3dEditor"})]})});var js=(t=>(t.Light="light",t.Dark="dark",t))(js||{});function Vn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ar(t){return!!t&&!!t[rt]}function Ti(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===KA}(t)||Array.isArray(t)||!!t[E0]||!!t.constructor[E0]||lp(t)||up(t))}function Yr(t,e,n){n===void 0&&(n=!1),vo(t)===0?(n?Object.keys:qs)(t).forEach(function(i){n&&typeof i=="symbol"||e(i,t[i],t)}):t.forEach(function(i,r){return e(r,i,t)})}function vo(t){var e=t[rt];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:lp(t)?2:up(t)?3:0}function Xs(t,e){return vo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function $A(t,e){return vo(t)===2?t.get(e):t[e]}function ix(t,e,n){var i=vo(t);i===2?t.set(e,n):i===3?(t.delete(e),t.add(n)):t[e]=n}function rx(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function lp(t){return QA&&t instanceof Map}function up(t){return JA&&t instanceof Set}function xr(t){return t.o||t.t}function cp(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=ox(t);delete e[rt];for(var n=qs(e),i=0;i<n.length;i++){var r=n[i],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[r]})}return Object.create(Object.getPrototypeOf(t),e)}function fp(t,e){return e===void 0&&(e=!1),dp(t)||ar(t)||!Ti(t)||(vo(t)>1&&(t.set=t.add=t.clear=t.delete=jA),Object.freeze(t),e&&Yr(t,function(n,i){return fp(i,!0)},!0)),t}function jA(){Vn(2)}function dp(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function oi(t){var e=Xd[t];return e||Vn(18,t),e}function XA(t,e){Xd[t]||(Xd[t]=e)}function Wd(){return Sa}function Rf(t,e){e&&(oi("Patches"),t.u=[],t.s=[],t.v=e)}function _u(t){$d(t),t.p.forEach(qA),t.p=null}function $d(t){t===Sa&&(Sa=t.l)}function _0(t){return Sa={p:[],l:Sa,h:t,m:!0,_:0}}function qA(t){var e=t[rt];e.i===0||e.i===1?e.j():e.O=!0}function Df(t,e){e._=e.p.length;var n=e.p[0],i=t!==void 0&&t!==n;return e.h.g||oi("ES5").S(e,t,i),i?(n[rt].P&&(_u(e),Vn(4)),Ti(t)&&(t=xu(e,t),e.l||yu(e,t)),e.u&&oi("Patches").M(n[rt].t,t,e.u,e.s)):t=xu(e,n,[]),_u(e),e.u&&e.v(e.u,e.s),t!==sx?t:void 0}function xu(t,e,n){if(dp(e))return e;var i=e[rt];if(!i)return Yr(e,function(s,o){return x0(t,i,e,s,o,n)},!0),e;if(i.A!==t)return e;if(!i.P)return yu(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var r=i.i===4||i.i===5?i.o=cp(i.k):i.o;Yr(i.i===3?new Set(r):r,function(s,o){return x0(t,i,r,s,o,n)}),yu(t,r,!1),n&&t.u&&oi("Patches").R(i,n,t.u,t.s)}return i.o}function x0(t,e,n,i,r,s){if(ar(r)){var o=xu(t,r,s&&e&&e.i!==3&&!Xs(e.D,i)?s.concat(i):void 0);if(ix(n,i,o),!ar(o))return;t.m=!1}if(Ti(r)&&!dp(r)){if(!t.h.F&&t._<1)return;xu(t,r),e&&e.A.l||yu(t,r)}}function yu(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&fp(e,n)}function If(t,e){var n=t[rt];return(n?xr(n):t)[e]}function y0(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function Hi(t){t.P||(t.P=!0,t.l&&Hi(t.l))}function kf(t){t.o||(t.o=cp(t.t))}function jd(t,e,n){var i=lp(e)?oi("MapSet").N(e,n):up(e)?oi("MapSet").T(e,n):t.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:Wd(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},l=a,u=wa;o&&(l=[a],u=Vo);var c=Proxy.revocable(l,u),f=c.revoke,d=c.proxy;return a.k=d,a.j=f,d}(e,n):oi("ES5").J(e,n);return(n?n.A:Wd()).p.push(i),i}function YA(t){return ar(t)||Vn(22,t),function e(n){if(!Ti(n))return n;var i,r=n[rt],s=vo(n);if(r){if(!r.P&&(r.i<4||!oi("ES5").K(r)))return r.t;r.I=!0,i=S0(n,s),r.I=!1}else i=S0(n,s);return Yr(i,function(o,a){r&&$A(r.t,o)===a||ix(i,o,e(a))}),s===3?new Set(i):i}(t)}function S0(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return cp(t)}function ZA(){function t(s,o){var a=r[s];return a?a.enumerable=o:r[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[rt];return wa.get(l,s)},set:function(l){var u=this[rt];wa.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][rt];if(!a.P)switch(a.i){case 5:i(a)&&Hi(a);break;case 4:n(a)&&Hi(a)}}}function n(s){for(var o=s.t,a=s.k,l=qs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==rt){var f=o[c];if(f===void 0&&!Xs(o,c))return!0;var d=a[c],m=d&&d[rt];if(m?m.t!==f:!rx(d,f))return!0}}var _=!!o[rt];return l.length!==qs(o).length+(_?0:1)}function i(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var r={};XA("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,f){if(c){for(var d=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var _=ox(f);delete _[rt];for(var h=qs(_),p=0;p<h.length;p++){var g=h[p];_[g]=t(g,c||!!_[g].enumerable)}return Object.create(Object.getPrototypeOf(f),_)}(a,s),u={i:a?5:4,A:o?o.A:Wd(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,rt,{value:u,writable:!0}),l},S:function(s,o,a){a?ar(o)&&o[rt].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[rt];if(c){var f=c.t,d=c.k,m=c.D,_=c.i;if(_===4)Yr(d,function(x){x!==rt&&(f[x]!==void 0||Xs(f,x)?m[x]||l(d[x]):(m[x]=!0,Hi(c)))}),Yr(f,function(x){d[x]!==void 0||Xs(d,x)||(m[x]=!1,Hi(c))});else if(_===5){if(i(c)&&(Hi(c),m.length=!0),d.length<f.length)for(var h=d.length;h<f.length;h++)m[h]=!1;else for(var p=f.length;p<d.length;p++)m[p]=!0;for(var g=Math.min(d.length,f.length),v=0;v<g;v++)d.hasOwnProperty(v)||(m[v]=!0),m[v]===void 0&&l(d[v])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):i(s)}})}var w0,Sa,hp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",QA=typeof Map<"u",JA=typeof Set<"u",M0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",sx=hp?Symbol.for("immer-nothing"):((w0={})["immer-nothing"]=!0,w0),E0=hp?Symbol.for("immer-draftable"):"__$immer_draftable",rt=hp?Symbol.for("immer-state"):"__$immer_state",KA=""+Object.prototype.constructor,qs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ox=Object.getOwnPropertyDescriptors||function(t){var e={};return qs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Xd={},wa={get:function(t,e){if(e===rt)return t;var n=xr(t);if(!Xs(n,e))return function(r,s,o){var a,l=y0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(r.k):void 0}(t,n,e);var i=n[e];return t.I||!Ti(i)?i:i===If(t.t,e)?(kf(t),t.o[e]=jd(t.A.h,i,t)):i},has:function(t,e){return e in xr(t)},ownKeys:function(t){return Reflect.ownKeys(xr(t))},set:function(t,e,n){var i=y0(xr(t),e);if(i!=null&&i.set)return i.set.call(t.k,n),!0;if(!t.P){var r=If(xr(t),e),s=r==null?void 0:r[rt];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(rx(n,r)&&(n!==void 0||Xs(t.t,e)))return!0;kf(t),Hi(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return If(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,kf(t),Hi(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=xr(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty:function(){Vn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Vn(12)}},Vo={};Yr(wa,function(t,e){Vo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Vo.deleteProperty=function(t,e){return Vo.set.call(this,t,e,void 0)},Vo.set=function(t,e,n){return wa.set.call(this,t[0],e,n,t[0])};var eP=function(){function t(n){var i=this;this.g=M0,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var l=i;return function(h){var p=this;h===void 0&&(h=a);for(var g=arguments.length,v=Array(g>1?g-1:0),x=1;x<g;x++)v[x-1]=arguments[x];return l.produce(h,function(S){var w;return(w=s).call.apply(w,[p,S].concat(v))})}}var u;if(typeof s!="function"&&Vn(6),o!==void 0&&typeof o!="function"&&Vn(7),Ti(r)){var c=_0(i),f=jd(i,r,void 0),d=!0;try{u=s(f),d=!1}finally{d?_u(c):$d(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(h){return Rf(c,o),Df(h,c)},function(h){throw _u(c),h}):(Rf(c,o),Df(u,c))}if(!r||typeof r!="object"){if((u=s(r))===void 0&&(u=r),u===sx&&(u=void 0),i.F&&fp(u,!0),o){var m=[],_=[];oi("Patches").M(r,u,m,_),o(m,_)}return u}Vn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return i.produceWithPatches(u,function(m){return r.apply(void 0,[m].concat(f))})};var o,a,l=i.produce(r,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ti(n)||Vn(8),ar(n)&&(n=YA(n));var i=_0(this),r=jd(this,n,void 0);return r[rt].C=!0,$d(i),r},e.finishDraft=function(n,i){var r=n&&n[rt],s=r.A;return Rf(s,i),Df(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!M0&&Vn(20),this.g=n},e.applyPatches=function(n,i){var r;for(r=i.length-1;r>=0;r--){var s=i[r];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}r>-1&&(i=i.slice(r+1));var o=oi("Patches").$;return ar(n)?o(n,i):this.produce(n,function(a){return o(a,i)})},t}(),mn=new eP,ax=mn.produce;mn.produceWithPatches.bind(mn);mn.setAutoFreeze.bind(mn);mn.setUseProxies.bind(mn);mn.applyPatches.bind(mn);mn.createDraft.bind(mn);mn.finishDraft.bind(mn);function b0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function C0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b0(Object(n),!0).forEach(function(i){ex(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ut(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var T0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),zf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Su={INIT:"@@redux/INIT"+zf(),REPLACE:"@@redux/REPLACE"+zf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+zf()}};function tP(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function lx(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ut(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ut(1));return n(lx)(t,e)}if(typeof t!="function")throw new Error(Ut(2));var r=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(Ut(3));return s}function f(h){if(typeof h!="function")throw new Error(Ut(4));if(l)throw new Error(Ut(5));var p=!0;return u(),a.push(h),function(){if(!!p){if(l)throw new Error(Ut(6));p=!1,u();var v=a.indexOf(h);a.splice(v,1),o=null}}}function d(h){if(!tP(h))throw new Error(Ut(7));if(typeof h.type>"u")throw new Error(Ut(8));if(l)throw new Error(Ut(9));try{l=!0,s=r(s,h)}finally{l=!1}for(var p=o=a,g=0;g<p.length;g++){var v=p[g];v()}return h}function m(h){if(typeof h!="function")throw new Error(Ut(10));r=h,d({type:Su.REPLACE})}function _(){var h,p=f;return h={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(Ut(11));function x(){v.next&&v.next(c())}x();var S=p(x);return{unsubscribe:S}}},h[T0]=function(){return this},h}return d({type:Su.INIT}),i={dispatch:d,subscribe:f,getState:c,replaceReducer:m},i[T0]=_,i}function nP(t){Object.keys(t).forEach(function(e){var n=t[e],i=n(void 0,{type:Su.INIT});if(typeof i>"u")throw new Error(Ut(12));if(typeof n(void 0,{type:Su.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ut(13))})}function iP(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(n[r]=t[r])}var s=Object.keys(n),o;try{nP(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,f={},d=0;d<s.length;d++){var m=s[d],_=n[m],h=l[m],p=_(h,u);if(typeof p>"u")throw u&&u.type,new Error(Ut(14));f[m]=p,c=c||p!==h}return c=c||s.length!==Object.keys(l).length,c?f:l}}function wu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function rP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),s=function(){throw new Error(Ut(15))},o={getState:r.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=wu.apply(void 0,a)(r.dispatch),C0(C0({},r),{},{dispatch:s})}}}function ux(t){var e=function(i){var r=i.dispatch,s=i.getState;return function(o){return function(a){return typeof a=="function"?a(r,s,t):o(a)}}};return e}var cx=ux();cx.withExtraArgument=ux;const A0=cx;var sP=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();globalThis&&globalThis.__generator;var Mu=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},oP=Object.defineProperty,P0=Object.getOwnPropertySymbols,aP=Object.prototype.hasOwnProperty,lP=Object.prototype.propertyIsEnumerable,L0=function(t,e,n){return e in t?oP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Ma=function(t,e){for(var n in e||(e={}))aP.call(e,n)&&L0(t,n,e[n]);if(P0)for(var i=0,r=P0(e);i<r.length;i++){var n=r[i];lP.call(e,n)&&L0(t,n,e[n])}return t},uP=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wu:wu.apply(null,arguments)};function cP(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var fP=function(t){sP(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Mu([void 0],n[0].concat(this)))):new(e.bind.apply(e,Mu([void 0],n.concat(this))))},e}(Array);function qd(t){return Ti(t)?ax(t,function(){}):t}function dP(t){return typeof t=="boolean"}function hP(){return function(e){return pP(e)}}function pP(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var i=new fP;return n&&(dP(n)?i.push(A0):i.push(A0.withExtraArgument(n.extraArgument))),i}var mP=!0;function gP(t){var e=hP(),n=t||{},i=n.reducer,r=i===void 0?void 0:i,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,m;if(typeof r=="function")m=r;else if(cP(r))m=iP(r);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var h=rP.apply(void 0,_),p=wu;l&&(p=uP(Ma({trace:!mP},typeof l=="object"&&l)));var g=[h];Array.isArray(d)?g=Mu([h],d):typeof d=="function"&&(g=d(g));var v=p.apply(void 0,g);return lx(m,c,v)}function Ea(t,e){function n(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(e){var s=e.apply(void 0,i);if(!s)throw new Error("prepareAction did not return an object");return Ma(Ma({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:i[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(i){return i.type===t},n}function fx(t){var e={},n=[],i,r={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,r},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase:function(s){return i=s,r}};return t(r),[e,n,i]}function vP(t){return typeof t=="function"}function _P(t,e,n,i){n===void 0&&(n=[]);var r=typeof e=="function"?fx(e):[e,n,i],s=r[0],o=r[1],a=r[2],l;if(vP(t))l=function(){return qd(t())};else{var u=qd(t);l=function(){return u}}function c(f,d){f===void 0&&(f=l());var m=Mu([s[d.type]],o.filter(function(_){var h=_.matcher;return h(d)}).map(function(_){var h=_.reducer;return h}));return m.filter(function(_){return!!_}).length===0&&(m=[a]),m.reduce(function(_,h){if(h)if(ar(_)){var p=_,g=h(p,d);return typeof g>"u"?_:g}else{if(Ti(_))return ax(_,function(v){return h(v,d)});var g=h(_,d);if(typeof g>"u"){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return _},f)}return c.getInitialState=l,c}function xP(t,e){return t+"/"+e}function yP(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:qd(t.initialState),i=t.reducers||{},r=Object.keys(i),s={},o={},a={};r.forEach(function(c){var f=i[c],d=xP(e,c),m,_;"reducer"in f?(m=f.reducer,_=f.prepare):m=f,s[c]=m,o[d]=m,a[c]=_?Ea(d,_):Ea(d)});function l(){var c=typeof t.extraReducers=="function"?fx(t.extraReducers):[t.extraReducers],f=c[0],d=f===void 0?{}:f,m=c[1],_=m===void 0?[]:m,h=c[2],p=h===void 0?void 0:h,g=Ma(Ma({},d),o);return _P(n,g,_,p)}var u;return{name:e,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var pp="listenerMiddleware";Ea(pp+"/add");Ea(pp+"/removeAll");Ea(pp+"/remove");ZA();const Nf=localStorage.getItem("theme"),SP={theme:Nf!=null?Nf:js.Light},dx=yP({name:"user",initialState:SP,reducers:{toggleTheme:t=>{t.theme=t.theme===js.Dark?js.Light:js.Dark,localStorage.setItem("theme",t.theme)}}}),{toggleTheme:wP}=dx.actions,MP=dx.reducer,EP=Te.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`,bP=Te.button`
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
`,CP=Te.button`
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
`,R0=[{id:"6",lable:"\u767B\u5F55"},{id:"5",lable:"\u7F16\u8F91\u5668"},{id:"4",lable:"\u793A\u4F8B"},{id:"3",lable:"\u6587\u6863"},{id:"2",lable:"\u6559\u7A0B"},{id:"1",lable:"theme"}],TP=()=>{let t=tp();const e=()=>{t("/editor")},n=Yw();function i(){n(wP())}const r=o=>{switch(o.target.innerHTML){case"\u6559\u7A0B":t("/course");break;case"\u6587\u6863":t("/document");break;case"\u793A\u4F8B":t("/example");break;case"\u7F16\u8F91\u5668":e();break;case"theme":i();break}},s=()=>{t("/login")};return Y(Kt,{children:Y(EP,{children:R0.map(o=>parseInt(o.id)===R0.length?Y(CP,{onClick:s,children:"\u767B \u5F55"},o.id):Y(bP,{onClick:a=>r(a),children:o.lable},o.id))})})},AP=Te.div`
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
`,PP=Te.div`
    display: flex;
    /* background: yellow; */
    height: 32px;
    width: 80%;
    flex-direction: row;
`,LP=()=>Y(Kt,{children:Y(AP,{children:et(PP,{children:[Y(nx,{primary:!1}),Y(TP,{})]})})}),RP=Te.div`

    position: relative;
    min-height: 200vh;
    z-index: 1;

`,DP=()=>Y(Kt,{children:Y(RP,{})});var hx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return et(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[Y("rect",{width:24,height:24,fill:"none"}),Y("path",{d:"M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zM3 20v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zM21 20c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zM19 14.87V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"})]})});hx.displayName="ViewInAr";const IP=Te.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0 20px 0;
`,kP=Te.button`
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
`,zP=Te.button`
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
`,NP=Te(hx)`
    color: white;
    margin-right: 10px;
    padding-bottom: 2px;
`,OP=()=>{let t=tp();function e(){t("/editor")}return Y(Kt,{children:et(IP,{children:[Y("a",{href:"https://gitee.com/songmy1093697597/bim3d-editor",target:"_blank",children:Y(kP,{children:"\u5BFC\u51FA\u9879\u76EE"})}),et(zP,{onClick:e,children:[Y(NP,{size:"16"}),"\u9884\u89C8\u7F16\u8F91"]})]})})};var px=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})});px.displayName="Github";var mx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:Y("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})});mx.displayName="ReactLogo";var gx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12 1.217 4.926-4.877-1.4zm6.28 1.538 4.878 1.404-3.662 3.53zm-.52.13 1.208 4.9-4.853-1.392zm6.3 1.534 4.947 1.424-3.715 3.574zm-.524.12 1.215 4.926-4.876-1.398zm-15.432.696 4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137 1.236 5.017-4.963-1.432zm6.274 1.535 4.965 1.425-3.73 3.586zm-.52.127 1.235 5.012-4.958-1.43zm-9.63 2.438 4.873 1.406-3.656 3.523zm5.854 1.687 4.863 1.403-3.648 3.51zm-.54.04 1.214 4.927-4.875-1.4zm-3.896 4.02 5.037 1.442-3.782 3.638z"})})});gx.displayName="Threedotjs";var vx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"})})});vx.displayName="Typescript";var _x=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"})})});_x.displayName="Gitee";const FP=Te.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,UP=Te(px)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,BP=Te(mx)`
  color: #38d2f8;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,VP=Te(gx)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,GP=Te(vx)`
  color: #067ceb;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,HP=Te(_x)`
  color: #f74141;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,WP=()=>Y(Kt,{children:et(FP,{children:[Y(BP,{title:"React icon",size:"36"}),Y(VP,{title:"Three.js icon",size:"36"}),Y(GP,{title:"Typescript icon",size:"36"}),Y(HP,{title:"Javascript icon",size:"36"}),Y(UP,{title:"Github icon",size:"36"})]})}),D0=Te.span`
  color: rgb(242, 112, 19);
`,$P=()=>et(Kt,{children:[et("h1",{children:[et("span",{children:["\u6B22\u8FCE\u6765\u5230",Y(D0,{children:" Bim3dEditor "}),Y("br",{}),"\u8FD9\u662F\u4E3A\u60A8\u7CBE\u5FC3\u6253\u9020\u7684\u53EF\u9884"]}),Y("br",{}),Y("span",{children:"\u89C8\u548C\u7F16\u8F91\u7684"}),et("span",{children:[Y(D0,{children:" WebGL "}),"\u9879\u76EE"]})]}),et("h5",{children:[Y("span",{children:"Bim3dEditor \u4F7F\u7528\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 React \u548C\u4F18\u79C0\u7684 webgl"}),Y("br",{}),Y("span",{children:"\u5E93 Three.js \u6253\u9020\u5728\u7EBF\u53EF\u7F16\u8F91\u7684Cad\u89E3\u6790\u7F16\u8F91\u5668"})]})]}),jP=Te.div`
    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`,XP=Te.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,qP=Te.div`
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
`,YP=Te.div`
  display: flex;
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
`,ZP=()=>Y(Kt,{children:Y(jP,{children:et(XP,{children:[et(qP,{children:[Y($P,{}),Y(OP,{}),Y(WP,{})]}),Y(YP,{})]})})}),QP=()=>et(Kt,{children:[Y(LP,{}),Y(ZP,{}),Y(DP,{}),Y(kA,{})]}),JP=Te.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: greenyellow; */
`,KP=Te.div`

    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 14px;
    /* background-color: #2f71ff; */
    margin-left: 200px;
    
`,e4=Te.div`
 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 200px;
    width: 100%;
    height: 10%;
   
    font-size: 14px;
    /* background-color: greenyellow; */
`,Ml=Te.a`
    margin: 0 20px;
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,t4=()=>Y(Kt,{children:et(JP,{children:[Y(KP,{children:Y(Ml,{href:"",children:"\u672C\u7F51\u7AD9\u53D7\u9690\u79C1\u653F\u7B56\u4FDD\u62A4"})}),et(e4,{children:[Y(Ml,{href:"",children:"\u670D\u52A1\u6761\u6B3E"}),Y(Ml,{href:"",children:"\u9690\u79C1\u653F\u7B56"}),Y(Ml,{href:"",children:"\u5F00\u53D1\u56E2\u961F"})]})]})}),n4=Te.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: yellow; */
`,i4=()=>Y(Kt,{children:Y(n4,{children:Y(nx,{primary:!0})})}),r4=Te.div`
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
`,s4=t=>et(r4,{children:[Y("span",{className:"line"}),Y("span",{className:"txt",children:t.label}),Y("span",{className:"line"})]});var xx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return et(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[Y("path",{d:"M408.67 298.53a21 21 0 1120.9-21 20.85 20.85 0 01-20.9 21m-102.17 0a21 21 0 1120.9-21 20.84 20.84 0 01-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 018.13 2.34L454 462.83a11.62 11.62 0 003.48 1.17 5 5 0 004.65-4.66 14.27 14.27 0 00-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 01-.33-3.47 11.4 11.4 0 015-9.35","data-name":"XMLID 501 -1"}),Y("path",{d:"M246.13 178.51a24.47 24.47 0 010-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 11147.45 154a24.57 24.57 0 01-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 01-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 005.8 5.83 7.15 7.15 0 003.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 015.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 01-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48","data-name":"XMLID 505 -7"})]})});xx.displayName="LogoWechat";var yx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 20 20",...t,ref:e,children:Y("path",{d:"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.008 11.92c-.184.096-.47-.122-.737-.52-.105.435-.369.828-.743 1.144.394.144.65.38.65.65 0 .442-.695.799-1.553.799-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672-.857 0-1.552-.357-1.552-.8 0-.268.256-.505.65-.65-.375-.315-.638-.708-.745-1.143-.267.398-.553.616-.735.52-.265-.136-.213-.88.117-1.654.26-.61.612-1.06.879-1.158a1.18 1.18 0 01.172-.748l-.002-.041c0-.11.026-.21.07-.298.068-1.586 1.1-2.845 2.771-2.845 1.67 0 2.703 1.259 2.771 2.845.044.088.07.188.07.298 0 .012 0 .027-.003.041a1.169 1.169 0 01.173.748c.267.098.62.547.878 1.158.331.775.383 1.518.119 1.655z"})})});yx.displayName="QqWithCircle";var Sx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M16.076 13.732a19.299 19.299 0 0 0 2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365c-.415 0-.415.408-.415.408V6.04H4.707v.948h5.861v1.699H5.729v.948h9.386a16.63 16.63 0 0 1-1.352 3.294c-3.045-1.002-6.295-1.814-8.337-1.314-1.305.321-2.146.893-2.641 1.493-2.267 2.751-.641 6.929 4.147 6.929 2.831 0 5.559-1.574 7.673-4.168C17.758 17.381 24 19.976 24 19.976v.157a3.837 3.837 0 0 1-3.843 3.833H3.845A3.839 3.839 0 0 1 0 20.132V3.868A3.838 3.838 0 0 1 3.845.034h16.312A3.837 3.837 0 0 1 24 3.868v12.409s-.784-.062-4.24-1.216c-.96-.321-2.249-.811-3.684-1.329zm-10.242-.698c-.6.059-1.725.324-2.341.866-1.845 1.604-.741 4.537 2.993 4.537 2.17 0 4.339-1.384 6.042-3.599-2.424-1.179-4.476-2.022-6.694-1.804z"})})});Sx.displayName="Alipay";var wx=Me.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Y(Zn,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:Y("path",{d:"M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm.75 3h-9v14.75c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V5z"})})});wx.displayName="PhonePageHeader";const o4=Te.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 80%;
    /* background-color: red; */
`,a4=Te.div`
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
`,l4=Te.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 370px;
    height:100%;
    /* background-color: #961414; */
`,I0=Te.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`,El=Te.span`
    color: #333;
    font-size: ${t=>t.size};
   

`,bl=Te.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: ${t=>t.position?"right":"left"};
`,u4=Te.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 20px 0;
`,k0=Te.input`
    width: 100%;
    height: 36px;
    font-size: 24px;
    margin: 5px 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
`,c4=Te.input`
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
`,z0=Te.a`
    margin: 0;
    padding: 0;
   
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,f4=Te(xx)`
    color: #03a303;
    margin: 5px 20px;
`,d4=Te(yx)`
    color: #f84747;
    margin: 5px 20px;
`,h4=Te(Sx)`
    color: #3664fc;
    margin: 5px 20px;
`,p4=Te(wx)`
    color: #ccc;
    margin: 5px 20px;
`,m4=Te.button`
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
`,N0=Te.div`
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: auto;
    margin: 5px 0;
`,g4=()=>{let t=tp();return Y(Kt,{children:Y(o4,{children:Y(a4,{children:et(l4,{children:[et(I0,{children:[Y(El,{size:"24px",children:"\u767B\u5F55"}),Y(z0,{children:"\u6CA1\u6709\u8D26\u53F7\uFF1F"})]}),et(u4,{children:[Y(bl,{children:Y(El,{size:"16px",children:"\u90AE\u7BB1\uFF1A"})}),Y(k0,{type:"email"}),Y(bl,{children:Y(El,{size:"16px",children:"\u5BC6\u7801\uFF1A"})}),Y(k0,{type:"password"})]}),et(I0,{children:[et(bl,{children:[Y(c4,{type:"checkbox"}),Y(El,{size:"12px",children:"\u8BB0\u4F4F\u5BC6\u7801"})]}),Y(bl,{position:!0,children:Y(z0,{children:"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"})})]}),Y(m4,{onClick:()=>{t("/editor")},children:"\u767B\u5F55"}),Y(N0,{children:Y(s4,{label:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),et(N0,{children:[Y(f4,{size:"40"}),Y(d4,{size:"40"}),Y(h4,{size:"40"}),Y(p4,{size:"40"})]})]})})})})},v4=Te.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    height: 100vh;
`,_4=()=>Y(Kt,{children:et(v4,{children:[Y(i4,{}),Y(g4,{}),Y(t4,{})]})}),x4=[{path:"/",element:Y(QP,{})},{path:"/example",element:Y(YT,{})},{path:"/document",element:Y(E2,{})},{path:"/course",element:Y(M2,{})},{path:"/editor",element:Y(qT,{})},{path:"/login",element:Y(_4,{})}],y4=gP({reducer:{user:MP}}),S4=DA`
    body {
        background: ${t=>t.theme.colors.body};
    }
`,w4={colors:{body:"#000"}},M4={colors:{body:"#fff"}},E4=t=>{const e=xw(n=>n.user.theme);return Y(LA,{theme:e===js.Dark?w4:M4,...t})},b4=()=>{const t=x2(x4);return Y(jw,{store:y4,children:et(E4,{children:[Y(S4,{}),t]})})};var Yd={},O0=eh.exports;Yd.createRoot=O0.createRoot,Yd.hydrateRoot=O0.hydrateRoot;new Rt().startUp();Yd.createRoot(document.getElementById("root")).render(Y(ai.StrictMode,{children:Y(w2,{children:Y(b4,{})})}));
