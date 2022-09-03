var Ax=Object.defineProperty;var Px=(t,e,n)=>e in t?Ax(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(Px(t,typeof e!="symbol"?e+"":e,n),n);const Lx=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Lx();function Dx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var T0={exports:{}},A0={},pe={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),Rx=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),zx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Fx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),Bx=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),fp=Symbol.iterator;function Gx(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var P0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,D0={};function so(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||P0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=so.prototype;function Nd(t,e,n){this.props=t,this.context=e,this.refs=D0,this.updater=n||P0}var Fd=Nd.prototype=new R0;Fd.constructor=Nd;L0(Fd,so.prototype);Fd.isPureReactComponent=!0;var dp=Array.isArray,I0=Object.prototype.hasOwnProperty,Od={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)I0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:s,ref:o,props:r,_owner:Od.current}}function Hx(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function Wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wx(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case Rx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,dp(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(Bd(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=ml(s,e,n,l,r)}else if(l=Gx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $x(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},gl={transition:null},jx={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Od};Oe.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=so;Oe.Fragment=Ix;Oe.Profiler=zx;Oe.PureComponent=Nd;Oe.StrictMode=kx;Oe.Suspense=Bx;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=L0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)I0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Fx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Oe.createElement=z0;Oe.createFactory=function(t){var e=z0.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:Ox,render:t}};Oe.isValidElement=Bd;Oe.lazy=function(t){return{$$typeof:Vx,_payload:{_status:-1,_result:t},_init:$x}};Oe.memo=function(t,e){return{$$typeof:Ux,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};Oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Oe.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Oe.useContext=function(t){return Jt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Oe.useId=function(){return Jt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Oe.useRef=function(t){return Jt.current.useRef(t)};Oe.useState=function(t){return Jt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Jt.current.useTransition()};Oe.version="18.2.0";(function(t){t.exports=Oe})(pe);const Wn=Dx(pe.exports);/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=pe.exports;function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qx=typeof Object.is=="function"?Object.is:Xx,Yx=$s.useState,Zx=$s.useEffect,Qx=$s.useLayoutEffect,Jx=$s.useDebugValue;function Kx(t,e){var n=e(),i=Yx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Qx(function(){r.value=n,r.getSnapshot=e,lu(r)&&s({inst:r})},[t,n,e]),Zx(function(){return lu(r)&&s({inst:r}),t(function(){lu(r)&&s({inst:r})})},[t]),Jx(n),n}function lu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qx(t,n)}catch{return!0}}function ey(t,e){return e()}var ty=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ey:Kx;A0.useSyncExternalStore=$s.useSyncExternalStore!==void 0?$s.useSyncExternalStore:ty;(function(t){t.exports=A0})(T0);var N0={exports:{}},F0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=pe.exports,ny=T0.exports;function iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ry=typeof Object.is=="function"?Object.is:iy,sy=ny.useSyncExternalStore,oy=pc.useRef,ay=pc.useEffect,ly=pc.useMemo,cy=pc.useDebugValue;F0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=oy(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=ly(function(){function l(m){if(!c){if(c=!0,u=m,m=i(m),r!==void 0&&o.hasValue){var _=o.value;if(r(_,m))return f=_}return f=m}if(_=f,ry(u,m))return _;var h=i(m);return r!==void 0&&r(_,h)?_:(u=m,f=h)}var c=!1,u,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=sy(t,s[0],s[1]);return ay(function(){o.hasValue=!0,o.value=a},[a]),cy(a),a};(function(t){t.exports=F0})(N0);var Ud={exports:{}},_n={},O0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,z){var V=I.length;I.push(z);e:for(;0<V;){var K=V-1>>>1,O=I[K];if(0<r(O,z))I[K]=z,I[V]=O,V=K;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var z=I[0],V=I.pop();if(V!==z){I[0]=V;e:for(var K=0,O=I.length,G=O>>>1;K<G;){var q=2*(K+1)-1,le=I[q],A=q+1,Se=I[A];if(0>r(le,V))A<O&&0>r(Se,le)?(I[K]=Se,I[A]=V,K=A):(I[K]=le,I[q]=V,K=q);else if(A<O&&0>r(Se,V))I[K]=Se,I[A]=V,K=A;else break e}}return z}function r(I,z){var V=I.sortIndex-z.sortIndex;return V!==0?V:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,m=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=I)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function S(I){if(h=!1,x(I),!_)if(n(l)!==null)_=!0,$(w);else{var z=n(c);z!==null&&J(S,z.startTime-I)}}function w(I,z){_=!1,h&&(h=!1,g(y),y=-1),m=!0;var V=d;try{for(x(z),f=n(l);f!==null&&(!(f.expirationTime>z)||I&&!F());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var O=K(f.expirationTime<=z);z=t.unstable_now(),typeof O=="function"?f.callback=O:f===n(l)&&i(l),x(z)}else i(l);f=n(l)}if(f!==null)var G=!0;else{var q=n(c);q!==null&&J(S,q.startTime-z),G=!1}return G}finally{f=null,d=V,m=!1}}var C=!1,D=null,y=-1,T=5,R=-1;function F(){return!(t.unstable_now()-R<T)}function re(){if(D!==null){var I=t.unstable_now();R=I;var z=!0;try{z=D(!0,I)}finally{z?ee():(C=!1,D=null)}}else C=!1}var ee;if(typeof v=="function")ee=function(){v(re)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=re,ee=function(){X.postMessage(null)}}else ee=function(){p(re,0)};function $(I){D=I,C||(C=!0,ee())}function J(I,z){y=p(function(){I(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var V=d;d=z;try{return I()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=d;d=I;try{return z()}finally{d=V}},t.unstable_scheduleCallback=function(I,z,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=V+O,I={id:u++,callback:z,priorityLevel:I,startTime:V,expirationTime:O,sortIndex:-1},V>K?(I.sortIndex=V,e(c,I),n(l)===null&&I===n(c)&&(h?(g(y),y=-1):h=!0,J(S,V-K))):(I.sortIndex=O,e(l,I),_||m||(_=!0,$(w))),I},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(I){var z=d;return function(){var V=d;d=z;try{return I.apply(this,arguments)}finally{d=V}}}})(B0);(function(t){t.exports=B0})(O0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=pe.exports,gn=O0.exports;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V0=new Set,Xo={};function qr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Xo[t]=e,t=0;t<e.length;t++)V0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=Object.prototype.hasOwnProperty,uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},mp={};function fy(t){return bf.call(mp,t)?!0:bf.call(pp,t)?!1:uy.test(t)?mp[t]=!0:(pp[t]=!0,!1)}function dy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hy(t,e,n,i){if(e===null||typeof e>"u"||dy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);Nt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vd,Gd);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hy(e,n,r,i)&&(n=null),i||r===null?fy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),_s=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),gp=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,cu;function To(t){if(cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+t}var uu=!1;function fu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?To(t):""}function py(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case _s:return"Portal";case Cf:return"Profiler";case Wd:return"StrictMode";case Tf:return"Suspense";case Af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jd:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function my(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gy(t){var e=$0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=gy(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Df(t,e){X0(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rf(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rf(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ao(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function q0(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vy=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){vy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Q0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _y=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(_y[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,zs=null,Ns=null;function Sp(t){if(t=ya(t)){if(typeof Of!="function")throw Error(se(280));var e=t.stateNode;e&&(e=xc(e),Of(t.stateNode,t.type,e))}}function K0(t){zs?Ns?Ns.push(t):Ns=[t]:zs=t}function ev(){if(zs){var t=zs,e=Ns;if(Ns=zs=null,Sp(t),e)for(t=0;t<e.length;t++)Sp(e[t])}}function tv(t,e){return t(e)}function nv(){}var du=!1;function iv(t,e,n){if(du)return t(e,n);du=!0;try{return tv(t,e,n)}finally{du=!1,(zs!==null||Ns!==null)&&(nv(),ev())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var i=xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Bf=!1;if(wi)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Bf=!1}function xy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var No=!1,Il=null,kl=!1,Uf=null,yy={onError:function(t){No=!0,Il=t}};function Sy(t,e,n,i,r,s,o,a,l){No=!1,Il=null,xy.apply(yy,arguments)}function wy(t,e,n,i,r,s,o,a,l){if(Sy.apply(this,arguments),No){if(No){var c=Il;No=!1,Il=null}else throw Error(se(198));kl||(kl=!0,Uf=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wp(t){if(Yr(t)!==t)throw Error(se(188))}function My(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wp(r),t;if(s===i)return wp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function sv(t){return t=My(t),t!==null?ov(t):null}function ov(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ov(t);if(e!==null)return e;t=t.sibling}return null}var av=gn.unstable_scheduleCallback,Mp=gn.unstable_cancelCallback,Ey=gn.unstable_shouldYield,by=gn.unstable_requestPaint,yt=gn.unstable_now,Cy=gn.unstable_getCurrentPriorityLevel,qd=gn.unstable_ImmediatePriority,lv=gn.unstable_UserBlockingPriority,zl=gn.unstable_NormalPriority,Ty=gn.unstable_LowPriority,cv=gn.unstable_IdlePriority,mc=null,ri=null;function Ay(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:Dy,Py=Math.log,Ly=Math.LN2;function Dy(t){return t>>>=0,t===0?32:31-(Py(t)/Ly|0)|0}var Pa=64,La=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Po(a):(s&=o,s!==0&&(i=Po(s)))}else o=n&~r,o!==0?i=Po(o):s!==0&&(i=Po(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function Ry(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=Ry(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uv(){var t=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function fv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var dv,Zd,hv,pv,mv,Gf=!1,Da=[],ji=null,Xi=null,qi=null,Zo=new Map,Qo=new Map,Vi=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ny(t,e,n,i,r){switch(e){case"focusin":return ji=_o(ji,t,e,n,i,r),!0;case"dragenter":return Xi=_o(Xi,t,e,n,i,r),!0;case"mouseover":return qi=_o(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,_o(Zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,_o(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function gv(t){var e=wr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=rv(n),e!==null){t.blockedOn=e,mv(t.priority,function(){hv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ff=i,n.target.dispatchEvent(i),Ff=null}else return e=ya(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){vl(t)&&n.delete(e)}function Fy(){Gf=!1,ji!==null&&vl(ji)&&(ji=null),Xi!==null&&vl(Xi)&&(Xi=null),qi!==null&&vl(qi)&&(qi=null),Zo.forEach(bp),Qo.forEach(bp)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Gf||(Gf=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Fy)))}function Jo(t){function e(r){return xo(r,t)}if(0<Da.length){xo(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&xo(ji,t),Xi!==null&&xo(Xi,t),qi!==null&&xo(qi,t),Zo.forEach(e),Qo.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)gv(n),n.blockedOn===null&&Vi.shift()}var Fs=Ti.ReactCurrentBatchConfig,Fl=!0;function Oy(t,e,n,i){var r=Je,s=Fs.transition;Fs.transition=null;try{Je=1,Qd(t,e,n,i)}finally{Je=r,Fs.transition=s}}function By(t,e,n,i){var r=Je,s=Fs.transition;Fs.transition=null;try{Je=4,Qd(t,e,n,i)}finally{Je=r,Fs.transition=s}}function Qd(t,e,n,i){if(Fl){var r=Hf(t,e,n,i);if(r===null)Mu(t,e,i,Ol,n),Ep(t,i);else if(Ny(r,t,e,n,i))i.stopPropagation();else if(Ep(t,i),e&4&&-1<zy.indexOf(t)){for(;r!==null;){var s=ya(r);if(s!==null&&dv(s),s=Hf(t,e,n,i),s===null&&Mu(t,e,i,Ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var Ol=null;function Hf(t,e,n,i){if(Ol=null,t=Xd(i),t=wr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cy()){case qd:return 1;case lv:return 4;case zl:case Ty:return 16;case cv:return 536870912;default:return 16}default:return 16}}var Wi=null,Jd=null,_l=null;function _v(){if(_l)return _l;var t,e=Jd,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Cp(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Cp,this.isPropagationStopped=Cp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=xn(oo),xa=ft({},oo,{view:0,detail:0}),Uy=xn(xa),pu,mu,yo,gc=ft({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(pu=t.screenX-yo.screenX,mu=t.screenY-yo.screenY):mu=pu=0,yo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Tp=xn(gc),Vy=ft({},gc,{dataTransfer:0}),Gy=xn(Vy),Hy=ft({},xa,{relatedTarget:0}),gu=xn(Hy),Wy=ft({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=xn(Wy),jy=ft({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=xn(jy),qy=ft({},oo,{data:0}),Ap=xn(qy),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qy[t])?!!e[t]:!1}function eh(){return Jy}var Ky=ft({},xa,{key:function(t){if(t.key){var e=Yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=xn(Ky),tS=ft({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=xn(tS),nS=ft({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),iS=xn(nS),rS=ft({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=xn(rS),oS=ft({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=xn(oS),lS=[9,13,27,32],th=wi&&"CompositionEvent"in window,Fo=null;wi&&"documentMode"in document&&(Fo=document.documentMode);var cS=wi&&"TextEvent"in window&&!Fo,xv=wi&&(!th||Fo&&8<Fo&&11>=Fo),Lp=String.fromCharCode(32),Dp=!1;function yv(t,e){switch(t){case"keyup":return lS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function uS(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(Dp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Dp?null:t;default:return null}}function fS(t,e){if(ys)return t==="compositionend"||!th&&yv(t,e)?(t=_v(),_l=Jd=Wi=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xv&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function wv(t,e,n,i){K0(i),e=Bl(e,"onChange"),0<e.length&&(n=new Kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Ko=null;function hS(t){Iv(t,0)}function vc(t){var e=Ms(t);if(j0(e))return t}function pS(t,e){if(t==="change")return e}var Mv=!1;if(wi){var vu;if(wi){var _u="oninput"in document;if(!_u){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),_u=typeof Ip.oninput=="function"}vu=_u}else vu=!1;Mv=vu&&(!document.documentMode||9<document.documentMode)}function kp(){Oo&&(Oo.detachEvent("onpropertychange",Ev),Ko=Oo=null)}function Ev(t){if(t.propertyName==="value"&&vc(Ko)){var e=[];wv(e,Ko,t,Xd(t)),iv(hS,e)}}function mS(t,e,n){t==="focusin"?(kp(),Oo=e,Ko=n,Oo.attachEvent("onpropertychange",Ev)):t==="focusout"&&kp()}function gS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Ko)}function vS(t,e){if(t==="click")return vc(e)}function _S(t,e){if(t==="input"||t==="change")return vc(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:xS;function ea(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bf.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Np(t,e){var n=zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=Cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(i!==null&&nh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Np(n,s);var o=Np(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SS=wi&&"documentMode"in document&&11>=document.documentMode,Ss=null,Wf=null,Bo=null,$f=!1;function Fp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$f||Ss==null||Ss!==Rl(i)||(i=Ss,"selectionStart"in i&&nh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ea(Bo,i)||(Bo=i,i=Bl(Wf,"onSelect"),0<i.length&&(e=new Kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},xu={},Tv={};wi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function _c(t){if(xu[t])return xu[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tv)return xu[t]=e[n];return t}var Av=_c("animationend"),Pv=_c("animationiteration"),Lv=_c("animationstart"),Dv=_c("transitionend"),Rv=new Map,Op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Rv.set(t,e),qr(e,[t])}for(var yu=0;yu<Op.length;yu++){var Su=Op[yu],wS=Su.toLowerCase(),MS=Su[0].toUpperCase()+Su.slice(1);lr(wS,"on"+MS)}lr(Av,"onAnimationEnd");lr(Pv,"onAnimationIteration");lr(Lv,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Dv,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wy(i,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,a,c),s=l}}}if(kl)throw t=Uf,kl=!1,Uf=null,t}function rt(t,e){var n=e[Zf];n===void 0&&(n=e[Zf]=new Set);var i=t+"__bubble";n.has(i)||(kv(e,t,2,!1),n.add(i))}function wu(t,e,n){var i=0;e&&(i|=4),kv(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[ka]){t[ka]=!0,V0.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||wu(n,!1,t),wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,wu("selectionchange",!1,e))}}function kv(t,e,n,i){switch(vv(e)){case 1:var r=Oy;break;case 4:r=By;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!Bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}iv(function(){var c=s,u=Xd(n),f=[];e:{var d=Rv.get(t);if(d!==void 0){var m=Kd,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":m=eS;break;case"focusin":_="focus",m=gu;break;case"focusout":_="blur",m=gu;break;case"beforeblur":case"afterblur":m=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=iS;break;case Av:case Pv:case Lv:m=$y;break;case Dv:m=sS;break;case"scroll":m=Uy;break;case"wheel":m=aS;break;case"copy":case"cut":case"paste":m=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pp}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=Yo(v,g),S!=null&&h.push(na(v,S,x)))),p)break;v=v.return}0<h.length&&(d=new m(d,_,null,n,u),f.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Ff&&(_=n.relatedTarget||n.fromElement)&&(wr(_)||_[Mi]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?wr(_):null,_!==null&&(p=Yr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(h=Tp,S="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Pp,S="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?d:Ms(m),x=_==null?d:Ms(_),d=new h(S,v+"leave",m,n,u),d.target=p,d.relatedTarget=x,S=null,wr(u)===c&&(h=new h(g,v+"enter",_,n,u),h.target=x,h.relatedTarget=p,S=h),p=S,m&&_)t:{for(h=m,g=_,v=0,x=h;x;x=es(x))v++;for(x=0,S=g;S;S=es(S))x++;for(;0<v-x;)h=es(h),v--;for(;0<x-v;)g=es(g),x--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=es(h),g=es(g)}h=null}else h=null;m!==null&&Up(f,d,m,h,!1),_!==null&&p!==null&&Up(f,p,_,h,!0)}}e:{if(d=c?Ms(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=pS;else if(Rp(d))if(Mv)w=_S;else{w=gS;var C=mS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=vS);if(w&&(w=w(t,c))){wv(f,w,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Rf(d,"number",d.value)}switch(C=c?Ms(c):window,t){case"focusin":(Rp(C)||C.contentEditable==="true")&&(Ss=C,Wf=c,Bo=null);break;case"focusout":Bo=Wf=Ss=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Fp(f,n,u);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":Fp(f,n,u)}var D;if(th)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ys?yv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xv&&n.locale!=="ko"&&(ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&ys&&(D=_v()):(Wi=u,Jd="value"in Wi?Wi.value:Wi.textContent,ys=!0)),C=Bl(c,y),0<C.length&&(y=new Ap(y,t,null,n,u),f.push({event:y,listeners:C}),D?y.data=D:(D=Sv(n),D!==null&&(y.data=D)))),(D=cS?uS(t,n):fS(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(u=new Ap("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=D))}Iv(f,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Yo(t,n),s!=null&&i.unshift(na(t,s,r)),s=Yo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Yo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=Yo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bS=/\r\n?/g,CS=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(CS,"")}function za(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(se(425))}function Ul(){}var jf=null,Xf=null;function qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(PS)}:Yf;function PS(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),ti="__reactFiber$"+ao,ia="__reactProps$"+ao,Mi="__reactContainer$"+ao,Zf="__reactEvents$"+ao,LS="__reactListeners$"+ao,DS="__reactHandles$"+ao;function wr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[ti])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[ti]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function xc(t){return t[ia]||null}var Qf=[],Es=-1;function cr(t){return{current:t}}function st(t){0>Es||(t.current=Qf[Es],Qf[Es]=null,Es--)}function it(t,e){Es++,Qf[Es]=t.current,t.current=e}var rr={},Ht=cr(rr),on=cr(!1),kr=rr;function Xs(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Vl(){st(on),st(Ht)}function Wp(t,e,n){if(Ht.current!==rr)throw Error(se(168));it(Ht,e),it(on,n)}function zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,my(t)||"Unknown",r));return ft({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,kr=Ht.current,it(Ht,t),it(on,on.current),!0}function $p(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=zv(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,st(on),st(Ht),it(Ht,t)):st(on),it(on,n)}var gi=null,yc=!1,bu=!1;function Nv(t){gi===null?gi=[t]:gi.push(t)}function RS(t){yc=!0,Nv(t)}function ur(){if(!bu&&gi!==null){bu=!0;var t=0,e=Je;try{var n=gi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,yc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),av(qd,ur),r}finally{Je=e,bu=!1}}return null}var bs=[],Cs=0,Hl=null,Wl=0,En=[],bn=0,zr=null,_i=1,xi="";function mr(t,e){bs[Cs++]=Wl,bs[Cs++]=Hl,Hl=t,Wl=e}function Fv(t,e,n){En[bn++]=_i,En[bn++]=xi,En[bn++]=zr,zr=t;var i=_i;t=xi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-$n(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function ih(t){t.return!==null&&(mr(t,1),Fv(t,1,0))}function rh(t){for(;t===Hl;)Hl=bs[--Cs],bs[Cs]=null,Wl=bs[--Cs],bs[Cs]=null;for(;t===zr;)zr=En[--bn],En[bn]=null,xi=En[--bn],En[bn]=null,_i=En[--bn],En[bn]=null}var mn=null,pn=null,lt=!1,Un=null;function Ov(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kf(t){if(lt){var e=pn;if(e){var n=e;if(!jp(t,e)){if(Jf(t))throw Error(se(418));e=Yi(n.nextSibling);var i=mn;e&&jp(t,e)?Ov(i,n):(t.flags=t.flags&-4097|2,lt=!1,mn=t)}}else{if(Jf(t))throw Error(se(418));t.flags=t.flags&-4097|2,lt=!1,mn=t}}}function Xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Na(t){if(t!==mn)return!1;if(!lt)return Xp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qf(t.type,t.memoizedProps)),e&&(e=pn)){if(Jf(t))throw Bv(),Error(se(418));for(;e;)Ov(t,e),e=Yi(e.nextSibling)}if(Xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Yi(t.stateNode.nextSibling):null;return!0}function Bv(){for(var t=pn;t;)t=Yi(t.nextSibling)}function qs(){pn=mn=null,lt=!1}function sh(t){Un===null?Un=[t]:Un.push(t)}var IS=Ti.ReactCurrentBatchConfig;function On(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $l=cr(null),jl=null,Ts=null,oh=null;function ah(){oh=Ts=jl=null}function lh(t){var e=$l.current;st($l),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){jl=t,oh=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(oh!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(jl===null)throw Error(se(308));Ts=t,jl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Mr=null;function ch(t){Mr===null?Mr=[t]:Mr.push(t)}function Uv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ch(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(He&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,ch(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}function qp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,h=a;switch(d=e,m=n,h.tag){case 1:if(_=h.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=ft({},f,d);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function Yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Gv=new U0.Component().refs;function td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Ji(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(jn(e,t,r,i),yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Ji(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(jn(e,t,r,i),yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Ji(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(jn(e,t,i,n),yl(e,t,i))}};function Zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function Hv(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=an(e)?kr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Xs(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Gv,uh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=an(e)?kr:Ht.current,r.context=Xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(td(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),Xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Gv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function Wv(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=Ki(g,v),g.index=0,g.sibling=null,g}function s(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,x,S){return v===null||v.tag!==6?(v=Ru(x,g.mode,S),v.return=g,v):(v=r(v,x),v.return=g,v)}function l(g,v,x,S){var w=x.type;return w===xs?u(g,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&Jp(w)===v.type)?(S=r(v,x.props),S.ref=So(g,v,x),S.return=g,S):(S=Cl(x.type,x.key,x.props,null,g.mode,S),S.ref=So(g,v,x),S.return=g,S)}function c(g,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Iu(x,g.mode,S),v.return=g,v):(v=r(v,x.children||[]),v.return=g,v)}function u(g,v,x,S,w){return v===null||v.tag!==7?(v=Lr(x,g.mode,S,w),v.return=g,v):(v=r(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ru(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return x=Cl(v.type,v.key,v.props,null,g.mode,x),x.ref=So(g,null,v),x.return=g,x;case _s:return v=Iu(v,g.mode,x),v.return=g,v;case Bi:var S=v._init;return f(g,S(v._payload),x)}if(Ao(v)||go(v))return v=Lr(v,g.mode,x,null),v.return=g,v;Fa(g,v)}return null}function d(g,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:return x.key===w?l(g,v,x,S):null;case _s:return x.key===w?c(g,v,x,S):null;case Bi:return w=x._init,d(g,v,w(x._payload),S)}if(Ao(x)||go(x))return w!==null?null:u(g,v,x,S,null);Fa(g,x)}return null}function m(g,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,a(v,g,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ca:return g=g.get(S.key===null?x:S.key)||null,l(v,g,S,w);case _s:return g=g.get(S.key===null?x:S.key)||null,c(v,g,S,w);case Bi:var C=S._init;return m(g,v,x,C(S._payload),w)}if(Ao(S)||go(S))return g=g.get(x)||null,u(v,g,S,w,null);Fa(v,S)}return null}function _(g,v,x,S){for(var w=null,C=null,D=v,y=v=0,T=null;D!==null&&y<x.length;y++){D.index>y?(T=D,D=null):T=D.sibling;var R=d(g,D,x[y],S);if(R===null){D===null&&(D=T);break}t&&D&&R.alternate===null&&e(g,D),v=s(R,v,y),C===null?w=R:C.sibling=R,C=R,D=T}if(y===x.length)return n(g,D),lt&&mr(g,y),w;if(D===null){for(;y<x.length;y++)D=f(g,x[y],S),D!==null&&(v=s(D,v,y),C===null?w=D:C.sibling=D,C=D);return lt&&mr(g,y),w}for(D=i(g,D);y<x.length;y++)T=m(D,g,y,x[y],S),T!==null&&(t&&T.alternate!==null&&D.delete(T.key===null?y:T.key),v=s(T,v,y),C===null?w=T:C.sibling=T,C=T);return t&&D.forEach(function(F){return e(g,F)}),lt&&mr(g,y),w}function h(g,v,x,S){var w=go(x);if(typeof w!="function")throw Error(se(150));if(x=w.call(x),x==null)throw Error(se(151));for(var C=w=null,D=v,y=v=0,T=null,R=x.next();D!==null&&!R.done;y++,R=x.next()){D.index>y?(T=D,D=null):T=D.sibling;var F=d(g,D,R.value,S);if(F===null){D===null&&(D=T);break}t&&D&&F.alternate===null&&e(g,D),v=s(F,v,y),C===null?w=F:C.sibling=F,C=F,D=T}if(R.done)return n(g,D),lt&&mr(g,y),w;if(D===null){for(;!R.done;y++,R=x.next())R=f(g,R.value,S),R!==null&&(v=s(R,v,y),C===null?w=R:C.sibling=R,C=R);return lt&&mr(g,y),w}for(D=i(g,D);!R.done;y++,R=x.next())R=m(D,g,y,R.value,S),R!==null&&(t&&R.alternate!==null&&D.delete(R.key===null?y:R.key),v=s(R,v,y),C===null?w=R:C.sibling=R,C=R);return t&&D.forEach(function(re){return e(g,re)}),lt&&mr(g,y),w}function p(g,v,x,S){if(typeof x=="object"&&x!==null&&x.type===xs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ca:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===xs){if(C.tag===7){n(g,C.sibling),v=r(C,x.props.children),v.return=g,g=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&Jp(w)===C.type){n(g,C.sibling),v=r(C,x.props),v.ref=So(g,C,x),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}x.type===xs?(v=Lr(x.props.children,g.mode,S,x.key),v.return=g,g=v):(S=Cl(x.type,x.key,x.props,null,g.mode,S),S.ref=So(g,v,x),S.return=g,g=S)}return o(g);case _s:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=r(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=Iu(x,g.mode,S),v.return=g,g=v}return o(g);case Bi:return C=x._init,p(g,v,C(x._payload),S)}if(Ao(x))return _(g,v,x,S);if(go(x))return h(g,v,x,S);Fa(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,x),v.return=g,g=v):(n(g,v),v=Ru(x,g.mode,S),v.return=g,g=v),o(g)):n(g,v)}return p}var Ys=Wv(!0),$v=Wv(!1),Sa={},si=cr(Sa),ra=cr(Sa),sa=cr(Sa);function Er(t){if(t===Sa)throw Error(se(174));return t}function fh(t,e){switch(it(sa,e),it(ra,t),it(si,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}st(si),it(si,e)}function Zs(){st(si),st(ra),st(sa)}function jv(t){Er(sa.current);var e=Er(si.current),n=kf(e,t.type);e!==n&&(it(ra,t),it(si,n))}function dh(t){ra.current===t&&(st(si),st(ra))}var ct=cr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cu=[];function hh(){for(var t=0;t<Cu.length;t++)Cu[t]._workInProgressVersionPrimary=null;Cu.length=0}var Sl=Ti.ReactCurrentDispatcher,Tu=Ti.ReactCurrentBatchConfig,Nr=0,ut=null,bt=null,Lt=null,Yl=!1,Uo=!1,oa=0,kS=0;function Ft(){throw Error(se(321))}function ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function mh(t,e,n,i,r,s){if(Nr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?OS:BS,t=n(i,r),Uo){s=0;do{if(Uo=!1,oa=0,25<=s)throw Error(se(301));s+=1,Lt=bt=null,e.updateQueue=null,Sl.current=US,t=n(i,r)}while(Uo)}if(Sl.current=Zl,e=bt!==null&&bt.next!==null,Nr=0,Lt=bt=ut=null,Yl=!1,e)throw Error(se(300));return t}function gh(){var t=oa!==0;return oa=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Dn(){if(bt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Lt===null?ut.memoizedState:Lt.next;if(e!==null)Lt=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function aa(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ut.lanes|=u,Fr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xv(){}function qv(t,e){var n=ut,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,vh(Qv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,la(9,Zv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(se(349));(Nr&30)!==0||Yv(n,e,r)}return r}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,i){e.value=n,e.getSnapshot=i,Jv(e)&&Kv(t)}function Qv(t,e,n){return n(function(){Jv(e)&&Kv(t)})}function Jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Kv(t){var e=Ei(t,1);e!==null&&jn(e,t,1,-1)}function Kp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=FS.bind(null,ut,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e1(){return Dn().memoizedState}function wl(t,e,n,i){var r=Kn();ut.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function wc(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&ph(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}ut.flags|=t,r.memoizedState=la(1|e,n,s,i)}function em(t,e){return wl(8390656,8,t,e)}function vh(t,e){return wc(2048,8,t,e)}function t1(t,e){return wc(4,2,t,e)}function n1(t,e){return wc(4,4,t,e)}function i1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r1(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,i1.bind(null,e,t),n)}function _h(){}function s1(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o1(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a1(t,e,n){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n):(Yn(n,e)||(n=uv(),ut.lanes|=n,Fr|=n,t.baseState=!0),e)}function zS(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Tu.transition;Tu.transition={};try{t(!1),e()}finally{Je=n,Tu.transition=i}}function l1(){return Dn().memoizedState}function NS(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},c1(t))u1(e,n);else if(n=Uv(t,e,n,i),n!==null){var r=Yt();jn(n,t,i,r),f1(n,e,i)}}function FS(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(t))u1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,ch(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Uv(t,e,r,i),n!==null&&(r=Yt(),jn(n,t,i,r),f1(n,e,i))}}function c1(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function u1(t,e){Uo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f1(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yd(t,n)}}var Zl={readContext:Ln,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},OS={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,i1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=NS.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Kp,useDebugValue:_h,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Kp(!1),e=t[0];return t=zS.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Kn();if(lt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Dt===null)throw Error(se(349));(Nr&30)!==0||Yv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,em(Qv.bind(null,i,s,t),[t]),i.flags|=2048,la(9,Zv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Dt.identifierPrefix;if(lt){var n=xi,i=_i;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BS={readContext:Ln,useCallback:s1,useContext:Ln,useEffect:vh,useImperativeHandle:r1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:Au,useRef:e1,useState:function(){return Au(aa)},useDebugValue:_h,useDeferredValue:function(t){var e=Dn();return a1(e,bt.memoizedState,t)},useTransition:function(){var t=Au(aa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:qv,useId:l1,unstable_isNewReconciler:!1},US={readContext:Ln,useCallback:s1,useContext:Ln,useEffect:vh,useImperativeHandle:r1,useInsertionEffect:t1,useLayoutEffect:n1,useMemo:o1,useReducer:Pu,useRef:e1,useState:function(){return Pu(aa)},useDebugValue:_h,useDeferredValue:function(t){var e=Dn();return bt===null?e.memoizedState=t:a1(e,bt.memoizedState,t)},useTransition:function(){var t=Pu(aa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Xv,useSyncExternalStore:qv,useId:l1,unstable_isNewReconciler:!1};function Qs(t,e){try{var n="",i=e;do n+=py(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VS=typeof WeakMap=="function"?WeakMap:Map;function d1(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,hd=i),id(t,e)},n}function h1(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new VS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=t2.bind(null,t,e,n),e.then(t,t))}function nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function im(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var GS=Ti.ReactCurrentOwner,rn=!1;function qt(t,e,n,i){e.child=t===null?$v(e,null,n,i):Ys(e,t.child,n,i)}function rm(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=mh(t,e,n,i,s,r),n=gh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&n&&ih(e),e.flags|=1,qt(t,e,i,r),e.child)}function sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p1(t,e,s,i,r)):(t=Cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function p1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(rn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return rd(t,e,n,i,r)}function m1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Ps,dn),dn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(Ps,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(Ps,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(Ps,dn),dn|=i;return qt(t,e,r,n),e.child}function g1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rd(t,e,n,i,r){var s=an(n)?kr:Ht.current;return s=Xs(e,s),Os(e,r),n=mh(t,e,n,i,s,r),i=gh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&i&&ih(e),e.flags|=1,qt(t,e,n,r),e.child)}function om(t,e,n,i,r){if(an(n)){var s=!0;Gl(e)}else s=!1;if(Os(e,r),e.stateNode===null)Ml(t,e),Hv(e,n,i),nd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=an(n)?kr:Ht.current,c=Xs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qp(e,o,i,c),Ui=!1;var d=e.memoizedState;o.state=d,Xl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||Ui?(typeof u=="function"&&(td(e,n,u,i),l=e.memoizedState),(a=Ui||Zp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=an(n)?kr:Ht.current,l=Xs(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Qp(e,o,i,l),Ui=!1,d=e.memoizedState,o.state=d,Xl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||on.current||Ui?(typeof m=="function"&&(td(e,n,m,i),_=e.memoizedState),(c=Ui||Zp(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return sd(t,e,n,i,s,r)}function sd(t,e,n,i,r,s){g1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$p(e,n,!1),bi(t,e,s);i=e.stateNode,GS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&$p(e,n,!0),e.child}function v1(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),fh(t,e.containerInfo)}function am(t,e,n,i,r){return qs(),sh(r),e.flags|=256,qt(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function _1(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ct,r&1),t===null)return Kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=od,t):xh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xh(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&sh(i),Ys(e,t.child,null,n),t=xh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lu(Error(se(422))),Oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bc({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ys(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,s);if((e.mode&1)===0)return Oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Lu(s,i,void 0),Oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),jn(i,t,r,-1))}return bh(),i=Lu(Error(se(421))),Oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=n2.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Yi(r.nextSibling),mn=e,lt=!0,Un=null,t!==null&&(En[bn++]=_i,En[bn++]=xi,En[bn++]=zr,_i=t.id,xi=t.overflow,zr=e),e=xh(e,i.children),e.flags|=4096,e)}function lm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ed(t.return,e,n)}function Du(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=ct.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,n,e);else if(t.tag===19)lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ct,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Du(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:v1(e),qs();break;case 5:jv(e);break;case 1:an(e.type)&&Gl(e);break;case 4:fh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ct,ct.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?_1(t,e,n):(it(ct,ct.current&1),t=bi(t,e,n),t!==null?t.sibling:null);it(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return x1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,m1(t,e,n)}return bi(t,e,n)}var y1,ld,S1,w1;y1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};S1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(si.current);var s=null;switch(n){case"input":r=Lf(t,r),i=Lf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=If(t,r),i=If(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}zf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w1=function(t,e,n,i){n!==i&&(e.flags|=4)};function wo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $S(t,e,n){var i=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return an(e.type)&&Vl(),Ot(e),null;case 3:return i=e.stateNode,Zs(),st(on),st(Ht),hh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(gd(Un),Un=null))),ld(t,e),Ot(e),null;case 5:dh(e);var r=Er(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)S1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ot(e),null}if(t=Er(si.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Lo.length;r++)rt(Lo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":vp(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":xp(i,s),rt("invalid",i)}zf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ta(i),_p(i,s,!0);break;case"textarea":Ta(i),yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[ia]=i,y1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Lo.length;r++)rt(Lo[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":vp(t,i),r=Lf(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),rt("invalid",t);break;case"textarea":xp(t,i),r=If(t,i),rt("invalid",t);break;default:r=i}zf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Hd(t,s,l,o))}switch(n){case"input":Ta(t),_p(t,i,!1);break;case"textarea":Ta(t),yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)w1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Er(sa.current),Er(si.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Ot(e),null;case 13:if(st(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Bv(),qs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ti]=e}else qs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Un!==null&&(gd(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ct.current&1)!==0?Ct===0&&(Ct=3):bh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Zs(),ld(t,e),t===null&&ta(e.stateNode.containerInfo),Ot(e),null;case 10:return lh(e.type._context),Ot(e),null;case 17:return an(e.type)&&Vl(),Ot(e),null;case 19:if(st(ct),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)wo(s,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Js&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ot(e),null}else 2*yt()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ct.current,it(ct,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Eh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(dn&1073741824)!==0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function jS(t,e){switch(rh(e),e.tag){case 1:return an(e.type)&&Vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),st(on),st(Ht),hh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return dh(e),null;case 13:if(st(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ct),null;case 4:return Zs(),null;case 10:return lh(e.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Ba=!1,Gt=!1,XS=typeof WeakSet=="function"?WeakSet:Set,xe=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function cd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var cm=!1;function qS(t,e){if(jf=Fl,t=Cv(),nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:t,selectionRange:n},Fl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:On(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=cm,cm=!1,_}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cd(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M1(t){var e=t.alternate;e!==null&&(t.alternate=null,M1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ia],delete e[Zf],delete e[LS],delete e[DS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E1(t){return t.tag===5||t.tag===3||t.tag===4}function um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var It=null,Bn=!1;function Di(t,e,n){for(n=n.child;n!==null;)b1(t,e,n),n=n.sibling}function b1(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:Gt||As(n,e);case 6:var i=It,r=Bn;It=null,Di(t,e,n),It=i,Bn=r,It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),Jo(t)):Eu(It,n.stateNode));break;case 4:i=It,r=Bn,It=n.stateNode.containerInfo,Bn=!0,Di(t,e,n),It=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&cd(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!Gt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Di(t,e,n),Gt=i):Di(t,e,n);break;default:Di(t,e,n)}}function fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new XS),e.forEach(function(i){var r=i2.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Bn=!1;break e;case 3:It=a.stateNode.containerInfo,Bn=!0;break e;case 4:It=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(It===null)throw Error(se(160));b1(s,o,r),It=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)C1(e,t),e=e.sibling}function C1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Jn(t),i&4){try{Vo(3,t,t.return),Mc(3,t)}catch(h){gt(t,t.return,h)}try{Vo(5,t,t.return)}catch(h){gt(t,t.return,h)}}break;case 1:In(e,t),Jn(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(In(e,t),Jn(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(h){gt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&X0(r,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?J0(r,f):u==="dangerouslySetInnerHTML"?Z0(r,f):u==="children"?qo(r,f):Hd(r,u,f,c)}switch(a){case"input":Df(r,s);break;case"textarea":q0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ks(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(h){gt(t,t.return,h)}}break;case 6:if(In(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){gt(t,t.return,h)}}break;case 3:if(In(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(h){gt(t,t.return,h)}break;case 4:In(e,t),Jn(t);break;case 13:In(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wh=yt())),i&4&&fm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||u,In(e,t),Gt=c):In(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Vo(4,d,d.return);break;case 1:As(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){gt(i,n,h)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){hm(f);continue}}m!==null?(m.return=d,xe=m):hm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q0("display",o))}catch(h){gt(t,t.return,h)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(h){gt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Jn(t),i&4&&fm(t);break;case 21:break;default:In(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E1(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=um(t);dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=um(t);fd(t,a,o);break;default:throw Error(se(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){xe=t,T1(t)}function T1(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Ba;var c=Gt;if(Ba=o,(Gt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?pm(r):l!==null?(l.return=o,xe=l):pm(r);for(;s!==null;)xe=s,T1(s),s=s.sibling;xe=r,Ba=a,Gt=c}dm(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,xe=s):dm(t)}}function dm(t){for(;xe!==null;){var e=xe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Gt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Jo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Gt||e.flags&512&&ud(e)}catch(d){gt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function hm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function pm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{ud(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{ud(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var ZS=Math.ceil,Ql=Ti.ReactCurrentDispatcher,yh=Ti.ReactCurrentOwner,Pn=Ti.ReactCurrentBatchConfig,He=0,Dt=null,Mt=null,zt=0,dn=0,Ps=cr(0),Ct=0,ca=null,Fr=0,Ec=0,Sh=0,Go=null,tn=null,wh=0,Js=1/0,pi=null,Jl=!1,hd=null,Qi=null,Ua=!1,$i=null,Kl=0,Ho=0,pd=null,El=-1,bl=0;function Yt(){return(He&6)!==0?yt():El!==-1?El:El=yt()}function Ji(t){return(t.mode&1)===0?1:(He&2)!==0&&zt!==0?zt&-zt:IS.transition!==null?(bl===0&&(bl=uv()),bl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:vv(t.type)),t)}function jn(t,e,n,i){if(50<Ho)throw Ho=0,pd=null,Error(se(185));_a(t,n,i),((He&2)===0||t!==Dt)&&(t===Dt&&((He&2)===0&&(Ec|=n),Ct===4&&Gi(t,zt)),ln(t,i),n===1&&He===0&&(e.mode&1)===0&&(Js=yt()+500,yc&&ur()))}function ln(t,e){var n=t.callbackNode;Iy(t,e);var i=Nl(t,t===Dt?zt:0);if(i===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?RS(mm.bind(null,t)):Nv(mm.bind(null,t)),AS(function(){(He&6)===0&&ur()}),n=null;else{switch(fv(i)){case 1:n=qd;break;case 4:n=lv;break;case 16:n=zl;break;case 536870912:n=cv;break;default:n=zl}n=z1(n,A1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A1(t,e){if(El=-1,bl=0,(He&6)!==0)throw Error(se(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Nl(t,t===Dt?zt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=ec(t,i);else{e=i;var r=He;He|=2;var s=L1();(Dt!==t||zt!==e)&&(pi=null,Js=yt()+500,Pr(t,e));do try{KS();break}catch(a){P1(t,a)}while(1);ah(),Ql.current=s,He=r,Mt!==null?e=0:(Dt=null,zt=0,e=Ct)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=md(t,r))),e===1)throw n=ca,Pr(t,0),Gi(t,i),ln(t,yt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!QS(r)&&(e=ec(t,i),e===2&&(s=Vf(t),s!==0&&(i=s,e=md(t,s))),e===1))throw n=ca,Pr(t,0),Gi(t,i),ln(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,tn,pi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=wh+500-yt(),10<e)){if(Nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yf(gr.bind(null,t,tn,pi),e);break}gr(t,tn,pi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZS(i/1960))-i,10<i){t.timeoutHandle=Yf(gr.bind(null,t,tn,pi),i);break}gr(t,tn,pi);break;case 5:gr(t,tn,pi);break;default:throw Error(se(329))}}}return ln(t,yt()),t.callbackNode===n?A1.bind(null,t):null}function md(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=tn,tn=n,e!==null&&gd(e)),t}function gd(t){tn===null?tn=t:tn.push.apply(tn,t)}function QS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~Sh,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function mm(t){if((He&6)!==0)throw Error(se(327));Bs();var e=Nl(t,0);if((e&1)===0)return ln(t,yt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=md(t,i))}if(n===1)throw n=ca,Pr(t,0),Gi(t,e),ln(t,yt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,tn,pi),ln(t,yt()),null}function Mh(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(Js=yt()+500,yc&&ur())}}function Or(t){$i!==null&&$i.tag===0&&(He&6)===0&&Bs();var e=He;He|=1;var n=Pn.transition,i=Je;try{if(Pn.transition=null,Je=1,t)return t()}finally{Je=i,Pn.transition=n,He=e,(He&6)===0&&ur()}}function Eh(){dn=Ps.current,st(Ps)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,TS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(rh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:Zs(),st(on),st(Ht),hh();break;case 5:dh(i);break;case 4:Zs();break;case 13:st(ct);break;case 19:st(ct);break;case 10:lh(i.type._context);break;case 22:case 23:Eh()}n=n.return}if(Dt=t,Mt=t=Ki(t.current,null),zt=dn=e,Ct=0,ca=null,Sh=Ec=Fr=0,tn=Go=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function P1(t,e){do{var n=Mt;try{if(ah(),Sl.current=Zl,Yl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(Nr=0,Lt=bt=ut=null,Uo=!1,oa=0,yh.current=null,n===null||n.return===null){Ct=1,ca=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=nm(o);if(m!==null){m.flags&=-257,im(m,o,a,s,e),m.mode&1&&tm(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){tm(s,c,e),bh();break e}l=Error(se(426))}}else if(lt&&a.mode&1){var p=nm(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),im(p,o,a,s,e),sh(Qs(l,a));break e}}s=l=Qs(l,a),Ct!==4&&(Ct=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=d1(s,l,e);qp(s,g);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qi===null||!Qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=h1(s,a,e);qp(s,S);break e}}s=s.return}while(s!==null)}R1(n)}catch(w){e=w,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function L1(){var t=Ql.current;return Ql.current=Zl,t===null?Zl:t}function bh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||(Fr&268435455)===0&&(Ec&268435455)===0||Gi(Dt,zt)}function ec(t,e){var n=He;He|=2;var i=L1();(Dt!==t||zt!==e)&&(pi=null,Pr(t,e));do try{JS();break}catch(r){P1(t,r)}while(1);if(ah(),He=n,Ql.current=i,Mt!==null)throw Error(se(261));return Dt=null,zt=0,Ct}function JS(){for(;Mt!==null;)D1(Mt)}function KS(){for(;Mt!==null&&!Ey();)D1(Mt)}function D1(t){var e=k1(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?R1(t):Mt=e,yh.current=null}function R1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=$S(n,e,dn),n!==null){Mt=n;return}}else{if(n=jS(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Mt=null;return}}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Ct===0&&(Ct=5)}function gr(t,e,n){var i=Je,r=Pn.transition;try{Pn.transition=null,Je=1,e2(t,e,n,i)}finally{Pn.transition=r,Je=i}return null}function e2(t,e,n,i){do Bs();while($i!==null);if((He&6)!==0)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ky(t,s),t===Dt&&(Mt=Dt=null,zt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ua||(Ua=!0,z1(zl,function(){return Bs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Pn.transition,Pn.transition=null;var o=Je;Je=1;var a=He;He|=4,yh.current=null,qS(t,n),C1(n,t),yS(Xf),Fl=!!jf,Xf=jf=null,t.current=n,YS(n),by(),He=a,Je=o,Pn.transition=s}else t.current=n;if(Ua&&(Ua=!1,$i=t,Kl=r),s=t.pendingLanes,s===0&&(Qi=null),Ay(n.stateNode),ln(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=hd,hd=null,t;return(Kl&1)!==0&&t.tag!==0&&Bs(),s=t.pendingLanes,(s&1)!==0?t===pd?Ho++:(Ho=0,pd=t):Ho=0,ur(),null}function Bs(){if($i!==null){var t=fv(Kl),e=Pn.transition,n=Je;try{if(Pn.transition=null,Je=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Kl=0,(He&6)!==0)throw Error(se(331));var r=He;for(He|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if((xe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Vo(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,m=u.return;if(M1(u),u===c){xe=null;break}if(d!==null){d.return=m,xe=d;break}xe=m}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}xe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,xe=g;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,xe=x;else e:for(o=v;xe!==null;){if(a=xe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(w){gt(a,a.return,w)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(He=r,ur(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(mc,t)}catch{}i=!0}return i}finally{Je=n,Pn.transition=e}}return!1}function gm(t,e,n){e=Qs(n,e),e=d1(t,e,1),t=Zi(t,e,1),e=Yt(),t!==null&&(_a(t,1,e),ln(t,e))}function gt(t,e,n){if(t.tag===3)gm(t,t,n);else for(;e!==null;){if(e.tag===3){gm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Qs(n,t),t=h1(e,t,1),e=Zi(e,t,1),t=Yt(),e!==null&&(_a(e,1,t),ln(e,t));break}}e=e.return}}function t2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(zt&n)===n&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>yt()-wh?Pr(t,0):Sh|=n),ln(t,e)}function I1(t,e){e===0&&((t.mode&1)===0?e=1:(e=La,La<<=1,(La&130023424)===0&&(La=4194304)));var n=Yt();t=Ei(t,e),t!==null&&(_a(t,e,n),ln(t,n))}function n2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I1(t,n)}function i2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),I1(t,n)}var k1;k1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return rn=!1,WS(t,e,n);rn=(t.flags&131072)!==0}else rn=!1,lt&&(e.flags&1048576)!==0&&Fv(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=Xs(e,Ht.current);Os(e,n),r=mh(null,e,i,t,r,n);var s=gh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,uh(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,nd(e,i,t,n),e=sd(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&ih(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=s2(i),t=On(i,t),r){case 0:e=rd(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=rm(null,e,i,t,n);break e;case 14:e=sm(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),rd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),om(t,e,i,r,n);case 3:e:{if(v1(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Vv(t,e),Xl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(se(423)),e),e=am(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(se(424)),e),e=am(t,e,i,n,r);break e}else for(pn=Yi(e.stateNode.containerInfo.firstChild),mn=e,lt=!0,Un=null,n=$v(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=bi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return jv(e),t===null&&Kf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,qf(i,r)?o=null:s!==null&&qf(i,s)&&(e.flags|=32),g1(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Kf(e),null;case 13:return _1(t,e,n);case 4:return fh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),rm(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it($l,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!on.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ed(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ed(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Ln(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),sm(t,e,i,r,n);case 15:return p1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Ml(t,e),e.tag=1,an(i)?(t=!0,Gl(e)):t=!1,Os(e,n),Hv(e,i,r),nd(e,i,r,n),sd(null,e,i,!0,t,n);case 19:return x1(t,e,n);case 22:return m1(t,e,n)}throw Error(se(156,e.tag))};function z1(t,e){return av(t,e)}function r2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new r2(t,e,n,i)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s2(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===jd)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return Lr(n.children,r,s,e);case Wd:o=8,r|=8;break;case Cf:return t=Tn(12,n,e,r|2),t.elementType=Cf,t.lanes=s,t;case Tf:return t=Tn(13,n,e,r),t.elementType=Tf,t.lanes=s,t;case Af:return t=Tn(19,n,e,r),t.elementType=Af,t.lanes=s,t;case W0:return bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case H0:o=9;break e;case $d:o=11;break e;case jd:o=14;break e;case Bi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function bc(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ru(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function o2(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Th(t,e,n,i,r,s,o,a,l){return t=new o2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(s),t}function a2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function N1(t){if(!t)return rr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return zv(t,n,e)}return e}function F1(t,e,n,i,r,s,o,a,l){return t=Th(n,i,!0,t,r,s,o,a,l),t.context=N1(null),n=t.current,i=Yt(),r=Ji(n),s=yi(i,r),s.callback=e!=null?e:null,Zi(n,s,r),t.current.lanes=r,_a(t,r,i),ln(t,i),t}function Cc(t,e,n,i){var r=e.current,s=Yt(),o=Ji(r);return n=N1(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(jn(t,r,o,s),yl(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ah(t,e){vm(t,e),(t=t.alternate)&&vm(t,e)}function l2(){return null}var O1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ph(t){this._internalRoot=t}Tc.prototype.render=Ph.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Cc(t,e,null,null)};Tc.prototype.unmount=Ph.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Cc(null,t,null,null)}),e[Mi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&gv(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _m(){}function c2(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=F1(e,i,t,0,null,!1,!1,"",_m);return t._reactRootContainer=o,t[Mi]=o.current,ta(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=Th(t,0,!1,null,null,!1,!1,"",_m);return t._reactRootContainer=l,t[Mi]=l.current,ta(t.nodeType===8?t.parentNode:t),Or(function(){Cc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}Cc(e,o,t,r)}else o=c2(n,e,t,r,i);return tc(o)}dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(Yd(e,n|1),ln(e,yt()),(He&6)===0&&(Js=yt()+500,ur()))}break;case 13:Or(function(){var i=Ei(t,1);if(i!==null){var r=Yt();jn(i,t,1,r)}}),Ah(t,1)}};Zd=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Yt();jn(e,t,134217728,n)}Ah(t,134217728)}};hv=function(t){if(t.tag===13){var e=Ji(t),n=Ei(t,e);if(n!==null){var i=Yt();jn(n,t,e,i)}Ah(t,e)}};pv=function(){return Je};mv=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Of=function(t,e,n){switch(e){case"input":if(Df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xc(i);if(!r)throw Error(se(90));j0(i),Df(i,r)}}}break;case"textarea":q0(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};tv=Mh;nv=Or;var u2={usingClientEntryPoint:!1,Events:[ya,Ms,xc,K0,ev,Mh]},Mo={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f2={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sv(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||l2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{mc=Va.inject(f2),ri=Va}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u2;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(se(200));return a2(t,e,null,n)};_n.createRoot=function(t,e){if(!Lh(t))throw Error(se(299));var n=!1,i="",r=O1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Th(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,ta(t.nodeType===8?t.parentNode:t),new Ph(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=sv(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Or(t)};_n.hydrate=function(t,e,n){if(!Ac(e))throw Error(se(200));return Pc(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=O1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F1(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Mi]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tc(e)};_n.render=function(t,e,n){if(!Ac(e))throw Error(se(200));return Pc(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(se(40));return t._reactRootContainer?(Or(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};_n.unstable_batchedUpdates=Mh;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ac(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Pc(t,e,n,!1,i)};_n.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=_n})(Ud);function d2(t){t()}let B1=d2;const h2=t=>B1=t,p2=()=>B1,sr=Wn.createContext(null);function U1(){return pe.exports.useContext(sr)}const m2=()=>{throw new Error("uSES not initialized!")};let V1=m2;const g2=t=>{V1=t},v2=(t,e)=>t===e;function _2(t=sr){const e=t===sr?U1:()=>pe.exports.useContext(t);return function(i,r=v2){const{store:s,subscription:o,getServerState:a}=e(),l=V1(o.addNestedSub,s.getState,a||s.getState,i,r);return pe.exports.useDebugValue(l),l}}const x2=_2();function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nc.apply(this,arguments)}function y2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var G1={exports:{}},Ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt=typeof Symbol=="function"&&Symbol.for,Dh=Rt?Symbol.for("react.element"):60103,Rh=Rt?Symbol.for("react.portal"):60106,Lc=Rt?Symbol.for("react.fragment"):60107,Dc=Rt?Symbol.for("react.strict_mode"):60108,Rc=Rt?Symbol.for("react.profiler"):60114,Ic=Rt?Symbol.for("react.provider"):60109,kc=Rt?Symbol.for("react.context"):60110,Ih=Rt?Symbol.for("react.async_mode"):60111,zc=Rt?Symbol.for("react.concurrent_mode"):60111,Nc=Rt?Symbol.for("react.forward_ref"):60112,Fc=Rt?Symbol.for("react.suspense"):60113,S2=Rt?Symbol.for("react.suspense_list"):60120,Oc=Rt?Symbol.for("react.memo"):60115,Bc=Rt?Symbol.for("react.lazy"):60116,w2=Rt?Symbol.for("react.block"):60121,M2=Rt?Symbol.for("react.fundamental"):60117,E2=Rt?Symbol.for("react.responder"):60118,b2=Rt?Symbol.for("react.scope"):60119;function yn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Dh:switch(t=t.type,t){case Ih:case zc:case Lc:case Rc:case Dc:case Fc:return t;default:switch(t=t&&t.$$typeof,t){case kc:case Nc:case Bc:case Oc:case Ic:return t;default:return e}}case Rh:return e}}}function H1(t){return yn(t)===zc}Ke.AsyncMode=Ih;Ke.ConcurrentMode=zc;Ke.ContextConsumer=kc;Ke.ContextProvider=Ic;Ke.Element=Dh;Ke.ForwardRef=Nc;Ke.Fragment=Lc;Ke.Lazy=Bc;Ke.Memo=Oc;Ke.Portal=Rh;Ke.Profiler=Rc;Ke.StrictMode=Dc;Ke.Suspense=Fc;Ke.isAsyncMode=function(t){return H1(t)||yn(t)===Ih};Ke.isConcurrentMode=H1;Ke.isContextConsumer=function(t){return yn(t)===kc};Ke.isContextProvider=function(t){return yn(t)===Ic};Ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dh};Ke.isForwardRef=function(t){return yn(t)===Nc};Ke.isFragment=function(t){return yn(t)===Lc};Ke.isLazy=function(t){return yn(t)===Bc};Ke.isMemo=function(t){return yn(t)===Oc};Ke.isPortal=function(t){return yn(t)===Rh};Ke.isProfiler=function(t){return yn(t)===Rc};Ke.isStrictMode=function(t){return yn(t)===Dc};Ke.isSuspense=function(t){return yn(t)===Fc};Ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Lc||t===zc||t===Rc||t===Dc||t===Fc||t===S2||typeof t=="object"&&t!==null&&(t.$$typeof===Bc||t.$$typeof===Oc||t.$$typeof===Ic||t.$$typeof===kc||t.$$typeof===Nc||t.$$typeof===M2||t.$$typeof===E2||t.$$typeof===b2||t.$$typeof===w2)};Ke.typeOf=yn;(function(t){t.exports=Ke})(G1);var kh=G1.exports,C2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zh={};zh[kh.ForwardRef]=A2;zh[kh.Memo]=W1;function xm(t){return kh.isMemo(t)?W1:zh[t.$$typeof]||C2}var P2=Object.defineProperty,L2=Object.getOwnPropertyNames,ym=Object.getOwnPropertySymbols,D2=Object.getOwnPropertyDescriptor,R2=Object.getPrototypeOf,Sm=Object.prototype;function $1(t,e,n){if(typeof e!="string"){if(Sm){var i=R2(e);i&&i!==Sm&&$1(t,i,n)}var r=L2(e);ym&&(r=r.concat(ym(e)));for(var s=xm(t),o=xm(e),a=0;a<r.length;++a){var l=r[a];if(!T2[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=D2(e,l);try{P2(t,l,c)}catch{}}}}return t}var I2=$1,Nh={exports:{}},et={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh=Symbol.for("react.element"),Oh=Symbol.for("react.portal"),Uc=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),Hc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),k2=Symbol.for("react.server_context"),$c=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Yc=Symbol.for("react.lazy"),z2=Symbol.for("react.offscreen"),j1;j1=Symbol.for("react.module.reference");function Rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Fh:switch(t=t.type,t){case Uc:case Gc:case Vc:case jc:case Xc:return t;default:switch(t=t&&t.$$typeof,t){case k2:case Wc:case $c:case Yc:case qc:case Hc:return t;default:return e}}case Oh:return e}}}et.ContextConsumer=Wc;et.ContextProvider=Hc;et.Element=Fh;et.ForwardRef=$c;et.Fragment=Uc;et.Lazy=Yc;et.Memo=qc;et.Portal=Oh;et.Profiler=Gc;et.StrictMode=Vc;et.Suspense=jc;et.SuspenseList=Xc;et.isAsyncMode=function(){return!1};et.isConcurrentMode=function(){return!1};et.isContextConsumer=function(t){return Rn(t)===Wc};et.isContextProvider=function(t){return Rn(t)===Hc};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fh};et.isForwardRef=function(t){return Rn(t)===$c};et.isFragment=function(t){return Rn(t)===Uc};et.isLazy=function(t){return Rn(t)===Yc};et.isMemo=function(t){return Rn(t)===qc};et.isPortal=function(t){return Rn(t)===Oh};et.isProfiler=function(t){return Rn(t)===Gc};et.isStrictMode=function(t){return Rn(t)===Vc};et.isSuspense=function(t){return Rn(t)===jc};et.isSuspenseList=function(t){return Rn(t)===Xc};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Uc||t===Gc||t===Vc||t===jc||t===Xc||t===z2||typeof t=="object"&&t!==null&&(t.$$typeof===Yc||t.$$typeof===qc||t.$$typeof===Hc||t.$$typeof===Wc||t.$$typeof===$c||t.$$typeof===j1||t.getModuleId!==void 0)};et.typeOf=Rn;(function(t){t.exports=et})(Nh);function N2(){const t=p2();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!r||e===null||(r=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const wm={notify(){},get:()=>[]};function F2(t,e){let n,i=wm;function r(f){return l(),i.subscribe(f)}function s(){i.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),i=N2())}function c(){n&&(n(),n=void 0,i.clear(),i=wm)}const u={addNestedSub:r,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>i};return u}const O2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B2=O2?pe.exports.useLayoutEffect:pe.exports.useEffect;var Zc={exports:{}},Qc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U2=pe.exports,V2=Symbol.for("react.element"),G2=Symbol.for("react.fragment"),H2=Object.prototype.hasOwnProperty,W2=U2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$2={key:!0,ref:!0,__self:!0,__source:!0};function X1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H2.call(e,i)&&!$2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V2,type:t,key:s,ref:o,props:r,_owner:W2.current}}Qc.Fragment=G2;Qc.jsx=X1;Qc.jsxs=X1;(function(t){t.exports=Qc})(Zc);const We=Zc.exports.Fragment,L=Zc.exports.jsx,Ae=Zc.exports.jsxs;function j2({store:t,context:e,children:n,serverState:i}){const r=pe.exports.useMemo(()=>{const a=F2(t);return{store:t,subscription:a,getServerState:i?()=>i:void 0}},[t,i]),s=pe.exports.useMemo(()=>t.getState(),[t]);return B2(()=>{const{subscription:a}=r;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[r,s]),L((e||sr).Provider,{value:r,children:n})}function q1(t=sr){const e=t===sr?U1:()=>pe.exports.useContext(t);return function(){const{store:i}=e();return i}}const X2=q1();function q2(t=sr){const e=t===sr?X2:q1(t);return function(){return e().dispatch}}const Y2=q2();g2(N0.exports.useSyncExternalStoreWithSelector);h2(Ud.exports.unstable_batchedUpdates);var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));var Mm=function(t){return t},Em="beforeunload",Z2="hashchange",Q2="popstate";function J2(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var y=Br(i.location.hash.substr(1)),T=y.pathname,R=T===void 0?"/":T,F=y.search,re=F===void 0?"":F,ee=y.hash,U=ee===void 0?"":ee,X=r.state||{};return[X.idx,Mm({pathname:R,search:re,hash:U,state:X.usr||null,key:X.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var y=br.Pop,T=s(),R=T[0],F=T[1];if(m.length){if(R!=null){var re=u-R;re&&(o={action:y,location:F,retry:function(){C(re*-1)}},C(re))}}else x(y)}}i.addEventListener(Q2,a),i.addEventListener(Z2,function(){var y=s(),T=y[1];ku(T)!==ku(f)&&a()});var l=br.Pop,c=s(),u=c[0],f=c[1],d=Cm(),m=Cm();u==null&&(u=0,r.replaceState(nc({},r.state,{idx:u}),""));function _(){var y=document.querySelector("base"),T="";if(y&&y.getAttribute("href")){var R=i.location.href,F=R.indexOf("#");T=F===-1?R:R.slice(0,F)}return T}function h(y){return _()+"#"+(typeof y=="string"?y:ku(y))}function p(y,T){return T===void 0&&(T=null),Mm(nc({pathname:f.pathname,hash:"",search:""},typeof y=="string"?Br(y):y,{state:T,key:K2()}))}function g(y,T){return[{usr:y.state,key:y.key,idx:T},h(y)]}function v(y,T,R){return!m.length||(m.call({action:y,location:T,retry:R}),!1)}function x(y){l=y;var T=s();u=T[0],f=T[1],d.call({action:l,location:f})}function S(y,T){var R=br.Push,F=p(y,T);function re(){S(y,T)}if(v(R,F,re)){var ee=g(F,u+1),U=ee[0],X=ee[1];try{r.pushState(U,"",X)}catch{i.location.assign(X)}x(R)}}function w(y,T){var R=br.Replace,F=p(y,T);function re(){w(y,T)}if(v(R,F,re)){var ee=g(F,u),U=ee[0],X=ee[1];r.replaceState(U,"",X),x(R)}}function C(y){r.go(y)}var D={get action(){return l},get location(){return f},createHref:h,push:S,replace:w,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(T){return d.push(T)},block:function(T){var R=m.push(T);return m.length===1&&i.addEventListener(Em,bm),function(){R(),m.length||i.removeEventListener(Em,bm)}}};return D}function bm(t){t.preventDefault(),t.returnValue=""}function Cm(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function K2(){return Math.random().toString(36).substr(2,8)}function ku(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Br(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Y1=pe.exports.createContext(null),Bh=pe.exports.createContext(null),Uh=pe.exports.createContext({outlet:null,matches:[]});function Ur(t,e){if(!t)throw new Error(e)}function ew(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Br(e):e,r=Q1(i.pathname||"/",n);if(r==null)return null;let s=Z1(t);tw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=uw(s[a],r);return o}function Z1(t,e,n,i){return e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i=""),t.forEach((r,s)=>{let o={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(i)||Ur(!1),o.relativePath=o.relativePath.slice(i.length));let a=Dr([i,o.relativePath]),l=n.concat(o);r.children&&r.children.length>0&&(r.index===!0&&Ur(!1),Z1(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:lw(a,r.index),routesMeta:l})}),e}function tw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nw=/^:\w+$/,iw=3,rw=2,sw=1,ow=10,aw=-2,Tm=t=>t==="*";function lw(t,e){let n=t.split("/"),i=n.length;return n.some(Tm)&&(i+=aw),e&&(i+=rw),n.filter(r=>!Tm(r)).reduce((r,s)=>r+(nw.test(s)?iw:s===""?sw:ow),i)}function cw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function uw(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=fw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=a.route;s.push({params:i,pathname:Dr([r,u.pathname]),pathnameBase:J1(Dr([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=Dr([r,u.pathnameBase]))}return s}function fw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{if(u==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[u]=hw(a[f]||""),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(i.push(a),"([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,e?void 0:"i"),i]}function hw(t,e){try{return decodeURIComponent(t)}catch{return t}}function pw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Br(t):t;return{pathname:n?n.startsWith("/")?n:mw(n,e):e,search:vw(i),hash:_w(r)}}function mw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function gw(t,e,n){let i=typeof t=="string"?Br(t):t,r=t===""||i.pathname===""?"/":i.pathname,s;if(r==null)s=n;else{let a=e.length-1;if(r.startsWith("..")){let l=r.split("/");for(;l[0]==="..";)l.shift(),a-=1;i.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=pw(i,s);return r&&r!=="/"&&r.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Q1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Dr=t=>t.join("/").replace(/\/\/+/g,"/"),J1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_w=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Jc(){return pe.exports.useContext(Bh)!=null}function K1(){return Jc()||Ur(!1),pe.exports.useContext(Bh).location}function Vh(){Jc()||Ur(!1);let{basename:t,navigator:e}=pe.exports.useContext(Y1),{matches:n}=pe.exports.useContext(Uh),{pathname:i}=K1(),r=JSON.stringify(n.map(a=>a.pathnameBase)),s=pe.exports.useRef(!1);return pe.exports.useEffect(()=>{s.current=!0}),pe.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=gw(a,JSON.parse(r),i);t!=="/"&&(c.pathname=Dr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state)},[t,e,r,i])}function xw(t,e){Jc()||Ur(!1);let{matches:n}=pe.exports.useContext(Uh),i=n[n.length-1],r=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=K1(),a;if(e){var l;let d=typeof e=="string"?Br(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Ur(!1),a=d}else a=o;let c=a.pathname||"/",u=s==="/"?c:c.slice(s.length)||"/",f=ew(t,{pathname:u});return yw(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},r,d.params),pathname:Dr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Dr([s,d.pathnameBase])})),n)}function yw(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,i,r)=>pe.exports.createElement(Uh.Provider,{children:i.route.element!==void 0?i.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,r+1))}}),null)}function Sw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=br.Pop,navigator:s,static:o=!1}=t;Jc()&&Ur(!1);let a=J1(e),l=pe.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Br(i));let{pathname:c="/",search:u="",hash:f="",state:d=null,key:m="default"}=i,_=pe.exports.useMemo(()=>{let h=Q1(c,a);return h==null?null:{pathname:h,search:u,hash:f,state:d,key:m}},[a,c,u,f,d,m]);return _==null?null:pe.exports.createElement(Y1.Provider,{value:l},pe.exports.createElement(Bh.Provider,{children:n,value:{location:_,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ww(t){let{basename:e,children:n,window:i}=t,r=pe.exports.useRef();r.current==null&&(r.current=J2({window:i}));let s=r.current,[o,a]=pe.exports.useState({action:s.action,location:s.location});return pe.exports.useLayoutEffect(()=>s.listen(a),[s]),pe.exports.createElement(Sw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Mw=()=>L("div",{children:"Course"}),Ew=()=>L("div",{children:"Document"}),ap=class{constructor(){E(this,"type");E(this,"nativeEvent");E(this,"target");E(this,"currentTarget");E(this,"_stoped");E(this,"touchId");E(this,"keyCode");E(this,"delta")}setTo(e,n,i){return this.type=e,this.currentTarget=n,this.target=i,this}stopPropagation(){this._stoped=!0}get altKey(){return this.nativeEvent.altKey}get ctrlKey(){return this.nativeEvent.ctrlKey}get shiftKey(){return this.nativeEvent.shiftKey}get charCode(){return this.nativeEvent.charCode}get keyLocation(){return this.nativeEvent.location||this.nativeEvent.keyLocation}};let ge=ap;E(ge,"EMPTY",new ap),E(ge,"MOUSE_DOWN","mousedown"),E(ge,"MOUSE_UP","mouseup"),E(ge,"CLICK","click"),E(ge,"RIGHT_MOUSE_DOWN","rightmousedown"),E(ge,"RIGHT_MOUSE_UP","rightmouseup"),E(ge,"RIGHT_CLICK","rightclick"),E(ge,"MOUSE_MOVE","mousemove"),E(ge,"MOUSE_OVER","mouseover"),E(ge,"MOUSE_OUT","mouseout"),E(ge,"MOUSE_WHEEL","mousewheel"),E(ge,"ROLL_OVER","mouseover"),E(ge,"ROLL_OUT","mouseout"),E(ge,"DOUBLE_CLICK","doubleclick"),E(ge,"CHANGE","change"),E(ge,"CHANGED","changed"),E(ge,"RESIZE","resize"),E(ge,"ADDED","added"),E(ge,"REMOVED","removed"),E(ge,"DISPLAY","display"),E(ge,"UNDISPLAY","undisplay"),E(ge,"ERROR","error"),E(ge,"COMPLETE","complete"),E(ge,"LOADED","loaded"),E(ge,"READY","ready"),E(ge,"PROGRESS","progress"),E(ge,"INPUT","input"),E(ge,"RENDER","render"),E(ge,"OPEN","open"),E(ge,"MESSAGE","message"),E(ge,"CLOSE","close"),E(ge,"KEY_DOWN","keydown"),E(ge,"KEY_PRESS","keypress"),E(ge,"KEY_UP","keyup"),E(ge,"FRAME","enterframe"),E(ge,"DRAG_START","dragstart"),E(ge,"DRAG_MOVE","dragmove"),E(ge,"DRAG_END","dragend"),E(ge,"ENTER","enter"),E(ge,"SELECT","select"),E(ge,"BLUR","blur"),E(ge,"FOCUS","focus"),E(ge,"VISIBILITY_CHANGE","visibilitychange"),E(ge,"FOCUS_CHANGE","focuschange"),E(ge,"PLAYED","played"),E(ge,"PAUSED","paused"),E(ge,"STOPPED","stopped"),E(ge,"START","start"),E(ge,"END","end"),E(ge,"COMPONENT_ADDED","componentadded"),E(ge,"COMPONENT_REMOVED","componentremoved"),E(ge,"RELEASED","released"),E(ge,"LINK","link"),E(ge,"LABEL","label"),E(ge,"FULL_SCREEN_CHANGE","fullscreenchange"),E(ge,"DEVICE_LOST","devicelost"),E(ge,"TRANSFORM_CHANGED","transformchanged"),E(ge,"ANIMATION_CHANGED","animationchanged"),E(ge,"TRAIL_FILTER_CHANGE","trailfilterchange"),E(ge,"TRIGGER_ENTER","triggerenter"),E(ge,"TRIGGER_STAY","triggerstay"),E(ge,"TRIGGER_EXIT","triggerexit");class ie{}E(ie,"NUMBER_0",48),E(ie,"NUMBER_1",49),E(ie,"NUMBER_2",50),E(ie,"NUMBER_3",51),E(ie,"NUMBER_4",52),E(ie,"NUMBER_5",53),E(ie,"NUMBER_6",54),E(ie,"NUMBER_7",55),E(ie,"NUMBER_8",56),E(ie,"NUMBER_9",57),E(ie,"A",65),E(ie,"B",66),E(ie,"C",67),E(ie,"D",68),E(ie,"E",69),E(ie,"F",70),E(ie,"G",71),E(ie,"H",72),E(ie,"I",73),E(ie,"J",74),E(ie,"K",75),E(ie,"L",76),E(ie,"M",77),E(ie,"N",78),E(ie,"O",79),E(ie,"P",80),E(ie,"Q",81),E(ie,"R",82),E(ie,"S",83),E(ie,"T",84),E(ie,"U",85),E(ie,"V",86),E(ie,"W",87),E(ie,"X",88),E(ie,"Y",89),E(ie,"Z",90),E(ie,"F1",112),E(ie,"F2",113),E(ie,"F3",114),E(ie,"F4",115),E(ie,"F5",116),E(ie,"F6",117),E(ie,"F7",118),E(ie,"F8",119),E(ie,"F9",120),E(ie,"F10",121),E(ie,"F11",122),E(ie,"F12",123),E(ie,"F13",124),E(ie,"F14",125),E(ie,"F15",126),E(ie,"NUMPAD",21),E(ie,"NUMPAD_0",96),E(ie,"NUMPAD_1",97),E(ie,"NUMPAD_2",98),E(ie,"NUMPAD_3",99),E(ie,"NUMPAD_4",100),E(ie,"NUMPAD_5",101),E(ie,"NUMPAD_6",102),E(ie,"NUMPAD_7",103),E(ie,"NUMPAD_8",104),E(ie,"NUMPAD_9",105),E(ie,"NUMPAD_ADD",107),E(ie,"NUMPAD_DECIMAL",110),E(ie,"NUMPAD_DIVIDE",111),E(ie,"NUMPAD_ENTER",108),E(ie,"NUMPAD_MULTIPLY",106),E(ie,"NUMPAD_SUBTRACT",109),E(ie,"SEMICOLON",186),E(ie,"EQUAL",187),E(ie,"COMMA",188),E(ie,"MINUS",189),E(ie,"PERIOD",190),E(ie,"SLASH",191),E(ie,"BACKQUOTE",192),E(ie,"LEFTBRACKET",219),E(ie,"BACKSLASH",220),E(ie,"RIGHTBRACKET",221),E(ie,"QUOTE",222),E(ie,"ALTERNATE",18),E(ie,"BACKSPACE",8),E(ie,"CAPS_LOCK",20),E(ie,"COMMAND",15),E(ie,"CONTROL",17),E(ie,"DELETE",46),E(ie,"ENTER",13),E(ie,"ESCAPE",27),E(ie,"PAGE_UP",33),E(ie,"PAGE_DOWN",34),E(ie,"END",35),E(ie,"HOME",36),E(ie,"LEFT",37),E(ie,"UP",38),E(ie,"RIGHT",39),E(ie,"DOWN",40),E(ie,"SHIFT",16),E(ie,"SPACE",32),E(ie,"TAB",9),E(ie,"INSERT",45);class bw{startUp(){console.log("test module start up."),this.addEvent()}exit(){console.log("test module exit."),this.dispose(),this.removeEvent()}dispose(){}addEvent(){nt.ED.on(ge.KEY_DOWN,this,this.onkeydown)}removeEvent(){nt.ED.off(ge.KEY_DOWN,this,this.onkeydown)}onkeydown(e){switch(e.keyCode){case ie.ESCAPE:console.log("press escape key");break}}}var sn=(t=>(t.CAD_SERVICE="service.cad",t.SCHEME_SERVICE="service.scheme",t.SCENE_SERVICE="service.scene",t.MESH_SERVICE="service.mesh",t))(sn||{}),mt=(t=>(t[t.NONE=-1]="NONE",t[t.ROTATE=0]="ROTATE",t[t.ZOOM=1]="ZOOM",t[t.PAN=2]="PAN",t[t.TOUCH_ROTATE=3]="TOUCH_ROTATE",t[t.TOUCH_ZOOM_PAN=4]="TOUCH_ZOOM_PAN",t))(mt||{}),ic=(t=>(t.LEFT_MENU_ITEM_CLICK="left-menu-item-click",t))(ic||{});class Cw{startUp(){console.log("event mgr start up"),this.addEvent()}dispose(){this.removeEvent()}addEvent(){nt.ED.on(ic.LEFT_MENU_ITEM_CLICK,this,this.leftMenuClick)}removeEvent(){nt.ED.off(ic.LEFT_MENU_ITEM_CLICK,this,this.leftMenuClick)}leftMenuClick(e){console.log("left menu click :",e)}}class Tw{startUp(){console.log("mesh mgr start up")}dispose(){}}class Aw{startUp(){console.log("render mgr start up")}dispose(){}render(){const e=nt.MGR.scene;e.main.render&&e.main.render.render(e.main.scene,e.main.camera),e.main.css2dRender&&e.main.css2dRender.render(e.main.scene,e.main.camera),e.example.render&&e.example.render.render(e.example.scene,e.example.camera),e.update()}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="143",zu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pw=0,Am=1,Lw=2,e_=1,Dw=2,Do=3,ua=0,Xn=1,or=2,Rw=1,er=0,Us=1,Pm=2,Lm=3,Dm=4,Iw=5,gs=100,kw=101,zw=102,Rm=103,Im=104,Nw=200,Fw=201,Ow=202,Bw=203,t_=204,n_=205,Uw=206,Vw=207,Gw=208,Hw=209,Ww=210,$w=0,jw=1,Xw=2,vd=3,qw=4,Yw=5,Zw=6,Qw=7,Hh=0,Jw=1,Kw=2,Si=0,eM=1,tM=2,nM=3,iM=4,rM=5,i_=300,Ks=301,eo=302,_d=303,xd=304,Kc=306,yd=1e3,Vn=1001,Sd=1002,nn=1003,km=1004,zm=1005,Cn=1006,sM=1007,eu=1008,Vr=1009,oM=1010,aM=1011,r_=1012,lM=1013,Cr=1014,Tr=1015,fa=1016,cM=1017,uM=1018,Vs=1020,fM=1021,dM=1022,ni=1023,hM=1024,pM=1025,Rr=1026,to=1027,mM=1028,gM=1029,vM=1030,_M=1031,xM=1033,Nu=33776,Fu=33777,Ou=33778,Bu=33779,Nm=35840,Fm=35841,Om=35842,Bm=35843,yM=36196,Um=37492,Vm=37496,Gm=37808,Hm=37809,Wm=37810,$m=37811,jm=37812,Xm=37813,qm=37814,Ym=37815,Zm=37816,Qm=37817,Jm=37818,Km=37819,eg=37820,tg=37821,ng=36492,Gr=3e3,ot=3001,SM=3200,wM=3201,s_=0,MM=1,mi="srgb",Ar="srgb-linear",Uu=7680,EM=519,ig=35044,rg="300 es",wd=1035;class lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,sg=180/Math.PI;function wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function bM(t,e){return(t%e+e)%e}function Gu(t,e,n){return(1-n)*t+n*e}function og(t){return(t&t-1)===0&&t!==0}function Md(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Ie{constructor(e=0,n=0){Ie.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(){An.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],p=r[3],g=r[6],v=r[1],x=r[4],S=r[7],w=r[2],C=r[5],D=r[8];return s[0]=o*h+a*v+l*w,s[3]=o*p+a*x+l*C,s[6]=o*g+a*S+l*D,s[1]=c*h+u*v+f*w,s[4]=c*p+u*x+f*C,s[7]=c*g+u*S+f*D,s[2]=d*h+m*v+_*w,s[5]=d*p+m*x+_*C,s[8]=d*g+m*S+_*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*c-u*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(u*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=m*h,e[7]=(i*l-c*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*c,r[6]=n*a+i*u,r[1]=-i*s+n*l,r[4]=-i*o+n*c,r[7]=-i*a+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function o_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function rc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Hu={[mi]:{[Ar]:Ir},[Ar]:{[mi]:Tl}},kn={legacyMode:!0,get workingColorSpace(){return Ar},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Hu[e]&&Hu[e][n]!==void 0){const i=Hu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={r:0,g:0,b:0},zn={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ha(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ar){return this.r=e,this.g=n,this.b=i,kn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ar){if(e=bM(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return kn.toWorkingColorSpace(this,r),this}setStyle(e,n=mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=mi){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return kn.fromWorkingColorSpace(Ha(this,Et),e),hn(Et.r*255,0,255)<<16^hn(Et.g*255,0,255)<<8^hn(Et.b*255,0,255)<<0}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ar){kn.fromWorkingColorSpace(Ha(this,Et),n);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ar){return kn.fromWorkingColorSpace(Ha(this,Et),n),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=mi){return kn.fromWorkingColorSpace(Ha(this,Et),e),e!==mi?`color(${e} ${Et.r} ${Et.g} ${Et.b})`:`rgb(${Et.r*255|0},${Et.g*255|0},${Et.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(Ga);const i=Gu(zn.h,Ga.h,n),r=Gu(zn.s,Ga.s,n),s=Gu(zn.l,Ga.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=a_;let ts;class l_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=rc("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=rc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class c_{constructor(e=null){this.isSource=!0,this.uuid=wa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?l_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CM=0;class Zn extends lo{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=eu,a=ni,l=Vr,c=1,u=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=wa(),this.name="",this.source=new c_(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new An,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=i_;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,w=(g+1)/2,C=(u+d)/4,D=(f+h)/4,y=(_+p)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=D/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-h)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hr extends lo{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Zn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new c_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class u_ extends Zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TM extends Zn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=h;return}if(f!==h||l!==d||c!==m||u!==_){let p=1-a;const g=l*d+c*m+u*_+f*h,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,g*v);p=Math.sin(p*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*p+d*S,c=c*p+m*S,u=u*p+_*S,f=f*p+h*S,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*m-c*d,e[n+1]=l*_+u*d+c*f-a*m,e[n+2]=c*_+u*m+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ag.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new k,ag=new co;class Ma{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)dr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(dr)}else i.boundingBox===null&&i.computeBoundingBox(),Xu.copy(i.boundingBox),Xu.applyMatrix4(e.matrixWorld),this.union(Xu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Wa.subVectors(this.max,Eo),ns.subVectors(e.a,Eo),is.subVectors(e.b,Eo),rs.subVectors(e.c,Eo),Ri.subVectors(is,ns),Ii.subVectors(rs,is),hr.subVectors(ns,rs);let n=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!qu(n,ns,is,rs,Wa)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,ns,is,rs,Wa))?!1:($a.crossVectors(Ri,Ii),n=[$a.x,$a.y,$a.z],qu(n,ns,is,rs,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new k,new k,new k,new k,new k,new k,new k,new k],dr=new k,Xu=new Ma,ns=new k,is=new k,rs=new k,Ri=new k,Ii=new k,hr=new k,Eo=new k,Wa=new k,$a=new k,pr=new k;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),u=i.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AM=new Ma,lg=new k,ja=new k,Yu=new k;class tu{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Yu.subVectors(e,this.center);const n=Yu.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Yu.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?ja.set(0,0,1).multiplyScalar(e.radius):ja.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(lg.copy(e.center).add(ja)),this.expandByPoint(lg.copy(e.center).sub(ja)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new k,Zu=new k,Xa=new k,ki=new k,Qu=new k,qa=new k,Ju=new k;class f_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.direction).multiplyScalar(n).add(this.origin),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Xa.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xa),a=ki.dot(this.direction),l=-ki.dot(Xa),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,d,m,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Xa).multiplyScalar(d).add(Zu),m}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),qa.subVectors(i,e),Ju.crossVectors(Qu,qa);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(ki,qa));if(l<0)return null;const c=a*this.direction.dot(Qu.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(Ju);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,f,d,m,_,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,_=a*u,h=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=d-h*c,n[9]=-a*l,n[2]=h-d*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,h=c*f;n[0]=d+h*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=h+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,h=c*f;n[0]=d-h*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=h-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,_=a*u,h=a*f;n[0]=l*u,n[4]=_*c-m,n[8]=d*c+h,n[1]=l*f,n[5]=h*c+d,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=a*l,h=a*c;n[0]=l*u,n[4]=h-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+_,n[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,_=a*l,h=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+h,n[5]=o*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*u,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),zi.crossVectors(i,un),zi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),zi.crossVectors(i,un)),zi.normalize(),Ya.crossVectors(un,zi),r[0]=zi.x,r[4]=Ya.x,r[8]=un.x,r[1]=zi.y,r[5]=Ya.y,r[9]=un.y,r[2]=zi.z,r[6]=Ya.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],p=i[10],g=i[14],v=i[3],x=i[7],S=i[11],w=i[15],C=r[0],D=r[4],y=r[8],T=r[12],R=r[1],F=r[5],re=r[9],ee=r[13],U=r[2],X=r[6],$=r[10],J=r[14],I=r[3],z=r[7],V=r[11],K=r[15];return s[0]=o*C+a*R+l*U+c*I,s[4]=o*D+a*F+l*X+c*z,s[8]=o*y+a*re+l*$+c*V,s[12]=o*T+a*ee+l*J+c*K,s[1]=u*C+f*R+d*U+m*I,s[5]=u*D+f*F+d*X+m*z,s[9]=u*y+f*re+d*$+m*V,s[13]=u*T+f*ee+d*J+m*K,s[2]=_*C+h*R+p*U+g*I,s[6]=_*D+h*F+p*X+g*z,s[10]=_*y+h*re+p*$+g*V,s[14]=_*T+h*ee+p*J+g*K,s[3]=v*C+x*R+S*U+w*I,s[7]=v*D+x*F+S*X+w*z,s[11]=v*y+x*re+S*$+w*V,s[15]=v*T+x*ee+S*J+w*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],p=e[11],g=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+h*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+g*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],p=e[14],g=e[15],v=f*p*c-h*d*c+h*l*m-a*p*m-f*l*g+a*d*g,x=_*d*c-u*p*c-_*l*m+o*p*m+u*l*g-o*d*g,S=u*h*c-_*f*c+_*a*m-o*h*m-u*a*g+o*f*g,w=_*f*l-u*h*l-_*a*d+o*h*d+u*a*p-o*f*p,C=n*v+i*x+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=v*D,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*g-i*d*g)*D,e[2]=(a*p*s-h*l*s+h*r*c-i*p*c-a*r*g+i*l*g)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*D,e[4]=x*D,e[5]=(u*p*s-_*d*s+_*r*m-n*p*m-u*r*g+n*d*g)*D,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*g-n*l*g)*D,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*D,e[8]=S*D,e[9]=(_*f*s-u*h*s-_*i*m+n*h*m+u*i*g-n*f*g)*D,e[10]=(o*h*s-_*a*s+_*i*c-n*h*c-o*i*g+n*a*g)*D,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*D,e[12]=w*D,e[13]=(u*h*r-_*f*r+_*i*d-n*h*d-u*i*p+n*f*p)*D,e[14]=(_*a*r-o*h*r-_*i*l+n*h*l+o*i*p-n*a*p)*D,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,_=s*f,h=o*u,p=o*f,g=a*f,v=l*c,x=l*u,S=l*f,w=i.x,C=i.y,D=i.z;return r[0]=(1-(h+g))*w,r[1]=(m+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*D,r[9]=(p-v)*D,r[10]=(1-(d+h))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,u=1/o,f=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),f=(n+e)*l,d=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new k,Nn=new vt,PM=new k(0,0,0),LM=new k(1,1,1),zi=new k,Ya=new k,un=new k,cg=new vt,ug=new co;class Ea{constructor(e=0,n=0,i=0,r=Ea.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ug.setFromEuler(this),this.setFromQuaternion(ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ea.DefaultOrder="XYZ";Ea.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class d_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const fg=new k,os=new co,fi=new vt,Za=new k,bo=new k,RM=new k,IM=new co,dg=new k(1,0,0),hg=new k(0,1,0),pg=new k(0,0,1),kM={type:"added"},mg={type:"removed"};class Wt extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DefaultUp.clone();const e=new k,n=new Ea,i=new co,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new An}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new d_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(dg,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(pg,e)}translateOnAxis(e,n){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dg,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(pg,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(bo,Za,this.up):fi.lookAt(Za,bo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(fi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(mg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,RM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DefaultUp=new k(0,1,0);Wt.DefaultMatrixAutoUpdate=!0;const Fn=new k,di=new k,Ku=new k,hi=new k,as=new k,ls=new k,gg=new k,ef=new k,tf=new k,nf=new k;class vi{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),di.subVectors(i,n),Ku.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(di),l=Fn.dot(Ku),c=di.dot(di),u=di.dot(Ku),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi),l.set(0,0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),di.subVectors(e,n),Fn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Fn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return vi.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),ef.subVectors(e,i);const l=as.dot(ef),c=ls.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const u=as.dot(tf),f=ls.dot(tf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(as,o);nf.subVectors(e,s);const m=as.dot(nf),_=ls.dot(nf);if(_>=0&&m<=_)return n.copy(s);const h=m*c-l*_;if(h<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ls,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return gg.subVectors(s,r),a=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(gg,a);const g=1/(p+h+d);return o=h*g,a=d*g,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zM=0;class uo extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Us,this.side=ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=t_,this.blendDst=n_,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uu,this.stencilZFail=Uu,this.stencilZPass=Uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Rw;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==ua&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class h_ extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,Qa=new Ie;class oi{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=ig,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ge),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ie),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new k),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Tt),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ig&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class p_ extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m_ extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NM=0;const Mn=new vt,rf=new Wt,cs=new k,fn=new Ma,Co=new Ma,Pt=new k;class Ai extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o_(e)?m_:p_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new An().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(fn.min,Co.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,Co.max),fn.expandByPoint(Pt)):(fn.expandByPoint(Co.min),fn.expandByPoint(Co.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Pt.add(cs)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new k,u[R]=new k;const f=new k,d=new k,m=new k,_=new Ie,h=new Ie,p=new Ie,g=new k,v=new k;function x(R,F,re){f.fromArray(r,R*3),d.fromArray(r,F*3),m.fromArray(r,re*3),_.fromArray(o,R*2),h.fromArray(o,F*2),p.fromArray(o,re*2),d.sub(f),m.sub(f),h.sub(_),p.sub(_);const ee=1/(h.x*p.y-p.x*h.y);!isFinite(ee)||(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(ee),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(ee),c[R].add(g),c[F].add(g),c[re].add(g),u[R].add(v),u[F].add(v),u[re].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,F=S.length;R<F;++R){const re=S[R],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)x(i[X+0],i[X+1],i[X+2])}const w=new k,C=new k,D=new k,y=new k;function T(R){D.fromArray(s,R*3),y.copy(D);const F=c[R];w.copy(F),w.sub(D.multiplyScalar(D.dot(F))).normalize(),C.crossVectors(y,F);const ee=C.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=ee}for(let R=0,F=S.length;R<F;++R){const re=S[R],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*n,u=Math.min(l.length,o.length-c);for(let f=0,d=c;f<u;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let g=0;g<u;g++)d[_++]=c[m++]}return new oi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vg=new vt,us=new f_,sf=new tu,Ni=new k,Fi=new k,Oi=new k,of=new k,af=new k,lf=new k,Ja=new k,Ka=new k,el=new k,tl=new Ie,nl=new Ie,il=new Ie,cf=new k,rl=new k;class ii extends Wt{constructor(e=new Ai,n=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),sf.copy(i.boundingSphere),sf.applyMatrix4(s),e.ray.intersectsSphere(sf)===!1)||(vg.copy(s).invert(),us.copy(e.ray).applyMatrix4(vg),i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const D=a.getX(w),y=a.getX(w+1),T=a.getX(w+2);o=sl(this,v,e,us,l,c,u,f,d,D,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);o=sl(this,r,e,us,l,c,u,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const D=w,y=w+1,T=w+2;o=sl(this,v,e,us,l,c,u,f,d,D,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=g,S=g+1,w=g+2;o=sl(this,r,e,us,l,c,u,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function FM(t,e,n,i,r,s,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==or,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,c,u,f){Ni.fromBufferAttribute(r,c),Fi.fromBufferAttribute(r,u),Oi.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){Ja.set(0,0,0),Ka.set(0,0,0),el.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=d[_],g=s[_];p!==0&&(of.fromBufferAttribute(g,c),af.fromBufferAttribute(g,u),lf.fromBufferAttribute(g,f),o?(Ja.addScaledVector(of,p),Ka.addScaledVector(af,p),el.addScaledVector(lf,p)):(Ja.addScaledVector(of.sub(Ni),p),Ka.addScaledVector(af.sub(Fi),p),el.addScaledVector(lf.sub(Oi),p)))}Ni.add(Ja),Fi.add(Ka),Oi.add(el)}t.isSkinnedMesh&&(t.boneTransform(c,Ni),t.boneTransform(u,Fi),t.boneTransform(f,Oi));const m=FM(t,e,n,i,Ni,Fi,Oi,cf);if(m){a&&(tl.fromBufferAttribute(a,c),nl.fromBufferAttribute(a,u),il.fromBufferAttribute(a,f),m.uv=vi.getUV(cf,Ni,Fi,Oi,tl,nl,il,new Ie)),l&&(tl.fromBufferAttribute(l,c),nl.fromBufferAttribute(l,u),il.fromBufferAttribute(l,f),m.uv2=vi.getUV(cf,Ni,Fi,Oi,tl,nl,il,new Ie));const _={a:c,b:u,c:f,normal:new k,materialIndex:0};vi.getNormal(Ni,Fi,Oi,_.normal),m.face=_}return m}class Zr extends Ai{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(f,2));function _(h,p,g,v,x,S,w,C,D,y,T){const R=S/D,F=w/y,re=S/2,ee=w/2,U=C/2,X=D+1,$=y+1;let J=0,I=0;const z=new k;for(let V=0;V<$;V++){const K=V*F-ee;for(let O=0;O<X;O++){const G=O*R-re;z[h]=G*v,z[p]=K*x,z[g]=U,c.push(z.x,z.y,z.z),z[h]=0,z[p]=0,z[g]=C>0?1:-1,u.push(z.x,z.y,z.z),f.push(O/D),f.push(1-V/y),J+=1}}for(let V=0;V<y;V++)for(let K=0;K<D;K++){const O=d+K+X*V,G=d+K+X*(V+1),q=d+(K+1)+X*(V+1),le=d+(K+1)+X*V;l.push(O,G,le),l.push(G,q,le),I+=6}a.addGroup(m,I,T),m+=I,d+=J}}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function OM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const BM={clone:no,merge:Ut};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class g_ extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sg*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=90,ds=1;class GM extends Wt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new kt(fs,ds,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(1,0,0)),this.add(r);const s=new kt(fs,ds,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new k(-1,0,0)),this.add(s);const o=new kt(fs,ds,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new k(0,1,0)),this.add(o);const a=new kt(fs,ds,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new k(0,-1,0)),this.add(a);const l=new kt(fs,ds,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new kt(fs,ds,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Si,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class v_ extends Zn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HM extends Hr{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new v_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),s=new Wr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:er});s.uniforms.tEquirect.value=n;const o=new ii(r,s),a=n.minFilter;return n.minFilter===eu&&(n.minFilter=Cn),new GM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const uf=new k,WM=new k,$M=new An;class vr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uf.subVectors(i,n).cross(WM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$M.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new tu,ol=new k;class Wh{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],h=i[11],p=i[12],g=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,h-d,x-p).normalize(),n[1].setComponents(a+r,f+l,h+d,x+p).normalize(),n[2].setComponents(a+s,f+c,h+m,x+g).normalize(),n[3].setComponents(a-s,f-c,h-m,x-g).normalize(),n[4].setComponents(a-o,f-u,h-_,x-v).normalize(),n[5].setComponents(a+o,f+u,h+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function __(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;t.bindBuffer(f,c),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class $h extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],_=[],h=[],p=[];for(let g=0;g<u;g++){const v=g*d-o;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-v,0),h.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+c*g,S=v+c*(g+1),w=v+1+c*(g+1),C=v+1+c*g;m.push(x,S,C),m.push(S,w,C)}this.setIndex(m),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(p,2))}static fromJSON(e){return new $h(e.width,e.height,e.widthSegments,e.heightSegments)}}var XM=`#ifdef USE_ALPHAMAP
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
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
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
}`,D3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,R3=`#ifdef USE_LIGHTMAP
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
material.diffuseColor = diffuseColor.rgb;`,F3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,O3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,U3=`PhysicalMaterial material;
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
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
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
#endif`,FE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,OE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,BE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,UE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
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
}`,cb=`#define NORMAL
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
}`,ub=`#define PHONG
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
}`,Fe={alphamap_fragment:XM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:ZM,aomap_fragment:QM,aomap_pars_fragment:JM,begin_vertex:KM,beginnormal_vertex:e3,bsdfs:t3,iridescence_fragment:n3,bumpmap_pars_fragment:i3,clipping_planes_fragment:r3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:o3,clipping_planes_vertex:a3,color_fragment:l3,color_pars_fragment:c3,color_pars_vertex:u3,color_vertex:f3,common:d3,cube_uv_reflection_fragment:h3,defaultnormal_vertex:p3,displacementmap_pars_vertex:m3,displacementmap_vertex:g3,emissivemap_fragment:v3,emissivemap_pars_fragment:_3,encodings_fragment:x3,encodings_pars_fragment:y3,envmap_fragment:S3,envmap_common_pars_fragment:w3,envmap_pars_fragment:M3,envmap_pars_vertex:E3,envmap_physical_pars_fragment:z3,envmap_vertex:b3,fog_vertex:C3,fog_pars_vertex:T3,fog_fragment:A3,fog_pars_fragment:P3,gradientmap_pars_fragment:L3,lightmap_fragment:D3,lightmap_pars_fragment:R3,lights_lambert_vertex:I3,lights_pars_begin:k3,lights_toon_fragment:N3,lights_toon_pars_fragment:F3,lights_phong_fragment:O3,lights_phong_pars_fragment:B3,lights_physical_fragment:U3,lights_physical_pars_fragment:V3,lights_fragment_begin:G3,lights_fragment_maps:H3,lights_fragment_end:W3,logdepthbuf_fragment:$3,logdepthbuf_pars_fragment:j3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:q3,map_fragment:Y3,map_pars_fragment:Z3,map_particle_fragment:Q3,map_particle_pars_fragment:J3,metalnessmap_fragment:K3,metalnessmap_pars_fragment:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:aE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,output_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:bE,shadowmask_pars_fragment:CE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:PE,skinnormal_vertex:LE,specularmap_fragment:DE,specularmap_pars_fragment:RE,tonemapping_fragment:IE,tonemapping_pars_fragment:kE,transmission_fragment:zE,transmission_pars_fragment:NE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:BE,uv2_pars_fragment:UE,uv2_pars_vertex:VE,uv2_vertex:GE,worldpos_vertex:HE,background_vert:WE,background_frag:$E,cube_vert:jE,cube_frag:XE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:ZE,distanceRGBA_frag:QE,equirect_vert:JE,equirect_frag:KE,linedashed_vert:eb,linedashed_frag:tb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:rb,meshlambert_frag:sb,meshmatcap_vert:ob,meshmatcap_frag:ab,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:ub,meshphong_frag:fb,meshphysical_vert:db,meshphysical_frag:hb,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:vb,shadow_vert:_b,shadow_frag:xb,sprite_vert:yb,sprite_frag:Sb},fe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new An},uv2Transform:{value:new An},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new An}}},ei={basic:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new An},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:Ut([fe.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ut([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ut([fe.lights,fe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ei.physical={uniforms:Ut([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function wb(t,e,n,i,r,s){const o=new Ge(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function m(h,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Kc)?(c===void 0&&(c=new ii(new Zr(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:no(ei.cube.uniforms),vertexShader:ei.cube.vertexShader,fragmentShader:ei.cube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ii(new $h(2,2),new Wr({name:"BackgroundMaterial",uniforms:no(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){n.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:m}}function Mb(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(U,X,$,J,I){let z=!1;if(o){const V=h(J,$,X);c!==V&&(c=V,m(c.object)),z=g(U,J,$,I),z&&v(U,J,$,I)}else{const V=X.wireframe===!0;(c.geometry!==J.id||c.program!==$.id||c.wireframe!==V)&&(c.geometry=J.id,c.program=$.id,c.wireframe=V,z=!0)}I!==null&&n.update(I,34963),(z||u)&&(u=!1,y(U,X,$,J),I!==null&&t.bindBuffer(34963,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,X,$){const J=$.wireframe===!0;let I=a[U.id];I===void 0&&(I={},a[U.id]=I);let z=I[X.id];z===void 0&&(z={},I[X.id]=z);let V=z[J];return V===void 0&&(V=p(d()),z[J]=V),V}function p(U){const X=[],$=[],J=[];for(let I=0;I<r;I++)X[I]=0,$[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:J,object:U,attributes:{},index:null}}function g(U,X,$,J){const I=c.attributes,z=X.attributes;let V=0;const K=$.getAttributes();for(const O in K)if(K[O].location>=0){const q=I[O];let le=z[O];if(le===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;V++}return c.attributesNum!==V||c.index!==J}function v(U,X,$,J){const I={},z=X.attributes;let V=0;const K=$.getAttributes();for(const O in K)if(K[O].location>=0){let q=z[O];q===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),I[O]=le,V++}c.attributes=I,c.attributesNum=V,c.index=J}function x(){const U=c.newAttributes;for(let X=0,$=U.length;X<$;X++)U[X]=0}function S(U){w(U,0)}function w(U,X){const $=c.newAttributes,J=c.enabledAttributes,I=c.attributeDivisors;$[U]=1,J[U]===0&&(t.enableVertexAttribArray(U),J[U]=1),I[U]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,X),I[U]=X)}function C(){const U=c.newAttributes,X=c.enabledAttributes;for(let $=0,J=X.length;$<J;$++)X[$]!==U[$]&&(t.disableVertexAttribArray($),X[$]=0)}function D(U,X,$,J,I,z){i.isWebGL2===!0&&($===5124||$===5125)?t.vertexAttribIPointer(U,X,$,I,z):t.vertexAttribPointer(U,X,$,J,I,z)}function y(U,X,$,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const I=J.attributes,z=$.getAttributes(),V=X.defaultAttributeValues;for(const K in z){const O=z[K];if(O.location>=0){let G=I[K];if(G===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){const q=G.normalized,le=G.itemSize,A=n.get(G);if(A===void 0)continue;const Se=A.buffer,Z=A.type,ye=A.bytesPerElement;if(G.isInterleavedBufferAttribute){const ae=G.data,Ee=ae.stride,ue=G.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)w(O.location+ve,ae.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<O.locationSize;ve++)S(O.location+ve);t.bindBuffer(34962,Se);for(let ve=0;ve<O.locationSize;ve++)D(O.location+ve,le/O.locationSize,Z,q,Ee*ye,(ue+le/O.locationSize*ve)*ye)}else{if(G.isInstancedBufferAttribute){for(let ae=0;ae<O.locationSize;ae++)w(O.location+ae,G.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ae=0;ae<O.locationSize;ae++)S(O.location+ae);t.bindBuffer(34962,Se);for(let ae=0;ae<O.locationSize;ae++)D(O.location+ae,le/O.locationSize,Z,q,le*ye,le/O.locationSize*ae*ye)}}else if(V!==void 0){const q=V[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(O.location,q);break;case 3:t.vertexAttrib3fv(O.location,q);break;case 4:t.vertexAttrib4fv(O.location,q);break;default:t.vertexAttrib1fv(O.location,q)}}}}C()}function T(){re();for(const U in a){const X=a[U];for(const $ in X){const J=X[$];for(const I in J)_(J[I].object),delete J[I];delete X[$]}delete a[U]}}function R(U){if(a[U.id]===void 0)return;const X=a[U.id];for(const $ in X){const J=X[$];for(const I in J)_(J[I].object),delete J[I];delete X[$]}delete a[U.id]}function F(U){for(const X in a){const $=a[X];if($[U.id]===void 0)continue;const J=$[U.id];for(const I in J)_(J[I].object),delete J[I];delete $[U.id]}}function re(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:ee,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function Eb(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function bb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),_=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=d>0,S=o||e.has("OES_texture_float"),w=x&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function Cb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new An,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||i!==0||r;return r=d,n=u(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,x=v*4;let S=g.clippingState||null;l.value=S,S=u(_,d,x,m);for(let w=0;w!==x;++w)S[w]=n[w];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const g=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=m;x!==h;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Tb(t){let e=new WeakMap;function n(o,a){return a===_d?o.mapping=Ks:a===xd&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===_d||a===xd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ls extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,_g=[.125,.215,.35,.446,.526,.582],yr=20,ff=new Ls,xg=new Ge;let df=null;const _r=(1+Math.sqrt(5))/2,ps=1/_r,yg=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,_r,ps),new k(0,_r,-ps),new k(ps,0,_r),new k(-ps,0,_r),new k(_r,ps,0),new k(-_r,ps,0)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){df=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:fa,format:ni,encoding:Gr,depthBuffer:!1},r=wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(s)),this._blurMaterial=Pb(s,e,n)}return r}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,ff)}_sceneToCubeUV(e,n,i,r){const a=new kt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xg),u.toneMapping=Si,u.autoClear=!1;const m=new h_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),_=new ii(new Zr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(xg),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;al(r,v*x,g>2?x:0,x,x),u.setRenderTarget(r),h&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ff)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yg[(r-1)%yg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),h=s/_,p=isFinite(s)?1+Math.floor(u*h):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const g=[];let v=0;for(let D=0;D<yr;++D){const y=D/h,T=Math.exp(-y*y/2);g.push(T),D===0?v+=T:D<p&&(v+=2*T)}for(let D=0;D<g.length;D++)g[D]=g[D]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Ds?r-x+Ds:0),C=4*(this._cubeSize-S);al(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(f,ff)}}function Ab(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+_g.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=_g[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,h=3,p=2,g=1,v=new Float32Array(h*_*m),x=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,y=C>2?0:-1,T=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];v.set(T,h*_*C),x.set(d,p*_*C);const R=[C,C,C,C,C,C];S.set(R,g*_*C)}const w=new Ai;w.setAttribute("position",new oi(v,h)),w.setAttribute("uv",new oi(x,p)),w.setAttribute("faceIndex",new oi(S,g)),e.push(w),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wg(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Pb(t,e,n){const i=new Float32Array(yr),r=new k(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Mg(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Eg(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function Lb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_d||l===xd,u=l===Ks||l===eo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Sg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Sg(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Db(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],C=v[x+1],D=v[x+2];d.push(w,C,C,D,D,w)}}else{const v=_.array;h=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,C=x+1,D=x+2;d.push(w,C,C,D,D,w)}}const p=new(o_(d)?m_:p_)(d,1);p.version=h;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ib(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function f(d,m,_){if(_===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function kb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zb(t,e){return t[0]-e[0]}function Nb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function hf(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function Fb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let $=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var _=$;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),w===!0&&(R=2),C===!0&&(R=3);let F=u.attributes.position.count*R,re=1;F>e.maxTextureSize&&(re=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const ee=new Float32Array(F*re*4*p),U=new u_(ee,F,re,p);U.type=Tr,U.needsUpdate=!0;const X=R*4;for(let J=0;J<p;J++){const I=D[J],z=y[J],V=T[J],K=F*re*4*J;for(let O=0;O<I.count;O++){const G=O*X;S===!0&&(o.fromBufferAttribute(I,O),I.normalized===!0&&hf(o,I),ee[K+G+0]=o.x,ee[K+G+1]=o.y,ee[K+G+2]=o.z,ee[K+G+3]=0),w===!0&&(o.fromBufferAttribute(z,O),z.normalized===!0&&hf(o,z),ee[K+G+4]=o.x,ee[K+G+5]=o.y,ee[K+G+6]=o.z,ee[K+G+7]=0),C===!0&&(o.fromBufferAttribute(V,O),V.normalized===!0&&hf(o,V),ee[K+G+8]=o.x,ee[K+G+9]=o.y,ee[K+G+10]=o.z,ee[K+G+11]=V.itemSize===4?o.w:1)}}g={count:p,texture:U,size:new Ie(F,re)},s.set(u,g),u.addEventListener("dispose",$)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const x=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==h){p=[];for(let w=0;w<h;w++)p[w]=[w,0];i[u.id]=p}for(let w=0;w<h;w++){const C=p[w];C[0]=w,C[1]=m[w]}p.sort(Nb);for(let w=0;w<8;w++)w<h&&p[w][1]?(a[w][0]=p[w][0],a[w][1]=p[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(zb);const g=u.morphAttributes.position,v=u.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const C=a[w],D=C[0],y=C[1];D!==Number.MAX_SAFE_INTEGER&&y?(g&&u.getAttribute("morphTarget"+w)!==g[D]&&u.setAttribute("morphTarget"+w,g[D]),v&&u.getAttribute("morphNormal"+w)!==v[D]&&u.setAttribute("morphNormal"+w,v[D]),r[w]=y,x+=y):(g&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),v&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const S=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ob(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const x_=new Zn,y_=new u_,S_=new TM,w_=new v_,bg=[],Cg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Pg=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bg[r];if(s===void 0&&(s=new Float32Array(r),bg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=Cg[e];n===void 0&&(n=new Int32Array(e),Cg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function Hb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;Pg.set(i),t.uniformMatrix2fv(this.addr,!1,Pg),Qt(n,i)}}function Wb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;Ag.set(i),t.uniformMatrix3fv(this.addr,!1,Ag),Qt(n,i)}}function $b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,i))return;Tg.set(i),t.uniformMatrix4fv(this.addr,!1,Tg),Qt(n,i)}}function jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xb(t,e){const n=this.cache;Zt(n,e)||(t.uniform2iv(this.addr,e),Qt(n,e))}function qb(t,e){const n=this.cache;Zt(n,e)||(t.uniform3iv(this.addr,e),Qt(n,e))}function Yb(t,e){const n=this.cache;Zt(n,e)||(t.uniform4iv(this.addr,e),Qt(n,e))}function Zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Qb(t,e){const n=this.cache;Zt(n,e)||(t.uniform2uiv(this.addr,e),Qt(n,e))}function Jb(t,e){const n=this.cache;Zt(n,e)||(t.uniform3uiv(this.addr,e),Qt(n,e))}function Kb(t,e){const n=this.cache;Zt(n,e)||(t.uniform4uiv(this.addr,e),Qt(n,e))}function eC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||x_,r)}function tC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||S_,r)}function nC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||w_,r)}function iC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||y_,r)}function rC(t){switch(t){case 5126:return Bb;case 35664:return Ub;case 35665:return Vb;case 35666:return Gb;case 35674:return Hb;case 35675:return Wb;case 35676:return $b;case 5124:case 35670:return jb;case 35667:case 35671:return Xb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return Qb;case 36295:return Jb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function sC(t,e){t.uniform1fv(this.addr,e)}function oC(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function aC(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function lC(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function cC(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uC(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fC(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dC(t,e){t.uniform1iv(this.addr,e)}function hC(t,e){t.uniform2iv(this.addr,e)}function pC(t,e){t.uniform3iv(this.addr,e)}function mC(t,e){t.uniform4iv(this.addr,e)}function gC(t,e){t.uniform1uiv(this.addr,e)}function vC(t,e){t.uniform2uiv(this.addr,e)}function _C(t,e){t.uniform3uiv(this.addr,e)}function xC(t,e){t.uniform4uiv(this.addr,e)}function yC(t,e,n){const i=e.length,r=nu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||x_,r[s])}function SC(t,e,n){const i=e.length,r=nu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||S_,r[s])}function wC(t,e,n){const i=e.length,r=nu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||w_,r[s])}function MC(t,e,n){const i=e.length,r=nu(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||y_,r[s])}function EC(t){switch(t){case 5126:return sC;case 35664:return oC;case 35665:return aC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return fC;case 5124:case 35670:return dC;case 35667:case 35671:return hC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return MC}}class bC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rC(n.type)}}class CC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=EC(n.type)}}class TC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Lg(t,e){t.seq.push(e),t.map[e.id]=e}function AC(t,e,n){const i=t.name,r=i.length;for(pf.lastIndex=0;;){const s=pf.exec(i),o=pf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Lg(n,c===void 0?new bC(a,t,e):new CC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new TC(a),Lg(n,f)),n=f}}}class Al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let PC=0;function LC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function DC(t){switch(t){case Gr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Rg(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LC(t.getShaderSource(e),o)}else return r}function RC(t,e){const n=DC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function IC(t,e){let n;switch(e){case eM:n="Linear";break;case tM:n="Reinhard";break;case nM:n="OptimizedCineon";break;case iM:n="ACESFilmic";break;case rM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function kC(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ro).join(`
`)}function zC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NC(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ro(t){return t!==""}function Ig(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(FC,OC)}function OC(t,e){const n=Fe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ed(n)}const BC=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,UC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(t){return t.replace(UC,M_).replace(BC,VC)}function VC(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),M_(t,e,n,i)}function M_(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Do&&(e="SHADOWMAP_TYPE_VSM"),e}function HC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case eo:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function $C(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jw:e="ENVMAP_BLENDING_MIX";break;case Kw:e="ENVMAP_BLENDING_ADD";break}return e}function jC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GC(n),c=HC(n),u=WC(n),f=$C(n),d=jC(n),m=n.isWebGL2?"":kC(n),_=zC(s),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[_].filter(Ro).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(p=[Ng(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[m,Ng(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Si?IC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,RC("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Ed(o),o=Ig(o,n),o=kg(o,n),a=Ed(a),a=Ig(a,n),a=kg(a,n),o=zg(o),a=zg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,S=v+g+a,w=Dg(r,35633,x),C=Dg(r,35632,S);if(r.attachShader(h,w),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),R=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(C).trim();let re=!0,ee=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const U=Rg(r,w,"vertex"),X=Rg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+U+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||F==="")&&(ee=!1);ee&&(this.diagnostics={runnable:re,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:F,prefix:g}})}r.deleteShader(w),r.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Al(r,h)),D};let y;return this.getAttributes=function(){return y===void 0&&(y=NC(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=PC++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=C,this}let qC=0;class YC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new ZC(e);n.set(e,i)}return n.get(e)}}class ZC{constructor(e){this.id=qC++,this.code=e,this.usedTimes=0}}function QC(t,e,n,i,r,s,o){const a=new d_,l=new YC,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,R,F,re){const ee=F.fog,U=re.geometry,X=y.isMeshStandardMaterial?F.environment:null,$=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),J=!!$&&$.mapping===Kc?$.image.height:null,I=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=z!==void 0?z.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let O,G,q,le;if(I){const Ee=ei[I];O=Ee.vertexShader,G=Ee.fragmentShader}else O=y.vertexShader,G=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const A=t.getRenderTarget(),Se=y.alphaTest>0,Z=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:u,shaderID:I,shaderName:y.type,vertexShader:O,fragmentShader:G,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:A===null?t.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Gr,map:!!y.map,matcap:!!y.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===MM,tangentSpaceNormalMap:y.normalMapType===s_,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===ot,clearcoat:Z,clearcoatMap:Z&&!!y.clearcoatMap,clearcoatRoughnessMap:Z&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Us,alphaMap:!!y.alphaMap,alphaTest:Se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Si,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===or,flipSided:y.side===Xn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function x(y){const T=_[y.type];let R;if(T){const F=ei[T];R=BM.clone(F.uniforms)}else R=y.uniforms;return R}function S(y,T){let R;for(let F=0,re=c.length;F<re;F++){const ee=c[F];if(ee.cacheKey===T){R=ee,++R.usedTimes;break}}return R===void 0&&(R=new XC(t,T,y,s),c.push(R)),R}function w(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:D}}function JC(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function KC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Og(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function c(f,d){n.length>1&&n.sort(f||KC),i.length>1&&i.sort(d||Fg),r.length>1&&r.sort(d||Fg)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function e4(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Og,t.set(i,[s])):r>=t.get(i).length?(s=new Og,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function t4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ge};break;case"SpotLight":n={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function n4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let i4=0;function r4(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function s4(t,e){const n=new t4,i=n4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new k);const s=new k,o=new vt,a=new vt;function l(u,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let h=0,p=0,g=0,v=0,x=0,S=0,w=0,C=0;u.sort(r4);const D=f!==!0?Math.PI:1;for(let T=0,R=u.length;T<R;T++){const F=u[T],re=F.color,ee=F.intensity,U=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=re.r*ee*D,m+=re.g*ee*D,_+=re.b*ee*D;else if(F.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(F.sh.coefficients[$],ee);else if(F.isDirectionalLight){const $=n.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*D),F.castShadow){const J=F.shadow,I=i.get(F);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,r.directionalShadow[h]=I,r.directionalShadowMap[h]=X,r.directionalShadowMatrix[h]=F.shadow.matrix,S++}r.directional[h]=$,h++}else if(F.isSpotLight){const $=n.get(F);if($.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(re).multiplyScalar(ee*D),$.distance=U,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,F.castShadow){const J=F.shadow,I=i.get(F);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,r.spotShadow[g]=I,r.spotShadowMap[g]=X,r.spotShadowMatrix[g]=F.shadow.matrix,C++}r.spot[g]=$,g++}else if(F.isRectAreaLight){const $=n.get(F);$.color.copy(re).multiplyScalar(ee),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),r.rectArea[v]=$,v++}else if(F.isPointLight){const $=n.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*D),$.distance=F.distance,$.decay=F.decay,F.castShadow){const J=F.shadow,I=i.get(F);I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,r.pointShadow[p]=I,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=F.shadow.matrix,w++}r.point[p]=$,p++}else if(F.isHemisphereLight){const $=n.get(F);$.skyColor.copy(F.color).multiplyScalar(ee*D),$.groundColor.copy(F.groundColor).multiplyScalar(ee*D),r.hemi[x]=$,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==g||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==C)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,y.directionalLength=h,y.pointLength=p,y.spotLength=g,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=C,r.version=i4++)}function c(u,f){let d=0,m=0,_=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const S=u[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function Bg(t,e){const n=new s4(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o4(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Bg(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Bg(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class a4 extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l4 extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u4=`uniform sampler2D shadow_pass;
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
}`;function f4(t,e,n){let i=new Wh;const r=new Ie,s=new Ie,o=new Tt,a=new a4({depthPacking:wM}),l=new l4,c={},u=n.maxTextureSize,f={0:Xn,1:ua,2:or},d=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:c4,fragmentShader:u4}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ai;_.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new ii(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e_,this.render=function(S,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const D=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.state;R.setBlending(er),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let F=0,re=S.length;F<re;F++){const ee=S[F],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const X=U.getFrameExtents();if(r.multiply(X),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==Do?{minFilter:nn,magFilter:nn}:{};U.map=new Hr(r.x,r.y,J),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const $=U.getViewportCount();for(let J=0;J<$;J++){const I=U.getViewport(J);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),R.viewport(o),U.updateMatrices(ee,J),i=U.getFrustum(),x(w,C,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Do&&g(U,C),U.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(D,y,T)};function g(S,w){const C=e.update(h);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,m,h,null)}function v(S,w,C,D,y,T){let R=null;const F=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0?R=F:R=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const re=R.uuid,ee=w.uuid;let U=c[re];U===void 0&&(U={},c[re]=U);let X=U[ee];X===void 0&&(X=R.clone(),U[ee]=X),R=X}return R.visible=w.visible,R.wireframe=w.wireframe,T===Do?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=D,R.farDistance=y),R}function x(S,w,C,D,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Do)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const F=e.update(S),re=S.material;if(Array.isArray(re)){const ee=F.groups;for(let U=0,X=ee.length;U<X;U++){const $=ee[U],J=re[$.materialIndex];if(J&&J.visible){const I=v(S,J,D,C.near,C.far,y);t.renderBufferDirect(C,null,F,I,S,$)}}}else if(re.visible){const ee=v(S,re,D,C.near,C.far,y);t.renderBufferDirect(C,null,F,ee,S,null)}}const R=S.children;for(let F=0,re=R.length;F<re;F++)x(R[F],w,C,D,y)}}function d4(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const _e=new Tt;let Q=null;const me=new Tt(0,0,0,0);return{setMask:function(he){Q!==he&&!N&&(t.colorMask(he,he,he,he),Q=he)},setLocked:function(he){N=he},setClear:function(he,Xe,At,xt,Pi){Pi===!0&&(he*=xt,Xe*=xt,At*=xt),_e.set(he,Xe,At,xt),me.equals(_e)===!1&&(t.clearColor(he,Xe,At,xt),me.copy(_e))},reset:function(){N=!1,Q=null,me.set(-1,0,0,0)}}}function s(){let N=!1,_e=null,Q=null,me=null;return{setTest:function(he){he?Se(2929):Z(2929)},setMask:function(he){_e!==he&&!N&&(t.depthMask(he),_e=he)},setFunc:function(he){if(Q!==he){if(he)switch(he){case $w:t.depthFunc(512);break;case jw:t.depthFunc(519);break;case Xw:t.depthFunc(513);break;case vd:t.depthFunc(515);break;case qw:t.depthFunc(514);break;case Yw:t.depthFunc(518);break;case Zw:t.depthFunc(516);break;case Qw:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=he}},setLocked:function(he){N=he},setClear:function(he){me!==he&&(t.clearDepth(he),me=he)},reset:function(){N=!1,_e=null,Q=null,me=null}}}function o(){let N=!1,_e=null,Q=null,me=null,he=null,Xe=null,At=null,xt=null,Pi=null;return{setTest:function(ht){N||(ht?Se(2960):Z(2960))},setMask:function(ht){_e!==ht&&!N&&(t.stencilMask(ht),_e=ht)},setFunc:function(ht,li,Sn){(Q!==ht||me!==li||he!==Sn)&&(t.stencilFunc(ht,li,Sn),Q=ht,me=li,he=Sn)},setOp:function(ht,li,Sn){(Xe!==ht||At!==li||xt!==Sn)&&(t.stencilOp(ht,li,Sn),Xe=ht,At=li,xt=Sn)},setLocked:function(ht){N=ht},setClear:function(ht){Pi!==ht&&(t.clearStencil(ht),Pi=ht)},reset:function(){N=!1,_e=null,Q=null,me=null,he=null,Xe=null,At=null,xt=null,Pi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,D=null,y=null,T=!1,R=null,F=null,re=null,ee=null,U=null;const X=t.getParameter(35661);let $=!1,J=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=J>=2);let z=null,V={};const K=t.getParameter(3088),O=t.getParameter(2978),G=new Tt().fromArray(K),q=new Tt().fromArray(O);function le(N,_e,Q){const me=new Uint8Array(4),he=t.createTexture();t.bindTexture(N,he),t.texParameteri(N,10241,9728),t.texParameteri(N,10240,9728);for(let Xe=0;Xe<Q;Xe++)t.texImage2D(_e+Xe,0,6408,1,1,0,6408,5121,me);return he}const A={};A[3553]=le(3553,3553,1),A[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(vd),je(!1),De(Am),Se(2884),$e(er);function Se(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function Z(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function ye(N,_e){return m[N]!==_e?(t.bindFramebuffer(N,_e),m[N]=_e,i&&(N===36009&&(m[36160]=_e),N===36160&&(m[36009]=_e)),!0):!1}function ae(N,_e){let Q=h,me=!1;if(N)if(Q=_.get(_e),Q===void 0&&(Q=[],_.set(_e,Q)),N.isWebGLMultipleRenderTargets){const he=N.texture;if(Q.length!==he.length||Q[0]!==36064){for(let Xe=0,At=he.length;Xe<At;Xe++)Q[Xe]=36064+Xe;Q.length=he.length,me=!0}}else Q[0]!==36064&&(Q[0]=36064,me=!0);else Q[0]!==1029&&(Q[0]=1029,me=!0);me&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ee(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ue={[gs]:32774,[kw]:32778,[zw]:32779};if(i)ue[Rm]=32775,ue[Im]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(ue[Rm]=N.MIN_EXT,ue[Im]=N.MAX_EXT)}const ve={[Nw]:0,[Fw]:1,[Ow]:768,[t_]:770,[Ww]:776,[Gw]:774,[Uw]:772,[Bw]:769,[n_]:771,[Hw]:775,[Vw]:773};function $e(N,_e,Q,me,he,Xe,At,xt){if(N===er){g===!0&&(Z(3042),g=!1);return}if(g===!1&&(Se(3042),g=!0),N!==Iw){if(N!==v||xt!==T){if((x!==gs||C!==gs)&&(t.blendEquation(32774),x=gs,C=gs),xt)switch(N){case Us:t.blendFuncSeparate(1,771,1,771);break;case Pm:t.blendFunc(1,1);break;case Lm:t.blendFuncSeparate(0,769,0,1);break;case Dm:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Us:t.blendFuncSeparate(770,771,1,771);break;case Pm:t.blendFunc(770,1);break;case Lm:t.blendFuncSeparate(0,769,0,1);break;case Dm:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,w=null,D=null,y=null,v=N,T=xt}return}he=he||_e,Xe=Xe||Q,At=At||me,(_e!==x||he!==C)&&(t.blendEquationSeparate(ue[_e],ue[he]),x=_e,C=he),(Q!==S||me!==w||Xe!==D||At!==y)&&(t.blendFuncSeparate(ve[Q],ve[me],ve[Xe],ve[At]),S=Q,w=me,D=Xe,y=At),v=N,T=null}function Pe(N,_e){N.side===or?Z(2884):Se(2884);let Q=N.side===Xn;_e&&(Q=!Q),je(Q),N.blending===Us&&N.transparent===!1?$e(er):$e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const me=N.stencilWrite;c.setTest(me),me&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(32926):Z(32926)}function je(N){R!==N&&(N?t.frontFace(2304):t.frontFace(2305),R=N)}function De(N){N!==Pw?(Se(2884),N!==F&&(N===Am?t.cullFace(1029):N===Lw?t.cullFace(1028):t.cullFace(1032))):Z(2884),F=N}function Be(N){N!==re&&($&&t.lineWidth(N),re=N)}function Ue(N,_e,Q){N?(Se(32823),(ee!==_e||U!==Q)&&(t.polygonOffset(_e,Q),ee=_e,U=Q)):Z(32823)}function tt(N){N?Se(3089):Z(3089)}function $t(N){N===void 0&&(N=33984+X-1),z!==N&&(t.activeTexture(N),z=N)}function P(N,_e){z===null&&$t();let Q=V[z];Q===void 0&&(Q={type:void 0,texture:void 0},V[z]=Q),(Q.type!==N||Q.texture!==_e)&&(t.bindTexture(N,_e||A[N]),Q.type=N,Q.texture=_e)}function M(){const N=V[z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){G.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),G.copy(N))}function Me(N){q.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function ke(N,_e){let Q=f.get(_e);Q===void 0&&(Q=new WeakMap,f.set(_e,Q));let me=Q.get(N);me===void 0&&(me=t.getUniformBlockIndex(_e,N.name),Q.set(N,me))}function Ye(N,_e){const me=f.get(_e).get(N);u.get(N)!==me&&(t.uniformBlockBinding(_e,me,N.__bindingPointIndex),u.set(N,me))}function _t(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},z=null,V={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,D=null,y=null,T=!1,R=null,F=null,re=null,ee=null,U=null,G.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:Z,bindFramebuffer:ye,drawBuffers:ae,useProgram:Ee,setBlending:$e,setMaterial:Pe,setFlipSided:je,setCullFace:De,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:tt,activeTexture:$t,bindTexture:P,unbindTexture:M,compressedTexImage2D:B,texImage2D:Ce,texImage3D:we,updateUBOMapping:ke,uniformBlockBinding:Ye,texStorage2D:Te,texStorage3D:Y,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:de,scissor:be,viewport:Me,reset:_t}}function h4(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return g?new OffscreenCanvas(P,M):rc("canvas")}function x(P,M,B,te){let ce=1;if((P.width>te||P.height>te)&&(ce=te/Math.max(P.width,P.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=M?Md:Math.floor,Te=de(ce*P.width),Y=de(ce*P.height);h===void 0&&(h=v(Te,Y));const Ce=B?v(Te,Y):h;return Ce.width=Te,Ce.height=Y,Ce.getContext("2d").drawImage(P,0,0,Te,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+Y+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return og(P.width)&&og(P.height)}function w(P){return a?!1:P.wrapS!==Vn||P.wrapT!==Vn||P.minFilter!==nn&&P.minFilter!==Cn}function C(P,M){return P.generateMipmaps&&M&&P.minFilter!==nn&&P.minFilter!==Cn}function D(P){t.generateMipmap(P)}function y(P,M,B,te,ce=!1){if(a===!1)return M;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=M;return M===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),M===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),M===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=te===ot&&ce===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(P,M,B){return C(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){return P===nn||P===km||P===zm?9728:9729}function F(P){const M=P.target;M.removeEventListener("dispose",F),ee(M),M.isVideoTexture&&_.delete(M)}function re(P){const M=P.target;M.removeEventListener("dispose",re),X(M)}function ee(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,te=p.get(B);if(te){const ce=te[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&U(P),Object.keys(te).length===0&&p.delete(B)}i.remove(P)}function U(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const B=P.source,te=p.get(B);delete te[M.__cacheKey],o.memory.textures--}function X(P){const M=P.texture,B=i.get(P),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)t.deleteFramebuffer(B.__webglFramebuffer[ce]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[ce]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ce=0,de=M.length;ce<de;ce++){const Te=i.get(M[ce]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(M[ce])}i.remove(M),i.remove(P)}let $=0;function J(){$=0}function I(){const P=$;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),$+=1,P}function z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.encoding),M.join()}function V(P,M){const B=i.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,P,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,B.__webglTexture)}function K(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(35866,B.__webglTexture)}function O(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(32879,B.__webglTexture)}function G(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ye(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(34067,B.__webglTexture)}const q={[yd]:10497,[Vn]:33071,[Sd]:33648},le={[nn]:9728,[km]:9984,[zm]:9986,[Cn]:9729,[sM]:9985,[eu]:9987};function A(P,M,B){if(B?(t.texParameteri(P,10242,q[M.wrapS]),t.texParameteri(P,10243,q[M.wrapT]),(P===32879||P===35866)&&t.texParameteri(P,32882,q[M.wrapR]),t.texParameteri(P,10240,le[M.magFilter]),t.texParameteri(P,10241,le[M.minFilter])):(t.texParameteri(P,10242,33071),t.texParameteri(P,10243,33071),(P===32879||P===35866)&&t.texParameteri(P,32882,33071),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,10240,R(M.magFilter)),t.texParameteri(P,10241,R(M.minFilter)),M.minFilter!==nn&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===Tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Se(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",F));const te=M.source;let ce=p.get(te);ce===void 0&&(ce={},p.set(te,ce));const de=z(M);if(de!==P.__cacheKey){ce[de]===void 0&&(ce[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ce[de].usedTimes++;const Te=ce[P.__cacheKey];Te!==void 0&&(ce[P.__cacheKey].usedTimes--,Te.usedTimes===0&&U(M)),P.__cacheKey=de,P.__webglTexture=ce[de].texture}return B}function Z(P,M,B){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const ce=Se(P,M),de=M.source;if(n.activeTexture(33984+B),n.bindTexture(te,P.__webglTexture),de.version!==de.__currentVersion||ce===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Te=w(M)&&S(M.image)===!1;let Y=x(M.image,Te,!1,u);Y=$t(M,Y);const Ce=S(Y)||a,we=s.convert(M.format,M.encoding);let be=s.convert(M.type),Me=y(M.internalFormat,we,be,M.encoding,M.isVideoTexture);A(te,M,Ce);let ke;const Ye=M.mipmaps,_t=a&&M.isVideoTexture!==!0,N=de.__currentVersion===void 0||ce===!0,_e=T(M,Y,Ce);if(M.isDepthTexture)Me=6402,a?M.type===Tr?Me=36012:M.type===Cr?Me=33190:M.type===Vs?Me=35056:Me=33189:M.type===Tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Rr&&Me===6402&&M.type!==r_&&M.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cr,be=s.convert(M.type)),M.format===to&&Me===6402&&(Me=34041,M.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vs,be=s.convert(M.type))),N&&(_t?n.texStorage2D(3553,1,Me,Y.width,Y.height):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,null));else if(M.isDataTexture)if(Ye.length>0&&Ce){_t&&N&&n.texStorage2D(3553,_e,Me,Ye[0].width,Ye[0].height);for(let Q=0,me=Ye.length;Q<me;Q++)ke=Ye[Q],_t?n.texSubImage2D(3553,Q,0,0,ke.width,ke.height,we,be,ke.data):n.texImage2D(3553,Q,Me,ke.width,ke.height,0,we,be,ke.data);M.generateMipmaps=!1}else _t?(N&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,Y.width,Y.height,we,be,Y.data)):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,Y.data);else if(M.isCompressedTexture){_t&&N&&n.texStorage2D(3553,_e,Me,Ye[0].width,Ye[0].height);for(let Q=0,me=Ye.length;Q<me;Q++)ke=Ye[Q],M.format!==ni?we!==null?_t?n.compressedTexSubImage2D(3553,Q,0,0,ke.width,ke.height,we,ke.data):n.compressedTexImage2D(3553,Q,Me,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?n.texSubImage2D(3553,Q,0,0,ke.width,ke.height,we,be,ke.data):n.texImage2D(3553,Q,Me,ke.width,ke.height,0,we,be,ke.data)}else if(M.isDataArrayTexture)_t?(N&&n.texStorage3D(35866,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(35866,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isData3DTexture)_t?(N&&n.texStorage3D(32879,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(32879,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isFramebufferTexture){if(N)if(_t)n.texStorage2D(3553,_e,Me,Y.width,Y.height);else{let Q=Y.width,me=Y.height;for(let he=0;he<_e;he++)n.texImage2D(3553,he,Me,Q,me,0,we,be,null),Q>>=1,me>>=1}}else if(Ye.length>0&&Ce){_t&&N&&n.texStorage2D(3553,_e,Me,Ye[0].width,Ye[0].height);for(let Q=0,me=Ye.length;Q<me;Q++)ke=Ye[Q],_t?n.texSubImage2D(3553,Q,0,0,we,be,ke):n.texImage2D(3553,Q,Me,we,be,ke);M.generateMipmaps=!1}else _t?(N&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,we,be,Y)):n.texImage2D(3553,0,Me,we,be,Y);C(M,Ce)&&D(te),de.__currentVersion=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,B){if(M.image.length!==6)return;const te=Se(P,M),ce=M.source;if(n.activeTexture(33984+B),n.bindTexture(34067,P.__webglTexture),ce.version!==ce.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!de&&!Te?Y[Q]=x(M.image[Q],!1,!0,c):Y[Q]=Te?M.image[Q].image:M.image[Q],Y[Q]=$t(M,Y[Q]);const Ce=Y[0],we=S(Ce)||a,be=s.convert(M.format,M.encoding),Me=s.convert(M.type),ke=y(M.internalFormat,be,Me,M.encoding),Ye=a&&M.isVideoTexture!==!0,_t=ce.__currentVersion===void 0||te===!0;let N=T(M,Ce,we);A(34067,M,we);let _e;if(de){Ye&&_t&&n.texStorage2D(34067,N,ke,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){_e=Y[Q].mipmaps;for(let me=0;me<_e.length;me++){const he=_e[me];M.format!==ni?be!==null?Ye?n.compressedTexSubImage2D(34069+Q,me,0,0,he.width,he.height,be,he.data):n.compressedTexImage2D(34069+Q,me,ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?n.texSubImage2D(34069+Q,me,0,0,he.width,he.height,be,Me,he.data):n.texImage2D(34069+Q,me,ke,he.width,he.height,0,be,Me,he.data)}}}else{_e=M.mipmaps,Ye&&_t&&(_e.length>0&&N++,n.texStorage2D(34067,N,ke,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(Te){Ye?n.texSubImage2D(34069+Q,0,0,0,Y[Q].width,Y[Q].height,be,Me,Y[Q].data):n.texImage2D(34069+Q,0,ke,Y[Q].width,Y[Q].height,0,be,Me,Y[Q].data);for(let me=0;me<_e.length;me++){const Xe=_e[me].image[Q].image;Ye?n.texSubImage2D(34069+Q,me+1,0,0,Xe.width,Xe.height,be,Me,Xe.data):n.texImage2D(34069+Q,me+1,ke,Xe.width,Xe.height,0,be,Me,Xe.data)}}else{Ye?n.texSubImage2D(34069+Q,0,0,0,be,Me,Y[Q]):n.texImage2D(34069+Q,0,ke,be,Me,Y[Q]);for(let me=0;me<_e.length;me++){const he=_e[me];Ye?n.texSubImage2D(34069+Q,me+1,0,0,be,Me,he.image[Q]):n.texImage2D(34069+Q,me+1,ke,be,Me,he.image[Q])}}}C(M,we)&&D(34067),ce.__currentVersion=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ae(P,M,B,te,ce){const de=s.convert(B.format,B.encoding),Te=s.convert(B.type),Y=y(B.internalFormat,de,Te,B.encoding);i.get(M).__hasExternalTextures||(ce===32879||ce===35866?n.texImage3D(ce,0,Y,M.width,M.height,M.depth,0,de,Te,null):n.texImage2D(ce,0,Y,M.width,M.height,0,de,Te,null)),n.bindFramebuffer(36160,P),Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,te,ce,i.get(B).__webglTexture,0,Be(M)):t.framebufferTexture2D(36160,te,ce,i.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ee(P,M,B){if(t.bindRenderbuffer(36161,P),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(B||Ue(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Tr?te=36012:ce.type===Cr&&(te=33190));const de=Be(M);Ue(M)?d.renderbufferStorageMultisampleEXT(36161,de,te,M.width,M.height):t.renderbufferStorageMultisample(36161,de,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,P)}else if(M.depthBuffer&&M.stencilBuffer){const te=Be(M);B&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<te.length;ce++){const de=te[ce],Te=s.convert(de.format,de.encoding),Y=s.convert(de.type),Ce=y(de.internalFormat,Te,Y,de.encoding),we=Be(M);B&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,we,Ce,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,we,Ce,M.width,M.height):t.renderbufferStorage(36161,Ce,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ce=Be(M);if(M.depthTexture.format===Rr)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ce):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===to)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ce):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,P)}else if(B){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[te],P,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function $e(P,M,B){const te=i.get(P);M!==void 0&&ae(te.__webglFramebuffer,P,P.texture,36064,3553),B!==void 0&&ve(P)}function Pe(P){const M=P.texture,B=i.get(P),te=i.get(M);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const ce=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Te=S(P)||a;if(ce){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=i.get(Y[Ce]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ue(P)===!1){const Y=de?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Y.length;Ce++){const we=Y[Ce];B.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Ce]);const be=s.convert(we.format,we.encoding),Me=s.convert(we.type),ke=y(we.internalFormat,be,Me,we.encoding),Ye=Be(P);t.renderbufferStorageMultisample(36161,Ye,ke,P.width,P.height),t.framebufferRenderbuffer(36160,36064+Ce,36161,B.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(36161,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(ce){n.bindTexture(34067,te.__webglTexture),A(34067,M,Te);for(let Y=0;Y<6;Y++)ae(B.__webglFramebuffer[Y],P,M,36064,34069+Y);C(M,Te)&&D(34067),n.unbindTexture()}else if(de){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=Y[Ce],Me=i.get(be);n.bindTexture(3553,Me.__webglTexture),A(3553,be,Te),ae(B.__webglFramebuffer,P,be,36064+Ce,3553),C(be,Te)&&D(3553)}n.unbindTexture()}else{let Y=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Y=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Y,te.__webglTexture),A(Y,M,Te),ae(B.__webglFramebuffer,P,M,36064,Y),C(M,Te)&&D(Y),n.unbindTexture()}P.depthBuffer&&ve(P)}function je(P){const M=S(P)||a,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,ce=B.length;te<ce;te++){const de=B[te];if(C(de,M)){const Te=P.isWebGLCubeRenderTarget?34067:3553,Y=i.get(de).__webglTexture;n.bindTexture(Te,Y),D(Te),n.unbindTexture()}}}function De(P){if(a&&P.samples>0&&Ue(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,te=P.height;let ce=16384;const de=[],Te=P.stencilBuffer?33306:36096,Y=i.get(P),Ce=P.isWebGLMultipleRenderTargets===!0;if(Ce)for(let we=0;we<M.length;we++)n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,null),n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,null,0);n.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Y.__webglFramebuffer);for(let we=0;we<M.length;we++){de.push(36064+we),P.depthBuffer&&de.push(Te);const be=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(be===!1&&(P.depthBuffer&&(ce|=256),P.stencilBuffer&&(ce|=1024)),Ce&&t.framebufferRenderbuffer(36008,36064,36161,Y.__webglColorRenderbuffer[we]),be===!0&&(t.invalidateFramebuffer(36008,[Te]),t.invalidateFramebuffer(36009,[Te])),Ce){const Me=i.get(M[we]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Me,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,ce,9728),m&&t.invalidateFramebuffer(36008,de)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ce)for(let we=0;we<M.length;we++){n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,Y.__webglColorRenderbuffer[we]);const be=i.get(M[we]).__webglTexture;n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,be,0)}n.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}}function Be(P){return Math.min(f,P.samples)}function Ue(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(P){const M=o.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function $t(P,M){const B=P.encoding,te=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===wd||B!==Gr&&(B===ot?a===!1?e.has("EXT_sRGB")===!0&&te===ni?(P.format=wd,P.minFilter=Cn,P.generateMipmaps=!1):M=l_.sRGBToLinear(M):(te!==ni||ce!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=I,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=$e,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ue}function p4(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Vr)return 5121;if(s===cM)return 32819;if(s===uM)return 32820;if(s===oM)return 5120;if(s===aM)return 5122;if(s===r_)return 5123;if(s===lM)return 5124;if(s===Cr)return 5125;if(s===Tr)return 5126;if(s===fa)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fM)return 6406;if(s===ni)return 6408;if(s===hM)return 6409;if(s===pM)return 6410;if(s===Rr)return 6402;if(s===to)return 34041;if(s===mM)return 6403;if(s===dM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===wd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gM)return 36244;if(s===vM)return 33319;if(s===_M)return 33320;if(s===xM)return 36249;if(s===Nu||s===Fu||s===Ou||s===Bu)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ou)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nm||s===Fm||s===Om||s===Bm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Nm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Om)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Um||s===Vm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Um)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gm||s===Hm||s===Wm||s===$m||s===jm||s===Xm||s===qm||s===Ym||s===Zm||s===Qm||s===Jm||s===Km||s===eg||s===tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$m)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ym)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Km)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tg)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ng)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ng)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Vs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class m4 extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ll extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g4={type:"move"};class mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i);if(c.joints[h.jointName]===void 0){const v=new ll;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[h.jointName]=v,c.add(v)}const g=c.joints[h.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class v4 extends Zn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rr&&(i=Cr),i===void 0&&u===to&&(i=Vs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1}}class _4 extends lo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const _=n.getContextAttributes();let h=null,p=null;const g=[],v=[],x=new kt;x.layers.enable(1),x.viewport=new Tt;const S=new kt;S.layers.enable(2),S.viewport=new Tt;const w=[x,S],C=new m4;C.layers.enable(1),C.layers.enable(2);let D=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=g[z];return V===void 0&&(V=new mf,g[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=g[z];return V===void 0&&(V=new mf,g[z]=V),V.getGripSpace()},this.getHand=function(z){let V=g[z];return V===void 0&&(V=new mf,g[z]=V),V.getHandSpace()};function T(z){const V=v.indexOf(z.inputSource);if(V===-1)return;const K=g[V];K!==void 0&&K.dispatchEvent({type:z.type,data:z.inputSource})}function R(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",F);for(let z=0;z<g.length;z++){const V=v[z];V!==null&&(v[z]=null,g[z].disconnect(V))}D=null,y=null,e.setRenderTarget(h),d=null,f=null,u=null,r=null,p=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",R),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:d}),p=new Hr(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Vr,encoding:e.outputEncoding})}else{let V=null,K=null,O=null;_.depth&&(O=_.stencil?35056:33190,V=_.stencil?to:Rr,K=_.stencil?Vs:Cr);const G={colorFormat:32856,depthFormat:O,scaleFactor:s};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(G),r.updateRenderState({layers:[f]}),p=new Hr(f.textureWidth,f.textureHeight,{format:ni,type:Vr,depthTexture:new v4(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(z){for(let V=0;V<z.removed.length;V++){const K=z.removed[V],O=v.indexOf(K);O>=0&&(v[O]=null,g[O].dispatchEvent({type:"disconnected",data:K}))}for(let V=0;V<z.added.length;V++){const K=z.added[V];let O=v.indexOf(K);if(O===-1){for(let q=0;q<g.length;q++)if(q>=v.length){v.push(K),O=q;break}else if(v[q]===null){v[q]=K,O=q;break}if(O===-1)break}const G=g[O];G&&G.dispatchEvent({type:"connected",data:K})}}const re=new k,ee=new k;function U(z,V,K){re.setFromMatrixPosition(V.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const O=re.distanceTo(ee),G=V.projectionMatrix.elements,q=K.projectionMatrix.elements,le=G[14]/(G[10]-1),A=G[14]/(G[10]+1),Se=(G[9]+1)/G[5],Z=(G[9]-1)/G[5],ye=(G[8]-1)/G[0],ae=(q[8]+1)/q[0],Ee=le*ye,ue=le*ae,ve=O/(-ye+ae),$e=ve*-ye;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX($e),z.translateZ(ve),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Pe=le+ve,je=A+ve,De=Ee-$e,Be=ue+(O-$e),Ue=Se*A/je*Pe,tt=Z*A/je*Pe;z.projectionMatrix.makePerspective(De,Be,Ue,tt,Pe,je)}function X(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;C.near=S.near=x.near=z.near,C.far=S.far=x.far=z.far,(D!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,y=C.far);const V=z.parent,K=C.cameras;X(C,V);for(let G=0;G<K.length;G++)X(K[G],V);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.position.copy(C.position),z.quaternion.copy(C.quaternion),z.scale.copy(C.scale),z.matrix.copy(C.matrix),z.matrixWorld.copy(C.matrixWorld);const O=z.children;for(let G=0,q=O.length;G<q;G++)O[G].updateMatrixWorld(!0);K.length===2?U(C,x,S):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let $=null;function J(z,V){if(c=V.getViewerPose(l||o),m=V,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let O=!1;K.length!==C.cameras.length&&(C.cameras.length=0,O=!0);for(let G=0;G<K.length;G++){const q=K[G];let le=null;if(d!==null)le=d.getViewport(q);else{const Se=u.getViewSubImage(f,q);le=Se.viewport,G===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let A=w[G];A===void 0&&(A=new kt,A.layers.enable(G),A.viewport=new Tt,w[G]=A),A.matrix.fromArray(q.transform.matrix),A.projectionMatrix.fromArray(q.projectionMatrix),A.viewport.set(le.x,le.y,le.width,le.height),G===0&&C.matrix.copy(A.matrix),O===!0&&C.cameras.push(A)}}for(let K=0;K<g.length;K++){const O=v[K],G=g[K];O!==null&&G!==void 0&&G.update(O,V,l||o)}$&&$(z,V),m=null}const I=new __;I.setAnimationLoop(J),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}}function x4(t,e){function n(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Xn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Xn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Xn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function y4(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function u(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,w,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(35345,x);for(let C=0,D=S.length;C<D;C++){const y=S[C];if(m(y,C,w)===!0){const T=y.value,R=y.__offset;typeof T=="number"?(y.__data[0]=T,t.bufferSubData(35345,R,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),t.bufferSubData(35345,R,y.__data))}}t.bindBuffer(35345,null)}function m(v,x,S){const w=v.value;if(S[x]===void 0)return typeof w=="number"?S[x]=w:S[x]=w.clone(),!0;if(typeof w=="number"){if(S[x]!==w)return S[x]=w,!0}else{const C=S[x];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;let C=0;for(let D=0,y=x.length;D<y;D++){const T=x[D],R=h(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,D>0){C=S%w;const F=w-C;C!==0&&F-R.boundary<0&&(S+=w-C,T.__offset=S)}S+=R.storage}return C=S%w,C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function h(v){const x=v.value,S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function S4(){const t=rc("canvas");return t.style.display="block",t}function Xh(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:S4(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gr,this.physicallyCorrectLights=!1,this.toneMapping=Si,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,g=0,v=0,x=null,S=-1,w=null;const C=new Tt,D=new Tt;let y=null,T=e.width,R=e.height,F=1,re=null,ee=null;const U=new Tt(0,0,T,R),X=new Tt(0,0,T,R);let $=!1;const J=new Wh;let I=!1,z=!1,V=null;const K=new vt,O=new Ie,G=new k,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return x===null?F:1}let A=n;function Se(b,H){for(let j=0;j<b.length;j++){const W=b[j],ne=e.getContext(W,H);if(ne!==null)return ne}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gh}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ye,!1),e.addEventListener("webglcontextcreationerror",_t,!1),A===null){const H=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&H.shift(),A=Se(H,b),A===null)throw Se(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,ye,ae,Ee,ue,ve,$e,Pe,je,De,Be,Ue,tt,$t,P,M,B,te,ce,de,Te,Y,Ce,we;function be(){Z=new Db(A),ye=new bb(A,Z,t),Z.init(ye),Y=new p4(A,Z,ye),ae=new d4(A,Z,ye),Ee=new kb,ue=new JC,ve=new h4(A,Z,ae,ue,ye,Y,Ee),$e=new Tb(h),Pe=new Lb(h),je=new jM(A,ye),Ce=new Mb(A,Z,je,ye),De=new Rb(A,je,Ee,Ce),Be=new Ob(A,De,je,Ee),ce=new Fb(A,ye,ve),M=new Cb(ue),Ue=new QC(h,$e,Pe,Z,ye,Ce,M),tt=new x4(h,ue),$t=new e4,P=new o4(Z,ye),te=new wb(h,$e,ae,Be,u,o),B=new f4(h,Be,ye),we=new y4(A,Ee,ye,ae),de=new Eb(A,Z,Ee,ye),Te=new Ib(A,Z,Ee,ye),Ee.programs=Ue.programs,h.capabilities=ye,h.extensions=Z,h.properties=ue,h.renderLists=$t,h.shadowMap=B,h.state=ae,h.info=Ee}be();const Me=new _4(h,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(T,R,!1))},this.getSize=function(b){return b.set(T,R)},this.setSize=function(b,H,j){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,R=H,e.width=Math.floor(b*F),e.height=Math.floor(H*F),j!==!1&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(T*F,R*F).floor()},this.setDrawingBufferSize=function(b,H,j){T=b,R=H,F=j,e.width=Math.floor(b*j),e.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,H,j,W){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,H,j,W),ae.viewport(C.copy(U).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,H,j,W){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,H,j,W),ae.scissor(D.copy(X).multiplyScalar(F).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){ae.setScissorTest($=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,H=!0,j=!0){let W=0;b&&(W|=16384),H&&(W|=256),j&&(W|=1024),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ye,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),$t.dispose(),P.dispose(),ue.dispose(),$e.dispose(),Pe.dispose(),Be.dispose(),Ce.dispose(),we.dispose(),Ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Xe),Me.removeEventListener("sessionend",At),V&&(V.dispose(),V=null),xt.stop()};function ke(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ye(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ee.autoReset,H=B.enabled,j=B.autoUpdate,W=B.needsUpdate,ne=B.type;be(),Ee.autoReset=b,B.enabled=H,B.autoUpdate=j,B.needsUpdate=W,B.type=ne}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function N(b){const H=b.target;H.removeEventListener("dispose",N),_e(H)}function _e(b){Q(b),ue.remove(b)}function Q(b){const H=ue.get(b).programs;H!==void 0&&(H.forEach(function(j){Ue.releaseProgram(j)}),b.isShaderMaterial&&Ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,W,ne,Le){H===null&&(H=q);const Re=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=Ex(b,H,j,W,ne);ae.setMaterial(W,Re);let ze=j.index;const Qe=j.attributes.position;if(ze===null){if(Qe===void 0||Qe.count===0)return}else if(ze.count===0)return;let Ve=1;W.wireframe===!0&&(ze=De.getWireframeAttribute(j),Ve=2),Ce.setup(ne,W,Ne,j,ze);let qe,pt=de;ze!==null&&(qe=je.get(ze),pt=Te,pt.setIndex(qe));const fr=ze!==null?ze.count:Qe.count,Qr=j.drawRange.start*Ve,Jr=j.drawRange.count*Ve,Qn=Le!==null?Le.start*Ve:0,Ze=Le!==null?Le.count*Ve:1/0,Kr=Math.max(Qr,Qn),St=Math.min(fr,Qr+Jr,Qn+Ze)-1,wn=Math.max(0,St-Kr+1);if(wn!==0){if(ne.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*le()),pt.setMode(1)):pt.setMode(4);else if(ne.isLine){let Li=W.linewidth;Li===void 0&&(Li=1),ae.setLineWidth(Li*le()),ne.isLineSegments?pt.setMode(1):ne.isLineLoop?pt.setMode(2):pt.setMode(3)}else ne.isPoints?pt.setMode(0):ne.isSprite&&pt.setMode(4);if(ne.isInstancedMesh)pt.renderInstances(Kr,wn,ne.count);else if(j.isInstancedBufferGeometry){const Li=Math.min(j.instanceCount,j._maxInstanceCount);pt.renderInstances(Kr,wn,Li)}else pt.render(Kr,wn)}},this.compile=function(b,H){d=P.get(b),d.init(),_.push(d),b.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights(h.physicallyCorrectLights),b.traverse(function(j){const W=j.material;if(W)if(Array.isArray(W))for(let ne=0;ne<W.length;ne++){const Le=W[ne];iu(Le,b,j)}else iu(W,b,j)}),_.pop(),d=null};let me=null;function he(b){me&&me(b)}function Xe(){xt.stop()}function At(){xt.start()}const xt=new __;xt.setAnimationLoop(he),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(b){me=b,Me.setAnimationLoop(b),b===null?xt.stop():xt.start()},Me.addEventListener("sessionstart",Xe),Me.addEventListener("sessionend",At),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(H),H=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,H,x),d=P.get(b,_.length),d.init(),_.push(d),K.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),J.setFromProjectionMatrix(K),z=this.localClippingEnabled,I=M.init(this.clippingPlanes,z,H),f=$t.get(b,m.length),f.init(),m.push(f),Pi(b,H,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,ee),I===!0&&M.beginShadows();const j=d.state.shadowsArray;if(B.render(j,b,H),I===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,b),d.setupLights(h.physicallyCorrectLights),H.isArrayCamera){const W=H.cameras;for(let ne=0,Le=W.length;ne<Le;ne++){const Re=W[ne];ht(f,b,Re,Re.viewport)}}else ht(f,b,H);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(h,b,H),Ce.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Pi(b,H,j,W){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&G.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Re=Be.update(b),Ne=b.material;Ne.visible&&f.push(b,Re,Ne,j,G.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ee.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ee.render.frame),!b.frustumCulled||J.intersectsObject(b))){W&&G.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Re=Be.update(b),Ne=b.material;if(Array.isArray(Ne)){const ze=Re.groups;for(let Qe=0,Ve=ze.length;Qe<Ve;Qe++){const qe=ze[Qe],pt=Ne[qe.materialIndex];pt&&pt.visible&&f.push(b,Re,pt,j,G.z,qe)}}else Ne.visible&&f.push(b,Re,Ne,j,G.z,null)}}const Le=b.children;for(let Re=0,Ne=Le.length;Re<Ne;Re++)Pi(Le[Re],H,j,W)}function ht(b,H,j,W){const ne=b.opaque,Le=b.transmissive,Re=b.transparent;d.setupLightsView(j),Le.length>0&&li(ne,H,j),W&&ae.viewport(C.copy(W)),ne.length>0&&Sn(ne,H,j),Le.length>0&&Sn(Le,H,j),Re.length>0&&Sn(Re,H,j),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function li(b,H,j){const W=ye.isWebGL2;V===null&&(V=new Hr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?fa:Vr,minFilter:eu,samples:W&&s===!0?4:0})),h.getDrawingBufferSize(O),W?V.setSize(O.x,O.y):V.setSize(Md(O.x),Md(O.y));const ne=h.getRenderTarget();h.setRenderTarget(V),h.clear();const Le=h.toneMapping;h.toneMapping=Si,Sn(b,H,j),h.toneMapping=Le,ve.updateMultisampleRenderTarget(V),ve.updateRenderTargetMipmap(V),h.setRenderTarget(ne)}function Sn(b,H,j){const W=H.isScene===!0?H.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const Re=b[ne],Ne=Re.object,ze=Re.geometry,Qe=W===null?Re.material:W,Ve=Re.group;Ne.layers.test(j.layers)&&Mx(Ne,H,j,ze,Qe,Ve)}}function Mx(b,H,j,W,ne,Le){b.onBeforeRender(h,H,j,W,ne,Le),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(h,H,j,W,b,Le),ne.transparent===!0&&ne.side===or?(ne.side=Xn,ne.needsUpdate=!0,h.renderBufferDirect(j,H,W,ne,b,Le),ne.side=ua,ne.needsUpdate=!0,h.renderBufferDirect(j,H,W,ne,b,Le),ne.side=or):h.renderBufferDirect(j,H,W,ne,b,Le),b.onAfterRender(h,H,j,W,ne,Le)}function iu(b,H,j){H.isScene!==!0&&(H=q);const W=ue.get(b),ne=d.state.lights,Le=d.state.shadowsArray,Re=ne.state.version,Ne=Ue.getParameters(b,ne.state,Le,H,j),ze=Ue.getProgramCacheKey(Ne);let Qe=W.programs;W.environment=b.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(b.isMeshStandardMaterial?Pe:$e).get(b.envMap||W.environment),Qe===void 0&&(b.addEventListener("dispose",N),Qe=new Map,W.programs=Qe);let Ve=Qe.get(ze);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Re)return cp(b,Ne),Ve}else Ne.uniforms=Ue.getUniforms(b),b.onBuild(j,Ne,h),b.onBeforeCompile(Ne,h),Ve=Ue.acquireProgram(Ne,ze),Qe.set(ze,Ve),W.uniforms=Ne.uniforms;const qe=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=M.uniform),cp(b,Ne),W.needsLights=Cx(b),W.lightsStateVersion=Re,W.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotShadowMatrix.value=ne.state.spotShadowMatrix,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const pt=Ve.getUniforms(),fr=Al.seqWithValue(pt.seq,qe);return W.currentProgram=Ve,W.uniformsList=fr,Ve}function cp(b,H){const j=ue.get(b);j.outputEncoding=H.outputEncoding,j.instancing=H.instancing,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Ex(b,H,j,W,ne){H.isScene!==!0&&(H=q),ve.resetTextureUnits();const Le=H.fog,Re=W.isMeshStandardMaterial?H.environment:null,Ne=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Gr,ze=(W.isMeshStandardMaterial?Pe:$e).get(W.envMap||Re),Qe=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!W.normalMap&&!!j.attributes.tangent,qe=!!j.morphAttributes.position,pt=!!j.morphAttributes.normal,fr=!!j.morphAttributes.color,Qr=W.toneMapped?h.toneMapping:Si,Jr=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qn=Jr!==void 0?Jr.length:0,Ze=ue.get(W),Kr=d.state.lights;if(I===!0&&(z===!0||b!==w)){const cn=b===w&&W.id===S;M.setState(W,b,cn)}let St=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Kr.state.version||Ze.outputEncoding!==Ne||ne.isInstancedMesh&&Ze.instancing===!1||!ne.isInstancedMesh&&Ze.instancing===!0||ne.isSkinnedMesh&&Ze.skinning===!1||!ne.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==ze||W.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==M.numPlanes||Ze.numIntersection!==M.numIntersection)||Ze.vertexAlphas!==Qe||Ze.vertexTangents!==Ve||Ze.morphTargets!==qe||Ze.morphNormals!==pt||Ze.morphColors!==fr||Ze.toneMapping!==Qr||ye.isWebGL2===!0&&Ze.morphTargetsCount!==Qn)&&(St=!0):(St=!0,Ze.__version=W.version);let wn=Ze.currentProgram;St===!0&&(wn=iu(W,H,ne));let Li=!1,po=!1,ru=!1;const jt=wn.getUniforms(),mo=Ze.uniforms;if(ae.useProgram(wn.program)&&(Li=!0,po=!0,ru=!0),W.id!==S&&(S=W.id,po=!0),Li||w!==b){if(jt.setValue(A,"projectionMatrix",b.projectionMatrix),ye.logarithmicDepthBuffer&&jt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,po=!0,ru=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const cn=jt.map.cameraPosition;cn!==void 0&&cn.setValue(A,G.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&jt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ne.isSkinnedMesh)&&jt.setValue(A,"viewMatrix",b.matrixWorldInverse)}if(ne.isSkinnedMesh){jt.setOptional(A,ne,"bindMatrix"),jt.setOptional(A,ne,"bindMatrixInverse");const cn=ne.skeleton;cn&&(ye.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),jt.setValue(A,"boneTexture",cn.boneTexture,ve),jt.setValue(A,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const su=j.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0&&ye.isWebGL2===!0)&&ce.update(ne,j,W,wn),(po||Ze.receiveShadow!==ne.receiveShadow)&&(Ze.receiveShadow=ne.receiveShadow,jt.setValue(A,"receiveShadow",ne.receiveShadow)),po&&(jt.setValue(A,"toneMappingExposure",h.toneMappingExposure),Ze.needsLights&&bx(mo,ru),Le&&W.fog===!0&&tt.refreshFogUniforms(mo,Le),tt.refreshMaterialUniforms(mo,W,F,R,V),Al.upload(A,Ze.uniformsList,mo,ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Al.upload(A,Ze.uniformsList,mo,ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&jt.setValue(A,"center",ne.center),jt.setValue(A,"modelViewMatrix",ne.modelViewMatrix),jt.setValue(A,"normalMatrix",ne.normalMatrix),jt.setValue(A,"modelMatrix",ne.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let ou=0,Tx=cn.length;ou<Tx;ou++)if(ye.isWebGL2){const up=cn[ou];we.update(up,wn),we.bind(up,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function bx(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Cx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,H,j){ue.get(b.texture).__webglTexture=H,ue.get(b.depthTexture).__webglTexture=j;const W=ue.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const j=ue.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){x=b,g=H,v=j;let W=!0;if(b){const ze=ue.get(b);ze.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),W=!1):ze.__webglFramebuffer===void 0?ve.setupRenderTarget(b):ze.__hasExternalTextures&&ve.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture)}let ne=null,Le=!1,Re=!1;if(b){const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Re=!0);const Qe=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ne=Qe[H],Le=!0):ye.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?ne=ue.get(b).__webglMultisampledFramebuffer:ne=Qe,C.copy(b.viewport),D.copy(b.scissor),y=b.scissorTest}else C.copy(U).multiplyScalar(F).floor(),D.copy(X).multiplyScalar(F).floor(),y=$;if(ae.bindFramebuffer(36160,ne)&&ye.drawBuffers&&W&&ae.drawBuffers(b,ne),ae.viewport(C),ae.scissor(D),ae.setScissorTest(y),Le){const ze=ue.get(b.texture);A.framebufferTexture2D(36160,36064,34069+H,ze.__webglTexture,j)}else if(Re){const ze=ue.get(b.texture),Qe=H||0;A.framebufferTextureLayer(36160,36064,ze.__webglTexture,j||0,Qe)}S=-1},this.readRenderTargetPixels=function(b,H,j,W,ne,Le,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ae.bindFramebuffer(36160,Ne);try{const ze=b.texture,Qe=ze.format,Ve=ze.type;if(Qe!==ni&&Y.convert(Qe)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ve===fa&&(Z.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ve!==Vr&&Y.convert(Ve)!==A.getParameter(35738)&&!(Ve===Tr&&(ye.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-W&&j>=0&&j<=b.height-ne&&A.readPixels(H,j,W,ne,Y.convert(Qe),Y.convert(Ve),Le)}finally{const ze=x!==null?ue.get(x).__webglFramebuffer:null;ae.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(b,H,j=0){const W=Math.pow(2,-j),ne=Math.floor(H.image.width*W),Le=Math.floor(H.image.height*W);ve.setTexture2D(H,0),A.copyTexSubImage2D(3553,j,0,0,b.x,b.y,ne,Le),ae.unbindTexture()},this.copyTextureToTexture=function(b,H,j,W=0){const ne=H.image.width,Le=H.image.height,Re=Y.convert(j.format),Ne=Y.convert(j.type);ve.setTexture2D(j,0),A.pixelStorei(37440,j.flipY),A.pixelStorei(37441,j.premultiplyAlpha),A.pixelStorei(3317,j.unpackAlignment),H.isDataTexture?A.texSubImage2D(3553,W,b.x,b.y,ne,Le,Re,Ne,H.image.data):H.isCompressedTexture?A.compressedTexSubImage2D(3553,W,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Re,H.mipmaps[0].data):A.texSubImage2D(3553,W,b.x,b.y,Re,Ne,H.image),W===0&&j.generateMipmaps&&A.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(b,H,j,W,ne=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,ze=Y.convert(W.format),Qe=Y.convert(W.type);let Ve;if(W.isData3DTexture)ve.setTexture3D(W,0),Ve=32879;else if(W.isDataArrayTexture)ve.setTexture2DArray(W,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,W.flipY),A.pixelStorei(37441,W.premultiplyAlpha),A.pixelStorei(3317,W.unpackAlignment);const qe=A.getParameter(3314),pt=A.getParameter(32878),fr=A.getParameter(3316),Qr=A.getParameter(3315),Jr=A.getParameter(32877),Qn=j.isCompressedTexture?j.mipmaps[0]:j.image;A.pixelStorei(3314,Qn.width),A.pixelStorei(32878,Qn.height),A.pixelStorei(3316,b.min.x),A.pixelStorei(3315,b.min.y),A.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?A.texSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Re,Ne,ze,Qe,Qn.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Re,Ne,ze,Qn.data)):A.texSubImage3D(Ve,ne,H.x,H.y,H.z,Le,Re,Ne,ze,Qe,Qn),A.pixelStorei(3314,qe),A.pixelStorei(32878,pt),A.pixelStorei(3316,fr),A.pixelStorei(3315,Qr),A.pixelStorei(32877,Jr),ne===0&&W.generateMipmaps&&A.generateMipmap(Ve),ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,ae.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class w4 extends Xh{}w4.prototype.isWebGL1Renderer=!0;class E_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class b_ extends uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ug=new k,Vg=new k,Gg=new vt,gf=new f_,cl=new tu;class M4 extends Wt{constructor(e=new Ai,n=new b_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ug.fromBufferAttribute(n,r-1),Vg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ug.distanceTo(Vg);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;Gg.copy(r).invert(),gf.copy(e.ray).applyMatrix4(Gg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,u=new k,f=new k,d=new k,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){const w=_.getX(x),C=_.getX(x+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,C),gf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||n.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),gf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Hg=new k,Wg=new k;class E4 extends M4{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Hg.fromBufferAttribute(n,r),Wg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hg.distanceTo(Wg);e.setAttribute("lineDistance",new qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C_ extends uo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=s_,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T_ extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class A_ extends T_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DefaultUp),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const $g=new vt,jg=new k,Xg=new k;class b4{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;jg.setFromMatrixPosition(e.matrixWorld),n.position.copy(jg),Xg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xg),n.updateMatrixWorld(),$g.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($g),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C4 extends b4{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P_ extends T_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DefaultUp),this.updateMatrix(),this.target=new Wt,this.shadow=new C4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T4 extends E4{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,m=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const h=d===s?i:r;h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3,h.toArray(c,m),m+=3}const u=new Ai;u.setAttribute("position",new qn(l,3)),u.setAttribute("color",new qn(c,3));const f=new b_({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);class A4{constructor(){E(this,"_scene");E(this,"_pcamera");E(this,"_render");E(this,"_viewWidth");E(this,"_viewHeight");E(this,"_box");this._viewWidth=1620,this._viewHeight=969,this.createScene(),this.createPCamera(),this.createLight(),this.addBox(),this.createRender()}get scene(){return this._scene}get camera(){return this._pcamera}get render(){return this._render}createScene(){this._scene=new E_}addBox(){let e=new Zr(5,5,5),n=new C_({color:16711680,side:or});this._box=new ii(e,n),this._scene.add(this._box)}createPCamera(){this._pcamera=new kt(60,this._viewWidth/this._viewHeight,.01,1e3),this._pcamera.position.set(10,10,10),this._pcamera.lookAt(new k(0,0,0))}createLight(){const e=new A_(16777215,209715,.6);e.position.set(0,200,0),this._scene.add(e);let n=new P_(16777215,.6);n.position.set(0,100,100),this._scene.add(n)}createRender(){this._render=new Xh({precision:"highp",antialias:!0,alpha:!0}),this._render.setSize(this._viewWidth,this._viewHeight),this._render.outputEncoding=ot}update(){this._box&&(this._box.rotation.x+=.01,this._box.rotation.y+=.01,this._box.rotation.z+=.01)}}const ms=new k,qg=new vt,Yg=new vt,Zg=new k,Qg=new k;class P4{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.autoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.updateMatrixWorld(),qg.copy(_.matrixWorldInverse),Yg.multiplyMatrices(_.projectionMatrix,qg),c(m,m,_),d(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,o=r/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m,_,h){if(m.isCSS2DObject){ms.setFromMatrixPosition(m.matrixWorld),ms.applyMatrix4(Yg);const p=m.visible===!0&&ms.z>=-1&&ms.z<=1&&m.layers.test(h.layers)===!0;if(m.element.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(n,_,h);const v=m.element;v.style.transform="translate(-50%,-50%) translate("+(ms.x*s+s)+"px,"+(-ms.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(n,_,h)}const g={distanceToCameraSquared:u(h,m)};a.objects.set(m,g)}for(let p=0,g=m.children.length;p<g;p++)c(m.children[p],_,h)}function u(m,_){return Zg.setFromMatrixPosition(m.matrixWorld),Qg.setFromMatrixPosition(_.matrixWorld),Zg.distanceToSquared(Qg)}function f(m){const _=[];return m.traverse(function(h){h.isCSS2DObject&&_.push(h)}),_}function d(m){const _=f(m).sort(function(p,g){if(p.renderOrder!==g.renderOrder)return g.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(g).distanceToCameraSquared;return v-x}),h=_.length;for(let p=0,g=_.length;p<g;p++)_[p].element.style.zIndex=h-p}}}class L4{constructor(e,n,i){E(this,"camera");E(this,"domElement");E(this,"enabled");E(this,"screen");E(this,"rotateSpeed");E(this,"zoomSpeed");E(this,"panSpeed");E(this,"noRotate");E(this,"noZoom");E(this,"noPan");E(this,"staticMoving");E(this,"dynamicDampingFactor");E(this,"minDistance");E(this,"maxDistance");E(this,"keys");E(this,"mouseButtons");E(this,"target");E(this,"target0");E(this,"position0");E(this,"up0");E(this,"zoom0");E(this,"lastZoom");E(this,"EPS");E(this,"lastPosition");E(this,"_eye");E(this,"_movePrev");E(this,"_moveCurr");E(this,"_lastAxis");E(this,"_zoomStart");E(this,"_zoomEnd");E(this,"_panStart");E(this,"_panEnd");E(this,"_pointers");E(this,"_pointerPositions");E(this,"_state");E(this,"_touchZoomDistanceStart");E(this,"_touchZoomDistanceEnd");E(this,"_lastAngle");E(this,"context_menu");E(this,"pointer_down");E(this,"pointer_move");E(this,"pointer_up");E(this,"pointer_cancel");E(this,"mouse_wheel");E(this,"_rendDom");E(this,"_meshCenter");E(this,"_isRY",!0);n===void 0&&console.warn("TrackCameraCtrl: domElement is undefined."),n===document&&console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.'),this._rendDom=i,this.camera=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=3,this.zoomSpeed=3,this.panSpeed=2.5,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!0,this.dynamicDampingFactor=20,this.minDistance=0,this.maxDistance=1e3,this.mouseButtons={LEFT:zu.ROTATE,MIDDLE:zu.DOLLY,RIGHT:zu.PAN},this.target=new k(0,0,0),this.EPS=1e-6,this.lastPosition=new k,this.lastZoom=1,this._lastAngle=0,this._state=mt.NONE,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._eye=new k,this._movePrev=new Ie,this._moveCurr=new Ie,this._lastAxis=new k,this._zoomStart=new Ie,this._zoomEnd=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._pointers=[],this._pointerPositions={},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.up0=this.camera.up.clone(),this.zoom0=this.camera.zoom,this.addEve(),this.handleResize(),this.update()}clearData(){this._rendDom=null,this.camera=null,this.domElement=null,this.screen=null,this.mouseButtons=null,this.target=null,this.lastPosition=null,this._eye=null,this._movePrev=null,this._moveCurr=null,this._lastAxis=null,this._zoomStart=null,this._zoomEnd=null,this._panStart=null,this._panEnd=null,this._pointers=null,this._pointerPositions=null,this.target0=null,this.position0=null,this.up0=null,this.context_menu=null,this.pointer_down=null,this.pointer_move=null,this.pointer_up=null,this.pointer_cancel=null,this.mouse_wheel=null}dispose(){this.removeEve(),this.clearData()}addEve(){console.log("track add eve"),this.context_menu=e=>{this.contextmenu(e)},this.pointer_down=e=>{this.onPointerDown(e)},this.pointer_move=e=>{this.onPointerMove(e)},this.pointer_up=e=>{this.onPointerUp(e)},this.pointer_cancel=e=>{this.onPointerCancel(e)},this.mouse_wheel=e=>{this.onMouseWheel(e)},this.domElement.addEventListener("contextmenu",this.context_menu),this.domElement.addEventListener("pointerdown",this.pointer_down),this.domElement.addEventListener("pointercancel",this.pointer_cancel),this.domElement.addEventListener("wheel",this.mouse_wheel,{passive:!1})}removeEve(){this.domElement.removeEventListener("contextmenu",this.context_menu),this.domElement.removeEventListener("pointerdown",this.pointer_down),this.domElement.removeEventListener("pointercancel",this.pointer_cancel),this.domElement.removeEventListener("wheel",this.mouse_wheel),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up)}handleResize(){this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight}getMouseOnScreen(e,n){let i=new Ie,r=(e-this.screen.left)/this.screen.width,s=(n-this.screen.top)/this.screen.height;return i.set(r,s),i}getMouseOnCircle(e,n){let i=new Ie,r=(e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),s=(this.screen.height+2*(this.screen.top-n))/this.screen.width;return i.set(r,s),i}rotateCamera(){let e=new k,n=new co,i=new k,r=new k,s=new k,o=new k;o.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let a=o.length();if(a){let c=this._moveCurr.clone().sub(this._movePrev.clone()).angle();if(this._isRY=c>Math.PI*.25&&c<Math.PI*.75||c>Math.PI*1.25&&c<Math.PI*1.75,this._eye.copy(this.camera.position).sub(this.target),i.copy(this._eye).normalize(),r.copy(this.camera.up).normalize(),s.crossVectors(r,i).normalize(),this._isRY?(s.setLength(0),r.setLength(this._moveCurr.y-this._movePrev.y)):(s.setLength(this._moveCurr.x-this._movePrev.x),r.setLength(0)),o.copy(r.add(s)),a*=this.rotateSpeed,this._isRY)e.crossVectors(o,this._eye).normalize();else{let u=this.camera.up.clone(),f=new k;u.y>1||u.y<-1?f.set(0,-1,0):f.set(0,1,0),e.copy(f),a=this._moveCurr.x-this._movePrev.x>0?-a:a}n.setFromAxisAngle(e,a),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)),this._lastAxis.copy(e),this._lastAngle=a}else!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.camera.position).sub(this.target),n.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)));this._movePrev.copy(this._moveCurr)}zoomCamera(){let e;this._state===mt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.camera instanceof kt?this._eye.multiplyScalar(e):this.camera instanceof Ls?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.camera instanceof kt?this._eye.multiplyScalar(e):this.camera instanceof Ls?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor),this._eye.length()/165}adjustCameraUp(e){e.y>0?this.camera.up.set(0,1,0):e.y<0?this.camera.up.set(0,-1,0):e.x>0?this.camera.up.set(1,0,0):e.x<0?this.camera.up.set(-1,0,0):e.z>0?this.camera.up.set(0,0,1):e.z<0&&this.camera.up.set(0,0,-1)}panCameraByKey(e=-1){let n=new k,i=new k,r=new k,s=this._eye.length()*this.panSpeed*.01;if(r.x=e===0?s:e===1?-s:0,r.y=e===2?s:e===3?-s:0,r.z=e===4?s:e===5?-s:0,r.x!==0&&n.copy(this._eye).cross(this.camera.up).setLength(r.x),r.y!==0){let o=new k(0,1,0);n.add(i.copy(o).setLength(r.y))}if(r.z!==0){let o=new k(-this._eye.x,0,-this._eye.z);n.add(i.copy(o).setLength(r.z))}this.camera.position.add(n),this.target.add(n),this.update()}panCamera(){let e=new Ie,n=new k,i=new k;if(e.copy(this._panEnd).sub(this._panStart),e.lengthSq()){if(this.camera instanceof Ls){const l=(this.camera.right-this.camera.left)/this.camera.zoom/this._rendDom.clientWidth,c=(this.camera.top-this.camera.bottom)/this.camera.zoom/this._rendDom.clientHeight;e.x*=l*.04,e.y*=c*.04}e.multiplyScalar(this._eye.length()*this.panSpeed);let r=new k(0,1,0),s=this.camera.position.y>=0?-this._eye.x:this._eye.x,o=this.camera.position.y>=0?-this._eye.z:this._eye.z,a=new k(s,0,o);i.copy(this._eye).cross(r).setLength(e.x),i.add(n.copy(a).setLength(e.y)),this.camera.position.add(i),this.target.add(i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(e.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}update(){this._eye.subVectors(this.camera.position,this.target),this.noRotate||this.rotateCamera(),this.noZoom||this.zoomCamera(),this.noPan||this.panCamera(),this.camera.position.addVectors(this.target,this._eye),this.camera instanceof kt?(this.checkDistances(),this.camera.lookAt(this.target),this.lastPosition.distanceToSquared(this.camera.position)>this.EPS&&this.lastPosition.copy(this.camera.position)):this.camera instanceof Ls?(this.camera.lookAt(this.target),(this.lastPosition.distanceToSquared(this.camera.position)>this.EPS||this.lastZoom!==this.camera.zoom)&&(this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom)):console.warn("TrackCameraCtrl: undefine camera type")}reset(){this._state=mt.NONE,this.target.copy(this.target0),this.camera.position.copy(this.position0),this.camera.up.copy(this.up0),this.camera.zoom=this.zoom0,this.camera.updateProjectionMatrix(),this._eye.subVectors(this.camera.position,this.target),this.camera.lookAt(this.target),this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom}onPointerDown(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this.pointer_move),this.domElement.addEventListener("pointerup",this.pointer_up)),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.onMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.onMouseMove(e))}onPointerUp(e){e.pointerType==="touch"?this.onTouchEnd(e):this.onMouseUp(),this.removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up))}onPointerCancel(e){this.removePointer(e)}keyup(){this.enabled!==!1&&(this._state=mt.NONE)}onMouseDown(e){switch(e.button){case this.mouseButtons.LEFT:this._state=mt.ROTATE;break;case this.mouseButtons.MIDDLE:this._state=mt.PAN;break;case this.mouseButtons.RIGHT:this._state=mt.PAN;break;default:this._state=mt.NONE;break}this._state===mt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):this._state===mt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):this._state===mt.PAN&&!this.noPan&&(this._panStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart))}onMouseMove(e){this._state===mt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._meshCenter?this._meshCenter:this.target):this._state===mt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)):this._state===mt.PAN&&!this.noPan&&this._panEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._state!=mt.NONE&&this.update()}zoomCameraByTarget(e){var n=e.clientX/this.screen.width*2-1,i=-(e.clientY/this.screen.height)*2+1;let r=new k(n,i,.5);r.unproject(this.camera);let s=3;r.sub(this.camera.position).setLength(s),e.deltaY<0?(this.camera.position.add(r),this.target.add(r)):(this.camera.position.sub(r),this.target.sub(r))}onMouseUp(){this._state=mt.NONE}onMouseWheel(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.zoomCameraByTarget(e),this.update()}}resetMouse(){}onTouchStart(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._state=mt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this._state=mt.TOUCH_ZOOM_PAN;const n=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(n*n+i*i);const r=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this.getMouseOnScreen(r,s)),this._panEnd.copy(this._panStart);break}}onTouchMove(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY));break;default:const n=this.getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+r*r);const s=(e.pageX+n.x)/2,o=(e.pageY+n.y)/2;this._panEnd.copy(this.getMouseOnScreen(s,o));break}}onTouchEnd(e){switch(this._pointers.length){case 0:this._state=mt.NONE;break;case 1:this._state=mt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this._state=mt.TOUCH_ZOOM_PAN,this._moveCurr.copy(this.getMouseOnCircle(e.pageX-this._movePrev.x,e.pageY-this._movePrev.y)),this._movePrev.copy(this._moveCurr);break}}contextmenu(e){this.enabled!==!1&&e.preventDefault()}addPointer(e){this._pointers.push(e)}removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ie,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}}class D4{constructor(){E(this,"_scene");E(this,"_pcamera");E(this,"_render");E(this,"_css2dReder");E(this,"_trackCtrl");E(this,"_controls");E(this,"_camera");E(this,"_grid");E(this,"_box");this.createScene(),this.createPCamera(),this.createLight(),this.addGrid(),this.addBox(),this.createRender(),this.createCSS2DRender(),this.createControls()}get camera(){return this._camera}get css2dRender(){return this._css2dReder}get controls(){return this._controls}get scene(){return this._scene}get render(){return this._render}createScene(){this._scene=new E_,this._scene.background=new Ge(3355443)}addBox(){let e=new Zr(1,1,1),n=new C_({color:16711680,side:or});this._box=new ii(e,n),this._scene.add(this._box)}createPCamera(){this._pcamera=new kt(60,window.innerWidth/window.innerHeight,.01,1e3),this._pcamera.position.set(5,5,5),this._pcamera.lookAt(new k(0,0,0)),this._camera=this._pcamera}createControls(){this._trackCtrl=new L4(this._camera,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createLight(){const e=new A_(16777215,209715,.6);e.position.set(0,200,0),this._scene.add(e);let n=new P_(16777215,.6);n.position.set(0,100,100),this._scene.add(n)}addGrid(){this._grid=new T4(50,50,2236962,1118481),this._grid.material.opacity=.6,this._grid.material.transparent=!0,this._grid.position.set(0,0,0),this._scene.add(this._grid)}createCSS2DRender(){this._css2dReder=new P4,this._css2dReder.setSize(window.innerWidth,window.innerHeight),this._css2dReder.domElement.style.position="absolute",this._css2dReder.domElement.style.top="0px"}createRender(){this._render=new Xh({precision:"highp",antialias:!0,alpha:!0,logarithmicDepthBuffer:!0}),this._render.setSize(window.innerWidth,window.innerHeight),this._render.setPixelRatio(window.devicePixelRatio),this._render.outputEncoding=ot}onResize(){this._trackCtrl&&(this._trackCtrl.screen.width=window.innerWidth,this._trackCtrl.screen.height=window.innerHeight),this._render.setSize(window.innerWidth,window.innerHeight),this._css2dReder.setSize(window.innerWidth,window.innerHeight),this.camera instanceof kt&&(this._camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}}class R4{constructor(){E(this,"_main");E(this,"_example")}get main(){return this._main}get example(){return this._example}startUp(){console.log("scene mgr start up"),this._main=new D4,this._example=new A4}dispose(){}onResize(){this._main&&this._main.onResize()}mountedMainScene(){nt.container.appendChild(this._main.render.domElement),nt.container.appendChild(this._main.css2dRender.domElement)}mountedExampleScene(){nt.example.appendChild(this._example.render.domElement)}update(){this._example&&this._example.update()}}class I4{constructor(){E(this,"scene",new R4);E(this,"render",new Aw);E(this,"mesh",new Tw);E(this,"event",new Cw);E(this,"test",new bw)}startUp(){this.mesh.startUp(),this.scene.startUp(),this.render.startUp(),this.event.startUp(),this.test.startUp()}dispose(){this.test&&(this.test.dispose(),this.test=null),this.event&&(this.event.dispose(),this.event=null),this.mesh&&(this.mesh.dispose(),this.mesh=null),this.scene&&(this.scene.dispose(),this.scene=null),this.render&&(this.render.dispose(),this.render=null)}}const $o=class{constructor(){E(this,"_serviceFactory");E(this,"_serviceList");this._serviceFactory=new Map,this._serviceList=new Map}static get ins(){return this._ins||(this._ins=new $o),this._ins}static RegSer(e,n){if($o.ins._serviceFactory.has(e))throw new Error("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u6B64\u7C7B\u578B\u7684\u670D\u52A1\u5DE5\u5382\uFF0C\u8BF7\u52FF\u518D\u6B21\u6CE8\u518C");$o.ins._serviceFactory.set(e,n)}getService(e){let n;if(this._serviceList.has(e))n=this._serviceList.get(e);else if(this._serviceFactory.has(e)){let i=this._serviceFactory.get(e);i&&(n=this.initService(i))}return n&&n.inited||console.log("[ServiceManager] \u6709\u4EBA\u62FF\u5230\u4E86\u4E00\u4E2A\u7A7A\u7684\u670D\u52A1\u5BF9\u8C61::",e),n}initService(e){var n=e.createService();return this._serviceList.set(n.type,n),n.serviceInit(),n}removeService(e){if(this._serviceList.has(e)){var n=this._serviceList.get(e);n&&n.dispose(),this._serviceList.delete(e)}}};let tr=$o;E(tr,"_ins");class k4{constructor(){E(this,"_scheme");E(this,"_cad");E(this,"_scene");E(this,"_mesh")}static hasService(e){return tr.ins.getService(e)!=null}tryGetService(e){var n=tr.ins.getService(e);if(!n)throw Error("\u670D\u52A1\u83B7\u53D6\u5931\u8D25:"+e);return n}get cad(){return this._cad==null&&(this._cad=this.tryGetService(sn.CAD_SERVICE)),this._cad}get scheme(){return this._scheme==null&&(this._scheme=this.tryGetService(sn.SCHEME_SERVICE)),this._scheme}get scene(){return this._scene==null&&(this._scene=this.tryGetService(sn.SCENE_SERVICE)),this._scene}get mesh(){return this._mesh==null&&(this._mesh=this.tryGetService(sn.MESH_SERVICE)),this._mesh}}const Sr=class{constructor(e=null,n=null,i=null,r=!1){E(this,"caller");E(this,"method");E(this,"args");E(this,"once",!1);E(this,"_id",0);this.setTo(e,n,i,r)}setTo(e,n,i,r=!1){return this._id=Sr._gid++,this.caller=e,this.method=n,this.args=i,this.once=r,this}run(){if(this.method==null)return null;var e=this._id,n=this.method.apply(this.caller,this.args);return this._id===e&&this.once&&this.recover(),n}runWith(e){if(this.method==null)return null;var n=this._id;if(e==null)var i=this.method.apply(this.caller,this.args);else!this.args&&!e.unshift?i=this.method.call(this.caller,e):this.args?i=this.method.apply(this.caller,this.args.concat(e)):i=this.method.apply(this.caller,e);return this._id===n&&this.once&&this.recover(),i}clear(){return this.caller=null,this.method=null,this.args=null,this}recover(){this._id>0&&(this._id=0,Sr._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Sr._pool.length?Sr._pool.pop().setTo(e,n,i,r):new Sr(e,n,i,r)}};let Io=Sr;E(Io,"_pool",[]),E(Io,"_gid",1);const lp=class{constructor(){E(this,"_events")}hasListener(e){var n=this._events&&this._events[e];return!!n}event(e,n=null){if(!this._events||!this._events[e])return!1;var i=this._events[e];if(i.run)i.once&&delete this._events[e],n!=null?i.runWith(n):i.run();else{for(var r=0,s=i.length;r<s;r++){var o=i[r];o&&(n!=null?o.runWith(n):o.run()),(!o||o.once)&&(i.splice(r,1),r--,s--)}i.length===0&&this._events&&!this._events[e].run&&delete this._events[e]}return!0}on(e,n,i,r=null){return this._createListener(e,n,i,r,!1)}once(e,n,i,r=null){return this._createListener(e,n,i,r,!0)}_createListener(e,n,i,r,s,o=!0){o&&this.off(e,n,i,s);var a=Ll.create(n||this,i,r,s);this._events||(this._events={});var l=this._events;return l[e]?l[e].run?l[e]=[l[e],a]:l[e].push(a):l[e]=a,this}off(e,n,i,r=!1){if(!this._events||!this._events[e])return this;var s=this._events[e];if(s!=null)if(s.run)(!n||s.caller===n)&&(i==null||s.method===i)&&(!r||s.once)&&(delete this._events[e],s.recover());else{for(var o=0,a=0,l=s.length;a<l;a++){var c=s[a];if(!c){o++;continue}c&&(!n||c.caller===n)&&(i==null||c.method===i)&&(!r||c.once)&&(o++,s[a]=null,c.recover())}o===l&&delete this._events[e]}return this}offAll(e=null){var n=this._events;if(!n)return this;if(e)this._recoverHandlers(n[e]),delete n[e];else{for(var i in n)this._recoverHandlers(n[i]);this._events=null}return this}offAllCaller(e){if(e&&this._events)for(var n in this._events)this.off(n,e,null);return this}_recoverHandlers(e){if(!!e)if(e.run)e.recover();else for(var n=e.length-1;n>-1;n--)e[n]&&(e[n].recover(),e[n]=null)}isMouseEvent(e){return lp.MOUSE_EVENTS[e]||!1}};let Pl=lp;E(Pl,"MOUSE_EVENTS",{rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0});const Is=class extends Io{constructor(e,n,i,r){super(e,n,i,r)}recover(){this._id>0&&(this._id=0,Is._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Is._pool.length?Is._pool.pop().setTo(e,n,i,r):new Is(e,n,i,r)}};let Ll=Is;E(Ll,"_pool",[]);const Xt=class{static init(){Xt._addEvent("keydown"),Xt._addEvent("keypress"),Xt._addEvent("keyup")}static _addEvent(e){window.document.addEventListener(e,function(n){Xt.preventDefault(n),Xt._dispatch(n,e)},!1)}static _dispatch(e,n){Xt._event._stoped=!1,Xt._event.nativeEvent=e,Xt._event.keyCode=e.keyCode||e.which||e.charCode,n==="keydown"?Xt._pressKeys[Xt._event.keyCode]=!0:n==="keyup"&&(Xt._pressKeys[Xt._event.keyCode]=null),nt.ED.event(n,e)}static hasKeyDown(e){return Xt._pressKeys[e]}static preventDefault(e){let n=e.ctrlKey;e.keyCode;let i=e.key;n&&(i=="s"||i=="z")&&e.preventDefault()}};let vs=Xt;E(vs,"_pressKeys",{}),E(vs,"enabled",!0),E(vs,"_event",new ge);class qh{constructor(e,n,i){E(this,"_type");E(this,"_serviceClass");E(this,"_syncInit");this._type=e,this._serviceClass=n,this._syncInit=i}get type(){return this._type}createService(){return new this._serviceClass}get asyncInitService(){return this._syncInit}}class Yh{constructor(e){E(this,"_type");E(this,"_firstInit");E(this,"_inited");E(this,"_disposed");this._firstInit=!1,this._inited=!1,this._type=e,this._disposed=!1}get type(){return this._type}serviceInit(){this._firstInit||(this._firstInit=!0,this.onInit())}notifyServiceInited(e=!0){if(this._disposed)throw Error("\u5DF2\u88AB\u9500\u6BC1");e&&(this._inited=!0)}get inited(){return this._inited}dispose(){this.onDispose(),this._disposed=!0}onInit(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u5E76\u5728\u5B8C\u6210\u521D\u59CB\u5316\u540E\u901A\u8FC7 notifyServiceInited \u901A\u77E5\u51FA\u6765")}onDispose(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u7528\u4E8E\u91CA\u653E\u670D\u52A1")}}class z4{dispose(){}}class N4 extends Yh{constructor(){super(sn.CAD_SERVICE);E(this,"_ctrl");this._ctrl=new z4}onDispose(){this._ctrl.dispose()}onInit(){this.notifyServiceInited()}}class F4 extends qh{constructor(){super(sn.CAD_SERVICE,N4)}}class O4{startUp(){console.log("enter draw mesh")}exit(){console.log("exit draw mesh"),this.dispose()}dispose(){}}class B4 extends Yh{constructor(){super(sn.MESH_SERVICE);E(this,"_drawMesh");this._drawMesh=new O4}onDispose(){this._drawMesh&&(this._drawMesh.dispose(),this._drawMesh=null)}onInit(){this.notifyServiceInited()}}class U4 extends qh{constructor(){super(sn.MESH_SERVICE,B4)}}class V4 extends Yh{constructor(){super(sn.CAD_SERVICE)}onDispose(){}onInit(){this.notifyServiceInited()}mountedMainScene(){nt.MGR.scene.mountedMainScene()}mountedPanel(){}mountedExampleScene(){nt.MGR.scene.mountedExampleScene()}}class G4 extends qh{constructor(){super(sn.SCENE_SERVICE,V4)}}class H4{static init(){tr.RegSer(sn.CAD_SERVICE,new F4),tr.RegSer(sn.SCENE_SERVICE,new G4),tr.RegSer(sn.MESH_SERVICE,new U4)}}const jo=class{startUp(){console.log("BIM start up."),H4.init(),vs.init(),jo.MGR.startUp(),window.addEventListener("resize",()=>this.onWindowResize()),this.startRenderLoop()}exit(){console.log("BIM exit.")}startRenderLoop(){jo.MGR.render.render(),requestAnimationFrame(()=>this.startRenderLoop())}onWindowResize(){console.log("windows resize"),jo.MGR.scene.onResize()}};let nt=jo;E(nt,"mode"),E(nt,"container"),E(nt,"example"),E(nt,"uicontainer"),E(nt,"MGR",new I4),E(nt,"SC",new k4),E(nt,"ED",new Pl);function W4(t){function e(O,G,q,le,A){for(var Se=0,Z=0,ye=0,ae=0,Ee,ue,ve=0,$e=0,Pe,je=Pe=Ee=0,De=0,Be=0,Ue=0,tt=0,$t=q.length,P=$t-1,M,B="",te="",ce="",de="",Te;De<$t;){if(ue=q.charCodeAt(De),De===P&&Z+ae+ye+Se!==0&&(Z!==0&&(ue=Z===47?10:47),ae=ye=Se=0,$t++,P++),Z+ae+ye+Se===0){if(De===P&&(0<Be&&(B=B.replace(d,"")),0<B.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:B+=q.charAt(De)}ue=59}switch(ue){case 123:for(B=B.trim(),Ee=B.charCodeAt(0),Pe=1,tt=++De;De<$t;){switch(ue=q.charCodeAt(De)){case 123:Pe++;break;case 125:Pe--;break;case 47:switch(ue=q.charCodeAt(De+1)){case 42:case 47:e:{for(je=De+1;je<P;++je)switch(q.charCodeAt(je)){case 47:if(ue===42&&q.charCodeAt(je-1)===42&&De+2!==je){De=je+1;break e}break;case 10:if(ue===47){De=je+1;break e}}De=je}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;De++<P&&q.charCodeAt(De)!==ue;);}if(Pe===0)break;De++}switch(Pe=q.substring(tt,De),Ee===0&&(Ee=(B=B.replace(f,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<Be&&(B=B.replace(d,"")),ue=B.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Be=G;break;default:Be=$}if(Pe=e(G,Be,Pe,ue,A+1),tt=Pe.length,0<I&&(Be=n($,B,Ue),Te=a(3,Pe,Be,G,ee,re,tt,ue,A,le),B=Be.join(""),Te!==void 0&&(tt=(Pe=Te.trim()).length)===0&&(ue=0,Pe="")),0<tt)switch(ue){case 115:B=B.replace(C,o);case 100:case 109:case 45:Pe=B+"{"+Pe+"}";break;case 107:B=B.replace(v,"$1 $2"),Pe=B+"{"+Pe+"}",Pe=X===1||X===2&&s("@"+Pe,3)?"@-webkit-"+Pe+"@"+Pe:"@"+Pe;break;default:Pe=B+Pe,le===112&&(Pe=(te+=Pe,""))}else Pe="";break;default:Pe=e(G,n(G,B,Ue),Pe,le,A+1)}ce+=Pe,Pe=Ue=Be=je=Ee=0,B="",ue=q.charCodeAt(++De);break;case 125:case 59:if(B=(0<Be?B.replace(d,""):B).trim(),1<(tt=B.length))switch(je===0&&(Ee=B.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(tt=(B=B.replace(" ",":")).length),0<I&&(Te=a(1,B,G,O,ee,re,te.length,le,A,le))!==void 0&&(tt=(B=Te.trim()).length)===0&&(B="\0\0"),Ee=B.charCodeAt(0),ue=B.charCodeAt(1),Ee){case 0:break;case 64:if(ue===105||ue===99){de+=B+q.charAt(De);break}default:B.charCodeAt(tt-1)!==58&&(te+=r(B,Ee,ue,B.charCodeAt(2)))}Ue=Be=je=Ee=0,B="",ue=q.charCodeAt(++De)}}switch(ue){case 13:case 10:Z===47?Z=0:1+Ee===0&&le!==107&&0<B.length&&(Be=1,B+="\0"),0<I*V&&a(0,B,G,O,ee,re,te.length,le,A,le),re=1,ee++;break;case 59:case 125:if(Z+ae+ye+Se===0){re++;break}default:switch(re++,M=q.charAt(De),ue){case 9:case 32:if(ae+Se+Z===0)switch(ve){case 44:case 58:case 9:case 32:M="";break;default:ue!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:ae+Z+Se===0&&(Be=Ue=1,M="\f"+M);break;case 108:if(ae+Z+Se+U===0&&0<je)switch(De-je){case 2:ve===112&&q.charCodeAt(De-3)===58&&(U=ve);case 8:$e===111&&(U=$e)}break;case 58:ae+Z+Se===0&&(je=De);break;case 44:Z+ye+ae+Se===0&&(Be=1,M+="\r");break;case 34:case 39:Z===0&&(ae=ae===ue?0:ae===0?ue:ae);break;case 91:ae+Z+ye===0&&Se++;break;case 93:ae+Z+ye===0&&Se--;break;case 41:ae+Z+Se===0&&ye--;break;case 40:if(ae+Z+Se===0){if(Ee===0)switch(2*ve+3*$e){case 533:break;default:Ee=1}ye++}break;case 64:Z+ye+ae+Se+je+Pe===0&&(Pe=1);break;case 42:case 47:if(!(0<ae+Se+ye))switch(Z){case 0:switch(2*ue+3*q.charCodeAt(De+1)){case 235:Z=47;break;case 220:tt=De,Z=42}break;case 42:ue===47&&ve===42&&tt+2!==De&&(q.charCodeAt(tt+2)===33&&(te+=q.substring(tt,De+1)),M="",Z=0)}}Z===0&&(B+=M)}$e=ve,ve=ue,De++}if(tt=te.length,0<tt){if(Be=G,0<I&&(Te=a(2,te,Be,O,ee,re,tt,le,A,le),Te!==void 0&&(te=Te).length===0))return de+te+ce;if(te=Be.join(",")+"{"+te+"}",X*U!==0){switch(X!==2||s(te,2)||(U=0),U){case 111:te=te.replace(S,":-moz-$1")+te;break;case 112:te=te.replace(x,"::-webkit-input-$1")+te.replace(x,"::-moz-$1")+te.replace(x,":-ms-input-$1")+te}U=0}}return de+te+ce}function n(O,G,q){var le=G.trim().split(p);G=le;var A=le.length,Se=O.length;switch(Se){case 0:case 1:var Z=0;for(O=Se===0?"":O[0]+" ";Z<A;++Z)G[Z]=i(O,G[Z],q).trim();break;default:var ye=Z=0;for(G=[];Z<A;++Z)for(var ae=0;ae<Se;++ae)G[ye++]=i(O[ae]+" ",le[Z],q).trim()}return G}function i(O,G,q){var le=G.charCodeAt(0);switch(33>le&&(le=(G=G.trim()).charCodeAt(0)),le){case 38:return G.replace(g,"$1"+O.trim());case 58:return O.trim()+G.replace(g,"$1"+O.trim());default:if(0<1*q&&0<G.indexOf("\f"))return G.replace(g,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+G}function r(O,G,q,le){var A=O+";",Se=2*G+3*q+4*le;if(Se===944){O=A.indexOf(":",9)+1;var Z=A.substring(O,A.length-1).trim();return Z=A.substring(0,O).trim()+Z+";",X===1||X===2&&s(Z,1)?"-webkit-"+Z+Z:Z}if(X===0||X===2&&!s(A,1))return A;switch(Se){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(F,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return Z=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+A+"-ms-flex-pack"+Z+A;case 1005:return _.test(A)?A.replace(m,":-webkit-")+A.replace(m,":-moz-")+A:A;case 1e3:switch(Z=A.substring(13).trim(),G=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(G)){case 226:Z=A.replace(w,"tb");break;case 232:Z=A.replace(w,"tb-rl");break;case 220:Z=A.replace(w,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+Z+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(G=(A=O).length-10,Z=(A.charCodeAt(G)===33?A.substring(0,G):A).substring(O.indexOf(":",7)+1).trim(),Se=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:A=A.replace(Z,"-webkit-"+Z)+";"+A;break;case 207:case 102:A=A.replace(Z,"-webkit-"+(102<Se?"inline-":"")+"box")+";"+A.replace(Z,"-webkit-"+Z)+";"+A.replace(Z,"-ms-"+Z+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return Z=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+Z+"-ms-flex-"+Z+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(y,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(y,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(R.test(O)===!0)return(Z=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?r(O.replace("stretch","fill-available"),G,q,le).replace(":fill-available",":stretch"):A.replace(Z,"-webkit-"+Z)+A.replace(Z,"-moz-"+Z.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,q+le===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+A}return A}function s(O,G){var q=O.indexOf(G===1?":":"{"),le=O.substring(0,G!==3?q:10);return q=O.substring(q+1,O.length-1),z(G!==2?le:le.replace(T,"$1"),q,G)}function o(O,G){var q=r(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return q!==G+";"?q.replace(D," or ($1)").substring(4):"("+G+")"}function a(O,G,q,le,A,Se,Z,ye,ae,Ee){for(var ue=0,ve=G,$e;ue<I;++ue)switch($e=J[ue].call(u,O,ve,q,le,A,Se,Z,ye,ae,Ee)){case void 0:case!1:case!0:case null:break;default:ve=$e}if(ve!==G)return ve}function l(O){switch(O){case void 0:case null:I=J.length=0;break;default:if(typeof O=="function")J[I++]=O;else if(typeof O=="object")for(var G=0,q=O.length;G<q;++G)l(O[G]);else V=!!O|0}return l}function c(O){return O=O.prefix,O!==void 0&&(z=null,O?typeof O!="function"?X=1:(X=2,z=O):X=0),c}function u(O,G){var q=O;if(33>q.charCodeAt(0)&&(q=q.trim()),K=q,q=[K],0<I){var le=a(-1,G,q,q,ee,re,0,0,0,0);le!==void 0&&typeof le=="string"&&(G=le)}var A=e($,q,G,0,0);return 0<I&&(le=a(-2,A,q,q,ee,re,A.length,0,0,0),le!==void 0&&(A=le)),K="",U=0,re=ee=1,A}var f=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,_=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,y=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,F=/([^-])(image-set\()/,re=1,ee=1,U=0,X=1,$=[],J=[],I=0,z=null,V=0,K="";return u.use=l,u.set=c,t!==void 0&&c(t),u}var $4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function j4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var X4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Jg=j4(function(t){return X4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Hn(){return(Hn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var Kg=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},bd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Nh.exports.typeOf(t)},sc=Object.freeze([]),nr=Object.freeze({});function io(t){return typeof t=="function"}function e0(t){return t.displayName||t.name||"Component"}function Zh(t){return t&&typeof t.styledComponentId=="string"}var ro=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Qh=typeof window<"u"&&"HTMLElement"in window,q4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),Y4={};function $r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z4=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&$r(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=i.length;c<u;c++)this.tag.insertRule(l,i[c])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),Dl=new Map,oc=new Map,Wo=1,ul=function(t){if(Dl.has(t))return Dl.get(t);for(;oc.has(Wo);)Wo++;var e=Wo++;return Dl.set(t,e),oc.set(e,t),e},Q4=function(t){return oc.get(t)},J4=function(t,e){e>=Wo&&(Wo=e+1),Dl.set(t,e),oc.set(e,t)},K4="style["+ro+'][data-styled-version="5.3.5"]',eT=new RegExp("^"+ro+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),tT=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},nT=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(eT);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(J4(c,l),tT(t,c,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},iT=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},L_=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(ro))return u}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(ro,"active"),i.setAttribute("data-styled-version","5.3.5");var o=iT();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},rT=function(){function t(n){var i=this.element=L_(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}$r(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),sT=function(){function t(n){var i=this.element=L_(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),oT=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),t0=Qh,aT={isServer:!Qh,useCSSOMInjection:!q4},ac=function(){function t(n,i,r){n===void 0&&(n=nr),i===void 0&&(i={}),this.options=Hn({},aT,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&Qh&&t0&&(t0=!1,function(s){for(var o=document.querySelectorAll(K4),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(ro)!=="active"&&(nT(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return ul(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(Hn({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new oT(o):s?new rT(o):new sT(o),new Z4(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(ul(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(ul(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(ul(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=Q4(o);if(a!==void 0){var l=n.names.get(a),c=i.getGroup(o);if(l&&c&&l.size){var u=ro+".g"+o+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),lT=/(a)(d)/gi,n0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Cd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=n0(e%52)+n;return(n0(e%52)+n).replace(lT,"$1-$2")}var Rs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},D_=function(t){return Rs(5381,t)};function R_(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(io(n)&&!Zh(n))return!1}return!0}var cT=D_("5.3.5"),uT=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&R_(e),this.componentId=n,this.baseHash=Rs(cT,n),this.baseStyle=i,ac.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=jr(this.rules,e,n,i).join(""),a=Cd(Rs(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=Rs(this.baseHash,i.hash),f="",d=0;d<c;d++){var m=this.rules[d];if(typeof m=="string")f+=m;else if(m){var _=jr(m,e,n,i),h=Array.isArray(_)?_.join(""):_;u=Rs(u,h+d),f+=h}}if(f){var p=Cd(u>>>0);if(!n.hasNameForId(r,p)){var g=i(f,"."+p,void 0,r);n.insertRules(r,p,g)}s.push(p)}}return s.join(" ")},t}(),fT=/^\s*\/\/.*$/gm,dT=[":","[",".","#"];function hT(t){var e,n,i,r,s=t===void 0?nr:t,o=s.options,a=o===void 0?nr:o,l=s.plugins,c=l===void 0?sc:l,u=new W4(a),f=[],d=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,v,x,S,w,C,D,y,T,R){switch(g){case 1:if(T===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(y===0)return v+"/*|*/";break;case 3:switch(y){case 102:case 112:return h(x[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(p)}}}(function(h){f.push(h)}),m=function(h,p,g){return p===0&&dT.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function _(h,p,g,v){v===void 0&&(v="&");var x=h.replace(fT,""),S=p&&g?g+" "+p+" { "+x+" }":x;return e=v,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),u(g||!p?"":p,S)}return u.use([].concat(c,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,m))},d,function(h){if(h===-2){var p=f;return f=[],p}}])),_.hash=c.length?c.reduce(function(h,p){return p.name||$r(15),Rs(h,p.name)},5381).toString():"",_}var I_=Wn.createContext();I_.Consumer;var k_=Wn.createContext(),pT=(k_.Consumer,new ac),Td=hT();function z_(){return pe.exports.useContext(I_)||pT}function N_(){return pe.exports.useContext(k_)||Td}var mT=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Td);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return $r(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Td),this.name+e.hash},t}(),gT=/([A-Z])/,vT=/([A-Z])/g,_T=/^ms-/,xT=function(t){return"-"+t.toLowerCase()};function i0(t){return gT.test(t)?t.replace(vT,xT).replace(_T,"-ms-"):t}var r0=function(t){return t==null||t===!1||t===""};function jr(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=jr(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(r0(t))return"";if(Zh(t))return"."+t.styledComponentId;if(io(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var l=t(e);return jr(l,e,n,i)}var c;return t instanceof mT?n?(t.inject(n,i),t.getName(i)):t:bd(t)?function u(f,d){var m,_,h=[];for(var p in f)f.hasOwnProperty(p)&&!r0(f[p])&&(Array.isArray(f[p])&&f[p].isCss||io(f[p])?h.push(i0(p)+":",f[p],";"):bd(f[p])?h.push.apply(h,u(f[p],p)):h.push(i0(p)+": "+(m=p,(_=f[p])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||m in $4?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(h,["}"]):h}(t):t.toString()}var s0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function F_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return io(t)||bd(t)?s0(jr(Kg(sc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:s0(jr(Kg(t,n)))}var O_=function(t,e,n){return n===void 0&&(n=nr),t.theme!==n.theme&&t.theme||e||n.theme},yT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ST=/(^-|-$)/g;function vf(t){return t.replace(yT,"-").replace(ST,"")}var B_=function(t){return Cd(D_(t)>>>0)};function fl(t){return typeof t=="string"&&!0}var Ad=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},wT=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function MT(t,e,n){var i=t[n];Ad(e)&&Ad(i)?U_(i,e):t[n]=e}function U_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(Ad(o))for(var a in o)wT(a)&&MT(t,o[a],a)}return t}var da=Wn.createContext();da.Consumer;function ET(t){var e=pe.exports.useContext(da),n=pe.exports.useMemo(function(){return function(i,r){if(!i)return $r(14);if(io(i)){var s=i(r);return s}return Array.isArray(i)||typeof i!="object"?$r(8):r?Hn({},r,{},i):i}(t.theme,e)},[t.theme,e]);return t.children?Wn.createElement(da.Provider,{value:n},t.children):null}var _f={};function V_(t,e,n){var i=Zh(t),r=!fl(t),s=e.attrs,o=s===void 0?sc:s,a=e.componentId,l=a===void 0?function(v,x){var S=typeof v!="string"?"sc":vf(v);_f[S]=(_f[S]||0)+1;var w=S+"-"+B_("5.3.5"+S+_f[S]);return x?x+"-"+w:w}(e.displayName,e.parentComponentId):a,c=e.displayName,u=c===void 0?function(v){return fl(v)?"styled."+v:"Styled("+e0(v)+")"}(t):c,f=e.displayName&&e.componentId?vf(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;i&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(v,x,S){return t.shouldForwardProp(v,x,S)&&e.shouldForwardProp(v,x,S)}:t.shouldForwardProp);var _,h=new uT(n,f,i?t.componentStyle:void 0),p=h.isStatic&&o.length===0,g=function(v,x){return function(S,w,C,D){var y=S.attrs,T=S.componentStyle,R=S.defaultProps,F=S.foldedComponentIds,re=S.shouldForwardProp,ee=S.styledComponentId,U=S.target,X=function(le,A,Se){le===void 0&&(le=nr);var Z=Hn({},A,{theme:le}),ye={};return Se.forEach(function(ae){var Ee,ue,ve,$e=ae;for(Ee in io($e)&&($e=$e(Z)),$e)Z[Ee]=ye[Ee]=Ee==="className"?(ue=ye[Ee],ve=$e[Ee],ue&&ve?ue+" "+ve:ue||ve):$e[Ee]}),[Z,ye]}(O_(w,pe.exports.useContext(da),R)||nr,w,y),$=X[0],J=X[1],I=function(le,A,Se,Z){var ye=z_(),ae=N_(),Ee=A?le.generateAndInjectStyles(nr,ye,ae):le.generateAndInjectStyles(Se,ye,ae);return Ee}(T,D,$),z=C,V=J.$as||w.$as||J.as||w.as||U,K=fl(V),O=J!==w?Hn({},w,{},J):w,G={};for(var q in O)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?G.as=O[q]:(re?re(q,Jg,V):!K||Jg(q))&&(G[q]=O[q]));return w.style&&J.style!==w.style&&(G.style=Hn({},w.style,{},J.style)),G.className=Array.prototype.concat(F,ee,I!==ee?I:null,w.className,J.className).filter(Boolean).join(" "),G.ref=z,pe.exports.createElement(V,G)}(_,v,x,p)};return g.displayName=u,(_=Wn.forwardRef(g)).attrs=d,_.componentStyle=h,_.displayName=u,_.shouldForwardProp=m,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):sc,_.styledComponentId=f,_.target=i?t.target:t,_.withComponent=function(v){var x=e.componentId,S=function(C,D){if(C==null)return{};var y,T,R={},F=Object.keys(C);for(T=0;T<F.length;T++)y=F[T],D.indexOf(y)>=0||(R[y]=C[y]);return R}(e,["componentId"]),w=x&&x+"-"+(fl(v)?v:vf(e0(v)));return V_(v,Hn({},S,{attrs:d,componentId:w}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?U_({},t.defaultProps,v):v}}),_.toString=function(){return"."+_.styledComponentId},r&&I2(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var Pd=function(t){return function e(n,i,r){if(r===void 0&&(r=nr),!Nh.exports.isValidElementType(i))return $r(1,String(i));var s=function(){return n(i,r,F_.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,Hn({},r,{},o))},s.attrs=function(o){return e(n,i,Hn({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(V_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Pd[t]=Pd(t)});var bT=function(){function t(n,i){this.rules=n,this.componentId=i,this.isStatic=R_(n),ac.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,i,r,s){var o=s(jr(this.rules,i,r,s).join(""),""),a=this.componentId+n;r.insertRules(a,a,o)},e.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.renderStyles=function(n,i,r,s){n>2&&ac.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,i,r,s)},t}();function CT(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=F_.apply(void 0,[t].concat(n)),s="sc-global-"+B_(JSON.stringify(r)),o=new bT(r,s);function a(c){var u=z_(),f=N_(),d=pe.exports.useContext(da),m=pe.exports.useRef(u.allocateGSInstance(s)).current;return u.server&&l(m,c,u,d,f),pe.exports.useLayoutEffect(function(){if(!u.server)return l(m,c,u,d,f),function(){return o.removeStyles(m,u)}},[m,c,u,d,f]),null}function l(c,u,f,d,m){if(o.isStatic)o.renderStyles(c,Y4,f,m);else{var _=Hn({},u,{theme:O_(u,d,a.defaultProps)});o.renderStyles(c,_,f,m)}}return Wn.memo(a)}const oe=Pd,TT=oe.div`
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
`,AT=t=>{const e=n=>{let i=n.target.innerText;console.log("\u70B9\u51FB\u4E86"+i),nt.ED.event(ic.LEFT_MENU_ITEM_CLICK,[i])};return L(We,{children:Ae(TT,{onClick:n=>e(n),children:[t.icon,t.label]})})};function G_(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PT(t,e){if(t==null)return{};var n=y2(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function LT(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var DT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,RT=LT(function(t){return DT.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function o0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function IT(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o0(Object(n),!0).forEach(function(i){G_(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function kT(t){return RT(t)}function zT(t){return Object.keys(t).reduce(function(e,n){return kT(n)&&(e[n]=t[n]),e},{})}var NT=pe.exports.forwardRef(function(t,e){var n=t.children,i=t.iconAttrs;t.iconVerticalAlign;var r=t.iconViewBox,s=t.size,o=t.title,a=PT(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),l=IT({viewBox:r,height:t.height!==void 0?t.height:s,width:t.width!==void 0?t.width:s,"aria-hidden":o==null?"true":void 0,focusable:"false",role:o!=null?"img":void 0},i),c=zT(a);return Ae("svg",{...l,...c,ref:e,children:[o&&L("title",{children:o},"icon-title"),n]})}),dt=oe(NT).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],function(t){return t.iconVerticalAlign}),Jh=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{fill:"none",d:"M0 0h24v24H0z"}),L("path",{d:"M3 19V5.7a1 1 0 01.658-.94l9.671-3.516a.5.5 0 01.671.47v4.953l6.316 2.105a1 1 0 01.684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"})]})});Jh.displayName="Building2";const FT=oe.div`
  width: 220px;
  height: 100%;
  background-color: rgb(38,38,38);
  border-radius: 0 5px 5px 0;
`,OT=oe.div`
  display: flex;
  /* justify-content: center; */
  flex-flow: row wrap;
  width: 100%;
  /* margin: 10px; */
  
`,en=oe(Jh)`
    color: white;

`,BT=[{id:"bim1",label:"\u753B\u5899",icon:L(en,{size:"16"})},{id:"bim2",label:"\u5F27\u5899",icon:L(en,{size:"16"})},{id:"bim3",label:"\u5F02\u5F62\u5899",icon:L(en,{size:"16"})},{id:"bim4",label:"\u6A2A\u6881",icon:L(en,{size:"16"})},{id:"bim5",label:"\u697C\u677F",icon:L(en,{size:"16"})},{id:"bim6",label:"\u5F02\u5F62\u697C\u677F",icon:L(en,{size:"16"})},{id:"bim7",label:"\u65B9\u5F62\u67F1",icon:L(en,{size:"16"})},{id:"bim8",label:"\u5706\u67F1\u67F1",icon:L(en,{size:"16"})},{id:"bim9",label:"\u5F02\u5F62\u67F1",icon:L(en,{size:"16"})},{id:"bim10",label:"\u5355\u8DD1\u697C\u68AF",icon:L(en,{size:"16"})},{id:"bim11",label:"\u53CC\u8DD1\u697C\u68AF",icon:L(en,{size:"16"})},{id:"bim12",label:"\u526A\u5200\u697C\u68AF",icon:L(en,{size:"16"})},{id:"bim13",label:"\u5899\u6D1E",icon:L(en,{size:"16"})},{id:"bim14",label:"\u677F\u6D1E",icon:L(en,{size:"16"})}],UT=()=>L(We,{children:L(FT,{children:L(OT,{children:BT.map(t=>L(AT,{icon:t.icon,label:t.label},t.id))})})});var H_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.45 21 6.25 21h4.91l.36-1.42.02-.08H6.25c-.2 0-.4-.04-.58-.1l5.8-5.69.09-.07c.29-.2.7-.19.96.07l2.08 2.04 1.06-1.06-2.09-2.05-.13-.11a2.25 2.25 0 0 0-3.01.11l-5.83 5.7c-.06-.18-.1-.38-.1-.6V6.26c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25zm-3.5 2.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zm4.6 3.92-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24z"})})});H_.displayName="ImageEdit";var W_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 48 48",...t,ref:e,children:L("path",{d:"M32 24a10 10 0 1 0-8.55-4.8l-5.38 3.58a8 8 0 1 0 .44 9.87l7.68 3.84a6.01 6.01 0 1 0 1.12-2.23l-7.68-3.84a8 8 0 0 0-.25-5.5l5.64-3.76A9.97 9.97 0 0 0 32 24zm0-2.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-20 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zM35.5 38a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"})})});W_.displayName="Molecule";var $_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M16.5 8a4.25 4.25 0 0 0 0 8.5h.5v4.75a.75.75 0 0 0 1.5 0V9.5h1v11.75a.75.75 0 0 0 1.5 0V9.5h.25a.75.75 0 0 0 0-1.5H16.5zm0 1.5h.5V15h-.5a2.75 2.75 0 1 1 0-5.5zM2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75zM2.75 10a.75.75 0 0 0 0 1.5h8.55c.08-.53.23-1.03.46-1.5H2.75zM12.03 15H2.75a.75.75 0 0 0 0 1.5h10.67a5.28 5.28 0 0 1-1.4-1.5z"})})});$_.displayName="TextParagraph";const VT=oe.div`
    width: 48px;
    height: 100%;
    background-color: rgb(18,18,18);
`,GT=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    color: white;
    font-size: 12px;
    &:hover{
        background-color:rgb(242, 112, 19);
    }
`,HT=oe(Jh)`
    color: white;

`,WT=oe(H_)`
    color: white;

`,$T=oe(W_)`
    color: white;

`,jT=oe($_)`
    color: white;

`,XT=[{id:"sd1",label:"\u7ED3\u6784",icon:L(HT,{size:"20"})},{id:"sd2",label:"\u6750\u8D28",icon:L(WT,{size:"20"})},{id:"sd3",label:"\u6A21\u578B",icon:L($T,{size:"20"})},{id:"sd4",label:"\u56FE\u7EB8",icon:L(jT,{size:"20"})}],qT=()=>{const t=e=>{console.log("dd")};return L(We,{children:L(VT,{children:XT.map(e=>Ae(GT,{onClick:n=>t(),children:[e.icon,e.label]},e.id))})})},YT=oe.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,ZT=()=>L(We,{children:Ae(YT,{children:[L(qT,{}),L(UT,{})]})}),QT=oe.div`
    position: relative;
    top: 0;
    left: 0;
    width: 240px;
    height: 250px;
    background-color: rgb(54,54,54);
`,JT=()=>L(We,{children:L(QT,{})}),KT=oe.div`
    width: 100%;
    height: 40px;
    background-color: rgb(54,54,54);
    border-radius: 5px;
`,e5=oe.span`
    margin-left: 10px;
    width: 100%;
    color:white;
    font-size: 15px;
    line-height: 40px;
    background-color: rgb(54,54,54);
`,t5=t=>L(We,{children:L(KT,{children:L(e5,{children:t.label})})}),n5=oe.div`
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
`,i5=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`,r5=()=>L(We,{children:L(n5,{children:L(i5,{children:L(t5,{label:"\u5C5E\u6027"})})})}),s5=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,o5=()=>L(We,{children:Ae(s5,{children:[L(JT,{}),L(r5,{})]})});var j_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"})})});j_.displayName="Sketch";const a5=oe.div`
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
    
`,l5=oe(j_)`
  color: rgb(242, 112, 19);
  margin: 0 5px;
`,Kh=t=>L(We,{children:Ae(a5,{...t,children:[L(l5,{title:"Sketch Icon",size:"32"}),L("span",{children:"Bim3dEditor"})]})}),c5=oe.div`
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
`,u5=oe.li`
    width: 100%;
    height: 40px;
    margin: 0;
    left: 0;
    top: 0;
    &:hover {
        color: #fff;
        background-color: rgb(242, 112, 19);
    }
`,f5=oe.span`
    padding-left: 10px;
`,X_=t=>L(We,{children:L(c5,{pleft:t.pleft,children:L("ul",{children:t.menus.map(e=>L(u5,{children:L(f5,{children:e.label})},e.key))})})});var q_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"M11 16h2V7h3l-4-5-4 5h3z"}),L("path",{d:"M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"})]})});q_.displayName="Export";var Y_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"m12 18 4-5h-3V2h-2v11H8z"}),L("path",{d:"M19 9h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2z"})]})});Y_.displayName="Import";var Z_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.41.34-.75.75-.75zM4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75zM8.28 7.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 1 0 1.06-1.06l-6.5-6.5z"})})});Z_.displayName="New";var Q_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("rect",{width:24,height:24,fill:"none"}),L("path",{d:"M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})]})});Q_.displayName="Clear";var J_=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{fill:"none",d:"M0 0h24v24H0z"}),L("path",{d:"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 010 1.414l-14.85 14.85a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 010-1.414l14.85-14.85a1 1 0 011.414 0z"})]})});J_.displayName="Ruler";const d5=oe.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`,h5=oe.div`
    
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
   
`,p5=oe(Z_)`
    color: #fff;
    margin: 2px 0px;
`,m5=oe(Y_)`
    color: #fff;
    margin: 2px 0px;
`,g5=oe(q_)`
    color: #fff;
    margin: 2px 0px;
`,v5=oe(J_)`
    color: #fff;
    margin: 2px 0px;
`,_5=oe(Q_)`
    color: #fff;
    margin: 2px 0px;
`,x5=[{id:"0",label:"\u573A\u666F",icon:L(p5,{size:"16"}),menus:[{key:"doc1",label:"\u65B0\u5EFA\u573A\u666F"},{key:"doc2",label:"\u6253\u5F00\u573A\u666F"},{key:"doc3",label:"\u5386\u53F2\u8BB0\u5F55"},{key:"doc4",label:"\u7F16\u8F91\u573A\u666F"}]},{id:"1",label:"\u5BFC\u5165",icon:L(m5,{size:"16"}),menus:[{key:"export1",label:"\u5BFC\u5165\u6A21\u578B"},{key:"export2",label:"\u5BFC\u5165CAD"}]},{id:"2",label:"\u5BFC\u51FA",icon:L(g5,{size:"16"})},{id:"3",label:"\u6D4B\u91CF",icon:L(v5,{size:"16"})},{id:"4",label:"\u6E05\u7A7A",icon:L(_5,{size:"16"}),menus:[{key:"clear1",label:"\u5E95\u56FE"},{key:"clear2",label:"\u6A21\u578B"},{key:"clear3",label:"\u5168\u90E8"}]}],y5=()=>{const t=e=>{let n=e.target.innerText;console.log(n)};return L(We,{children:L(d5,{children:x5.map(e=>{var n;return Ae(h5,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:i=>t(i),children:[e.icon,e.label,e.menus&&L(X_,{menus:e.menus,pleft:"74px"})]},e.id)})})})};var K_=pe.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("circle",{cx:12,cy:12,r:3}),L("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})});K_.displayName="Settings";var ex=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[L("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:40,d:"M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"}),L("circle",{cx:248,cy:399.99,r:32})]})});ex.displayName="Help";var tx=pe.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),L("circle",{cx:9,cy:7,r:4}),L("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})});tx.displayName="Users";const S5=oe.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin-right: 40px;
`,w5=oe.div`
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
`,M5=oe(K_)`
    color: #fff;
    margin: 2px 0px;
`,E5=oe(ex)`
    color: #fff;
    margin: 2px 0px;
`,b5=oe(tx)`
    color: #fff;
    margin: 2px 0px;
`,C5=[{id:"0",label:"\u8BBE\u7F6E",icon:L(M5,{size:"16"})},{id:"1",label:"\u5E2E\u52A9",icon:L(E5,{size:"16"})},{id:"2",label:"\u7528\u6237\u4FE1\u606F",icon:L(b5,{size:"16"}),menus:[{key:"user1",label:"\u4E2A\u4EBA\u4E3B\u9875"},{key:"user2",label:"\u7F51\u7AD9\u4E3B\u9875"},{key:"user3",label:"\u6350\u8D60\u4FE1\u606F"},{key:"user4",label:"\u9000\u51FA\u767B\u5F55"}]}],T5=()=>{const t=e=>{let n=e.target.innerHTML;console.log(n)};return L(We,{children:L(S5,{children:C5.map(e=>{var n;return Ae(w5,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:i=>t(i),children:[e.icon,e.label,e.menus&&L(X_,{menus:e.menus,pleft:"-50px"})]},e.id)})})})},A5=oe.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  background-color: rgb(18,18,18);
`,P5=()=>L(We,{children:Ae(A5,{children:[L(Kh,{primary:!1}),L(y5,{}),L(T5,{})]})}),L5=oe.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    cursor: pointer;
`,D5=oe.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 288px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,R5=oe.div`
    position: absolute;
    top: 48px;
    right: 0px;
    width: 240px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,I5=()=>Ae(We,{children:[L(L5,{children:L(P5,{})}),L(D5,{children:L(ZT,{})}),L(R5,{children:L(o5,{})})]});oe.div`
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    /* width: 100vh; */
    /* height: 100vh; */
    &::-webkit-scrollbar{
        display: none;
    }
`;class k5 extends Wn.Component{constructor(){super(...arguments);E(this,"container",Wn.createRef());E(this,"editorview",Wn.createRef())}componentDidMount(){console.log("editor mount"),this.container&&(nt.container=this.container.current,nt.SC.scene.mountedMainScene()),this.editorview&&(nt.uicontainer=this.editorview.current)}componentWillUnmount(){console.log("editor unmount")}render(){return Ae(We,{children:[L("div",{id:"bim",ref:this.container}),L(I5,{})]})}}const z5=oe.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    width: 260px;
    overflow: auto;
`,N5=oe.span`
    padding: 8px 0;
    color:#333;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    &:hover{
        background-color: #f5f4f4;
    }
`,F5=[{id:"example1",lable:"\u6D4B\u8BD5\u4E00"},{id:"example2",lable:"\u6D4B\u8BD5\u4E8C"},{id:"example3",lable:"\u6D4B\u8BD5\u4E09"},{id:"example4",lable:"\u6D4B\u8BD5\u56DB"},{id:"example5",lable:"\u6D4B\u8BD5\u4E94"},{id:"example6",lable:"\u6D4B\u8BD5\u516D"},{id:"example7",lable:"\u6D4B\u8BD5"},{id:"example8",lable:"\u6D4B\u8BD5"},{id:"example9",lable:"\u6D4B\u8BD5"},{id:"example10",lable:"\u6D4B\u8BD5"},{id:"example11",lable:"\u6D4B\u8BD5"},{id:"example12",lable:"\u6D4B\u8BD5"},{id:"example13",lable:"\u6D4B\u8BD5"},{id:"example14",lable:"\u6D4B\u8BD5"},{id:"example15",lable:"\u6D4B\u8BD5"},{id:"example16",lable:"\u6D4B\u8BD5"},{id:"example17",lable:"\u6D4B\u8BD5"},{id:"example18",lable:"\u6D4B\u8BD5"},{id:"example19",lable:"\u6D4B\u8BD5"},{id:"example20",lable:"\u6D4B\u8BD5"},{id:"example21",lable:"\u6D4B\u8BD5"},{id:"example22",lable:"\u6D4B\u8BD5"},{id:"example23",lable:"\u6D4B\u8BD5"},{id:"example24",lable:"\u6D4B\u8BD5"},{id:"example25",lable:"\u6D4B\u8BD5"},{id:"example26",lable:"\u6D4B\u8BD5"},{id:"example27",lable:"\u6D4B\u8BD5"},{id:"example28",lable:"\u6D4B\u8BD5"}],O5=()=>{const t=e=>{let n=e.target.innerText;console.log("example item click:",n)};return L(We,{children:L(z5,{children:F5.map(e=>L(N5,{onClick:n=>t(n),children:e.lable},e.id))})})},B5=oe.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
    margin: 20px 0;
    /* background-color: yellow; */
`,nx=oe.span`
    color: #333;
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
    padding-left: 20px;
`,U5=oe(nx)`
    font-weight: 100;
    margin: 16px 0 0 16px;
`,V5=()=>L(We,{children:Ae(B5,{children:[L(nx,{children:"Bim3dEditor"}),L(U5,{children:"Example"})]})}),G5=oe.div`
    width: 300px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`,H5=()=>L(We,{children:Ae(G5,{children:[L(V5,{}),L(O5,{})]})}),W5=oe.div`
    width: calc(100vw - 300px);
    height: 100%;
`,$5=()=>{const t=pe.exports.useRef(null);return pe.exports.useEffect(()=>(t&&(nt.example=t.current,nt.SC.scene.mountedExampleScene()),()=>{console.log("example unmount")})),L(We,{children:L(W5,{ref:t})})},j5=oe.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`,X5=()=>L(We,{children:Ae(j5,{children:[L(H5,{}),L($5,{})]})}),q5=oe.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 50vh;
    z-index: 1;

`,Y5=()=>L(We,{children:L(q5,{})});var Gs=(t=>(t.Light="light",t.Dark="dark",t))(Gs||{});function Gn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ar(t){return!!t&&!!t[at]}function Ci(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===rA}(t)||Array.isArray(t)||!!t[h0]||!!t.constructor[h0]||ep(t)||tp(t))}function Xr(t,e,n){n===void 0&&(n=!1),ho(t)===0?(n?Object.keys:Ws)(t).forEach(function(i){n&&typeof i=="symbol"||e(i,t[i],t)}):t.forEach(function(i,r){return e(r,i,t)})}function ho(t){var e=t[at];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:ep(t)?2:tp(t)?3:0}function Hs(t,e){return ho(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Z5(t,e){return ho(t)===2?t.get(e):t[e]}function ix(t,e,n){var i=ho(t);i===2?t.set(e,n):i===3?(t.delete(e),t.add(n)):t[e]=n}function rx(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function ep(t){return nA&&t instanceof Map}function tp(t){return iA&&t instanceof Set}function xr(t){return t.o||t.t}function np(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=ox(t);delete e[at];for(var n=Ws(e),i=0;i<n.length;i++){var r=n[i],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[r]})}return Object.create(Object.getPrototypeOf(t),e)}function ip(t,e){return e===void 0&&(e=!1),rp(t)||ar(t)||!Ci(t)||(ho(t)>1&&(t.set=t.add=t.clear=t.delete=Q5),Object.freeze(t),e&&Xr(t,function(n,i){return ip(i,!0)},!0)),t}function Q5(){Gn(2)}function rp(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ai(t){var e=Id[t];return e||Gn(18,t),e}function J5(t,e){Id[t]||(Id[t]=e)}function Ld(){return ha}function xf(t,e){e&&(ai("Patches"),t.u=[],t.s=[],t.v=e)}function lc(t){Dd(t),t.p.forEach(K5),t.p=null}function Dd(t){t===ha&&(ha=t.l)}function a0(t){return ha={p:[],l:ha,h:t,m:!0,_:0}}function K5(t){var e=t[at];e.i===0||e.i===1?e.j():e.O=!0}function yf(t,e){e._=e.p.length;var n=e.p[0],i=t!==void 0&&t!==n;return e.h.g||ai("ES5").S(e,t,i),i?(n[at].P&&(lc(e),Gn(4)),Ci(t)&&(t=cc(e,t),e.l||uc(e,t)),e.u&&ai("Patches").M(n[at].t,t,e.u,e.s)):t=cc(e,n,[]),lc(e),e.u&&e.v(e.u,e.s),t!==sx?t:void 0}function cc(t,e,n){if(rp(e))return e;var i=e[at];if(!i)return Xr(e,function(s,o){return l0(t,i,e,s,o,n)},!0),e;if(i.A!==t)return e;if(!i.P)return uc(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var r=i.i===4||i.i===5?i.o=np(i.k):i.o;Xr(i.i===3?new Set(r):r,function(s,o){return l0(t,i,r,s,o,n)}),uc(t,r,!1),n&&t.u&&ai("Patches").R(i,n,t.u,t.s)}return i.o}function l0(t,e,n,i,r,s){if(ar(r)){var o=cc(t,r,s&&e&&e.i!==3&&!Hs(e.D,i)?s.concat(i):void 0);if(ix(n,i,o),!ar(o))return;t.m=!1}if(Ci(r)&&!rp(r)){if(!t.h.F&&t._<1)return;cc(t,r),e&&e.A.l||uc(t,r)}}function uc(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&ip(e,n)}function Sf(t,e){var n=t[at];return(n?xr(n):t)[e]}function c0(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function Hi(t){t.P||(t.P=!0,t.l&&Hi(t.l))}function wf(t){t.o||(t.o=np(t.t))}function Rd(t,e,n){var i=ep(e)?ai("MapSet").N(e,n):tp(e)?ai("MapSet").T(e,n):t.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:Ld(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},l=a,c=pa;o&&(l=[a],c=ko);var u=Proxy.revocable(l,c),f=u.revoke,d=u.proxy;return a.k=d,a.j=f,d}(e,n):ai("ES5").J(e,n);return(n?n.A:Ld()).p.push(i),i}function eA(t){return ar(t)||Gn(22,t),function e(n){if(!Ci(n))return n;var i,r=n[at],s=ho(n);if(r){if(!r.P&&(r.i<4||!ai("ES5").K(r)))return r.t;r.I=!0,i=u0(n,s),r.I=!1}else i=u0(n,s);return Xr(i,function(o,a){r&&Z5(r.t,o)===a||ix(i,o,e(a))}),s===3?new Set(i):i}(t)}function u0(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return np(t)}function tA(){function t(s,o){var a=r[s];return a?a.enumerable=o:r[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[at];return pa.get(l,s)},set:function(l){var c=this[at];pa.set(c,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][at];if(!a.P)switch(a.i){case 5:i(a)&&Hi(a);break;case 4:n(a)&&Hi(a)}}}function n(s){for(var o=s.t,a=s.k,l=Ws(a),c=l.length-1;c>=0;c--){var u=l[c];if(u!==at){var f=o[u];if(f===void 0&&!Hs(o,u))return!0;var d=a[u],m=d&&d[at];if(m?m.t!==f:!rx(d,f))return!0}}var _=!!o[at];return l.length!==Ws(o).length+(_?0:1)}function i(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var r={};J5("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(u,f){if(u){for(var d=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var _=ox(f);delete _[at];for(var h=Ws(_),p=0;p<h.length;p++){var g=h[p];_[g]=t(g,u||!!_[g].enumerable)}return Object.create(Object.getPrototypeOf(f),_)}(a,s),c={i:a?5:4,A:o?o.A:Ld(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,at,{value:c,writable:!0}),l},S:function(s,o,a){a?ar(o)&&o[at].A===s&&e(s.p):(s.u&&function l(c){if(c&&typeof c=="object"){var u=c[at];if(u){var f=u.t,d=u.k,m=u.D,_=u.i;if(_===4)Xr(d,function(x){x!==at&&(f[x]!==void 0||Hs(f,x)?m[x]||l(d[x]):(m[x]=!0,Hi(u)))}),Xr(f,function(x){d[x]!==void 0||Hs(d,x)||(m[x]=!1,Hi(u))});else if(_===5){if(i(u)&&(Hi(u),m.length=!0),d.length<f.length)for(var h=d.length;h<f.length;h++)m[h]=!1;else for(var p=f.length;p<d.length;p++)m[p]=!0;for(var g=Math.min(d.length,f.length),v=0;v<g;v++)d.hasOwnProperty(v)||(m[v]=!0),m[v]===void 0&&l(d[v])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):i(s)}})}var f0,ha,sp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",nA=typeof Map<"u",iA=typeof Set<"u",d0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",sx=sp?Symbol.for("immer-nothing"):((f0={})["immer-nothing"]=!0,f0),h0=sp?Symbol.for("immer-draftable"):"__$immer_draftable",at=sp?Symbol.for("immer-state"):"__$immer_state",rA=""+Object.prototype.constructor,Ws=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ox=Object.getOwnPropertyDescriptors||function(t){var e={};return Ws(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Id={},pa={get:function(t,e){if(e===at)return t;var n=xr(t);if(!Hs(n,e))return function(r,s,o){var a,l=c0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(r.k):void 0}(t,n,e);var i=n[e];return t.I||!Ci(i)?i:i===Sf(t.t,e)?(wf(t),t.o[e]=Rd(t.A.h,i,t)):i},has:function(t,e){return e in xr(t)},ownKeys:function(t){return Reflect.ownKeys(xr(t))},set:function(t,e,n){var i=c0(xr(t),e);if(i!=null&&i.set)return i.set.call(t.k,n),!0;if(!t.P){var r=Sf(xr(t),e),s=r==null?void 0:r[at];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(rx(n,r)&&(n!==void 0||Hs(t.t,e)))return!0;wf(t),Hi(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return Sf(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,wf(t),Hi(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=xr(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty:function(){Gn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Gn(12)}},ko={};Xr(pa,function(t,e){ko[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ko.deleteProperty=function(t,e){return ko.set.call(this,t,e,void 0)},ko.set=function(t,e,n){return pa.set.call(this,t[0],e,n,t[0])};var sA=function(){function t(n){var i=this;this.g=d0,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var l=i;return function(h){var p=this;h===void 0&&(h=a);for(var g=arguments.length,v=Array(g>1?g-1:0),x=1;x<g;x++)v[x-1]=arguments[x];return l.produce(h,function(S){var w;return(w=s).call.apply(w,[p,S].concat(v))})}}var c;if(typeof s!="function"&&Gn(6),o!==void 0&&typeof o!="function"&&Gn(7),Ci(r)){var u=a0(i),f=Rd(i,r,void 0),d=!0;try{c=s(f),d=!1}finally{d?lc(u):Dd(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(h){return xf(u,o),yf(h,u)},function(h){throw lc(u),h}):(xf(u,o),yf(c,u))}if(!r||typeof r!="object"){if((c=s(r))===void 0&&(c=r),c===sx&&(c=void 0),i.F&&ip(c,!0),o){var m=[],_=[];ai("Patches").M(r,c,m,_),o(m,_)}return c}Gn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(c){for(var u=arguments.length,f=Array(u>1?u-1:0),d=1;d<u;d++)f[d-1]=arguments[d];return i.produceWithPatches(c,function(m){return r.apply(void 0,[m].concat(f))})};var o,a,l=i.produce(r,s,function(c,u){o=c,a=u});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ci(n)||Gn(8),ar(n)&&(n=eA(n));var i=a0(this),r=Rd(this,n,void 0);return r[at].C=!0,Dd(i),r},e.finishDraft=function(n,i){var r=n&&n[at],s=r.A;return xf(s,i),yf(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!d0&&Gn(20),this.g=n},e.applyPatches=function(n,i){var r;for(r=i.length-1;r>=0;r--){var s=i[r];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}r>-1&&(i=i.slice(r+1));var o=ai("Patches").$;return ar(n)?o(n,i):this.produce(n,function(a){return o(a,i)})},t}(),vn=new sA,ax=vn.produce;vn.produceWithPatches.bind(vn);vn.setAutoFreeze.bind(vn);vn.setUseProxies.bind(vn);vn.applyPatches.bind(vn);vn.createDraft.bind(vn);vn.finishDraft.bind(vn);function p0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function m0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p0(Object(n),!0).forEach(function(i){G_(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Vt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var g0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Mf=function(){return Math.random().toString(36).substring(7).split("").join(".")},fc={INIT:"@@redux/INIT"+Mf(),REPLACE:"@@redux/REPLACE"+Mf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Mf()}};function oA(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function lx(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Vt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Vt(1));return n(lx)(t,e)}if(typeof t!="function")throw new Error(Vt(2));var r=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(Vt(3));return s}function f(h){if(typeof h!="function")throw new Error(Vt(4));if(l)throw new Error(Vt(5));var p=!0;return c(),a.push(h),function(){if(!!p){if(l)throw new Error(Vt(6));p=!1,c();var v=a.indexOf(h);a.splice(v,1),o=null}}}function d(h){if(!oA(h))throw new Error(Vt(7));if(typeof h.type>"u")throw new Error(Vt(8));if(l)throw new Error(Vt(9));try{l=!0,s=r(s,h)}finally{l=!1}for(var p=o=a,g=0;g<p.length;g++){var v=p[g];v()}return h}function m(h){if(typeof h!="function")throw new Error(Vt(10));r=h,d({type:fc.REPLACE})}function _(){var h,p=f;return h={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(Vt(11));function x(){v.next&&v.next(u())}x();var S=p(x);return{unsubscribe:S}}},h[g0]=function(){return this},h}return d({type:fc.INIT}),i={dispatch:d,subscribe:f,getState:u,replaceReducer:m},i[g0]=_,i}function aA(t){Object.keys(t).forEach(function(e){var n=t[e],i=n(void 0,{type:fc.INIT});if(typeof i>"u")throw new Error(Vt(12));if(typeof n(void 0,{type:fc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Vt(13))})}function lA(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(n[r]=t[r])}var s=Object.keys(n),o;try{aA(n)}catch(a){o=a}return function(l,c){if(l===void 0&&(l={}),o)throw o;for(var u=!1,f={},d=0;d<s.length;d++){var m=s[d],_=n[m],h=l[m],p=_(h,c);if(typeof p>"u")throw c&&c.type,new Error(Vt(14));f[m]=p,u=u||p!==h}return u=u||s.length!==Object.keys(l).length,u?f:l}}function dc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function cA(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),s=function(){throw new Error(Vt(15))},o={getState:r.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=dc.apply(void 0,a)(r.dispatch),m0(m0({},r),{},{dispatch:s})}}}function cx(t){var e=function(i){var r=i.dispatch,s=i.getState;return function(o){return function(a){return typeof a=="function"?a(r,s,t):o(a)}}};return e}var ux=cx();ux.withExtraArgument=cx;const v0=ux;var uA=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();globalThis&&globalThis.__generator;var hc=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},fA=Object.defineProperty,_0=Object.getOwnPropertySymbols,dA=Object.prototype.hasOwnProperty,hA=Object.prototype.propertyIsEnumerable,x0=function(t,e,n){return e in t?fA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ma=function(t,e){for(var n in e||(e={}))dA.call(e,n)&&x0(t,n,e[n]);if(_0)for(var i=0,r=_0(e);i<r.length;i++){var n=r[i];hA.call(e,n)&&x0(t,n,e[n])}return t},pA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?dc:dc.apply(null,arguments)};function mA(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var gA=function(t){uA(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,hc([void 0],n[0].concat(this)))):new(e.bind.apply(e,hc([void 0],n.concat(this))))},e}(Array);function kd(t){return Ci(t)?ax(t,function(){}):t}function vA(t){return typeof t=="boolean"}function _A(){return function(e){return xA(e)}}function xA(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var i=new gA;return n&&(vA(n)?i.push(v0):i.push(v0.withExtraArgument(n.extraArgument))),i}var yA=!0;function SA(t){var e=_A(),n=t||{},i=n.reducer,r=i===void 0?void 0:i,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,c=n.preloadedState,u=c===void 0?void 0:c,f=n.enhancers,d=f===void 0?void 0:f,m;if(typeof r=="function")m=r;else if(mA(r))m=lA(r);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var h=cA.apply(void 0,_),p=dc;l&&(p=pA(ma({trace:!yA},typeof l=="object"&&l)));var g=[h];Array.isArray(d)?g=hc([h],d):typeof d=="function"&&(g=d(g));var v=p.apply(void 0,g);return lx(m,u,v)}function ga(t,e){function n(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(e){var s=e.apply(void 0,i);if(!s)throw new Error("prepareAction did not return an object");return ma(ma({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:i[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(i){return i.type===t},n}function fx(t){var e={},n=[],i,r={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,r},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase:function(s){return i=s,r}};return t(r),[e,n,i]}function wA(t){return typeof t=="function"}function MA(t,e,n,i){n===void 0&&(n=[]);var r=typeof e=="function"?fx(e):[e,n,i],s=r[0],o=r[1],a=r[2],l;if(wA(t))l=function(){return kd(t())};else{var c=kd(t);l=function(){return c}}function u(f,d){f===void 0&&(f=l());var m=hc([s[d.type]],o.filter(function(_){var h=_.matcher;return h(d)}).map(function(_){var h=_.reducer;return h}));return m.filter(function(_){return!!_}).length===0&&(m=[a]),m.reduce(function(_,h){if(h)if(ar(_)){var p=_,g=h(p,d);return typeof g>"u"?_:g}else{if(Ci(_))return ax(_,function(v){return h(v,d)});var g=h(_,d);if(typeof g>"u"){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return _},f)}return u.getInitialState=l,u}function EA(t,e){return t+"/"+e}function bA(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:kd(t.initialState),i=t.reducers||{},r=Object.keys(i),s={},o={},a={};r.forEach(function(u){var f=i[u],d=EA(e,u),m,_;"reducer"in f?(m=f.reducer,_=f.prepare):m=f,s[u]=m,o[d]=m,a[u]=_?ga(d,_):ga(d)});function l(){var u=typeof t.extraReducers=="function"?fx(t.extraReducers):[t.extraReducers],f=u[0],d=f===void 0?{}:f,m=u[1],_=m===void 0?[]:m,h=u[2],p=h===void 0?void 0:h,g=ma(ma({},d),o);return MA(n,g,_,p)}var c;return{name:e,reducer:function(u,f){return c||(c=l()),c(u,f)},actions:a,caseReducers:s,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var op="listenerMiddleware";ga(op+"/add");ga(op+"/removeAll");ga(op+"/remove");tA();const Ef=localStorage.getItem("theme"),CA={theme:Ef!=null?Ef:Gs.Light},dx=bA({name:"user",initialState:CA,reducers:{toggleTheme:t=>{t.theme=t.theme===Gs.Dark?Gs.Light:Gs.Dark,localStorage.setItem("theme",t.theme)}}}),{toggleTheme:TA}=dx.actions,AA=dx.reducer,PA=oe.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`,LA=oe.button`
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
`,DA=oe.button`
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
`,y0=[{id:"6",lable:"\u767B\u5F55"},{id:"5",lable:"\u7F16\u8F91\u5668"},{id:"4",lable:"\u793A\u4F8B"},{id:"3",lable:"\u6587\u6863"},{id:"2",lable:"\u6559\u7A0B"},{id:"1",lable:"theme"}],RA=()=>{let t=Vh();const e=()=>{t("/editor")},n=Y2();function i(){n(TA())}const r=o=>{switch(o.target.innerHTML){case"\u6559\u7A0B":t("/course");break;case"\u6587\u6863":t("/document");break;case"\u793A\u4F8B":t("/example");break;case"\u7F16\u8F91\u5668":e();break;case"theme":i();break}},s=()=>{t("/login")};return L(We,{children:L(PA,{children:y0.map(o=>parseInt(o.id)===y0.length?L(DA,{onClick:s,children:"\u767B \u5F55"},o.id):L(LA,{onClick:a=>r(a),children:o.lable},o.id))})})},IA=oe.div`
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
`,kA=oe.div`
    display: flex;
    /* background: yellow; */
    height: 32px;
    width: 80%;
    flex-direction: row;
`,zA=()=>L(We,{children:L(IA,{children:Ae(kA,{children:[L(Kh,{primary:!1}),L(RA,{})]})})}),NA=oe.div`

    position: relative;
    min-height: 200vh;
    z-index: 1;

`,FA=()=>L(We,{children:L(NA,{})});var hx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[L("rect",{width:24,height:24,fill:"none"}),L("path",{d:"M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zM3 20v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zM21 20c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zM19 14.87V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"})]})});hx.displayName="ViewInAr";const OA=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0 20px 0;
`,BA=oe.button`
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
`,UA=oe.button`
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
`,VA=oe(hx)`
    color: white;
    margin-right: 10px;
    padding-bottom: 2px;
`,GA=()=>{let t=Vh();function e(){t("/editor")}return L(We,{children:Ae(OA,{children:[L("a",{href:"https://gitee.com/songmy1093697597/bim3d-editor",target:"_blank",children:L(BA,{children:"\u5BFC\u51FA\u9879\u76EE"})}),Ae(UA,{onClick:e,children:[L(VA,{size:"16"}),"\u9884\u89C8\u7F16\u8F91"]})]})})};var px=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})});px.displayName="Github";var mx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:L("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})});mx.displayName="ReactLogo";var gx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12 1.217 4.926-4.877-1.4zm6.28 1.538 4.878 1.404-3.662 3.53zm-.52.13 1.208 4.9-4.853-1.392zm6.3 1.534 4.947 1.424-3.715 3.574zm-.524.12 1.215 4.926-4.876-1.398zm-15.432.696 4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137 1.236 5.017-4.963-1.432zm6.274 1.535 4.965 1.425-3.73 3.586zm-.52.127 1.235 5.012-4.958-1.43zm-9.63 2.438 4.873 1.406-3.656 3.523zm5.854 1.687 4.863 1.403-3.648 3.51zm-.54.04 1.214 4.927-4.875-1.4zm-3.896 4.02 5.037 1.442-3.782 3.638z"})})});gx.displayName="Threedotjs";var vx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"})})});vx.displayName="Typescript";var _x=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"})})});_x.displayName="Gitee";const HA=oe.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,WA=oe(px)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,$A=oe(mx)`
  color: #38d2f8;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,jA=oe(gx)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,XA=oe(vx)`
  color: #067ceb;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,qA=oe(_x)`
  color: #f74141;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,YA=()=>L(We,{children:Ae(HA,{children:[L($A,{title:"React icon",size:"36"}),L(jA,{title:"Three.js icon",size:"36"}),L(XA,{title:"Typescript icon",size:"36"}),L(qA,{title:"Javascript icon",size:"36"}),L(WA,{title:"Github icon",size:"36"})]})}),S0=oe.span`
  color: rgb(242, 112, 19);
`,ZA=()=>Ae(We,{children:[Ae("h1",{children:[Ae("span",{children:["\u6B22\u8FCE\u6765\u5230",L(S0,{children:" Bim3dEditor "}),L("br",{}),"\u8FD9\u662F\u4E3A\u60A8\u7CBE\u5FC3\u6253\u9020\u7684\u53EF\u9884"]}),L("br",{}),L("span",{children:"\u89C8\u548C\u7F16\u8F91\u7684"}),Ae("span",{children:[L(S0,{children:" WebGL "}),"\u9879\u76EE"]})]}),Ae("h5",{children:[L("span",{children:"Bim3dEditor \u4F7F\u7528\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 React \u548C\u4F18\u79C0\u7684 webgl"}),L("br",{}),L("span",{children:"\u5E93 Three.js \u6253\u9020\u5728\u7EBF\u53EF\u7F16\u8F91\u7684Cad\u89E3\u6790\u7F16\u8F91\u5668"})]})]}),QA=oe.div`
    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`,JA=oe.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,KA=oe.div`
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
`,eP=oe.div`
  display: flex;
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
`,tP=()=>L(We,{children:L(QA,{children:Ae(JA,{children:[Ae(KA,{children:[L(ZA,{}),L(GA,{}),L(YA,{})]}),L(eP,{})]})})}),nP=()=>Ae(We,{children:[L(zA,{}),L(tP,{}),L(FA,{}),L(Y5,{})]}),iP=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: greenyellow; */
`,rP=oe.div`

    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 14px;
    /* background-color: #2f71ff; */
    margin-left: 200px;
    
`,sP=oe.div`
 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 200px;
    width: 100%;
    height: 10%;
   
    font-size: 14px;
    /* background-color: greenyellow; */
`,dl=oe.a`
    margin: 0 20px;
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,oP=()=>L(We,{children:Ae(iP,{children:[L(rP,{children:L(dl,{href:"",children:"\u672C\u7F51\u7AD9\u53D7\u9690\u79C1\u653F\u7B56\u4FDD\u62A4"})}),Ae(sP,{children:[L(dl,{href:"",children:"\u670D\u52A1\u6761\u6B3E"}),L(dl,{href:"",children:"\u9690\u79C1\u653F\u7B56"}),L(dl,{href:"",children:"\u5F00\u53D1\u56E2\u961F"})]})]})}),aP=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: yellow; */
`,lP=()=>L(We,{children:L(aP,{children:L(Kh,{primary:!0})})}),cP=oe.div`
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
`,uP=t=>Ae(cP,{children:[L("span",{className:"line"}),L("span",{className:"txt",children:t.label}),L("span",{className:"line"})]});var xx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Ae(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[L("path",{d:"M408.67 298.53a21 21 0 1120.9-21 20.85 20.85 0 01-20.9 21m-102.17 0a21 21 0 1120.9-21 20.84 20.84 0 01-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 018.13 2.34L454 462.83a11.62 11.62 0 003.48 1.17 5 5 0 004.65-4.66 14.27 14.27 0 00-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 01-.33-3.47 11.4 11.4 0 015-9.35","data-name":"XMLID 501 -1"}),L("path",{d:"M246.13 178.51a24.47 24.47 0 010-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 11147.45 154a24.57 24.57 0 01-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 01-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 005.8 5.83 7.15 7.15 0 003.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 015.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 01-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48","data-name":"XMLID 505 -7"})]})});xx.displayName="LogoWechat";var yx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 20 20",...t,ref:e,children:L("path",{d:"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.008 11.92c-.184.096-.47-.122-.737-.52-.105.435-.369.828-.743 1.144.394.144.65.38.65.65 0 .442-.695.799-1.553.799-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672-.857 0-1.552-.357-1.552-.8 0-.268.256-.505.65-.65-.375-.315-.638-.708-.745-1.143-.267.398-.553.616-.735.52-.265-.136-.213-.88.117-1.654.26-.61.612-1.06.879-1.158a1.18 1.18 0 01.172-.748l-.002-.041c0-.11.026-.21.07-.298.068-1.586 1.1-2.845 2.771-2.845 1.67 0 2.703 1.259 2.771 2.845.044.088.07.188.07.298 0 .012 0 .027-.003.041a1.169 1.169 0 01.173.748c.267.098.62.547.878 1.158.331.775.383 1.518.119 1.655z"})})});yx.displayName="QqWithCircle";var Sx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M16.076 13.732a19.299 19.299 0 0 0 2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365c-.415 0-.415.408-.415.408V6.04H4.707v.948h5.861v1.699H5.729v.948h9.386a16.63 16.63 0 0 1-1.352 3.294c-3.045-1.002-6.295-1.814-8.337-1.314-1.305.321-2.146.893-2.641 1.493-2.267 2.751-.641 6.929 4.147 6.929 2.831 0 5.559-1.574 7.673-4.168C17.758 17.381 24 19.976 24 19.976v.157a3.837 3.837 0 0 1-3.843 3.833H3.845A3.839 3.839 0 0 1 0 20.132V3.868A3.838 3.838 0 0 1 3.845.034h16.312A3.837 3.837 0 0 1 24 3.868v12.409s-.784-.062-4.24-1.216c-.96-.321-2.249-.811-3.684-1.329zm-10.242-.698c-.6.059-1.725.324-2.341.866-1.845 1.604-.741 4.537 2.993 4.537 2.17 0 4.339-1.384 6.042-3.599-2.424-1.179-4.476-2.022-6.694-1.804z"})})});Sx.displayName="Alipay";var wx=pe.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return L(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:L("path",{d:"M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm.75 3h-9v14.75c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V5z"})})});wx.displayName="PhonePageHeader";const fP=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 80%;
    /* background-color: red; */
`,dP=oe.div`
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
`,hP=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 370px;
    height:100%;
    /* background-color: #961414; */
`,w0=oe.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`,hl=oe.span`
    color: #333;
    font-size: ${t=>t.size};
   

`,pl=oe.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: ${t=>t.position?"right":"left"};
`,pP=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 20px 0;
`,M0=oe.input`
    width: 100%;
    height: 36px;
    font-size: 24px;
    margin: 5px 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
`,mP=oe.input`
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
`,E0=oe.a`
    margin: 0;
    padding: 0;
   
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,gP=oe(xx)`
    color: #03a303;
    margin: 5px 20px;
`,vP=oe(yx)`
    color: #f84747;
    margin: 5px 20px;
`,_P=oe(Sx)`
    color: #3664fc;
    margin: 5px 20px;
`,xP=oe(wx)`
    color: #ccc;
    margin: 5px 20px;
`,yP=oe.button`
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
`,b0=oe.div`
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: auto;
    margin: 5px 0;
`,SP=()=>{let t=Vh();return L(We,{children:L(fP,{children:L(dP,{children:Ae(hP,{children:[Ae(w0,{children:[L(hl,{size:"24px",children:"\u767B\u5F55"}),L(E0,{children:"\u6CA1\u6709\u8D26\u53F7\uFF1F"})]}),Ae(pP,{children:[L(pl,{children:L(hl,{size:"16px",children:"\u90AE\u7BB1\uFF1A"})}),L(M0,{type:"email"}),L(pl,{children:L(hl,{size:"16px",children:"\u5BC6\u7801\uFF1A"})}),L(M0,{type:"password"})]}),Ae(w0,{children:[Ae(pl,{children:[L(mP,{type:"checkbox"}),L(hl,{size:"12px",children:"\u8BB0\u4F4F\u5BC6\u7801"})]}),L(pl,{position:!0,children:L(E0,{children:"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"})})]}),L(yP,{onClick:()=>{t("/editor")},children:"\u767B\u5F55"}),L(b0,{children:L(uP,{label:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),Ae(b0,{children:[L(gP,{size:"40"}),L(vP,{size:"40"}),L(_P,{size:"40"}),L(xP,{size:"40"})]})]})})})})},wP=oe.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    height: 100vh;
`,MP=()=>L(We,{children:Ae(wP,{children:[L(lP,{}),L(SP,{}),L(oP,{})]})}),EP=[{path:"/",element:L(nP,{})},{path:"/example",element:L(X5,{})},{path:"/document",element:L(Ew,{})},{path:"/course",element:L(Mw,{})},{path:"/editor",element:L(k5,{})},{path:"/login",element:L(MP,{})}],bP=SA({reducer:{user:AA}}),CP=CT`
    body {
        background: ${t=>t.theme.colors.body};
    }
`,TP={colors:{body:"#000"}},AP={colors:{body:"#fff"}},PP=t=>{const e=x2(n=>n.user.theme);return L(ET,{theme:e===Gs.Dark?TP:AP,...t})},LP=()=>{const t=xw(EP);return L(j2,{store:bP,children:Ae(PP,{children:[L(CP,{}),t]})})};var zd={},C0=Ud.exports;zd.createRoot=C0.createRoot,zd.hydrateRoot=C0.hydrateRoot;new nt().startUp();zd.createRoot(document.getElementById("root")).render(L(Wn.StrictMode,{children:L(ww,{children:L(LP,{})})}));
