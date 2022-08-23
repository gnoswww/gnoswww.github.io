var Vx=Object.defineProperty;var Hx=(t,e,n)=>e in t?Vx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var E=(t,e,n)=>(Hx(t,typeof e!="symbol"?e+"":e,n),n);const Gx=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Gx();function Wx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B0={exports:{}},U0={},ge={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),$x=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),Zx=Symbol.for("react.context"),Qx=Symbol.for("react.forward_ref"),Jx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),ey=Symbol.for("react.lazy"),yp=Symbol.iterator;function ty(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var V0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,G0={};function uo(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||V0}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function W0(){}W0.prototype=uo.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=G0,this.updater=n||V0}var Qd=Zd.prototype=new W0;Qd.constructor=Zd;H0(Qd,uo.prototype);Qd.isPureReactComponent=!0;var Sp=Array.isArray,$0=Object.prototype.hasOwnProperty,Jd={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function X0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:Jd.current}}function ny(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function iy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wp=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iy(""+t.key):e.toString(36)}function Cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case $x:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xc(o,0):i,Sp(r)?(n="",t!=null&&(n=t.replace(wp,"$&/")+"/"),Cl(r,e,n,"",function(u){return u})):r!=null&&(Kd(r)&&(r=ny(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Sp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xc(s,a);o+=Cl(s,e,n,l,r)}else if(l=ty(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,a++),o+=Cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Tl={transition:null},sy={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Jd};Fe.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=uo;Fe.Fragment=jx;Fe.Profiler=qx;Fe.PureComponent=Zd;Fe.StrictMode=Xx;Fe.Suspense=Jx;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=H0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$0.call(e,l)&&!j0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:Zx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};Fe.createElement=X0;Fe.createFactory=function(t){var e=X0.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:Qx,render:t}};Fe.isValidElement=Kd;Fe.lazy=function(t){return{$$typeof:ey,_payload:{_status:-1,_result:t},_init:ry}};Fe.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Fe.useContext=function(t){return Kt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Fe.useId=function(){return Kt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Kt.current.useRef(t)};Fe.useState=function(t){return Kt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Kt.current.useTransition()};Fe.version="18.2.0";(function(t){t.exports=Fe})(ge);const $n=Wx(ge.exports);/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=ge.exports;function oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ay=typeof Object.is=="function"?Object.is:oy,ly=Ys.useState,uy=Ys.useEffect,cy=Ys.useLayoutEffect,fy=Ys.useDebugValue;function dy(t,e){var n=e(),i=ly({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return cy(function(){r.value=n,r.getSnapshot=e,yc(r)&&s({inst:r})},[t,n,e]),uy(function(){return yc(r)&&s({inst:r}),t(function(){yc(r)&&s({inst:r})})},[t]),fy(n),n}function yc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ay(t,n)}catch{return!0}}function hy(t,e){return e()}var py=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?hy:dy;U0.useSyncExternalStore=Ys.useSyncExternalStore!==void 0?Ys.useSyncExternalStore:py;(function(t){t.exports=U0})(B0);var q0={exports:{}},Y0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=ge.exports,my=B0.exports;function gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vy=typeof Object.is=="function"?Object.is:gy,_y=my.useSyncExternalStore,xy=bu.useRef,yy=bu.useEffect,Sy=bu.useMemo,wy=bu.useDebugValue;Y0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=xy(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Sy(function(){function l(m){if(!u){if(u=!0,c=m,m=i(m),r!==void 0&&o.hasValue){var _=o.value;if(r(_,m))return f=_}return f=m}if(_=f,vy(c,m))return _;var h=i(m);return r!==void 0&&r(_,h)?_:(c=m,f=h)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=_y(t,s[0],s[1]);return yy(function(){o.hasValue=!0,o.value=a},[a]),wy(a),a};(function(t){t.exports=Y0})(q0);var eh={exports:{}},vn={},Z0={exports:{}},Q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,z){var V=k.length;k.push(z);e:for(;0<V;){var K=V-1>>>1,F=k[K];if(0<r(F,z))k[K]=z,k[V]=F,V=K;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var z=k[0],V=k.pop();if(V!==z){k[0]=V;e:for(var K=0,F=k.length,H=F>>>1;K<H;){var q=2*(K+1)-1,ae=k[q],A=q+1,Se=k[A];if(0>r(ae,V))A<F&&0>r(Se,ae)?(k[K]=Se,k[A]=V,K=A):(k[K]=ae,k[q]=V,K=q);else if(A<F&&0>r(Se,V))k[K]=Se,k[A]=V,K=A;else break e}}return z}function r(k,z){var V=k.sortIndex-z.sortIndex;return V!==0?V:k.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,_=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=k)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function S(k){if(h=!1,x(k),!_)if(n(l)!==null)_=!0,$(w);else{var z=n(u);z!==null&&J(S,z.startTime-k)}}function w(k,z){_=!1,h&&(h=!1,g(y),y=-1),m=!0;var V=d;try{for(x(z),f=n(l);f!==null&&(!(f.expirationTime>z)||k&&!O());){var K=f.callback;if(typeof K=="function"){f.callback=null,d=f.priorityLevel;var F=K(f.expirationTime<=z);z=t.unstable_now(),typeof F=="function"?f.callback=F:f===n(l)&&i(l),x(z)}else i(l);f=n(l)}if(f!==null)var H=!0;else{var q=n(u);q!==null&&J(S,q.startTime-z),H=!1}return H}finally{f=null,d=V,m=!1}}var C=!1,L=null,y=-1,T=5,D=-1;function O(){return!(t.unstable_now()-D<T)}function re(){if(L!==null){var k=t.unstable_now();D=k;var z=!0;try{z=L(!0,k)}finally{z?ee():(C=!1,L=null)}}else C=!1}var ee;if(typeof v=="function")ee=function(){v(re)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=re,ee=function(){X.postMessage(null)}}else ee=function(){p(re,0)};function $(k){L=k,C||(C=!0,ee())}function J(k,z){y=p(function(){k(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,$(w))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var V=d;d=z;try{return k()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var V=d;d=k;try{return z()}finally{d=V}},t.unstable_scheduleCallback=function(k,z,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,k){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=V+F,k={id:c++,callback:z,priorityLevel:k,startTime:V,expirationTime:F,sortIndex:-1},V>K?(k.sortIndex=V,e(u,k),n(l)===null&&k===n(u)&&(h?(g(y),y=-1):h=!0,J(S,V-K))):(k.sortIndex=F,e(l,k),_||m||(_=!0,$(w))),k},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(k){var z=d;return function(){var V=d;d=z;try{return k.apply(this,arguments)}finally{d=V}}}})(Q0);(function(t){t.exports=Q0})(Z0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=ge.exports,mn=Z0.exports;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K0=new Set,ea={};function Zr(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(ea[t]=e,t=0;t<e.length;t++)K0.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Ep={};function Ey(t){return Ff.call(Ep,t)?!0:Ff.call(Mp,t)?!1:My.test(t)?Ep[t]=!0:(Mp[t]=!0,!1)}function by(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cy(t,e,n,i){if(e===null||typeof e>"u"||by(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);zt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);zt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);zt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cy(e,n,r,i)&&(n=null),i||r===null?Ey(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),bp=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Sc;function ko(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var wc=!1;function Mc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function Ty(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Bf:return"Profiler";case rh:return"StrictMode";case Uf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}function Ay(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hf(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Py(t){var e=iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=Py(t))}function rv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=iv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sv(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function Wf(t,e){sv(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$f(t,e.type,n):e.hasOwnProperty("defaultValue")&&$f(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $f(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zo=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(zo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function ov(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ly=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){Ly.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=uv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ry=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qf=null,Bs=null,Us=null;function Lp(t){if(t=Aa(t)){if(typeof Qf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Lu(e),Qf(t.stateNode,t.type,e))}}function fv(t){Bs?Us?Us.push(t):Us=[t]:Bs=t}function dv(){if(Bs){var t=Bs,e=Us;if(Us=Bs=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function hv(t,e){return t(e)}function pv(){}var Ec=!1;function mv(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return hv(t,e,n)}finally{Ec=!1,(Bs!==null||Us!==null)&&(pv(),dv())}}function na(t,e){var n=t.stateNode;if(n===null)return null;var i=Lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Jf=!1;if(Mi)try{var So={};Object.defineProperty(So,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Jf=!1}function Dy(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Go=!1,$l=null,jl=!1,Kf=null,Iy={onError:function(t){Go=!0,$l=t}};function ky(t,e,n,i,r,s,o,a,l){Go=!1,$l=null,Dy.apply(Iy,arguments)}function zy(t,e,n,i,r,s,o,a,l){if(ky.apply(this,arguments),Go){if(Go){var u=$l;Go=!1,$l=null}else throw Error(se(198));jl||(jl=!0,Kf=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(Qr(t)!==t)throw Error(se(188))}function Ny(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rp(r),t;if(s===i)return Rp(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function vv(t){return t=Ny(t),t!==null?_v(t):null}function _v(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_v(t);if(e!==null)return e;t=t.sibling}return null}var xv=mn.unstable_scheduleCallback,Dp=mn.unstable_cancelCallback,Oy=mn.unstable_shouldYield,Fy=mn.unstable_requestPaint,xt=mn.unstable_now,By=mn.unstable_getCurrentPriorityLevel,lh=mn.unstable_ImmediatePriority,yv=mn.unstable_UserBlockingPriority,Xl=mn.unstable_NormalPriority,Uy=mn.unstable_LowPriority,Sv=mn.unstable_IdlePriority,Cu=null,si=null;function Vy(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Wy,Hy=Math.log,Gy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(Hy(t)/Gy|0)|0}var Oa=64,Fa=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=No(a):(s&=o,s!==0&&(i=No(s)))}else o=n&~r,o!==0?i=No(o):s!==0&&(i=No(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function $y(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=$y(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wv(){var t=Oa;return Oa<<=1,(Oa&4194240)===0&&(Oa=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Xy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Mv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ev,ch,bv,Cv,Tv,td=!1,Ba=[],Xi=null,qi=null,Yi=null,ia=new Map,ra=new Map,Vi=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yy(t,e,n,i,r){switch(e){case"focusin":return Xi=wo(Xi,t,e,n,i,r),!0;case"dragenter":return qi=wo(qi,t,e,n,i,r),!0;case"mouseover":return Yi=wo(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ia.set(s,wo(ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ra.set(s,wo(ra.get(s)||null,t,e,n,i,r)),!0}return!1}function Av(t){var e=wr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,Tv(t.priority,function(){bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Aa(n),e!==null&&ch(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){Al(t)&&n.delete(e)}function Zy(){td=!1,Xi!==null&&Al(Xi)&&(Xi=null),qi!==null&&Al(qi)&&(qi=null),Yi!==null&&Al(Yi)&&(Yi=null),ia.forEach(kp),ra.forEach(kp)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Zy)))}function sa(t){function e(r){return Mo(r,t)}if(0<Ba.length){Mo(Ba[0],t);for(var n=1;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&Mo(Xi,t),qi!==null&&Mo(qi,t),Yi!==null&&Mo(Yi,t),ia.forEach(e),ra.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Vi.shift()}var Vs=Ai.ReactCurrentBatchConfig,Yl=!0;function Qy(t,e,n,i){var r=Qe,s=Vs.transition;Vs.transition=null;try{Qe=1,fh(t,e,n,i)}finally{Qe=r,Vs.transition=s}}function Jy(t,e,n,i){var r=Qe,s=Vs.transition;Vs.transition=null;try{Qe=4,fh(t,e,n,i)}finally{Qe=r,Vs.transition=s}}function fh(t,e,n,i){if(Yl){var r=nd(t,e,n,i);if(r===null)zc(t,e,i,Zl,n),Ip(t,i);else if(Yy(r,t,e,n,i))i.stopPropagation();else if(Ip(t,i),e&4&&-1<qy.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&Ev(s),s=nd(t,e,n,i),s===null&&zc(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zc(t,e,i,null,n)}}var Zl=null;function nd(t,e,n,i){if(Zl=null,t=ah(i),t=wr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case lh:return 1;case yv:return 4;case Xl:case Uy:return 16;case Sv:return 536870912;default:return 16}default:return 16}}var Wi=null,dh=null,Pl=null;function Lv(){if(Pl)return Pl;var t,e=dh,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pl=r.slice(t,1<i?1-i:void 0)}function Ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ua(){return!0}function zp(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:zp,this.isPropagationStopped=zp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=_n(co),Ta=ft({},co,{view:0,detail:0}),Ky=_n(Ta),Cc,Tc,Eo,Tu=ft({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Cc=t.screenX-Eo.screenX,Tc=t.screenY-Eo.screenY):Tc=Cc=0,Eo=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Np=_n(Tu),eS=ft({},Tu,{dataTransfer:0}),tS=_n(eS),nS=ft({},Ta,{relatedTarget:0}),Ac=_n(nS),iS=ft({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=_n(iS),sS=ft({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=_n(sS),aS=ft({},co,{data:0}),Op=_n(aS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cS[t])?!!e[t]:!1}function ph(){return fS}var dS=ft({},Ta,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=_n(dS),pS=ft({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=_n(pS),mS=ft({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),gS=_n(mS),vS=ft({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=_n(vS),xS=ft({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=_n(xS),SS=[9,13,27,32],mh=Mi&&"CompositionEvent"in window,Wo=null;Mi&&"documentMode"in document&&(Wo=document.documentMode);var wS=Mi&&"TextEvent"in window&&!Wo,Rv=Mi&&(!mh||Wo&&8<Wo&&11>=Wo),Bp=String.fromCharCode(32),Up=!1;function Dv(t,e){switch(t){case"keyup":return SS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function MS(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(Up=!0,Bp);case"textInput":return t=e.data,t===Bp&&Up?null:t;default:return null}}function ES(t,e){if(bs)return t==="compositionend"||!mh&&Dv(t,e)?(t=Lv(),Pl=dh=Wi=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bS[t.type]:e==="textarea"}function kv(t,e,n,i){fv(i),e=Ql(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,oa=null;function CS(t){$v(t,0)}function Au(t){var e=As(t);if(rv(e))return t}function TS(t,e){if(t==="change")return e}var zv=!1;if(Mi){var Pc;if(Mi){var Lc="oninput"in document;if(!Lc){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Lc=typeof Hp.oninput=="function"}Pc=Lc}else Pc=!1;zv=Pc&&(!document.documentMode||9<document.documentMode)}function Gp(){$o&&($o.detachEvent("onpropertychange",Nv),oa=$o=null)}function Nv(t){if(t.propertyName==="value"&&Au(oa)){var e=[];kv(e,oa,t,ah(t)),mv(CS,e)}}function AS(t,e,n){t==="focusin"?(Gp(),$o=e,oa=n,$o.attachEvent("onpropertychange",Nv)):t==="focusout"&&Gp()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(oa)}function LS(t,e){if(t==="click")return Au(e)}function RS(t,e){if(t==="input"||t==="change")return Au(e)}function DS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:DS;function aa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ff.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=Wp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IS(t){var e=Fv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(i!==null&&gh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$p(n,s);var o=$p(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kS=Mi&&"documentMode"in document&&11>=document.documentMode,Cs=null,id=null,jo=null,rd=!1;function jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||Cs==null||Cs!==Wl(i)||(i=Cs,"selectionStart"in i&&gh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&aa(jo,i)||(jo=i,i=Ql(id,"onSelect"),0<i.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},Rc={},Bv={};Mi&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Pu(t){if(Rc[t])return Rc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bv)return Rc[t]=e[n];return t}var Uv=Pu("animationend"),Vv=Pu("animationiteration"),Hv=Pu("animationstart"),Gv=Pu("transitionend"),Wv=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Wv.set(t,e),Zr(e,[t])}for(var Dc=0;Dc<Xp.length;Dc++){var Ic=Xp[Dc],zS=Ic.toLowerCase(),NS=Ic[0].toUpperCase()+Ic.slice(1);lr(zS,"on"+NS)}lr(Uv,"onAnimationEnd");lr(Vv,"onAnimationIteration");lr(Hv,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Gv,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zy(i,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qp(r,a,u),s=l}}}if(jl)throw t=Kf,jl=!1,Kf=null,t}function it(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(jv(e,t,2,!1),n.add(i))}function kc(t,e,n){var i=0;e&&(i|=4),jv(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function la(t){if(!t[Ha]){t[Ha]=!0,K0.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,kc("selectionchange",!1,e))}}function jv(t,e,n,i){switch(Pv(e)){case 1:var r=Qy;break;case 4:r=Jy;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zc(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mv(function(){var u=s,c=ah(n),f=[];e:{var d=Wv.get(t);if(d!==void 0){var m=hh,_=t;switch(t){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":m=hS;break;case"focusin":_="focus",m=Ac;break;case"focusout":_="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gS;break;case Uv:case Vv:case Hv:m=rS;break;case Gv:m=_S;break;case"scroll":m=Ky;break;case"wheel":m=yS;break;case"copy":case"cut":case"paste":m=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Fp}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=na(v,g),S!=null&&h.push(ua(v,S,x)))),p)break;v=v.return}0<h.length&&(d=new m(d,_,null,n,c),f.push({event:d,listeners:h}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Zf&&(_=n.relatedTarget||n.fromElement)&&(wr(_)||_[Ei]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?wr(_):null,_!==null&&(p=Qr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(h=Np,S="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Fp,S="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?d:As(m),x=_==null?d:As(_),d=new h(S,v+"leave",m,n,c),d.target=p,d.relatedTarget=x,S=null,wr(c)===u&&(h=new h(g,v+"enter",_,n,c),h.target=x,h.relatedTarget=p,S=h),p=S,m&&_)t:{for(h=m,g=_,v=0,x=h;x;x=ts(x))v++;for(x=0,S=g;S;S=ts(S))x++;for(;0<v-x;)h=ts(h),v--;for(;0<x-v;)g=ts(g),x--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=ts(h),g=ts(g)}h=null}else h=null;m!==null&&Yp(f,d,m,h,!1),_!==null&&p!==null&&Yp(f,p,_,h,!0)}}e:{if(d=u?As(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=TS;else if(Vp(d))if(zv)w=RS;else{w=PS;var C=AS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=LS);if(w&&(w=w(t,u))){kv(f,w,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&$f(d,"number",d.value)}switch(C=u?As(u):window,t){case"focusin":(Vp(C)||C.contentEditable==="true")&&(Cs=C,id=u,jo=null);break;case"focusout":jo=id=Cs=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,jp(f,n,c);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":jp(f,n,c)}var L;if(mh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else bs?Dv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Rv&&n.locale!=="ko"&&(bs||y!=="onCompositionStart"?y==="onCompositionEnd"&&bs&&(L=Lv()):(Wi=c,dh="value"in Wi?Wi.value:Wi.textContent,bs=!0)),C=Ql(u,y),0<C.length&&(y=new Op(y,t,null,n,c),f.push({event:y,listeners:C}),L?y.data=L:(L=Iv(n),L!==null&&(y.data=L)))),(L=wS?MS(t,n):ES(t,n))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(c=new Op("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=L))}$v(f,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=na(t,n),s!=null&&i.unshift(ua(t,s,r)),s=na(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=na(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=na(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(FS,`
`).replace(BS,"")}function Ga(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(se(425))}function Jl(){}var sd=null,od=null;function ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(t){return Qp.resolve(null).then(t).catch(HS)}:ld;function HS(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sa(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ni="__reactFiber$"+fo,ca="__reactProps$"+fo,Ei="__reactContainer$"+fo,ud="__reactEvents$"+fo,GS="__reactListeners$"+fo,WS="__reactHandles$"+fo;function wr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jp(t);t!==null;){if(n=t[ni])return n;t=Jp(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Lu(t){return t[ca]||null}var cd=[],Ps=-1;function ur(t){return{current:t}}function rt(t){0>Ps||(t.current=cd[Ps],cd[Ps]=null,Ps--)}function nt(t,e){Ps++,cd[Ps]=t.current,t.current=e}var sr={},Wt=ur(sr),sn=ur(!1),zr=sr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Kl(){rt(sn),rt(Wt)}function Kp(t,e,n){if(Wt.current!==sr)throw Error(se(168));nt(Wt,e),nt(sn,n)}function Xv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Ay(t)||"Unknown",r));return ft({},n,i)}function eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,zr=Wt.current,nt(Wt,t),nt(sn,sn.current),!0}function em(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Xv(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,rt(sn),rt(Wt),nt(Wt,t)):rt(sn),nt(sn,n)}var vi=null,Ru=!1,Oc=!1;function qv(t){vi===null?vi=[t]:vi.push(t)}function $S(t){Ru=!0,qv(t)}function cr(){if(!Oc&&vi!==null){Oc=!0;var t=0,e=Qe;try{var n=vi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Ru=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),xv(lh,cr),r}finally{Qe=e,Oc=!1}}return null}var Ls=[],Rs=0,tu=null,nu=0,Mn=[],En=0,Nr=null,_i=1,xi="";function mr(t,e){Ls[Rs++]=nu,Ls[Rs++]=tu,tu=t,nu=e}function Yv(t,e,n){Mn[En++]=_i,Mn[En++]=xi,Mn[En++]=Nr,Nr=t;var i=_i;t=xi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-jn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function vh(t){t.return!==null&&(mr(t,1),Yv(t,1,0))}function _h(t){for(;t===tu;)tu=Ls[--Rs],Ls[Rs]=null,nu=Ls[--Rs],Ls[Rs]=null;for(;t===Nr;)Nr=Mn[--En],Mn[En]=null,xi=Mn[--En],Mn[En]=null,_i=Mn[--En],Mn[En]=null}var pn=null,hn=null,ot=!1,Un=null;function Zv(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(ot){var e=hn;if(e){var n=e;if(!tm(t,e)){if(fd(t))throw Error(se(418));e=Zi(n.nextSibling);var i=pn;e&&tm(t,e)?Zv(i,n):(t.flags=t.flags&-4097|2,ot=!1,pn=t)}}else{if(fd(t))throw Error(se(418));t.flags=t.flags&-4097|2,ot=!1,pn=t}}}function nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Wa(t){if(t!==pn)return!1;if(!ot)return nm(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ad(t.type,t.memoizedProps)),e&&(e=hn)){if(fd(t))throw Qv(),Error(se(418));for(;e;)Zv(t,e),e=Zi(e.nextSibling)}if(nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Zi(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=hn;t;)t=Zi(t.nextSibling)}function Js(){hn=pn=null,ot=!1}function xh(t){Un===null?Un=[t]:Un.push(t)}var jS=Ai.ReactCurrentBatchConfig;function Fn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var iu=ur(null),ru=null,Ds=null,yh=null;function Sh(){yh=Ds=ru=null}function wh(t){var e=iu.current;rt(iu),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){ru=t,yh=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(ru===null)throw Error(se(308));Ds=t,ru.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Mr=null;function Mh(t){Mr===null?Mr=[t]:Mr.push(t)}function Jv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Ge&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function im(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,h=a;switch(d=e,m=n,h.tag){case 1:if(_=h.payload,typeof _=="function"){f=_.call(m,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=h.payload,d=typeof _=="function"?_.call(m,f,d):_,d==null)break e;f=ft({},f,d);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=f}}function rm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var e1=new J0.Component().refs;function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Xn(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Ki(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(Xn(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Ki(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(Xn(e,t,i,n),Rl(e,t,i))}};function sm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!aa(n,i)||!aa(r,s):!0}function t1(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?zr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Qs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=e1,Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?zr:Wt.current,r.context=Qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Du.enqueueReplaceState(r,r.state,null),su(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===e1&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function n1(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=er(g,v),g.index=0,g.sibling=null,g}function s(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,x,S){return v===null||v.tag!==6?(v=Wc(x,g.mode,S),v.return=g,v):(v=r(v,x),v.return=g,v)}function l(g,v,x,S){var w=x.type;return w===Es?c(g,v,x.props.children,S,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&am(w)===v.type)?(S=r(v,x.props),S.ref=bo(g,v,x),S.return=g,S):(S=Ol(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,v,x),S.return=g,S)}function u(g,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=$c(x,g.mode,S),v.return=g,v):(v=r(v,x.children||[]),v.return=g,v)}function c(g,v,x,S,w){return v===null||v.tag!==7?(v=Lr(x,g.mode,S,w),v.return=g,v):(v=r(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return x=Ol(v.type,v.key,v.props,null,g.mode,x),x.ref=bo(g,null,v),x.return=g,x;case Ms:return v=$c(v,g.mode,x),v.return=g,v;case Bi:var S=v._init;return f(g,S(v._payload),x)}if(zo(v)||yo(v))return v=Lr(v,g.mode,x,null),v.return=g,v;$a(g,v)}return null}function d(g,v,x,S){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:return x.key===w?l(g,v,x,S):null;case Ms:return x.key===w?u(g,v,x,S):null;case Bi:return w=x._init,d(g,v,w(x._payload),S)}if(zo(x)||yo(x))return w!==null?null:c(g,v,x,S,null);$a(g,x)}return null}function m(g,v,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,a(v,g,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ka:return g=g.get(S.key===null?x:S.key)||null,l(v,g,S,w);case Ms:return g=g.get(S.key===null?x:S.key)||null,u(v,g,S,w);case Bi:var C=S._init;return m(g,v,x,C(S._payload),w)}if(zo(S)||yo(S))return g=g.get(x)||null,c(v,g,S,w,null);$a(v,S)}return null}function _(g,v,x,S){for(var w=null,C=null,L=v,y=v=0,T=null;L!==null&&y<x.length;y++){L.index>y?(T=L,L=null):T=L.sibling;var D=d(g,L,x[y],S);if(D===null){L===null&&(L=T);break}t&&L&&D.alternate===null&&e(g,L),v=s(D,v,y),C===null?w=D:C.sibling=D,C=D,L=T}if(y===x.length)return n(g,L),ot&&mr(g,y),w;if(L===null){for(;y<x.length;y++)L=f(g,x[y],S),L!==null&&(v=s(L,v,y),C===null?w=L:C.sibling=L,C=L);return ot&&mr(g,y),w}for(L=i(g,L);y<x.length;y++)T=m(L,g,y,x[y],S),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?y:T.key),v=s(T,v,y),C===null?w=T:C.sibling=T,C=T);return t&&L.forEach(function(O){return e(g,O)}),ot&&mr(g,y),w}function h(g,v,x,S){var w=yo(x);if(typeof w!="function")throw Error(se(150));if(x=w.call(x),x==null)throw Error(se(151));for(var C=w=null,L=v,y=v=0,T=null,D=x.next();L!==null&&!D.done;y++,D=x.next()){L.index>y?(T=L,L=null):T=L.sibling;var O=d(g,L,D.value,S);if(O===null){L===null&&(L=T);break}t&&L&&O.alternate===null&&e(g,L),v=s(O,v,y),C===null?w=O:C.sibling=O,C=O,L=T}if(D.done)return n(g,L),ot&&mr(g,y),w;if(L===null){for(;!D.done;y++,D=x.next())D=f(g,D.value,S),D!==null&&(v=s(D,v,y),C===null?w=D:C.sibling=D,C=D);return ot&&mr(g,y),w}for(L=i(g,L);!D.done;y++,D=x.next())D=m(L,g,y,D.value,S),D!==null&&(t&&D.alternate!==null&&L.delete(D.key===null?y:D.key),v=s(D,v,y),C===null?w=D:C.sibling=D,C=D);return t&&L.forEach(function(re){return e(g,re)}),ot&&mr(g,y),w}function p(g,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Es&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ka:e:{for(var w=x.key,C=v;C!==null;){if(C.key===w){if(w=x.type,w===Es){if(C.tag===7){n(g,C.sibling),v=r(C,x.props.children),v.return=g,g=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Bi&&am(w)===C.type){n(g,C.sibling),v=r(C,x.props),v.ref=bo(g,C,x),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}x.type===Es?(v=Lr(x.props.children,g.mode,S,x.key),v.return=g,g=v):(S=Ol(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,v,x),S.return=g,g=S)}return o(g);case Ms:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=r(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=$c(x,g.mode,S),v.return=g,g=v}return o(g);case Bi:return C=x._init,p(g,v,C(x._payload),S)}if(zo(x))return _(g,v,x,S);if(yo(x))return h(g,v,x,S);$a(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,x),v.return=g,g=v):(n(g,v),v=Wc(x,g.mode,S),v.return=g,g=v),o(g)):n(g,v)}return p}var Ks=n1(!0),i1=n1(!1),Pa={},oi=ur(Pa),fa=ur(Pa),da=ur(Pa);function Er(t){if(t===Pa)throw Error(se(174));return t}function bh(t,e){switch(nt(da,e),nt(fa,t),nt(oi,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xf(e,t)}rt(oi),nt(oi,e)}function eo(){rt(oi),rt(fa),rt(da)}function r1(t){Er(da.current);var e=Er(oi.current),n=Xf(e,t.type);e!==n&&(nt(fa,t),nt(oi,n))}function Ch(t){fa.current===t&&(rt(oi),rt(fa))}var lt=ur(0);function ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function Th(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var Dl=Ai.ReactCurrentDispatcher,Bc=Ai.ReactCurrentBatchConfig,Or=0,ut=null,Et=null,Lt=null,au=!1,Xo=!1,ha=0,XS=0;function Ot(){throw Error(se(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(Or=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?QS:JS,t=n(i,r),Xo){s=0;do{if(Xo=!1,ha=0,25<=s)throw Error(se(301));s+=1,Lt=Et=null,e.updateQueue=null,Dl.current=KS,t=n(i,r)}while(Xo)}if(Dl.current=lu,e=Et!==null&&Et.next!==null,Or=0,Lt=Et=ut=null,au=!1,e)throw Error(se(300));return t}function Lh(){var t=ha!==0;return ha=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Ln(){if(Et===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Lt===null?ut.memoizedState:Lt.next;if(e!==null)Lt=e,Et=t;else{if(t===null)throw Error(se(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function pa(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ut.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Qn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Qn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s1(){}function o1(t,e){var n=ut,i=Ln(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Rh(u1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ma(9,l1.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(se(349));(Or&30)!==0||a1(n,e,r)}return r}function a1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l1(t,e,n,i){e.value=n,e.getSnapshot=i,c1(e)&&f1(t)}function u1(t,e,n){return n(function(){c1(e)&&f1(t)})}function c1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function f1(t){var e=bi(t,1);e!==null&&Xn(e,t,1,-1)}function lm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},e.queue=t,t=t.dispatch=ZS.bind(null,ut,t),[e.memoizedState,t]}function ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function d1(){return Ln().memoizedState}function Il(t,e,n,i){var r=ei();ut.flags|=t,r.memoizedState=ma(1|e,n,void 0,i===void 0?null:i)}function Iu(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=ma(e,n,s,i);return}}ut.flags|=t,r.memoizedState=ma(1|e,n,s,i)}function um(t,e){return Il(8390656,8,t,e)}function Rh(t,e){return Iu(2048,8,t,e)}function h1(t,e){return Iu(4,2,t,e)}function p1(t,e){return Iu(4,4,t,e)}function m1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g1(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4,4,m1.bind(null,e,t),n)}function Dh(){}function v1(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _1(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x1(t,e,n){return(Or&21)===0?(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n):(Qn(n,e)||(n=wv(),ut.lanes|=n,Fr|=n,t.baseState=!0),e)}function qS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Bc.transition;Bc.transition={};try{t(!1),e()}finally{Qe=n,Bc.transition=i}}function y1(){return Ln().memoizedState}function YS(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},S1(t))w1(e,n);else if(n=Jv(t,e,n,i),n!==null){var r=Zt();Xn(n,t,i,r),M1(n,e,i)}}function ZS(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(S1(t))w1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jv(t,e,r,i),n!==null&&(r=Zt(),Xn(n,t,i,r),M1(n,e,i))}}function S1(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function w1(t,e){Xo=au=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M1(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var lu={readContext:Pn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},QS={readContext:Pn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,m1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=YS.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:lm,useDebugValue:Dh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=lm(!1),e=t[0];return t=qS.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=ei();if(ot){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Rt===null)throw Error(se(349));(Or&30)!==0||a1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,um(u1.bind(null,i,s,t),[t]),i.flags|=2048,ma(9,l1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Rt.identifierPrefix;if(ot){var n=xi,i=_i;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:Pn,useCallback:v1,useContext:Pn,useEffect:Rh,useImperativeHandle:g1,useInsertionEffect:h1,useLayoutEffect:p1,useMemo:_1,useReducer:Uc,useRef:d1,useState:function(){return Uc(pa)},useDebugValue:Dh,useDeferredValue:function(t){var e=Ln();return x1(e,Et.memoizedState,t)},useTransition:function(){var t=Uc(pa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:o1,useId:y1,unstable_isNewReconciler:!1},KS={readContext:Pn,useCallback:v1,useContext:Pn,useEffect:Rh,useImperativeHandle:g1,useInsertionEffect:h1,useLayoutEffect:p1,useMemo:_1,useReducer:Vc,useRef:d1,useState:function(){return Vc(pa)},useDebugValue:Dh,useDeferredValue:function(t){var e=Ln();return Et===null?e.memoizedState=t:x1(e,Et.memoizedState,t)},useTransition:function(){var t=Vc(pa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:o1,useId:y1,unstable_isNewReconciler:!1};function to(t,e){try{var n="",i=e;do n+=Ty(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function E1(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cu||(cu=!0,Cd=i),gd(t,e)},n}function b1(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ew;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pw.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var tw=Ai.ReactCurrentOwner,rn=!1;function Yt(t,e,n,i){e.child=t===null?i1(e,null,n,i):Ks(e,t.child,n,i)}function hm(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=Ph(t,e,n,i,s,r),n=Lh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ot&&n&&vh(e),e.flags|=1,Yt(t,e,i,r),e.child)}function pm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C1(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function C1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(aa(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(rn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return vd(t,e,n,i,r)}function T1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ks,fn),fn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ks,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ks,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ks,fn),fn|=i;return Yt(t,e,r,n),e.child}function A1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=on(n)?zr:Wt.current;return s=Qs(e,s),Hs(e,r),n=Ph(t,e,n,i,s,r),i=Lh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(ot&&i&&vh(e),e.flags|=1,Yt(t,e,n,r),e.child)}function mm(t,e,n,i,r){if(on(n)){var s=!0;eu(e)}else s=!1;if(Hs(e,r),e.stateNode===null)kl(t,e),t1(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?zr:Wt.current,u=Qs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&om(e,o,i,u),Ui=!1;var d=e.memoizedState;o.state=d,su(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Ui?(typeof c=="function"&&(pd(e,n,c,i),l=e.memoizedState),(a=Ui||sm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?zr:Wt.current,l=Qs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&om(e,o,i,l),Ui=!1,d=e.memoizedState,o.state=d,su(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||sn.current||Ui?(typeof m=="function"&&(pd(e,n,m,i),_=e.memoizedState),(u=Ui||sm(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){A1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&em(e,n,!1),Ci(t,e,s);i=e.stateNode,tw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&em(e,n,!0),e.child}function P1(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),bh(t,e.containerInfo)}function gm(t,e,n,i,r){return Js(),xh(r),e.flags|=256,Yt(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function L1(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nu(o,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=xd,t):Ih(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&xh(i),Ks(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(se(422))),ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nu({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ks(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=xd,s);if((e.mode&1)===0)return ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Hc(s,i,void 0),ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),Xn(i,t,r,-1))}return Bh(),i=Hc(Error(se(421))),ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Zi(r.nextSibling),pn=e,ot=!0,Un=null,t!==null&&(Mn[En++]=_i,Mn[En++]=xi,Mn[En++]=Nr,_i=t.id,xi=t.overflow,Nr=e),e=Ih(e,i.children),e.flags|=4096,e)}function vm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function R1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=lt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,n,e);else if(t.tag===19)vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ou(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ou(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iw(t,e,n){switch(e.tag){case 3:P1(e),Js();break;case 5:r1(e);break;case 1:on(e.type)&&eu(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?L1(t,e,n):(nt(lt,lt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return R1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,T1(t,e,n)}return Ci(t,e,n)}var D1,Sd,I1,k1;D1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};I1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(oi.current);var s=null;switch(n){case"input":r=Gf(t,r),i=Gf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=jf(t,r),i=jf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}qf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};k1=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rw(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return on(e.type)&&Kl(),Ft(e),null;case 3:return i=e.stateNode,eo(),rt(sn),rt(Wt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Un!==null&&(Pd(Un),Un=null))),Sd(t,e),Ft(e),null;case 5:Ch(e);var r=Er(da.current);if(n=e.type,t!==null&&e.stateNode!=null)I1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ft(e),null}if(t=Er(oi.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[ca]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)it(Oo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Cp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Ap(i,s),it("invalid",i)}qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":za(i),Tp(i,s,!0);break;case"textarea":za(i),Pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[ca]=i,D1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)it(Oo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Cp(t,i),r=Gf(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":Ap(t,i),r=jf(t,i),it("invalid",t);break;default:r=i}qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(t,l):typeof l=="number"&&ta(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&ih(t,s,l,o))}switch(n){case"input":za(t),Tp(t,i,!1);break;case"textarea":za(t),Pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)k1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Er(da.current),Er(oi.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Ft(e),null;case 13:if(rt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&hn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Qv(),Js(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ni]=e}else Js(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Un!==null&&(Pd(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(lt.current&1)!==0?Ct===0&&(Ct=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return eo(),Sd(t,e),t===null&&la(e.stateNode.containerInfo),Ft(e),null;case 10:return wh(e.type._context),Ft(e),null;case 17:return on(e.type)&&Kl(),Ft(e),null;case 19:if(rt(lt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ou(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>no&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=ou(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Ft(e),null}else 2*xt()-s.renderingStartTime>no&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(fn&1073741824)!==0&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function sw(t,e){switch(_h(e),e.tag){case 1:return on(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return eo(),rt(sn),rt(Wt),Th(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(rt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(lt),null;case 4:return eo(),null;case 10:return wh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Xa=!1,Ht=!1,ow=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function wd(t,e,n){try{n()}catch(i){gt(t,e,i)}}var _m=!1;function aw(t,e){if(sd=Yl,t=Fv(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},Yl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var h=_.memoizedProps,p=_.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Fn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=_m,_m=!1,_}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,n,s)}r=r.next}while(r!==i)}}function ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z1(t){var e=t.alternate;e!==null&&(t.alternate=null,z1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[ca],delete e[ud],delete e[GS],delete e[WS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N1(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var It=null,Bn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)O1(t,e,n),n=n.sibling}function O1(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Ht||Is(n,e);case 6:var i=It,r=Bn;It=null,Ri(t,e,n),It=i,Bn=r,It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Bn?(t=It,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),sa(t)):Nc(It,n.stateNode));break;case 4:i=It,r=Bn,It=n.stateNode.containerInfo,Bn=!0,Ri(t,e,n),It=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&wd(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Ht&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Ri(t,e,n),Ht=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ow),e.forEach(function(i){var r=gw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Bn=!1;break e;case 3:It=a.stateNode.containerInfo,Bn=!0;break e;case 4:It=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(It===null)throw Error(se(160));O1(s,o,r),It=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F1(e,t),e=e.sibling}function F1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Kn(t),i&4){try{qo(3,t,t.return),ku(3,t)}catch(h){gt(t,t.return,h)}try{qo(5,t,t.return)}catch(h){gt(t,t.return,h)}}break;case 1:In(e,t),Kn(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(In(e,t),Kn(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{ta(r,"")}catch(h){gt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sv(r,s),Yf(a,o);var u=Yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?cv(r,f):c==="dangerouslySetInnerHTML"?lv(r,f):c==="children"?ta(r,f):ih(r,c,f,u)}switch(a){case"input":Wf(r,s);break;case"textarea":ov(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(h){gt(t,t.return,h)}}break;case 6:if(In(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){gt(t,t.return,h)}}break;case 3:if(In(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(h){gt(t,t.return,h)}break;case 4:In(e,t),Kn(t);break;case 13:In(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nh=xt())),i&4&&ym(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||c,In(e,t),Ht=u):In(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(xe=t,c=t.child;c!==null;){for(f=xe=c;xe!==null;){switch(d=xe,m=d.child,d.tag){case 0:case 11:case 14:case 15:qo(4,d,d.return);break;case 1:Is(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(h){gt(i,n,h)}}break;case 5:Is(d,d.return);break;case 22:if(d.memoizedState!==null){wm(f);continue}}m!==null?(m.return=d,xe=m):wm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uv("display",o))}catch(h){gt(t,t.return,h)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){gt(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Kn(t),i&4&&ym(t);break;case 21:break;default:In(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N1(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ta(r,""),i.flags&=-33);var s=xm(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=xm(t);Ed(t,a,o);break;default:throw Error(se(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lw(t,e,n){xe=t,B1(t)}function B1(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Xa;var u=Ht;if(Xa=o,(Ht=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Mm(r):l!==null?(l.return=o,xe=l):Mm(r);for(;s!==null;)xe=s,B1(s),s=s.sibling;xe=r,Xa=a,Ht=u}Sm(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,xe=s):Sm(t)}}function Sm(t){for(;xe!==null;){var e=xe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ht||ku(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Ht||e.flags&512&&Md(e)}catch(d){gt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function wm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Mm(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ku(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Md(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var uw=Math.ceil,uu=Ai.ReactCurrentDispatcher,kh=Ai.ReactCurrentOwner,An=Ai.ReactCurrentBatchConfig,Ge=0,Rt=null,wt=null,kt=0,fn=0,ks=ur(0),Ct=0,ga=null,Fr=0,zu=0,zh=0,Yo=null,tn=null,Nh=0,no=1/0,mi=null,cu=!1,Cd=null,Ji=null,qa=!1,$i=null,fu=0,Zo=0,Td=null,zl=-1,Nl=0;function Zt(){return(Ge&6)!==0?xt():zl!==-1?zl:zl=xt()}function Ki(t){return(t.mode&1)===0?1:(Ge&2)!==0&&kt!==0?kt&-kt:jS.transition!==null?(Nl===0&&(Nl=wv()),Nl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Pv(t.type)),t)}function Xn(t,e,n,i){if(50<Zo)throw Zo=0,Td=null,Error(se(185));Ca(t,n,i),((Ge&2)===0||t!==Rt)&&(t===Rt&&((Ge&2)===0&&(zu|=n),Ct===4&&Hi(t,kt)),an(t,i),n===1&&Ge===0&&(e.mode&1)===0&&(no=xt()+500,Ru&&cr()))}function an(t,e){var n=t.callbackNode;jy(t,e);var i=ql(t,t===Rt?kt:0);if(i===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?$S(Em.bind(null,t)):qv(Em.bind(null,t)),VS(function(){(Ge&6)===0&&cr()}),n=null;else{switch(Mv(i)){case 1:n=lh;break;case 4:n=yv;break;case 16:n=Xl;break;case 536870912:n=Sv;break;default:n=Xl}n=X1(n,U1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U1(t,e){if(zl=-1,Nl=0,(Ge&6)!==0)throw Error(se(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=ql(t,t===Rt?kt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=du(t,i);else{e=i;var r=Ge;Ge|=2;var s=H1();(Rt!==t||kt!==e)&&(mi=null,no=xt()+500,Pr(t,e));do try{dw();break}catch(a){V1(t,a)}while(1);Sh(),uu.current=s,Ge=r,wt!==null?e=0:(Rt=null,kt=0,e=Ct)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=ga,Pr(t,0),Hi(t,i),an(t,xt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!cw(r)&&(e=du(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=ga,Pr(t,0),Hi(t,i),an(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,tn,mi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Nh+500-xt(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(gr.bind(null,t,tn,mi),e);break}gr(t,tn,mi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uw(i/1960))-i,10<i){t.timeoutHandle=ld(gr.bind(null,t,tn,mi),i);break}gr(t,tn,mi);break;case 5:gr(t,tn,mi);break;default:throw Error(se(329))}}}return an(t,xt()),t.callbackNode===n?U1.bind(null,t):null}function Ad(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=du(t,e),t!==2&&(e=tn,tn=n,e!==null&&Pd(e)),t}function Pd(t){tn===null?tn=t:tn.push.apply(tn,t)}function cw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~zh,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Em(t){if((Ge&6)!==0)throw Error(se(327));Gs();var e=ql(t,0);if((e&1)===0)return an(t,xt()),null;var n=du(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=ga,Pr(t,0),Hi(t,e),an(t,xt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,tn,mi),an(t,xt()),null}function Oh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(no=xt()+500,Ru&&cr())}}function Br(t){$i!==null&&$i.tag===0&&(Ge&6)===0&&Gs();var e=Ge;Ge|=1;var n=An.transition,i=Qe;try{if(An.transition=null,Qe=1,t)return t()}finally{Qe=i,An.transition=n,Ge=e,(Ge&6)===0&&cr()}}function Fh(){fn=ks.current,rt(ks)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,US(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:eo(),rt(sn),rt(Wt),Th();break;case 5:Ch(i);break;case 4:eo();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:wh(i.type._context);break;case 22:case 23:Fh()}n=n.return}if(Rt=t,wt=t=er(t.current,null),kt=fn=e,Ct=0,ga=null,zh=zu=Fr=0,tn=Yo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function V1(t,e){do{var n=wt;try{if(Sh(),Dl.current=lu,au){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}au=!1}if(Or=0,Lt=Et=ut=null,Xo=!1,ha=0,kh.current=null,n===null||n.return===null){Ct=1,ga=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=fm(o);if(m!==null){m.flags&=-257,dm(m,o,a,s,e),m.mode&1&&cm(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var h=new Set;h.add(l),e.updateQueue=h}else _.add(l);break e}else{if((e&1)===0){cm(s,u,e),Bh();break e}l=Error(se(426))}}else if(ot&&a.mode&1){var p=fm(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),dm(p,o,a,s,e),xh(to(l,a));break e}}s=l=to(l,a),Ct!==4&&(Ct=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=E1(s,l,e);im(s,g);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ji===null||!Ji.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=b1(s,a,e);im(s,S);break e}}s=s.return}while(s!==null)}W1(n)}catch(w){e=w,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(1)}function H1(){var t=uu.current;return uu.current=lu,t===null?lu:t}function Bh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Rt===null||(Fr&268435455)===0&&(zu&268435455)===0||Hi(Rt,kt)}function du(t,e){var n=Ge;Ge|=2;var i=H1();(Rt!==t||kt!==e)&&(mi=null,Pr(t,e));do try{fw();break}catch(r){V1(t,r)}while(1);if(Sh(),Ge=n,uu.current=i,wt!==null)throw Error(se(261));return Rt=null,kt=0,Ct}function fw(){for(;wt!==null;)G1(wt)}function dw(){for(;wt!==null&&!Oy();)G1(wt)}function G1(t){var e=j1(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?W1(t):wt=e,kh.current=null}function W1(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=rw(n,e,fn),n!==null){wt=n;return}}else{if(n=sw(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function gr(t,e,n){var i=Qe,r=An.transition;try{An.transition=null,Qe=1,hw(t,e,n,i)}finally{An.transition=r,Qe=i}return null}function hw(t,e,n,i){do Gs();while($i!==null);if((Ge&6)!==0)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xy(t,s),t===Rt&&(wt=Rt=null,kt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qa||(qa=!0,X1(Xl,function(){return Gs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=An.transition,An.transition=null;var o=Qe;Qe=1;var a=Ge;Ge|=4,kh.current=null,aw(t,n),F1(n,t),IS(od),Yl=!!sd,od=sd=null,t.current=n,lw(n),Fy(),Ge=a,Qe=o,An.transition=s}else t.current=n;if(qa&&(qa=!1,$i=t,fu=r),s=t.pendingLanes,s===0&&(Ji=null),Vy(n.stateNode),an(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cu)throw cu=!1,t=Cd,Cd=null,t;return(fu&1)!==0&&t.tag!==0&&Gs(),s=t.pendingLanes,(s&1)!==0?t===Td?Zo++:(Zo=0,Td=t):Zo=0,cr(),null}function Gs(){if($i!==null){var t=Mv(fu),e=An.transition,n=Qe;try{if(An.transition=null,Qe=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,fu=0,(Ge&6)!==0)throw Error(se(331));var r=Ge;for(Ge|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if((xe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:qo(8,c,s)}var f=c.child;if(f!==null)f.return=c,xe=f;else for(;xe!==null;){c=xe;var d=c.sibling,m=c.return;if(z1(c),c===u){xe=null;break}if(d!==null){d.return=m,xe=d;break}xe=m}}}var _=s.alternate;if(_!==null){var h=_.child;if(h!==null){_.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}xe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,xe=g;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,xe=x;else e:for(o=v;xe!==null;){if(a=xe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ku(9,a)}}catch(w){gt(a,a.return,w)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(Ge=r,cr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{Qe=n,An.transition=e}}return!1}function bm(t,e,n){e=to(n,e),e=E1(t,e,1),t=Qi(t,e,1),e=Zt(),t!==null&&(Ca(t,1,e),an(t,e))}function gt(t,e,n){if(t.tag===3)bm(t,t,n);else for(;e!==null;){if(e.tag===3){bm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=to(n,t),t=b1(e,t,1),e=Qi(e,t,1),t=Zt(),e!==null&&(Ca(e,1,t),an(e,t));break}}e=e.return}}function pw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(kt&n)===n&&(Ct===4||Ct===3&&(kt&130023424)===kt&&500>xt()-Nh?Pr(t,0):zh|=n),an(t,e)}function $1(t,e){e===0&&((t.mode&1)===0?e=1:(e=Fa,Fa<<=1,(Fa&130023424)===0&&(Fa=4194304)));var n=Zt();t=bi(t,e),t!==null&&(Ca(t,e,n),an(t,n))}function mw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$1(t,n)}function gw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),$1(t,n)}var j1;j1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return rn=!1,iw(t,e,n);rn=(t.flags&131072)!==0}else rn=!1,ot&&(e.flags&1048576)!==0&&Yv(e,nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=Qs(e,Wt.current);Hs(e,n),r=Ph(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=Du,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&vh(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_w(i),t=Fn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=mm(null,e,i,t,n);break e;case 11:e=hm(null,e,i,t,n);break e;case 14:e=pm(null,e,i,Fn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),mm(t,e,i,r,n);case 3:e:{if(P1(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kv(t,e),su(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=to(Error(se(423)),e),e=gm(t,e,i,n,r);break e}else if(i!==r){r=to(Error(se(424)),e),e=gm(t,e,i,n,r);break e}else for(hn=Zi(e.stateNode.containerInfo.firstChild),pn=e,ot=!0,Un=null,n=i1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Ci(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return r1(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ad(i,r)?o=null:s!==null&&ad(i,s)&&(e.flags|=32),A1(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&dd(e),null;case 13:return L1(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),hm(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(iu,i._currentValue),i._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===r.children&&!sn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),pm(t,e,i,r,n);case 15:return C1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),kl(t,e),e.tag=1,on(i)?(t=!0,eu(e)):t=!1,Hs(e,n),t1(e,i,r),md(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return R1(t,e,n);case 22:return T1(t,e,n)}throw Error(se(156,e.tag))};function X1(t,e){return xv(t,e)}function vw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new vw(t,e,n,i)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _w(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Lr(n.children,r,s,e);case rh:o=8,r|=8;break;case Bf:return t=Cn(12,n,e,r|2),t.elementType=Bf,t.lanes=s,t;case Uf:return t=Cn(13,n,e,r),t.elementType=Uf,t.lanes=s,t;case Vf:return t=Cn(19,n,e,r),t.elementType=Vf,t.lanes=s,t;case nv:return Nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:o=10;break e;case tv:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case Bi:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Nu(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,s,o,a,l){return t=new xw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function yw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q1(t){if(!t)return sr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(on(n))return Xv(t,n,e)}return e}function Y1(t,e,n,i,r,s,o,a,l){return t=Vh(n,i,!0,t,r,s,o,a,l),t.context=q1(null),n=t.current,i=Zt(),r=Ki(n),s=Si(i,r),s.callback=e!=null?e:null,Qi(n,s,r),t.current.lanes=r,Ca(t,r,i),an(t,i),t}function Ou(t,e,n,i){var r=e.current,s=Zt(),o=Ki(r);return n=q1(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&(Xn(t,r,o,s),Rl(t,r,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function Sw(){return null}var Z1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}Fu.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Ou(t,e,null,null)};Fu.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ou(null,t,null,null)}),e[Ei]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&Av(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function ww(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=hu(o);s.call(u)}}var o=Y1(e,i,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=o,t[Ei]=o.current,la(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=hu(l);a.call(u)}}var l=Vh(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=l,t[Ei]=l.current,la(t.nodeType===8?t.parentNode:t),Br(function(){Ou(e,l,n,i)}),l}function Uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hu(o);a.call(l)}}Ou(e,o,t,r)}else o=ww(n,e,t,r,i);return hu(o)}Ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(uh(e,n|1),an(e,xt()),(Ge&6)===0&&(no=xt()+500,cr()))}break;case 13:Br(function(){var i=bi(t,1);if(i!==null){var r=Zt();Xn(i,t,1,r)}}),Hh(t,1)}};ch=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Zt();Xn(e,t,134217728,n)}Hh(t,134217728)}};bv=function(t){if(t.tag===13){var e=Ki(t),n=bi(t,e);if(n!==null){var i=Zt();Xn(n,t,e,i)}Hh(t,e)}};Cv=function(){return Qe};Tv=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Qf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lu(i);if(!r)throw Error(se(90));rv(i),Wf(i,r)}}}break;case"textarea":ov(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};hv=Oh;pv=Br;var Mw={usingClientEntryPoint:!1,Events:[Aa,As,Lu,fv,dv,Oh]},To={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ew={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vv(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Cu=Ya.inject(Ew),si=Ya}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(se(200));return yw(t,e,null,n)};vn.createRoot=function(t,e){if(!Wh(t))throw Error(se(299));var n=!1,i="",r=Z1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,la(t.nodeType===8?t.parentNode:t),new Gh(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=vv(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Br(t)};vn.hydrate=function(t,e,n){if(!Bu(e))throw Error(se(200));return Uu(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Z1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y1(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Ei]=e.current,la(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fu(e)};vn.render=function(t,e,n){if(!Bu(e))throw Error(se(200));return Uu(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(se(40));return t._reactRootContainer?(Br(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};vn.unstable_batchedUpdates=Oh;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Uu(t,e,n,!1,i)};vn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=vn})(eh);function bw(t){t()}let Q1=bw;const Cw=t=>Q1=t,Tw=()=>Q1,or=$n.createContext(null);function J1(){return ge.exports.useContext(or)}const Aw=()=>{throw new Error("uSES not initialized!")};let K1=Aw;const Pw=t=>{K1=t},Lw=(t,e)=>t===e;function Rw(t=or){const e=t===or?J1:()=>ge.exports.useContext(t);return function(i,r=Lw){const{store:s,subscription:o,getServerState:a}=e(),l=K1(o.addNestedSub,s.getState,a||s.getState,i,r);return ge.exports.useDebugValue(l),l}}const Dw=Rw();function pu(){return pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pu.apply(this,arguments)}function Iw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var e_={exports:{}},Je={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=typeof Symbol=="function"&&Symbol.for,$h=Dt?Symbol.for("react.element"):60103,jh=Dt?Symbol.for("react.portal"):60106,Vu=Dt?Symbol.for("react.fragment"):60107,Hu=Dt?Symbol.for("react.strict_mode"):60108,Gu=Dt?Symbol.for("react.profiler"):60114,Wu=Dt?Symbol.for("react.provider"):60109,$u=Dt?Symbol.for("react.context"):60110,Xh=Dt?Symbol.for("react.async_mode"):60111,ju=Dt?Symbol.for("react.concurrent_mode"):60111,Xu=Dt?Symbol.for("react.forward_ref"):60112,qu=Dt?Symbol.for("react.suspense"):60113,kw=Dt?Symbol.for("react.suspense_list"):60120,Yu=Dt?Symbol.for("react.memo"):60115,Zu=Dt?Symbol.for("react.lazy"):60116,zw=Dt?Symbol.for("react.block"):60121,Nw=Dt?Symbol.for("react.fundamental"):60117,Ow=Dt?Symbol.for("react.responder"):60118,Fw=Dt?Symbol.for("react.scope"):60119;function xn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case $h:switch(t=t.type,t){case Xh:case ju:case Vu:case Gu:case Hu:case qu:return t;default:switch(t=t&&t.$$typeof,t){case $u:case Xu:case Zu:case Yu:case Wu:return t;default:return e}}case jh:return e}}}function t_(t){return xn(t)===ju}Je.AsyncMode=Xh;Je.ConcurrentMode=ju;Je.ContextConsumer=$u;Je.ContextProvider=Wu;Je.Element=$h;Je.ForwardRef=Xu;Je.Fragment=Vu;Je.Lazy=Zu;Je.Memo=Yu;Je.Portal=jh;Je.Profiler=Gu;Je.StrictMode=Hu;Je.Suspense=qu;Je.isAsyncMode=function(t){return t_(t)||xn(t)===Xh};Je.isConcurrentMode=t_;Je.isContextConsumer=function(t){return xn(t)===$u};Je.isContextProvider=function(t){return xn(t)===Wu};Je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===$h};Je.isForwardRef=function(t){return xn(t)===Xu};Je.isFragment=function(t){return xn(t)===Vu};Je.isLazy=function(t){return xn(t)===Zu};Je.isMemo=function(t){return xn(t)===Yu};Je.isPortal=function(t){return xn(t)===jh};Je.isProfiler=function(t){return xn(t)===Gu};Je.isStrictMode=function(t){return xn(t)===Hu};Je.isSuspense=function(t){return xn(t)===qu};Je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vu||t===ju||t===Gu||t===Hu||t===qu||t===kw||typeof t=="object"&&t!==null&&(t.$$typeof===Zu||t.$$typeof===Yu||t.$$typeof===Wu||t.$$typeof===$u||t.$$typeof===Xu||t.$$typeof===Nw||t.$$typeof===Ow||t.$$typeof===Fw||t.$$typeof===zw)};Je.typeOf=xn;(function(t){t.exports=Je})(e_);var qh=e_.exports,Bw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yh={};Yh[qh.ForwardRef]=Vw;Yh[qh.Memo]=n_;function Am(t){return qh.isMemo(t)?n_:Yh[t.$$typeof]||Bw}var Hw=Object.defineProperty,Gw=Object.getOwnPropertyNames,Pm=Object.getOwnPropertySymbols,Ww=Object.getOwnPropertyDescriptor,$w=Object.getPrototypeOf,Lm=Object.prototype;function i_(t,e,n){if(typeof e!="string"){if(Lm){var i=$w(e);i&&i!==Lm&&i_(t,i,n)}var r=Gw(e);Pm&&(r=r.concat(Pm(e)));for(var s=Am(t),o=Am(e),a=0;a<r.length;++a){var l=r[a];if(!Uw[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=Ww(e,l);try{Hw(t,l,u)}catch{}}}}return t}var jw=i_,Zh={exports:{}},Ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=Symbol.for("react.element"),Jh=Symbol.for("react.portal"),Qu=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),Xw=Symbol.for("react.server_context"),nc=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),oc=Symbol.for("react.lazy"),qw=Symbol.for("react.offscreen"),r_;r_=Symbol.for("react.module.reference");function Dn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qh:switch(t=t.type,t){case Qu:case Ku:case Ju:case ic:case rc:return t;default:switch(t=t&&t.$$typeof,t){case Xw:case tc:case nc:case oc:case sc:case ec:return t;default:return e}}case Jh:return e}}}Ke.ContextConsumer=tc;Ke.ContextProvider=ec;Ke.Element=Qh;Ke.ForwardRef=nc;Ke.Fragment=Qu;Ke.Lazy=oc;Ke.Memo=sc;Ke.Portal=Jh;Ke.Profiler=Ku;Ke.StrictMode=Ju;Ke.Suspense=ic;Ke.SuspenseList=rc;Ke.isAsyncMode=function(){return!1};Ke.isConcurrentMode=function(){return!1};Ke.isContextConsumer=function(t){return Dn(t)===tc};Ke.isContextProvider=function(t){return Dn(t)===ec};Ke.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qh};Ke.isForwardRef=function(t){return Dn(t)===nc};Ke.isFragment=function(t){return Dn(t)===Qu};Ke.isLazy=function(t){return Dn(t)===oc};Ke.isMemo=function(t){return Dn(t)===sc};Ke.isPortal=function(t){return Dn(t)===Jh};Ke.isProfiler=function(t){return Dn(t)===Ku};Ke.isStrictMode=function(t){return Dn(t)===Ju};Ke.isSuspense=function(t){return Dn(t)===ic};Ke.isSuspenseList=function(t){return Dn(t)===rc};Ke.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qu||t===Ku||t===Ju||t===ic||t===rc||t===qw||typeof t=="object"&&t!==null&&(t.$$typeof===oc||t.$$typeof===sc||t.$$typeof===ec||t.$$typeof===tc||t.$$typeof===nc||t.$$typeof===r_||t.getModuleId!==void 0)};Ke.typeOf=Dn;(function(t){t.exports=Ke})(Zh);function Yw(){const t=Tw();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,s=n={callback:i,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!r||e===null||(r=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Rm={notify(){},get:()=>[]};function Zw(t,e){let n,i=Rm;function r(f){return l(),i.subscribe(f)}function s(){i.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),i=Yw())}function u(){n&&(n(),n=void 0,i.clear(),i=Rm)}const c={addNestedSub:r,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>i};return c}const Qw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jw=Qw?ge.exports.useLayoutEffect:ge.exports.useEffect;var ac={exports:{}},lc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=ge.exports,e2=Symbol.for("react.element"),t2=Symbol.for("react.fragment"),n2=Object.prototype.hasOwnProperty,i2=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r2={key:!0,ref:!0,__self:!0,__source:!0};function s_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)n2.call(e,i)&&!r2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e2,type:t,key:s,ref:o,props:r,_owner:i2.current}}lc.Fragment=t2;lc.jsx=s_;lc.jsxs=s_;(function(t){t.exports=lc})(ac);const tt=ac.exports.Fragment,R=ac.exports.jsx,Re=ac.exports.jsxs;function s2({store:t,context:e,children:n,serverState:i}){const r=ge.exports.useMemo(()=>{const a=Zw(t);return{store:t,subscription:a,getServerState:i?()=>i:void 0}},[t,i]),s=ge.exports.useMemo(()=>t.getState(),[t]);return Jw(()=>{const{subscription:a}=r;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[r,s]),R((e||or).Provider,{value:r,children:n})}function o_(t=or){const e=t===or?J1:()=>ge.exports.useContext(t);return function(){const{store:i}=e();return i}}const o2=o_();function a2(t=or){const e=t===or?o2:o_(t);return function(){return e().dispatch}}const l2=a2();Pw(q0.exports.useSyncExternalStoreWithSelector);Cw(eh.exports.unstable_batchedUpdates);var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));var Dm=function(t){return t},Im="beforeunload",u2="hashchange",c2="popstate";function f2(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var y=Ur(i.location.hash.substr(1)),T=y.pathname,D=T===void 0?"/":T,O=y.search,re=O===void 0?"":O,ee=y.hash,U=ee===void 0?"":ee,X=r.state||{};return[X.idx,Dm({pathname:D,search:re,hash:U,state:X.usr||null,key:X.key||"default"})]}var o=null;function a(){if(o)m.call(o),o=null;else{var y=br.Pop,T=s(),D=T[0],O=T[1];if(m.length){if(D!=null){var re=c-D;re&&(o={action:y,location:O,retry:function(){C(re*-1)}},C(re))}}else x(y)}}i.addEventListener(c2,a),i.addEventListener(u2,function(){var y=s(),T=y[1];jc(T)!==jc(f)&&a()});var l=br.Pop,u=s(),c=u[0],f=u[1],d=zm(),m=zm();c==null&&(c=0,r.replaceState(pu({},r.state,{idx:c}),""));function _(){var y=document.querySelector("base"),T="";if(y&&y.getAttribute("href")){var D=i.location.href,O=D.indexOf("#");T=O===-1?D:D.slice(0,O)}return T}function h(y){return _()+"#"+(typeof y=="string"?y:jc(y))}function p(y,T){return T===void 0&&(T=null),Dm(pu({pathname:f.pathname,hash:"",search:""},typeof y=="string"?Ur(y):y,{state:T,key:d2()}))}function g(y,T){return[{usr:y.state,key:y.key,idx:T},h(y)]}function v(y,T,D){return!m.length||(m.call({action:y,location:T,retry:D}),!1)}function x(y){l=y;var T=s();c=T[0],f=T[1],d.call({action:l,location:f})}function S(y,T){var D=br.Push,O=p(y,T);function re(){S(y,T)}if(v(D,O,re)){var ee=g(O,c+1),U=ee[0],X=ee[1];try{r.pushState(U,"",X)}catch{i.location.assign(X)}x(D)}}function w(y,T){var D=br.Replace,O=p(y,T);function re(){w(y,T)}if(v(D,O,re)){var ee=g(O,c),U=ee[0],X=ee[1];r.replaceState(U,"",X),x(D)}}function C(y){r.go(y)}var L={get action(){return l},get location(){return f},createHref:h,push:S,replace:w,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(T){return d.push(T)},block:function(T){var D=m.push(T);return m.length===1&&i.addEventListener(Im,km),function(){D(),m.length||i.removeEventListener(Im,km)}}};return L}function km(t){t.preventDefault(),t.returnValue=""}function zm(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function d2(){return Math.random().toString(36).substr(2,8)}function jc(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Ur(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const a_=ge.exports.createContext(null),Kh=ge.exports.createContext(null),ep=ge.exports.createContext({outlet:null,matches:[]});function Vr(t,e){if(!t)throw new Error(e)}function h2(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Ur(e):e,r=u_(i.pathname||"/",n);if(r==null)return null;let s=l_(t);p2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=M2(s[a],r);return o}function l_(t,e,n,i){return e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i=""),t.forEach((r,s)=>{let o={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(i)||Vr(!1),o.relativePath=o.relativePath.slice(i.length));let a=Rr([i,o.relativePath]),l=n.concat(o);r.children&&r.children.length>0&&(r.index===!0&&Vr(!1),l_(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:S2(a,r.index),routesMeta:l})}),e}function p2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:w2(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const m2=/^:\w+$/,g2=3,v2=2,_2=1,x2=10,y2=-2,Nm=t=>t==="*";function S2(t,e){let n=t.split("/"),i=n.length;return n.some(Nm)&&(i+=y2),e&&(i+=v2),n.filter(r=>!Nm(r)).reduce((r,s)=>r+(m2.test(s)?g2:s===""?_2:x2),i)}function w2(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function M2(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=E2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let f=a.route;s.push({params:i,pathname:Rr([r,c.pathname]),pathnameBase:c_(Rr([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=Rr([r,c.pathnameBase]))}return s}function E2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=b2(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=C2(a[f]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function b2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(i.push(a),"([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,e?void 0:"i"),i]}function C2(t,e){try{return decodeURIComponent(t)}catch{return t}}function T2(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ur(t):t;return{pathname:n?n.startsWith("/")?n:A2(n,e):e,search:L2(i),hash:R2(r)}}function A2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function P2(t,e,n){let i=typeof t=="string"?Ur(t):t,r=t===""||i.pathname===""?"/":i.pathname,s;if(r==null)s=n;else{let a=e.length-1;if(r.startsWith("..")){let l=r.split("/");for(;l[0]==="..";)l.shift(),a-=1;i.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=T2(i,s);return r&&r!=="/"&&r.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function u_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),c_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),L2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,R2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uc(){return ge.exports.useContext(Kh)!=null}function f_(){return uc()||Vr(!1),ge.exports.useContext(Kh).location}function tp(){uc()||Vr(!1);let{basename:t,navigator:e}=ge.exports.useContext(a_),{matches:n}=ge.exports.useContext(ep),{pathname:i}=f_(),r=JSON.stringify(n.map(a=>a.pathnameBase)),s=ge.exports.useRef(!1);return ge.exports.useEffect(()=>{s.current=!0}),ge.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=P2(a,JSON.parse(r),i);t!=="/"&&(u.pathname=Rr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,r,i])}function D2(t,e){uc()||Vr(!1);let{matches:n}=ge.exports.useContext(ep),i=n[n.length-1],r=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=f_(),a;if(e){var l;let d=typeof e=="string"?Ur(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Vr(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",f=h2(t,{pathname:c});return I2(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},r,d.params),pathname:Rr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Rr([s,d.pathnameBase])})),n)}function I2(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,i,r)=>ge.exports.createElement(ep.Provider,{children:i.route.element!==void 0?i.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,r+1))}}),null)}function k2(t){let{basename:e="/",children:n=null,location:i,navigationType:r=br.Pop,navigator:s,static:o=!1}=t;uc()&&Vr(!1);let a=c_(e),l=ge.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Ur(i));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:m="default"}=i,_=ge.exports.useMemo(()=>{let h=u_(u,a);return h==null?null:{pathname:h,search:c,hash:f,state:d,key:m}},[a,u,c,f,d,m]);return _==null?null:ge.exports.createElement(a_.Provider,{value:l},ge.exports.createElement(Kh.Provider,{children:n,value:{location:_,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z2(t){let{basename:e,children:n,window:i}=t,r=ge.exports.useRef();r.current==null&&(r.current=f2({window:i}));let s=r.current,[o,a]=ge.exports.useState({action:s.action,location:s.location});return ge.exports.useLayoutEffect(()=>s.listen(a),[s]),ge.exports.createElement(k2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const N2=()=>R("div",{children:"Course"}),O2=()=>R("div",{children:"Document"}),gp=class{constructor(){E(this,"type");E(this,"nativeEvent");E(this,"target");E(this,"currentTarget");E(this,"_stoped");E(this,"touchId");E(this,"keyCode");E(this,"delta")}setTo(e,n,i){return this.type=e,this.currentTarget=n,this.target=i,this}stopPropagation(){this._stoped=!0}get altKey(){return this.nativeEvent.altKey}get ctrlKey(){return this.nativeEvent.ctrlKey}get shiftKey(){return this.nativeEvent.shiftKey}get charCode(){return this.nativeEvent.charCode}get keyLocation(){return this.nativeEvent.location||this.nativeEvent.keyLocation}};let me=gp;E(me,"EMPTY",new gp),E(me,"MOUSE_DOWN","mousedown"),E(me,"MOUSE_UP","mouseup"),E(me,"CLICK","click"),E(me,"RIGHT_MOUSE_DOWN","rightmousedown"),E(me,"RIGHT_MOUSE_UP","rightmouseup"),E(me,"RIGHT_CLICK","rightclick"),E(me,"MOUSE_MOVE","mousemove"),E(me,"MOUSE_OVER","mouseover"),E(me,"MOUSE_OUT","mouseout"),E(me,"MOUSE_WHEEL","mousewheel"),E(me,"ROLL_OVER","mouseover"),E(me,"ROLL_OUT","mouseout"),E(me,"DOUBLE_CLICK","doubleclick"),E(me,"CHANGE","change"),E(me,"CHANGED","changed"),E(me,"RESIZE","resize"),E(me,"ADDED","added"),E(me,"REMOVED","removed"),E(me,"DISPLAY","display"),E(me,"UNDISPLAY","undisplay"),E(me,"ERROR","error"),E(me,"COMPLETE","complete"),E(me,"LOADED","loaded"),E(me,"READY","ready"),E(me,"PROGRESS","progress"),E(me,"INPUT","input"),E(me,"RENDER","render"),E(me,"OPEN","open"),E(me,"MESSAGE","message"),E(me,"CLOSE","close"),E(me,"KEY_DOWN","keydown"),E(me,"KEY_PRESS","keypress"),E(me,"KEY_UP","keyup"),E(me,"FRAME","enterframe"),E(me,"DRAG_START","dragstart"),E(me,"DRAG_MOVE","dragmove"),E(me,"DRAG_END","dragend"),E(me,"ENTER","enter"),E(me,"SELECT","select"),E(me,"BLUR","blur"),E(me,"FOCUS","focus"),E(me,"VISIBILITY_CHANGE","visibilitychange"),E(me,"FOCUS_CHANGE","focuschange"),E(me,"PLAYED","played"),E(me,"PAUSED","paused"),E(me,"STOPPED","stopped"),E(me,"START","start"),E(me,"END","end"),E(me,"COMPONENT_ADDED","componentadded"),E(me,"COMPONENT_REMOVED","componentremoved"),E(me,"RELEASED","released"),E(me,"LINK","link"),E(me,"LABEL","label"),E(me,"FULL_SCREEN_CHANGE","fullscreenchange"),E(me,"DEVICE_LOST","devicelost"),E(me,"TRANSFORM_CHANGED","transformchanged"),E(me,"ANIMATION_CHANGED","animationchanged"),E(me,"TRAIL_FILTER_CHANGE","trailfilterchange"),E(me,"TRIGGER_ENTER","triggerenter"),E(me,"TRIGGER_STAY","triggerstay"),E(me,"TRIGGER_EXIT","triggerexit");class ie{}E(ie,"NUMBER_0",48),E(ie,"NUMBER_1",49),E(ie,"NUMBER_2",50),E(ie,"NUMBER_3",51),E(ie,"NUMBER_4",52),E(ie,"NUMBER_5",53),E(ie,"NUMBER_6",54),E(ie,"NUMBER_7",55),E(ie,"NUMBER_8",56),E(ie,"NUMBER_9",57),E(ie,"A",65),E(ie,"B",66),E(ie,"C",67),E(ie,"D",68),E(ie,"E",69),E(ie,"F",70),E(ie,"G",71),E(ie,"H",72),E(ie,"I",73),E(ie,"J",74),E(ie,"K",75),E(ie,"L",76),E(ie,"M",77),E(ie,"N",78),E(ie,"O",79),E(ie,"P",80),E(ie,"Q",81),E(ie,"R",82),E(ie,"S",83),E(ie,"T",84),E(ie,"U",85),E(ie,"V",86),E(ie,"W",87),E(ie,"X",88),E(ie,"Y",89),E(ie,"Z",90),E(ie,"F1",112),E(ie,"F2",113),E(ie,"F3",114),E(ie,"F4",115),E(ie,"F5",116),E(ie,"F6",117),E(ie,"F7",118),E(ie,"F8",119),E(ie,"F9",120),E(ie,"F10",121),E(ie,"F11",122),E(ie,"F12",123),E(ie,"F13",124),E(ie,"F14",125),E(ie,"F15",126),E(ie,"NUMPAD",21),E(ie,"NUMPAD_0",96),E(ie,"NUMPAD_1",97),E(ie,"NUMPAD_2",98),E(ie,"NUMPAD_3",99),E(ie,"NUMPAD_4",100),E(ie,"NUMPAD_5",101),E(ie,"NUMPAD_6",102),E(ie,"NUMPAD_7",103),E(ie,"NUMPAD_8",104),E(ie,"NUMPAD_9",105),E(ie,"NUMPAD_ADD",107),E(ie,"NUMPAD_DECIMAL",110),E(ie,"NUMPAD_DIVIDE",111),E(ie,"NUMPAD_ENTER",108),E(ie,"NUMPAD_MULTIPLY",106),E(ie,"NUMPAD_SUBTRACT",109),E(ie,"SEMICOLON",186),E(ie,"EQUAL",187),E(ie,"COMMA",188),E(ie,"MINUS",189),E(ie,"PERIOD",190),E(ie,"SLASH",191),E(ie,"BACKQUOTE",192),E(ie,"LEFTBRACKET",219),E(ie,"BACKSLASH",220),E(ie,"RIGHTBRACKET",221),E(ie,"QUOTE",222),E(ie,"ALTERNATE",18),E(ie,"BACKSPACE",8),E(ie,"CAPS_LOCK",20),E(ie,"COMMAND",15),E(ie,"CONTROL",17),E(ie,"DELETE",46),E(ie,"ENTER",13),E(ie,"ESCAPE",27),E(ie,"PAGE_UP",33),E(ie,"PAGE_DOWN",34),E(ie,"END",35),E(ie,"HOME",36),E(ie,"LEFT",37),E(ie,"UP",38),E(ie,"RIGHT",39),E(ie,"DOWN",40),E(ie,"SHIFT",16),E(ie,"SPACE",32),E(ie,"TAB",9),E(ie,"INSERT",45);class F2{startUp(){console.log("test module start up."),this.addEvent()}exit(){console.log("test module exit."),this.dispose(),this.removeEvent()}dispose(){}addEvent(){bt.ED.on(me.KEY_DOWN,this,this.onkeydown)}removeEvent(){bt.ED.off(me.KEY_DOWN,this,this.onkeydown)}onkeydown(e){switch(e.keyCode){case ie.ESCAPE:console.log("press escape key");break}}}class B2{startUp(){}dispose(){}}class U2{startUp(){}dispose(){}render(){let e=bt.MGR.scene,n=e.main.render,i=e.main.css2dRender,r=e.main.camera,s=e.main.scene;n&&n.render(s,r),i&&i.render(s,r)}}var Gn=(t=>(t.CAD_SERVICE="service.cad",t.SCHEME_SERVICE="service.scheme",t.SCENE_SERVICE="service.scene",t.MESH_SERVICE="service.mesh",t))(Gn||{}),mt=(t=>(t[t.NONE=-1]="NONE",t[t.ROTATE=0]="ROTATE",t[t.ZOOM=1]="ZOOM",t[t.PAN=2]="PAN",t[t.TOUCH_ROTATE=3]="TOUCH_ROTATE",t[t.TOUCH_ZOOM_PAN=4]="TOUCH_ZOOM_PAN",t))(mt||{}),Fl=(t=>(t[t.COLOR_PIURITY_DEPTH=2369840]="COLOR_PIURITY_DEPTH",t[t.COLOR_PIURITY_LIGHT=13816790]="COLOR_PIURITY_LIGHT",t))(Fl||{});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="143",Xc={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},V2=0,Om=1,H2=2,d_=1,G2=2,Fo=3,va=0,qn=1,Hr=2,W2=1,tr=0,Ws=1,Fm=2,Bm=3,Um=4,$2=5,Ss=100,j2=101,X2=102,Vm=103,Hm=104,q2=200,Y2=201,Z2=202,Q2=203,h_=204,p_=205,J2=206,K2=207,eM=208,tM=209,nM=210,iM=0,rM=1,sM=2,Ld=3,oM=4,aM=5,lM=6,uM=7,m_=0,cM=1,fM=2,wi=0,dM=1,hM=2,pM=3,mM=4,gM=5,g_=300,io=301,ro=302,Rd=303,Dd=304,cc=306,Id=1e3,Vn=1001,kd=1002,nn=1003,Gm=1004,Wm=1005,bn=1006,vM=1007,fc=1008,Gr=1009,_M=1010,xM=1011,v_=1012,yM=1013,Cr=1014,Tr=1015,_a=1016,SM=1017,wM=1018,$s=1020,MM=1021,EM=1022,ri=1023,bM=1024,CM=1025,Dr=1026,so=1027,TM=1028,AM=1029,PM=1030,LM=1031,RM=1033,qc=33776,Yc=33777,Zc=33778,Qc=33779,$m=35840,jm=35841,Xm=35842,qm=35843,DM=36196,Ym=37492,Zm=37496,Qm=37808,Jm=37809,Km=37810,eg=37811,tg=37812,ng=37813,ig=37814,rg=37815,sg=37816,og=37817,ag=37818,lg=37819,ug=37820,cg=37821,fg=36492,Wr=3e3,at=3001,IM=3200,kM=3201,zM=0,NM=1,gi="srgb",Ar="srgb-linear",Jc=7680,OM=519,zd=35044,dg="300 es",Nd=1035;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=Math.PI/180,hg=180/Math.PI;function nr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function FM(t,e){return(t%e+e)%e}function ef(t,e,n){return(1-n)*t+n*e}function pg(t){return(t&t-1)===0&&t!==0}function Od(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tn{constructor(){Tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],_=i[8],h=r[0],p=r[3],g=r[6],v=r[1],x=r[4],S=r[7],w=r[2],C=r[5],L=r[8];return s[0]=o*h+a*v+l*w,s[3]=o*p+a*x+l*C,s[6]=o*g+a*S+l*L,s[1]=u*h+c*v+f*w,s[4]=u*p+c*x+f*C,s[7]=u*g+c*S+f*L,s[2]=d*h+m*v+_*w,s[5]=d*p+m*x+_*C,s[8]=d*g+m*S+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,_=n*f+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/_;return e[0]=f*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=m*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function __(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const tf={[gi]:{[Ar]:Ir},[Ar]:{[gi]:Bl}},kn={legacyMode:!0,get workingColorSpace(){return Ar},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(tf[e]&&tf[e][n]!==void 0){const i=tf[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={r:0,g:0,b:0},zn={h:0,s:0,l:0},Za={h:0,s:0,l:0};function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Qa(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ar){return this.r=e,this.g=n,this.b=i,kn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ar){if(e=FM(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nf(o,s,e+1/3),this.g=nf(o,s,e),this.b=nf(o,s,e-1/3)}return kn.toWorkingColorSpace(this,r),this}setStyle(e,n=gi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=gi){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return kn.fromWorkingColorSpace(Qa(this,Mt),e),dn(Mt.r*255,0,255)<<16^dn(Mt.g*255,0,255)<<8^dn(Mt.b*255,0,255)<<0}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ar){kn.fromWorkingColorSpace(Qa(this,Mt),n);const i=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ar){return kn.fromWorkingColorSpace(Qa(this,Mt),n),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=gi){return kn.fromWorkingColorSpace(Qa(this,Mt),e),e!==gi?`color(${e} ${Mt.r} ${Mt.g} ${Mt.b})`:`rgb(${Mt.r*255|0},${Mt.g*255|0},${Mt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(Za);const i=ef(zn.h,Za.h,n),r=ef(zn.s,Za.s,n),s=ef(zn.l,Za.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=x_;let ns;class y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ns===void 0&&(ns=xa("canvas")),ns.width=e.width,ns.height=e.height;const i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ns}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class S_{constructor(e=null){this.isSource=!0,this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rf(r[o].image)):s.push(rf(r[o]))}else s=rf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?y_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;class Rn extends ho{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=Vn,r=Vn,s=bn,o=fc,a=ri,l=Gr,u=1,c=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=nr(),this.name="",this.source=new S_(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==g_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=g_;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],_=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-h)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+h)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(m+1)/2,w=(g+1)/2,C=(c+d)/4,L=(f+h)/4,y=(_+p)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-h)*(f-h)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-h)/v,this.z=(d-c)/v,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $r extends ho{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new S_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class w_ extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class UM extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=h;return}if(f!==h||l!==d||u!==m||c!==_){let p=1-a;const g=l*d+u*m+c*_+f*h,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),C=Math.atan2(w,g*v);p=Math.sin(p*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*p+d*S,u=u*p+m*S,c=c*p+_*S,f=f*p+h*S,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*m-u*d,e[n+1]=l*_+c*d+u*f-a*m,e[n+2]=u*_+c*m+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"YXZ":this._x=d*c*f+u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"ZXY":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f-d*m*_;break;case"ZYX":this._x=d*c*f-u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f+d*m*_;break;case"YZX":this._x=d*c*f+u*m*_,this._y=u*m*f+d*c*_,this._z=u*c*_-d*m*f,this._w=u*c*f-d*m*_;break;case"XZY":this._x=d*c*f-u*m*_,this._y=u*m*f-d*c*_,this._z=u*c*_+d*m*f,this._w=u*c*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new I,mg=new po;class La{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=dr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)dr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(dr)}else i.boundingBox===null&&i.computeBoundingBox(),of.copy(i.boundingBox),of.applyMatrix4(e.matrixWorld),this.union(of);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dr),dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ja.subVectors(this.max,Ao),is.subVectors(e.a,Ao),rs.subVectors(e.b,Ao),ss.subVectors(e.c,Ao),Di.subVectors(rs,is),Ii.subVectors(ss,rs),hr.subVectors(is,ss);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-hr.z,hr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,hr.z,0,-hr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-hr.y,hr.x,0];return!af(n,is,rs,ss,Ja)||(n=[1,0,0,0,1,0,0,0,1],!af(n,is,rs,ss,Ja))?!1:(Ka.crossVectors(Di,Ii),n=[Ka.x,Ka.y,Ka.z],af(n,is,rs,ss,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(dr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],dr=new I,of=new La,is=new I,rs=new I,ss=new I,Di=new I,Ii=new I,hr=new I,Ao=new I,Ja=new I,Ka=new I,pr=new I;function af(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),c=i.dot(pr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const VM=new La,gg=new I,el=new I,lf=new I;class dc{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){lf.subVectors(e,this.center);const n=lf.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(lf.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?el.set(0,0,1).multiplyScalar(e.radius):el.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gg.copy(e.center).add(el)),this.expandByPoint(gg.copy(e.center).sub(el)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new I,uf=new I,tl=new I,ki=new I,cf=new I,nl=new I,ff=new I;class M_{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.direction).multiplyScalar(n).add(this.origin),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uf.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(uf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),a=ki.dot(this.direction),l=-ki.dot(tl),u=ki.lengthSq(),c=Math.abs(1-o*o);let f,d,m,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const h=1/c;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(tl).multiplyScalar(d).add(uf),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){cf.subVectors(n,e),nl.subVectors(i,e),ff.crossVectors(cf,nl);let o=this.direction.dot(ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(ki,nl));if(l<0)return null;const u=a*this.direction.dot(cf.cross(ki));if(u<0||l+u>o)return null;const c=-a*ki.dot(ff);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,m,_,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,_=a*c,h=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=d-h*u,n[9]=-a*l,n[2]=h-d*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,_=u*c,h=u*f;n[0]=d+h*a,n[4]=_*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=m*a-_,n[6]=h+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,_=u*c,h=u*f;n[0]=d-h*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*c,n[9]=h-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,_=a*c,h=a*f;n[0]=l*c,n[4]=_*u-m,n[8]=d*u+h,n[1]=l*f,n[5]=h*u+d,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,_=a*l,h=a*u;n[0]=l*c,n[4]=h-d*f,n[8]=_*f+m,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+_,n[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*u,_=a*l,h=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+h,n[5]=o*c,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*c,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HM,e,GM)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),zi.crossVectors(i,un),zi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),zi.crossVectors(i,un)),zi.normalize(),il.crossVectors(un,zi),r[0]=zi.x,r[4]=il.x,r[8]=un.x,r[1]=zi.y,r[5]=il.y,r[9]=un.y,r[2]=zi.z,r[6]=il.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],_=i[2],h=i[6],p=i[10],g=i[14],v=i[3],x=i[7],S=i[11],w=i[15],C=r[0],L=r[4],y=r[8],T=r[12],D=r[1],O=r[5],re=r[9],ee=r[13],U=r[2],X=r[6],$=r[10],J=r[14],k=r[3],z=r[7],V=r[11],K=r[15];return s[0]=o*C+a*D+l*U+u*k,s[4]=o*L+a*O+l*X+u*z,s[8]=o*y+a*re+l*$+u*V,s[12]=o*T+a*ee+l*J+u*K,s[1]=c*C+f*D+d*U+m*k,s[5]=c*L+f*O+d*X+m*z,s[9]=c*y+f*re+d*$+m*V,s[13]=c*T+f*ee+d*J+m*K,s[2]=_*C+h*D+p*U+g*k,s[6]=_*L+h*O+p*X+g*z,s[10]=_*y+h*re+p*$+g*V,s[14]=_*T+h*ee+p*J+g*K,s[3]=v*C+x*D+S*U+w*k,s[7]=v*L+x*O+S*X+w*z,s[11]=v*y+x*re+S*$+w*V,s[15]=v*T+x*ee+S*J+w*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],_=e[3],h=e[7],p=e[11],g=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+h*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+p*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],_=e[12],h=e[13],p=e[14],g=e[15],v=f*p*u-h*d*u+h*l*m-a*p*m-f*l*g+a*d*g,x=_*d*u-c*p*u-_*l*m+o*p*m+c*l*g-o*d*g,S=c*h*u-_*f*u+_*a*m-o*h*m-c*a*g+o*f*g,w=_*f*l-c*h*l-_*a*d+o*h*d+c*a*p-o*f*p,C=n*v+i*x+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*g-i*d*g)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*L,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*L,e[4]=x*L,e[5]=(c*p*s-_*d*s+_*r*m-n*p*m-c*r*g+n*d*g)*L,e[6]=(_*l*s-o*p*s-_*r*u+n*p*u+o*r*g-n*l*g)*L,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*L,e[8]=S*L,e[9]=(_*f*s-c*h*s-_*i*m+n*h*m+c*i*g-n*f*g)*L,e[10]=(o*h*s-_*a*s+_*i*u-n*h*u-o*i*g+n*a*g)*L,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*m-n*a*m)*L,e[12]=w*L,e[13]=(c*h*r-_*f*r+_*i*d-n*h*d-c*i*p+n*f*p)*L,e[14]=(_*a*r-o*h*r-_*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,_=s*f,h=o*c,p=o*f,g=a*f,v=l*u,x=l*c,S=l*f,w=i.x,C=i.y,L=i.z;return r[0]=(1-(h+g))*w,r[1]=(m+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(d+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*L,r[9]=(p-v)*L,r[10]=(1-(d+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),a=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,c=1/o,f=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new I,Nn=new ct,HM=new I(0,0,0),GM=new I(1,1,1),zi=new I,il=new I,un=new I,vg=new ct,_g=new po;class Ra{constructor(e=0,n=0,i=0,r=Ra.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ra.DefaultOrder="XYZ";Ra.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const xg=new I,as=new po,di=new ct,rl=new I,Po=new I,$M=new I,jM=new po,yg=new I(1,0,0),Sg=new I(0,1,0),wg=new I(0,0,1),XM={type:"added"},Mg={type:"removed"};class Nt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new I,n=new Ra,i=new po,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Tn}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,n){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Po,rl,this.up):di.lookAt(rl,Po,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),as.setFromRotationMatrix(di),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(XM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Mg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,jM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DefaultUp=new I(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;const On=new I,hi=new I,df=new I,pi=new I,ls=new I,us=new I,Eg=new I,hf=new I,pf=new I,mf=new I;class ii{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),hi.subVectors(i,n),df.subVectors(e,n);const o=On.dot(On),a=On.dot(hi),l=On.dot(df),u=hi.dot(hi),c=hi.dot(df),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi),l.set(0,0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),hi.subVectors(e,n),On.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ii.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),us.subVectors(s,i),hf.subVectors(e,i);const l=ls.dot(hf),u=us.dot(hf);if(l<=0&&u<=0)return n.copy(i);pf.subVectors(e,r);const c=ls.dot(pf),f=us.dot(pf);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ls,o);mf.subVectors(e,s);const m=ls.dot(mf),_=us.dot(mf);if(_>=0&&m<=_)return n.copy(s);const h=m*u-l*_;if(h<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(us,a);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return Eg.subVectors(s,r),a=(f-c)/(f-c+(m-_)),n.copy(r).addScaledVector(Eg,a);const g=1/(p+h+d);return o=h*g,a=d*g,n.copy(i).addScaledVector(ls,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qM=0;class mo extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Ws,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=h_,this.blendDst=p_,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ld,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=OM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jc,this.stencilZFail=Jc,this.stencilZPass=Jc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===W2;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==va&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ip extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,sl=new Pe;class Yn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=zd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new He),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Pe),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new I),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Tt),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sl.fromBufferAttribute(this,n),sl.applyMatrix3(e),this.setXY(n,sl.x,sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class b_ extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class C_ extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zn extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let YM=0;const wn=new ct,gf=new Nt,cs=new I,cn=new La,Lo=new La,Pt=new I;class li extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?C_:b_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Tn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,Lo.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,Lo.max),cn.expandByPoint(Pt)):(cn.expandByPoint(Lo.min),cn.expandByPoint(Lo.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(cs.fromBufferAttribute(e,u),Pt.add(cs)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new I,c[D]=new I;const f=new I,d=new I,m=new I,_=new Pe,h=new Pe,p=new Pe,g=new I,v=new I;function x(D,O,re){f.fromArray(r,D*3),d.fromArray(r,O*3),m.fromArray(r,re*3),_.fromArray(o,D*2),h.fromArray(o,O*2),p.fromArray(o,re*2),d.sub(f),m.sub(f),h.sub(_),p.sub(_);const ee=1/(h.x*p.y-p.x*h.y);!isFinite(ee)||(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(ee),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(ee),u[D].add(g),u[O].add(g),u[re].add(g),c[D].add(v),c[O].add(v),c[re].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,O=S.length;D<O;++D){const re=S[D],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)x(i[X+0],i[X+1],i[X+2])}const w=new I,C=new I,L=new I,y=new I;function T(D){L.fromArray(s,D*3),y.copy(L);const O=u[D];w.copy(O),w.sub(L.multiplyScalar(L.dot(O))).normalize(),C.crossVectors(y,O);const ee=C.dot(c[D])<0?-1:1;l[D*4]=w.x,l[D*4+1]=w.y,l[D*4+2]=w.z,l[D*4+3]=ee}for(let D=0,O=S.length;D<O;++D){const re=S[D],ee=re.start,U=re.count;for(let X=ee,$=ee+U;X<$;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)d[_++]=u[m++]}return new Yn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new ct,fs=new M_,vf=new dc,Ni=new I,Oi=new I,Fi=new I,_f=new I,xf=new I,yf=new I,ol=new I,al=new I,ll=new I,ul=new Pe,cl=new Pe,fl=new Pe,Sf=new I,dl=new I;class yi extends Nt{constructor(e=new li,n=new ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),vf.copy(i.boundingSphere),vf.applyMatrix4(s),e.ray.intersectsSphere(vf)===!1)||(bg.copy(s).invert(),fs.copy(e.ray).applyMatrix4(bg),i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,m=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const L=a.getX(w),y=a.getX(w+1),T=a.getX(w+2);o=hl(this,v,e,fs,l,u,c,f,d,L,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=a.getX(g),S=a.getX(g+1),w=a.getX(g+2);o=hl(this,r,e,fs,l,u,c,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const g=m[h],v=r[g.materialIndex],x=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=x,C=S;w<C;w+=3){const L=w,y=w+1,T=w+2;o=hl(this,v,e,fs,l,u,c,f,d,L,y,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const h=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=h,v=p;g<v;g+=3){const x=g,S=g+1,w=g+2;o=hl(this,r,e,fs,l,u,c,f,d,x,S,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function ZM(t,e,n,i,r,s,o,a){let l;if(e.side===qn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Hr,a),l===null)return null;dl.copy(a),dl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(dl);return u<n.near||u>n.far?null:{distance:u,point:dl.clone(),object:t}}function hl(t,e,n,i,r,s,o,a,l,u,c,f){Ni.fromBufferAttribute(r,u),Oi.fromBufferAttribute(r,c),Fi.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){ol.set(0,0,0),al.set(0,0,0),ll.set(0,0,0);for(let _=0,h=s.length;_<h;_++){const p=d[_],g=s[_];p!==0&&(_f.fromBufferAttribute(g,u),xf.fromBufferAttribute(g,c),yf.fromBufferAttribute(g,f),o?(ol.addScaledVector(_f,p),al.addScaledVector(xf,p),ll.addScaledVector(yf,p)):(ol.addScaledVector(_f.sub(Ni),p),al.addScaledVector(xf.sub(Oi),p),ll.addScaledVector(yf.sub(Fi),p)))}Ni.add(ol),Oi.add(al),Fi.add(ll)}t.isSkinnedMesh&&(t.boneTransform(u,Ni),t.boneTransform(c,Oi),t.boneTransform(f,Fi));const m=ZM(t,e,n,i,Ni,Oi,Fi,Sf);if(m){a&&(ul.fromBufferAttribute(a,u),cl.fromBufferAttribute(a,c),fl.fromBufferAttribute(a,f),m.uv=ii.getUV(Sf,Ni,Oi,Fi,ul,cl,fl,new Pe)),l&&(ul.fromBufferAttribute(l,u),cl.fromBufferAttribute(l,c),fl.fromBufferAttribute(l,f),m.uv2=ii.getUV(Sf,Ni,Oi,Fi,ul,cl,fl,new Pe));const _={a:u,b:c,c:f,normal:new I,materialIndex:0};ii.getNormal(Ni,Oi,Fi,_.normal),m.face=_}return m}class Da extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zn(u,3)),this.setAttribute("normal",new Zn(c,3)),this.setAttribute("uv",new Zn(f,2));function _(h,p,g,v,x,S,w,C,L,y,T){const D=S/L,O=w/y,re=S/2,ee=w/2,U=C/2,X=L+1,$=y+1;let J=0,k=0;const z=new I;for(let V=0;V<$;V++){const K=V*O-ee;for(let F=0;F<X;F++){const H=F*D-re;z[h]=H*v,z[p]=K*x,z[g]=U,u.push(z.x,z.y,z.z),z[h]=0,z[p]=0,z[g]=C>0?1:-1,c.push(z.x,z.y,z.z),f.push(F/L),f.push(1-V/y),J+=1}}for(let V=0;V<y;V++)for(let K=0;K<L;K++){const F=d+K+X*V,H=d+K+X*(V+1),q=d+(K+1)+X*(V+1),ae=d+(K+1)+X*V;l.push(F,H,ae),l.push(H,q,ae),k+=6}a.addGroup(m,k,T),m+=k,d+=J}}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const JM={clone:oo,merge:Ut};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=e3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class T_ extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends T_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hg*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=90,hs=1;class t3 extends Nt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Gt(ds,hs,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new Gt(ds,hs,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new Gt(ds,hs,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new Gt(ds,hs,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new Gt(ds,hs,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const u=new Gt(ds,hs,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new I(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=wi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class A_ extends Rn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n3 extends $r{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new A_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),s=new jr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:tr});s.uniforms.tEquirect.value=n;const o=new yi(r,s),a=n.minFilter;return n.minFilter===fc&&(n.minFilter=bn),new t3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const wf=new I,i3=new I,r3=new Tn;class vr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wf.subVectors(i,n).cross(i3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||r3.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new dc,pl=new I;class rp{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],m=i[9],_=i[10],h=i[11],p=i[12],g=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,h-d,x-p).normalize(),n[1].setComponents(a+r,f+l,h+d,x+p).normalize(),n[2].setComponents(a+s,f+u,h+m,x+g).normalize(),n[3].setComponents(a-s,f-u,h-m,x-g).normalize(),n[4].setComponents(a-o,f-c,h-_,x-v).normalize(),n[5].setComponents(a+o,f+c,h+_,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function s3(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,m=c.updateRange;t.bindBuffer(f,u),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class hc extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,m=[],_=[],h=[],p=[];for(let g=0;g<c;g++){const v=g*d-o;for(let x=0;x<u;x++){const S=x*f-s;_.push(S,-v,0),h.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+u*g,S=v+u*(g+1),w=v+1+u*(g+1),C=v+1+u*g;m.push(x,S,C),m.push(S,w,C)}this.setIndex(m),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(h,3)),this.setAttribute("uv",new Zn(p,2))}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var o3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,a3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l3=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,u3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,f3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d3="vec3 transformed = vec3( position );",h3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p3=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,m3=`#ifdef USE_IRIDESCENCE
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
#endif`,g3=`#ifdef USE_BUMPMAP
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
#endif`,v3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b3=`#define PI 3.141592653589793
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
}`,C3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T3=`vec3 transformedNormal = objectNormal;
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
#endif`,A3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,L3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D3="gl_FragColor = linearToOutputTexel( gl_FragColor );",I3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k3=`#ifdef USE_ENVMAP
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
#endif`,z3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N3=`#ifdef USE_ENVMAP
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
#endif`,O3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F3=`#ifdef USE_ENVMAP
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
#endif`,B3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G3=`#ifdef USE_GRADIENTMAP
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
}`,W3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j3=`vec3 diffuse = vec3( 1.0 );
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
#endif`,X3=`uniform bool receiveShadow;
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
#endif`,q3=`#if defined( USE_ENVMAP )
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
#endif`,Y3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Q3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J3=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,K3=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,tE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xE=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#ifdef USE_SHADOWMAP
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
#endif`,OE=`#ifdef USE_SHADOWMAP
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
#endif`,FE=`#ifdef USE_SHADOWMAP
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
#endif`,BE=`float getShadowMask() {
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
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,QE=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,JE=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,KE=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,eb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#include <envmap_common_pars_fragment>
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
}`,ab=`#include <common>
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
}`,lb=`#if DEPTH_PACKING == 3200
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
}`,ub=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hb=`uniform float scale;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,_b=`uniform vec3 diffuse;
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
}`,xb=`#define MATCAP
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
}`,yb=`#define MATCAP
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
}`,Sb=`#define NORMAL
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
}`,wb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,bb=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
}`,Tb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Pb=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Rb=`#include <common>
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
}`,Db=`uniform vec3 color;
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
}`,Ib=`uniform float rotation;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:o3,alphamap_pars_fragment:a3,alphatest_fragment:l3,alphatest_pars_fragment:u3,aomap_fragment:c3,aomap_pars_fragment:f3,begin_vertex:d3,beginnormal_vertex:h3,bsdfs:p3,iridescence_fragment:m3,bumpmap_pars_fragment:g3,clipping_planes_fragment:v3,clipping_planes_pars_fragment:_3,clipping_planes_pars_vertex:x3,clipping_planes_vertex:y3,color_fragment:S3,color_pars_fragment:w3,color_pars_vertex:M3,color_vertex:E3,common:b3,cube_uv_reflection_fragment:C3,defaultnormal_vertex:T3,displacementmap_pars_vertex:A3,displacementmap_vertex:P3,emissivemap_fragment:L3,emissivemap_pars_fragment:R3,encodings_fragment:D3,encodings_pars_fragment:I3,envmap_fragment:k3,envmap_common_pars_fragment:z3,envmap_pars_fragment:N3,envmap_pars_vertex:O3,envmap_physical_pars_fragment:q3,envmap_vertex:F3,fog_vertex:B3,fog_pars_vertex:U3,fog_fragment:V3,fog_pars_fragment:H3,gradientmap_pars_fragment:G3,lightmap_fragment:W3,lightmap_pars_fragment:$3,lights_lambert_vertex:j3,lights_pars_begin:X3,lights_toon_fragment:Y3,lights_toon_pars_fragment:Z3,lights_phong_fragment:Q3,lights_phong_pars_fragment:J3,lights_physical_fragment:K3,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:uE,map_particle_fragment:cE,map_particle_pars_fragment:fE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:vE,normal_fragment_begin:_E,normal_fragment_maps:xE,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:wE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:TE,output_fragment:AE,packing:PE,premultiplied_alpha_fragment:LE,project_vertex:RE,dithering_fragment:DE,dithering_pars_fragment:IE,roughnessmap_fragment:kE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:OE,shadowmap_vertex:FE,shadowmask_pars_fragment:BE,skinbase_vertex:UE,skinning_pars_vertex:VE,skinning_vertex:HE,skinnormal_vertex:GE,specularmap_fragment:WE,specularmap_pars_fragment:$E,tonemapping_fragment:jE,tonemapping_pars_fragment:XE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:ZE,uv_pars_vertex:QE,uv_vertex:JE,uv2_pars_fragment:KE,uv2_pars_vertex:eb,uv2_vertex:tb,worldpos_vertex:nb,background_vert:ib,background_frag:rb,cube_vert:sb,cube_frag:ob,depth_vert:ab,depth_frag:lb,distanceRGBA_vert:ub,distanceRGBA_frag:cb,equirect_vert:fb,equirect_frag:db,linedashed_vert:hb,linedashed_frag:pb,meshbasic_vert:mb,meshbasic_frag:gb,meshlambert_vert:vb,meshlambert_frag:_b,meshmatcap_vert:xb,meshmatcap_frag:yb,meshnormal_vert:Sb,meshnormal_frag:wb,meshphong_vert:Mb,meshphong_frag:Eb,meshphysical_vert:bb,meshphysical_frag:Cb,meshtoon_vert:Tb,meshtoon_frag:Ab,points_vert:Pb,points_frag:Lb,shadow_vert:Rb,shadow_frag:Db,sprite_vert:Ib,sprite_frag:kb},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tn},uv2Transform:{value:new Tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tn}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tn}}},ti={basic:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ut([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ut([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ut([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ut([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ut([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ut([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Tn},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},cube:{uniforms:Ut([fe.envmap,{opacity:{value:1}}]),vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ut([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ut([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:Ut([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function zb(t,e,n,i,r,s){const o=new He(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function m(h,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cc)?(u===void 0&&(u=new yi(new Da(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:oo(ti.cube.uniforms),vertexShader:ti.cube.vertexShader,fragmentShader:ti.cube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new yi(new hc(2,2),new jr({name:"BackgroundMaterial",uniforms:oo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function _(h,p){n.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,_(o,a)},render:m}}function Nb(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function f(U,X,$,J,k){let z=!1;if(o){const V=h(J,$,X);u!==V&&(u=V,m(u.object)),z=g(U,J,$,k),z&&v(U,J,$,k)}else{const V=X.wireframe===!0;(u.geometry!==J.id||u.program!==$.id||u.wireframe!==V)&&(u.geometry=J.id,u.program=$.id,u.wireframe=V,z=!0)}k!==null&&n.update(k,34963),(z||c)&&(c=!1,y(U,X,$,J),k!==null&&t.bindBuffer(34963,n.get(k).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function h(U,X,$){const J=$.wireframe===!0;let k=a[U.id];k===void 0&&(k={},a[U.id]=k);let z=k[X.id];z===void 0&&(z={},k[X.id]=z);let V=z[J];return V===void 0&&(V=p(d()),z[J]=V),V}function p(U){const X=[],$=[],J=[];for(let k=0;k<r;k++)X[k]=0,$[k]=0,J[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:J,object:U,attributes:{},index:null}}function g(U,X,$,J){const k=u.attributes,z=X.attributes;let V=0;const K=$.getAttributes();for(const F in K)if(K[F].location>=0){const q=k[F];let ae=z[F];if(ae===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;V++}return u.attributesNum!==V||u.index!==J}function v(U,X,$,J){const k={},z=X.attributes;let V=0;const K=$.getAttributes();for(const F in K)if(K[F].location>=0){let q=z[F];q===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),k[F]=ae,V++}u.attributes=k,u.attributesNum=V,u.index=J}function x(){const U=u.newAttributes;for(let X=0,$=U.length;X<$;X++)U[X]=0}function S(U){w(U,0)}function w(U,X){const $=u.newAttributes,J=u.enabledAttributes,k=u.attributeDivisors;$[U]=1,J[U]===0&&(t.enableVertexAttribArray(U),J[U]=1),k[U]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,X),k[U]=X)}function C(){const U=u.newAttributes,X=u.enabledAttributes;for(let $=0,J=X.length;$<J;$++)X[$]!==U[$]&&(t.disableVertexAttribArray($),X[$]=0)}function L(U,X,$,J,k,z){i.isWebGL2===!0&&($===5124||$===5125)?t.vertexAttribIPointer(U,X,$,k,z):t.vertexAttribPointer(U,X,$,J,k,z)}function y(U,X,$,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=J.attributes,z=$.getAttributes(),V=X.defaultAttributeValues;for(const K in z){const F=z[K];if(F.location>=0){let H=k[K];if(H===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const q=H.normalized,ae=H.itemSize,A=n.get(H);if(A===void 0)continue;const Se=A.buffer,Z=A.type,ye=A.bytesPerElement;if(H.isInterleavedBufferAttribute){const oe=H.data,Ee=oe.stride,ce=H.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)w(F.location+ve,oe.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<F.locationSize;ve++)S(F.location+ve);t.bindBuffer(34962,Se);for(let ve=0;ve<F.locationSize;ve++)L(F.location+ve,ae/F.locationSize,Z,q,Ee*ye,(ce+ae/F.locationSize*ve)*ye)}else{if(H.isInstancedBufferAttribute){for(let oe=0;oe<F.locationSize;oe++)w(F.location+oe,H.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let oe=0;oe<F.locationSize;oe++)S(F.location+oe);t.bindBuffer(34962,Se);for(let oe=0;oe<F.locationSize;oe++)L(F.location+oe,ae/F.locationSize,Z,q,ae*ye,ae/F.locationSize*oe*ye)}}else if(V!==void 0){const q=V[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(F.location,q);break;case 3:t.vertexAttrib3fv(F.location,q);break;case 4:t.vertexAttrib4fv(F.location,q);break;default:t.vertexAttrib1fv(F.location,q)}}}}C()}function T(){re();for(const U in a){const X=a[U];for(const $ in X){const J=X[$];for(const k in J)_(J[k].object),delete J[k];delete X[$]}delete a[U]}}function D(U){if(a[U.id]===void 0)return;const X=a[U.id];for(const $ in X){const J=X[$];for(const k in J)_(J[k].object),delete J[k];delete X[$]}delete a[U.id]}function O(U){for(const X in a){const $=a[X];if($[U.id]===void 0)continue;const J=$[U.id];for(const k in J)_(J[k].object),delete J[k];delete $[U.id]}}function re(){ee(),c=!0,u!==l&&(u=l,m(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:ee,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:S,disableUnusedAttributes:C}}function Ob(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Fb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),_=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=d>0,S=o||e.has("OES_texture_float"),w=x&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function Bb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new Tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||i!==0||r;return r=d,n=c(f,m,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,m){const _=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,x=v*4;let S=g.clippingState||null;l.value=S,S=c(_,d,x,m);for(let w=0;w!==x;++w)S[w]=n[w];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,_){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,_!==!0||p===null){const g=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,S=m;x!==h;++x,S+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Ub(t){let e=new WeakMap;function n(o,a){return a===Rd?o.mapping=io:a===Dd&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rd||a===Dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new n3(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ji extends T_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,Cg=[.125,.215,.35,.446,.526,.582],yr=20,Mf=new ji,Tg=new He;let Ef=null;const _r=(1+Math.sqrt(5))/2,ms=1/_r,Ag=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_r,ms),new I(0,_r,-ms),new I(ms,0,_r),new I(-ms,0,_r),new I(_r,ms,0),new I(-_r,ms,0)];class Pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ef=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef),e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:_a,format:ri,encoding:Wr,depthBuffer:!1},r=Lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(s)),this._blurMaterial=Hb(s,e,n)}return r}_compileMaterial(e){const n=new yi(this._lodPlanes[0],e);this._renderer.compile(n,Mf)}_sceneToCubeUV(e,n,i,r){const a=new Gt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Tg),c.toneMapping=wi,c.autoClear=!1;const m=new ip({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),_=new yi(new Da,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Tg),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;ml(r,v*x,g>2?x:0,x,x),c.setRenderTarget(r),h&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Mf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ag[(r-1)%Ag.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new yi(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),h=s/_,p=isFinite(s)?1+Math.floor(c*h):yr;p>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yr}`);const g=[];let v=0;for(let L=0;L<yr;++L){const y=L/h,T=Math.exp(-y*y/2);g.push(T),L===0?v+=T:L<p&&(v+=2*T)}for(let L=0;L<g.length;L++)g[L]=g[L]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-zs?r-x+zs:0),C=4*(this._cubeSize-S);ml(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(f,Mf)}}function Vb(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zs?l=Cg[o-t+zs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,h=3,p=2,g=1,v=new Float32Array(h*_*m),x=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,y=C>2?0:-1,T=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(T,h*_*C),x.set(d,p*_*C);const D=[C,C,C,C,C,C];S.set(D,g*_*C)}const w=new li;w.setAttribute("position",new Yn(v,h)),w.setAttribute("uv",new Yn(x,p)),w.setAttribute("faceIndex",new Yn(S,g)),e.push(w),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lg(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Hb(t,e,n){const i=new Float32Array(yr),r=new I(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rg(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Dg(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

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
	`}function Gb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Rd||l===Dd,c=l===io||l===ro;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Pg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Pg(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Wb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $b(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const h=m[_];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(f){const d=[],m=f.index,_=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let x=0,S=v.length;x<S;x+=3){const w=v[x+0],C=v[x+1],L=v[x+2];d.push(w,C,C,L,L,w)}}else{const v=_.array;h=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const w=x+0,C=x+1,L=x+2;d.push(w,C,C,L,L,w)}}const p=new(__(d)?C_:b_)(d,1);p.version=h;const g=s.get(f);g&&e.remove(g),s.set(f,p)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function jb(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function f(d,m,_){if(_===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,_),n.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function Xb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qb(t,e){return t[0]-e[0]}function Yb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function bf(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function Zb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let $=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",$)};var _=$;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let D=0;S===!0&&(D=1),w===!0&&(D=2),C===!0&&(D=3);let O=c.attributes.position.count*D,re=1;O>e.maxTextureSize&&(re=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const ee=new Float32Array(O*re*4*p),U=new w_(ee,O,re,p);U.type=Tr,U.needsUpdate=!0;const X=D*4;for(let J=0;J<p;J++){const k=L[J],z=y[J],V=T[J],K=O*re*4*J;for(let F=0;F<k.count;F++){const H=F*X;S===!0&&(o.fromBufferAttribute(k,F),k.normalized===!0&&bf(o,k),ee[K+H+0]=o.x,ee[K+H+1]=o.y,ee[K+H+2]=o.z,ee[K+H+3]=0),w===!0&&(o.fromBufferAttribute(z,F),z.normalized===!0&&bf(o,z),ee[K+H+4]=o.x,ee[K+H+5]=o.y,ee[K+H+6]=o.z,ee[K+H+7]=0),C===!0&&(o.fromBufferAttribute(V,F),V.normalized===!0&&bf(o,V),ee[K+H+8]=o.x,ee[K+H+9]=o.y,ee[K+H+10]=o.z,ee[K+H+11]=V.itemSize===4?o.w:1)}}g={count:p,texture:U,size:new Pe(O,re)},s.set(c,g),c.addEventListener("dispose",$)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let w=0;w<h;w++)p[w]=[w,0];i[c.id]=p}for(let w=0;w<h;w++){const C=p[w];C[0]=w,C[1]=m[w]}p.sort(Yb);for(let w=0;w<8;w++)w<h&&p[w][1]?(a[w][0]=p[w][0],a[w][1]=p[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(qb);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const C=a[w],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+w)!==g[L]&&c.setAttribute("morphTarget"+w,g[L]),v&&c.getAttribute("morphNormal"+w)!==v[L]&&c.setAttribute("morphNormal"+w,v[L]),r[w]=y,x+=y):(g&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const S=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Qb(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const L_=new Rn,R_=new w_,D_=new UM,I_=new A_,Ig=[],kg=[],zg=new Float32Array(16),Ng=new Float32Array(9),Og=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=kg[e];n===void 0&&(n=new Int32Array(e),kg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function eC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function tC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function nC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;Og.set(i),t.uniformMatrix2fv(this.addr,!1,Og),Jt(n,i)}}function iC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;Ng.set(i),t.uniformMatrix3fv(this.addr,!1,Ng),Jt(n,i)}}function rC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;zg.set(i),t.uniformMatrix4fv(this.addr,!1,zg),Jt(n,i)}}function sC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oC(t,e){const n=this.cache;Qt(n,e)||(t.uniform2iv(this.addr,e),Jt(n,e))}function aC(t,e){const n=this.cache;Qt(n,e)||(t.uniform3iv(this.addr,e),Jt(n,e))}function lC(t,e){const n=this.cache;Qt(n,e)||(t.uniform4iv(this.addr,e),Jt(n,e))}function uC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cC(t,e){const n=this.cache;Qt(n,e)||(t.uniform2uiv(this.addr,e),Jt(n,e))}function fC(t,e){const n=this.cache;Qt(n,e)||(t.uniform3uiv(this.addr,e),Jt(n,e))}function dC(t,e){const n=this.cache;Qt(n,e)||(t.uniform4uiv(this.addr,e),Jt(n,e))}function hC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||L_,r)}function pC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function mC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||I_,r)}function gC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||R_,r)}function vC(t){switch(t){case 5126:return Jb;case 35664:return Kb;case 35665:return eC;case 35666:return tC;case 35674:return nC;case 35675:return iC;case 35676:return rC;case 5124:case 35670:return sC;case 35667:case 35671:return oC;case 35668:case 35672:return aC;case 35669:case 35673:return lC;case 5125:return uC;case 36294:return cC;case 36295:return fC;case 36296:return dC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return pC;case 35680:case 36300:case 36308:case 36293:return mC;case 36289:case 36303:case 36311:case 36292:return gC}}function _C(t,e){t.uniform1fv(this.addr,e)}function xC(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function yC(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function SC(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function wC(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MC(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function EC(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bC(t,e){t.uniform1iv(this.addr,e)}function CC(t,e){t.uniform2iv(this.addr,e)}function TC(t,e){t.uniform3iv(this.addr,e)}function AC(t,e){t.uniform4iv(this.addr,e)}function PC(t,e){t.uniform1uiv(this.addr,e)}function LC(t,e){t.uniform2uiv(this.addr,e)}function RC(t,e){t.uniform3uiv(this.addr,e)}function DC(t,e){t.uniform4uiv(this.addr,e)}function IC(t,e,n){const i=e.length,r=pc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||L_,r[s])}function kC(t,e,n){const i=e.length,r=pc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||D_,r[s])}function zC(t,e,n){const i=e.length,r=pc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||I_,r[s])}function NC(t,e,n){const i=e.length,r=pc(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||R_,r[s])}function OC(t){switch(t){case 5126:return _C;case 35664:return xC;case 35665:return yC;case 35666:return SC;case 35674:return wC;case 35675:return MC;case 35676:return EC;case 5124:case 35670:return bC;case 35667:case 35671:return CC;case 35668:case 35672:return TC;case 35669:case 35673:return AC;case 5125:return PC;case 36294:return LC;case 36295:return RC;case 36296:return DC;case 35678:case 36198:case 36298:case 36306:case 35682:return IC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return NC}}class FC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=vC(n.type)}}class BC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=OC(n.type)}}class UC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function Fg(t,e){t.seq.push(e),t.map[e.id]=e}function VC(t,e,n){const i=t.name,r=i.length;for(Cf.lastIndex=0;;){const s=Cf.exec(i),o=Cf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fg(n,u===void 0?new FC(a,t,e):new BC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new UC(a),Fg(n,f)),n=f}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let HC=0;function GC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function WC(t){switch(t){case Wr:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ug(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+GC(t.getShaderSource(e),o)}else return r}function $C(t,e){const n=WC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function jC(t,e){let n;switch(e){case dM:n="Linear";break;case hM:n="Reinhard";break;case pM:n="OptimizedCineon";break;case mM:n="ACESFilmic";break;case gM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function XC(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bo).join(`
`)}function qC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YC(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function Vg(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(ZC,QC)}function QC(t,e){const n=Oe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Fd(n)}const JC=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,KC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gg(t){return t.replace(KC,k_).replace(JC,eT)}function eT(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),k_(t,e,n,i)}function k_(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===G2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fo&&(e="SHADOWMAP_TYPE_VSM"),e}function nT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function rT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case m_:e="ENVMAP_BLENDING_MULTIPLY";break;case cM:e="ENVMAP_BLENDING_MIX";break;case fM:e="ENVMAP_BLENDING_ADD";break}return e}function sT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function oT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=tT(n),u=nT(n),c=iT(n),f=rT(n),d=sT(n),m=n.isWebGL2?"":XC(n),_=qC(s),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[_].filter(Bo).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Bo).join(`
`),g.length>0&&(g+=`
`)):(p=[Wg(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),g=[m,Wg(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==wi?jC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,$C("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Fd(o),o=Vg(o,n),o=Hg(o,n),a=Fd(a),a=Vg(a,n),a=Hg(a,n),o=Gg(o),a=Gg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+p+o,S=v+g+a,w=Bg(r,35633,x),C=Bg(r,35632,S);if(r.attachShader(h,w),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),D=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(C).trim();let re=!0,ee=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const U=Ug(r,w,"vertex"),X=Ug(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+U+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||O==="")&&(ee=!1);ee&&(this.diagnostics={runnable:re,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:g}})}r.deleteShader(w),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ul(r,h)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=YC(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=HC++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=w,this.fragmentShader=C,this}let aT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new uT(e);n.set(e,i)}return n.get(e)}}class uT{constructor(e){this.id=aT++,this.code=e,this.usedTimes=0}}function cT(t,e,n,i,r,s,o){const a=new E_,l=new lT,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,D,O,re){const ee=O.fog,U=re.geometry,X=y.isMeshStandardMaterial?O.environment:null,$=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),J=!!$&&$.mapping===cc?$.image.height:null,k=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=z!==void 0?z.length:0;let K=0;U.morphAttributes.position!==void 0&&(K=1),U.morphAttributes.normal!==void 0&&(K=2),U.morphAttributes.color!==void 0&&(K=3);let F,H,q,ae;if(k){const Ee=ti[k];F=Ee.vertexShader,H=Ee.fragmentShader}else F=y.vertexShader,H=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const A=t.getRenderTarget(),Se=y.alphaTest>0,Z=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:c,shaderID:k,shaderName:y.type,vertexShader:F,fragmentShader:H,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:A===null?t.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Wr,map:!!y.map,matcap:!!y.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===NM,tangentSpaceNormalMap:y.normalMapType===zM,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===at,clearcoat:Z,clearcoatMap:Z&&!!y.clearcoatMap,clearcoatRoughnessMap:Z&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Ws,alphaMap:!!y.alphaMap,alphaTest:Se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ee,useFog:y.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:wi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Hr,flipSided:y.side===qn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function x(y){const T=_[y.type];let D;if(T){const O=ti[T];D=JM.clone(O.uniforms)}else D=y.uniforms;return D}function S(y,T){let D;for(let O=0,re=u.length;O<re;O++){const ee=u[O];if(ee.cacheKey===T){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new oT(t,T,y,s),u.push(D)),D}function w(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function fT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function dT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $g(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,_,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,_,h,p){const g=o(f,d,m,_,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,d){n.length>1&&n.sort(f||dT),i.length>1&&i.sort(d||$g),r.length>1&&r.sort(d||$g)}function c(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function hT(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new jg,t.set(i,[s])):r>=t.get(i).length?(s=new jg,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new He};break;case"SpotLight":n={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gT=0;function vT(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function _T(t,e){const n=new pT,i=mT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new I);const s=new I,o=new ct,a=new ct;function l(c,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let h=0,p=0,g=0,v=0,x=0,S=0,w=0,C=0;c.sort(vT);const L=f!==!0?Math.PI:1;for(let T=0,D=c.length;T<D;T++){const O=c[T],re=O.color,ee=O.intensity,U=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=re.r*ee*L,m+=re.g*ee*L,_+=re.b*ee*L;else if(O.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(O.sh.coefficients[$],ee);else if(O.isDirectionalLight){const $=n.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const J=O.shadow,k=i.get(O);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,r.directionalShadow[h]=k,r.directionalShadowMap[h]=X,r.directionalShadowMatrix[h]=O.shadow.matrix,S++}r.directional[h]=$,h++}else if(O.isSpotLight){const $=n.get(O);if($.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(re).multiplyScalar(ee*L),$.distance=U,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,O.castShadow){const J=O.shadow,k=i.get(O);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,r.spotShadow[g]=k,r.spotShadowMap[g]=X,r.spotShadowMatrix[g]=O.shadow.matrix,C++}r.spot[g]=$,g++}else if(O.isRectAreaLight){const $=n.get(O);$.color.copy(re).multiplyScalar(ee),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=$,v++}else if(O.isPointLight){const $=n.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*L),$.distance=O.distance,$.decay=O.decay,O.castShadow){const J=O.shadow,k=i.get(O);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=O.shadow.matrix,w++}r.point[p]=$,p++}else if(O.isHemisphereLight){const $=n.get(O);$.skyColor.copy(O.color).multiplyScalar(ee*L),$.groundColor.copy(O.groundColor).multiplyScalar(ee*L),r.hemi[x]=$,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==g||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==S||y.numPointShadows!==w||y.numSpotShadows!==C)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,y.directionalLength=h,y.pointLength=p,y.spotLength=g,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=S,y.numPointShadows=w,y.numSpotShadows=C,r.version=gT++)}function u(c,f){let d=0,m=0,_=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const S=c[v];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const w=r.rectArea[h];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function Xg(t,e){const n=new _T(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function xT(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Xg(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Xg(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class yT extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ST extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
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
}`;function ET(t,e,n){let i=new rp;const r=new Pe,s=new Pe,o=new Tt,a=new yT({depthPacking:kM}),l=new ST,u={},c=n.maxTextureSize,f={0:qn,1:va,2:Hr},d=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:wT,fragmentShader:MT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new yi(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d_,this.render=function(S,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),D=t.state;D.setBlending(tr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let O=0,re=S.length;O<re;O++){const ee=S[O],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const X=U.getFrameExtents();if(r.multiply(X),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==Fo?{minFilter:nn,magFilter:nn}:{};U.map=new $r(r.x,r.y,J),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const $=U.getViewportCount();for(let J=0;J<$;J++){const k=U.getViewport(J);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(o),U.updateMatrices(ee,J),i=U.getFrustum(),x(w,C,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Fo&&g(U,C),U.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,y,T)};function g(S,w){const C=e.update(h);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,d,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,m,h,null)}function v(S,w,C,L,y,T){let D=null;const O=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0?D=O:D=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const re=D.uuid,ee=w.uuid;let U=u[re];U===void 0&&(U={},u[re]=U);let X=U[ee];X===void 0&&(X=D.clone(),U[ee]=X),D=X}return D.visible=w.visible,D.wireframe=w.wireframe,T===Fo?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:f[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=L,D.farDistance=y),D}function x(S,w,C,L,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Fo)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const O=e.update(S),re=S.material;if(Array.isArray(re)){const ee=O.groups;for(let U=0,X=ee.length;U<X;U++){const $=ee[U],J=re[$.materialIndex];if(J&&J.visible){const k=v(S,J,L,C.near,C.far,y);t.renderBufferDirect(C,null,O,k,S,$)}}}else if(re.visible){const ee=v(S,re,L,C.near,C.far,y);t.renderBufferDirect(C,null,O,ee,S,null)}}const D=S.children;for(let O=0,re=D.length;O<re;O++)x(D[O],w,C,L,y)}}function bT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const _e=new Tt;let Q=null;const pe=new Tt(0,0,0,0);return{setMask:function(he){Q!==he&&!N&&(t.colorMask(he,he,he,he),Q=he)},setLocked:function(he){N=he},setClear:function(he,je,At,_t,Pi){Pi===!0&&(he*=_t,je*=_t,At*=_t),_e.set(he,je,At,_t),pe.equals(_e)===!1&&(t.clearColor(he,je,At,_t),pe.copy(_e))},reset:function(){N=!1,Q=null,pe.set(-1,0,0,0)}}}function s(){let N=!1,_e=null,Q=null,pe=null;return{setTest:function(he){he?Se(2929):Z(2929)},setMask:function(he){_e!==he&&!N&&(t.depthMask(he),_e=he)},setFunc:function(he){if(Q!==he){if(he)switch(he){case iM:t.depthFunc(512);break;case rM:t.depthFunc(519);break;case sM:t.depthFunc(513);break;case Ld:t.depthFunc(515);break;case oM:t.depthFunc(514);break;case aM:t.depthFunc(518);break;case lM:t.depthFunc(516);break;case uM:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Q=he}},setLocked:function(he){N=he},setClear:function(he){pe!==he&&(t.clearDepth(he),pe=he)},reset:function(){N=!1,_e=null,Q=null,pe=null}}}function o(){let N=!1,_e=null,Q=null,pe=null,he=null,je=null,At=null,_t=null,Pi=null;return{setTest:function(ht){N||(ht?Se(2960):Z(2960))},setMask:function(ht){_e!==ht&&!N&&(t.stencilMask(ht),_e=ht)},setFunc:function(ht,ui,yn){(Q!==ht||pe!==ui||he!==yn)&&(t.stencilFunc(ht,ui,yn),Q=ht,pe=ui,he=yn)},setOp:function(ht,ui,yn){(je!==ht||At!==ui||_t!==yn)&&(t.stencilOp(ht,ui,yn),je=ht,At=ui,_t=yn)},setLocked:function(ht){N=ht},setClear:function(ht){Pi!==ht&&(t.clearStencil(ht),Pi=ht)},reset:function(){N=!1,_e=null,Q=null,pe=null,he=null,je=null,At=null,_t=null,Pi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,L=null,y=null,T=!1,D=null,O=null,re=null,ee=null,U=null;const X=t.getParameter(35661);let $=!1,J=0;const k=t.getParameter(7938);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),$=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),$=J>=2);let z=null,V={};const K=t.getParameter(3088),F=t.getParameter(2978),H=new Tt().fromArray(K),q=new Tt().fromArray(F);function ae(N,_e,Q){const pe=new Uint8Array(4),he=t.createTexture();t.bindTexture(N,he),t.texParameteri(N,10241,9728),t.texParameteri(N,10240,9728);for(let je=0;je<Q;je++)t.texImage2D(_e+je,0,6408,1,1,0,6408,5121,pe);return he}const A={};A[3553]=ae(3553,3553,1),A[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(2929),l.setFunc(Ld),$e(!1),De(Om),Se(2884),We(tr);function Se(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function Z(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function ye(N,_e){return m[N]!==_e?(t.bindFramebuffer(N,_e),m[N]=_e,i&&(N===36009&&(m[36160]=_e),N===36160&&(m[36009]=_e)),!0):!1}function oe(N,_e){let Q=h,pe=!1;if(N)if(Q=_.get(_e),Q===void 0&&(Q=[],_.set(_e,Q)),N.isWebGLMultipleRenderTargets){const he=N.texture;if(Q.length!==he.length||Q[0]!==36064){for(let je=0,At=he.length;je<At;je++)Q[je]=36064+je;Q.length=he.length,pe=!0}}else Q[0]!==36064&&(Q[0]=36064,pe=!0);else Q[0]!==1029&&(Q[0]=1029,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ee(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ce={[Ss]:32774,[j2]:32778,[X2]:32779};if(i)ce[Vm]=32775,ce[Hm]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(ce[Vm]=N.MIN_EXT,ce[Hm]=N.MAX_EXT)}const ve={[q2]:0,[Y2]:1,[Z2]:768,[h_]:770,[nM]:776,[eM]:774,[J2]:772,[Q2]:769,[p_]:771,[tM]:775,[K2]:773};function We(N,_e,Q,pe,he,je,At,_t){if(N===tr){g===!0&&(Z(3042),g=!1);return}if(g===!1&&(Se(3042),g=!0),N!==$2){if(N!==v||_t!==T){if((x!==Ss||C!==Ss)&&(t.blendEquation(32774),x=Ss,C=Ss),_t)switch(N){case Ws:t.blendFuncSeparate(1,771,1,771);break;case Fm:t.blendFunc(1,1);break;case Bm:t.blendFuncSeparate(0,769,0,1);break;case Um:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:t.blendFuncSeparate(770,771,1,771);break;case Fm:t.blendFunc(770,1);break;case Bm:t.blendFuncSeparate(0,769,0,1);break;case Um:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,w=null,L=null,y=null,v=N,T=_t}return}he=he||_e,je=je||Q,At=At||pe,(_e!==x||he!==C)&&(t.blendEquationSeparate(ce[_e],ce[he]),x=_e,C=he),(Q!==S||pe!==w||je!==L||At!==y)&&(t.blendFuncSeparate(ve[Q],ve[pe],ve[je],ve[At]),S=Q,w=pe,L=je,y=At),v=N,T=null}function Ae(N,_e){N.side===Hr?Z(2884):Se(2884);let Q=N.side===qn;_e&&(Q=!Q),$e(Q),N.blending===Ws&&N.transparent===!1?We(tr):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const pe=N.stencilWrite;u.setTest(pe),pe&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(32926):Z(32926)}function $e(N){D!==N&&(N?t.frontFace(2304):t.frontFace(2305),D=N)}function De(N){N!==V2?(Se(2884),N!==O&&(N===Om?t.cullFace(1029):N===H2?t.cullFace(1028):t.cullFace(1032))):Z(2884),O=N}function Be(N){N!==re&&($&&t.lineWidth(N),re=N)}function Ue(N,_e,Q){N?(Se(32823),(ee!==_e||U!==Q)&&(t.polygonOffset(_e,Q),ee=_e,U=Q)):Z(32823)}function et(N){N?Se(3089):Z(3089)}function $t(N){N===void 0&&(N=33984+X-1),z!==N&&(t.activeTexture(N),z=N)}function P(N,_e){z===null&&$t();let Q=V[z];Q===void 0&&(Q={type:void 0,texture:void 0},V[z]=Q),(Q.type!==N||Q.texture!==_e)&&(t.bindTexture(N,_e||A[N]),Q.type=N,Q.texture=_e)}function M(){const N=V[z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){H.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),H.copy(N))}function Me(N){q.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function ke(N,_e){let Q=f.get(_e);Q===void 0&&(Q=new WeakMap,f.set(_e,Q));let pe=Q.get(N);pe===void 0&&(pe=t.getUniformBlockIndex(_e,N.name),Q.set(N,pe))}function qe(N,_e){const pe=f.get(_e).get(N);c.get(N)!==pe&&(t.uniformBlockBinding(_e,pe,N.__bindingPointIndex),c.set(N,pe))}function vt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},z=null,V={},m={},_=new WeakMap,h=[],p=null,g=!1,v=null,x=null,S=null,w=null,C=null,L=null,y=null,T=!1,D=null,O=null,re=null,ee=null,U=null,H.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Se,disable:Z,bindFramebuffer:ye,drawBuffers:oe,useProgram:Ee,setBlending:We,setMaterial:Ae,setFlipSided:$e,setCullFace:De,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:et,activeTexture:$t,bindTexture:P,unbindTexture:M,compressedTexImage2D:B,texImage2D:Ce,texImage3D:we,updateUBOMapping:ke,uniformBlockBinding:qe,texStorage2D:Te,texStorage3D:Y,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:de,scissor:be,viewport:Me,reset:vt}}function CT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return g?new OffscreenCanvas(P,M):xa("canvas")}function x(P,M,B,te){let le=1;if((P.width>te||P.height>te)&&(le=te/Math.max(P.width,P.height)),le<1||M===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=M?Od:Math.floor,Te=de(le*P.width),Y=de(le*P.height);h===void 0&&(h=v(Te,Y));const Ce=B?v(Te,Y):h;return Ce.width=Te,Ce.height=Y,Ce.getContext("2d").drawImage(P,0,0,Te,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Te+"x"+Y+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return pg(P.width)&&pg(P.height)}function w(P){return a?!1:P.wrapS!==Vn||P.wrapT!==Vn||P.minFilter!==nn&&P.minFilter!==bn}function C(P,M){return P.generateMipmaps&&M&&P.minFilter!==nn&&P.minFilter!==bn}function L(P){t.generateMipmap(P)}function y(P,M,B,te,le=!1){if(a===!1)return M;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=M;return M===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),M===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),M===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=te===at&&le===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(P,M,B){return C(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function D(P){return P===nn||P===Gm||P===Wm?9728:9729}function O(P){const M=P.target;M.removeEventListener("dispose",O),ee(M),M.isVideoTexture&&_.delete(M)}function re(P){const M=P.target;M.removeEventListener("dispose",re),X(M)}function ee(P){const M=i.get(P);if(M.__webglInit===void 0)return;const B=P.source,te=p.get(B);if(te){const le=te[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&U(P),Object.keys(te).length===0&&p.delete(B)}i.remove(P)}function U(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const B=P.source,te=p.get(B);delete te[M.__cacheKey],o.memory.textures--}function X(P){const M=P.texture,B=i.get(P),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)t.deleteFramebuffer(B.__webglFramebuffer[le]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[le]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let le=0;le<B.__webglColorRenderbuffer.length;le++)B.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[le]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let le=0,de=M.length;le<de;le++){const Te=i.get(M[le]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(M[le])}i.remove(M),i.remove(P)}let $=0;function J(){$=0}function k(){const P=$;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),$+=1,P}function z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.encoding),M.join()}function V(P,M){const B=i.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,P,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,B.__webglTexture)}function K(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(35866,B.__webglTexture)}function F(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){Z(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(32879,B.__webglTexture)}function H(P,M){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ye(B,P,M);return}n.activeTexture(33984+M),n.bindTexture(34067,B.__webglTexture)}const q={[Id]:10497,[Vn]:33071,[kd]:33648},ae={[nn]:9728,[Gm]:9984,[Wm]:9986,[bn]:9729,[vM]:9985,[fc]:9987};function A(P,M,B){if(B?(t.texParameteri(P,10242,q[M.wrapS]),t.texParameteri(P,10243,q[M.wrapT]),(P===32879||P===35866)&&t.texParameteri(P,32882,q[M.wrapR]),t.texParameteri(P,10240,ae[M.magFilter]),t.texParameteri(P,10241,ae[M.minFilter])):(t.texParameteri(P,10242,33071),t.texParameteri(P,10243,33071),(P===32879||P===35866)&&t.texParameteri(P,32882,33071),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,10240,D(M.magFilter)),t.texParameteri(P,10241,D(M.minFilter)),M.minFilter!==nn&&M.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===Tr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Se(P,M){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",O));const te=M.source;let le=p.get(te);le===void 0&&(le={},p.set(te,le));const de=z(M);if(de!==P.__cacheKey){le[de]===void 0&&(le[de]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[de].usedTimes++;const Te=le[P.__cacheKey];Te!==void 0&&(le[P.__cacheKey].usedTimes--,Te.usedTimes===0&&U(M)),P.__cacheKey=de,P.__webglTexture=le[de].texture}return B}function Z(P,M,B){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const le=Se(P,M),de=M.source;if(n.activeTexture(33984+B),n.bindTexture(te,P.__webglTexture),de.version!==de.__currentVersion||le===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Te=w(M)&&S(M.image)===!1;let Y=x(M.image,Te,!1,c);Y=$t(M,Y);const Ce=S(Y)||a,we=s.convert(M.format,M.encoding);let be=s.convert(M.type),Me=y(M.internalFormat,we,be,M.encoding,M.isVideoTexture);A(te,M,Ce);let ke;const qe=M.mipmaps,vt=a&&M.isVideoTexture!==!0,N=de.__currentVersion===void 0||le===!0,_e=T(M,Y,Ce);if(M.isDepthTexture)Me=6402,a?M.type===Tr?Me=36012:M.type===Cr?Me=33190:M.type===$s?Me=35056:Me=33189:M.type===Tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Dr&&Me===6402&&M.type!==v_&&M.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cr,be=s.convert(M.type)),M.format===so&&Me===6402&&(Me=34041,M.type!==$s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$s,be=s.convert(M.type))),N&&(vt?n.texStorage2D(3553,1,Me,Y.width,Y.height):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,null));else if(M.isDataTexture)if(qe.length>0&&Ce){vt&&N&&n.texStorage2D(3553,_e,Me,qe[0].width,qe[0].height);for(let Q=0,pe=qe.length;Q<pe;Q++)ke=qe[Q],vt?n.texSubImage2D(3553,Q,0,0,ke.width,ke.height,we,be,ke.data):n.texImage2D(3553,Q,Me,ke.width,ke.height,0,we,be,ke.data);M.generateMipmaps=!1}else vt?(N&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,Y.width,Y.height,we,be,Y.data)):n.texImage2D(3553,0,Me,Y.width,Y.height,0,we,be,Y.data);else if(M.isCompressedTexture){vt&&N&&n.texStorage2D(3553,_e,Me,qe[0].width,qe[0].height);for(let Q=0,pe=qe.length;Q<pe;Q++)ke=qe[Q],M.format!==ri?we!==null?vt?n.compressedTexSubImage2D(3553,Q,0,0,ke.width,ke.height,we,ke.data):n.compressedTexImage2D(3553,Q,Me,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?n.texSubImage2D(3553,Q,0,0,ke.width,ke.height,we,be,ke.data):n.texImage2D(3553,Q,Me,ke.width,ke.height,0,we,be,ke.data)}else if(M.isDataArrayTexture)vt?(N&&n.texStorage3D(35866,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(35866,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isData3DTexture)vt?(N&&n.texStorage3D(32879,_e,Me,Y.width,Y.height,Y.depth),n.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,we,be,Y.data)):n.texImage3D(32879,0,Me,Y.width,Y.height,Y.depth,0,we,be,Y.data);else if(M.isFramebufferTexture){if(N)if(vt)n.texStorage2D(3553,_e,Me,Y.width,Y.height);else{let Q=Y.width,pe=Y.height;for(let he=0;he<_e;he++)n.texImage2D(3553,he,Me,Q,pe,0,we,be,null),Q>>=1,pe>>=1}}else if(qe.length>0&&Ce){vt&&N&&n.texStorage2D(3553,_e,Me,qe[0].width,qe[0].height);for(let Q=0,pe=qe.length;Q<pe;Q++)ke=qe[Q],vt?n.texSubImage2D(3553,Q,0,0,we,be,ke):n.texImage2D(3553,Q,Me,we,be,ke);M.generateMipmaps=!1}else vt?(N&&n.texStorage2D(3553,_e,Me,Y.width,Y.height),n.texSubImage2D(3553,0,0,0,we,be,Y)):n.texImage2D(3553,0,Me,we,be,Y);C(M,Ce)&&L(te),de.__currentVersion=de.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ye(P,M,B){if(M.image.length!==6)return;const te=Se(P,M),le=M.source;if(n.activeTexture(33984+B),n.bindTexture(34067,P.__webglTexture),le.version!==le.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!de&&!Te?Y[Q]=x(M.image[Q],!1,!0,u):Y[Q]=Te?M.image[Q].image:M.image[Q],Y[Q]=$t(M,Y[Q]);const Ce=Y[0],we=S(Ce)||a,be=s.convert(M.format,M.encoding),Me=s.convert(M.type),ke=y(M.internalFormat,be,Me,M.encoding),qe=a&&M.isVideoTexture!==!0,vt=le.__currentVersion===void 0||te===!0;let N=T(M,Ce,we);A(34067,M,we);let _e;if(de){qe&&vt&&n.texStorage2D(34067,N,ke,Ce.width,Ce.height);for(let Q=0;Q<6;Q++){_e=Y[Q].mipmaps;for(let pe=0;pe<_e.length;pe++){const he=_e[pe];M.format!==ri?be!==null?qe?n.compressedTexSubImage2D(34069+Q,pe,0,0,he.width,he.height,be,he.data):n.compressedTexImage2D(34069+Q,pe,ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(34069+Q,pe,0,0,he.width,he.height,be,Me,he.data):n.texImage2D(34069+Q,pe,ke,he.width,he.height,0,be,Me,he.data)}}}else{_e=M.mipmaps,qe&&vt&&(_e.length>0&&N++,n.texStorage2D(34067,N,ke,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(Te){qe?n.texSubImage2D(34069+Q,0,0,0,Y[Q].width,Y[Q].height,be,Me,Y[Q].data):n.texImage2D(34069+Q,0,ke,Y[Q].width,Y[Q].height,0,be,Me,Y[Q].data);for(let pe=0;pe<_e.length;pe++){const je=_e[pe].image[Q].image;qe?n.texSubImage2D(34069+Q,pe+1,0,0,je.width,je.height,be,Me,je.data):n.texImage2D(34069+Q,pe+1,ke,je.width,je.height,0,be,Me,je.data)}}else{qe?n.texSubImage2D(34069+Q,0,0,0,be,Me,Y[Q]):n.texImage2D(34069+Q,0,ke,be,Me,Y[Q]);for(let pe=0;pe<_e.length;pe++){const he=_e[pe];qe?n.texSubImage2D(34069+Q,pe+1,0,0,be,Me,he.image[Q]):n.texImage2D(34069+Q,pe+1,ke,be,Me,he.image[Q])}}}C(M,we)&&L(34067),le.__currentVersion=le.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function oe(P,M,B,te,le){const de=s.convert(B.format,B.encoding),Te=s.convert(B.type),Y=y(B.internalFormat,de,Te,B.encoding);i.get(M).__hasExternalTextures||(le===32879||le===35866?n.texImage3D(le,0,Y,M.width,M.height,M.depth,0,de,Te,null):n.texImage2D(le,0,Y,M.width,M.height,0,de,Te,null)),n.bindFramebuffer(36160,P),Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,te,le,i.get(B).__webglTexture,0,Be(M)):t.framebufferTexture2D(36160,te,le,i.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ee(P,M,B){if(t.bindRenderbuffer(36161,P),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(B||Ue(M)){const le=M.depthTexture;le&&le.isDepthTexture&&(le.type===Tr?te=36012:le.type===Cr&&(te=33190));const de=Be(M);Ue(M)?d.renderbufferStorageMultisampleEXT(36161,de,te,M.width,M.height):t.renderbufferStorageMultisample(36161,de,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,P)}else if(M.depthBuffer&&M.stencilBuffer){const te=Be(M);B&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let le=0;le<te.length;le++){const de=te[le],Te=s.convert(de.format,de.encoding),Y=s.convert(de.type),Ce=y(de.internalFormat,Te,Y,de.encoding),we=Be(M);B&&Ue(M)===!1?t.renderbufferStorageMultisample(36161,we,Ce,M.width,M.height):Ue(M)?d.renderbufferStorageMultisampleEXT(36161,we,Ce,M.width,M.height):t.renderbufferStorage(36161,Ce,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ce(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,le=Be(M);if(M.depthTexture.format===Dr)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,le):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===so)Ue(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,le):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(P){const M=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,P)}else if(B){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[te],P,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(36160,null)}function We(P,M,B){const te=i.get(P);M!==void 0&&oe(te.__webglFramebuffer,P,P.texture,36064,3553),B!==void 0&&ve(P)}function Ae(P){const M=P.texture,B=i.get(P),te=i.get(M);P.addEventListener("dispose",re),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const le=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Te=S(P)||a;if(le){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=i.get(Y[Ce]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ue(P)===!1){const Y=de?M:[M];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Y.length;Ce++){const we=Y[Ce];B.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Ce]);const be=s.convert(we.format,we.encoding),Me=s.convert(we.type),ke=y(we.internalFormat,be,Me,we.encoding),qe=Be(P);t.renderbufferStorageMultisample(36161,qe,ke,P.width,P.height),t.framebufferRenderbuffer(36160,36064+Ce,36161,B.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(36161,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(36160,null)}}if(le){n.bindTexture(34067,te.__webglTexture),A(34067,M,Te);for(let Y=0;Y<6;Y++)oe(B.__webglFramebuffer[Y],P,M,36064,34069+Y);C(M,Te)&&L(34067),n.unbindTexture()}else if(de){const Y=P.texture;for(let Ce=0,we=Y.length;Ce<we;Ce++){const be=Y[Ce],Me=i.get(be);n.bindTexture(3553,Me.__webglTexture),A(3553,be,Te),oe(B.__webglFramebuffer,P,be,36064+Ce,3553),C(be,Te)&&L(3553)}n.unbindTexture()}else{let Y=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Y=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Y,te.__webglTexture),A(Y,M,Te),oe(B.__webglFramebuffer,P,M,36064,Y),C(M,Te)&&L(Y),n.unbindTexture()}P.depthBuffer&&ve(P)}function $e(P){const M=S(P)||a,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,le=B.length;te<le;te++){const de=B[te];if(C(de,M)){const Te=P.isWebGLCubeRenderTarget?34067:3553,Y=i.get(de).__webglTexture;n.bindTexture(Te,Y),L(Te),n.unbindTexture()}}}function De(P){if(a&&P.samples>0&&Ue(P)===!1){const M=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,te=P.height;let le=16384;const de=[],Te=P.stencilBuffer?33306:36096,Y=i.get(P),Ce=P.isWebGLMultipleRenderTargets===!0;if(Ce)for(let we=0;we<M.length;we++)n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,null),n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,null,0);n.bindFramebuffer(36008,Y.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,Y.__webglFramebuffer);for(let we=0;we<M.length;we++){de.push(36064+we),P.depthBuffer&&de.push(Te);const be=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(be===!1&&(P.depthBuffer&&(le|=256),P.stencilBuffer&&(le|=1024)),Ce&&t.framebufferRenderbuffer(36008,36064,36161,Y.__webglColorRenderbuffer[we]),be===!0&&(t.invalidateFramebuffer(36008,[Te]),t.invalidateFramebuffer(36009,[Te])),Ce){const Me=i.get(M[we]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Me,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,le,9728),m&&t.invalidateFramebuffer(36008,de)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),Ce)for(let we=0;we<M.length;we++){n.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+we,36161,Y.__webglColorRenderbuffer[we]);const be=i.get(M[we]).__webglTexture;n.bindFramebuffer(36160,Y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+we,3553,be,0)}n.bindFramebuffer(36009,Y.__webglMultisampledFramebuffer)}}function Be(P){return Math.min(f,P.samples)}function Ue(P){const M=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(P){const M=o.render.frame;_.get(P)!==M&&(_.set(P,M),P.update())}function $t(P,M){const B=P.encoding,te=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Nd||B!==Wr&&(B===at?a===!1?e.has("EXT_sRGB")===!0&&te===ri?(P.format=Nd,P.minFilter=bn,P.generateMipmaps=!1):M=y_.sRGBToLinear(M):(te!==ri||le!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=k,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=F,this.setTextureCube=H,this.rebindTextures=We,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ue}function TT(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Gr)return 5121;if(s===SM)return 32819;if(s===wM)return 32820;if(s===_M)return 5120;if(s===xM)return 5122;if(s===v_)return 5123;if(s===yM)return 5124;if(s===Cr)return 5125;if(s===Tr)return 5126;if(s===_a)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===MM)return 6406;if(s===ri)return 6408;if(s===bM)return 6409;if(s===CM)return 6410;if(s===Dr)return 6402;if(s===so)return 34041;if(s===TM)return 6403;if(s===EM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===AM)return 36244;if(s===PM)return 33319;if(s===LM)return 33320;if(s===RM)return 36249;if(s===qc||s===Yc||s===Zc||s===Qc)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$m||s===jm||s===Xm||s===qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===DM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ym||s===Zm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ym)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zm)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qm||s===Jm||s===Km||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===ug||s===cg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qm)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jm)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Km)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ng)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ig)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===og)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ag)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ug)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cg)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===fg)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class AT extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gl extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i);if(u.joints[h.jointName]===void 0){const v=new gl;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[h.jointName]=v,u.add(v)}const g=u.joints[h.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class LT extends Rn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Dr,c!==Dr&&c!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Dr&&(i=Cr),i===void 0&&c===so&&(i=$s),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1}}class RT extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,m=null;const _=n.getContextAttributes();let h=null,p=null;const g=[],v=[],x=new Gt;x.layers.enable(1),x.viewport=new Tt;const S=new Gt;S.layers.enable(2),S.viewport=new Tt;const w=[x,S],C=new AT;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=g[z];return V===void 0&&(V=new Tf,g[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=g[z];return V===void 0&&(V=new Tf,g[z]=V),V.getGripSpace()},this.getHand=function(z){let V=g[z];return V===void 0&&(V=new Tf,g[z]=V),V.getHandSpace()};function T(z){const V=v.indexOf(z.inputSource);if(V===-1)return;const K=g[V];K!==void 0&&K.dispatchEvent({type:z.type,data:z.inputSource})}function D(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",O);for(let z=0;z<g.length;z++){const V=v[z];V!==null&&(v[z]=null,g[z].disconnect(V))}L=null,y=null,e.setRenderTarget(h),d=null,f=null,c=null,r=null,p=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",D),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:d}),p=new $r(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Gr,encoding:e.outputEncoding})}else{let V=null,K=null,F=null;_.depth&&(F=_.stencil?35056:33190,V=_.stencil?so:Dr,K=_.stencil?$s:Cr);const H={colorFormat:32856,depthFormat:F,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(H),r.updateRenderState({layers:[f]}),p=new $r(f.textureWidth,f.textureHeight,{format:ri,type:Gr,depthTexture:new LT(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(z){for(let V=0;V<z.removed.length;V++){const K=z.removed[V],F=v.indexOf(K);F>=0&&(v[F]=null,g[F].dispatchEvent({type:"disconnected",data:K}))}for(let V=0;V<z.added.length;V++){const K=z.added[V];let F=v.indexOf(K);if(F===-1){for(let q=0;q<g.length;q++)if(q>=v.length){v.push(K),F=q;break}else if(v[q]===null){v[q]=K,F=q;break}if(F===-1)break}const H=g[F];H&&H.dispatchEvent({type:"connected",data:K})}}const re=new I,ee=new I;function U(z,V,K){re.setFromMatrixPosition(V.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const F=re.distanceTo(ee),H=V.projectionMatrix.elements,q=K.projectionMatrix.elements,ae=H[14]/(H[10]-1),A=H[14]/(H[10]+1),Se=(H[9]+1)/H[5],Z=(H[9]-1)/H[5],ye=(H[8]-1)/H[0],oe=(q[8]+1)/q[0],Ee=ae*ye,ce=ae*oe,ve=F/(-ye+oe),We=ve*-ye;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(We),z.translateZ(ve),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ae=ae+ve,$e=A+ve,De=Ee-We,Be=ce+(F-We),Ue=Se*A/$e*Ae,et=Z*A/$e*Ae;z.projectionMatrix.makePerspective(De,Be,Ue,et,Ae,$e)}function X(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;C.near=S.near=x.near=z.near,C.far=S.far=x.far=z.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const V=z.parent,K=C.cameras;X(C,V);for(let H=0;H<K.length;H++)X(K[H],V);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.position.copy(C.position),z.quaternion.copy(C.quaternion),z.scale.copy(C.scale),z.matrix.copy(C.matrix),z.matrixWorld.copy(C.matrixWorld);const F=z.children;for(let H=0,q=F.length;H<q;H++)F[H].updateMatrixWorld(!0);K.length===2?U(C,x,S):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let $=null;function J(z,V){if(u=V.getViewerPose(l||o),m=V,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let F=!1;K.length!==C.cameras.length&&(C.cameras.length=0,F=!0);for(let H=0;H<K.length;H++){const q=K[H];let ae=null;if(d!==null)ae=d.getViewport(q);else{const Se=c.getViewSubImage(f,q);ae=Se.viewport,H===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let A=w[H];A===void 0&&(A=new Gt,A.layers.enable(H),A.viewport=new Tt,w[H]=A),A.matrix.fromArray(q.transform.matrix),A.projectionMatrix.fromArray(q.projectionMatrix),A.viewport.set(ae.x,ae.y,ae.width,ae.height),H===0&&C.matrix.copy(A.matrix),F===!0&&C.cameras.push(A)}}for(let K=0;K<g.length;K++){const F=v[K],H=g[K];F!==null&&H!==void 0&&H.update(F,V,l||o)}$&&$(z,V),m=null}const k=new P_;k.setAnimationLoop(J),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}}function DT(t,e){function n(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),_(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===qn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===qn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",p));const w=x.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const x=f();v.__bindingPointIndex=x;const S=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,w,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(35345,x);for(let C=0,L=S.length;C<L;C++){const y=S[C];if(m(y,C,w)===!0){const T=y.value,D=y.__offset;typeof T=="number"?(y.__data[0]=T,t.bufferSubData(35345,D,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):T.toArray(y.__data),t.bufferSubData(35345,D,y.__data))}}t.bindBuffer(35345,null)}function m(v,x,S){const w=v.value;if(S[x]===void 0)return typeof w=="number"?S[x]=w:S[x]=w.clone(),!0;if(typeof w=="number"){if(S[x]!==w)return S[x]=w,!0}else{const C=S[x];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const x=v.uniforms;let S=0;const w=16;let C=0;for(let L=0,y=x.length;L<y;L++){const T=x[L],D=h(T);if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,L>0){C=S%w;const O=w-C;C!==0&&O-D.boundary<0&&(S+=w-C,T.__offset=S)}S+=D.storage}return C=S%w,C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function h(v){const x=v.value,S={boundary:0,storage:0};return typeof x=="number"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function kT(){const t=xa("canvas");return t.style.display="block",t}function z_(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:kT(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wr,this.physicallyCorrectLights=!1,this.toneMapping=wi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,g=0,v=0,x=null,S=-1,w=null;const C=new Tt,L=new Tt;let y=null,T=e.width,D=e.height,O=1,re=null,ee=null;const U=new Tt(0,0,T,D),X=new Tt(0,0,T,D);let $=!1;const J=new rp;let k=!1,z=!1,V=null;const K=new ct,F=new Pe,H=new I,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return x===null?O:1}let A=n;function Se(b,G){for(let j=0;j<b.length;j++){const W=b[j],ne=e.getContext(W,G);if(ne!==null)return ne}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${np}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",qe,!1),e.addEventListener("webglcontextcreationerror",vt,!1),A===null){const G=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&G.shift(),A=Se(G,b),A===null)throw Se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,ye,oe,Ee,ce,ve,We,Ae,$e,De,Be,Ue,et,$t,P,M,B,te,le,de,Te,Y,Ce,we;function be(){Z=new Wb(A),ye=new Fb(A,Z,t),Z.init(ye),Y=new TT(A,Z,ye),oe=new bT(A,Z,ye),Ee=new Xb,ce=new fT,ve=new CT(A,Z,oe,ce,ye,Y,Ee),We=new Ub(h),Ae=new Gb(h),$e=new s3(A,ye),Ce=new Nb(A,Z,$e,ye),De=new $b(A,$e,Ee,Ce),Be=new Qb(A,De,$e,Ee),le=new Zb(A,ye,ve),M=new Bb(ce),Ue=new cT(h,We,Ae,Z,ye,Ce,M),et=new DT(h,ce),$t=new hT,P=new xT(Z,ye),te=new zb(h,We,oe,Be,c,o),B=new ET(h,Be,ye),we=new IT(A,Ee,ye,oe),de=new Ob(A,Z,Ee,ye),Te=new jb(A,Z,Ee,ye),Ee.programs=Ue.programs,h.capabilities=ye,h.extensions=Z,h.properties=ce,h.renderLists=$t,h.shadowMap=B,h.state=oe,h.info=Ee}be();const Me=new RT(h,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(T,D,!1))},this.getSize=function(b){return b.set(T,D)},this.setSize=function(b,G,j){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,D=G,e.width=Math.floor(b*O),e.height=Math.floor(G*O),j!==!1&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(T*O,D*O).floor()},this.setDrawingBufferSize=function(b,G,j){T=b,D=G,O=j,e.width=Math.floor(b*j),e.height=Math.floor(G*j),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,G,j,W){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,G,j,W),oe.viewport(C.copy(U).multiplyScalar(O).floor())},this.getScissor=function(b){return b.copy(X)},this.setScissor=function(b,G,j,W){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,G,j,W),oe.scissor(L.copy(X).multiplyScalar(O).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){oe.setScissorTest($=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,G=!0,j=!0){let W=0;b&&(W|=16384),G&&(W|=256),j&&(W|=1024),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",qe,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),$t.dispose(),P.dispose(),ce.dispose(),We.dispose(),Ae.dispose(),Be.dispose(),Ce.dispose(),we.dispose(),Ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",je),Me.removeEventListener("sessionend",At),V&&(V.dispose(),V=null),_t.stop()};function ke(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ee.autoReset,G=B.enabled,j=B.autoUpdate,W=B.needsUpdate,ne=B.type;be(),Ee.autoReset=b,B.enabled=G,B.autoUpdate=j,B.needsUpdate=W,B.type=ne}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function N(b){const G=b.target;G.removeEventListener("dispose",N),_e(G)}function _e(b){Q(b),ce.remove(b)}function Q(b){const G=ce.get(b).programs;G!==void 0&&(G.forEach(function(j){Ue.releaseProgram(j)}),b.isShaderMaterial&&Ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,j,W,ne,Le){G===null&&(G=q);const Ie=ne.isMesh&&ne.matrixWorld.determinant()<0,Ne=Ox(b,G,j,W,ne);oe.setMaterial(W,Ie);let ze=j.index;const Ze=j.attributes.position;if(ze===null){if(Ze===void 0||Ze.count===0)return}else if(ze.count===0)return;let Ve=1;W.wireframe===!0&&(ze=De.getWireframeAttribute(j),Ve=2),Ce.setup(ne,W,Ne,j,ze);let Xe,pt=de;ze!==null&&(Xe=$e.get(ze),pt=Te,pt.setIndex(Xe));const fr=ze!==null?ze.count:Ze.count,Jr=j.drawRange.start*Ve,Kr=j.drawRange.count*Ve,Jn=Le!==null?Le.start*Ve:0,Ye=Le!==null?Le.count*Ve:1/0,es=Math.max(Jr,Jn),yt=Math.min(fr,Jr+Kr,Jn+Ye)-1,Sn=Math.max(0,yt-es+1);if(Sn!==0){if(ne.isMesh)W.wireframe===!0?(oe.setLineWidth(W.wireframeLinewidth*ae()),pt.setMode(1)):pt.setMode(4);else if(ne.isLine){let Li=W.linewidth;Li===void 0&&(Li=1),oe.setLineWidth(Li*ae()),ne.isLineSegments?pt.setMode(1):ne.isLineLoop?pt.setMode(2):pt.setMode(3)}else ne.isPoints?pt.setMode(0):ne.isSprite&&pt.setMode(4);if(ne.isInstancedMesh)pt.renderInstances(es,Sn,ne.count);else if(j.isInstancedBufferGeometry){const Li=Math.min(j.instanceCount,j._maxInstanceCount);pt.renderInstances(es,Sn,Li)}else pt.render(es,Sn)}},this.compile=function(b,G){d=P.get(b),d.init(),_.push(d),b.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights(h.physicallyCorrectLights),b.traverse(function(j){const W=j.material;if(W)if(Array.isArray(W))for(let ne=0;ne<W.length;ne++){const Le=W[ne];mc(Le,b,j)}else mc(W,b,j)}),_.pop(),d=null};let pe=null;function he(b){pe&&pe(b)}function je(){_t.stop()}function At(){_t.start()}const _t=new P_;_t.setAnimationLoop(he),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(b){pe=b,Me.setAnimationLoop(b),b===null?_t.stop():_t.start()},Me.addEventListener("sessionstart",je),Me.addEventListener("sessionend",At),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.autoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(G),G=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,G,x),d=P.get(b,_.length),d.init(),_.push(d),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(K),z=this.localClippingEnabled,k=M.init(this.clippingPlanes,z,G),f=$t.get(b,m.length),f.init(),m.push(f),Pi(b,G,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,ee),k===!0&&M.beginShadows();const j=d.state.shadowsArray;if(B.render(j,b,G),k===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,b),d.setupLights(h.physicallyCorrectLights),G.isArrayCamera){const W=G.cameras;for(let ne=0,Le=W.length;ne<Le;ne++){const Ie=W[ne];ht(f,b,Ie,Ie.viewport)}}else ht(f,b,G);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(h,b,G),Ce.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Pi(b,G,j,W){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&H.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Ie=Be.update(b),Ne=b.material;Ne.visible&&f.push(b,Ie,Ne,j,H.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ee.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ee.render.frame),!b.frustumCulled||J.intersectsObject(b))){W&&H.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);const Ie=Be.update(b),Ne=b.material;if(Array.isArray(Ne)){const ze=Ie.groups;for(let Ze=0,Ve=ze.length;Ze<Ve;Ze++){const Xe=ze[Ze],pt=Ne[Xe.materialIndex];pt&&pt.visible&&f.push(b,Ie,pt,j,H.z,Xe)}}else Ne.visible&&f.push(b,Ie,Ne,j,H.z,null)}}const Le=b.children;for(let Ie=0,Ne=Le.length;Ie<Ne;Ie++)Pi(Le[Ie],G,j,W)}function ht(b,G,j,W){const ne=b.opaque,Le=b.transmissive,Ie=b.transparent;d.setupLightsView(j),Le.length>0&&ui(ne,G,j),W&&oe.viewport(C.copy(W)),ne.length>0&&yn(ne,G,j),Le.length>0&&yn(Le,G,j),Ie.length>0&&yn(Ie,G,j),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ui(b,G,j){const W=ye.isWebGL2;V===null&&(V=new $r(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?_a:Gr,minFilter:fc,samples:W&&s===!0?4:0})),h.getDrawingBufferSize(F),W?V.setSize(F.x,F.y):V.setSize(Od(F.x),Od(F.y));const ne=h.getRenderTarget();h.setRenderTarget(V),h.clear();const Le=h.toneMapping;h.toneMapping=wi,yn(b,G,j),h.toneMapping=Le,ve.updateMultisampleRenderTarget(V),ve.updateRenderTargetMipmap(V),h.setRenderTarget(ne)}function yn(b,G,j){const W=G.isScene===!0?G.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const Ie=b[ne],Ne=Ie.object,ze=Ie.geometry,Ze=W===null?Ie.material:W,Ve=Ie.group;Ne.layers.test(j.layers)&&Nx(Ne,G,j,ze,Ze,Ve)}}function Nx(b,G,j,W,ne,Le){b.onBeforeRender(h,G,j,W,ne,Le),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(h,G,j,W,b,Le),ne.transparent===!0&&ne.side===Hr?(ne.side=qn,ne.needsUpdate=!0,h.renderBufferDirect(j,G,W,ne,b,Le),ne.side=va,ne.needsUpdate=!0,h.renderBufferDirect(j,G,W,ne,b,Le),ne.side=Hr):h.renderBufferDirect(j,G,W,ne,b,Le),b.onAfterRender(h,G,j,W,ne,Le)}function mc(b,G,j){G.isScene!==!0&&(G=q);const W=ce.get(b),ne=d.state.lights,Le=d.state.shadowsArray,Ie=ne.state.version,Ne=Ue.getParameters(b,ne.state,Le,G,j),ze=Ue.getProgramCacheKey(Ne);let Ze=W.programs;W.environment=b.isMeshStandardMaterial?G.environment:null,W.fog=G.fog,W.envMap=(b.isMeshStandardMaterial?Ae:We).get(b.envMap||W.environment),Ze===void 0&&(b.addEventListener("dispose",N),Ze=new Map,W.programs=Ze);let Ve=Ze.get(ze);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Ie)return _p(b,Ne),Ve}else Ne.uniforms=Ue.getUniforms(b),b.onBuild(j,Ne,h),b.onBeforeCompile(Ne,h),Ve=Ue.acquireProgram(Ne,ze),Ze.set(ze,Ve),W.uniforms=Ne.uniforms;const Xe=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=M.uniform),_p(b,Ne),W.needsLights=Bx(b),W.lightsStateVersion=Ie,W.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.directionalShadowMap.value=ne.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotShadowMap.value=ne.state.spotShadowMap,Xe.spotShadowMatrix.value=ne.state.spotShadowMatrix,Xe.pointShadowMap.value=ne.state.pointShadowMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix);const pt=Ve.getUniforms(),fr=Ul.seqWithValue(pt.seq,Xe);return W.currentProgram=Ve,W.uniformsList=fr,Ve}function _p(b,G){const j=ce.get(b);j.outputEncoding=G.outputEncoding,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Ox(b,G,j,W,ne){G.isScene!==!0&&(G=q),ve.resetTextureUnits();const Le=G.fog,Ie=W.isMeshStandardMaterial?G.environment:null,Ne=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Wr,ze=(W.isMeshStandardMaterial?Ae:We).get(W.envMap||Ie),Ze=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!W.normalMap&&!!j.attributes.tangent,Xe=!!j.morphAttributes.position,pt=!!j.morphAttributes.normal,fr=!!j.morphAttributes.color,Jr=W.toneMapped?h.toneMapping:wi,Kr=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Jn=Kr!==void 0?Kr.length:0,Ye=ce.get(W),es=d.state.lights;if(k===!0&&(z===!0||b!==w)){const ln=b===w&&W.id===S;M.setState(W,b,ln)}let yt=!1;W.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==es.state.version||Ye.outputEncoding!==Ne||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==ze||W.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==M.numPlanes||Ye.numIntersection!==M.numIntersection)||Ye.vertexAlphas!==Ze||Ye.vertexTangents!==Ve||Ye.morphTargets!==Xe||Ye.morphNormals!==pt||Ye.morphColors!==fr||Ye.toneMapping!==Jr||ye.isWebGL2===!0&&Ye.morphTargetsCount!==Jn)&&(yt=!0):(yt=!0,Ye.__version=W.version);let Sn=Ye.currentProgram;yt===!0&&(Sn=mc(W,G,ne));let Li=!1,_o=!1,gc=!1;const jt=Sn.getUniforms(),xo=Ye.uniforms;if(oe.useProgram(Sn.program)&&(Li=!0,_o=!0,gc=!0),W.id!==S&&(S=W.id,_o=!0),Li||w!==b){if(jt.setValue(A,"projectionMatrix",b.projectionMatrix),ye.logarithmicDepthBuffer&&jt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),w!==b&&(w=b,_o=!0,gc=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ln=jt.map.cameraPosition;ln!==void 0&&ln.setValue(A,H.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&jt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ne.isSkinnedMesh)&&jt.setValue(A,"viewMatrix",b.matrixWorldInverse)}if(ne.isSkinnedMesh){jt.setOptional(A,ne,"bindMatrix"),jt.setOptional(A,ne,"bindMatrixInverse");const ln=ne.skeleton;ln&&(ye.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),jt.setValue(A,"boneTexture",ln.boneTexture,ve),jt.setValue(A,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vc=j.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0&&ye.isWebGL2===!0)&&le.update(ne,j,W,Sn),(_o||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,jt.setValue(A,"receiveShadow",ne.receiveShadow)),_o&&(jt.setValue(A,"toneMappingExposure",h.toneMappingExposure),Ye.needsLights&&Fx(xo,gc),Le&&W.fog===!0&&et.refreshFogUniforms(xo,Le),et.refreshMaterialUniforms(xo,W,O,D,V),Ul.upload(A,Ye.uniformsList,xo,ve)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ul.upload(A,Ye.uniformsList,xo,ve),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&jt.setValue(A,"center",ne.center),jt.setValue(A,"modelViewMatrix",ne.modelViewMatrix),jt.setValue(A,"normalMatrix",ne.normalMatrix),jt.setValue(A,"modelMatrix",ne.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let _c=0,Ux=ln.length;_c<Ux;_c++)if(ye.isWebGL2){const xp=ln[_c];we.update(xp,Sn),we.bind(xp,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Fx(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Bx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,G,j){ce.get(b.texture).__webglTexture=G,ce.get(b.depthTexture).__webglTexture=j;const W=ce.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,G){const j=ce.get(b);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,j=0){x=b,g=G,v=j;let W=!0;if(b){const ze=ce.get(b);ze.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),W=!1):ze.__webglFramebuffer===void 0?ve.setupRenderTarget(b):ze.__hasExternalTextures&&ve.rebindTextures(b,ce.get(b.texture).__webglTexture,ce.get(b.depthTexture).__webglTexture)}let ne=null,Le=!1,Ie=!1;if(b){const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Ie=!0);const Ze=ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ne=Ze[G],Le=!0):ye.isWebGL2&&b.samples>0&&ve.useMultisampledRTT(b)===!1?ne=ce.get(b).__webglMultisampledFramebuffer:ne=Ze,C.copy(b.viewport),L.copy(b.scissor),y=b.scissorTest}else C.copy(U).multiplyScalar(O).floor(),L.copy(X).multiplyScalar(O).floor(),y=$;if(oe.bindFramebuffer(36160,ne)&&ye.drawBuffers&&W&&oe.drawBuffers(b,ne),oe.viewport(C),oe.scissor(L),oe.setScissorTest(y),Le){const ze=ce.get(b.texture);A.framebufferTexture2D(36160,36064,34069+G,ze.__webglTexture,j)}else if(Ie){const ze=ce.get(b.texture),Ze=G||0;A.framebufferTextureLayer(36160,36064,ze.__webglTexture,j||0,Ze)}S=-1},this.readRenderTargetPixels=function(b,G,j,W,ne,Le,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){oe.bindFramebuffer(36160,Ne);try{const ze=b.texture,Ze=ze.format,Ve=ze.type;if(Ze!==ri&&Y.convert(Ze)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===_a&&(Z.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ve!==Gr&&Y.convert(Ve)!==A.getParameter(35738)&&!(Ve===Tr&&(ye.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-W&&j>=0&&j<=b.height-ne&&A.readPixels(G,j,W,ne,Y.convert(Ze),Y.convert(Ve),Le)}finally{const ze=x!==null?ce.get(x).__webglFramebuffer:null;oe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(b,G,j=0){const W=Math.pow(2,-j),ne=Math.floor(G.image.width*W),Le=Math.floor(G.image.height*W);ve.setTexture2D(G,0),A.copyTexSubImage2D(3553,j,0,0,b.x,b.y,ne,Le),oe.unbindTexture()},this.copyTextureToTexture=function(b,G,j,W=0){const ne=G.image.width,Le=G.image.height,Ie=Y.convert(j.format),Ne=Y.convert(j.type);ve.setTexture2D(j,0),A.pixelStorei(37440,j.flipY),A.pixelStorei(37441,j.premultiplyAlpha),A.pixelStorei(3317,j.unpackAlignment),G.isDataTexture?A.texSubImage2D(3553,W,b.x,b.y,ne,Le,Ie,Ne,G.image.data):G.isCompressedTexture?A.compressedTexSubImage2D(3553,W,b.x,b.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):A.texSubImage2D(3553,W,b.x,b.y,Ie,Ne,G.image),W===0&&j.generateMipmaps&&A.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,G,j,W,ne=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=b.max.x-b.min.x+1,Ie=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,ze=Y.convert(W.format),Ze=Y.convert(W.type);let Ve;if(W.isData3DTexture)ve.setTexture3D(W,0),Ve=32879;else if(W.isDataArrayTexture)ve.setTexture2DArray(W,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,W.flipY),A.pixelStorei(37441,W.premultiplyAlpha),A.pixelStorei(3317,W.unpackAlignment);const Xe=A.getParameter(3314),pt=A.getParameter(32878),fr=A.getParameter(3316),Jr=A.getParameter(3315),Kr=A.getParameter(32877),Jn=j.isCompressedTexture?j.mipmaps[0]:j.image;A.pixelStorei(3314,Jn.width),A.pixelStorei(32878,Jn.height),A.pixelStorei(3316,b.min.x),A.pixelStorei(3315,b.min.y),A.pixelStorei(32877,b.min.z),j.isDataTexture||j.isData3DTexture?A.texSubImage3D(Ve,ne,G.x,G.y,G.z,Le,Ie,Ne,ze,Ze,Jn.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ve,ne,G.x,G.y,G.z,Le,Ie,Ne,ze,Jn.data)):A.texSubImage3D(Ve,ne,G.x,G.y,G.z,Le,Ie,Ne,ze,Ze,Jn),A.pixelStorei(3314,Xe),A.pixelStorei(32878,pt),A.pixelStorei(3316,fr),A.pixelStorei(3315,Jr),A.pixelStorei(32877,Kr),ne===0&&W.generateMipmaps&&A.generateMipmap(Ve),oe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zT extends z_{}zT.prototype.isWebGL1Renderer=!0;class NT extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class OT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=zd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new I;class mu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}setX(e,n){return this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class N_ extends mo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const Ro=new I,vs=new I,_s=new I,xs=new Pe,Do=new Pe,O_=new ct,vl=new I,Io=new I,_l=new I,qg=new Pe,Af=new Pe,Yg=new Pe;class FT extends Nt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new li;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new OT(n,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new mu(i,3,0,!1)),gs.setAttribute("uv",new mu(i,2,3,!1))}this.geometry=gs,this.material=e!==void 0?e:new N_,this.center=new Pe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),O_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-_s.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xl(vl.set(-.5,-.5,0),_s,o,vs,r,s),xl(Io.set(.5,-.5,0),_s,o,vs,r,s),xl(_l.set(.5,.5,0),_s,o,vs,r,s),qg.set(0,0),Af.set(1,0),Yg.set(1,1);let a=e.ray.intersectTriangle(vl,Io,_l,!1,Ro);if(a===null&&(xl(Io.set(-.5,.5,0),_s,o,vs,r,s),Af.set(0,1),a=e.ray.intersectTriangle(vl,_l,Io,!1,Ro),a===null))return;const l=e.ray.origin.distanceTo(Ro);l<e.near||l>e.far||n.push({distance:l,point:Ro.clone(),uv:ii.getUV(Ro,vl,Io,_l,qg,Af,Yg,new Pe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(t,e,n,i,r,s){xs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Do.x=s*xs.x-r*xs.y,Do.y=r*xs.x+s*xs.y):Do.copy(xs),t.copy(e),t.x+=Do.x,t.y+=Do.y,t.applyMatrix4(O_)}class F_ extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zg=new I,Qg=new I,Jg=new ct,Pf=new M_,yl=new dc;class BT extends Nt{constructor(e=new li,n=new F_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zg.fromBufferAttribute(n,r-1),Qg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zg.distanceTo(Qg);e.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;Jg.copy(r).invert(),Pf.copy(e.ray).applyMatrix4(Jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new I,c=new I,f=new I,d=new I,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){const w=_.getX(x),C=_.getX(x+1);if(u.fromBufferAttribute(p,w),c.fromBufferAttribute(p,C),Pf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||n.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=g,S=v-1;x<S;x+=m){if(u.fromBufferAttribute(p,x),c.fromBufferAttribute(p,x+1),Pf.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Kg=new I,e0=new I;class UT extends BT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Kg.fromBufferAttribute(n,r),e0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kg.distanceTo(e0);e.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const t0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class VT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const HT=new VT;class B_{constructor(e){this.manager=e!==void 0?e:HT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class GT extends B_{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=t0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=xa("img");function l(){c(),t0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class WT extends B_{constructor(e){super(e)}load(e,n,i,r){const s=new Rn,o=new GT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class U_ extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class $T extends U_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const n0=new ct,i0=new I,r0=new I;class jT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),n.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(r0),n.updateMatrixWorld(),n0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n0),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XT extends jT{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qT extends U_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.shadow=new XT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YT extends UT{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,m=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const h=d===s?i:r;h.toArray(u,m),m+=3,h.toArray(u,m),m+=3,h.toArray(u,m),m+=3,h.toArray(u,m),m+=3}const c=new li;c.setAttribute("position",new Zn(l,3)),c.setAttribute("color",new Zn(u,3));const f=new F_({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const ys=new I,s0=new ct,o0=new ct,a0=new I,l0=new I;class ZT{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.autoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.updateMatrixWorld(),s0.copy(_.matrixWorldInverse),o0.multiplyMatrices(_.projectionMatrix,s0),u(m,m,_),d(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,o=r/2,l.style.width=m+"px",l.style.height=_+"px"};function u(m,_,h){if(m.isCSS2DObject){ys.setFromMatrixPosition(m.matrixWorld),ys.applyMatrix4(o0);const p=m.visible===!0&&ys.z>=-1&&ys.z<=1&&m.layers.test(h.layers)===!0;if(m.element.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(n,_,h);const v=m.element;v.style.transform="translate(-50%,-50%) translate("+(ys.x*s+s)+"px,"+(-ys.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),m.onAfterRender(n,_,h)}const g={distanceToCameraSquared:c(h,m)};a.objects.set(m,g)}for(let p=0,g=m.children.length;p<g;p++)u(m.children[p],_,h)}function c(m,_){return a0.setFromMatrixPosition(m.matrixWorld),l0.setFromMatrixPosition(_.matrixWorld),a0.distanceToSquared(l0)}function f(m){const _=[];return m.traverse(function(h){h.isCSS2DObject&&_.push(h)}),_}function d(m){const _=f(m).sort(function(p,g){if(p.renderOrder!==g.renderOrder)return g.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(g).distanceToCameraSquared;return v-x}),h=_.length;for(let p=0,g=_.length;p<g;p++)_[p].element.style.zIndex=h-p}}}class u0{constructor(e,n,i){E(this,"camera");E(this,"domElement");E(this,"enabled");E(this,"screen");E(this,"rotateSpeed");E(this,"zoomSpeed");E(this,"panSpeed");E(this,"noRotate");E(this,"noZoom");E(this,"noPan");E(this,"staticMoving");E(this,"dynamicDampingFactor");E(this,"minDistance");E(this,"maxDistance");E(this,"keys");E(this,"mouseButtons");E(this,"target");E(this,"target0");E(this,"position0");E(this,"up0");E(this,"zoom0");E(this,"lastZoom");E(this,"EPS");E(this,"lastPosition");E(this,"_eye");E(this,"_movePrev");E(this,"_moveCurr");E(this,"_lastAxis");E(this,"_zoomStart");E(this,"_zoomEnd");E(this,"_panStart");E(this,"_panEnd");E(this,"_pointers");E(this,"_pointerPositions");E(this,"_state");E(this,"_touchZoomDistanceStart");E(this,"_touchZoomDistanceEnd");E(this,"_lastAngle");E(this,"context_menu");E(this,"pointer_down");E(this,"pointer_move");E(this,"pointer_up");E(this,"pointer_cancel");E(this,"mouse_wheel");E(this,"_rendDom");E(this,"_meshCenter");E(this,"_isRY",!0);n===void 0&&console.warn("TrackCameraCtrl: domElement is undefined."),n===document&&console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.'),this._rendDom=i,this.camera=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=3,this.zoomSpeed=3,this.panSpeed=2.5,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!0,this.dynamicDampingFactor=20,this.minDistance=500,this.maxDistance=5e5,this.mouseButtons={LEFT:Xc.ROTATE,MIDDLE:Xc.DOLLY,RIGHT:Xc.PAN},this.target=new I(0,1500,0),this.EPS=1e-6,this.lastPosition=new I,this.lastZoom=1,this._lastAngle=0,this._state=mt.NONE,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._eye=new I,this._movePrev=new Pe,this._moveCurr=new Pe,this._lastAxis=new I,this._zoomStart=new Pe,this._zoomEnd=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._pointers=[],this._pointerPositions={},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.up0=this.camera.up.clone(),this.zoom0=this.camera.zoom,this.addEve(),this.handleResize(),this.update()}clearData(){this._rendDom=null,this.camera=null,this.domElement=null,this.screen=null,this.mouseButtons=null,this.target=null,this.lastPosition=null,this._eye=null,this._movePrev=null,this._moveCurr=null,this._lastAxis=null,this._zoomStart=null,this._zoomEnd=null,this._panStart=null,this._panEnd=null,this._pointers=null,this._pointerPositions=null,this.target0=null,this.position0=null,this.up0=null,this.context_menu=null,this.pointer_down=null,this.pointer_move=null,this.pointer_up=null,this.pointer_cancel=null,this.mouse_wheel=null}dispose(){this.removeEve(),this.clearData()}addEve(){console.log("track add eve"),this.context_menu=e=>{this.contextmenu(e)},this.pointer_down=e=>{this.onPointerDown(e)},this.pointer_move=e=>{this.onPointerMove(e)},this.pointer_up=e=>{this.onPointerUp(e)},this.pointer_cancel=e=>{this.onPointerCancel(e)},this.mouse_wheel=e=>{this.onMouseWheel(e)},this.domElement.addEventListener("contextmenu",this.context_menu),this.domElement.addEventListener("pointerdown",this.pointer_down),this.domElement.addEventListener("pointercancel",this.pointer_cancel),this.domElement.addEventListener("wheel",this.mouse_wheel,{passive:!1})}removeEve(){this.domElement.removeEventListener("contextmenu",this.context_menu),this.domElement.removeEventListener("pointerdown",this.pointer_down),this.domElement.removeEventListener("pointercancel",this.pointer_cancel),this.domElement.removeEventListener("wheel",this.mouse_wheel),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up)}handleResize(){this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight}getMouseOnScreen(e,n){let i=new Pe,r=(e-this.screen.left)/this.screen.width,s=(n-this.screen.top)/this.screen.height;return i.set(r,s),i}getMouseOnCircle(e,n){let i=new Pe,r=(e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),s=(this.screen.height+2*(this.screen.top-n))/this.screen.width;return i.set(r,s),i}rotateCamera(){let e=new I,n=new po,i=new I,r=new I,s=new I,o=new I;o.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let a=o.length();if(a){let u=this._moveCurr.clone().sub(this._movePrev.clone()).angle();if(this._isRY=u>Math.PI*.25&&u<Math.PI*.75||u>Math.PI*1.25&&u<Math.PI*1.75,this._eye.copy(this.camera.position).sub(this.target),i.copy(this._eye).normalize(),r.copy(this.camera.up).normalize(),s.crossVectors(r,i).normalize(),this._isRY?(s.setLength(0),r.setLength(this._moveCurr.y-this._movePrev.y)):(s.setLength(this._moveCurr.x-this._movePrev.x),r.setLength(0)),o.copy(r.add(s)),a*=this.rotateSpeed,this._isRY)e.crossVectors(o,this._eye).normalize();else{let c=this.camera.up.clone(),f=new I;c.y>1||c.y<-1?f.set(0,-1,0):f.set(0,1,0),e.copy(f),a=this._moveCurr.x-this._movePrev.x>0?-a:a}n.setFromAxisAngle(e,a),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)),this._lastAxis.copy(e),this._lastAngle=a}else!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.camera.position).sub(this.target),n.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)));this._movePrev.copy(this._moveCurr)}zoomCamera(){let e;this._state===mt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.camera instanceof Gt?this._eye.multiplyScalar(e):this.camera instanceof ji?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.camera instanceof Gt?this._eye.multiplyScalar(e):this.camera instanceof ji?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor),this._eye.length()/165}adjustCameraUp(e){e.y>0?this.camera.up.set(0,1,0):e.y<0?this.camera.up.set(0,-1,0):e.x>0?this.camera.up.set(1,0,0):e.x<0?this.camera.up.set(-1,0,0):e.z>0?this.camera.up.set(0,0,1):e.z<0&&this.camera.up.set(0,0,-1)}panCameraByKey(e=-1){let n=new I,i=new I,r=new I,s=this._eye.length()*this.panSpeed*.01;if(r.x=e===0?s:e===1?-s:0,r.y=e===2?s:e===3?-s:0,r.z=e===4?s:e===5?-s:0,r.x!==0&&n.copy(this._eye).cross(this.camera.up).setLength(r.x),r.y!==0){let o=new I(0,1,0);n.add(i.copy(o).setLength(r.y))}if(r.z!==0){let o=new I(-this._eye.x,0,-this._eye.z);n.add(i.copy(o).setLength(r.z))}this.camera.position.add(n),this.target.add(n),this.update()}panCamera(){let e=new Pe,n=new I,i=new I;if(e.copy(this._panEnd).sub(this._panStart),e.lengthSq()){if(this.camera instanceof ji){const l=(this.camera.right-this.camera.left)/this.camera.zoom/this._rendDom.clientWidth,u=(this.camera.top-this.camera.bottom)/this.camera.zoom/this._rendDom.clientHeight;e.x*=l*.04,e.y*=u*.04}e.multiplyScalar(this._eye.length()*this.panSpeed);let r=new I(0,1,0),s=this.camera.position.y>=0?-this._eye.x:this._eye.x,o=this.camera.position.y>=0?-this._eye.z:this._eye.z,a=new I(s,0,o);i.copy(this._eye).cross(r).setLength(e.x),i.add(n.copy(a).setLength(e.y)),this.camera.position.add(i),this.target.add(i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(e.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}update(){this._eye.subVectors(this.camera.position,this.target),this.noRotate||this.rotateCamera(),this.noZoom||this.zoomCamera(),this.noPan||this.panCamera(),this.camera.position.addVectors(this.target,this._eye),this.camera instanceof Gt?(this.checkDistances(),this.camera.lookAt(this.target),this.lastPosition.distanceToSquared(this.camera.position)>this.EPS&&this.lastPosition.copy(this.camera.position)):this.camera instanceof ji?(this.camera.lookAt(this.target),(this.lastPosition.distanceToSquared(this.camera.position)>this.EPS||this.lastZoom!==this.camera.zoom)&&(this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom)):console.warn("TrackCameraCtrl: undefine camera type")}reset(){this._state=mt.NONE,this.target.copy(this.target0),this.camera.position.copy(this.position0),this.camera.up.copy(this.up0),this.camera.zoom=this.zoom0,this.camera.updateProjectionMatrix(),this._eye.subVectors(this.camera.position,this.target),this.camera.lookAt(this.target),this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom}onPointerDown(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this.pointer_move),this.domElement.addEventListener("pointerup",this.pointer_up)),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.onMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.onMouseMove(e))}onPointerUp(e){e.pointerType==="touch"?this.onTouchEnd(e):this.onMouseUp(),this.removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up))}onPointerCancel(e){this.removePointer(e)}keyup(){this.enabled!==!1&&(this._state=mt.NONE)}onMouseDown(e){switch(e.button){case this.mouseButtons.LEFT:this._state=mt.ROTATE;break;case this.mouseButtons.MIDDLE:this._state=mt.PAN;break;case this.mouseButtons.RIGHT:this._state=mt.PAN;break;default:this._state=mt.NONE;break}this._state===mt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):this._state===mt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):this._state===mt.PAN&&!this.noPan&&(this._panStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart))}onMouseMove(e){this._state===mt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._meshCenter?this._meshCenter:this.target):this._state===mt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)):this._state===mt.PAN&&!this.noPan&&this._panEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._state!=mt.NONE&&this.update()}zoomCameraByTarget(e){var n=e.clientX/this.screen.width*2-1,i=-(e.clientY/this.screen.height)*2+1;let r=new I(n,i,.5);r.unproject(this.camera);let s=3;r.sub(this.camera.position).setLength(s),e.deltaY<0?(this.camera.position.add(r),this.target.add(r)):(this.camera.position.sub(r),this.target.sub(r))}onMouseUp(){this._state=mt.NONE}onMouseWheel(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.zoomCameraByTarget(e),this.update()}}resetMouse(){}onTouchStart(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._state=mt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this._state=mt.TOUCH_ZOOM_PAN;const n=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(n*n+i*i);const r=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this.getMouseOnScreen(r,s)),this._panEnd.copy(this._panStart);break}}onTouchMove(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY));break;default:const n=this.getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+r*r);const s=(e.pageX+n.x)/2,o=(e.pageY+n.y)/2;this._panEnd.copy(this.getMouseOnScreen(s,o));break}}onTouchEnd(e){switch(this._pointers.length){case 0:this._state=mt.NONE;break;case 1:this._state=mt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this._state=mt.TOUCH_ZOOM_PAN,this._moveCurr.copy(this.getMouseOnCircle(e.pageX-this._movePrev.x,e.pageY-this._movePrev.y)),this._movePrev.copy(this._moveCurr);break}}contextmenu(e){this.enabled!==!1&&e.preventDefault()}addPointer(e){this._pointers.push(e)}removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Pe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}}class QT{constructor(){E(this,"frustumSize",1e4);E(this,"PLANE_WIDTH",2e5);E(this,"PLANE_HEIGTH",2e5);E(this,"near",100);E(this,"far",1e6);E(this,"_scene");E(this,"_plane");E(this,"_grid");E(this,"_ambLight");E(this,"_pcamera");E(this,"_ocamera");E(this,"_camera");E(this,"_render");E(this,"_css2dReder");E(this,"_viewWidth");E(this,"_viewHeight");E(this,"_posTips");E(this,"_trackCtrl");E(this,"_controls");this._viewWidth=window.innerWidth,this._viewHeight=window.innerHeight,this.createScene(),this.createPCamera(),this.createPlane(),this.createGrid(),this.createLight(),this.createCSS2DRender(),this.createRender(),this.createControls()}get scene(){return this._scene}get camera(){return this._camera}get render(){return this._render}get css2dRender(){return this._css2dReder}get controls(){return this._controls}set viewWidth(e){this._viewWidth=e}get viewWidth(){return this._viewWidth}set viewHeight(e){this._viewHeight=e}get viewHeight(){return this._viewHeight}get PlaneMesh(){return this._plane}get posPoint(){return this._posTips}dispose(){this.removeEvent()}addEvent(){}removeEvent(){}createCSS2DRender(){this._css2dReder=new ZT,this._css2dReder.setSize(window.innerWidth,window.innerHeight),this._css2dReder.domElement.style.position="absolute",this._css2dReder.domElement.style.top="0px"}onCameraTargetChange(e){this._posTips&&(this._posTips.visible=e!=null),e&&this._posTips.position.set(e.x,e.y,e.z)}createCenterPoint(){let e=require("@/assets/img/s.png");const n=new WT().load(e),i=new N_({map:n,sizeAttenuation:!1,depthWrite:!1,depthTest:!1});this._posTips=new FT(i),this._posTips.name="nos_rsdic",this._posTips.scale.set(.04,.04,.04),this._scene.add(this._posTips),this._posTips.visible=!1}changeBackground(e){let n=e===1?new He(Fl.COLOR_PIURITY_LIGHT):e===2?new He(Fl.COLOR_PIURITY_DEPTH):null;this._scene.background=n}changeCamera(e){console.log("aerial scene change camera");let n=this._camera.position.clone();this._camera=e==0?this._pcamera:this._ocamera,this._camera.position.set(n.x,n.y,n.z),this._camera.lookAt(this._trackCtrl.target.x,this._trackCtrl.target.y,this._trackCtrl.target.z),this._camera.up.copy(this._trackCtrl.camera.up),this._trackCtrl.camera=this._camera,this._trackCtrl.update(),this._controls=this._trackCtrl}createTrackCtrl(e){this._trackCtrl=new u0(e,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createScene(){this._scene=new NT,this._scene.background=new He(Fl.COLOR_PIURITY_LIGHT)}createPCamera(){this._pcamera=new Gt(60,window.innerWidth/window.innerHeight,this.near,this.far),this._pcamera.position.set(0,5e3,1e4),this._pcamera.lookAt(new I(0,0,0)),this._camera=this._pcamera}createOCamera(){let e=this._viewWidth/this._viewHeight;this._ocamera=new ji(this.frustumSize*e/-2,this.frustumSize*e/2,this.frustumSize/2,this.frustumSize/-2,1,1e5),this._ocamera.position.set(0,500,1e3),this._ocamera.lookAt(new I(0,0,0)),this._scene.add(this._ocamera)}createControls(){this._trackCtrl=new u0(this._camera,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createPlane(){let e=new hc(this.PLANE_WIDTH,this.PLANE_HEIGTH);this._plane=new yi(e,new ip({color:13421772,reflectivity:0,transparent:!0,opacity:.1,side:Hr})),this._plane.rotation.x=-Math.PI/2,this._plane.position.set(0,-1,0),this._plane.visible=!1,this._scene.add(this._plane)}createGrid(){this._grid=new YT(this.PLANE_WIDTH/10,this.PLANE_WIDTH/1e4,16777215,16777215),this._grid.material.opacity=.6,this._grid.material.transparent=!0,this._grid.position.set(0,-1,0),this._scene.add(this._grid)}createLight(){const e=new $T(16777215,4473924,.6);e.position.set(0,2e4,0),this._scene.add(e);let n=new qT(16777215,.6);n.position.set(0,1e5,1e5),this._scene.add(n)}createRender(){this._render=new z_({precision:"highp",antialias:!0,alpha:!0}),this._render.setSize(window.innerWidth,window.innerHeight),this._render.setPixelRatio(window.devicePixelRatio),this._render.outputEncoding=at}grideShow(e){this._grid.visible=e}onResize(){if(this._viewWidth=window.innerWidth,this._viewHeight=window.innerHeight,this._trackCtrl&&(this._trackCtrl.screen.width=this._viewWidth,this._trackCtrl.screen.height=this._viewHeight),this._render.setSize(this._viewWidth,this._viewHeight),this._css2dReder.setSize(this._viewWidth,this._viewHeight),this.camera instanceof Gt)this._camera.aspect=this._viewWidth/this._viewHeight,this.camera.updateProjectionMatrix();else if(this.camera instanceof ji){let e=this._viewWidth/this._viewHeight;this._camera.left=-this.frustumSize*e/2,this._camera.right=this.frustumSize*e/2,this._camera.top=this.frustumSize/2,this._camera.bottom=-this.frustumSize/2,this._camera.updateProjectionMatrix()}}onsetview(e){this._viewWidth=e.width,this._viewHeight=e.height,this.onResize()}}class JT{constructor(){E(this,"_main")}get main(){return this._main}startUp(){this._main=new QT}dispose(){}onResize(){this._main&&this._main.onResize()}mountedMainScene(){bt.container.appendChild(this._main.render.domElement),bt.container.appendChild(this._main.css2dRender.domElement)}}class KT{constructor(){E(this,"scene",new JT);E(this,"render",new U2);E(this,"mesh",new B2);E(this,"test",new F2)}startUp(){this.mesh.startUp(),this.scene.startUp(),this.render.startUp(),this.test.startUp()}}const Jo=class{constructor(){E(this,"_serviceFactory");E(this,"_serviceList");this._serviceFactory=new Map,this._serviceList=new Map}static get ins(){return this._ins||(this._ins=new Jo),this._ins}static RegSer(e,n){if(Jo.ins._serviceFactory.has(e))throw new Error("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u6B64\u7C7B\u578B\u7684\u670D\u52A1\u5DE5\u5382\uFF0C\u8BF7\u52FF\u518D\u6B21\u6CE8\u518C");Jo.ins._serviceFactory.set(e,n)}getService(e){let n;if(this._serviceList.has(e))n=this._serviceList.get(e);else if(this._serviceFactory.has(e)){let i=this._serviceFactory.get(e);i&&(n=this.initService(i))}return n&&n.inited||console.log("[ServiceManager] \u6709\u4EBA\u62FF\u5230\u4E86\u4E00\u4E2A\u7A7A\u7684\u670D\u52A1\u5BF9\u8C61::",e),n}initService(e){var n=e.createService();return this._serviceList.set(n.type,n),n.serviceInit(),n}removeService(e){if(this._serviceList.has(e)){var n=this._serviceList.get(e);n&&n.dispose(),this._serviceList.delete(e)}}};let kr=Jo;E(kr,"_ins");class e4{constructor(){E(this,"_scheme");E(this,"_cad");E(this,"_scene");E(this,"_mesh")}static hasService(e){return kr.ins.getService(e)!=null}tryGetService(e){var n=kr.ins.getService(e);if(!n)throw Error("\u670D\u52A1\u83B7\u53D6\u5931\u8D25:"+e);return n}get cad(){return this._cad==null&&(this._cad=this.tryGetService(Gn.CAD_SERVICE)),this._cad}get scheme(){return this._scheme==null&&(this._scheme=this.tryGetService(Gn.SCHEME_SERVICE)),this._scheme}get scene(){return this._scene==null&&(this._scene=this.tryGetService(Gn.SCENE_SERVICE)),this._scene}get mesh(){return this._mesh==null&&(this._mesh=this.tryGetService(Gn.MESH_SERVICE)),this._mesh}}const Sr=class{constructor(e=null,n=null,i=null,r=!1){E(this,"caller");E(this,"method");E(this,"args");E(this,"once",!1);E(this,"_id",0);this.setTo(e,n,i,r)}setTo(e,n,i,r=!1){return this._id=Sr._gid++,this.caller=e,this.method=n,this.args=i,this.once=r,this}run(){if(this.method==null)return null;var e=this._id,n=this.method.apply(this.caller,this.args);return this._id===e&&this.once&&this.recover(),n}runWith(e){if(this.method==null)return null;var n=this._id;if(e==null)var i=this.method.apply(this.caller,this.args);else!this.args&&!e.unshift?i=this.method.call(this.caller,e):this.args?i=this.method.apply(this.caller,this.args.concat(e)):i=this.method.apply(this.caller,e);return this._id===n&&this.once&&this.recover(),i}clear(){return this.caller=null,this.method=null,this.args=null,this}recover(){this._id>0&&(this._id=0,Sr._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Sr._pool.length?Sr._pool.pop().setTo(e,n,i,r):new Sr(e,n,i,r)}};let Uo=Sr;E(Uo,"_pool",[]),E(Uo,"_gid",1);const vp=class{constructor(){E(this,"_events")}hasListener(e){var n=this._events&&this._events[e];return!!n}event(e,n=null){if(!this._events||!this._events[e])return!1;var i=this._events[e];if(i.run)i.once&&delete this._events[e],n!=null?i.runWith(n):i.run();else{for(var r=0,s=i.length;r<s;r++){var o=i[r];o&&(n!=null?o.runWith(n):o.run()),(!o||o.once)&&(i.splice(r,1),r--,s--)}i.length===0&&this._events&&!this._events[e].run&&delete this._events[e]}return!0}on(e,n,i,r=null){return this._createListener(e,n,i,r,!1)}once(e,n,i,r=null){return this._createListener(e,n,i,r,!0)}_createListener(e,n,i,r,s,o=!0){o&&this.off(e,n,i,s);var a=Hl.create(n||this,i,r,s);this._events||(this._events={});var l=this._events;return l[e]?l[e].run?l[e]=[l[e],a]:l[e].push(a):l[e]=a,this}off(e,n,i,r=!1){if(!this._events||!this._events[e])return this;var s=this._events[e];if(s!=null)if(s.run)(!n||s.caller===n)&&(i==null||s.method===i)&&(!r||s.once)&&(delete this._events[e],s.recover());else{for(var o=0,a=0,l=s.length;a<l;a++){var u=s[a];if(!u){o++;continue}u&&(!n||u.caller===n)&&(i==null||u.method===i)&&(!r||u.once)&&(o++,s[a]=null,u.recover())}o===l&&delete this._events[e]}return this}offAll(e=null){var n=this._events;if(!n)return this;if(e)this._recoverHandlers(n[e]),delete n[e];else{for(var i in n)this._recoverHandlers(n[i]);this._events=null}return this}offAllCaller(e){if(e&&this._events)for(var n in this._events)this.off(n,e,null);return this}_recoverHandlers(e){if(!!e)if(e.run)e.recover();else for(var n=e.length-1;n>-1;n--)e[n]&&(e[n].recover(),e[n]=null)}isMouseEvent(e){return vp.MOUSE_EVENTS[e]||!1}};let Vl=vp;E(Vl,"MOUSE_EVENTS",{rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0});const Os=class extends Uo{constructor(e,n,i,r){super(e,n,i,r)}recover(){this._id>0&&(this._id=0,Os._pool.push(this.clear()))}static create(e,n,i=null,r=!0){return Os._pool.length?Os._pool.pop().setTo(e,n,i,r):new Os(e,n,i,r)}};let Hl=Os;E(Hl,"_pool",[]);const qt=class{static init(){qt._addEvent("keydown"),qt._addEvent("keypress"),qt._addEvent("keyup")}static _addEvent(e){window.document.addEventListener(e,function(n){qt.preventDefault(n),qt._dispatch(n,e)},!1)}static _dispatch(e,n){qt._event._stoped=!1,qt._event.nativeEvent=e,qt._event.keyCode=e.keyCode||e.which||e.charCode,n==="keydown"?qt._pressKeys[qt._event.keyCode]=!0:n==="keyup"&&(qt._pressKeys[qt._event.keyCode]=null),bt.ED.event(n,e)}static hasKeyDown(e){return qt._pressKeys[e]}static preventDefault(e){let n=e.ctrlKey;e.keyCode;let i=e.key;n&&(i=="s"||i=="z")&&e.preventDefault()}};let ws=qt;E(ws,"_pressKeys",{}),E(ws,"enabled",!0),E(ws,"_event",new me);class V_{constructor(e,n,i){E(this,"_type");E(this,"_serviceClass");E(this,"_syncInit");this._type=e,this._serviceClass=n,this._syncInit=i}get type(){return this._type}createService(){return new this._serviceClass}get asyncInitService(){return this._syncInit}}class H_{constructor(e){E(this,"_type");E(this,"_firstInit");E(this,"_inited");E(this,"_disposed");this._firstInit=!1,this._inited=!1,this._type=e,this._disposed=!1}get type(){return this._type}serviceInit(){this._firstInit||(this._firstInit=!0,this.onInit())}notifyServiceInited(e=!0){if(this._disposed)throw Error("\u5DF2\u88AB\u9500\u6BC1");e&&(this._inited=!0)}get inited(){return this._inited}dispose(){this.onDispose(),this._disposed=!0}onInit(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u5E76\u5728\u5B8C\u6210\u521D\u59CB\u5316\u540E\u901A\u8FC7 notifyServiceInited \u901A\u77E5\u51FA\u6765")}onDispose(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u7528\u4E8E\u91CA\u653E\u670D\u52A1")}}class t4{dispose(){}}class n4 extends H_{constructor(){super(Gn.CAD_SERVICE);E(this,"_ctrl");this._ctrl=new t4}onDispose(){this._ctrl.dispose()}onInit(){this.notifyServiceInited()}}class i4 extends V_{constructor(){super(Gn.CAD_SERVICE,n4)}}class r4 extends H_{constructor(){super(Gn.CAD_SERVICE)}onDispose(){}onInit(){this.notifyServiceInited()}mountedMainScene(){bt.MGR.scene.mountedMainScene()}mountedPanel(){}}class s4 extends V_{constructor(){super(Gn.SCENE_SERVICE,r4)}}class o4{static init(){kr.RegSer(Gn.CAD_SERVICE,new i4),kr.RegSer(Gn.SCENE_SERVICE,new s4)}}const Ko=class{startUp(){console.log("BIM start up."),o4.init(),ws.init(),Ko.MGR.startUp(),window.addEventListener("resize",()=>this.onWindowResize()),this.startRenderLoop()}exit(){console.log("BIM exit.")}startRenderLoop(){Ko.MGR.render.render(),requestAnimationFrame(()=>this.startRenderLoop())}onWindowResize(){console.log("windows resize"),Ko.MGR.scene.onResize()}};let bt=Ko;E(bt,"mode"),E(bt,"container"),E(bt,"uicontainer"),E(bt,"MGR",new KT),E(bt,"SC",new e4),E(bt,"ED",new Vl);function a4(t){function e(F,H,q,ae,A){for(var Se=0,Z=0,ye=0,oe=0,Ee,ce,ve=0,We=0,Ae,$e=Ae=Ee=0,De=0,Be=0,Ue=0,et=0,$t=q.length,P=$t-1,M,B="",te="",le="",de="",Te;De<$t;){if(ce=q.charCodeAt(De),De===P&&Z+oe+ye+Se!==0&&(Z!==0&&(ce=Z===47?10:47),oe=ye=Se=0,$t++,P++),Z+oe+ye+Se===0){if(De===P&&(0<Be&&(B=B.replace(d,"")),0<B.trim().length)){switch(ce){case 32:case 9:case 59:case 13:case 10:break;default:B+=q.charAt(De)}ce=59}switch(ce){case 123:for(B=B.trim(),Ee=B.charCodeAt(0),Ae=1,et=++De;De<$t;){switch(ce=q.charCodeAt(De)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(ce=q.charCodeAt(De+1)){case 42:case 47:e:{for($e=De+1;$e<P;++$e)switch(q.charCodeAt($e)){case 47:if(ce===42&&q.charCodeAt($e-1)===42&&De+2!==$e){De=$e+1;break e}break;case 10:if(ce===47){De=$e+1;break e}}De=$e}}break;case 91:ce++;case 40:ce++;case 34:case 39:for(;De++<P&&q.charCodeAt(De)!==ce;);}if(Ae===0)break;De++}switch(Ae=q.substring(et,De),Ee===0&&(Ee=(B=B.replace(f,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<Be&&(B=B.replace(d,"")),ce=B.charCodeAt(1),ce){case 100:case 109:case 115:case 45:Be=H;break;default:Be=$}if(Ae=e(H,Be,Ae,ce,A+1),et=Ae.length,0<k&&(Be=n($,B,Ue),Te=a(3,Ae,Be,H,ee,re,et,ce,A,ae),B=Be.join(""),Te!==void 0&&(et=(Ae=Te.trim()).length)===0&&(ce=0,Ae="")),0<et)switch(ce){case 115:B=B.replace(C,o);case 100:case 109:case 45:Ae=B+"{"+Ae+"}";break;case 107:B=B.replace(v,"$1 $2"),Ae=B+"{"+Ae+"}",Ae=X===1||X===2&&s("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=B+Ae,ae===112&&(Ae=(te+=Ae,""))}else Ae="";break;default:Ae=e(H,n(H,B,Ue),Ae,ae,A+1)}le+=Ae,Ae=Ue=Be=$e=Ee=0,B="",ce=q.charCodeAt(++De);break;case 125:case 59:if(B=(0<Be?B.replace(d,""):B).trim(),1<(et=B.length))switch($e===0&&(Ee=B.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(et=(B=B.replace(" ",":")).length),0<k&&(Te=a(1,B,H,F,ee,re,te.length,ae,A,ae))!==void 0&&(et=(B=Te.trim()).length)===0&&(B="\0\0"),Ee=B.charCodeAt(0),ce=B.charCodeAt(1),Ee){case 0:break;case 64:if(ce===105||ce===99){de+=B+q.charAt(De);break}default:B.charCodeAt(et-1)!==58&&(te+=r(B,Ee,ce,B.charCodeAt(2)))}Ue=Be=$e=Ee=0,B="",ce=q.charCodeAt(++De)}}switch(ce){case 13:case 10:Z===47?Z=0:1+Ee===0&&ae!==107&&0<B.length&&(Be=1,B+="\0"),0<k*V&&a(0,B,H,F,ee,re,te.length,ae,A,ae),re=1,ee++;break;case 59:case 125:if(Z+oe+ye+Se===0){re++;break}default:switch(re++,M=q.charAt(De),ce){case 9:case 32:if(oe+Se+Z===0)switch(ve){case 44:case 58:case 9:case 32:M="";break;default:ce!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:oe+Z+Se===0&&(Be=Ue=1,M="\f"+M);break;case 108:if(oe+Z+Se+U===0&&0<$e)switch(De-$e){case 2:ve===112&&q.charCodeAt(De-3)===58&&(U=ve);case 8:We===111&&(U=We)}break;case 58:oe+Z+Se===0&&($e=De);break;case 44:Z+ye+oe+Se===0&&(Be=1,M+="\r");break;case 34:case 39:Z===0&&(oe=oe===ce?0:oe===0?ce:oe);break;case 91:oe+Z+ye===0&&Se++;break;case 93:oe+Z+ye===0&&Se--;break;case 41:oe+Z+Se===0&&ye--;break;case 40:if(oe+Z+Se===0){if(Ee===0)switch(2*ve+3*We){case 533:break;default:Ee=1}ye++}break;case 64:Z+ye+oe+Se+$e+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<oe+Se+ye))switch(Z){case 0:switch(2*ce+3*q.charCodeAt(De+1)){case 235:Z=47;break;case 220:et=De,Z=42}break;case 42:ce===47&&ve===42&&et+2!==De&&(q.charCodeAt(et+2)===33&&(te+=q.substring(et,De+1)),M="",Z=0)}}Z===0&&(B+=M)}We=ve,ve=ce,De++}if(et=te.length,0<et){if(Be=H,0<k&&(Te=a(2,te,Be,F,ee,re,et,ae,A,ae),Te!==void 0&&(te=Te).length===0))return de+te+le;if(te=Be.join(",")+"{"+te+"}",X*U!==0){switch(X!==2||s(te,2)||(U=0),U){case 111:te=te.replace(S,":-moz-$1")+te;break;case 112:te=te.replace(x,"::-webkit-input-$1")+te.replace(x,"::-moz-$1")+te.replace(x,":-ms-input-$1")+te}U=0}}return de+te+le}function n(F,H,q){var ae=H.trim().split(p);H=ae;var A=ae.length,Se=F.length;switch(Se){case 0:case 1:var Z=0;for(F=Se===0?"":F[0]+" ";Z<A;++Z)H[Z]=i(F,H[Z],q).trim();break;default:var ye=Z=0;for(H=[];Z<A;++Z)for(var oe=0;oe<Se;++oe)H[ye++]=i(F[oe]+" ",ae[Z],q).trim()}return H}function i(F,H,q){var ae=H.charCodeAt(0);switch(33>ae&&(ae=(H=H.trim()).charCodeAt(0)),ae){case 38:return H.replace(g,"$1"+F.trim());case 58:return F.trim()+H.replace(g,"$1"+F.trim());default:if(0<1*q&&0<H.indexOf("\f"))return H.replace(g,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+H}function r(F,H,q,ae){var A=F+";",Se=2*H+3*q+4*ae;if(Se===944){F=A.indexOf(":",9)+1;var Z=A.substring(F,A.length-1).trim();return Z=A.substring(0,F).trim()+Z+";",X===1||X===2&&s(Z,1)?"-webkit-"+Z+Z:Z}if(X===0||X===2&&!s(A,1))return A;switch(Se){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(O,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return Z=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+A+"-ms-flex-pack"+Z+A;case 1005:return _.test(A)?A.replace(m,":-webkit-")+A.replace(m,":-moz-")+A:A;case 1e3:switch(Z=A.substring(13).trim(),H=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(H)){case 226:Z=A.replace(w,"tb");break;case 232:Z=A.replace(w,"tb-rl");break;case 220:Z=A.replace(w,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+Z+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(H=(A=F).length-10,Z=(A.charCodeAt(H)===33?A.substring(0,H):A).substring(F.indexOf(":",7)+1).trim(),Se=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:A=A.replace(Z,"-webkit-"+Z)+";"+A;break;case 207:case 102:A=A.replace(Z,"-webkit-"+(102<Se?"inline-":"")+"box")+";"+A.replace(Z,"-webkit-"+Z)+";"+A.replace(Z,"-ms-"+Z+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return Z=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+Z+"-ms-flex-"+Z+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(y,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(y,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(D.test(F)===!0)return(Z=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?r(F.replace("stretch","fill-available"),H,q,ae).replace(":fill-available",":stretch"):A.replace(Z,"-webkit-"+Z)+A.replace(Z,"-moz-"+Z.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,q+ae===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+A}return A}function s(F,H){var q=F.indexOf(H===1?":":"{"),ae=F.substring(0,H!==3?q:10);return q=F.substring(q+1,F.length-1),z(H!==2?ae:ae.replace(T,"$1"),q,H)}function o(F,H){var q=r(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return q!==H+";"?q.replace(L," or ($1)").substring(4):"("+H+")"}function a(F,H,q,ae,A,Se,Z,ye,oe,Ee){for(var ce=0,ve=H,We;ce<k;++ce)switch(We=J[ce].call(c,F,ve,q,ae,A,Se,Z,ye,oe,Ee)){case void 0:case!1:case!0:case null:break;default:ve=We}if(ve!==H)return ve}function l(F){switch(F){case void 0:case null:k=J.length=0;break;default:if(typeof F=="function")J[k++]=F;else if(typeof F=="object")for(var H=0,q=F.length;H<q;++H)l(F[H]);else V=!!F|0}return l}function u(F){return F=F.prefix,F!==void 0&&(z=null,F?typeof F!="function"?X=1:(X=2,z=F):X=0),u}function c(F,H){var q=F;if(33>q.charCodeAt(0)&&(q=q.trim()),K=q,q=[K],0<k){var ae=a(-1,H,q,q,ee,re,0,0,0,0);ae!==void 0&&typeof ae=="string"&&(H=ae)}var A=e($,q,H,0,0);return 0<k&&(ae=a(-2,A,q,q,ee,re,A.length,0,0,0),ae!==void 0&&(A=ae)),K="",U=0,re=ee=1,A}var f=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,_=/zoo|gra/,h=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,y=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,re=1,ee=1,U=0,X=1,$=[],J=[],k=0,z=null,V=0,K="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var l4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function u4(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var c4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c0=u4(function(t){return c4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Wn(){return(Wn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var f0=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},Bd=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Zh.exports.typeOf(t)},gu=Object.freeze([]),ir=Object.freeze({});function ao(t){return typeof t=="function"}function d0(t){return t.displayName||t.name||"Component"}function op(t){return t&&typeof t.styledComponentId=="string"}var lo=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ap=typeof window<"u"&&"HTMLElement"in window,f4=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),d4={};function Xr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var h4=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&Xr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=i.length;u<c;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),Gl=new Map,vu=new Map,Qo=1,Sl=function(t){if(Gl.has(t))return Gl.get(t);for(;vu.has(Qo);)Qo++;var e=Qo++;return Gl.set(t,e),vu.set(e,t),e},p4=function(t){return vu.get(t)},m4=function(t,e){e>=Qo&&(Qo=e+1),Gl.set(t,e),vu.set(e,t)},g4="style["+lo+'][data-styled-version="5.3.5"]',v4=new RegExp("^"+lo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),_4=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},x4=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(v4);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(m4(u,l),_4(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},y4=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},G_=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(lo))return c}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(lo,"active"),i.setAttribute("data-styled-version","5.3.5");var o=y4();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},S4=function(){function t(n){var i=this.element=G_(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}Xr(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),w4=function(){function t(n){var i=this.element=G_(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),M4=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),h0=ap,E4={isServer:!ap,useCSSOMInjection:!f4},_u=function(){function t(n,i,r){n===void 0&&(n=ir),i===void 0&&(i={}),this.options=Wn({},E4,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&ap&&h0&&(h0=!1,function(s){for(var o=document.querySelectorAll(g4),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(lo)!=="active"&&(x4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Sl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(Wn({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new M4(o):s?new S4(o):new w4(o),new h4(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(Sl(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(Sl(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Sl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=p4(o);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(o);if(l&&u&&l.size){var c=lo+".g"+o+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},t}(),b4=/(a)(d)/gi,p0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ud(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=p0(e%52)+n;return(p0(e%52)+n).replace(b4,"$1-$2")}var Ns=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},W_=function(t){return Ns(5381,t)};function $_(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ao(n)&&!op(n))return!1}return!0}var C4=W_("5.3.5"),T4=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&$_(e),this.componentId=n,this.baseHash=Ns(C4,n),this.baseStyle=i,_u.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=qr(this.rules,e,n,i).join(""),a=Ud(Ns(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ns(this.baseHash,i.hash),f="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")f+=m;else if(m){var _=qr(m,e,n,i),h=Array.isArray(_)?_.join(""):_;c=Ns(c,h+d),f+=h}}if(f){var p=Ud(c>>>0);if(!n.hasNameForId(r,p)){var g=i(f,"."+p,void 0,r);n.insertRules(r,p,g)}s.push(p)}}return s.join(" ")},t}(),A4=/^\s*\/\/.*$/gm,P4=[":","[",".","#"];function L4(t){var e,n,i,r,s=t===void 0?ir:t,o=s.options,a=o===void 0?ir:o,l=s.plugins,u=l===void 0?gu:l,c=new a4(a),f=[],d=function(h){function p(g){if(g)try{h(g+"}")}catch{}}return function(g,v,x,S,w,C,L,y,T,D){switch(g){case 1:if(T===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(y===0)return v+"/*|*/";break;case 3:switch(y){case 102:case 112:return h(x[0]+v),"";default:return v+(D===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(p)}}}(function(h){f.push(h)}),m=function(h,p,g){return p===0&&P4.indexOf(g[n.length])!==-1||g.match(r)?h:"."+e};function _(h,p,g,v){v===void 0&&(v="&");var x=h.replace(A4,""),S=p&&g?g+" "+p+" { "+x+" }":x;return e=v,n=p,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),c(g||!p?"":p,S)}return c.use([].concat(u,[function(h,p,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(i,m))},d,function(h){if(h===-2){var p=f;return f=[],p}}])),_.hash=u.length?u.reduce(function(h,p){return p.name||Xr(15),Ns(h,p.name)},5381).toString():"",_}var j_=$n.createContext();j_.Consumer;var X_=$n.createContext(),R4=(X_.Consumer,new _u),Vd=L4();function q_(){return ge.exports.useContext(j_)||R4}function Y_(){return ge.exports.useContext(X_)||Vd}var D4=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Vd);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return Xr(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Vd),this.name+e.hash},t}(),I4=/([A-Z])/,k4=/([A-Z])/g,z4=/^ms-/,N4=function(t){return"-"+t.toLowerCase()};function m0(t){return I4.test(t)?t.replace(k4,N4).replace(z4,"-ms-"):t}var g0=function(t){return t==null||t===!1||t===""};function qr(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=qr(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(g0(t))return"";if(op(t))return"."+t.styledComponentId;if(ao(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return qr(l,e,n,i)}var u;return t instanceof D4?n?(t.inject(n,i),t.getName(i)):t:Bd(t)?function c(f,d){var m,_,h=[];for(var p in f)f.hasOwnProperty(p)&&!g0(f[p])&&(Array.isArray(f[p])&&f[p].isCss||ao(f[p])?h.push(m0(p)+":",f[p],";"):Bd(f[p])?h.push.apply(h,c(f[p],p)):h.push(m0(p)+": "+(m=p,(_=f[p])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||m in l4?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(h,["}"]):h}(t):t.toString()}var v0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Z_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return ao(t)||Bd(t)?v0(qr(f0(gu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:v0(qr(f0(t,n)))}var Q_=function(t,e,n){return n===void 0&&(n=ir),t.theme!==n.theme&&t.theme||e||n.theme},O4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,F4=/(^-|-$)/g;function Lf(t){return t.replace(O4,"-").replace(F4,"")}var J_=function(t){return Ud(W_(t)>>>0)};function wl(t){return typeof t=="string"&&!0}var Hd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},B4=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function U4(t,e,n){var i=t[n];Hd(e)&&Hd(i)?K_(i,e):t[n]=e}function K_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(Hd(o))for(var a in o)B4(a)&&U4(t,o[a],a)}return t}var ya=$n.createContext();ya.Consumer;function V4(t){var e=ge.exports.useContext(ya),n=ge.exports.useMemo(function(){return function(i,r){if(!i)return Xr(14);if(ao(i)){var s=i(r);return s}return Array.isArray(i)||typeof i!="object"?Xr(8):r?Wn({},r,{},i):i}(t.theme,e)},[t.theme,e]);return t.children?$n.createElement(ya.Provider,{value:n},t.children):null}var Rf={};function ex(t,e,n){var i=op(t),r=!wl(t),s=e.attrs,o=s===void 0?gu:s,a=e.componentId,l=a===void 0?function(v,x){var S=typeof v!="string"?"sc":Lf(v);Rf[S]=(Rf[S]||0)+1;var w=S+"-"+J_("5.3.5"+S+Rf[S]);return x?x+"-"+w:w}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(v){return wl(v)?"styled."+v:"Styled("+d0(v)+")"}(t):u,f=e.displayName&&e.componentId?Lf(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;i&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(v,x,S){return t.shouldForwardProp(v,x,S)&&e.shouldForwardProp(v,x,S)}:t.shouldForwardProp);var _,h=new T4(n,f,i?t.componentStyle:void 0),p=h.isStatic&&o.length===0,g=function(v,x){return function(S,w,C,L){var y=S.attrs,T=S.componentStyle,D=S.defaultProps,O=S.foldedComponentIds,re=S.shouldForwardProp,ee=S.styledComponentId,U=S.target,X=function(ae,A,Se){ae===void 0&&(ae=ir);var Z=Wn({},A,{theme:ae}),ye={};return Se.forEach(function(oe){var Ee,ce,ve,We=oe;for(Ee in ao(We)&&(We=We(Z)),We)Z[Ee]=ye[Ee]=Ee==="className"?(ce=ye[Ee],ve=We[Ee],ce&&ve?ce+" "+ve:ce||ve):We[Ee]}),[Z,ye]}(Q_(w,ge.exports.useContext(ya),D)||ir,w,y),$=X[0],J=X[1],k=function(ae,A,Se,Z){var ye=q_(),oe=Y_(),Ee=A?ae.generateAndInjectStyles(ir,ye,oe):ae.generateAndInjectStyles(Se,ye,oe);return Ee}(T,L,$),z=C,V=J.$as||w.$as||J.as||w.as||U,K=wl(V),F=J!==w?Wn({},w,{},J):w,H={};for(var q in F)q[0]!=="$"&&q!=="as"&&(q==="forwardedAs"?H.as=F[q]:(re?re(q,c0,V):!K||c0(q))&&(H[q]=F[q]));return w.style&&J.style!==w.style&&(H.style=Wn({},w.style,{},J.style)),H.className=Array.prototype.concat(O,ee,k!==ee?k:null,w.className,J.className).filter(Boolean).join(" "),H.ref=z,ge.exports.createElement(V,H)}(_,v,x,p)};return g.displayName=c,(_=$n.forwardRef(g)).attrs=d,_.componentStyle=h,_.displayName=c,_.shouldForwardProp=m,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):gu,_.styledComponentId=f,_.target=i?t.target:t,_.withComponent=function(v){var x=e.componentId,S=function(C,L){if(C==null)return{};var y,T,D={},O=Object.keys(C);for(T=0;T<O.length;T++)y=O[T],L.indexOf(y)>=0||(D[y]=C[y]);return D}(e,["componentId"]),w=x&&x+"-"+(wl(v)?v:Lf(d0(v)));return ex(v,Wn({},S,{attrs:d,componentId:w}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?K_({},t.defaultProps,v):v}}),_.toString=function(){return"."+_.styledComponentId},r&&jw(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var Gd=function(t){return function e(n,i,r){if(r===void 0&&(r=ir),!Zh.exports.isValidElementType(i))return Xr(1,String(i));var s=function(){return n(i,r,Z_.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,Wn({},r,{},o))},s.attrs=function(o){return e(n,i,Wn({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(ex,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Gd[t]=Gd(t)});var H4=function(){function t(n,i){this.rules=n,this.componentId=i,this.isStatic=$_(n),_u.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,i,r,s){var o=s(qr(this.rules,i,r,s).join(""),""),a=this.componentId+n;r.insertRules(a,a,o)},e.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.renderStyles=function(n,i,r,s){n>2&&_u.registerId(this.componentId+n),this.removeStyles(n,r),this.createStyles(n,i,r,s)},t}();function G4(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Z_.apply(void 0,[t].concat(n)),s="sc-global-"+J_(JSON.stringify(r)),o=new H4(r,s);function a(u){var c=q_(),f=Y_(),d=ge.exports.useContext(ya),m=ge.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(m,u,c,d,f),ge.exports.useLayoutEffect(function(){if(!c.server)return l(m,u,c,d,f),function(){return o.removeStyles(m,c)}},[m,u,c,d,f]),null}function l(u,c,f,d,m){if(o.isStatic)o.renderStyles(u,d4,f,m);else{var _=Wn({},c,{theme:Q_(c,d,a.defaultProps)});o.renderStyles(u,_,f,m)}}return $n.memo(a)}const ue=Gd,W4=ue.div`
  width: 240px;
  height: 100%;
  background-color: rgb(38,38,38);
  border-radius: 0 5px 5px 0;
`,$4=()=>R(tt,{children:R(W4,{})});function tx(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j4(t,e){if(t==null)return{};var n=Iw(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function X4(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var q4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Y4=X4(function(t){return q4.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function _0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Z4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_0(Object(n),!0).forEach(function(i){tx(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Q4(t){return Y4(t)}function J4(t){return Object.keys(t).reduce(function(e,n){return Q4(n)&&(e[n]=t[n]),e},{})}var K4=ge.exports.forwardRef(function(t,e){var n=t.children,i=t.iconAttrs;t.iconVerticalAlign;var r=t.iconViewBox,s=t.size,o=t.title,a=j4(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),l=Z4({viewBox:r,height:t.height!==void 0?t.height:s,width:t.width!==void 0?t.width:s,"aria-hidden":o==null?"true":void 0,focusable:"false",role:o!=null?"img":void 0},i),u=J4(a);return Re("svg",{...l,...u,ref:e,children:[o&&R("title",{children:o},"icon-title"),n]})}),dt=ue(K4).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],function(t){return t.iconVerticalAlign}),nx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("path",{fill:"none",d:"M0 0h24v24H0z"}),R("path",{d:"M3 19V5.7a1 1 0 01.658-.94l9.671-3.516a.5.5 0 01.671.47v4.953l6.316 2.105a1 1 0 01.684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z"})]})});nx.displayName="Building2";var ix=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5C3 19.55 4.45 21 6.25 21h4.91l.36-1.42.02-.08H6.25c-.2 0-.4-.04-.58-.1l5.8-5.69.09-.07c.29-.2.7-.19.96.07l2.08 2.04 1.06-1.06-2.09-2.05-.13-.11a2.25 2.25 0 0 0-3.01.11l-5.83 5.7c-.06-.18-.1-.38-.1-.6V6.26c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25zm-3.5 2.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zm4.6 3.92-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 0 0-3.23-3.24z"})})});ix.displayName="ImageEdit";var rx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 48 48",...t,ref:e,children:R("path",{d:"M32 24a10 10 0 1 0-8.55-4.8l-5.38 3.58a8 8 0 1 0 .44 9.87l7.68 3.84a6.01 6.01 0 1 0 1.12-2.23l-7.68-3.84a8 8 0 0 0-.25-5.5l5.64-3.76A9.97 9.97 0 0 0 32 24zm0-2.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-20 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zM35.5 38a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"})})});rx.displayName="Molecule";var sx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M16.5 8a4.25 4.25 0 0 0 0 8.5h.5v4.75a.75.75 0 0 0 1.5 0V9.5h1v11.75a.75.75 0 0 0 1.5 0V9.5h.25a.75.75 0 0 0 0-1.5H16.5zm0 1.5h.5V15h-.5a2.75 2.75 0 1 1 0-5.5zM2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75zM2.75 10a.75.75 0 0 0 0 1.5h8.55c.08-.53.23-1.03.46-1.5H2.75zM12.03 15H2.75a.75.75 0 0 0 0 1.5h10.67a5.28 5.28 0 0 1-1.4-1.5z"})})});sx.displayName="TextParagraph";const eA=ue.div`
    width: 48px;
    height: 100%;
    background-color: rgb(18,18,18);
`,tA=ue.div`
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
`,nA=ue(nx)`
    color: white;

`,iA=ue(ix)`
    color: white;

`,rA=ue(rx)`
    color: white;

`,sA=ue(sx)`
    color: white;

`,oA=[{id:"sd1",label:"\u7ED3\u6784",icon:R(nA,{size:"20"})},{id:"sd2",label:"\u6750\u8D28",icon:R(iA,{size:"20"})},{id:"sd3",label:"\u6A21\u578B",icon:R(rA,{size:"20"})},{id:"sd4",label:"\u56FE\u7EB8",icon:R(sA,{size:"20"})}],aA=()=>R(tt,{children:R(eA,{children:oA.map(t=>Re(tA,{children:[t.icon,t.label]},t.id))})}),lA=ue.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,uA=()=>R(tt,{children:Re(lA,{children:[R(aA,{}),R($4,{})]})}),cA=ue.div`
    position: relative;
    top: 0;
    left: 0;
    width: 240px;
    height: 250px;
    background-color: rgb(54,54,54);
`,fA=()=>R(tt,{children:R(cA,{})}),dA=ue.div`
    width: 100%;
    height: 40px;
    background-color: rgb(54,54,54);
    border-radius: 5px;
`,hA=ue.span`
    margin-left: 10px;
    width: 100%;
    color:white;
    font-size: 15px;
    line-height: 40px;
    background-color: rgb(54,54,54);
`,pA=t=>R(tt,{children:R(dA,{children:R(hA,{children:t.label})})}),mA=ue.div`
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
`,gA=ue.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`,vA=()=>R(tt,{children:R(mA,{children:R(gA,{children:R(pA,{label:"\u5C5E\u6027"})})})}),_A=ue.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,xA=()=>R(tt,{children:Re(_A,{children:[R(fA,{}),R(vA,{})]})});var ox=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"})})});ox.displayName="Sketch";const yA=ue.div`
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
    
`,SA=ue(ox)`
  color: rgb(242, 112, 19);
  margin: 0 5px;
`,lp=t=>R(tt,{children:Re(yA,{...t,children:[R(SA,{title:"Sketch Icon",size:"32"}),R("span",{children:"Bim3dEditor"})]})}),wA=ue.div`
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
`,MA=ue.li`
    width: 100%;
    height: 40px;
    margin: 0;
    left: 0;
    top: 0;
    &:hover {
        color: #fff;
        background-color: rgb(242, 112, 19);
    }
`,EA=ue.span`
    padding-left: 10px;
`,ax=t=>R(tt,{children:R(wA,{pleft:t.pleft,children:R("ul",{children:t.menus.map(e=>R(MA,{children:R(EA,{children:e.label})},e.key))})})});var lx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("path",{d:"M11 16h2V7h3l-4-5-4 5h3z"}),R("path",{d:"M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"})]})});lx.displayName="Export";var ux=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("path",{d:"m12 18 4-5h-3V2h-2v11H8z"}),R("path",{d:"M19 9h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2z"})]})});ux.displayName="Import";var cx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M18.25 4c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.41.34-.75.75-.75zM4 18.25c0-.41.34-.75.75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75zM8.28 7.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 1 0 1.06-1.06l-6.5-6.5z"})})});cx.displayName="New";var fx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("rect",{width:24,height:24,fill:"none"}),R("path",{d:"M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})]})});fx.displayName="Clear";var dx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("path",{fill:"none",d:"M0 0h24v24H0z"}),R("path",{d:"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 010 1.414l-14.85 14.85a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 010-1.414l14.85-14.85a1 1 0 011.414 0z"})]})});dx.displayName="Ruler";const bA=ue.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`,CA=ue.div`
    
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
   
`,TA=ue(cx)`
    color: #fff;
    margin: 2px 0px;
`,AA=ue(ux)`
    color: #fff;
    margin: 2px 0px;
`,PA=ue(lx)`
    color: #fff;
    margin: 2px 0px;
`,LA=ue(dx)`
    color: #fff;
    margin: 2px 0px;
`,RA=ue(fx)`
    color: #fff;
    margin: 2px 0px;
`,DA=[{id:"0",label:"\u573A\u666F",icon:R(TA,{size:"16"}),menus:[{key:"doc1",label:"\u65B0\u5EFA\u573A\u666F"},{key:"doc2",label:"\u6253\u5F00\u573A\u666F"},{key:"doc3",label:"\u5386\u53F2\u8BB0\u5F55"},{key:"doc4",label:"\u7F16\u8F91\u573A\u666F"}]},{id:"1",label:"\u5BFC\u5165",icon:R(AA,{size:"16"}),menus:[{key:"export1",label:"\u5BFC\u5165\u6A21\u578B"},{key:"export2",label:"\u5BFC\u5165CAD"}]},{id:"2",label:"\u5BFC\u51FA",icon:R(PA,{size:"16"})},{id:"3",label:"\u6D4B\u91CF",icon:R(LA,{size:"16"})},{id:"4",label:"\u6E05\u7A7A",icon:R(RA,{size:"16"}),menus:[{key:"clear1",label:"\u5E95\u56FE"},{key:"clear2",label:"\u6A21\u578B"},{key:"clear3",label:"\u5168\u90E8"}]}],IA=()=>{const t=e=>{let n=e.target.innerText;console.log(n)};return R(tt,{children:R(bA,{children:DA.map(e=>{var n;return Re(CA,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:i=>t(i),children:[e.icon,e.label,e.menus&&R(ax,{menus:e.menus,pleft:"74px"})]},e.id)})})})};var hx=ge.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("circle",{cx:12,cy:12,r:3}),R("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})});hx.displayName="Settings";var px=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[R("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:40,d:"M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"}),R("circle",{cx:248,cy:399.99,r:32})]})});px.displayName="Help";var mx=ge.exports.forwardRef(function(t,e){var n={fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),R("circle",{cx:9,cy:7,r:4}),R("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})});mx.displayName="Users";const kA=ue.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin-right: 40px;
`,zA=ue.div`
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
`,NA=ue(hx)`
    color: #fff;
    margin: 2px 0px;
`,OA=ue(px)`
    color: #fff;
    margin: 2px 0px;
`,FA=ue(mx)`
    color: #fff;
    margin: 2px 0px;
`,BA=[{id:"0",label:"\u8BBE\u7F6E",icon:R(NA,{size:"16"})},{id:"1",label:"\u5E2E\u52A9",icon:R(OA,{size:"16"})},{id:"2",label:"\u7528\u6237\u4FE1\u606F",icon:R(FA,{size:"16"}),menus:[{key:"user1",label:"\u4E2A\u4EBA\u4E3B\u9875"},{key:"user2",label:"\u7F51\u7AD9\u4E3B\u9875"},{key:"user3",label:"\u6350\u8D60\u4FE1\u606F"},{key:"user4",label:"\u9000\u51FA\u767B\u5F55"}]}],UA=()=>{const t=e=>{let n=e.target.innerHTML;console.log(n)};return R(tt,{children:R(kA,{children:BA.map(e=>{var n;return Re(zA,{menuh:((n=e.menus)==null?void 0:n.length)*40+"px",onClick:i=>t(i),children:[e.icon,e.label,e.menus&&R(ax,{menus:e.menus,pleft:"-50px"})]},e.id)})})})},VA=ue.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  background-color: rgb(18,18,18);
`,HA=()=>R(tt,{children:Re(VA,{children:[R(lp,{primary:!1}),R(IA,{}),R(UA,{})]})}),GA=ue.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    cursor: pointer;
`,WA=ue.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 288px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,$A=ue.div`
    position: absolute;
    top: 48px;
    right: 0px;
    width: 240px;
    height: calc(100vh - 48px);
    cursor: pointer;
`,jA=()=>Re(tt,{children:[R(GA,{children:R(HA,{})}),R(WA,{children:R(uA,{})}),R($A,{children:R(xA,{})})]});ue.div`
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
`;class XA extends $n.Component{constructor(){super(...arguments);E(this,"container",$n.createRef());E(this,"editorview",$n.createRef())}componentDidMount(){console.log("editor mount"),this.container&&(bt.container=this.container.current,bt.SC.scene.mountedMainScene()),this.editorview&&(bt.uicontainer=this.editorview.current)}componentWillUnmount(){console.log("editor unmount")}render(){return Re(tt,{children:[R("div",{id:"bim",ref:this.container}),R(jA,{})]})}}const qA=()=>R("div",{children:"Example"}),YA=ue.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 50vh;
    z-index: 1;

`,ZA=()=>R(tt,{children:R(YA,{})});var js=(t=>(t.Light="light",t.Dark="dark",t))(js||{});function Hn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ar(t){return!!t&&!!t[st]}function Ti(t){return!!t&&(function(e){if(!e||typeof e!="object")return!1;var n=Object.getPrototypeOf(e);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===s5}(t)||Array.isArray(t)||!!t[b0]||!!t.constructor[b0]||up(t)||cp(t))}function Yr(t,e,n){n===void 0&&(n=!1),vo(t)===0?(n?Object.keys:qs)(t).forEach(function(i){n&&typeof i=="symbol"||e(i,t[i],t)}):t.forEach(function(i,r){return e(r,i,t)})}function vo(t){var e=t[st];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:up(t)?2:cp(t)?3:0}function Xs(t,e){return vo(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function QA(t,e){return vo(t)===2?t.get(e):t[e]}function gx(t,e,n){var i=vo(t);i===2?t.set(e,n):i===3?(t.delete(e),t.add(n)):t[e]=n}function vx(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function up(t){return i5&&t instanceof Map}function cp(t){return r5&&t instanceof Set}function xr(t){return t.o||t.t}function fp(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=xx(t);delete e[st];for(var n=qs(e),i=0;i<n.length;i++){var r=n[i],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[r]})}return Object.create(Object.getPrototypeOf(t),e)}function dp(t,e){return e===void 0&&(e=!1),hp(t)||ar(t)||!Ti(t)||(vo(t)>1&&(t.set=t.add=t.clear=t.delete=JA),Object.freeze(t),e&&Yr(t,function(n,i){return dp(i,!0)},!0)),t}function JA(){Hn(2)}function hp(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ai(t){var e=Xd[t];return e||Hn(18,t),e}function KA(t,e){Xd[t]||(Xd[t]=e)}function Wd(){return Sa}function Df(t,e){e&&(ai("Patches"),t.u=[],t.s=[],t.v=e)}function xu(t){$d(t),t.p.forEach(e5),t.p=null}function $d(t){t===Sa&&(Sa=t.l)}function x0(t){return Sa={p:[],l:Sa,h:t,m:!0,_:0}}function e5(t){var e=t[st];e.i===0||e.i===1?e.j():e.O=!0}function If(t,e){e._=e.p.length;var n=e.p[0],i=t!==void 0&&t!==n;return e.h.g||ai("ES5").S(e,t,i),i?(n[st].P&&(xu(e),Hn(4)),Ti(t)&&(t=yu(e,t),e.l||Su(e,t)),e.u&&ai("Patches").M(n[st].t,t,e.u,e.s)):t=yu(e,n,[]),xu(e),e.u&&e.v(e.u,e.s),t!==_x?t:void 0}function yu(t,e,n){if(hp(e))return e;var i=e[st];if(!i)return Yr(e,function(s,o){return y0(t,i,e,s,o,n)},!0),e;if(i.A!==t)return e;if(!i.P)return Su(t,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var r=i.i===4||i.i===5?i.o=fp(i.k):i.o;Yr(i.i===3?new Set(r):r,function(s,o){return y0(t,i,r,s,o,n)}),Su(t,r,!1),n&&t.u&&ai("Patches").R(i,n,t.u,t.s)}return i.o}function y0(t,e,n,i,r,s){if(ar(r)){var o=yu(t,r,s&&e&&e.i!==3&&!Xs(e.D,i)?s.concat(i):void 0);if(gx(n,i,o),!ar(o))return;t.m=!1}if(Ti(r)&&!hp(r)){if(!t.h.F&&t._<1)return;yu(t,r),e&&e.A.l||Su(t,r)}}function Su(t,e,n){n===void 0&&(n=!1),t.h.F&&t.m&&dp(e,n)}function kf(t,e){var n=t[st];return(n?xr(n):t)[e]}function S0(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var i=Object.getOwnPropertyDescriptor(n,e);if(i)return i;n=Object.getPrototypeOf(n)}}function Gi(t){t.P||(t.P=!0,t.l&&Gi(t.l))}function zf(t){t.o||(t.o=fp(t.t))}function jd(t,e,n){var i=up(e)?ai("MapSet").N(e,n):cp(e)?ai("MapSet").T(e,n):t.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:Wd(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},l=a,u=wa;o&&(l=[a],u=Vo);var c=Proxy.revocable(l,u),f=c.revoke,d=c.proxy;return a.k=d,a.j=f,d}(e,n):ai("ES5").J(e,n);return(n?n.A:Wd()).p.push(i),i}function t5(t){return ar(t)||Hn(22,t),function e(n){if(!Ti(n))return n;var i,r=n[st],s=vo(n);if(r){if(!r.P&&(r.i<4||!ai("ES5").K(r)))return r.t;r.I=!0,i=w0(n,s),r.I=!1}else i=w0(n,s);return Yr(i,function(o,a){r&&QA(r.t,o)===a||gx(i,o,e(a))}),s===3?new Set(i):i}(t)}function w0(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return fp(t)}function n5(){function t(s,o){var a=r[s];return a?a.enumerable=o:r[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[st];return wa.get(l,s)},set:function(l){var u=this[st];wa.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][st];if(!a.P)switch(a.i){case 5:i(a)&&Gi(a);break;case 4:n(a)&&Gi(a)}}}function n(s){for(var o=s.t,a=s.k,l=qs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==st){var f=o[c];if(f===void 0&&!Xs(o,c))return!0;var d=a[c],m=d&&d[st];if(m?m.t!==f:!vx(d,f))return!0}}var _=!!o[st];return l.length!==qs(o).length+(_?0:1)}function i(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var r={};KA("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,f){if(c){for(var d=Array(f.length),m=0;m<f.length;m++)Object.defineProperty(d,""+m,t(m,!0));return d}var _=xx(f);delete _[st];for(var h=qs(_),p=0;p<h.length;p++){var g=h[p];_[g]=t(g,c||!!_[g].enumerable)}return Object.create(Object.getPrototypeOf(f),_)}(a,s),u={i:a?5:4,A:o?o.A:Wd(),P:!1,I:!1,D:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,st,{value:u,writable:!0}),l},S:function(s,o,a){a?ar(o)&&o[st].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[st];if(c){var f=c.t,d=c.k,m=c.D,_=c.i;if(_===4)Yr(d,function(x){x!==st&&(f[x]!==void 0||Xs(f,x)?m[x]||l(d[x]):(m[x]=!0,Gi(c)))}),Yr(f,function(x){d[x]!==void 0||Xs(d,x)||(m[x]=!1,Gi(c))});else if(_===5){if(i(c)&&(Gi(c),m.length=!0),d.length<f.length)for(var h=d.length;h<f.length;h++)m[h]=!1;else for(var p=f.length;p<d.length;p++)m[p]=!0;for(var g=Math.min(d.length,f.length),v=0;v<g;v++)d.hasOwnProperty(v)||(m[v]=!0),m[v]===void 0&&l(d[v])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):i(s)}})}var M0,Sa,pp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",i5=typeof Map<"u",r5=typeof Set<"u",E0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",_x=pp?Symbol.for("immer-nothing"):((M0={})["immer-nothing"]=!0,M0),b0=pp?Symbol.for("immer-draftable"):"__$immer_draftable",st=pp?Symbol.for("immer-state"):"__$immer_state",s5=""+Object.prototype.constructor,qs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,xx=Object.getOwnPropertyDescriptors||function(t){var e={};return qs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Xd={},wa={get:function(t,e){if(e===st)return t;var n=xr(t);if(!Xs(n,e))return function(r,s,o){var a,l=S0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(r.k):void 0}(t,n,e);var i=n[e];return t.I||!Ti(i)?i:i===kf(t.t,e)?(zf(t),t.o[e]=jd(t.A.h,i,t)):i},has:function(t,e){return e in xr(t)},ownKeys:function(t){return Reflect.ownKeys(xr(t))},set:function(t,e,n){var i=S0(xr(t),e);if(i!=null&&i.set)return i.set.call(t.k,n),!0;if(!t.P){var r=kf(xr(t),e),s=r==null?void 0:r[st];if(s&&s.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(vx(n,r)&&(n!==void 0||Xs(t.t,e)))return!0;zf(t),Gi(t)}return t.o[e]===n&&typeof n!="number"&&(n!==void 0||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return kf(t.t,e)!==void 0||e in t.t?(t.D[e]=!1,zf(t),Gi(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=xr(t),i=Reflect.getOwnPropertyDescriptor(n,e);return i&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:i.enumerable,value:n[e]}},defineProperty:function(){Hn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Hn(12)}},Vo={};Yr(wa,function(t,e){Vo[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Vo.deleteProperty=function(t,e){return Vo.set.call(this,t,e,void 0)},Vo.set=function(t,e,n){return wa.set.call(this,t[0],e,n,t[0])};var o5=function(){function t(n){var i=this;this.g=E0,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var l=i;return function(h){var p=this;h===void 0&&(h=a);for(var g=arguments.length,v=Array(g>1?g-1:0),x=1;x<g;x++)v[x-1]=arguments[x];return l.produce(h,function(S){var w;return(w=s).call.apply(w,[p,S].concat(v))})}}var u;if(typeof s!="function"&&Hn(6),o!==void 0&&typeof o!="function"&&Hn(7),Ti(r)){var c=x0(i),f=jd(i,r,void 0),d=!0;try{u=s(f),d=!1}finally{d?xu(c):$d(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(h){return Df(c,o),If(h,c)},function(h){throw xu(c),h}):(Df(c,o),If(u,c))}if(!r||typeof r!="object"){if((u=s(r))===void 0&&(u=r),u===_x&&(u=void 0),i.F&&dp(u,!0),o){var m=[],_=[];ai("Patches").M(r,u,m,_),o(m,_)}return u}Hn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return i.produceWithPatches(u,function(m){return r.apply(void 0,[m].concat(f))})};var o,a,l=i.produce(r,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Ti(n)||Hn(8),ar(n)&&(n=t5(n));var i=x0(this),r=jd(this,n,void 0);return r[st].C=!0,$d(i),r},e.finishDraft=function(n,i){var r=n&&n[st],s=r.A;return Df(s,i),If(void 0,s)},e.setAutoFreeze=function(n){this.F=n},e.setUseProxies=function(n){n&&!E0&&Hn(20),this.g=n},e.applyPatches=function(n,i){var r;for(r=i.length-1;r>=0;r--){var s=i[r];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}r>-1&&(i=i.slice(r+1));var o=ai("Patches").$;return ar(n)?o(n,i):this.produce(n,function(a){return o(a,i)})},t}(),gn=new o5,yx=gn.produce;gn.produceWithPatches.bind(gn);gn.setAutoFreeze.bind(gn);gn.setUseProxies.bind(gn);gn.applyPatches.bind(gn);gn.createDraft.bind(gn);gn.finishDraft.bind(gn);function C0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function T0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C0(Object(n),!0).forEach(function(i){tx(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Vt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var A0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Nf=function(){return Math.random().toString(36).substring(7).split("").join(".")},wu={INIT:"@@redux/INIT"+Nf(),REPLACE:"@@redux/REPLACE"+Nf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Nf()}};function a5(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Sx(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Vt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Vt(1));return n(Sx)(t,e)}if(typeof t!="function")throw new Error(Vt(2));var r=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(Vt(3));return s}function f(h){if(typeof h!="function")throw new Error(Vt(4));if(l)throw new Error(Vt(5));var p=!0;return u(),a.push(h),function(){if(!!p){if(l)throw new Error(Vt(6));p=!1,u();var v=a.indexOf(h);a.splice(v,1),o=null}}}function d(h){if(!a5(h))throw new Error(Vt(7));if(typeof h.type>"u")throw new Error(Vt(8));if(l)throw new Error(Vt(9));try{l=!0,s=r(s,h)}finally{l=!1}for(var p=o=a,g=0;g<p.length;g++){var v=p[g];v()}return h}function m(h){if(typeof h!="function")throw new Error(Vt(10));r=h,d({type:wu.REPLACE})}function _(){var h,p=f;return h={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(Vt(11));function x(){v.next&&v.next(c())}x();var S=p(x);return{unsubscribe:S}}},h[A0]=function(){return this},h}return d({type:wu.INIT}),i={dispatch:d,subscribe:f,getState:c,replaceReducer:m},i[A0]=_,i}function l5(t){Object.keys(t).forEach(function(e){var n=t[e],i=n(void 0,{type:wu.INIT});if(typeof i>"u")throw new Error(Vt(12));if(typeof n(void 0,{type:wu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Vt(13))})}function u5(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];typeof t[r]=="function"&&(n[r]=t[r])}var s=Object.keys(n),o;try{l5(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,f={},d=0;d<s.length;d++){var m=s[d],_=n[m],h=l[m],p=_(h,u);if(typeof p>"u")throw u&&u.type,new Error(Vt(14));f[m]=p,c=c||p!==h}return c=c||s.length!==Object.keys(l).length,c?f:l}}function Mu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function c5(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),s=function(){throw new Error(Vt(15))},o={getState:r.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Mu.apply(void 0,a)(r.dispatch),T0(T0({},r),{},{dispatch:s})}}}function wx(t){var e=function(i){var r=i.dispatch,s=i.getState;return function(o){return function(a){return typeof a=="function"?a(r,s,t):o(a)}}};return e}var Mx=wx();Mx.withExtraArgument=wx;const P0=Mx;var f5=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function i(){this.constructor=e}e.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();globalThis&&globalThis.__generator;var Eu=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t},d5=Object.defineProperty,L0=Object.getOwnPropertySymbols,h5=Object.prototype.hasOwnProperty,p5=Object.prototype.propertyIsEnumerable,R0=function(t,e,n){return e in t?d5(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},Ma=function(t,e){for(var n in e||(e={}))h5.call(e,n)&&R0(t,n,e[n]);if(L0)for(var i=0,r=L0(e);i<r.length;i++){var n=r[i];p5.call(e,n)&&R0(t,n,e[n])}return t},m5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Mu:Mu.apply(null,arguments)};function g5(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var v5=function(t){f5(e,t);function e(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r=t.apply(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Eu([void 0],n[0].concat(this)))):new(e.bind.apply(e,Eu([void 0],n.concat(this))))},e}(Array);function qd(t){return Ti(t)?yx(t,function(){}):t}function _5(t){return typeof t=="boolean"}function x5(){return function(e){return y5(e)}}function y5(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var i=new v5;return n&&(_5(n)?i.push(P0):i.push(P0.withExtraArgument(n.extraArgument))),i}var S5=!0;function w5(t){var e=x5(),n=t||{},i=n.reducer,r=i===void 0?void 0:i,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,m;if(typeof r=="function")m=r;else if(g5(r))m=u5(r);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var h=c5.apply(void 0,_),p=Mu;l&&(p=m5(Ma({trace:!S5},typeof l=="object"&&l)));var g=[h];Array.isArray(d)?g=Eu([h],d):typeof d=="function"&&(g=d(g));var v=p.apply(void 0,g);return Sx(m,c,v)}function Ea(t,e){function n(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(e){var s=e.apply(void 0,i);if(!s)throw new Error("prepareAction did not return an object");return Ma(Ma({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:i[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(i){return i.type===t},n}function Ex(t){var e={},n=[],i,r={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,r},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),r},addDefaultCase:function(s){return i=s,r}};return t(r),[e,n,i]}function M5(t){return typeof t=="function"}function E5(t,e,n,i){n===void 0&&(n=[]);var r=typeof e=="function"?Ex(e):[e,n,i],s=r[0],o=r[1],a=r[2],l;if(M5(t))l=function(){return qd(t())};else{var u=qd(t);l=function(){return u}}function c(f,d){f===void 0&&(f=l());var m=Eu([s[d.type]],o.filter(function(_){var h=_.matcher;return h(d)}).map(function(_){var h=_.reducer;return h}));return m.filter(function(_){return!!_}).length===0&&(m=[a]),m.reduce(function(_,h){if(h)if(ar(_)){var p=_,g=h(p,d);return typeof g>"u"?_:g}else{if(Ti(_))return yx(_,function(v){return h(v,d)});var g=h(_,d);if(typeof g>"u"){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return _},f)}return c.getInitialState=l,c}function b5(t,e){return t+"/"+e}function C5(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:qd(t.initialState),i=t.reducers||{},r=Object.keys(i),s={},o={},a={};r.forEach(function(c){var f=i[c],d=b5(e,c),m,_;"reducer"in f?(m=f.reducer,_=f.prepare):m=f,s[c]=m,o[d]=m,a[c]=_?Ea(d,_):Ea(d)});function l(){var c=typeof t.extraReducers=="function"?Ex(t.extraReducers):[t.extraReducers],f=c[0],d=f===void 0?{}:f,m=c[1],_=m===void 0?[]:m,h=c[2],p=h===void 0?void 0:h,g=Ma(Ma({},d),o);return E5(n,g,_,p)}var u;return{name:e,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var mp="listenerMiddleware";Ea(mp+"/add");Ea(mp+"/removeAll");Ea(mp+"/remove");n5();const Of=localStorage.getItem("theme"),T5={theme:Of!=null?Of:js.Light},bx=C5({name:"user",initialState:T5,reducers:{toggleTheme:t=>{t.theme=t.theme===js.Dark?js.Light:js.Dark,localStorage.setItem("theme",t.theme)}}}),{toggleTheme:A5}=bx.actions,P5=bx.reducer,L5=ue.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`,R5=ue.button`
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
`,D5=ue.button`
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
`,D0=[{id:"6",lable:"\u767B\u5F55"},{id:"5",lable:"\u7F16\u8F91\u5668"},{id:"4",lable:"\u793A\u4F8B"},{id:"3",lable:"\u6587\u6863"},{id:"2",lable:"\u6559\u7A0B"},{id:"1",lable:"theme"}],I5=()=>{let t=tp();const e=()=>{t("/editor")},n=l2();function i(){n(A5())}const r=o=>{switch(o.target.innerHTML){case"\u6559\u7A0B":t("/course");break;case"\u6587\u6863":t("/document");break;case"\u793A\u4F8B":t("/example");break;case"\u7F16\u8F91\u5668":e();break;case"theme":i();break}},s=()=>{t("/login")};return R(tt,{children:R(L5,{children:D0.map(o=>parseInt(o.id)===D0.length?R(D5,{onClick:s,children:"\u767B \u5F55"},o.id):R(R5,{onClick:a=>r(a),children:o.lable},o.id))})})},k5=ue.div`
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
`,z5=ue.div`
    display: flex;
    /* background: yellow; */
    height: 32px;
    width: 80%;
    flex-direction: row;
`,N5=()=>R(tt,{children:R(k5,{children:Re(z5,{children:[R(lp,{primary:!1}),R(I5,{})]})})}),O5=ue.div`

    position: relative;
    min-height: 200vh;
    z-index: 1;

`,F5=()=>R(tt,{children:R(O5,{})});var Cx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[R("rect",{width:24,height:24,fill:"none"}),R("path",{d:"M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zM3 20v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zM21 20c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zM19 14.87V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"})]})});Cx.displayName="ViewInAr";const B5=ue.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0 20px 0;
`,U5=ue.button`
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
`,V5=ue.button`
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
`,H5=ue(Cx)`
    color: white;
    margin-right: 10px;
    padding-bottom: 2px;
`,G5=()=>{let t=tp();function e(){t("/editor")}return R(tt,{children:Re(B5,{children:[R("a",{href:"https://gitee.com/songmy1093697597/bim3d-editor",target:"_blank",children:R(U5,{children:"\u5BFC\u51FA\u9879\u76EE"})}),Re(V5,{onClick:e,children:[R(H5,{size:"16"}),"\u9884\u89C8\u7F16\u8F91"]})]})})};var Tx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})});Tx.displayName="Github";var Ax=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:R("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})});Ax.displayName="ReactLogo";var Px=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12 1.217 4.926-4.877-1.4zm6.28 1.538 4.878 1.404-3.662 3.53zm-.52.13 1.208 4.9-4.853-1.392zm6.3 1.534 4.947 1.424-3.715 3.574zm-.524.12 1.215 4.926-4.876-1.398zm-15.432.696 4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137 1.236 5.017-4.963-1.432zm6.274 1.535 4.965 1.425-3.73 3.586zm-.52.127 1.235 5.012-4.958-1.43zm-9.63 2.438 4.873 1.406-3.656 3.523zm5.854 1.687 4.863 1.403-3.648 3.51zm-.54.04 1.214 4.927-4.875-1.4zm-3.896 4.02 5.037 1.442-3.782 3.638z"})})});Px.displayName="Threedotjs";var Lx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"})})});Lx.displayName="Typescript";var Rx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"})})});Rx.displayName="Gitee";const W5=ue.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,$5=ue(Tx)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,j5=ue(Ax)`
  color: #38d2f8;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,X5=ue(Px)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,q5=ue(Lx)`
  color: #067ceb;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,Y5=ue(Rx)`
  color: #f74141;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,Z5=()=>R(tt,{children:Re(W5,{children:[R(j5,{title:"React icon",size:"36"}),R(X5,{title:"Three.js icon",size:"36"}),R(q5,{title:"Typescript icon",size:"36"}),R(Y5,{title:"Javascript icon",size:"36"}),R($5,{title:"Github icon",size:"36"})]})}),I0=ue.span`
  color: rgb(242, 112, 19);
`,Q5=()=>Re(tt,{children:[Re("h1",{children:[Re("span",{children:["\u6B22\u8FCE\u6765\u5230",R(I0,{children:" Bim3dEditor "}),R("br",{}),"\u8FD9\u662F\u4E3A\u60A8\u7CBE\u5FC3\u6253\u9020\u7684\u53EF\u9884"]}),R("br",{}),R("span",{children:"\u89C8\u548C\u7F16\u8F91\u7684"}),Re("span",{children:[R(I0,{children:" WebGL "}),"\u9879\u76EE"]})]}),Re("h5",{children:[R("span",{children:"Bim3dEditor \u4F7F\u7528\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 React \u548C\u4F18\u79C0\u7684 webgl"}),R("br",{}),R("span",{children:"\u5E93 Three.js \u6253\u9020\u5728\u7EBF\u53EF\u7F16\u8F91\u7684Cad\u89E3\u6790\u7F16\u8F91\u5668"})]})]}),J5=ue.div`
    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`,K5=ue.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,eP=ue.div`
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
`,tP=ue.div`
  display: flex;
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
`,nP=()=>R(tt,{children:R(J5,{children:Re(K5,{children:[Re(eP,{children:[R(Q5,{}),R(G5,{}),R(Z5,{})]}),R(tP,{})]})})}),iP=()=>Re(tt,{children:[R(N5,{}),R(nP,{}),R(F5,{}),R(ZA,{})]}),rP=ue.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: greenyellow; */
`,sP=ue.div`

    display: flex;
    align-items: center;
    width: 100%;
    height: 10%;
    font-size: 14px;
    /* background-color: #2f71ff; */
    margin-left: 200px;
    
`,oP=ue.div`
 
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 200px;
    width: 100%;
    height: 10%;
   
    font-size: 14px;
    /* background-color: greenyellow; */
`,Ml=ue.a`
    margin: 0 20px;
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,aP=()=>R(tt,{children:Re(rP,{children:[R(sP,{children:R(Ml,{href:"",children:"\u672C\u7F51\u7AD9\u53D7\u9690\u79C1\u653F\u7B56\u4FDD\u62A4"})}),Re(oP,{children:[R(Ml,{href:"",children:"\u670D\u52A1\u6761\u6B3E"}),R(Ml,{href:"",children:"\u9690\u79C1\u653F\u7B56"}),R(Ml,{href:"",children:"\u5F00\u53D1\u56E2\u961F"})]})]})}),lP=ue.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: black;
    width: 100%;
    height: 10%;
    /* background-color: yellow; */
`,uP=()=>R(tt,{children:R(lP,{children:R(lp,{primary:!0})})}),cP=ue.div`
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
`,fP=t=>Re(cP,{children:[R("span",{className:"line"}),R("span",{className:"txt",children:t.label}),R("span",{className:"line"})]});var Dx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Re(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:[R("path",{d:"M408.67 298.53a21 21 0 1120.9-21 20.85 20.85 0 01-20.9 21m-102.17 0a21 21 0 1120.9-21 20.84 20.84 0 01-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 018.13 2.34L454 462.83a11.62 11.62 0 003.48 1.17 5 5 0 004.65-4.66 14.27 14.27 0 00-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 01-.33-3.47 11.4 11.4 0 015-9.35","data-name":"XMLID 501 -1"}),R("path",{d:"M246.13 178.51a24.47 24.47 0 010-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 11147.45 154a24.57 24.57 0 01-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 01-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 005.8 5.83 7.15 7.15 0 003.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 015.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 01-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48","data-name":"XMLID 505 -7"})]})});Dx.displayName="LogoWechat";var Ix=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 20 20",...t,ref:e,children:R("path",{d:"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm4.008 11.92c-.184.096-.47-.122-.737-.52-.105.435-.369.828-.743 1.144.394.144.65.38.65.65 0 .442-.695.799-1.553.799-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672-.857 0-1.552-.357-1.552-.8 0-.268.256-.505.65-.65-.375-.315-.638-.708-.745-1.143-.267.398-.553.616-.735.52-.265-.136-.213-.88.117-1.654.26-.61.612-1.06.879-1.158a1.18 1.18 0 01.172-.748l-.002-.041c0-.11.026-.21.07-.298.068-1.586 1.1-2.845 2.771-2.845 1.67 0 2.703 1.259 2.771 2.845.044.088.07.188.07.298 0 .012 0 .027-.003.041a1.169 1.169 0 01.173.748c.267.098.62.547.878 1.158.331.775.383 1.518.119 1.655z"})})});Ix.displayName="QqWithCircle";var kx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M16.076 13.732a19.299 19.299 0 0 0 2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365c-.415 0-.415.408-.415.408V6.04H4.707v.948h5.861v1.699H5.729v.948h9.386a16.63 16.63 0 0 1-1.352 3.294c-3.045-1.002-6.295-1.814-8.337-1.314-1.305.321-2.146.893-2.641 1.493-2.267 2.751-.641 6.929 4.147 6.929 2.831 0 5.559-1.574 7.673-4.168C17.758 17.381 24 19.976 24 19.976v.157a3.837 3.837 0 0 1-3.843 3.833H3.845A3.839 3.839 0 0 1 0 20.132V3.868A3.838 3.838 0 0 1 3.845.034h16.312A3.837 3.837 0 0 1 24 3.868v12.409s-.784-.062-4.24-1.216c-.96-.321-2.249-.811-3.684-1.329zm-10.242-.698c-.6.059-1.725.324-2.341.866-1.845 1.604-.741 4.537 2.993 4.537 2.17 0 4.339-1.384 6.042-3.599-2.424-1.179-4.476-2.022-6.694-1.804z"})})});kx.displayName="Alipay";var zx=ge.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return R(dt,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:R("path",{d:"M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5zm.75 3h-9v14.75c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V5z"})})});zx.displayName="PhonePageHeader";const dP=ue.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100%;
    height: 80%;
    /* background-color: red; */
`,hP=ue.div`
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
`,pP=ue.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 370px;
    height:100%;
    /* background-color: #961414; */
`,k0=ue.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`,El=ue.span`
    color: #333;
    font-size: ${t=>t.size};
   

`,bl=ue.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: ${t=>t.position?"right":"left"};
`,mP=ue.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 20px 0;
`,z0=ue.input`
    width: 100%;
    height: 36px;
    font-size: 24px;
    margin: 5px 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
`,gP=ue.input`
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
`,N0=ue.a`
    margin: 0;
    padding: 0;
   
    color:  #7c7c7c;
    text-decoration:none;
    &:hover{
        color:  black;
        text-decoration:underline;
        text-decoration-color:black;
    }
`,vP=ue(Dx)`
    color: #03a303;
    margin: 5px 20px;
`,_P=ue(Ix)`
    color: #f84747;
    margin: 5px 20px;
`,xP=ue(kx)`
    color: #3664fc;
    margin: 5px 20px;
`,yP=ue(zx)`
    color: #ccc;
    margin: 5px 20px;
`,SP=ue.button`
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
`,O0=ue.div`
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: auto;
    margin: 5px 0;
`,wP=()=>{let t=tp();return R(tt,{children:R(dP,{children:R(hP,{children:Re(pP,{children:[Re(k0,{children:[R(El,{size:"24px",children:"\u767B\u5F55"}),R(N0,{children:"\u6CA1\u6709\u8D26\u53F7\uFF1F"})]}),Re(mP,{children:[R(bl,{children:R(El,{size:"16px",children:"\u90AE\u7BB1\uFF1A"})}),R(z0,{type:"email"}),R(bl,{children:R(El,{size:"16px",children:"\u5BC6\u7801\uFF1A"})}),R(z0,{type:"password"})]}),Re(k0,{children:[Re(bl,{children:[R(gP,{type:"checkbox"}),R(El,{size:"12px",children:"\u8BB0\u4F4F\u5BC6\u7801"})]}),R(bl,{position:!0,children:R(N0,{children:"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"})})]}),R(SP,{onClick:()=>{t("/editor")},children:"\u767B\u5F55"}),R(O0,{children:R(fP,{label:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),Re(O0,{children:[R(vP,{size:"40"}),R(_P,{size:"40"}),R(xP,{size:"40"}),R(yP,{size:"40"})]})]})})})})},MP=ue.div`
    display: flex;
    flex-direction: column;
    color: black;
    width: 100%;
    height: 100vh;
`,EP=()=>R(tt,{children:Re(MP,{children:[R(uP,{}),R(wP,{}),R(aP,{})]})}),bP=[{path:"/",element:R(iP,{})},{path:"/example",element:R(qA,{})},{path:"/document",element:R(O2,{})},{path:"/course",element:R(N2,{})},{path:"/editor",element:R(XA,{})},{path:"/login",element:R(EP,{})}],CP=w5({reducer:{user:P5}}),TP=G4`
    body {
        background: ${t=>t.theme.colors.body};
    }
`,AP={colors:{body:"#000"}},PP={colors:{body:"#fff"}},LP=t=>{const e=Dw(n=>n.user.theme);return R(V4,{theme:e===js.Dark?AP:PP,...t})},RP=()=>{const t=D2(bP);return R(s2,{store:CP,children:Re(LP,{children:[R(TP,{}),t]})})};var Yd={},F0=eh.exports;Yd.createRoot=F0.createRoot,Yd.hydrateRoot=F0.hydrateRoot;new bt().startUp();Yd.createRoot(document.getElementById("root")).render(R($n.StrictMode,{children:R(z2,{children:R(RP,{})})}));
