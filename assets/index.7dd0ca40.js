var d_=Object.defineProperty;var f_=(t,e,n)=>e in t?d_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>(f_(t,typeof e!="symbol"?e+"":e,n),n);const h_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};h_();function p_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ie={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),w_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),qf=Symbol.iterator;function C_(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Km={};function Os(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||Ym}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=Os.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=Km,this.updater=n||Ym}var Ud=Od.prototype=new Qm;Ud.constructor=Od;Zm(Ud,Os.prototype);Ud.isPureReactComponent=!0;var Yf=Array.isArray,Jm=Object.prototype.hasOwnProperty,Bd={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Xo,type:t,key:s,ref:o,props:r,_owner:Bd.current}}function b_(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function T_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T_(""+t.key):e.toString(36)}function $a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case m_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xu(o,0):i,Yf(r)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),$a(r,e,n,"",function(u){return u})):r!=null&&(Vd(r)&&(r=b_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xu(s,a);o+=$a(s,e,n,l,r)}else if(l=C_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xu(s,a++),o+=$a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var i=[],r=0;return $a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Xa={transition:null},L_={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:Bd};ze.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Os;ze.Fragment=g_;ze.Profiler=__;ze.PureComponent=Od;ze.StrictMode=v_;ze.Suspense=w_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Xo,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};ze.createElement=tg;ze.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:S_,render:t}};ze.isValidElement=Vd;ze.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:A_}};ze.memo=function(t,e){return{$$typeof:M_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ze.useContext=function(t){return Wt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ze.useId=function(){return Wt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ze.useRef=function(t){return Wt.current.useRef(t)};ze.useState=function(t){return Wt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Wt.current.useTransition()};ze.version="18.2.0";(function(t){t.exports=ze})(Ie);const vr=p_(Ie.exports);function al(){return al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},al.apply(this,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));var Kf=function(t){return t},Qf="beforeunload",P_="hashchange",R_="popstate";function D_(t){t===void 0&&(t={});var e=t,n=e.window,i=n===void 0?document.defaultView:n,r=i.history;function s(){var x=_r(i.location.hash.substr(1)),b=x.pathname,P=b===void 0?"/":b,k=x.search,te=k===void 0?"":k,Q=x.hash,O=Q===void 0?"":Q,j=r.state||{};return[j.idx,Kf({pathname:P,search:te,hash:O,state:j.usr||null,key:j.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var x=rr.Pop,b=s(),P=b[0],k=b[1];if(g.length){if(P!=null){var te=c-P;te&&(o={action:x,location:k,retry:function(){C(te*-1)}},C(te))}}else y(x)}}i.addEventListener(R_,a),i.addEventListener(P_,function(){var x=s(),b=x[1];yu(b)!==yu(d)&&a()});var l=rr.Pop,u=s(),c=u[0],d=u[1],f=eh(),g=eh();c==null&&(c=0,r.replaceState(al({},r.state,{idx:c}),""));function _(){var x=document.querySelector("base"),b="";if(x&&x.getAttribute("href")){var P=i.location.href,k=P.indexOf("#");b=k===-1?P:P.slice(0,k)}return b}function p(x){return _()+"#"+(typeof x=="string"?x:yu(x))}function h(x,b){return b===void 0&&(b=null),Kf(al({pathname:d.pathname,hash:"",search:""},typeof x=="string"?_r(x):x,{state:b,key:I_()}))}function m(x,b){return[{usr:x.state,key:x.key,idx:b},p(x)]}function v(x,b,P){return!g.length||(g.call({action:x,location:b,retry:P}),!1)}function y(x){l=x;var b=s();c=b[0],d=b[1],f.call({action:l,location:d})}function S(x,b){var P=rr.Push,k=h(x,b);function te(){S(x,b)}if(v(P,k,te)){var Q=m(k,c+1),O=Q[0],j=Q[1];try{r.pushState(O,"",j)}catch{i.location.assign(j)}y(P)}}function w(x,b){var P=rr.Replace,k=h(x,b);function te(){w(x,b)}if(v(P,k,te)){var Q=m(k,c),O=Q[0],j=Q[1];r.replaceState(O,"",j),y(P)}}function C(x){r.go(x)}var L={get action(){return l},get location(){return d},createHref:p,push:S,replace:w,go:C,back:function(){C(-1)},forward:function(){C(1)},listen:function(b){return f.push(b)},block:function(b){var P=g.push(b);return g.length===1&&i.addEventListener(Qf,Jf),function(){P(),g.length||i.removeEventListener(Qf,Jf)}}};return L}function Jf(t){t.preventDefault(),t.returnValue=""}function eh(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(i){return i!==n})}},call:function(n){t.forEach(function(i){return i&&i(n)})}}}function I_(){return Math.random().toString(36).substr(2,8)}function yu(t){var e=t.pathname,n=e===void 0?"/":e,i=t.search,r=i===void 0?"":i,s=t.hash,o=s===void 0?"":s;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function _r(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ng=Ie.exports.createContext(null),Gd=Ie.exports.createContext(null),Hd=Ie.exports.createContext({outlet:null,matches:[]});function xr(t,e){if(!t)throw new Error(e)}function z_(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?_r(e):e,r=rg(i.pathname||"/",n);if(r==null)return null;let s=ig(t);k_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=W_(s[a],r);return o}function ig(t,e,n,i){return e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i=""),t.forEach((r,s)=>{let o={relativePath:r.path||"",caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(i)||xr(!1),o.relativePath=o.relativePath.slice(i.length));let a=dr([i,o.relativePath]),l=n.concat(o);r.children&&r.children.length>0&&(r.index===!0&&xr(!1),ig(r.children,e,l,a)),!(r.path==null&&!r.index)&&e.push({path:a,score:G_(a,r.index),routesMeta:l})}),e}function k_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:H_(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const F_=/^:\w+$/,N_=3,O_=2,U_=1,B_=10,V_=-2,th=t=>t==="*";function G_(t,e){let n=t.split("/"),i=n.length;return n.some(th)&&(i+=V_),e&&(i+=O_),n.filter(r=>!th(r)).reduce((r,s)=>r+(F_.test(s)?N_:s===""?U_:B_),i)}function H_(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function W_(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=j_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;s.push({params:i,pathname:dr([r,c.pathname]),pathnameBase:sg(dr([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=dr([r,c.pathnameBase]))}return s}function j_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=$_(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=X_(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function $_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(i.push(a),"([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,e?void 0:"i"),i]}function X_(t,e){try{return decodeURIComponent(t)}catch{return t}}function q_(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?_r(t):t;return{pathname:n?n.startsWith("/")?n:Y_(n,e):e,search:K_(i),hash:Q_(r)}}function Y_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Z_(t,e,n){let i=typeof t=="string"?_r(t):t,r=t===""||i.pathname===""?"/":i.pathname,s;if(r==null)s=n;else{let a=e.length-1;if(r.startsWith("..")){let l=r.split("/");for(;l[0]==="..";)l.shift(),a-=1;i.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=q_(i,s);return r&&r!=="/"&&r.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function rg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),sg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),K_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Q_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kl(){return Ie.exports.useContext(Gd)!=null}function og(){return kl()||xr(!1),Ie.exports.useContext(Gd).location}function ag(){kl()||xr(!1);let{basename:t,navigator:e}=Ie.exports.useContext(ng),{matches:n}=Ie.exports.useContext(Hd),{pathname:i}=og(),r=JSON.stringify(n.map(a=>a.pathnameBase)),s=Ie.exports.useRef(!1);return Ie.exports.useEffect(()=>{s.current=!0}),Ie.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Z_(a,JSON.parse(r),i);t!=="/"&&(u.pathname=dr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,r,i])}function J_(t,e){kl()||xr(!1);let{matches:n}=Ie.exports.useContext(Hd),i=n[n.length-1],r=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=og(),a;if(e){var l;let f=typeof e=="string"?_r(e):e;s==="/"||((l=f.pathname)==null?void 0:l.startsWith(s))||xr(!1),a=f}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=z_(t,{pathname:c});return ex(d&&d.map(f=>Object.assign({},f,{params:Object.assign({},r,f.params),pathname:dr([s,f.pathname]),pathnameBase:f.pathnameBase==="/"?s:dr([s,f.pathnameBase])})),n)}function ex(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,i,r)=>Ie.exports.createElement(Hd.Provider,{children:i.route.element!==void 0?i.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,r+1))}}),null)}function tx(t){let{basename:e="/",children:n=null,location:i,navigationType:r=rr.Pop,navigator:s,static:o=!1}=t;kl()&&xr(!1);let a=sg(e),l=Ie.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=_r(i));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=i,_=Ie.exports.useMemo(()=>{let p=rg(u,a);return p==null?null:{pathname:p,search:c,hash:d,state:f,key:g}},[a,u,c,d,f,g]);return _==null?null:Ie.exports.createElement(ng.Provider,{value:l},Ie.exports.createElement(Gd.Provider,{children:n,value:{location:_,navigationType:r}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nx(t){let{basename:e,children:n,window:i}=t,r=Ie.exports.useRef();r.current==null&&(r.current=D_({window:i}));let s=r.current,[o,a]=Ie.exports.useState({action:s.action,location:s.location});return Ie.exports.useLayoutEffect(()=>s.listen(a),[s]),Ie.exports.createElement(tx,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Fl={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=Ie.exports,rx=Symbol.for("react.element"),sx=Symbol.for("react.fragment"),ox=Object.prototype.hasOwnProperty,ax=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lx={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ox.call(e,i)&&!lx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rx,type:t,key:s,ref:o,props:r,_owner:ax.current}}Nl.Fragment=sx;Nl.jsx=lg;Nl.jsxs=lg;(function(t){t.exports=Nl})(Fl);const Un=Fl.exports.Fragment,ue=Fl.exports.jsx,Bt=Fl.exports.jsxs,ux=()=>ue("div",{children:"Course"}),cx=()=>ue("div",{children:"Document"});class dx{startUp(){}dispose(){}}class fx{startUp(){}dispose(){}render(){let e=rn.MGR.scene,n=e.main.render,i=e.main.css2dRender,r=e.main.camera,s=e.main.scene;n&&n.render(s,r),i&&i.render(s,r)}}var Dn=(t=>(t.CAD_SERVICE="service.cad",t.SCHEME_SERVICE="service.scheme",t.SCENE_SERVICE="service.scene",t.MESH_SERVICE="service.mesh",t))(Dn||{}),lt=(t=>(t[t.NONE=-1]="NONE",t[t.ROTATE=0]="ROTATE",t[t.ZOOM=1]="ZOOM",t[t.PAN=2]="PAN",t[t.TOUCH_ROTATE=3]="TOUCH_ROTATE",t[t.TOUCH_ZOOM_PAN=4]="TOUCH_ZOOM_PAN",t))(lt||{}),Pc=(t=>(t[t.COLOR_PIURITY_DEPTH=2369840]="COLOR_PIURITY_DEPTH",t[t.COLOR_PIURITY_LIGHT=13816790]="COLOR_PIURITY_LIGHT",t))(Pc||{});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="143",Su={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hx=0,nh=1,px=2,ug=1,mx=2,ao=3,bo=0,In=1,yr=2,gx=1,Ii=0,vs=1,ih=2,rh=3,sh=4,vx=5,ns=100,_x=101,xx=102,oh=103,ah=104,yx=200,Sx=201,wx=202,Mx=203,cg=204,dg=205,Ex=206,Cx=207,bx=208,Tx=209,Ax=210,Lx=0,Px=1,Rx=2,Rc=3,Dx=4,Ix=5,zx=6,kx=7,fg=0,Fx=1,Nx=2,ui=0,Ox=1,Ux=2,Bx=3,Vx=4,Gx=5,hg=300,Cs=301,bs=302,Dc=303,Ic=304,Ol=306,zc=1e3,Rn=1001,kc=1002,$t=1003,lh=1004,uh=1005,pn=1006,Hx=1007,Ul=1008,Sr=1009,Wx=1010,jx=1011,pg=1012,$x=1013,sr=1014,or=1015,To=1016,Xx=1017,qx=1018,_s=1020,Yx=1021,Zx=1022,$n=1023,Kx=1024,Qx=1025,fr=1026,Ts=1027,Jx=1028,e1=1029,t1=1030,n1=1031,i1=1033,wu=33776,Mu=33777,Eu=33778,Cu=33779,ch=35840,dh=35841,fh=35842,hh=35843,r1=36196,ph=37492,mh=37496,gh=37808,vh=37809,_h=37810,xh=37811,yh=37812,Sh=37813,wh=37814,Mh=37815,Eh=37816,Ch=37817,bh=37818,Th=37819,Ah=37820,Lh=37821,Ph=36492,wr=3e3,tt=3001,s1=3200,o1=3201,a1=0,l1=1,ni="srgb",ar="srgb-linear",bu=7680,u1=519,Fc=35044,Rh="300 es",Nc=1035;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,Dh=180/Math.PI;function zi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function c1(t,e){return(t%e+e)%e}function Au(t,e,n){return(1-n)*t+n*e}function Ih(t){return(t&t-1)===0&&t!==0}function Oc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],_=i[8],p=r[0],h=r[3],m=r[6],v=r[1],y=r[4],S=r[7],w=r[2],C=r[5],L=r[8];return s[0]=o*p+a*v+l*w,s[3]=o*h+a*y+l*C,s[6]=o*m+a*S+l*L,s[1]=u*p+c*v+d*w,s[4]=u*h+c*y+d*C,s[7]=u*m+c*S+d*L,s[2]=f*p+g*v+_*w,s[5]=f*h+g*y+_*C,s[8]=f*m+g*S+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,_=n*d+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function mg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function Ao(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Lu={[ni]:{[ar]:hr},[ar]:{[ni]:qa}},Mn={legacyMode:!0,get workingColorSpace(){return ar},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Lu[e]&&Lu[e][n]!==void 0){const i=Lu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={r:0,g:0,b:0},En={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ra(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ar){return this.r=e,this.g=n,this.b=i,Mn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ar){if(e=c1(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pu(o,s,e+1/3),this.g=Pu(o,s,e),this.b=Pu(o,s,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,n=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ni){const i=gg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Mn.fromWorkingColorSpace(ra(this,gt),e),nn(gt.r*255,0,255)<<16^nn(gt.g*255,0,255)<<8^nn(gt.b*255,0,255)<<0}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ar){Mn.fromWorkingColorSpace(ra(this,gt),n);const i=gt.r,r=gt.g,s=gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ar){return Mn.fromWorkingColorSpace(ra(this,gt),n),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=ni){return Mn.fromWorkingColorSpace(ra(this,gt),e),e!==ni?`color(${e} ${gt.r} ${gt.g} ${gt.b})`:`rgb(${gt.r*255|0},${gt.g*255|0},${gt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(En),En.h+=e,En.s+=n,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(En),e.getHSL(ia);const i=Au(En.h,ia.h,n),r=Au(En.s,ia.s,n),s=Au(En.l,ia.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}He.NAMES=gg;let Fr;class vg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Ao("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ao("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hr(n[i]/255)*255):n[i]=hr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _g{constructor(e=null){this.isSource=!0,this.uuid=zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d1=0;class yn extends Us{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Rn,r=Rn,s=pn,o=Ul,a=$n,l=Sr,u=1,c=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=zi(),this.name="",this.source=new _g(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=hg;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(g+1)/2,w=(m+1)/2,C=(c+f)/4,L=(d+p)/4,x=(_+h)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=L/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-_)*(h-_)+(d-p)*(d-p)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(d-p)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mr extends Us{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new _g(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xg extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f1 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=_,e[n+3]=p;return}if(d!==p||l!==f||u!==g||c!==_){let h=1-a;const m=l*f+u*g+c*_+d*p,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),C=Math.atan2(w,m*v);h=Math.sin(h*C)/w,a=Math.sin(a*C)/w}const S=a*v;if(l=l*h+f*S,u=u*h+g*S,c=c*h+_*S,d=d*h+p*S,h===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=w,u*=w,c*=w,d*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+c*d+l*g-u*f,e[n+1]=l*_+c*f+u*d-a*g,e[n+2]=u*_+c*g+a*f-l*d,e[n+3]=c*_-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"YXZ":this._x=f*c*d+u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"ZXY":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d-f*g*_;break;case"ZYX":this._x=f*c*d-u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d+f*g*_;break;case"YZX":this._x=f*c*d+u*g*_,this._y=u*g*d+f*c*_,this._z=u*c*_-f*g*d,this._w=u*c*d-f*g*_;break;case"XZY":this._x=f*c*d-u*g*_,this._y=u*g*d-f*c*_,this._z=u*c*_+f*g*d,this._w=u*c*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,n=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new R,zh=new Bs;class qo{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Zi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else i.boundingBox===null&&i.computeBoundingBox(),Iu.copy(i.boundingBox),Iu.applyMatrix4(e.matrixWorld),this.union(Iu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),sa.subVectors(this.max,Xs),Nr.subVectors(e.a,Xs),Or.subVectors(e.b,Xs),Ur.subVectors(e.c,Xs),_i.subVectors(Or,Nr),xi.subVectors(Ur,Or),Ki.subVectors(Nr,Ur);let n=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!zu(n,Nr,Or,Ur,sa)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,Nr,Or,Ur,sa))?!1:(oa.crossVectors(_i,xi),n=[oa.x,oa.y,oa.z],zu(n,Nr,Or,Ur,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new R,new R,new R,new R,new R,new R,new R,new R],Zi=new R,Iu=new qo,Nr=new R,Or=new R,Ur=new R,_i=new R,xi=new R,Ki=new R,Xs=new R,sa=new R,oa=new R,Qi=new R;function zu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=n.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const h1=new qo,kh=new R,aa=new R,ku=new R;class Bl{constructor(e=new R,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ku.subVectors(e,this.center);const n=ku.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(ku.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?aa.set(0,0,1).multiplyScalar(e.radius):aa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(kh.copy(e.center).add(aa)),this.expandByPoint(kh.copy(e.center).sub(aa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new R,Fu=new R,la=new R,yi=new R,Nu=new R,ua=new R,Ou=new R;class yg{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.direction).multiplyScalar(n).add(this.origin),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fu.copy(e).add(n).multiplyScalar(.5),la.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Fu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(la),a=yi.dot(this.direction),l=-yi.dot(la),u=yi.lengthSq(),c=Math.abs(1-o*o);let d,f,g,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const p=1/c;d*=p,f*=p,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(la).multiplyScalar(f).add(Fu),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Nu.subVectors(n,e),ua.subVectors(i,e),Ou.crossVectors(Nu,ua);let o=this.direction.dot(Ou),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(yi,ua));if(l<0)return null;const u=a*this.direction.dot(Nu.cross(yi));if(u<0||l+u>o)return null;const c=-a*yi.dot(Ou);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,g,_,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,_=a*c,p=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+_*u,n[5]=f-p*u,n[9]=-a*l,n[2]=p-f*u,n[6]=_+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,_=u*c,p=u*d;n[0]=f+p*a,n[4]=_*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-_,n[6]=p+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,_=u*c,p=u*d;n[0]=f-p*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*c,n[9]=p-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,_=a*c,p=a*d;n[0]=l*c,n[4]=_*u-g,n[8]=f*u+p,n[1]=l*d,n[5]=p*u+f,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=p-f*d,n[8]=_*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+_,n[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+p,n[5]=o*c,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*c,n[10]=p*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,n,i){const r=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Si.crossVectors(i,Jt),Si.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Si.crossVectors(i,Jt)),Si.normalize(),ca.crossVectors(Jt,Si),r[0]=Si.x,r[4]=ca.x,r[8]=Jt.x,r[1]=Si.y,r[5]=ca.y,r[9]=Jt.y,r[2]=Si.z,r[6]=ca.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],_=i[2],p=i[6],h=i[10],m=i[14],v=i[3],y=i[7],S=i[11],w=i[15],C=r[0],L=r[4],x=r[8],b=r[12],P=r[1],k=r[5],te=r[9],Q=r[13],O=r[2],j=r[6],H=r[10],Z=r[14],D=r[3],I=r[7],U=r[11],K=r[15];return s[0]=o*C+a*P+l*O+u*D,s[4]=o*L+a*k+l*j+u*I,s[8]=o*x+a*te+l*H+u*U,s[12]=o*b+a*Q+l*Z+u*K,s[1]=c*C+d*P+f*O+g*D,s[5]=c*L+d*k+f*j+g*I,s[9]=c*x+d*te+f*H+g*U,s[13]=c*b+d*Q+f*Z+g*K,s[2]=_*C+p*P+h*O+m*D,s[6]=_*L+p*k+h*j+m*I,s[10]=_*x+p*te+h*H+m*U,s[14]=_*b+p*Q+h*Z+m*K,s[3]=v*C+y*P+S*O+w*D,s[7]=v*L+y*k+S*j+w*I,s[11]=v*x+y*te+S*H+w*U,s[15]=v*b+y*Q+S*Z+w*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+p*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],_=e[12],p=e[13],h=e[14],m=e[15],v=d*h*u-p*f*u+p*l*g-a*h*g-d*l*m+a*f*m,y=_*f*u-c*h*u-_*l*g+o*h*g+c*l*m-o*f*m,S=c*p*u-_*d*u+_*a*g-o*p*g-c*a*m+o*d*m,w=_*d*l-c*p*l-_*a*f+o*p*f+c*a*h-o*d*h,C=n*v+i*y+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(p*f*s-d*h*s-p*r*g+i*h*g+d*r*m-i*f*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=y*L,e[5]=(c*h*s-_*f*s+_*r*g-n*h*g-c*r*m+n*f*m)*L,e[6]=(_*l*s-o*h*s-_*r*u+n*h*u+o*r*m-n*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*L,e[8]=S*L,e[9]=(_*d*s-c*p*s-_*i*g+n*p*g+c*i*m-n*d*m)*L,e[10]=(o*p*s-_*a*s+_*i*u-n*p*u-o*i*m+n*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*L,e[12]=w*L,e[13]=(c*p*r-_*d*r+_*i*f-n*p*f-c*i*h+n*d*h)*L,e[14]=(_*a*r-o*p*r-_*i*l+n*p*l+o*i*h-n*a*h)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,_=s*d,p=o*c,h=o*d,m=a*d,v=l*u,y=l*c,S=l*d,w=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*w,r[1]=(g+S)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+m))*C,r[6]=(h+v)*C,r[7]=0,r[8]=(_+y)*L,r[9]=(h-v)*L,r[10]=(1-(f+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,c=1/o,d=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new R,Cn=new it,p1=new R(0,0,0),m1=new R(1,1,1),Si=new R,ca=new R,Jt=new R,Fh=new it,Nh=new Bs;class Yo{constructor(e=0,n=0,i=0,r=Yo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Yo.DefaultOrder="XYZ";Yo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const Oh=new R,Vr=new Bs,Jn=new it,da=new R,qs=new R,v1=new R,_1=new Bs,Uh=new R(1,0,0),Bh=new R(0,1,0),Vh=new R(0,0,1),x1={type:"added"},Gh={type:"removed"};class Tt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new R,n=new Yo,i=new Bs,r=new R(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new vn}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,n){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(qs,da,this.up):Jn.lookAt(da,qs,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Gh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Gh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new R(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const bn=new R,ei=new R,Uu=new R,ti=new R,Gr=new R,Hr=new R,Hh=new R,Bu=new R,Vu=new R,Gu=new R;class Wn{constructor(e=new R,n=new R,i=new R){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),ei.subVectors(i,n),Uu.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(ei),l=bn.dot(Uu),u=ei.dot(ei),c=ei.dot(Uu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti),l.set(0,0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),ei.subVectors(e,n),bn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),bn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Hr.subVectors(s,i),Bu.subVectors(e,i);const l=Gr.dot(Bu),u=Hr.dot(Bu);if(l<=0&&u<=0)return n.copy(i);Vu.subVectors(e,r);const c=Gr.dot(Vu),d=Hr.dot(Vu);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Gr,o);Gu.subVectors(e,s);const g=Gr.dot(Gu),_=Hr.dot(Gu);if(_>=0&&g<=_)return n.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Hr,a);const h=c*_-g*d;if(h<=0&&d-c>=0&&g-_>=0)return Hh.subVectors(s,r),a=(d-c)/(d-c+(g-_)),n.copy(r).addScaledVector(Hh,a);const m=1/(h+p+f);return o=p*m,a=f*m,n.copy(i).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let y1=0;class Vs extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=vs,this.side=bo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cg,this.blendDst=dg,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bu,this.stencilZFail=bu,this.stencilZPass=bu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===gx;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==bo&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jd extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new R,fa=new Ce;class zn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Fc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new He),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ce),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new R),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new _t),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fa.fromBufferAttribute(this,n),fa.applyMatrix3(e),this.setXY(n,fa.x,fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wg extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mg extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kn extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let S1=0;const hn=new it,Hu=new Tt,Wr=new R,en=new qo,Ys=new qo,St=new R;class Yn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Mg:wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new vn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(en.min,Ys.min),en.expandByPoint(St),St.addVectors(en.max,Ys.max),en.expandByPoint(St)):(en.expandByPoint(Ys.min),en.expandByPoint(Ys.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)St.fromBufferAttribute(a,u),l&&(Wr.fromBufferAttribute(e,u),St.add(Wr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new R,c[P]=new R;const d=new R,f=new R,g=new R,_=new Ce,p=new Ce,h=new Ce,m=new R,v=new R;function y(P,k,te){d.fromArray(r,P*3),f.fromArray(r,k*3),g.fromArray(r,te*3),_.fromArray(o,P*2),p.fromArray(o,k*2),h.fromArray(o,te*2),f.sub(d),g.sub(d),p.sub(_),h.sub(_);const Q=1/(p.x*h.y-h.x*p.y);!isFinite(Q)||(m.copy(f).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(Q),v.copy(g).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(Q),u[P].add(m),u[k].add(m),u[te].add(m),c[P].add(v),c[k].add(v),c[te].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let P=0,k=S.length;P<k;++P){const te=S[P],Q=te.start,O=te.count;for(let j=Q,H=Q+O;j<H;j+=3)y(i[j+0],i[j+1],i[j+2])}const w=new R,C=new R,L=new R,x=new R;function b(P){L.fromArray(s,P*3),x.copy(L);const k=u[P];w.copy(k),w.sub(L.multiplyScalar(L.dot(k))).normalize(),C.crossVectors(x,k);const Q=C.dot(c[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=Q}for(let P=0,k=S.length;P<k;++P){const te=S[P],Q=te.start,O=te.count;for(let j=Q,H=Q+O;j<H;j+=3)b(i[j+0]),b(i[j+1]),b(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,c=new R,d=new R;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let d=0,f=u;d<c;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)f[_++]=u[g++]}return new zn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new it,jr=new yg,Wu=new Bl,wi=new R,Mi=new R,Ei=new R,ju=new R,$u=new R,Xu=new R,ha=new R,pa=new R,ma=new R,ga=new Ce,va=new Ce,_a=new Ce,qu=new R,xa=new R;class si extends Tt{constructor(e=new Yn,n=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Wu.copy(i.boundingSphere),Wu.applyMatrix4(s),e.ray.intersectsSphere(Wu)===!1)||(Wh.copy(s).invert(),jr.copy(e.ray).applyMatrix4(Wh),i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let w=y,C=S;w<C;w+=3){const L=a.getX(w),x=a.getX(w+1),b=a.getX(w+2);o=ya(this,v,e,jr,l,u,c,d,f,L,x,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const y=a.getX(m),S=a.getX(m+1),w=a.getX(m+2);o=ya(this,r,e,jr,l,u,c,d,f,y,S,w),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let w=y,C=S;w<C;w+=3){const L=w,x=w+1,b=w+2;o=ya(this,v,e,jr,l,u,c,d,f,L,x,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const y=m,S=m+1,w=m+2;o=ya(this,r,e,jr,l,u,c,d,f,y,S,w),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function w1(t,e,n,i,r,s,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==yr,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xa);return u<n.near||u>n.far?null:{distance:u,point:xa.clone(),object:t}}function ya(t,e,n,i,r,s,o,a,l,u,c,d){wi.fromBufferAttribute(r,u),Mi.fromBufferAttribute(r,c),Ei.fromBufferAttribute(r,d);const f=t.morphTargetInfluences;if(s&&f){ha.set(0,0,0),pa.set(0,0,0),ma.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=f[_],m=s[_];h!==0&&(ju.fromBufferAttribute(m,u),$u.fromBufferAttribute(m,c),Xu.fromBufferAttribute(m,d),o?(ha.addScaledVector(ju,h),pa.addScaledVector($u,h),ma.addScaledVector(Xu,h)):(ha.addScaledVector(ju.sub(wi),h),pa.addScaledVector($u.sub(Mi),h),ma.addScaledVector(Xu.sub(Ei),h)))}wi.add(ha),Mi.add(pa),Ei.add(ma)}t.isSkinnedMesh&&(t.boneTransform(u,wi),t.boneTransform(c,Mi),t.boneTransform(d,Ei));const g=w1(t,e,n,i,wi,Mi,Ei,qu);if(g){a&&(ga.fromBufferAttribute(a,u),va.fromBufferAttribute(a,c),_a.fromBufferAttribute(a,d),g.uv=Wn.getUV(qu,wi,Mi,Ei,ga,va,_a,new Ce)),l&&(ga.fromBufferAttribute(l,u),va.fromBufferAttribute(l,c),_a.fromBufferAttribute(l,d),g.uv2=Wn.getUV(qu,wi,Mi,Ei,ga,va,_a,new Ce));const _={a:u,b:c,c:d,normal:new R,materialIndex:0};Wn.getNormal(wi,Mi,Ei,_.normal),g.face=_}return g}class Zo extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kn(u,3)),this.setAttribute("normal",new kn(c,3)),this.setAttribute("uv",new kn(d,2));function _(p,h,m,v,y,S,w,C,L,x,b){const P=S/L,k=w/x,te=S/2,Q=w/2,O=C/2,j=L+1,H=x+1;let Z=0,D=0;const I=new R;for(let U=0;U<H;U++){const K=U*k-Q;for(let F=0;F<j;F++){const B=F*P-te;I[p]=B*v,I[h]=K*y,I[m]=O,u.push(I.x,I.y,I.z),I[p]=0,I[h]=0,I[m]=C>0?1:-1,c.push(I.x,I.y,I.z),d.push(F/L),d.push(1-U/x),Z+=1}}for(let U=0;U<x;U++)for(let K=0;K<L;K++){const F=f+K+j*U,B=f+K+j*(U+1),$=f+(K+1)+j*(U+1),se=f+(K+1)+j*U;l.push(F,B,se),l.push(B,$,se),D+=6}a.addGroup(g,D,b),g+=D,f+=Z}}static fromJSON(e){return new Zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Dt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function M1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const E1={clone:As,merge:Dt};var C1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Eg extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends Eg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=90,Xr=1;class T1 extends Tt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new It($r,Xr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new It($r,Xr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new It($r,Xr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new It($r,Xr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new It($r,Xr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const u=new It($r,Xr,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=ui,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Cg extends yn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Cs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A1 extends Mr{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zo(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ii});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===Ul&&(n.minFilter=pn),new T1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yu=new R,L1=new R,P1=new vn;class Ji{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(L1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P1.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Bl,Sa=new R;class $d{constructor(e=new Ji,n=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],h=i[12],m=i[13],v=i[14],y=i[15];return n[0].setComponents(a-r,d-l,p-f,y-h).normalize(),n[1].setComponents(a+r,d+l,p+f,y+h).normalize(),n[2].setComponents(a+s,d+u,p+g,y+m).normalize(),n[3].setComponents(a-s,d-u,p-g,y-m).normalize(),n[4].setComponents(a-o,d-c,p-_,y-v).normalize(),n[5].setComponents(a+o,d+c,p+_,y+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function R1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Vl extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],_=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*f-o;for(let y=0;y<u;y++){const S=y*d-s;_.push(S,-v,0),p.push(0,0,1),h.push(y/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const y=v+u*m,S=v+u*(m+1),w=v+1+u*(m+1),C=v+1+u*m;g.push(y,S,C),g.push(S,w,C)}this.setIndex(g),this.setAttribute("position",new kn(_,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(h,2))}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1="vec3 transformed = vec3( position );",U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,V1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K1=`#define PI 3.141592653589793
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
}`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J1=`vec3 transformedNormal = objectNormal;
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
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
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
}`,gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`vec3 diffuse = vec3( 1.0 );
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
#endif`,xy=`uniform bool receiveShadow;
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
#endif`,yy=`#if defined( USE_ENVMAP )
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
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,My=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Cy=`PhysicalMaterial material;
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
#endif`,by=`struct PhysicalMaterial {
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
}`,Ty=`
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,By=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
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
#endif`,Gy=`#ifdef USE_MORPHTARGETS
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
#endif`,Hy=`#ifdef USE_MORPHTARGETS
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
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,jy=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
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
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#ifdef USE_SHADOWMAP
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
#endif`,uS=`#ifdef USE_SHADOWMAP
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
#endif`,cS=`#ifdef USE_SHADOWMAP
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
#endif`,dS=`float getShadowMask() {
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
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hS=`#ifdef USE_SKINNING
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
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,MS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ES=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,CS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,TS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#include <envmap_common_pars_fragment>
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
}`,IS=`#include <common>
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
}`,zS=`#if DEPTH_PACKING == 3200
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
}`,kS=`#define DISTANCE
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
}`,FS=`#define DISTANCE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,US=`uniform float scale;
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
}`,BS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 diffuse;
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
}`,HS=`#define LAMBERT
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
}`,WS=`uniform vec3 diffuse;
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
}`,jS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,XS=`#define NORMAL
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
}`,qS=`#define NORMAL
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
}`,YS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,KS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,JS=`#define TOON
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
}`,ew=`#define TOON
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
}`,tw=`uniform float size;
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#include <common>
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
}`,rw=`uniform vec3 color;
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
}`,sw=`uniform float rotation;
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
}`,ow=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:D1,alphamap_pars_fragment:I1,alphatest_fragment:z1,alphatest_pars_fragment:k1,aomap_fragment:F1,aomap_pars_fragment:N1,begin_vertex:O1,beginnormal_vertex:U1,bsdfs:B1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:H1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:$1,color_fragment:X1,color_pars_fragment:q1,color_pars_vertex:Y1,color_vertex:Z1,common:K1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,encodings_fragment:ry,encodings_pars_fragment:sy,envmap_fragment:oy,envmap_common_pars_fragment:ay,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:yy,envmap_vertex:cy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:hy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_fragment:gy,lightmap_pars_fragment:vy,lights_lambert_vertex:_y,lights_pars_begin:xy,lights_toon_fragment:Sy,lights_toon_pars_fragment:wy,lights_phong_fragment:My,lights_phong_pars_fragment:Ey,lights_physical_fragment:Cy,lights_physical_pars_fragment:by,lights_fragment_begin:Ty,lights_fragment_maps:Ay,lights_fragment_end:Ly,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Iy,map_fragment:zy,map_pars_fragment:ky,map_particle_fragment:Fy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:Uy,morphcolor_vertex:By,morphnormal_vertex:Vy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Hy,normal_fragment_begin:Wy,normal_fragment_maps:jy,normal_pars_fragment:$y,normal_pars_vertex:Xy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:Qy,iridescence_pars_fragment:Jy,output_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:sS,roughnessmap_fragment:oS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:uS,shadowmap_vertex:cS,shadowmask_pars_fragment:dS,skinbase_vertex:fS,skinning_pars_vertex:hS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:vS,tonemapping_fragment:_S,tonemapping_pars_fragment:xS,transmission_fragment:yS,transmission_pars_fragment:SS,uv_pars_fragment:wS,uv_pars_vertex:MS,uv_vertex:ES,uv2_pars_fragment:CS,uv2_pars_vertex:bS,uv2_vertex:TS,worldpos_vertex:AS,background_vert:LS,background_frag:PS,cube_vert:RS,cube_frag:DS,depth_vert:IS,depth_frag:zS,distanceRGBA_vert:kS,distanceRGBA_frag:FS,equirect_vert:NS,equirect_frag:OS,linedashed_vert:US,linedashed_frag:BS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:HS,meshlambert_frag:WS,meshmatcap_vert:jS,meshmatcap_frag:$S,meshnormal_vert:XS,meshnormal_frag:qS,meshphong_vert:YS,meshphong_frag:ZS,meshphysical_vert:KS,meshphysical_frag:QS,meshtoon_vert:JS,meshtoon_frag:ew,points_vert:tw,points_frag:nw,shadow_vert:iw,shadow_frag:rw,sprite_vert:sw,sprite_frag:ow},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Hn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:Dt([le.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Hn.physical={uniforms:Dt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function aw(t,e,n,i,r,s){const o=new He(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const y=t.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ol)?(u===void 0&&(u=new si(new Zo(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:As(Hn.cube.uniforms),vertexShader:Hn.cube.vertexShader,fragmentShader:Hn.cube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||d!==v.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,f=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new si(new Vl(2,2),new Er({name:"BackgroundMaterial",uniforms:As(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:bo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function lw(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(O,j,H,Z,D){let I=!1;if(o){const U=p(Z,H,j);u!==U&&(u=U,g(u.object)),I=m(O,Z,H,D),I&&v(O,Z,H,D)}else{const U=j.wireframe===!0;(u.geometry!==Z.id||u.program!==H.id||u.wireframe!==U)&&(u.geometry=Z.id,u.program=H.id,u.wireframe=U,I=!0)}D!==null&&n.update(D,34963),(I||c)&&(c=!1,x(O,j,H,Z),D!==null&&t.bindBuffer(34963,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,j,H){const Z=H.wireframe===!0;let D=a[O.id];D===void 0&&(D={},a[O.id]=D);let I=D[j.id];I===void 0&&(I={},D[j.id]=I);let U=I[Z];return U===void 0&&(U=h(f()),I[Z]=U),U}function h(O){const j=[],H=[],Z=[];for(let D=0;D<r;D++)j[D]=0,H[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:H,attributeDivisors:Z,object:O,attributes:{},index:null}}function m(O,j,H,Z){const D=u.attributes,I=j.attributes;let U=0;const K=H.getAttributes();for(const F in K)if(K[F].location>=0){const $=D[F];let se=I[F];if(se===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;U++}return u.attributesNum!==U||u.index!==Z}function v(O,j,H,Z){const D={},I=j.attributes;let U=0;const K=H.getAttributes();for(const F in K)if(K[F].location>=0){let $=I[F];$===void 0&&(F==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),F==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),D[F]=se,U++}u.attributes=D,u.attributesNum=U,u.index=Z}function y(){const O=u.newAttributes;for(let j=0,H=O.length;j<H;j++)O[j]=0}function S(O){w(O,0)}function w(O,j){const H=u.newAttributes,Z=u.enabledAttributes,D=u.attributeDivisors;H[O]=1,Z[O]===0&&(t.enableVertexAttribArray(O),Z[O]=1),D[O]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,j),D[O]=j)}function C(){const O=u.newAttributes,j=u.enabledAttributes;for(let H=0,Z=j.length;H<Z;H++)j[H]!==O[H]&&(t.disableVertexAttribArray(H),j[H]=0)}function L(O,j,H,Z,D,I){i.isWebGL2===!0&&(H===5124||H===5125)?t.vertexAttribIPointer(O,j,H,D,I):t.vertexAttribPointer(O,j,H,Z,D,I)}function x(O,j,H,Z){if(i.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const D=Z.attributes,I=H.getAttributes(),U=j.defaultAttributeValues;for(const K in I){const F=I[K];if(F.location>=0){let B=D[K];if(B===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),B!==void 0){const $=B.normalized,se=B.itemSize,T=n.get(B);if(T===void 0)continue;const ve=T.buffer,q=T.type,ge=T.bytesPerElement;if(B.isInterleavedBufferAttribute){const ie=B.data,ye=ie.stride,ae=B.offset;if(ie.isInstancedInterleavedBuffer){for(let he=0;he<F.locationSize;he++)w(F.location+he,ie.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<F.locationSize;he++)S(F.location+he);t.bindBuffer(34962,ve);for(let he=0;he<F.locationSize;he++)L(F.location+he,se/F.locationSize,q,$,ye*ge,(ae+se/F.locationSize*he)*ge)}else{if(B.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)w(F.location+ie,B.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ie=0;ie<F.locationSize;ie++)S(F.location+ie);t.bindBuffer(34962,ve);for(let ie=0;ie<F.locationSize;ie++)L(F.location+ie,se/F.locationSize,q,$,se*ge,se/F.locationSize*ie*ge)}}else if(U!==void 0){const $=U[K];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(F.location,$);break;case 3:t.vertexAttrib3fv(F.location,$);break;case 4:t.vertexAttrib4fv(F.location,$);break;default:t.vertexAttrib1fv(F.location,$)}}}}C()}function b(){te();for(const O in a){const j=a[O];for(const H in j){const Z=j[H];for(const D in Z)_(Z[D].object),delete Z[D];delete j[H]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const j=a[O.id];for(const H in j){const Z=j[H];for(const D in Z)_(Z[D].object),delete Z[D];delete j[H]}delete a[O.id]}function k(O){for(const j in a){const H=a[j];if(H[O.id]===void 0)continue;const Z=H[O.id];for(const D in Z)_(Z[D].object),delete Z[D];delete H[O.id]}}function te(){Q(),c=!0,u!==l&&(u=l,g(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:Q,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:S,disableUnusedAttributes:C}}function uw(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function cw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),_=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),y=f>0,S=o||e.has("OES_texture_float"),w=y&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function dw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ji,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const _=d.length!==0||f||i!==0||r;return r=f,n=c(d,g,0),i=d.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const _=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,m=t.get(d);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,y=v*4;let S=m.clippingState||null;l.value=S,S=c(_,f,y,g);for(let w=0;w!==y;++w)S[w]=n[w];m.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,_){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=g+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,S=g;y!==p;++y,S+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function fw(t){let e=new WeakMap;function n(o,a){return a===Dc?o.mapping=Cs:a===Ic&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new A1(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Pi extends Eg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,jh=[.125,.215,.35,.446,.526,.582],ir=20,Zu=new Pi,$h=new He;let Ku=null;const er=(1+Math.sqrt(5))/2,Yr=1/er,Xh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,er,Yr),new R(0,er,-Yr),new R(Yr,0,er),new R(-Yr,0,er),new R(er,Yr,0),new R(-er,Yr,0)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:To,format:$n,encoding:wr,depthBuffer:!1},r=Yh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hw(s)),this._blurMaterial=pw(s,e,n)}return r}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,Zu)}_sceneToCubeUV(e,n,i,r){const a=new It(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor($h),c.toneMapping=ui,c.autoClear=!1;const g=new jd({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new si(new Zo,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy($h),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const y=this._cubeSize;wa(r,v*y,m>2?y:0,y,y),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xh[(r-1)%Xh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new si(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ir-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):ir;h>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ir}`);const m=[];let v=0;for(let L=0;L<ir;++L){const x=L/p,b=Math.exp(-x*x/2);m.push(b),L===0?v+=b:L<h&&(v+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-is?r-y+is:0),C=4*(this._cubeSize-S);wa(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Zu)}}function hw(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+jh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-is?l=jh[o-t+is-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,_=6,p=3,h=2,m=1,v=new Float32Array(p*_*g),y=new Float32Array(h*_*g),S=new Float32Array(m*_*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,x=C>2?0:-1,b=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];v.set(b,p*_*C),y.set(f,h*_*C);const P=[C,C,C,C,C,C];S.set(P,m*_*C)}const w=new Yn;w.setAttribute("position",new zn(v,p)),w.setAttribute("uv",new zn(y,h)),w.setAttribute("faceIndex",new zn(S,m)),e.push(w),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yh(t,e,n){const i=new Mr(t,e,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pw(t,e,n){const i=new Float32Array(ir),r=new R(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Zh(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Kh(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function mw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Dc||l===Ic,c=l===Cs||l===bs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new qh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new qh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const g=d.morphAttributes;for(const _ in g){const p=g[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(d){const f=[],g=d.index,_=d.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let y=0,S=v.length;y<S;y+=3){const w=v[y+0],C=v[y+1],L=v[y+2];f.push(w,C,C,L,L,w)}}else{const v=_.array;p=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const w=y+0,C=y+1,L=y+2;f.push(w,C,C,L,L,w)}}const h=new(mg(f)?Mg:wg)(f,1);h.version=p;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function _w(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,_){if(_===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,f*l,_),n.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function xw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yw(t,e){return t[0]-e[0]}function Sw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Qu(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function ww(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let H=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var _=H;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let P=0;S===!0&&(P=1),w===!0&&(P=2),C===!0&&(P=3);let k=c.attributes.position.count*P,te=1;k>e.maxTextureSize&&(te=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const Q=new Float32Array(k*te*4*h),O=new xg(Q,k,te,h);O.type=or,O.needsUpdate=!0;const j=P*4;for(let Z=0;Z<h;Z++){const D=L[Z],I=x[Z],U=b[Z],K=k*te*4*Z;for(let F=0;F<D.count;F++){const B=F*j;S===!0&&(o.fromBufferAttribute(D,F),D.normalized===!0&&Qu(o,D),Q[K+B+0]=o.x,Q[K+B+1]=o.y,Q[K+B+2]=o.z,Q[K+B+3]=0),w===!0&&(o.fromBufferAttribute(I,F),I.normalized===!0&&Qu(o,I),Q[K+B+4]=o.x,Q[K+B+5]=o.y,Q[K+B+6]=o.z,Q[K+B+7]=0),C===!0&&(o.fromBufferAttribute(U,F),U.normalized===!0&&Qu(o,U),Q[K+B+8]=o.x,Q[K+B+9]=o.y,Q[K+B+10]=o.z,Q[K+B+11]=U.itemSize===4?o.w:1)}}m={count:h,texture:O,size:new Ce(k,te)},s.set(c,m),c.addEventListener("dispose",H)}let v=0;for(let S=0;S<g.length;S++)v+=g[S];const y=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let w=0;w<p;w++)h[w]=[w,0];i[c.id]=h}for(let w=0;w<p;w++){const C=h[w];C[0]=w,C[1]=g[w]}h.sort(Sw);for(let w=0;w<8;w++)w<p&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(yw);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const C=a[w],L=C[0],x=C[1];L!==Number.MAX_SAFE_INTEGER&&x?(m&&c.getAttribute("morphTarget"+w)!==m[L]&&c.setAttribute("morphTarget"+w,m[L]),v&&c.getAttribute("morphNormal"+w)!==v[L]&&c.setAttribute("morphNormal"+w,v[L]),r[w]=x,y+=x):(m&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const S=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Mw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Tg=new yn,Ag=new xg,Lg=new f1,Pg=new Cg,Qh=[],Jh=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gl(t,e){let n=Jh[e];n===void 0&&(n=new Int32Array(e),Jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;np.set(i),t.uniformMatrix2fv(this.addr,!1,np),Ht(n,i)}}function Lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;tp.set(i),t.uniformMatrix3fv(this.addr,!1,tp),Ht(n,i)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;ep.set(i),t.uniformMatrix4fv(this.addr,!1,ep),Ht(n,i)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Dw(t,e){const n=this.cache;Gt(n,e)||(t.uniform2iv(this.addr,e),Ht(n,e))}function Iw(t,e){const n=this.cache;Gt(n,e)||(t.uniform3iv(this.addr,e),Ht(n,e))}function zw(t,e){const n=this.cache;Gt(n,e)||(t.uniform4iv(this.addr,e),Ht(n,e))}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Fw(t,e){const n=this.cache;Gt(n,e)||(t.uniform2uiv(this.addr,e),Ht(n,e))}function Nw(t,e){const n=this.cache;Gt(n,e)||(t.uniform3uiv(this.addr,e),Ht(n,e))}function Ow(t,e){const n=this.cache;Gt(n,e)||(t.uniform4uiv(this.addr,e),Ht(n,e))}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Tg,r)}function Bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lg,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Pg,r)}function Gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ag,r)}function Hw(t){switch(t){case 5126:return Ew;case 35664:return Cw;case 35665:return bw;case 35666:return Tw;case 35674:return Aw;case 35675:return Lw;case 35676:return Pw;case 5124:case 35670:return Rw;case 35667:case 35671:return Dw;case 35668:case 35672:return Iw;case 35669:case 35673:return zw;case 5125:return kw;case 36294:return Fw;case 36295:return Nw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Gw}}function Ww(t,e){t.uniform1fv(this.addr,e)}function jw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function $w(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function Xw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function qw(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Yw(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zw(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Kw(t,e){t.uniform1iv(this.addr,e)}function Qw(t,e){t.uniform2iv(this.addr,e)}function Jw(t,e){t.uniform3iv(this.addr,e)}function eM(t,e){t.uniform4iv(this.addr,e)}function tM(t,e){t.uniform1uiv(this.addr,e)}function nM(t,e){t.uniform2uiv(this.addr,e)}function iM(t,e){t.uniform3uiv(this.addr,e)}function rM(t,e){t.uniform4uiv(this.addr,e)}function sM(t,e,n){const i=e.length,r=Gl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Tg,r[s])}function oM(t,e,n){const i=e.length,r=Gl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Lg,r[s])}function aM(t,e,n){const i=e.length,r=Gl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||Pg,r[s])}function lM(t,e,n){const i=e.length,r=Gl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Ag,r[s])}function uM(t){switch(t){case 5126:return Ww;case 35664:return jw;case 35665:return $w;case 35666:return Xw;case 35674:return qw;case 35675:return Yw;case 35676:return Zw;case 5124:case 35670:return Kw;case 35667:case 35671:return Qw;case 35668:case 35672:return Jw;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Hw(n.type)}}class dM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=uM(n.type)}}class fM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function ip(t,e){t.seq.push(e),t.map[e.id]=e}function hM(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ip(n,u===void 0?new cM(a,t,e):new dM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new fM(a),ip(n,d)),n=d}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function rp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let pM=0;function mM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gM(t){switch(t){case wr:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function sp(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mM(t.getShaderSource(e),o)}else return r}function vM(t,e){const n=gM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function _M(t,e){let n;switch(e){case Ox:n="Linear";break;case Ux:n="Reinhard";break;case Bx:n="OptimizedCineon";break;case Vx:n="ACESFilmic";break;case Gx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xM(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lo).join(`
`)}function yM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function lo(t){return t!==""}function op(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ap(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace(wM,MM)}function MM(t,e){const n=De[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Uc(n)}const EM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(t){return t.replace(CM,Rg).replace(EM,bM)}function bM(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Rg(t,e,n,i)}function Rg(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function up(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ao&&(e="SHADOWMAP_TYPE_VSM"),e}function AM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case bs:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function PM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case Fx:e="ENVMAP_BLENDING_MIX";break;case Nx:e="ENVMAP_BLENDING_ADD";break}return e}function RM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function DM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TM(n),u=AM(n),c=LM(n),d=PM(n),f=RM(n),g=n.isWebGL2?"":xM(n),_=yM(s),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[_].filter(lo).join(`
`),h.length>0&&(h+=`
`),m=[g,_].filter(lo).join(`
`),m.length>0&&(m+=`
`)):(h=[up(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),m=[g,up(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?De.tonemapping_pars_fragment:"",n.toneMapping!==ui?_M("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,vM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),o=Uc(o),o=op(o,n),o=ap(o,n),a=Uc(a),a=op(a,n),a=ap(a,n),o=lp(o),a=lp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+h+o,S=v+m+a,w=rp(r,35633,y),C=rp(r,35632,S);if(r.attachShader(p,w),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(w).trim(),k=r.getShaderInfoLog(C).trim();let te=!0,Q=!0;if(r.getProgramParameter(p,35714)===!1){te=!1;const O=sp(r,w,"vertex"),j=sp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+O+`
`+j)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||k==="")&&(Q=!1);Q&&(this.diagnostics={runnable:te,programLog:b,vertexShader:{log:P,prefix:h},fragmentShader:{log:k,prefix:m}})}r.deleteShader(w),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ya(r,p)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=SM(r,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}let IM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new kM(e);n.set(e,i)}return n.get(e)}}class kM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function FM(t,e,n,i,r,s,o){const a=new Sg,l=new zM,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,b,P,k,te){const Q=k.fog,O=te.geometry,j=x.isMeshStandardMaterial?k.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||j),Z=!!H&&H.mapping===Ol?H.image.height:null,D=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const I=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=I!==void 0?I.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let F,B,$,se;if(D){const ye=Hn[D];F=ye.vertexShader,B=ye.fragmentShader}else F=x.vertexShader,B=x.fragmentShader,l.update(x),$=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const T=t.getRenderTarget(),ve=x.alphaTest>0,q=x.clearcoat>0,ge=x.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:x.type,vertexShader:F,fragmentShader:B,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:f,outputEncoding:T===null?t.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:wr,map:!!x.map,matcap:!!x.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===l1,tangentSpaceNormalMap:x.normalMapType===a1,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===tt,clearcoat:q,clearcoatMap:q&&!!x.clearcoatMap,clearcoatRoughnessMap:q&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:q&&!!x.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!x.iridescenceMap,iridescenceThicknessMap:ge&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===vs,alphaMap:!!x.alphaMap,alphaTest:ve,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Q,useFog:x.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:ui,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yr,flipSided:x.side===In,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(b,x),v(b,x),b.push(t.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),x.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),x.push(a.mask)}function y(x){const b=_[x.type];let P;if(b){const k=Hn[b];P=E1.clone(k.uniforms)}else P=x.uniforms;return P}function S(x,b){let P;for(let k=0,te=u.length;k<te;k++){const Q=u[k];if(Q.cacheKey===b){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new DM(t,b,x,s),u.push(P)),P}function w(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:L}}function NM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function OM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,_,p,h){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:p,group:h},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=p,m.group=h),e++,m}function a(d,f,g,_,p,h){const m=o(d,f,g,_,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,_,p,h){const m=o(d,f,g,_,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||OM),i.length>1&&i.sort(f||cp),r.length>1&&r.sort(f||cp)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function UM(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new dp,t.set(i,[s])):r>=t.get(i).length?(s=new dp,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function BM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new R,color:new He};break;case"SpotLight":n={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function VM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GM=0;function HM(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function WM(t,e){const n=new BM,i=VM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new it,a=new it;function l(c,d){let f=0,g=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let p=0,h=0,m=0,v=0,y=0,S=0,w=0,C=0;c.sort(HM);const L=d!==!0?Math.PI:1;for(let b=0,P=c.length;b<P;b++){const k=c[b],te=k.color,Q=k.intensity,O=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=te.r*Q*L,g+=te.g*Q*L,_+=te.b*Q*L;else if(k.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],Q);else if(k.isDirectionalLight){const H=n.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const Z=k.shadow,D=i.get(k);D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,r.directionalShadow[p]=D,r.directionalShadowMap[p]=j,r.directionalShadowMatrix[p]=k.shadow.matrix,S++}r.directional[p]=H,p++}else if(k.isSpotLight){const H=n.get(k);if(H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(te).multiplyScalar(Q*L),H.distance=O,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,k.castShadow){const Z=k.shadow,D=i.get(k);D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,r.spotShadow[m]=D,r.spotShadowMap[m]=j,r.spotShadowMatrix[m]=k.shadow.matrix,C++}r.spot[m]=H,m++}else if(k.isRectAreaLight){const H=n.get(k);H.color.copy(te).multiplyScalar(Q),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=H,v++}else if(k.isPointLight){const H=n.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity*L),H.distance=k.distance,H.decay=k.decay,k.castShadow){const Z=k.shadow,D=i.get(k);D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,D.shadowCameraNear=Z.camera.near,D.shadowCameraFar=Z.camera.far,r.pointShadow[h]=D,r.pointShadowMap[h]=j,r.pointShadowMatrix[h]=k.shadow.matrix,w++}r.point[h]=H,h++}else if(k.isHemisphereLight){const H=n.get(k);H.skyColor.copy(k.color).multiplyScalar(Q*L),H.groundColor.copy(k.groundColor).multiplyScalar(Q*L),r.hemi[y]=H,y++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=_;const x=r.hash;(x.directionalLength!==p||x.pointLength!==h||x.spotLength!==m||x.rectAreaLength!==v||x.hemiLength!==y||x.numDirectionalShadows!==S||x.numPointShadows!==w||x.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=C,x.directionalLength=p,x.pointLength=h,x.spotLength=m,x.rectAreaLength=v,x.hemiLength=y,x.numDirectionalShadows=S,x.numPointShadows=w,x.numSpotShadows=C,r.version=GM++)}function u(c,d){let f=0,g=0,_=0,p=0,h=0;const m=d.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function fp(t,e){const n=new WM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function jM(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new fp(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new fp(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class $M extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function ZM(t,e,n){let i=new $d;const r=new Ce,s=new Ce,o=new _t,a=new $M({depthPacking:o1}),l=new XM,u={},c=n.maxTextureSize,d={0:In,1:bo,2:yr},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:qM,fragmentShader:YM}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Yn;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new si(_,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug,this.render=function(S,w,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const L=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Ii),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let k=0,te=S.length;k<te;k++){const Q=S[k],O=Q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const j=O.getFrameExtents();if(r.multiply(j),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,O.mapSize.y=s.y)),O.map===null){const Z=this.type!==ao?{minFilter:$t,magFilter:$t}:{};O.map=new Mr(r.x,r.y,Z),O.map.texture.name=Q.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const H=O.getViewportCount();for(let Z=0;Z<H;Z++){const D=O.getViewport(Z);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),P.viewport(o),O.updateMatrices(Q,Z),i=O.getFrustum(),y(w,C,O.camera,Q,this.type)}O.isPointLightShadow!==!0&&this.type===ao&&m(O,C),O.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(L,x,b)};function m(S,w){const C=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Mr(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,C,f,p,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,C,g,p,null)}function v(S,w,C,L,x,b){let P=null;const k=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0?P=k:P=C.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const te=P.uuid,Q=w.uuid;let O=u[te];O===void 0&&(O={},u[te]=O);let j=O[Q];j===void 0&&(j=P.clone(),O[Q]=j),P=j}return P.visible=w.visible,P.wireframe=w.wireframe,b===ao?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=L,P.farDistance=x),P}function y(S,w,C,L,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ao)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const k=e.update(S),te=S.material;if(Array.isArray(te)){const Q=k.groups;for(let O=0,j=Q.length;O<j;O++){const H=Q[O],Z=te[H.materialIndex];if(Z&&Z.visible){const D=v(S,Z,L,C.near,C.far,x);t.renderBufferDirect(C,null,k,D,S,H)}}}else if(te.visible){const Q=v(S,te,L,C.near,C.far,x);t.renderBufferDirect(C,null,k,Q,S,null)}}const P=S.children;for(let k=0,te=P.length;k<te;k++)y(P[k],w,C,L,x)}}function KM(t,e,n){const i=n.isWebGL2;function r(){let z=!1;const pe=new _t;let Y=null;const fe=new _t(0,0,0,0);return{setMask:function(de){Y!==de&&!z&&(t.colorMask(de,de,de,de),Y=de)},setLocked:function(de){z=de},setClear:function(de,Ve,yt,dt,gi){gi===!0&&(de*=dt,Ve*=dt,yt*=dt),pe.set(de,Ve,yt,dt),fe.equals(pe)===!1&&(t.clearColor(de,Ve,yt,dt),fe.copy(pe))},reset:function(){z=!1,Y=null,fe.set(-1,0,0,0)}}}function s(){let z=!1,pe=null,Y=null,fe=null;return{setTest:function(de){de?ve(2929):q(2929)},setMask:function(de){pe!==de&&!z&&(t.depthMask(de),pe=de)},setFunc:function(de){if(Y!==de){if(de)switch(de){case Lx:t.depthFunc(512);break;case Px:t.depthFunc(519);break;case Rx:t.depthFunc(513);break;case Rc:t.depthFunc(515);break;case Dx:t.depthFunc(514);break;case Ix:t.depthFunc(518);break;case zx:t.depthFunc(516);break;case kx:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);Y=de}},setLocked:function(de){z=de},setClear:function(de){fe!==de&&(t.clearDepth(de),fe=de)},reset:function(){z=!1,pe=null,Y=null,fe=null}}}function o(){let z=!1,pe=null,Y=null,fe=null,de=null,Ve=null,yt=null,dt=null,gi=null;return{setTest:function(ot){z||(ot?ve(2960):q(2960))},setMask:function(ot){pe!==ot&&!z&&(t.stencilMask(ot),pe=ot)},setFunc:function(ot,Zn,dn){(Y!==ot||fe!==Zn||de!==dn)&&(t.stencilFunc(ot,Zn,dn),Y=ot,fe=Zn,de=dn)},setOp:function(ot,Zn,dn){(Ve!==ot||yt!==Zn||dt!==dn)&&(t.stencilOp(ot,Zn,dn),Ve=ot,yt=Zn,dt=dn)},setLocked:function(ot){z=ot},setClear:function(ot){gi!==ot&&(t.clearStencil(ot),gi=ot)},reset:function(){z=!1,pe=null,Y=null,fe=null,de=null,Ve=null,yt=null,dt=null,gi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},_=new WeakMap,p=[],h=null,m=!1,v=null,y=null,S=null,w=null,C=null,L=null,x=null,b=!1,P=null,k=null,te=null,Q=null,O=null;const j=t.getParameter(35661);let H=!1,Z=0;const D=t.getParameter(7938);D.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(D)[1]),H=Z>=1):D.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),H=Z>=2);let I=null,U={};const K=t.getParameter(3088),F=t.getParameter(2978),B=new _t().fromArray(K),$=new _t().fromArray(F);function se(z,pe,Y){const fe=new Uint8Array(4),de=t.createTexture();t.bindTexture(z,de),t.texParameteri(z,10241,9728),t.texParameteri(z,10240,9728);for(let Ve=0;Ve<Y;Ve++)t.texImage2D(pe+Ve,0,6408,1,1,0,6408,5121,fe);return de}const T={};T[3553]=se(3553,3553,1),T[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(2929),l.setFunc(Rc),Be(!1),Te(nh),ve(2884),Ue(Ii);function ve(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function q(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function ge(z,pe){return g[z]!==pe?(t.bindFramebuffer(z,pe),g[z]=pe,i&&(z===36009&&(g[36160]=pe),z===36160&&(g[36009]=pe)),!0):!1}function ie(z,pe){let Y=p,fe=!1;if(z)if(Y=_.get(pe),Y===void 0&&(Y=[],_.set(pe,Y)),z.isWebGLMultipleRenderTargets){const de=z.texture;if(Y.length!==de.length||Y[0]!==36064){for(let Ve=0,yt=de.length;Ve<yt;Ve++)Y[Ve]=36064+Ve;Y.length=de.length,fe=!0}}else Y[0]!==36064&&(Y[0]=36064,fe=!0);else Y[0]!==1029&&(Y[0]=1029,fe=!0);fe&&(n.isWebGL2?t.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function ye(z){return h!==z?(t.useProgram(z),h=z,!0):!1}const ae={[ns]:32774,[_x]:32778,[xx]:32779};if(i)ae[oh]=32775,ae[ah]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(ae[oh]=z.MIN_EXT,ae[ah]=z.MAX_EXT)}const he={[yx]:0,[Sx]:1,[wx]:768,[cg]:770,[Ax]:776,[bx]:774,[Ex]:772,[Mx]:769,[dg]:771,[Tx]:775,[Cx]:773};function Ue(z,pe,Y,fe,de,Ve,yt,dt){if(z===Ii){m===!0&&(q(3042),m=!1);return}if(m===!1&&(ve(3042),m=!0),z!==vx){if(z!==v||dt!==b){if((y!==ns||C!==ns)&&(t.blendEquation(32774),y=ns,C=ns),dt)switch(z){case vs:t.blendFuncSeparate(1,771,1,771);break;case ih:t.blendFunc(1,1);break;case rh:t.blendFuncSeparate(0,769,0,1);break;case sh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case vs:t.blendFuncSeparate(770,771,1,771);break;case ih:t.blendFunc(770,1);break;case rh:t.blendFuncSeparate(0,769,0,1);break;case sh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,w=null,L=null,x=null,v=z,b=dt}return}de=de||pe,Ve=Ve||Y,yt=yt||fe,(pe!==y||de!==C)&&(t.blendEquationSeparate(ae[pe],ae[de]),y=pe,C=de),(Y!==S||fe!==w||Ve!==L||yt!==x)&&(t.blendFuncSeparate(he[Y],he[fe],he[Ve],he[yt]),S=Y,w=fe,L=Ve,x=yt),v=z,b=null}function Ee(z,pe){z.side===yr?q(2884):ve(2884);let Y=z.side===In;pe&&(Y=!Y),Be(Y),z.blending===vs&&z.transparent===!1?Ue(Ii):Ue(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const fe=z.stencilWrite;u.setTest(fe),fe&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ve(32926):q(32926)}function Be(z){P!==z&&(z?t.frontFace(2304):t.frontFace(2305),P=z)}function Te(z){z!==hx?(ve(2884),z!==k&&(z===nh?t.cullFace(1029):z===px?t.cullFace(1028):t.cullFace(1032))):q(2884),k=z}function ke(z){z!==te&&(H&&t.lineWidth(z),te=z)}function Fe(z,pe,Y){z?(ve(32823),(Q!==pe||O!==Y)&&(t.polygonOffset(pe,Y),Q=pe,O=Y)):q(32823)}function Ye(z){z?ve(3089):q(3089)}function Ft(z){z===void 0&&(z=33984+j-1),I!==z&&(t.activeTexture(z),I=z)}function A(z,pe){I===null&&Ft();let Y=U[I];Y===void 0&&(Y={type:void 0,texture:void 0},U[I]=Y),(Y.type!==z||Y.texture!==pe)&&(t.bindTexture(z,pe||T[z]),Y.type=z,Y.texture=pe)}function M(){const z=U[I];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function N(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(z){B.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),B.copy(z))}function xe(z){$.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function Le(z,pe){let Y=d.get(pe);Y===void 0&&(Y=new WeakMap,d.set(pe,Y));let fe=Y.get(z);fe===void 0&&(fe=t.getUniformBlockIndex(pe,z.name),Y.set(z,fe))}function We(z,pe){const fe=d.get(pe).get(z);c.get(z)!==fe&&(t.uniformBlockBinding(pe,fe,z.__bindingPointIndex),c.set(z,fe))}function ct(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},I=null,U={},g={},_=new WeakMap,p=[],h=null,m=!1,v=null,y=null,S=null,w=null,C=null,L=null,x=null,b=!1,P=null,k=null,te=null,Q=null,O=null,B.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:q,bindFramebuffer:ge,drawBuffers:ie,useProgram:ye,setBlending:Ue,setMaterial:Ee,setFlipSided:Be,setCullFace:Te,setLineWidth:ke,setPolygonOffset:Fe,setScissorTest:Ye,activeTexture:Ft,bindTexture:A,unbindTexture:M,compressedTexImage2D:N,texImage2D:we,texImage3D:_e,updateUBOMapping:Le,uniformBlockBinding:We,texStorage2D:Me,texStorage3D:X,texSubImage2D:J,texSubImage3D:oe,compressedTexSubImage2D:ce,scissor:Se,viewport:xe,reset:ct}}function QM(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return m?new OffscreenCanvas(A,M):Ao("canvas")}function y(A,M,N,J){let oe=1;if((A.width>J||A.height>J)&&(oe=J/Math.max(A.width,A.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=M?Oc:Math.floor,Me=ce(oe*A.width),X=ce(oe*A.height);p===void 0&&(p=v(Me,X));const we=N?v(Me,X):p;return we.width=Me,we.height=X,we.getContext("2d").drawImage(A,0,0,Me,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+X+")."),we}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Ih(A.width)&&Ih(A.height)}function w(A){return a?!1:A.wrapS!==Rn||A.wrapT!==Rn||A.minFilter!==$t&&A.minFilter!==pn}function C(A,M){return A.generateMipmaps&&M&&A.minFilter!==$t&&A.minFilter!==pn}function L(A){t.generateMipmap(A)}function x(A,M,N,J,oe=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=M;return M===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),M===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),M===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=J===tt&&oe===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function b(A,M,N){return C(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){return A===$t||A===lh||A===uh?9728:9729}function k(A){const M=A.target;M.removeEventListener("dispose",k),Q(M),M.isVideoTexture&&_.delete(M)}function te(A){const M=A.target;M.removeEventListener("dispose",te),j(M)}function Q(A){const M=i.get(A);if(M.__webglInit===void 0)return;const N=A.source,J=h.get(N);if(J){const oe=J[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&O(A),Object.keys(J).length===0&&h.delete(N)}i.remove(A)}function O(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const N=A.source,J=h.get(N);delete J[M.__cacheKey],o.memory.textures--}function j(A){const M=A.texture,N=i.get(A),J=i.get(M);if(J.__webglTexture!==void 0&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)t.deleteFramebuffer(N.__webglFramebuffer[oe]),N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[oe]);else{if(t.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let oe=0;oe<N.__webglColorRenderbuffer.length;oe++)N.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[oe]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let oe=0,ce=M.length;oe<ce;oe++){const Me=i.get(M[oe]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(A)}let H=0;function Z(){H=0}function D(){const A=H;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),H+=1,A}function I(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function U(A,M){const N=i.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,A,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,N.__webglTexture)}function K(A,M){const N=i.get(A);if(A.version>0&&N.__version!==A.version){q(N,A,M);return}n.activeTexture(33984+M),n.bindTexture(35866,N.__webglTexture)}function F(A,M){const N=i.get(A);if(A.version>0&&N.__version!==A.version){q(N,A,M);return}n.activeTexture(33984+M),n.bindTexture(32879,N.__webglTexture)}function B(A,M){const N=i.get(A);if(A.version>0&&N.__version!==A.version){ge(N,A,M);return}n.activeTexture(33984+M),n.bindTexture(34067,N.__webglTexture)}const $={[zc]:10497,[Rn]:33071,[kc]:33648},se={[$t]:9728,[lh]:9984,[uh]:9986,[pn]:9729,[Hx]:9985,[Ul]:9987};function T(A,M,N){if(N?(t.texParameteri(A,10242,$[M.wrapS]),t.texParameteri(A,10243,$[M.wrapT]),(A===32879||A===35866)&&t.texParameteri(A,32882,$[M.wrapR]),t.texParameteri(A,10240,se[M.magFilter]),t.texParameteri(A,10241,se[M.minFilter])):(t.texParameteri(A,10242,33071),t.texParameteri(A,10243,33071),(A===32879||A===35866)&&t.texParameteri(A,32882,33071),(M.wrapS!==Rn||M.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,10240,P(M.magFilter)),t.texParameteri(A,10241,P(M.minFilter)),M.minFilter!==$t&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ve(A,M){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",k));const J=M.source;let oe=h.get(J);oe===void 0&&(oe={},h.set(J,oe));const ce=I(M);if(ce!==A.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),oe[ce].usedTimes++;const Me=oe[A.__cacheKey];Me!==void 0&&(oe[A.__cacheKey].usedTimes--,Me.usedTimes===0&&O(M)),A.__cacheKey=ce,A.__webglTexture=oe[ce].texture}return N}function q(A,M,N){let J=3553;M.isDataArrayTexture&&(J=35866),M.isData3DTexture&&(J=32879);const oe=ve(A,M),ce=M.source;if(n.activeTexture(33984+N),n.bindTexture(J,A.__webglTexture),ce.version!==ce.__currentVersion||oe===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Me=w(M)&&S(M.image)===!1;let X=y(M.image,Me,!1,c);X=Ft(M,X);const we=S(X)||a,_e=s.convert(M.format,M.encoding);let Se=s.convert(M.type),xe=x(M.internalFormat,_e,Se,M.encoding,M.isVideoTexture);T(J,M,we);let Le;const We=M.mipmaps,ct=a&&M.isVideoTexture!==!0,z=ce.__currentVersion===void 0||oe===!0,pe=b(M,X,we);if(M.isDepthTexture)xe=6402,a?M.type===or?xe=36012:M.type===sr?xe=33190:M.type===_s?xe=35056:xe=33189:M.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fr&&xe===6402&&M.type!==pg&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,Se=s.convert(M.type)),M.format===Ts&&xe===6402&&(xe=34041,M.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_s,Se=s.convert(M.type))),z&&(ct?n.texStorage2D(3553,1,xe,X.width,X.height):n.texImage2D(3553,0,xe,X.width,X.height,0,_e,Se,null));else if(M.isDataTexture)if(We.length>0&&we){ct&&z&&n.texStorage2D(3553,pe,xe,We[0].width,We[0].height);for(let Y=0,fe=We.length;Y<fe;Y++)Le=We[Y],ct?n.texSubImage2D(3553,Y,0,0,Le.width,Le.height,_e,Se,Le.data):n.texImage2D(3553,Y,xe,Le.width,Le.height,0,_e,Se,Le.data);M.generateMipmaps=!1}else ct?(z&&n.texStorage2D(3553,pe,xe,X.width,X.height),n.texSubImage2D(3553,0,0,0,X.width,X.height,_e,Se,X.data)):n.texImage2D(3553,0,xe,X.width,X.height,0,_e,Se,X.data);else if(M.isCompressedTexture){ct&&z&&n.texStorage2D(3553,pe,xe,We[0].width,We[0].height);for(let Y=0,fe=We.length;Y<fe;Y++)Le=We[Y],M.format!==$n?_e!==null?ct?n.compressedTexSubImage2D(3553,Y,0,0,Le.width,Le.height,_e,Le.data):n.compressedTexImage2D(3553,Y,xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage2D(3553,Y,0,0,Le.width,Le.height,_e,Se,Le.data):n.texImage2D(3553,Y,xe,Le.width,Le.height,0,_e,Se,Le.data)}else if(M.isDataArrayTexture)ct?(z&&n.texStorage3D(35866,pe,xe,X.width,X.height,X.depth),n.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,_e,Se,X.data)):n.texImage3D(35866,0,xe,X.width,X.height,X.depth,0,_e,Se,X.data);else if(M.isData3DTexture)ct?(z&&n.texStorage3D(32879,pe,xe,X.width,X.height,X.depth),n.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,_e,Se,X.data)):n.texImage3D(32879,0,xe,X.width,X.height,X.depth,0,_e,Se,X.data);else if(M.isFramebufferTexture){if(z)if(ct)n.texStorage2D(3553,pe,xe,X.width,X.height);else{let Y=X.width,fe=X.height;for(let de=0;de<pe;de++)n.texImage2D(3553,de,xe,Y,fe,0,_e,Se,null),Y>>=1,fe>>=1}}else if(We.length>0&&we){ct&&z&&n.texStorage2D(3553,pe,xe,We[0].width,We[0].height);for(let Y=0,fe=We.length;Y<fe;Y++)Le=We[Y],ct?n.texSubImage2D(3553,Y,0,0,_e,Se,Le):n.texImage2D(3553,Y,xe,_e,Se,Le);M.generateMipmaps=!1}else ct?(z&&n.texStorage2D(3553,pe,xe,X.width,X.height),n.texSubImage2D(3553,0,0,0,_e,Se,X)):n.texImage2D(3553,0,xe,_e,Se,X);C(M,we)&&L(J),ce.__currentVersion=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ge(A,M,N){if(M.image.length!==6)return;const J=ve(A,M),oe=M.source;if(n.activeTexture(33984+N),n.bindTexture(34067,A.__webglTexture),oe.version!==oe.__currentVersion||J===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,X=[];for(let Y=0;Y<6;Y++)!ce&&!Me?X[Y]=y(M.image[Y],!1,!0,u):X[Y]=Me?M.image[Y].image:M.image[Y],X[Y]=Ft(M,X[Y]);const we=X[0],_e=S(we)||a,Se=s.convert(M.format,M.encoding),xe=s.convert(M.type),Le=x(M.internalFormat,Se,xe,M.encoding),We=a&&M.isVideoTexture!==!0,ct=oe.__currentVersion===void 0||J===!0;let z=b(M,we,_e);T(34067,M,_e);let pe;if(ce){We&&ct&&n.texStorage2D(34067,z,Le,we.width,we.height);for(let Y=0;Y<6;Y++){pe=X[Y].mipmaps;for(let fe=0;fe<pe.length;fe++){const de=pe[fe];M.format!==$n?Se!==null?We?n.compressedTexSubImage2D(34069+Y,fe,0,0,de.width,de.height,Se,de.data):n.compressedTexImage2D(34069+Y,fe,Le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?n.texSubImage2D(34069+Y,fe,0,0,de.width,de.height,Se,xe,de.data):n.texImage2D(34069+Y,fe,Le,de.width,de.height,0,Se,xe,de.data)}}}else{pe=M.mipmaps,We&&ct&&(pe.length>0&&z++,n.texStorage2D(34067,z,Le,X[0].width,X[0].height));for(let Y=0;Y<6;Y++)if(Me){We?n.texSubImage2D(34069+Y,0,0,0,X[Y].width,X[Y].height,Se,xe,X[Y].data):n.texImage2D(34069+Y,0,Le,X[Y].width,X[Y].height,0,Se,xe,X[Y].data);for(let fe=0;fe<pe.length;fe++){const Ve=pe[fe].image[Y].image;We?n.texSubImage2D(34069+Y,fe+1,0,0,Ve.width,Ve.height,Se,xe,Ve.data):n.texImage2D(34069+Y,fe+1,Le,Ve.width,Ve.height,0,Se,xe,Ve.data)}}else{We?n.texSubImage2D(34069+Y,0,0,0,Se,xe,X[Y]):n.texImage2D(34069+Y,0,Le,Se,xe,X[Y]);for(let fe=0;fe<pe.length;fe++){const de=pe[fe];We?n.texSubImage2D(34069+Y,fe+1,0,0,Se,xe,de.image[Y]):n.texImage2D(34069+Y,fe+1,Le,Se,xe,de.image[Y])}}}C(M,_e)&&L(34067),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ie(A,M,N,J,oe){const ce=s.convert(N.format,N.encoding),Me=s.convert(N.type),X=x(N.internalFormat,ce,Me,N.encoding);i.get(M).__hasExternalTextures||(oe===32879||oe===35866?n.texImage3D(oe,0,X,M.width,M.height,M.depth,0,ce,Me,null):n.texImage2D(oe,0,X,M.width,M.height,0,ce,Me,null)),n.bindFramebuffer(36160,A),Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,J,oe,i.get(N).__webglTexture,0,ke(M)):t.framebufferTexture2D(36160,J,oe,i.get(N).__webglTexture,0),n.bindFramebuffer(36160,null)}function ye(A,M,N){if(t.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(N||Fe(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===or?J=36012:oe.type===sr&&(J=33190));const ce=ke(M);Fe(M)?f.renderbufferStorageMultisampleEXT(36161,ce,J,M.width,M.height):t.renderbufferStorageMultisample(36161,ce,J,M.width,M.height)}else t.renderbufferStorage(36161,J,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const J=ke(M);N&&Fe(M)===!1?t.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):Fe(M)?f.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,A)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<J.length;oe++){const ce=J[oe],Me=s.convert(ce.format,ce.encoding),X=s.convert(ce.type),we=x(ce.internalFormat,Me,X,ce.encoding),_e=ke(M);N&&Fe(M)===!1?t.renderbufferStorageMultisample(36161,_e,we,M.width,M.height):Fe(M)?f.renderbufferStorageMultisampleEXT(36161,_e,we,M.width,M.height):t.renderbufferStorage(36161,we,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ae(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,oe=ke(M);if(M.depthTexture.format===fr)Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,oe):t.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===Ts)Fe(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,oe):t.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function he(A){const M=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,A)}else if(N){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=t.createRenderbuffer(),ye(M.__webglDepthbuffer[J],A,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ye(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(36160,null)}function Ue(A,M,N){const J=i.get(A);M!==void 0&&ie(J.__webglFramebuffer,A,A.texture,36064,3553),N!==void 0&&he(A)}function Ee(A){const M=A.texture,N=i.get(A),J=i.get(M);A.addEventListener("dispose",te),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++);const oe=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,Me=S(A)||a;if(oe){N.__webglFramebuffer=[];for(let X=0;X<6;X++)N.__webglFramebuffer[X]=t.createFramebuffer()}else{if(N.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const X=A.texture;for(let we=0,_e=X.length;we<_e;we++){const Se=i.get(X[we]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Fe(A)===!1){const X=ce?M:[M];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let we=0;we<X.length;we++){const _e=X[we];N.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(36161,N.__webglColorRenderbuffer[we]);const Se=s.convert(_e.format,_e.encoding),xe=s.convert(_e.type),Le=x(_e.internalFormat,Se,xe,_e.encoding),We=ke(A);t.renderbufferStorageMultisample(36161,We,Le,A.width,A.height),t.framebufferRenderbuffer(36160,36064+we,36161,N.__webglColorRenderbuffer[we])}t.bindRenderbuffer(36161,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(36160,null)}}if(oe){n.bindTexture(34067,J.__webglTexture),T(34067,M,Me);for(let X=0;X<6;X++)ie(N.__webglFramebuffer[X],A,M,36064,34069+X);C(M,Me)&&L(34067),n.unbindTexture()}else if(ce){const X=A.texture;for(let we=0,_e=X.length;we<_e;we++){const Se=X[we],xe=i.get(Se);n.bindTexture(3553,xe.__webglTexture),T(3553,Se,Me),ie(N.__webglFramebuffer,A,Se,36064+we,3553),C(Se,Me)&&L(3553)}n.unbindTexture()}else{let X=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?X=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(X,J.__webglTexture),T(X,M,Me),ie(N.__webglFramebuffer,A,M,36064,X),C(M,Me)&&L(X),n.unbindTexture()}A.depthBuffer&&he(A)}function Be(A){const M=S(A)||a,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,oe=N.length;J<oe;J++){const ce=N[J];if(C(ce,M)){const Me=A.isWebGLCubeRenderTarget?34067:3553,X=i.get(ce).__webglTexture;n.bindTexture(Me,X),L(Me),n.unbindTexture()}}}function Te(A){if(a&&A.samples>0&&Fe(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,J=A.height;let oe=16384;const ce=[],Me=A.stencilBuffer?33306:36096,X=i.get(A),we=A.isWebGLMultipleRenderTargets===!0;if(we)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+_e,36161,null),n.bindFramebuffer(36160,X.__webglFramebuffer),t.framebufferTexture2D(36009,36064+_e,3553,null,0);n.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,X.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){ce.push(36064+_e),A.depthBuffer&&ce.push(Me);const Se=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(Se===!1&&(A.depthBuffer&&(oe|=256),A.stencilBuffer&&(oe|=1024)),we&&t.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[_e]),Se===!0&&(t.invalidateFramebuffer(36008,[Me]),t.invalidateFramebuffer(36009,[Me])),we){const xe=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,xe,0)}t.blitFramebuffer(0,0,N,J,0,0,N,J,oe,9728),g&&t.invalidateFramebuffer(36008,ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),we)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+_e,36161,X.__webglColorRenderbuffer[_e]);const Se=i.get(M[_e]).__webglTexture;n.bindFramebuffer(36160,X.__webglFramebuffer),t.framebufferTexture2D(36009,36064+_e,3553,Se,0)}n.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}function ke(A){return Math.min(d,A.samples)}function Fe(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(A){const M=o.render.frame;_.get(A)!==M&&(_.set(A,M),A.update())}function Ft(A,M){const N=A.encoding,J=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Nc||N!==wr&&(N===tt?a===!1?e.has("EXT_sRGB")===!0&&J===$n?(A.format=Nc,A.minFilter=pn,A.generateMipmaps=!1):M=vg.sRGBToLinear(M):(J!==$n||oe!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=U,this.setTexture2DArray=K,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=Ue,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Fe}function JM(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Sr)return 5121;if(s===Xx)return 32819;if(s===qx)return 32820;if(s===Wx)return 5120;if(s===jx)return 5122;if(s===pg)return 5123;if(s===$x)return 5124;if(s===sr)return 5125;if(s===or)return 5126;if(s===To)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yx)return 6406;if(s===$n)return 6408;if(s===Kx)return 6409;if(s===Qx)return 6410;if(s===fr)return 6402;if(s===Ts)return 34041;if(s===Jx)return 6403;if(s===Zx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===e1)return 36244;if(s===t1)return 33319;if(s===n1)return 33320;if(s===i1)return 36249;if(s===wu||s===Mu||s===Eu||s===Cu)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===dh||s===fh||s===hh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ph||s===mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ph)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===mh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh||s===wh||s===Mh||s===Eh||s===Ch||s===bh||s===Th||s===Ah||s===Lh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_h)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ch)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Th)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ah)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Lh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ph)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class e2 extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t2={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new Ma;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class n2 extends yn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:fr,c!==fr&&c!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===fr&&(i=sr),i===void 0&&c===Ts&&(i=_s),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}class i2 extends Us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const _=n.getContextAttributes();let p=null,h=null;const m=[],v=[],y=new It;y.layers.enable(1),y.viewport=new _t;const S=new It;S.layers.enable(2),S.viewport=new _t;const w=[y,S],C=new e2;C.layers.enable(1),C.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let U=m[I];return U===void 0&&(U=new ec,m[I]=U),U.getTargetRaySpace()},this.getControllerGrip=function(I){let U=m[I];return U===void 0&&(U=new ec,m[I]=U),U.getGripSpace()},this.getHand=function(I){let U=m[I];return U===void 0&&(U=new ec,m[I]=U),U.getHandSpace()};function b(I){const U=v.indexOf(I.inputSource);if(U===-1)return;const K=m[U];K!==void 0&&K.dispatchEvent({type:I.type,data:I.inputSource})}function P(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",k);for(let I=0;I<m.length;I++){const U=v[I];U!==null&&(v[I]=null,m[I].disconnect(U))}L=null,x=null,e.setRenderTarget(p),f=null,d=null,c=null,r=null,h=null,D.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",P),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:f}),h=new Mr(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Sr,encoding:e.outputEncoding})}else{let U=null,K=null,F=null;_.depth&&(F=_.stencil?35056:33190,U=_.stencil?Ts:fr,K=_.stencil?_s:sr);const B={colorFormat:32856,depthFormat:F,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(B),r.updateRenderState({layers:[d]}),h=new Mr(d.textureWidth,d.textureHeight,{format:$n,type:Sr,depthTexture:new n2(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const $=e.properties.get(h);$.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(I){for(let U=0;U<I.removed.length;U++){const K=I.removed[U],F=v.indexOf(K);F>=0&&(v[F]=null,m[F].dispatchEvent({type:"disconnected",data:K}))}for(let U=0;U<I.added.length;U++){const K=I.added[U];let F=v.indexOf(K);if(F===-1){for(let $=0;$<m.length;$++)if($>=v.length){v.push(K),F=$;break}else if(v[$]===null){v[$]=K,F=$;break}if(F===-1)break}const B=m[F];B&&B.dispatchEvent({type:"connected",data:K})}}const te=new R,Q=new R;function O(I,U,K){te.setFromMatrixPosition(U.matrixWorld),Q.setFromMatrixPosition(K.matrixWorld);const F=te.distanceTo(Q),B=U.projectionMatrix.elements,$=K.projectionMatrix.elements,se=B[14]/(B[10]-1),T=B[14]/(B[10]+1),ve=(B[9]+1)/B[5],q=(B[9]-1)/B[5],ge=(B[8]-1)/B[0],ie=($[8]+1)/$[0],ye=se*ge,ae=se*ie,he=F/(-ge+ie),Ue=he*-ge;U.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ue),I.translateZ(he),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Ee=se+he,Be=T+he,Te=ye-Ue,ke=ae+(F-Ue),Fe=ve*T/Be*Ee,Ye=q*T/Be*Ee;I.projectionMatrix.makePerspective(Te,ke,Fe,Ye,Ee,Be)}function j(I,U){U===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(U.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;C.near=S.near=y.near=I.near,C.far=S.far=y.far=I.far,(L!==C.near||x!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,x=C.far);const U=I.parent,K=C.cameras;j(C,U);for(let B=0;B<K.length;B++)j(K[B],U);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),I.position.copy(C.position),I.quaternion.copy(C.quaternion),I.scale.copy(C.scale),I.matrix.copy(C.matrix),I.matrixWorld.copy(C.matrixWorld);const F=I.children;for(let B=0,$=F.length;B<$;B++)F[B].updateMatrixWorld(!0);K.length===2?O(C,y,S):C.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){d!==null&&(d.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let H=null;function Z(I,U){if(u=U.getViewerPose(l||o),g=U,u!==null){const K=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let F=!1;K.length!==C.cameras.length&&(C.cameras.length=0,F=!0);for(let B=0;B<K.length;B++){const $=K[B];let se=null;if(f!==null)se=f.getViewport($);else{const ve=c.getViewSubImage(d,$);se=ve.viewport,B===0&&(e.setRenderTargetTextures(h,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(h))}let T=w[B];T===void 0&&(T=new It,T.layers.enable(B),T.viewport=new _t,w[B]=T),T.matrix.fromArray($.transform.matrix),T.projectionMatrix.fromArray($.projectionMatrix),T.viewport.set(se.x,se.y,se.width,se.height),B===0&&C.matrix.copy(T.matrix),F===!0&&C.cameras.push(T)}}for(let K=0;K<m.length;K++){const F=v[K],B=m[K];F!==null&&B!==void 0&&B.update(F,U,l||o)}H&&H(I,U),g=null}const D=new bg;D.setAnimationLoop(Z),this.setAnimationLoop=function(I){H=I},this.dispose=function(){}}}function r2(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===In&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===In&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;h.aoMap?y=h.aoMap:h.lightMap&&(y=h.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===In&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function u(v,y){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",h));const w=y.program;i.updateUBOMapping(v,w);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function c(v){const y=d();v.__bindingPointIndex=y;const S=t.createBuffer(),w=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,w,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,y,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(35345,y);for(let C=0,L=S.length;C<L;C++){const x=S[C];if(g(x,C,w)===!0){const b=x.value,P=x.__offset;typeof b=="number"?(x.__data[0]=b,t.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):b.toArray(x.__data),t.bufferSubData(35345,P,x.__data))}}t.bindBuffer(35345,null)}function g(v,y,S){const w=v.value;if(S[y]===void 0)return typeof w=="number"?S[y]=w:S[y]=w.clone(),!0;if(typeof w=="number"){if(S[y]!==w)return S[y]=w,!0}else{const C=S[y];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const y=v.uniforms;let S=0;const w=16;let C=0;for(let L=0,x=y.length;L<x;L++){const b=y[L],P=p(b);if(b.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,L>0){C=S%w;const k=w-C;C!==0&&k-P.boundary<0&&(S+=w-C,b.__offset=S)}S+=P.storage}return C=S%w,C>0&&(S+=w-C),v.__size=S,v.__cache={},this}function p(v){const y=v.value,S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function h(v){const y=v.target;y.removeEventListener("dispose",h);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function o2(){const t=Ao("canvas");return t.style.display="block",t}function Dg(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:o2(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wr,this.physicallyCorrectLights=!1,this.toneMapping=ui,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,y=null,S=-1,w=null;const C=new _t,L=new _t;let x=null,b=e.width,P=e.height,k=1,te=null,Q=null;const O=new _t(0,0,b,P),j=new _t(0,0,b,P);let H=!1;const Z=new $d;let D=!1,I=!1,U=null;const K=new it,F=new Ce,B=new R,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return y===null?k:1}let T=n;function ve(E,V){for(let W=0;W<E.length;W++){const G=E[W],ee=e.getContext(G,V);if(ee!==null)return ee}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wd}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",ct,!1),T===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),T=ve(V,E),T===null)throw ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let q,ge,ie,ye,ae,he,Ue,Ee,Be,Te,ke,Fe,Ye,Ft,A,M,N,J,oe,ce,Me,X,we,_e;function Se(){q=new gw(T),ge=new cw(T,q,t),q.init(ge),X=new JM(T,q,ge),ie=new KM(T,q,ge),ye=new xw,ae=new NM,he=new QM(T,q,ie,ae,ge,X,ye),Ue=new fw(p),Ee=new mw(p),Be=new R1(T,ge),we=new lw(T,q,Be,ge),Te=new vw(T,Be,ye,we),ke=new Mw(T,Te,Be,ye),oe=new ww(T,ge,he),M=new dw(ae),Fe=new FM(p,Ue,Ee,q,ge,we,M),Ye=new r2(p,ae),Ft=new UM,A=new jM(q,ge),J=new aw(p,Ue,ie,ke,c,o),N=new ZM(p,ke,ge),_e=new s2(T,ye,ge,ie),ce=new uw(T,q,ye,ge),Me=new _w(T,q,ye,ge),ye.programs=Fe.programs,p.capabilities=ge,p.extensions=q,p.properties=ae,p.renderLists=Ft,p.shadowMap=N,p.state=ie,p.info=ye}Se();const xe=new i2(p,T);this.xr=xe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(b,P,!1))},this.getSize=function(E){return E.set(b,P)},this.setSize=function(E,V,W){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,P=V,e.width=Math.floor(E*k),e.height=Math.floor(V*k),W!==!1&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(b*k,P*k).floor()},this.setDrawingBufferSize=function(E,V,W){b=E,P=V,k=W,e.width=Math.floor(E*W),e.height=Math.floor(V*W),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,V,W,G){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,V,W,G),ie.viewport(C.copy(O).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,V,W,G){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,V,W,G),ie.scissor(L.copy(j).multiplyScalar(k).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(E){ie.setScissorTest(H=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(E=!0,V=!0,W=!0){let G=0;E&&(G|=16384),V&&(G|=256),W&&(G|=1024),T.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Ft.dispose(),A.dispose(),ae.dispose(),Ue.dispose(),Ee.dispose(),ke.dispose(),we.dispose(),_e.dispose(),Fe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ve),xe.removeEventListener("sessionend",yt),U&&(U.dispose(),U=null),dt.stop()};function Le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=ye.autoReset,V=N.enabled,W=N.autoUpdate,G=N.needsUpdate,ee=N.type;Se(),ye.autoReset=E,N.enabled=V,N.autoUpdate=W,N.needsUpdate=G,N.type=ee}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function z(E){const V=E.target;V.removeEventListener("dispose",z),pe(V)}function pe(E){Y(E),ae.remove(E)}function Y(E){const V=ae.get(E).programs;V!==void 0&&(V.forEach(function(W){Fe.releaseProgram(W)}),E.isShaderMaterial&&Fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,W,G,ee,be){V===null&&(V=$);const Ae=ee.isMesh&&ee.matrixWorld.determinant()<0,Re=a_(E,V,W,G,ee);ie.setMaterial(G,Ae);let Pe=W.index;const $e=W.attributes.position;if(Pe===null){if($e===void 0||$e.count===0)return}else if(Pe.count===0)return;let Ne=1;G.wireframe===!0&&(Pe=Te.getWireframeAttribute(W),Ne=2),we.setup(ee,G,Re,W,Pe);let Ge,at=ce;Pe!==null&&(Ge=Be.get(Pe),at=Me,at.setIndex(Ge));const Yi=Pe!==null?Pe.count:$e.count,Ir=W.drawRange.start*Ne,zr=W.drawRange.count*Ne,Bn=be!==null?be.start*Ne:0,je=be!==null?be.count*Ne:1/0,kr=Math.max(Ir,Bn),ht=Math.min(Yi,Ir+zr,Bn+je)-1,fn=Math.max(0,ht-kr+1);if(fn!==0){if(ee.isMesh)G.wireframe===!0?(ie.setLineWidth(G.wireframeLinewidth*se()),at.setMode(1)):at.setMode(4);else if(ee.isLine){let vi=G.linewidth;vi===void 0&&(vi=1),ie.setLineWidth(vi*se()),ee.isLineSegments?at.setMode(1):ee.isLineLoop?at.setMode(2):at.setMode(3)}else ee.isPoints?at.setMode(0):ee.isSprite&&at.setMode(4);if(ee.isInstancedMesh)at.renderInstances(kr,fn,ee.count);else if(W.isInstancedBufferGeometry){const vi=Math.min(W.instanceCount,W._maxInstanceCount);at.renderInstances(kr,fn,vi)}else at.render(kr,fn)}},this.compile=function(E,V){f=A.get(E),f.init(),_.push(f),E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(W){const G=W.material;if(G)if(Array.isArray(G))for(let ee=0;ee<G.length;ee++){const be=G[ee];mu(be,E,W)}else mu(G,E,W)}),_.pop(),f=null};let fe=null;function de(E){fe&&fe(E)}function Ve(){dt.stop()}function yt(){dt.start()}const dt=new bg;dt.setAnimationLoop(de),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){fe=E,xe.setAnimationLoop(E),E===null?dt.stop():dt.start()},xe.addEventListener("sessionstart",Ve),xe.addEventListener("sessionend",yt),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(V),V=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,V,y),f=A.get(E,_.length),f.init(),_.push(f),K.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(K),I=this.localClippingEnabled,D=M.init(this.clippingPlanes,I,V),d=Ft.get(E,g.length),d.init(),g.push(d),gi(E,V,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(te,Q),D===!0&&M.beginShadows();const W=f.state.shadowsArray;if(N.render(W,E,V),D===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(d,E),f.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const G=V.cameras;for(let ee=0,be=G.length;ee<be;ee++){const Ae=G[ee];ot(d,E,Ae,Ae.viewport)}}else ot(d,E,V);y!==null&&(he.updateMultisampleRenderTarget(y),he.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,V),we.resetDefaultState(),S=-1,w=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function gi(E,V,W,G){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const Ae=ke.update(E),Re=E.material;Re.visible&&d.push(E,Ae,Re,W,B.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ye.render.frame&&(E.skeleton.update(),E.skeleton.frame=ye.render.frame),!E.frustumCulled||Z.intersectsObject(E))){G&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const Ae=ke.update(E),Re=E.material;if(Array.isArray(Re)){const Pe=Ae.groups;for(let $e=0,Ne=Pe.length;$e<Ne;$e++){const Ge=Pe[$e],at=Re[Ge.materialIndex];at&&at.visible&&d.push(E,Ae,at,W,B.z,Ge)}}else Re.visible&&d.push(E,Ae,Re,W,B.z,null)}}const be=E.children;for(let Ae=0,Re=be.length;Ae<Re;Ae++)gi(be[Ae],V,W,G)}function ot(E,V,W,G){const ee=E.opaque,be=E.transmissive,Ae=E.transparent;f.setupLightsView(W),be.length>0&&Zn(ee,V,W),G&&ie.viewport(C.copy(G)),ee.length>0&&dn(ee,V,W),be.length>0&&dn(be,V,W),Ae.length>0&&dn(Ae,V,W),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Zn(E,V,W){const G=ge.isWebGL2;U===null&&(U=new Mr(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?To:Sr,minFilter:Ul,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(F),G?U.setSize(F.x,F.y):U.setSize(Oc(F.x),Oc(F.y));const ee=p.getRenderTarget();p.setRenderTarget(U),p.clear();const be=p.toneMapping;p.toneMapping=ui,dn(E,V,W),p.toneMapping=be,he.updateMultisampleRenderTarget(U),he.updateRenderTargetMipmap(U),p.setRenderTarget(ee)}function dn(E,V,W){const G=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,be=E.length;ee<be;ee++){const Ae=E[ee],Re=Ae.object,Pe=Ae.geometry,$e=G===null?Ae.material:G,Ne=Ae.group;Re.layers.test(W.layers)&&o_(Re,V,W,Pe,$e,Ne)}}function o_(E,V,W,G,ee,be){E.onBeforeRender(p,V,W,G,ee,be),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(p,V,W,G,E,be),ee.transparent===!0&&ee.side===yr?(ee.side=In,ee.needsUpdate=!0,p.renderBufferDirect(W,V,G,ee,E,be),ee.side=bo,ee.needsUpdate=!0,p.renderBufferDirect(W,V,G,ee,E,be),ee.side=yr):p.renderBufferDirect(W,V,G,ee,E,be),E.onAfterRender(p,V,W,G,ee,be)}function mu(E,V,W){V.isScene!==!0&&(V=$);const G=ae.get(E),ee=f.state.lights,be=f.state.shadowsArray,Ae=ee.state.version,Re=Fe.getParameters(E,ee.state,be,V,W),Pe=Fe.getProgramCacheKey(Re);let $e=G.programs;G.environment=E.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(E.isMeshStandardMaterial?Ee:Ue).get(E.envMap||G.environment),$e===void 0&&(E.addEventListener("dispose",z),$e=new Map,G.programs=$e);let Ne=$e.get(Pe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===Ae)return $f(E,Re),Ne}else Re.uniforms=Fe.getUniforms(E),E.onBuild(W,Re,p),E.onBeforeCompile(Re,p),Ne=Fe.acquireProgram(Re,Pe),$e.set(Pe,Ne),G.uniforms=Re.uniforms;const Ge=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=M.uniform),$f(E,Re),G.needsLights=u_(E),G.lightsStateVersion=Ae,G.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix);const at=Ne.getUniforms(),Yi=Ya.seqWithValue(at.seq,Ge);return G.currentProgram=Ne,G.uniformsList=Yi,Ne}function $f(E,V){const W=ae.get(E);W.outputEncoding=V.outputEncoding,W.instancing=V.instancing,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function a_(E,V,W,G,ee){V.isScene!==!0&&(V=$),he.resetTextureUnits();const be=V.fog,Ae=G.isMeshStandardMaterial?V.environment:null,Re=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wr,Pe=(G.isMeshStandardMaterial?Ee:Ue).get(G.envMap||Ae),$e=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!G.normalMap&&!!W.attributes.tangent,Ge=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Yi=!!W.morphAttributes.color,Ir=G.toneMapped?p.toneMapping:ui,zr=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Bn=zr!==void 0?zr.length:0,je=ae.get(G),kr=f.state.lights;if(D===!0&&(I===!0||E!==w)){const Qt=E===w&&G.id===S;M.setState(G,E,Qt)}let ht=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==kr.state.version||je.outputEncoding!==Re||ee.isInstancedMesh&&je.instancing===!1||!ee.isInstancedMesh&&je.instancing===!0||ee.isSkinnedMesh&&je.skinning===!1||!ee.isSkinnedMesh&&je.skinning===!0||je.envMap!==Pe||G.fog===!0&&je.fog!==be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==M.numPlanes||je.numIntersection!==M.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Ne||je.morphTargets!==Ge||je.morphNormals!==at||je.morphColors!==Yi||je.toneMapping!==Ir||ge.isWebGL2===!0&&je.morphTargetsCount!==Bn)&&(ht=!0):(ht=!0,je.__version=G.version);let fn=je.currentProgram;ht===!0&&(fn=mu(G,V,ee));let vi=!1,js=!1,gu=!1;const Nt=fn.getUniforms(),$s=je.uniforms;if(ie.useProgram(fn.program)&&(vi=!0,js=!0,gu=!0),G.id!==S&&(S=G.id,js=!0),vi||w!==E){if(Nt.setValue(T,"projectionMatrix",E.projectionMatrix),ge.logarithmicDepthBuffer&&Nt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,js=!0,gu=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Qt=Nt.map.cameraPosition;Qt!==void 0&&Qt.setValue(T,B.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&Nt.setValue(T,"viewMatrix",E.matrixWorldInverse)}if(ee.isSkinnedMesh){Nt.setOptional(T,ee,"bindMatrix"),Nt.setOptional(T,ee,"bindMatrixInverse");const Qt=ee.skeleton;Qt&&(ge.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Nt.setValue(T,"boneTexture",Qt.boneTexture,he),Nt.setValue(T,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vu=W.morphAttributes;if((vu.position!==void 0||vu.normal!==void 0||vu.color!==void 0&&ge.isWebGL2===!0)&&oe.update(ee,W,G,fn),(js||je.receiveShadow!==ee.receiveShadow)&&(je.receiveShadow=ee.receiveShadow,Nt.setValue(T,"receiveShadow",ee.receiveShadow)),js&&(Nt.setValue(T,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&l_($s,gu),be&&G.fog===!0&&Ye.refreshFogUniforms($s,be),Ye.refreshMaterialUniforms($s,G,k,P,U),Ya.upload(T,je.uniformsList,$s,he)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ya.upload(T,je.uniformsList,$s,he),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(T,"center",ee.center),Nt.setValue(T,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(T,"normalMatrix",ee.normalMatrix),Nt.setValue(T,"modelMatrix",ee.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qt=G.uniformsGroups;for(let _u=0,c_=Qt.length;_u<c_;_u++)if(ge.isWebGL2){const Xf=Qt[_u];_e.update(Xf,fn),_e.bind(Xf,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function l_(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function u_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,V,W){ae.get(E.texture).__webglTexture=V,ae.get(E.depthTexture).__webglTexture=W;const G=ae.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){const W=ae.get(E);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,W=0){y=E,m=V,v=W;let G=!0;if(E){const Pe=ae.get(E);Pe.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),G=!1):Pe.__webglFramebuffer===void 0?he.setupRenderTarget(E):Pe.__hasExternalTextures&&he.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture)}let ee=null,be=!1,Ae=!1;if(E){const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ae=!0);const $e=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ee=$e[V],be=!0):ge.isWebGL2&&E.samples>0&&he.useMultisampledRTT(E)===!1?ee=ae.get(E).__webglMultisampledFramebuffer:ee=$e,C.copy(E.viewport),L.copy(E.scissor),x=E.scissorTest}else C.copy(O).multiplyScalar(k).floor(),L.copy(j).multiplyScalar(k).floor(),x=H;if(ie.bindFramebuffer(36160,ee)&&ge.drawBuffers&&G&&ie.drawBuffers(E,ee),ie.viewport(C),ie.scissor(L),ie.setScissorTest(x),be){const Pe=ae.get(E.texture);T.framebufferTexture2D(36160,36064,34069+V,Pe.__webglTexture,W)}else if(Ae){const Pe=ae.get(E.texture),$e=V||0;T.framebufferTextureLayer(36160,36064,Pe.__webglTexture,W||0,$e)}S=-1},this.readRenderTargetPixels=function(E,V,W,G,ee,be,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){ie.bindFramebuffer(36160,Re);try{const Pe=E.texture,$e=Pe.format,Ne=Pe.type;if($e!==$n&&X.convert($e)!==T.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ne===To&&(q.has("EXT_color_buffer_half_float")||ge.isWebGL2&&q.has("EXT_color_buffer_float"));if(Ne!==Sr&&X.convert(Ne)!==T.getParameter(35738)&&!(Ne===or&&(ge.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-G&&W>=0&&W<=E.height-ee&&T.readPixels(V,W,G,ee,X.convert($e),X.convert(Ne),be)}finally{const Pe=y!==null?ae.get(y).__webglFramebuffer:null;ie.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,V,W=0){const G=Math.pow(2,-W),ee=Math.floor(V.image.width*G),be=Math.floor(V.image.height*G);he.setTexture2D(V,0),T.copyTexSubImage2D(3553,W,0,0,E.x,E.y,ee,be),ie.unbindTexture()},this.copyTextureToTexture=function(E,V,W,G=0){const ee=V.image.width,be=V.image.height,Ae=X.convert(W.format),Re=X.convert(W.type);he.setTexture2D(W,0),T.pixelStorei(37440,W.flipY),T.pixelStorei(37441,W.premultiplyAlpha),T.pixelStorei(3317,W.unpackAlignment),V.isDataTexture?T.texSubImage2D(3553,G,E.x,E.y,ee,be,Ae,Re,V.image.data):V.isCompressedTexture?T.compressedTexSubImage2D(3553,G,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):T.texSubImage2D(3553,G,E.x,E.y,Ae,Re,V.image),G===0&&W.generateMipmaps&&T.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(E,V,W,G,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Pe=X.convert(G.format),$e=X.convert(G.type);let Ne;if(G.isData3DTexture)he.setTexture3D(G,0),Ne=32879;else if(G.isDataArrayTexture)he.setTexture2DArray(G,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(37440,G.flipY),T.pixelStorei(37441,G.premultiplyAlpha),T.pixelStorei(3317,G.unpackAlignment);const Ge=T.getParameter(3314),at=T.getParameter(32878),Yi=T.getParameter(3316),Ir=T.getParameter(3315),zr=T.getParameter(32877),Bn=W.isCompressedTexture?W.mipmaps[0]:W.image;T.pixelStorei(3314,Bn.width),T.pixelStorei(32878,Bn.height),T.pixelStorei(3316,E.min.x),T.pixelStorei(3315,E.min.y),T.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?T.texSubImage3D(Ne,ee,V.x,V.y,V.z,be,Ae,Re,Pe,$e,Bn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(Ne,ee,V.x,V.y,V.z,be,Ae,Re,Pe,Bn.data)):T.texSubImage3D(Ne,ee,V.x,V.y,V.z,be,Ae,Re,Pe,$e,Bn),T.pixelStorei(3314,Ge),T.pixelStorei(32878,at),T.pixelStorei(3316,Yi),T.pixelStorei(3315,Ir),T.pixelStorei(32877,zr),ee===0&&G.generateMipmaps&&T.generateMipmap(Ne),ie.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?he.setTextureCube(E,0):E.isData3DTexture?he.setTexture3D(E,0):E.isDataArrayTexture?he.setTexture2DArray(E,0):he.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){m=0,v=0,y=null,ie.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class a2 extends Dg{}a2.prototype.isWebGL1Renderer=!0;class l2 extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class u2{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Fc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new R;class ll{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}setX(e,n){return this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new zn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ig extends Vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zr;const Zs=new R,Kr=new R,Qr=new R,Jr=new Ce,Ks=new Ce,zg=new it,Ea=new R,Qs=new R,Ca=new R,hp=new Ce,tc=new Ce,pp=new Ce;class c2 extends Tt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Yn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new u2(n,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new ll(i,3,0,!1)),Zr.setAttribute("uv",new ll(i,2,3,!1))}this.geometry=Zr,this.material=e!==void 0?e:new Ig,this.center=new Ce(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),zg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Qr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ba(Ea.set(-.5,-.5,0),Qr,o,Kr,r,s),ba(Qs.set(.5,-.5,0),Qr,o,Kr,r,s),ba(Ca.set(.5,.5,0),Qr,o,Kr,r,s),hp.set(0,0),tc.set(1,0),pp.set(1,1);let a=e.ray.intersectTriangle(Ea,Qs,Ca,!1,Zs);if(a===null&&(ba(Qs.set(-.5,.5,0),Qr,o,Kr,r,s),tc.set(0,1),a=e.ray.intersectTriangle(Ea,Ca,Qs,!1,Zs),a===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||n.push({distance:l,point:Zs.clone(),uv:Wn.getUV(Zs,Ea,Qs,Ca,hp,tc,pp,new Ce),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(t,e,n,i,r,s){Jr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ks.x=s*Jr.x-r*Jr.y,Ks.y=r*Jr.x+s*Jr.y):Ks.copy(Jr),t.copy(e),t.x+=Ks.x,t.y+=Ks.y,t.applyMatrix4(zg)}class kg extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mp=new R,gp=new R,vp=new it,nc=new yg,Ta=new Bl;class d2 extends Tt{constructor(e=new Yn,n=new kg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)mp.fromBufferAttribute(n,r-1),gp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=mp.distanceTo(gp);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;vp.copy(r).invert(),nc.copy(e.ray).applyMatrix4(vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new R,c=new R,d=new R,f=new R,g=this.isLineSegments?2:1,_=i.index,h=i.attributes.position;if(_!==null){const m=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let y=m,S=v-1;y<S;y+=g){const w=_.getX(y),C=_.getX(y+1);if(u.fromBufferAttribute(h,w),c.fromBufferAttribute(h,C),nc.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||n.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let y=m,S=v-1;y<S;y+=g){if(u.fromBufferAttribute(h,y),c.fromBufferAttribute(h,y+1),nc.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const _p=new R,xp=new R;class f2 extends d2{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)_p.fromBufferAttribute(n,r),xp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_p.distanceTo(xp);e.setAttribute("lineDistance",new kn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const yp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class h2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],_=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const p2=new h2;class Fg{constructor(e){this.manager=e!==void 0?e:p2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class m2 extends Fg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ao("img");function l(){c(),yp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class g2 extends Fg{constructor(e){super(e)}load(e,n,i,r){const s=new yn,o=new m2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ng extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class v2 extends Ng{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Sp=new it,wp=new R,Mp=new R;class _2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;wp.setFromMatrixPosition(e.matrixWorld),n.position.copy(wp),Mp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mp),n.updateMatrixWorld(),Sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x2 extends _2{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y2 extends Ng{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.shadow=new x2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S2 extends f2{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let f=0,g=0,_=-a;f<=n;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const p=f===s?i:r;p.toArray(u,g),g+=3,p.toArray(u,g),g+=3,p.toArray(u,g),g+=3,p.toArray(u,g),g+=3}const c=new Yn;c.setAttribute("position",new kn(l,3)),c.setAttribute("color",new kn(u,3));const d=new kg({vertexColors:!0,toneMapped:!1});super(c,d),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const es=new R,Ep=new it,Cp=new it,bp=new R,Tp=new R;class w2{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(g,_){g.autoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.updateMatrixWorld(),Ep.copy(_.matrixWorldInverse),Cp.multiplyMatrices(_.projectionMatrix,Ep),u(g,g,_),f(g)},this.setSize=function(g,_){i=g,r=_,s=i/2,o=r/2,l.style.width=g+"px",l.style.height=_+"px"};function u(g,_,p){if(g.isCSS2DObject){es.setFromMatrixPosition(g.matrixWorld),es.applyMatrix4(Cp);const h=g.visible===!0&&es.z>=-1&&es.z<=1&&g.layers.test(p.layers)===!0;if(g.element.style.display=h===!0?"":"none",h===!0){g.onBeforeRender(n,_,p);const v=g.element;v.style.transform="translate(-50%,-50%) translate("+(es.x*s+s)+"px,"+(-es.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),g.onAfterRender(n,_,p)}const m={distanceToCameraSquared:c(p,g)};a.objects.set(g,m)}for(let h=0,m=g.children.length;h<m;h++)u(g.children[h],_,p)}function c(g,_){return bp.setFromMatrixPosition(g.matrixWorld),Tp.setFromMatrixPosition(_.matrixWorld),bp.distanceToSquared(Tp)}function d(g){const _=[];return g.traverse(function(p){p.isCSS2DObject&&_.push(p)}),_}function f(g){const _=d(g).sort(function(h,m){if(h.renderOrder!==m.renderOrder)return m.renderOrder-h.renderOrder;const v=a.objects.get(h).distanceToCameraSquared,y=a.objects.get(m).distanceToCameraSquared;return v-y}),p=_.length;for(let h=0,m=_.length;h<m;h++)_[h].element.style.zIndex=p-h}}}class Ap{constructor(e,n,i){re(this,"camera");re(this,"domElement");re(this,"enabled");re(this,"screen");re(this,"rotateSpeed");re(this,"zoomSpeed");re(this,"panSpeed");re(this,"noRotate");re(this,"noZoom");re(this,"noPan");re(this,"staticMoving");re(this,"dynamicDampingFactor");re(this,"minDistance");re(this,"maxDistance");re(this,"keys");re(this,"mouseButtons");re(this,"target");re(this,"target0");re(this,"position0");re(this,"up0");re(this,"zoom0");re(this,"lastZoom");re(this,"EPS");re(this,"lastPosition");re(this,"_eye");re(this,"_movePrev");re(this,"_moveCurr");re(this,"_lastAxis");re(this,"_zoomStart");re(this,"_zoomEnd");re(this,"_panStart");re(this,"_panEnd");re(this,"_pointers");re(this,"_pointerPositions");re(this,"_state");re(this,"_touchZoomDistanceStart");re(this,"_touchZoomDistanceEnd");re(this,"_lastAngle");re(this,"context_menu");re(this,"pointer_down");re(this,"pointer_move");re(this,"pointer_up");re(this,"pointer_cancel");re(this,"mouse_wheel");re(this,"_rendDom");re(this,"_meshCenter");re(this,"_isRY",!0);n===void 0&&console.warn("TrackCameraCtrl: domElement is undefined."),n===document&&console.error('TrackCameraCtrl: Please use "renderer.domElement" instead.'),this._rendDom=i,this.camera=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=3,this.zoomSpeed=3,this.panSpeed=2.5,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!0,this.dynamicDampingFactor=20,this.minDistance=500,this.maxDistance=5e5,this.mouseButtons={LEFT:Su.ROTATE,MIDDLE:Su.DOLLY,RIGHT:Su.PAN},this.target=new R(0,1500,0),this.EPS=1e-6,this.lastPosition=new R,this.lastZoom=1,this._lastAngle=0,this._state=lt.NONE,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._eye=new R,this._movePrev=new Ce,this._moveCurr=new Ce,this._lastAxis=new R,this._zoomStart=new Ce,this._zoomEnd=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._pointers=[],this._pointerPositions={},this.target0=this.target.clone(),this.position0=this.camera.position.clone(),this.up0=this.camera.up.clone(),this.zoom0=this.camera.zoom,this.addEve(),this.handleResize(),this.update()}clearData(){this._rendDom=null,this.camera=null,this.domElement=null,this.screen=null,this.mouseButtons=null,this.target=null,this.lastPosition=null,this._eye=null,this._movePrev=null,this._moveCurr=null,this._lastAxis=null,this._zoomStart=null,this._zoomEnd=null,this._panStart=null,this._panEnd=null,this._pointers=null,this._pointerPositions=null,this.target0=null,this.position0=null,this.up0=null,this.context_menu=null,this.pointer_down=null,this.pointer_move=null,this.pointer_up=null,this.pointer_cancel=null,this.mouse_wheel=null}dispose(){this.removeEve(),this.clearData()}addEve(){console.log("track add eve"),this.context_menu=e=>{this.contextmenu(e)},this.pointer_down=e=>{this.onPointerDown(e)},this.pointer_move=e=>{this.onPointerMove(e)},this.pointer_up=e=>{this.onPointerUp(e)},this.pointer_cancel=e=>{this.onPointerCancel(e)},this.mouse_wheel=e=>{this.onMouseWheel(e)},this.domElement.addEventListener("contextmenu",this.context_menu),this.domElement.addEventListener("pointerdown",this.pointer_down),this.domElement.addEventListener("pointercancel",this.pointer_cancel),this.domElement.addEventListener("wheel",this.mouse_wheel,{passive:!1})}removeEve(){this.domElement.removeEventListener("contextmenu",this.context_menu),this.domElement.removeEventListener("pointerdown",this.pointer_down),this.domElement.removeEventListener("pointercancel",this.pointer_cancel),this.domElement.removeEventListener("wheel",this.mouse_wheel),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up)}handleResize(){this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight}getMouseOnScreen(e,n){let i=new Ce,r=(e-this.screen.left)/this.screen.width,s=(n-this.screen.top)/this.screen.height;return i.set(r,s),i}getMouseOnCircle(e,n){let i=new Ce,r=(e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),s=(this.screen.height+2*(this.screen.top-n))/this.screen.width;return i.set(r,s),i}rotateCamera(){let e=new R,n=new Bs,i=new R,r=new R,s=new R,o=new R;o.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let a=o.length();if(a){let u=this._moveCurr.clone().sub(this._movePrev.clone()).angle();if(this._isRY=u>Math.PI*.25&&u<Math.PI*.75||u>Math.PI*1.25&&u<Math.PI*1.75,this._eye.copy(this.camera.position).sub(this.target),i.copy(this._eye).normalize(),r.copy(this.camera.up).normalize(),s.crossVectors(r,i).normalize(),this._isRY?(s.setLength(0),r.setLength(this._moveCurr.y-this._movePrev.y)):(s.setLength(this._moveCurr.x-this._movePrev.x),r.setLength(0)),o.copy(r.add(s)),a*=this.rotateSpeed,this._isRY)e.crossVectors(o,this._eye).normalize();else{let c=this.camera.up.clone(),d=new R;c.y>1||c.y<-1?d.set(0,-1,0):d.set(0,1,0),e.copy(d),a=this._moveCurr.x-this._movePrev.x>0?-a:a}n.setFromAxisAngle(e,a),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)),this._lastAxis.copy(e),this._lastAngle=a}else!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.camera.position).sub(this.target),n.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(n),this.camera.up.applyQuaternion(n),this._meshCenter&&(this.target.sub(this._meshCenter).applyQuaternion(n),this.target.add(this._meshCenter)));this._movePrev.copy(this._moveCurr)}zoomCamera(){let e;this._state===lt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.camera instanceof It?this._eye.multiplyScalar(e):this.camera instanceof Pi?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.camera instanceof It?this._eye.multiplyScalar(e):this.camera instanceof Pi?(this.camera.zoom/=e,this.camera.updateProjectionMatrix()):console.warn("TrackCameraCtrl: undefine camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor),this._eye.length()/165}adjustCameraUp(e){e.y>0?this.camera.up.set(0,1,0):e.y<0?this.camera.up.set(0,-1,0):e.x>0?this.camera.up.set(1,0,0):e.x<0?this.camera.up.set(-1,0,0):e.z>0?this.camera.up.set(0,0,1):e.z<0&&this.camera.up.set(0,0,-1)}panCameraByKey(e=-1){let n=new R,i=new R,r=new R,s=this._eye.length()*this.panSpeed*.01;if(r.x=e===0?s:e===1?-s:0,r.y=e===2?s:e===3?-s:0,r.z=e===4?s:e===5?-s:0,r.x!==0&&n.copy(this._eye).cross(this.camera.up).setLength(r.x),r.y!==0){let o=new R(0,1,0);n.add(i.copy(o).setLength(r.y))}if(r.z!==0){let o=new R(-this._eye.x,0,-this._eye.z);n.add(i.copy(o).setLength(r.z))}this.camera.position.add(n),this.target.add(n),this.update()}panCamera(){let e=new Ce,n=new R,i=new R;if(e.copy(this._panEnd).sub(this._panStart),e.lengthSq()){if(this.camera instanceof Pi){const l=(this.camera.right-this.camera.left)/this.camera.zoom/this._rendDom.clientWidth,u=(this.camera.top-this.camera.bottom)/this.camera.zoom/this._rendDom.clientHeight;e.x*=l*.04,e.y*=u*.04}e.multiplyScalar(this._eye.length()*this.panSpeed);let r=new R(0,1,0),s=this.camera.position.y>=0?-this._eye.x:this._eye.x,o=this.camera.position.y>=0?-this._eye.z:this._eye.z,a=new R(s,0,o);i.copy(this._eye).cross(r).setLength(e.x),i.add(n.copy(a).setLength(e.y)),this.camera.position.add(i),this.target.add(i),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(e.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.camera.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}update(){this._eye.subVectors(this.camera.position,this.target),this.noRotate||this.rotateCamera(),this.noZoom||this.zoomCamera(),this.noPan||this.panCamera(),this.camera.position.addVectors(this.target,this._eye),this.camera instanceof It?(this.checkDistances(),this.camera.lookAt(this.target),this.lastPosition.distanceToSquared(this.camera.position)>this.EPS&&this.lastPosition.copy(this.camera.position)):this.camera instanceof Pi?(this.camera.lookAt(this.target),(this.lastPosition.distanceToSquared(this.camera.position)>this.EPS||this.lastZoom!==this.camera.zoom)&&(this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom)):console.warn("TrackCameraCtrl: undefine camera type")}reset(){this._state=lt.NONE,this.target.copy(this.target0),this.camera.position.copy(this.position0),this.camera.up.copy(this.up0),this.camera.zoom=this.zoom0,this.camera.updateProjectionMatrix(),this._eye.subVectors(this.camera.position,this.target),this.camera.lookAt(this.target),this.lastPosition.copy(this.camera.position),this.lastZoom=this.camera.zoom}onPointerDown(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this.pointer_move),this.domElement.addEventListener("pointerup",this.pointer_up)),this.addPointer(e),e.pointerType==="touch"?this.onTouchStart(e):this.onMouseDown(e))}onPointerMove(e){this.enabled!==!1&&(e.pointerType==="touch"?this.onTouchMove(e):this.onMouseMove(e))}onPointerUp(e){e.pointerType==="touch"?this.onTouchEnd(e):this.onMouseUp(),this.removePointer(e),this._pointers.length===0&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.pointer_move),this.domElement.removeEventListener("pointerup",this.pointer_up))}onPointerCancel(e){this.removePointer(e)}keyup(){this.enabled!==!1&&(this._state=lt.NONE)}onMouseDown(e){switch(e.button){case this.mouseButtons.LEFT:this._state=lt.ROTATE;break;case this.mouseButtons.MIDDLE:this._state=lt.PAN;break;case this.mouseButtons.RIGHT:this._state=lt.PAN;break;default:this._state=lt.NONE;break}this._state===lt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr)):this._state===lt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._zoomEnd.copy(this._zoomStart)):this._state===lt.PAN&&!this.noPan&&(this._panStart.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._panEnd.copy(this._panStart))}onMouseMove(e){this._state===lt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._meshCenter?this._meshCenter:this.target):this._state===lt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)):this._state===lt.PAN&&!this.noPan&&this._panEnd.copy(this.getMouseOnScreen(e.pageX,e.pageY)),this._state!=lt.NONE&&this.update()}zoomCameraByTarget(e){var n=e.clientX/this.screen.width*2-1,i=-(e.clientY/this.screen.height)*2+1;let r=new R(n,i,.5);r.unproject(this.camera);let s=3;r.sub(this.camera.position).setLength(s),e.deltaY<0?(this.camera.position.add(r),this.target.add(r)):(this.camera.position.sub(r),this.target.sub(r))}onMouseUp(){this._state=lt.NONE}onMouseWheel(e){if(this.enabled!==!1&&this.noZoom!==!0){switch(e.preventDefault(),e.deltaMode){case 2:this._zoomStart.y-=e.deltaY*.025;break;case 1:this._zoomStart.y-=e.deltaY*.01;break;default:this._zoomStart.y-=e.deltaY*25e-5;break}this.zoomCameraByTarget(e),this.update()}}resetMouse(){}onTouchStart(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._state=lt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this._state=lt.TOUCH_ZOOM_PAN;const n=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(n*n+i*i);const r=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this.getMouseOnScreen(r,s)),this._panEnd.copy(this._panStart);break}}onTouchMove(e){switch(this.trackPointer(e),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY));break;default:const n=this.getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+r*r);const s=(e.pageX+n.x)/2,o=(e.pageY+n.y)/2;this._panEnd.copy(this.getMouseOnScreen(s,o));break}}onTouchEnd(e){switch(this._pointers.length){case 0:this._state=lt.NONE;break;case 1:this._state=lt.TOUCH_ROTATE,this._moveCurr.copy(this.getMouseOnCircle(e.pageX,e.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this._state=lt.TOUCH_ZOOM_PAN,this._moveCurr.copy(this.getMouseOnCircle(e.pageX-this._movePrev.x,e.pageY-this._movePrev.y)),this._movePrev.copy(this._moveCurr);break}}contextmenu(e){this.enabled!==!1&&e.preventDefault()}addPointer(e){this._pointers.push(e)}removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n].pointerId==e.pointerId){this._pointers.splice(n,1);return}}trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[n.pointerId]}}class M2{constructor(){re(this,"frustumSize",1e4);re(this,"PLANE_WIDTH",2e6);re(this,"PLANE_HEIGTH",2e6);re(this,"near",100);re(this,"far",1e6);re(this,"_scene");re(this,"_plane");re(this,"_grid");re(this,"_ambLight");re(this,"_pcamera");re(this,"_ocamera");re(this,"_camera");re(this,"_render");re(this,"_css2dReder");re(this,"_viewWidth");re(this,"_viewHeight");re(this,"_posTips");re(this,"_trackCtrl");re(this,"_controls");this._viewWidth=window.innerWidth,this._viewHeight=window.innerHeight,this.createScene(),this.createPCamera(),this.createPlane(),this.createGrid(),this.createLight(),this.createCSS2DRender(),this.createRender(),this.createControls()}get scene(){return this._scene}get camera(){return this._camera}get render(){return this._render}get css2dRender(){return this._css2dReder}get controls(){return this._controls}set viewWidth(e){this._viewWidth=e}get viewWidth(){return this._viewWidth}set viewHeight(e){this._viewHeight=e}get viewHeight(){return this._viewHeight}get PlaneMesh(){return this._plane}get posPoint(){return this._posTips}dispose(){this.removeEvent()}addEvent(){}removeEvent(){}createCSS2DRender(){this._css2dReder=new w2,this._css2dReder.setSize(window.innerWidth,window.innerHeight),this._css2dReder.domElement.style.position="absolute",this._css2dReder.domElement.style.top="0px"}onCameraTargetChange(e){this._posTips&&(this._posTips.visible=e!=null),e&&this._posTips.position.set(e.x,e.y,e.z)}createCenterPoint(){let e=require("@/assets/img/s.png");const n=new g2().load(e),i=new Ig({map:n,sizeAttenuation:!1,depthWrite:!1,depthTest:!1});this._posTips=new c2(i),this._posTips.name="nos_rsdic",this._posTips.scale.set(.04,.04,.04),this._scene.add(this._posTips),this._posTips.visible=!1}changeBackground(e){let n=e===1?new He(Pc.COLOR_PIURITY_LIGHT):e===2?new He(Pc.COLOR_PIURITY_DEPTH):null;this._scene.background=n}changeCamera(e){console.log("aerial scene change camera");let n=this._camera.position.clone();this._camera=e==0?this._pcamera:this._ocamera,this._camera.position.set(n.x,n.y,n.z),this._camera.lookAt(this._trackCtrl.target.x,this._trackCtrl.target.y,this._trackCtrl.target.z),this._camera.up.copy(this._trackCtrl.camera.up),this._trackCtrl.camera=this._camera,this._trackCtrl.update(),this._controls=this._trackCtrl}createTrackCtrl(e){this._trackCtrl=new Ap(e,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createScene(){this._scene=new l2}createPCamera(){this._pcamera=new It(60,window.innerWidth/window.innerHeight,this.near,this.far),this._pcamera.position.set(-1e4,1e4,1e4),this._pcamera.lookAt(new R(0,1500,0)),this._camera=this._pcamera}createOCamera(){let e=this._viewWidth/this._viewHeight;this._ocamera=new Pi(this.frustumSize*e/-2,this.frustumSize*e/2,this.frustumSize/2,this.frustumSize/-2,1,1e5),this._ocamera.position.set(-1e4,1e4,1e4),this._ocamera.lookAt(new R(0,1500,0)),this._scene.add(this._ocamera)}createControls(){this._trackCtrl=new Ap(this._camera,this._css2dReder.domElement,this._render.domElement),this._controls=this._trackCtrl}createPlane(){let e=new Vl(this.PLANE_WIDTH,this.PLANE_HEIGTH);this._plane=new si(e,new jd({color:13421772,reflectivity:0,transparent:!0,opacity:.1,side:yr})),this._plane.rotation.x=-Math.PI/2,this._plane.position.set(0,-1,0),this._plane.visible=!1,this._scene.add(this._plane)}createGrid(){this._grid=new S2(this.PLANE_WIDTH/10,this.PLANE_WIDTH/1e4,13421772,13421772),this._grid.material.opacity=.6,this._grid.material.transparent=!0,this._grid.position.set(0,-1,0),this._scene.add(this._grid)}createLight(){const e=new v2(16777215,4473924,.6);e.position.set(0,2e4,0),this._scene.add(e);let n=new y2(16777215,.6);n.position.set(0,1e5,1e5),this._scene.add(n)}createRender(){this._render=new Dg({precision:"highp",antialias:!0,alpha:!0}),this._render.setSize(window.innerWidth,window.innerHeight),this._render.setPixelRatio(window.devicePixelRatio),this._render.outputEncoding=tt}grideShow(e){this._grid.visible=e}onResize(){if(this._trackCtrl&&(this._trackCtrl.screen.width=this._viewWidth,this._trackCtrl.screen.height=this._viewHeight),this._render.setSize(this._viewWidth,this._viewHeight),this._css2dReder.setSize(this._viewWidth,this._viewHeight),this.camera instanceof It)this._camera.aspect=this._viewWidth/this._viewHeight,this.camera.updateProjectionMatrix();else if(this.camera instanceof Pi){let e=this._viewWidth/this._viewHeight;this._camera.left=-this.frustumSize*e/2,this._camera.right=this.frustumSize*e/2,this._camera.top=this.frustumSize/2,this._camera.bottom=-this.frustumSize/2,this._camera.updateProjectionMatrix()}}onsetview(e){this._viewWidth=e.width,this._viewHeight=e.height,this.onResize()}}class E2{constructor(){re(this,"_main")}get main(){return this._main}startUp(){this._main=new M2}dispose(){}onResize(){}mountedMainScene(){rn.container.appendChild(this._main.render.domElement),rn.container.appendChild(this._main.css2dRender.domElement)}}class C2{constructor(){re(this,"scene",new E2);re(this,"render",new fx);re(this,"mesh",new dx)}startUp(){this.mesh.startUp(),this.scene.startUp(),this.render.startUp()}}const Eo=class{constructor(){re(this,"_serviceFactory");re(this,"_serviceList");this._serviceFactory=new Map,this._serviceList=new Map}static get ins(){return this._ins||(this._ins=new Eo),this._ins}static RegSer(e,n){if(Eo.ins._serviceFactory.has(e))throw new Error("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u6B64\u7C7B\u578B\u7684\u670D\u52A1\u5DE5\u5382\uFF0C\u8BF7\u52FF\u518D\u6B21\u6CE8\u518C");Eo.ins._serviceFactory.set(e,n)}getService(e){let n;if(this._serviceList.has(e))n=this._serviceList.get(e);else if(this._serviceFactory.has(e)){let i=this._serviceFactory.get(e);i&&(n=this.initService(i))}return n&&n.inited||console.log("[ServiceManager] \u6709\u4EBA\u62FF\u5230\u4E86\u4E00\u4E2A\u7A7A\u7684\u670D\u52A1\u5BF9\u8C61::",e),n}initService(e){var n=e.createService();return this._serviceList.set(n.type,n),n.serviceInit(),n}removeService(e){if(this._serviceList.has(e)){var n=this._serviceList.get(e);n&&n.dispose(),this._serviceList.delete(e)}}};let pr=Eo;re(pr,"_ins");class b2{constructor(){re(this,"_scheme");re(this,"_cad");re(this,"_scene");re(this,"_mesh")}static hasService(e){return pr.ins.getService(e)!=null}tryGetService(e){var n=pr.ins.getService(e);if(!n)throw Error("\u670D\u52A1\u83B7\u53D6\u5931\u8D25:"+e);return n}get cad(){return this._cad==null&&(this._cad=this.tryGetService(Dn.CAD_SERVICE)),this._cad}get scheme(){return this._scheme==null&&(this._scheme=this.tryGetService(Dn.SCHEME_SERVICE)),this._scheme}get scene(){return this._scene==null&&(this._scene=this.tryGetService(Dn.SCENE_SERVICE)),this._scene}get mesh(){return this._mesh==null&&(this._mesh=this.tryGetService(Dn.MESH_SERVICE)),this._mesh}}class Og{constructor(e,n,i){re(this,"_type");re(this,"_serviceClass");re(this,"_syncInit");this._type=e,this._serviceClass=n,this._syncInit=i}get type(){return this._type}createService(){return new this._serviceClass}get asyncInitService(){return this._syncInit}}class Ug{constructor(e){re(this,"_type");re(this,"_firstInit");re(this,"_inited");re(this,"_disposed");this._firstInit=!1,this._inited=!1,this._type=e,this._disposed=!1}get type(){return this._type}serviceInit(){this._firstInit||(this._firstInit=!0,this.onInit())}notifyServiceInited(e=!0){if(this._disposed)throw Error("\u5DF2\u88AB\u9500\u6BC1");e&&(this._inited=!0)}get inited(){return this._inited}dispose(){this.onDispose(),this._disposed=!0}onInit(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u5E76\u5728\u5B8C\u6210\u521D\u59CB\u5316\u540E\u901A\u8FC7 notifyServiceInited \u901A\u77E5\u51FA\u6765")}onDispose(){throw new Error("\u9700\u8981\u5B50\u7C7B\u590D\u5199\uFF0C\u7528\u4E8E\u91CA\u653E\u670D\u52A1")}}class T2{dispose(){}}class A2 extends Ug{constructor(){super(Dn.CAD_SERVICE);re(this,"_ctrl");this._ctrl=new T2}onDispose(){this._ctrl.dispose()}onInit(){this.notifyServiceInited()}}class L2 extends Og{constructor(){super(Dn.CAD_SERVICE,A2)}}class P2 extends Ug{constructor(){super(Dn.CAD_SERVICE)}onDispose(){}onInit(){this.notifyServiceInited()}mountedMainScene(){rn.MGR.scene.mountedMainScene()}}class R2 extends Og{constructor(){super(Dn.SCENE_SERVICE,P2)}}class D2{static init(){pr.RegSer(Dn.CAD_SERVICE,new L2),pr.RegSer(Dn.SCENE_SERVICE,new R2)}}const Co=class{constructor(){}startUp(){console.log("BIM start up."),D2.init(),Co.MGR.startUp(),window.addEventListener("resize",()=>this.onWindowResize()),this.startRenderLoop()}exit(){console.log("BIM exit.")}startRenderLoop(){Co.MGR.render.render(),requestAnimationFrame(()=>this.startRenderLoop())}onWindowResize(){console.log("windows resize"),Co.MGR.scene.onResize()}};let rn=Co;re(rn,"mode"),re(rn,"container"),re(rn,"MGR",new C2),re(rn,"SC",new b2);class I2 extends vr.Component{constructor(){super(...arguments);re(this,"container",vr.createRef())}componentDidMount(){console.log("editor mount"),this.container&&(rn.container=this.container.current,rn.SC.scene.mountedMainScene())}componentWillUnmount(){console.log("editor unmount")}render(){return ue(Un,{children:ue("div",{id:"bim",ref:this.container})})}}const z2=()=>ue("div",{children:"Example"});var Hl={exports:{}},qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=typeof Symbol=="function"&&Symbol.for,qd=Et?Symbol.for("react.element"):60103,Yd=Et?Symbol.for("react.portal"):60106,Wl=Et?Symbol.for("react.fragment"):60107,jl=Et?Symbol.for("react.strict_mode"):60108,$l=Et?Symbol.for("react.profiler"):60114,Xl=Et?Symbol.for("react.provider"):60109,ql=Et?Symbol.for("react.context"):60110,Zd=Et?Symbol.for("react.async_mode"):60111,Yl=Et?Symbol.for("react.concurrent_mode"):60111,Zl=Et?Symbol.for("react.forward_ref"):60112,Kl=Et?Symbol.for("react.suspense"):60113,k2=Et?Symbol.for("react.suspense_list"):60120,Ql=Et?Symbol.for("react.memo"):60115,Jl=Et?Symbol.for("react.lazy"):60116,F2=Et?Symbol.for("react.block"):60121,N2=Et?Symbol.for("react.fundamental"):60117,O2=Et?Symbol.for("react.responder"):60118,U2=Et?Symbol.for("react.scope"):60119;function ln(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qd:switch(t=t.type,t){case Zd:case Yl:case Wl:case $l:case jl:case Kl:return t;default:switch(t=t&&t.$$typeof,t){case ql:case Zl:case Jl:case Ql:case Xl:return t;default:return e}}case Yd:return e}}}function Bg(t){return ln(t)===Yl}qe.AsyncMode=Zd;qe.ConcurrentMode=Yl;qe.ContextConsumer=ql;qe.ContextProvider=Xl;qe.Element=qd;qe.ForwardRef=Zl;qe.Fragment=Wl;qe.Lazy=Jl;qe.Memo=Ql;qe.Portal=Yd;qe.Profiler=$l;qe.StrictMode=jl;qe.Suspense=Kl;qe.isAsyncMode=function(t){return Bg(t)||ln(t)===Zd};qe.isConcurrentMode=Bg;qe.isContextConsumer=function(t){return ln(t)===ql};qe.isContextProvider=function(t){return ln(t)===Xl};qe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qd};qe.isForwardRef=function(t){return ln(t)===Zl};qe.isFragment=function(t){return ln(t)===Wl};qe.isLazy=function(t){return ln(t)===Jl};qe.isMemo=function(t){return ln(t)===Ql};qe.isPortal=function(t){return ln(t)===Yd};qe.isProfiler=function(t){return ln(t)===$l};qe.isStrictMode=function(t){return ln(t)===jl};qe.isSuspense=function(t){return ln(t)===Kl};qe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wl||t===Yl||t===$l||t===jl||t===Kl||t===k2||typeof t=="object"&&t!==null&&(t.$$typeof===Jl||t.$$typeof===Ql||t.$$typeof===Xl||t.$$typeof===ql||t.$$typeof===Zl||t.$$typeof===N2||t.$$typeof===O2||t.$$typeof===U2||t.$$typeof===F2)};qe.typeOf=ln;(function(t){t.exports=qe})(Hl);function B2(t){function e(F,B,$,se,T){for(var ve=0,q=0,ge=0,ie=0,ye,ae,he=0,Ue=0,Ee,Be=Ee=ye=0,Te=0,ke=0,Fe=0,Ye=0,Ft=$.length,A=Ft-1,M,N="",J="",oe="",ce="",Me;Te<Ft;){if(ae=$.charCodeAt(Te),Te===A&&q+ie+ge+ve!==0&&(q!==0&&(ae=q===47?10:47),ie=ge=ve=0,Ft++,A++),q+ie+ge+ve===0){if(Te===A&&(0<ke&&(N=N.replace(f,"")),0<N.trim().length)){switch(ae){case 32:case 9:case 59:case 13:case 10:break;default:N+=$.charAt(Te)}ae=59}switch(ae){case 123:for(N=N.trim(),ye=N.charCodeAt(0),Ee=1,Ye=++Te;Te<Ft;){switch(ae=$.charCodeAt(Te)){case 123:Ee++;break;case 125:Ee--;break;case 47:switch(ae=$.charCodeAt(Te+1)){case 42:case 47:e:{for(Be=Te+1;Be<A;++Be)switch($.charCodeAt(Be)){case 47:if(ae===42&&$.charCodeAt(Be-1)===42&&Te+2!==Be){Te=Be+1;break e}break;case 10:if(ae===47){Te=Be+1;break e}}Te=Be}}break;case 91:ae++;case 40:ae++;case 34:case 39:for(;Te++<A&&$.charCodeAt(Te)!==ae;);}if(Ee===0)break;Te++}switch(Ee=$.substring(Ye,Te),ye===0&&(ye=(N=N.replace(d,"").trim()).charCodeAt(0)),ye){case 64:switch(0<ke&&(N=N.replace(f,"")),ae=N.charCodeAt(1),ae){case 100:case 109:case 115:case 45:ke=B;break;default:ke=H}if(Ee=e(B,ke,Ee,ae,T+1),Ye=Ee.length,0<D&&(ke=n(H,N,Fe),Me=a(3,Ee,ke,B,Q,te,Ye,ae,T,se),N=ke.join(""),Me!==void 0&&(Ye=(Ee=Me.trim()).length)===0&&(ae=0,Ee="")),0<Ye)switch(ae){case 115:N=N.replace(C,o);case 100:case 109:case 45:Ee=N+"{"+Ee+"}";break;case 107:N=N.replace(v,"$1 $2"),Ee=N+"{"+Ee+"}",Ee=j===1||j===2&&s("@"+Ee,3)?"@-webkit-"+Ee+"@"+Ee:"@"+Ee;break;default:Ee=N+Ee,se===112&&(Ee=(J+=Ee,""))}else Ee="";break;default:Ee=e(B,n(B,N,Fe),Ee,se,T+1)}oe+=Ee,Ee=Fe=ke=Be=ye=0,N="",ae=$.charCodeAt(++Te);break;case 125:case 59:if(N=(0<ke?N.replace(f,""):N).trim(),1<(Ye=N.length))switch(Be===0&&(ye=N.charCodeAt(0),ye===45||96<ye&&123>ye)&&(Ye=(N=N.replace(" ",":")).length),0<D&&(Me=a(1,N,B,F,Q,te,J.length,se,T,se))!==void 0&&(Ye=(N=Me.trim()).length)===0&&(N="\0\0"),ye=N.charCodeAt(0),ae=N.charCodeAt(1),ye){case 0:break;case 64:if(ae===105||ae===99){ce+=N+$.charAt(Te);break}default:N.charCodeAt(Ye-1)!==58&&(J+=r(N,ye,ae,N.charCodeAt(2)))}Fe=ke=Be=ye=0,N="",ae=$.charCodeAt(++Te)}}switch(ae){case 13:case 10:q===47?q=0:1+ye===0&&se!==107&&0<N.length&&(ke=1,N+="\0"),0<D*U&&a(0,N,B,F,Q,te,J.length,se,T,se),te=1,Q++;break;case 59:case 125:if(q+ie+ge+ve===0){te++;break}default:switch(te++,M=$.charAt(Te),ae){case 9:case 32:if(ie+ve+q===0)switch(he){case 44:case 58:case 9:case 32:M="";break;default:ae!==32&&(M=" ")}break;case 0:M="\\0";break;case 12:M="\\f";break;case 11:M="\\v";break;case 38:ie+q+ve===0&&(ke=Fe=1,M="\f"+M);break;case 108:if(ie+q+ve+O===0&&0<Be)switch(Te-Be){case 2:he===112&&$.charCodeAt(Te-3)===58&&(O=he);case 8:Ue===111&&(O=Ue)}break;case 58:ie+q+ve===0&&(Be=Te);break;case 44:q+ge+ie+ve===0&&(ke=1,M+="\r");break;case 34:case 39:q===0&&(ie=ie===ae?0:ie===0?ae:ie);break;case 91:ie+q+ge===0&&ve++;break;case 93:ie+q+ge===0&&ve--;break;case 41:ie+q+ve===0&&ge--;break;case 40:if(ie+q+ve===0){if(ye===0)switch(2*he+3*Ue){case 533:break;default:ye=1}ge++}break;case 64:q+ge+ie+ve+Be+Ee===0&&(Ee=1);break;case 42:case 47:if(!(0<ie+ve+ge))switch(q){case 0:switch(2*ae+3*$.charCodeAt(Te+1)){case 235:q=47;break;case 220:Ye=Te,q=42}break;case 42:ae===47&&he===42&&Ye+2!==Te&&($.charCodeAt(Ye+2)===33&&(J+=$.substring(Ye,Te+1)),M="",q=0)}}q===0&&(N+=M)}Ue=he,he=ae,Te++}if(Ye=J.length,0<Ye){if(ke=B,0<D&&(Me=a(2,J,ke,F,Q,te,Ye,se,T,se),Me!==void 0&&(J=Me).length===0))return ce+J+oe;if(J=ke.join(",")+"{"+J+"}",j*O!==0){switch(j!==2||s(J,2)||(O=0),O){case 111:J=J.replace(S,":-moz-$1")+J;break;case 112:J=J.replace(y,"::-webkit-input-$1")+J.replace(y,"::-moz-$1")+J.replace(y,":-ms-input-$1")+J}O=0}}return ce+J+oe}function n(F,B,$){var se=B.trim().split(h);B=se;var T=se.length,ve=F.length;switch(ve){case 0:case 1:var q=0;for(F=ve===0?"":F[0]+" ";q<T;++q)B[q]=i(F,B[q],$).trim();break;default:var ge=q=0;for(B=[];q<T;++q)for(var ie=0;ie<ve;++ie)B[ge++]=i(F[ie]+" ",se[q],$).trim()}return B}function i(F,B,$){var se=B.charCodeAt(0);switch(33>se&&(se=(B=B.trim()).charCodeAt(0)),se){case 38:return B.replace(m,"$1"+F.trim());case 58:return F.trim()+B.replace(m,"$1"+F.trim());default:if(0<1*$&&0<B.indexOf("\f"))return B.replace(m,(F.charCodeAt(0)===58?"":"$1")+F.trim())}return F+B}function r(F,B,$,se){var T=F+";",ve=2*B+3*$+4*se;if(ve===944){F=T.indexOf(":",9)+1;var q=T.substring(F,T.length-1).trim();return q=T.substring(0,F).trim()+q+";",j===1||j===2&&s(q,1)?"-webkit-"+q+q:q}if(j===0||j===2&&!s(T,1))return T;switch(ve){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(k,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return q=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+q+"-webkit-"+T+"-ms-flex-pack"+q+T;case 1005:return _.test(T)?T.replace(g,":-webkit-")+T.replace(g,":-moz-")+T:T;case 1e3:switch(q=T.substring(13).trim(),B=q.indexOf("-")+1,q.charCodeAt(0)+q.charCodeAt(B)){case 226:q=T.replace(w,"tb");break;case 232:q=T.replace(w,"tb-rl");break;case 220:q=T.replace(w,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+q+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(B=(T=F).length-10,q=(T.charCodeAt(B)===33?T.substring(0,B):T).substring(F.indexOf(":",7)+1).trim(),ve=q.charCodeAt(0)+(q.charCodeAt(7)|0)){case 203:if(111>q.charCodeAt(8))break;case 115:T=T.replace(q,"-webkit-"+q)+";"+T;break;case 207:case 102:T=T.replace(q,"-webkit-"+(102<ve?"inline-":"")+"box")+";"+T.replace(q,"-webkit-"+q)+";"+T.replace(q,"-ms-"+q+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return q=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+q+"-ms-flex-"+q+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(x,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(x,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(P.test(F)===!0)return(q=F.substring(F.indexOf(":")+1)).charCodeAt(0)===115?r(F.replace("stretch","fill-available"),B,$,se).replace(":fill-available",":stretch"):T.replace(q,"-webkit-"+q)+T.replace(q,"-moz-"+q.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,$+se===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+T}return T}function s(F,B){var $=F.indexOf(B===1?":":"{"),se=F.substring(0,B!==3?$:10);return $=F.substring($+1,F.length-1),I(B!==2?se:se.replace(b,"$1"),$,B)}function o(F,B){var $=r(B,B.charCodeAt(0),B.charCodeAt(1),B.charCodeAt(2));return $!==B+";"?$.replace(L," or ($1)").substring(4):"("+B+")"}function a(F,B,$,se,T,ve,q,ge,ie,ye){for(var ae=0,he=B,Ue;ae<D;++ae)switch(Ue=Z[ae].call(c,F,he,$,se,T,ve,q,ge,ie,ye)){case void 0:case!1:case!0:case null:break;default:he=Ue}if(he!==B)return he}function l(F){switch(F){case void 0:case null:D=Z.length=0;break;default:if(typeof F=="function")Z[D++]=F;else if(typeof F=="object")for(var B=0,$=F.length;B<$;++B)l(F[B]);else U=!!F|0}return l}function u(F){return F=F.prefix,F!==void 0&&(I=null,F?typeof F!="function"?j=1:(j=2,I=F):j=0),u}function c(F,B){var $=F;if(33>$.charCodeAt(0)&&($=$.trim()),K=$,$=[K],0<D){var se=a(-1,B,$,$,Q,te,0,0,0,0);se!==void 0&&typeof se=="string"&&(B=se)}var T=e(H,$,B,0,0);return 0<D&&(se=a(-2,T,$,$,Q,te,T.length,0,0,0),se!==void 0&&(T=se)),K="",O=0,te=Q=1,T}var d=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,_=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,x=/-self|flex-/g,b=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,te=1,Q=1,O=0,j=1,H=[],Z=[],D=0,I=null,U=0,K="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var V2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function G2(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var H2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Lp=G2(function(t){return H2.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Kd=Hl.exports,W2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qd={};Qd[Kd.ForwardRef]=$2;Qd[Kd.Memo]=Vg;function Pp(t){return Kd.isMemo(t)?Vg:Qd[t.$$typeof]||W2}var X2=Object.defineProperty,q2=Object.getOwnPropertyNames,Rp=Object.getOwnPropertySymbols,Y2=Object.getOwnPropertyDescriptor,Z2=Object.getPrototypeOf,Dp=Object.prototype;function Gg(t,e,n){if(typeof e!="string"){if(Dp){var i=Z2(e);i&&i!==Dp&&Gg(t,i,n)}var r=q2(e);Rp&&(r=r.concat(Rp(e)));for(var s=Pp(t),o=Pp(e),a=0;a<r.length;++a){var l=r[a];if(!j2[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=Y2(e,l);try{X2(t,l,u)}catch{}}}}return t}var K2=Gg;function oi(){return(oi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var Ip=function(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n},Bc=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Hl.exports.typeOf(t)},ul=Object.freeze([]),ki=Object.freeze({});function Lo(t){return typeof t=="function"}function zp(t){return t.displayName||t.name||"Component"}function Jd(t){return t&&typeof t.styledComponentId=="string"}var Ls=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ef=typeof window<"u"&&"HTMLElement"in window,Q2=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Ko(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var J2=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var i=0,r=0;r<n;r++)i+=this.groupSizes[r];return i},e.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;n>=o;)(o<<=1)<0&&Ko(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=i.length;u<c;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],r=this.indexOfGroup(n),s=r+i;this.groupSizes[n]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var r=this.groupSizes[n],s=this.indexOfGroup(n),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},t}(),Za=new Map,cl=new Map,po=1,Aa=function(t){if(Za.has(t))return Za.get(t);for(;cl.has(po);)po++;var e=po++;return Za.set(t,e),cl.set(e,t),e},e3=function(t){return cl.get(t)},t3=function(t,e){e>=po&&(po=e+1),Za.set(t,e),cl.set(e,t)},n3="style["+Ls+'][data-styled-version="5.3.5"]',i3=new RegExp("^"+Ls+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),r3=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},s3=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=n.length;r<s;r++){var o=n[r].trim();if(o){var a=o.match(i3);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(t3(u,l),r3(t,u,a[3]),t.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},o3=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Hg=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ls))return c}}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(Ls,"active"),i.setAttribute("data-styled-version","5.3.5");var o=o3();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},a3=function(){function t(n){var i=this.element=Hg(n);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}Ko(17)}(i),this.length=0}var e=t.prototype;return e.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var i=this.sheet.cssRules[n];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},t}(),l3=function(){function t(n){var i=this.element=Hg(n);this.nodes=i.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,i){if(n<=this.length&&n>=0){var r=document.createTextNode(i),s=this.nodes[n];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),u3=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),kp=ef,c3={isServer:!ef,useCSSOMInjection:!Q2},Wg=function(){function t(n,i,r){n===void 0&&(n=ki),i===void 0&&(i={}),this.options=oi({},c3,{},n),this.gs=i,this.names=new Map(r),this.server=!!n.isServer,!this.server&&ef&&kp&&(kp=!1,function(s){for(var o=document.querySelectorAll(n3),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ls)!=="active"&&(s3(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Aa(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new t(oi({},this.options,{},n),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,n=r?new u3(o):s?new a3(o):new l3(o),new J2(n)));var n,i,r,s,o},e.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.registerName=function(n,i){if(Aa(n),this.names.has(n))this.names.get(n).add(i);else{var r=new Set;r.add(i),this.names.set(n,r)}},e.insertRules=function(n,i,r){this.registerName(n,i),this.getTag().insertRules(Aa(n),r)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Aa(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var i=n.getTag(),r=i.length,s="",o=0;o<r;o++){var a=e3(o);if(a!==void 0){var l=n.names.get(a),u=i.getGroup(o);if(l&&u&&l.size){var c=Ls+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),d3=/(a)(d)/gi,Fp=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vc(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Fp(e%52)+n;return(Fp(e%52)+n).replace(d3,"$1-$2")}var rs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jg=function(t){return rs(5381,t)};function f3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Lo(n)&&!Jd(n))return!1}return!0}var h3=jg("5.3.5"),p3=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&f3(e),this.componentId=n,this.baseHash=rs(h3,n),this.baseStyle=i,Wg.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ps(this.rules,e,n,i).join(""),a=Vc(rs(this.baseHash,o)>>>0);if(!n.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);n.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=rs(this.baseHash,i.hash),d="",f=0;f<u;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var _=Ps(g,e,n,i),p=Array.isArray(_)?_.join(""):_;c=rs(c,p+f),d+=p}}if(d){var h=Vc(c>>>0);if(!n.hasNameForId(r,h)){var m=i(d,"."+h,void 0,r);n.insertRules(r,h,m)}s.push(h)}}return s.join(" ")},t}(),m3=/^\s*\/\/.*$/gm,g3=[":","[",".","#"];function v3(t){var e,n,i,r,s=t===void 0?ki:t,o=s.options,a=o===void 0?ki:o,l=s.plugins,u=l===void 0?ul:l,c=new B2(a),d=[],f=function(p){function h(m){if(m)try{p(m+"}")}catch{}}return function(m,v,y,S,w,C,L,x,b,P){switch(m){case 1:if(b===0&&v.charCodeAt(0)===64)return p(v+";"),"";break;case 2:if(x===0)return v+"/*|*/";break;case 3:switch(x){case 102:case 112:return p(y[0]+v),"";default:return v+(P===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(h)}}}(function(p){d.push(p)}),g=function(p,h,m){return h===0&&g3.indexOf(m[n.length])!==-1||m.match(r)?p:"."+e};function _(p,h,m,v){v===void 0&&(v="&");var y=p.replace(m3,""),S=h&&m?m+" "+h+" { "+y+" }":y;return e=v,n=h,i=new RegExp("\\"+n+"\\b","g"),r=new RegExp("(\\"+n+"\\b){2,}"),c(m||!h?"":h,S)}return c.use([].concat(u,[function(p,h,m){p===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(i,g))},f,function(p){if(p===-2){var h=d;return d=[],h}}])),_.hash=u.length?u.reduce(function(p,h){return h.name||Ko(15),rs(p,h.name)},5381).toString():"",_}var $g=vr.createContext();$g.Consumer;var Xg=vr.createContext(),_3=(Xg.Consumer,new Wg),Gc=v3();function x3(){return Ie.exports.useContext($g)||_3}function y3(){return Ie.exports.useContext(Xg)||Gc}var S3=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Gc);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return Ko(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Gc),this.name+e.hash},t}(),w3=/([A-Z])/,M3=/([A-Z])/g,E3=/^ms-/,C3=function(t){return"-"+t.toLowerCase()};function Np(t){return w3.test(t)?t.replace(M3,C3).replace(E3,"-ms-"):t}var Op=function(t){return t==null||t===!1||t===""};function Ps(t,e,n,i){if(Array.isArray(t)){for(var r,s=[],o=0,a=t.length;o<a;o+=1)(r=Ps(t[o],e,n,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(Op(t))return"";if(Jd(t))return"."+t.styledComponentId;if(Lo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Ps(l,e,n,i)}var u;return t instanceof S3?n?(t.inject(n,i),t.getName(i)):t:Bc(t)?function c(d,f){var g,_,p=[];for(var h in d)d.hasOwnProperty(h)&&!Op(d[h])&&(Array.isArray(d[h])&&d[h].isCss||Lo(d[h])?p.push(Np(h)+":",d[h],";"):Bc(d[h])?p.push.apply(p,c(d[h],h)):p.push(Np(h)+": "+(g=h,(_=d[h])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||g in V2?String(_).trim():_+"px")+";"));return f?[f+" {"].concat(p,["}"]):p}(t):t.toString()}var Up=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function b3(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return Lo(t)||Bc(t)?Up(Ps(Ip(ul,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Up(Ps(Ip(t,n)))}var T3=function(t,e,n){return n===void 0&&(n=ki),t.theme!==n.theme&&t.theme||e||n.theme},A3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L3=/(^-|-$)/g;function ic(t){return t.replace(A3,"-").replace(L3,"")}var P3=function(t){return Vc(jg(t)>>>0)};function La(t){return typeof t=="string"&&!0}var Hc=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},R3=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function D3(t,e,n){var i=t[n];Hc(e)&&Hc(i)?qg(i,e):t[n]=e}function qg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=n;r<s.length;r++){var o=s[r];if(Hc(o))for(var a in o)R3(a)&&D3(t,o[a],a)}return t}var Yg=vr.createContext();Yg.Consumer;var rc={};function Zg(t,e,n){var i=Jd(t),r=!La(t),s=e.attrs,o=s===void 0?ul:s,a=e.componentId,l=a===void 0?function(v,y){var S=typeof v!="string"?"sc":ic(v);rc[S]=(rc[S]||0)+1;var w=S+"-"+P3("5.3.5"+S+rc[S]);return y?y+"-"+w:w}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(v){return La(v)?"styled."+v:"Styled("+zp(v)+")"}(t):u,d=e.displayName&&e.componentId?ic(e.displayName)+"-"+e.componentId:e.componentId||l,f=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;i&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(v,y,S){return t.shouldForwardProp(v,y,S)&&e.shouldForwardProp(v,y,S)}:t.shouldForwardProp);var _,p=new p3(n,d,i?t.componentStyle:void 0),h=p.isStatic&&o.length===0,m=function(v,y){return function(S,w,C,L){var x=S.attrs,b=S.componentStyle,P=S.defaultProps,k=S.foldedComponentIds,te=S.shouldForwardProp,Q=S.styledComponentId,O=S.target,j=function(se,T,ve){se===void 0&&(se=ki);var q=oi({},T,{theme:se}),ge={};return ve.forEach(function(ie){var ye,ae,he,Ue=ie;for(ye in Lo(Ue)&&(Ue=Ue(q)),Ue)q[ye]=ge[ye]=ye==="className"?(ae=ge[ye],he=Ue[ye],ae&&he?ae+" "+he:ae||he):Ue[ye]}),[q,ge]}(T3(w,Ie.exports.useContext(Yg),P)||ki,w,x),H=j[0],Z=j[1],D=function(se,T,ve,q){var ge=x3(),ie=y3(),ye=T?se.generateAndInjectStyles(ki,ge,ie):se.generateAndInjectStyles(ve,ge,ie);return ye}(b,L,H),I=C,U=Z.$as||w.$as||Z.as||w.as||O,K=La(U),F=Z!==w?oi({},w,{},Z):w,B={};for(var $ in F)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?B.as=F[$]:(te?te($,Lp,U):!K||Lp($))&&(B[$]=F[$]));return w.style&&Z.style!==w.style&&(B.style=oi({},w.style,{},Z.style)),B.className=Array.prototype.concat(k,Q,D!==Q?D:null,w.className,Z.className).filter(Boolean).join(" "),B.ref=I,Ie.exports.createElement(U,B)}(_,v,y,h)};return m.displayName=c,(_=vr.forwardRef(m)).attrs=f,_.componentStyle=p,_.displayName=c,_.shouldForwardProp=g,_.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):ul,_.styledComponentId=d,_.target=i?t.target:t,_.withComponent=function(v){var y=e.componentId,S=function(C,L){if(C==null)return{};var x,b,P={},k=Object.keys(C);for(b=0;b<k.length;b++)x=k[b],L.indexOf(x)>=0||(P[x]=C[x]);return P}(e,["componentId"]),w=y&&y+"-"+(La(v)?v:ic(zp(v)));return Zg(v,oi({},S,{attrs:f,componentId:w}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?qg({},t.defaultProps,v):v}}),_.toString=function(){return"."+_.styledComponentId},r&&K2(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var Wc=function(t){return function e(n,i,r){if(r===void 0&&(r=ki),!Hl.exports.isValidElementType(i))return Ko(1,String(i));var s=function(){return n(i,r,b3.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,i,oi({},r,{},o))},s.attrs=function(o){return e(n,i,oi({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(Zg,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Wc[t]=Wc(t)});const Je=Wc,I3=Je.div`

    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 50vh;
    z-index: 1;

`,z3=()=>ue(Un,{children:ue(I3,{})});function k3(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function F3(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function N3(t,e){if(t==null)return{};var n=F3(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,i)||(n[i]=t[i]))}return n}function O3(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var U3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B3=O3(function(t){return U3.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Bp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function V3(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bp(Object(n),!0).forEach(function(i){k3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function G3(t){return B3(t)}function H3(t){return Object.keys(t).reduce(function(e,n){return G3(n)&&(e[n]=t[n]),e},{})}var W3=Ie.exports.forwardRef(function(t,e){var n=t.children,i=t.iconAttrs;t.iconVerticalAlign;var r=t.iconViewBox,s=t.size,o=t.title,a=N3(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),l=V3({viewBox:r,height:t.height!==void 0?t.height:s,width:t.width!==void 0?t.width:s,"aria-hidden":o==null?"true":void 0,focusable:"false",role:o!=null?"img":void 0},i),u=H3(a);return Bt("svg",{...l,...u,ref:e,children:[o&&ue("title",{children:o},"icon-title"),n]})}),Pr=Je(W3).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],function(t){return t.iconVerticalAlign}),Kg=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:ue("path",{d:"M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z"})})});Kg.displayName="Sketch";const j3=Je.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 1.2rem;
    line-height: 1.57;
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
    text-align: left;
`,$3=Je(Kg)`
  color: rgb(242, 112, 19);
  margin: 0 5px;
`,X3=()=>ue(Un,{children:Bt(j3,{children:[ue($3,{title:"Sketch Icon",size:"32"}),ue("span",{children:"Bim3dEditor"})]})}),q3=Je.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 100%;
    width: 100%;
`,Y3=Je.button`
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
`,Z3=Je.button`
    border: 0;
    color: white;
    width: 84px;
    height: 32px;
    margin: 0 20px;
    border-radius: 6px;
    background: rgb(242, 112, 19);
    &:hover{
        background: rgb(248, 140, 64);
    }
`,Vp=[{id:"5",lable:"\u767B\u5F55"},{id:"4",lable:"\u7F16\u8F91\u5668"},{id:"3",lable:"\u793A\u4F8B"},{id:"2",lable:"\u6587\u6863"},{id:"1",lable:"\u6559\u7A0B"}],K3=()=>{let t=ag();const e=()=>{t("/editor")},n=r=>{switch(r.target.innerHTML){case"\u6559\u7A0B":t("/course");break;case"\u6587\u6863":t("/document");break;case"\u793A\u4F8B":t("/example");break;case"\u7F16\u8F91\u5668":e();break}},i=()=>{t("/login")};return ue(Un,{children:ue(q3,{children:Vp.map(r=>parseInt(r.id)===Vp.length?ue(Z3,{onClick:i,children:"\u767B \u5F55"},r.id):ue(Y3,{onClick:s=>n(s),children:r.lable},r.id))})})},Q3=Je.div`
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
`,J3=Je.div`
    display: flex;
    /* background: yellow; */
    height: 32px;
    width: 80%;
    flex-direction: row;
`,eE=()=>ue(Un,{children:ue(Q3,{children:Bt(J3,{children:[ue(X3,{}),ue(K3,{})]})})}),tE=Je.div`

    position: relative;
    min-height: 200vh;
    z-index: 1;

`,nE=()=>ue(Un,{children:ue(tE,{})});var Qg=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return Bt(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:[ue("rect",{width:24,height:24,fill:"none"}),ue("path",{d:"M3 4c0-.55.45-1 1-1h2V1H4C2.34 1 1 2.34 1 4v2h2V4zM3 20v-2H1v2c0 1.66 1.34 3 3 3h2v-2H4c-.55 0-1-.45-1-1zM20 1h-2v2h2c.55 0 1 .45 1 1v2h2V4c0-1.66-1.34-3-3-3zM21 20c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2h-2v2zM19 14.87V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73zm-8 2.3l-4-2.3v-4.63l4 2.33v4.6zm1-6.33L8.04 8.53 12 6.25l3.96 2.28L12 10.84zm5 4.03l-4 2.3v-4.6l4-2.33v4.63z"})]})});Qg.displayName="ViewInAr";const iE=Je.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px 0 20px 0;
`,rE=Je.button`
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
`,sE=Je.button`
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
`,oE=Je(Qg)`
    color: white;
    margin-right: 10px;
    padding-bottom: 2px;
`,aE=()=>{let t=ag();function e(){t("/editor")}return ue(Un,{children:Bt(iE,{children:[ue("a",{href:"https://gitee.com/songmy1093697597/bim3d-editor",target:"_blank",children:ue(rE,{children:"\u5BFC\u51FA\u9879\u76EE"})}),Bt(sE,{onClick:e,children:[ue(oE,{size:"16"}),"\u9884\u89C8\u7F16\u8F91"]})]})})};var Jg=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:ue("path",{fillRule:"evenodd",d:"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",clipRule:"evenodd"})})});Jg.displayName="Github";var e0=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 512 512",...t,ref:e,children:ue("path",{fill:"currentColor",d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})})});e0.displayName="ReactLogo";var t0=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:ue("path",{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12 1.217 4.926-4.877-1.4zm6.28 1.538 4.878 1.404-3.662 3.53zm-.52.13 1.208 4.9-4.853-1.392zm6.3 1.534 4.947 1.424-3.715 3.574zm-.524.12 1.215 4.926-4.876-1.398zm-15.432.696 4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137 1.236 5.017-4.963-1.432zm6.274 1.535 4.965 1.425-3.73 3.586zm-.52.127 1.235 5.012-4.958-1.43zm-9.63 2.438 4.873 1.406-3.656 3.523zm5.854 1.687 4.863 1.403-3.648 3.51zm-.54.04 1.214 4.927-4.875-1.4zm-3.896 4.02 5.037 1.442-3.782 3.638z"})})});t0.displayName="Threedotjs";var n0=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:ue("path",{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"})})});n0.displayName="Typescript";var i0=Ie.exports.forwardRef(function(t,e){var n={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return ue(Pr,{iconAttrs:n,iconVerticalAlign:"middle",iconViewBox:"0 0 24 24",...t,ref:e,children:ue("path",{d:"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"})})});i0.displayName="Gitee";const lE=Je.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,uE=Je(Jg)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,cE=Je(e0)`
  color: #38d2f8;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,dE=Je(t0)`
  color: white;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,fE=Je(n0)`
  color: #067ceb;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,hE=Je(i0)`
  color: #f74141;
  margin: 0 5px;
  padding: 10px;
  background-color: rgb(51, 51, 51);
`,pE=()=>ue(Un,{children:Bt(lE,{children:[ue(cE,{title:"React icon",size:"36"}),ue(dE,{title:"Three.js icon",size:"36"}),ue(fE,{title:"Typescript icon",size:"36"}),ue(hE,{title:"Javascript icon",size:"36"}),ue(uE,{title:"Github icon",size:"36"})]})}),Gp=Je.span`
  color: rgb(242, 112, 19);
`,mE=()=>Bt(Un,{children:[Bt("h1",{children:[Bt("span",{children:["\u6B22\u8FCE\u6765\u5230",ue(Gp,{children:" Bim3dEditor "}),ue("br",{}),"\u8FD9\u662F\u4E3A\u60A8\u7CBE\u5FC3\u6253\u9020\u7684\u53EF\u9884"]}),ue("br",{}),ue("span",{children:"\u89C8\u548C\u7F16\u8F91\u7684"}),Bt("span",{children:[ue(Gp,{children:" WebGL "}),"\u9879\u76EE"]})]}),Bt("h5",{children:[ue("span",{children:"Bim3dEditor \u4F7F\u7528\u6D41\u884C\u7684\u524D\u7AEF\u6846\u67B6 React \u548C\u4F18\u79C0\u7684 webgl"}),ue("br",{}),ue("span",{children:"\u5E93 Three.js \u6253\u9020\u5728\u7EBF\u53EF\u7F16\u8F91\u7684Cad\u89E3\u6790\u7F16\u8F91\u5668"})]})]}),gE=Je.div`
    position: relative;
    background-color: rgb(38, 38, 38);
    overflow: hidden;
    min-height: 100vh;
    z-index: 1;
`,vE=Je.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`,_E=Je.div`
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
`,xE=Je.div`
  display: flex;
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
`,yE=()=>ue(Un,{children:ue(gE,{children:Bt(vE,{children:[Bt(_E,{children:[ue(mE,{}),ue(aE,{}),ue(pE,{})]}),ue(xE,{})]})})}),SE=()=>Bt(Un,{children:[ue(eE,{}),ue(yE,{}),ue(nE,{}),ue(z3,{})]}),wE=()=>ue("div",{children:"Login"}),ME=[{path:"/",element:ue(SE,{})},{path:"/example",element:ue(z2,{})},{path:"/document",element:ue(cx,{})},{path:"/course",element:ue(ux,{})},{path:"/editor",element:ue(I2,{})},{path:"/login",element:ue(wE,{})}],EE=()=>J_(ME);var jc={},r0={exports:{}},un={},s0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,I){var U=D.length;D.push(I);e:for(;0<U;){var K=U-1>>>1,F=D[K];if(0<r(F,I))D[K]=I,D[U]=F,U=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var I=D[0],U=D.pop();if(U!==I){D[0]=U;e:for(var K=0,F=D.length,B=F>>>1;K<B;){var $=2*(K+1)-1,se=D[$],T=$+1,ve=D[T];if(0>r(se,U))T<F&&0>r(ve,se)?(D[K]=ve,D[T]=U,K=T):(D[K]=se,D[$]=U,K=$);else if(T<F&&0>r(ve,U))D[K]=ve,D[T]=U,K=T;else break e}}return I}function r(D,I){var U=D.sortIndex-I.sortIndex;return U!==0?U:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=D)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function S(D){if(p=!1,y(D),!_)if(n(l)!==null)_=!0,H(w);else{var I=n(u);I!==null&&Z(S,I.startTime-D)}}function w(D,I){_=!1,p&&(p=!1,m(x),x=-1),g=!0;var U=f;try{for(y(I),d=n(l);d!==null&&(!(d.expirationTime>I)||D&&!k());){var K=d.callback;if(typeof K=="function"){d.callback=null,f=d.priorityLevel;var F=K(d.expirationTime<=I);I=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),y(I)}else i(l);d=n(l)}if(d!==null)var B=!0;else{var $=n(u);$!==null&&Z(S,$.startTime-I),B=!1}return B}finally{d=null,f=U,g=!1}}var C=!1,L=null,x=-1,b=5,P=-1;function k(){return!(t.unstable_now()-P<b)}function te(){if(L!==null){var D=t.unstable_now();P=D;var I=!0;try{I=L(!0,D)}finally{I?Q():(C=!1,L=null)}}else C=!1}var Q;if(typeof v=="function")Q=function(){v(te)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,j=O.port2;O.port1.onmessage=te,Q=function(){j.postMessage(null)}}else Q=function(){h(te,0)};function H(D){L=D,C||(C=!0,Q())}function Z(D,I){x=h(function(){D(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,H(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var U=f;f=I;try{return D()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var U=f;f=D;try{return I()}finally{f=U}},t.unstable_scheduleCallback=function(D,I,U){var K=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?K+U:K):U=K,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=U+F,D={id:c++,callback:I,priorityLevel:D,startTime:U,expirationTime:F,sortIndex:-1},U>K?(D.sortIndex=U,e(u,D),n(l)===null&&D===n(u)&&(p?(m(x),x=-1):p=!0,Z(S,U-K))):(D.sortIndex=F,e(l,D),_||g||(_=!0,H(w))),D},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(D){var I=f;return function(){var U=f;f=I;try{return D.apply(this,arguments)}finally{f=U}}}})(o0);(function(t){t.exports=o0})(s0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=Ie.exports,an=s0.exports;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Po={};function Rr(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(Po[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=Object.prototype.hasOwnProperty,CE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},Wp={};function bE(t){return $c.call(Wp,t)?!0:$c.call(Hp,t)?!1:CE.test(t)?Wp[t]=!0:(Hp[t]=!0,!1)}function TE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AE(t,e,n,i){if(e===null||typeof e>"u"||TE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);At[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);At[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);At[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,n,r,i)&&(n=null),i||r===null?bE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var mi=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),u0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),jp=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,sc;function uo(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function LE(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case Xc:return"Profiler";case sf:return"StrictMode";case qc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c0:return(t.displayName||"Context")+".Consumer";case u0:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Zc(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return Zc(t(e))}catch{}}return null}function PE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RE(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=RE(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Qc(t,e){p0(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var co=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(co(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function m0(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,v0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DE=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){DE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IE=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nd(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sd=null,ys=null,Ss=null;function Zp(t){if(t=ea(t)){if(typeof sd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=ru(e),sd(t.stateNode,t.type,e))}}function y0(t){ys?Ss?Ss.push(t):Ss=[t]:ys=t}function S0(){if(ys){var t=ys,e=Ss;if(Ss=ys=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function w0(t,e){return t(e)}function M0(){}var lc=!1;function E0(t,e,n){if(lc)return t(e,n);lc=!0;try{return w0(t,e,n)}finally{lc=!1,(ys!==null||Ss!==null)&&(M0(),S0())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var i=ru(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var od=!1;if(di)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){od=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{od=!1}function zE(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var go=!1,fl=null,hl=!1,ad=null,kE={onError:function(t){go=!0,fl=t}};function FE(t,e,n,i,r,s,o,a,l){go=!1,fl=null,zE.apply(kE,arguments)}function NE(t,e,n,i,r,s,o,a,l){if(FE.apply(this,arguments),go){if(go){var u=fl;go=!1,fl=null}else throw Error(ne(198));hl||(hl=!0,ad=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function C0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if(Dr(t)!==t)throw Error(ne(188))}function OE(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kp(r),t;if(s===i)return Kp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function b0(t){return t=OE(t),t!==null?T0(t):null}function T0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T0(t);if(e!==null)return e;t=t.sibling}return null}var A0=an.unstable_scheduleCallback,Qp=an.unstable_cancelCallback,UE=an.unstable_shouldYield,BE=an.unstable_requestPaint,ft=an.unstable_now,VE=an.unstable_getCurrentPriorityLevel,uf=an.unstable_ImmediatePriority,L0=an.unstable_UserBlockingPriority,pl=an.unstable_NormalPriority,GE=an.unstable_LowPriority,P0=an.unstable_IdlePriority,eu=null,Xn=null;function HE(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(eu,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:$E,WE=Math.log,jE=Math.LN2;function $E(t){return t>>>=0,t===0?32:31-(WE(t)/jE|0)|0}var Ia=64,za=4194304;function fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fo(a):(s&=o,s!==0&&(i=fo(s)))}else o=n&~r,o!==0?i=fo(o):s!==0&&(i=fo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=XE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=Ia;return Ia<<=1,(Ia&4194240)===0&&(Ia=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function YE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function D0(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var I0,df,z0,k0,F0,ud=!1,ka=[],Fi=null,Ni=null,Oi=null,Io=new Map,zo=new Map,Ai=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jp(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function KE(t,e,n,i,r){switch(e){case"focusin":return Fi=to(Fi,t,e,n,i,r),!0;case"dragenter":return Ni=to(Ni,t,e,n,i,r),!0;case"mouseover":return Oi=to(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Io.set(s,to(Io.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,to(zo.get(s)||null,t,e,n,i,r)),!0}return!1}function N0(t){var e=lr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=C0(n),e!==null){t.blockedOn=e,F0(t.priority,function(){z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rd=i,n.target.dispatchEvent(i),rd=null}else return e=ea(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){Ka(t)&&n.delete(e)}function QE(){ud=!1,Fi!==null&&Ka(Fi)&&(Fi=null),Ni!==null&&Ka(Ni)&&(Ni=null),Oi!==null&&Ka(Oi)&&(Oi=null),Io.forEach(em),zo.forEach(em)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,QE)))}function ko(t){function e(r){return no(r,t)}if(0<ka.length){no(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&no(Fi,t),Ni!==null&&no(Ni,t),Oi!==null&&no(Oi,t),Io.forEach(e),zo.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)N0(n),n.blockedOn===null&&Ai.shift()}var ws=mi.ReactCurrentBatchConfig,gl=!0;function JE(t,e,n,i){var r=Xe,s=ws.transition;ws.transition=null;try{Xe=1,ff(t,e,n,i)}finally{Xe=r,ws.transition=s}}function eC(t,e,n,i){var r=Xe,s=ws.transition;ws.transition=null;try{Xe=4,ff(t,e,n,i)}finally{Xe=r,ws.transition=s}}function ff(t,e,n,i){if(gl){var r=cd(t,e,n,i);if(r===null)xc(t,e,i,vl,n),Jp(t,i);else if(KE(r,t,e,n,i))i.stopPropagation();else if(Jp(t,i),e&4&&-1<ZE.indexOf(t)){for(;r!==null;){var s=ea(r);if(s!==null&&I0(s),s=cd(t,e,n,i),s===null&&xc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var vl=null;function cd(t,e,n,i){if(vl=null,t=lf(i),t=lr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=C0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function O0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case uf:return 1;case L0:return 4;case pl:case GE:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Ri=null,hf=null,Qa=null;function U0(){if(Qa)return Qa;var t,e=hf,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function tm(){return!1}function cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:tm,this.isPropagationStopped=tm,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=cn(Hs),Jo=st({},Hs,{view:0,detail:0}),tC=cn(Jo),cc,dc,io,tu=st({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(cc=t.screenX-io.screenX,dc=t.screenY-io.screenY):dc=cc=0,io=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),nm=cn(tu),nC=st({},tu,{dataTransfer:0}),iC=cn(nC),rC=st({},Jo,{relatedTarget:0}),fc=cn(rC),sC=st({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),oC=cn(sC),aC=st({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lC=cn(aC),uC=st({},Hs,{data:0}),im=cn(uC),cC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fC[t])?!!e[t]:!1}function mf(){return hC}var pC=st({},Jo,{key:function(t){if(t.key){var e=cC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mC=cn(pC),gC=st({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=cn(gC),vC=st({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),_C=cn(vC),xC=st({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yC=cn(xC),SC=st({},tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=cn(SC),MC=[9,13,27,32],gf=di&&"CompositionEvent"in window,vo=null;di&&"documentMode"in document&&(vo=document.documentMode);var EC=di&&"TextEvent"in window&&!vo,B0=di&&(!gf||vo&&8<vo&&11>=vo),sm=String.fromCharCode(32),om=!1;function V0(t,e){switch(t){case"keyup":return MC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function CC(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function bC(t,e){if(as)return t==="compositionend"||!gf&&V0(t,e)?(t=U0(),Qa=hf=Ri=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TC[t.type]:e==="textarea"}function H0(t,e,n,i){y0(i),e=_l(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _o=null,Fo=null;function AC(t){ev(t,0)}function nu(t){var e=cs(t);if(h0(e))return t}function LC(t,e){if(t==="change")return e}var W0=!1;if(di){var hc;if(di){var pc="oninput"in document;if(!pc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),pc=typeof lm.oninput=="function"}hc=pc}else hc=!1;W0=hc&&(!document.documentMode||9<document.documentMode)}function um(){_o&&(_o.detachEvent("onpropertychange",j0),Fo=_o=null)}function j0(t){if(t.propertyName==="value"&&nu(Fo)){var e=[];H0(e,Fo,t,lf(t)),E0(AC,e)}}function PC(t,e,n){t==="focusin"?(um(),_o=e,Fo=n,_o.attachEvent("onpropertychange",j0)):t==="focusout"&&um()}function RC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu(Fo)}function DC(t,e){if(t==="click")return nu(e)}function IC(t,e){if(t==="input"||t==="change")return nu(e)}function zC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:zC;function No(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!$c.call(e,r)||!On(t[r],e[r]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=cm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function $0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function X0(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kC(t){var e=X0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$0(n.ownerDocument.documentElement,n)){if(i!==null&&vf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dm(n,s);var o=dm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FC=di&&"documentMode"in document&&11>=document.documentMode,ls=null,dd=null,xo=null,fd=!1;function fm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||ls==null||ls!==dl(i)||(i=ls,"selectionStart"in i&&vf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xo&&No(xo,i)||(xo=i,i=_l(dd,"onSelect"),0<i.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ls)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},mc={},q0={};di&&(q0=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function iu(t){if(mc[t])return mc[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q0)return mc[t]=e[n];return t}var Y0=iu("animationend"),Z0=iu("animationiteration"),K0=iu("animationstart"),Q0=iu("transitionend"),J0=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){J0.set(t,e),Rr(e,[t])}for(var gc=0;gc<hm.length;gc++){var vc=hm[gc],NC=vc.toLowerCase(),OC=vc[0].toUpperCase()+vc.slice(1);$i(NC,"on"+OC)}$i(Y0,"onAnimationEnd");$i(Z0,"onAnimationIteration");$i(K0,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(Q0,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function pm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,NE(i,e,void 0,t),t.currentTarget=null}function ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}}}if(hl)throw t=ad,hl=!1,ad=null,t}function Ke(t,e){var n=e[vd];n===void 0&&(n=e[vd]=new Set);var i=t+"__bubble";n.has(i)||(tv(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),tv(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Oa]){t[Oa]=!0,l0.forEach(function(n){n!=="selectionchange"&&(UC.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,_c("selectionchange",!1,e))}}function tv(t,e,n,i){switch(O0(e)){case 1:var r=JE;break;case 4:r=eC;break;default:r=ff}n=r.bind(null,e,n,t),r=void 0,!od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}E0(function(){var u=s,c=lf(n),d=[];e:{var f=J0.get(t);if(f!==void 0){var g=pf,_=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":g=mC;break;case"focusin":_="focus",g=fc;break;case"focusout":_="blur",g=fc;break;case"beforeblur":case"afterblur":g=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=iC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=_C;break;case Y0:case Z0:case K0:g=oC;break;case Q0:g=yC;break;case"scroll":g=tC;break;case"wheel":g=wC;break;case"copy":case"cut":case"paste":g=lC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rm}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Do(v,m),S!=null&&p.push(Uo(v,S,y)))),h)break;v=v.return}0<p.length&&(f=new g(f,_,null,n,c),d.push({event:f,listeners:p}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==rd&&(_=n.relatedTarget||n.fromElement)&&(lr(_)||_[fi]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?lr(_):null,_!==null&&(h=Dr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=nm,S="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=rm,S="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?f:cs(g),y=_==null?f:cs(_),f=new p(S,v+"leave",g,n,c),f.target=h,f.relatedTarget=y,S=null,lr(c)===u&&(p=new p(m,v+"enter",_,n,c),p.target=y,p.relatedTarget=h,S=p),h=S,g&&_)t:{for(p=g,m=_,v=0,y=p;y;y=ts(y))v++;for(y=0,S=m;S;S=ts(S))y++;for(;0<v-y;)p=ts(p),v--;for(;0<y-v;)m=ts(m),y--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=ts(p),m=ts(m)}p=null}else p=null;g!==null&&mm(d,f,g,p,!1),_!==null&&h!==null&&mm(d,h,_,p,!0)}}e:{if(f=u?cs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var w=LC;else if(am(f))if(W0)w=IC;else{w=RC;var C=PC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=DC);if(w&&(w=w(t,u))){H0(d,w,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Jc(f,"number",f.value)}switch(C=u?cs(u):window,t){case"focusin":(am(C)||C.contentEditable==="true")&&(ls=C,dd=u,xo=null);break;case"focusout":xo=dd=ls=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,fm(d,n,c);break;case"selectionchange":if(FC)break;case"keydown":case"keyup":fm(d,n,c)}var L;if(gf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else as?V0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(B0&&n.locale!=="ko"&&(as||x!=="onCompositionStart"?x==="onCompositionEnd"&&as&&(L=U0()):(Ri=c,hf="value"in Ri?Ri.value:Ri.textContent,as=!0)),C=_l(u,x),0<C.length&&(x=new im(x,t,null,n,c),d.push({event:x,listeners:C}),L?x.data=L:(L=G0(n),L!==null&&(x.data=L)))),(L=EC?CC(t,n):bC(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(c=new im("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}ev(d,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Do(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Do(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Do(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BC=/\r\n?/g,VC=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(BC,`
`).replace(VC,"")}function Ua(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(ne(425))}function xl(){}var hd=null,pd=null;function md(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,GC=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(WC)}:gd;function WC(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ko(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ko(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ws,Bo="__reactProps$"+Ws,fi="__reactContainer$"+Ws,vd="__reactEvents$"+Ws,jC="__reactListeners$"+Ws,$C="__reactHandles$"+Ws;function lr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[jn])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[jn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function ru(t){return t[Bo]||null}var _d=[],ds=-1;function Xi(t){return{current:t}}function Qe(t){0>ds||(t.current=_d[ds],_d[ds]=null,ds--)}function Ze(t,e){ds++,_d[ds]=t.current,t.current=e}var ji={},kt=Xi(ji),Yt=Xi(!1),Cr=ji;function Ds(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function yl(){Qe(Yt),Qe(kt)}function xm(t,e,n){if(kt.current!==ji)throw Error(ne(168));Ze(kt,e),Ze(Yt,n)}function nv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,PE(t)||"Unknown",r));return st({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,Cr=kt.current,Ze(kt,t),Ze(Yt,Yt.current),!0}function ym(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=nv(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,Qe(Yt),Qe(kt),Ze(kt,t)):Qe(Yt),Ze(Yt,n)}var ri=null,su=!1,Sc=!1;function iv(t){ri===null?ri=[t]:ri.push(t)}function XC(t){su=!0,iv(t)}function qi(){if(!Sc&&ri!==null){Sc=!0;var t=0,e=Xe;try{var n=ri;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ri=null,su=!1}catch(r){throw ri!==null&&(ri=ri.slice(t+1)),A0(uf,qi),r}finally{Xe=e,Sc=!1}}return null}var fs=[],hs=0,wl=null,Ml=0,mn=[],gn=0,br=null,ai=1,li="";function tr(t,e){fs[hs++]=Ml,fs[hs++]=wl,wl=t,Ml=e}function rv(t,e,n){mn[gn++]=ai,mn[gn++]=li,mn[gn++]=br,br=t;var i=ai;t=li;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-Fn(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function _f(t){t.return!==null&&(tr(t,1),rv(t,1,0))}function xf(t){for(;t===wl;)wl=fs[--hs],fs[hs]=null,Ml=fs[--hs],fs[hs]=null;for(;t===br;)br=mn[--gn],mn[gn]=null,li=mn[--gn],mn[gn]=null,ai=mn[--gn],mn[gn]=null}var on=null,sn=null,et=!1,Pn=null;function sv(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(et){var e=sn;if(e){var n=e;if(!Sm(t,e)){if(xd(t))throw Error(ne(418));e=Ui(n.nextSibling);var i=on;e&&Sm(t,e)?sv(i,n):(t.flags=t.flags&-4097|2,et=!1,on=t)}}else{if(xd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,et=!1,on=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Ba(t){if(t!==on)return!1;if(!et)return wm(t),et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!md(t.type,t.memoizedProps)),e&&(e=sn)){if(xd(t))throw ov(),Error(ne(418));for(;e;)sv(t,e),e=Ui(e.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?Ui(t.stateNode.nextSibling):null;return!0}function ov(){for(var t=sn;t;)t=Ui(t.nextSibling)}function Is(){sn=on=null,et=!1}function yf(t){Pn===null?Pn=[t]:Pn.push(t)}var qC=mi.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var El=Xi(null),Cl=null,ps=null,Sf=null;function wf(){Sf=ps=Cl=null}function Mf(t){var e=El.current;Qe(El),t._currentValue=e}function Sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Cl=t,Sf=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(qt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Sf!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Cl===null)throw Error(ne(308));ps=t,Cl.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var ur=null;function Ef(t){ur===null?ur=[t]:ur.push(t)}function av(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Oe&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function Mm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,p=a;switch(f=e,g=n,p.tag){case 1:if(_=p.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=st({},d,f);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=d}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var uv=new a0.Component().refs;function wd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Gi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Nn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Gi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Nn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=Gi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Nn(e,t,i,n),el(e,t,i))}};function Cm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,i)||!No(r,s):!0}function cv(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=Zt(e)?Cr:kt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function Md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=uv,Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=Zt(e)?Cr:kt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ou.enqueueReplaceState(r,r.state,null),bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===uv&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tm(t){var e=t._init;return e(t._payload)}function dv(t){function e(m,v){if(t){var y=m.deletions;y===null?(m.deletions=[v],m.flags|=16):y.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Hi(m,v),m.index=0,m.sibling=null,m}function s(m,v,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<v?(m.flags|=2,v):y):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,y,S){return v===null||v.tag!==6?(v=Ac(y,m.mode,S),v.return=m,v):(v=r(v,y),v.return=m,v)}function l(m,v,y,S){var w=y.type;return w===os?c(m,v,y.props.children,S,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&Tm(w)===v.type)?(S=r(v,y.props),S.ref=ro(m,v,y),S.return=m,S):(S=ol(y.type,y.key,y.props,null,m.mode,S),S.ref=ro(m,v,y),S.return=m,S)}function u(m,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Lc(y,m.mode,S),v.return=m,v):(v=r(v,y.children||[]),v.return=m,v)}function c(m,v,y,S,w){return v===null||v.tag!==7?(v=gr(y,m.mode,S,w),v.return=m,v):(v=r(v,y),v.return=m,v)}function d(m,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ac(""+v,m.mode,y),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return y=ol(v.type,v.key,v.props,null,m.mode,y),y.ref=ro(m,null,v),y.return=m,y;case ss:return v=Lc(v,m.mode,y),v.return=m,v;case bi:var S=v._init;return d(m,S(v._payload),y)}if(co(v)||Js(v))return v=gr(v,m.mode,y,null),v.return=m,v;Va(m,v)}return null}function f(m,v,y,S){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(m,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:return y.key===w?l(m,v,y,S):null;case ss:return y.key===w?u(m,v,y,S):null;case bi:return w=y._init,f(m,v,w(y._payload),S)}if(co(y)||Js(y))return w!==null?null:c(m,v,y,S,null);Va(m,y)}return null}function g(m,v,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(v,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pa:return m=m.get(S.key===null?y:S.key)||null,l(v,m,S,w);case ss:return m=m.get(S.key===null?y:S.key)||null,u(v,m,S,w);case bi:var C=S._init;return g(m,v,y,C(S._payload),w)}if(co(S)||Js(S))return m=m.get(y)||null,c(v,m,S,w,null);Va(v,S)}return null}function _(m,v,y,S){for(var w=null,C=null,L=v,x=v=0,b=null;L!==null&&x<y.length;x++){L.index>x?(b=L,L=null):b=L.sibling;var P=f(m,L,y[x],S);if(P===null){L===null&&(L=b);break}t&&L&&P.alternate===null&&e(m,L),v=s(P,v,x),C===null?w=P:C.sibling=P,C=P,L=b}if(x===y.length)return n(m,L),et&&tr(m,x),w;if(L===null){for(;x<y.length;x++)L=d(m,y[x],S),L!==null&&(v=s(L,v,x),C===null?w=L:C.sibling=L,C=L);return et&&tr(m,x),w}for(L=i(m,L);x<y.length;x++)b=g(L,m,x,y[x],S),b!==null&&(t&&b.alternate!==null&&L.delete(b.key===null?x:b.key),v=s(b,v,x),C===null?w=b:C.sibling=b,C=b);return t&&L.forEach(function(k){return e(m,k)}),et&&tr(m,x),w}function p(m,v,y,S){var w=Js(y);if(typeof w!="function")throw Error(ne(150));if(y=w.call(y),y==null)throw Error(ne(151));for(var C=w=null,L=v,x=v=0,b=null,P=y.next();L!==null&&!P.done;x++,P=y.next()){L.index>x?(b=L,L=null):b=L.sibling;var k=f(m,L,P.value,S);if(k===null){L===null&&(L=b);break}t&&L&&k.alternate===null&&e(m,L),v=s(k,v,x),C===null?w=k:C.sibling=k,C=k,L=b}if(P.done)return n(m,L),et&&tr(m,x),w;if(L===null){for(;!P.done;x++,P=y.next())P=d(m,P.value,S),P!==null&&(v=s(P,v,x),C===null?w=P:C.sibling=P,C=P);return et&&tr(m,x),w}for(L=i(m,L);!P.done;x++,P=y.next())P=g(L,m,x,P.value,S),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?x:P.key),v=s(P,v,x),C===null?w=P:C.sibling=P,C=P);return t&&L.forEach(function(te){return e(m,te)}),et&&tr(m,x),w}function h(m,v,y,S){if(typeof y=="object"&&y!==null&&y.type===os&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:e:{for(var w=y.key,C=v;C!==null;){if(C.key===w){if(w=y.type,w===os){if(C.tag===7){n(m,C.sibling),v=r(C,y.props.children),v.return=m,m=v;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bi&&Tm(w)===C.type){n(m,C.sibling),v=r(C,y.props),v.ref=ro(m,C,y),v.return=m,m=v;break e}n(m,C);break}else e(m,C);C=C.sibling}y.type===os?(v=gr(y.props.children,m.mode,S,y.key),v.return=m,m=v):(S=ol(y.type,y.key,y.props,null,m.mode,S),S.ref=ro(m,v,y),S.return=m,m=S)}return o(m);case ss:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(m,v.sibling),v=r(v,y.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=Lc(y,m.mode,S),v.return=m,m=v}return o(m);case bi:return C=y._init,h(m,v,C(y._payload),S)}if(co(y))return _(m,v,y,S);if(Js(y))return p(m,v,y,S);Va(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,y),v.return=m,m=v):(n(m,v),v=Ac(y,m.mode,S),v.return=m,m=v),o(m)):n(m,v)}return h}var zs=dv(!0),fv=dv(!1),ta={},qn=Xi(ta),Vo=Xi(ta),Go=Xi(ta);function cr(t){if(t===ta)throw Error(ne(174));return t}function bf(t,e){switch(Ze(Go,e),Ze(Vo,t),Ze(qn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=td(e,t)}Qe(qn),Ze(qn,e)}function ks(){Qe(qn),Qe(Vo),Qe(Go)}function hv(t){cr(Go.current);var e=cr(qn.current),n=td(e,t.type);e!==n&&(Ze(Vo,t),Ze(qn,n))}function Tf(t){Vo.current===t&&(Qe(qn),Qe(Vo))}var nt=Xi(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function Af(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var tl=mi.ReactCurrentDispatcher,Mc=mi.ReactCurrentBatchConfig,Tr=0,rt=null,vt=null,wt=null,Al=!1,yo=!1,Ho=0,YC=0;function Pt(){throw Error(ne(321))}function Lf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Pf(t,e,n,i,r,s){if(Tr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?JC:eb,t=n(i,r),yo){s=0;do{if(yo=!1,Ho=0,25<=s)throw Error(ne(301));s+=1,wt=vt=null,e.updateQueue=null,tl.current=tb,t=n(i,r)}while(yo)}if(tl.current=Ll,e=vt!==null&&vt.next!==null,Tr=0,wt=vt=rt=null,Al=!1,e)throw Error(ne(300));return t}function Rf(){var t=Ho!==0;return Ho=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?rt.memoizedState=wt=t:wt=wt.next=t,wt}function wn(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=wt===null?rt.memoizedState:wt.next;if(e!==null)wt=e,vt=t;else{if(t===null)throw Error(ne(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},wt===null?rt.memoizedState=wt=t:wt=wt.next=t}return wt}function Wo(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,rt.lanes|=c,Ar|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function pv(){}function mv(t,e){var n=rt,i=wn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,Df(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,jo(9,vv.bind(null,n,i,r,e),void 0,null),Mt===null)throw Error(ne(349));(Tr&30)!==0||gv(n,e,r)}return r}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,i){e.value=n,e.getSnapshot=i,xv(e)&&yv(t)}function _v(t,e,n){return n(function(){xv(e)&&yv(t)})}function xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function yv(t){var e=hi(t,1);e!==null&&Nn(e,t,1,-1)}function Am(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=QC.bind(null,rt,t),[e.memoizedState,t]}function jo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sv(){return wn().memoizedState}function nl(t,e,n,i){var r=Gn();rt.flags|=t,r.memoizedState=jo(1|e,n,void 0,i===void 0?null:i)}function au(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&Lf(i,o.deps)){r.memoizedState=jo(e,n,s,i);return}}rt.flags|=t,r.memoizedState=jo(1|e,n,s,i)}function Lm(t,e){return nl(8390656,8,t,e)}function Df(t,e){return au(2048,8,t,e)}function wv(t,e){return au(4,2,t,e)}function Mv(t,e){return au(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,Ev.bind(null,e,t),n)}function If(){}function bv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Lf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Av(t,e,n){return(Tr&21)===0?(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n):(On(n,e)||(n=R0(),rt.lanes|=n,Ar|=n,t.baseState=!0),e)}function ZC(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{Xe=n,Mc.transition=i}}function Lv(){return wn().memoizedState}function KC(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pv(t))Rv(e,n);else if(n=av(t,e,n,i),n!==null){var r=Vt();Nn(n,t,i,r),Dv(n,e,i)}}function QC(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pv(t))Rv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=av(t,e,r,i),n!==null&&(r=Vt(),Nn(n,t,i,r),Dv(n,e,i))}}function Pv(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function Rv(t,e){yo=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var Ll={readContext:Sn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},JC={readContext:Sn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=KC.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:If,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=ZC.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Gn();if(et){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Mt===null)throw Error(ne(349));(Tr&30)!==0||gv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lm(_v.bind(null,i,s,t),[t]),i.flags|=2048,jo(9,vv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Mt.identifierPrefix;if(et){var n=li,i=ai;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eb={readContext:Sn,useCallback:bv,useContext:Sn,useEffect:Df,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Mv,useMemo:Tv,useReducer:Ec,useRef:Sv,useState:function(){return Ec(Wo)},useDebugValue:If,useDeferredValue:function(t){var e=wn();return Av(e,vt.memoizedState,t)},useTransition:function(){var t=Ec(Wo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1},tb={readContext:Sn,useCallback:bv,useContext:Sn,useEffect:Df,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Mv,useMemo:Tv,useReducer:Cc,useRef:Sv,useState:function(){return Cc(Wo)},useDebugValue:If,useDeferredValue:function(t){var e=wn();return vt===null?e.memoizedState=t:Av(e,vt.memoizedState,t)},useTransition:function(){var t=Cc(Wo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:Lv,unstable_isNewReconciler:!1};function Fs(t,e){try{var n="",i=e;do n+=LE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nb=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,zd=i),Ed(t,e)},n}function zv(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ed(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gb.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var ib=mi.ReactCurrentOwner,qt=!1;function Ut(t,e,n,i){e.child=t===null?fv(e,null,n,i):zs(e,t.child,n,i)}function Im(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Pf(t,e,n,i,s,r),n=Rf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(et&&n&&_f(e),e.flags|=1,Ut(t,e,i,r),e.child)}function zm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kv(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(No(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Cd(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(gs,tn),tn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(gs,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ze(gs,tn),tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ze(gs,tn),tn|=i;return Ut(t,e,r,n),e.child}function Nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,i,r){var s=Zt(n)?Cr:kt.current;return s=Ds(e,s),Ms(e,r),n=Pf(t,e,n,i,s,r),i=Rf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(et&&i&&_f(e),e.flags|=1,Ut(t,e,n,r),e.child)}function km(t,e,n,i,r){if(Zt(n)){var s=!0;Sl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)il(t,e),cv(e,n,i),Md(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=Zt(n)?Cr:kt.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&bm(e,o,i,u),Ti=!1;var f=e.memoizedState;o.state=f,bl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Yt.current||Ti?(typeof c=="function"&&(wd(e,n,c,i),l=e.memoizedState),(a=Ti||Cm(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:An(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Zt(n)?Cr:kt.current,l=Ds(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&bm(e,o,i,l),Ti=!1,f=e.memoizedState,o.state=f,bl(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Yt.current||Ti?(typeof g=="function"&&(wd(e,n,g,i),_=e.memoizedState),(u=Ti||Cm(e,n,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return bd(t,e,n,i,s,r)}function bd(t,e,n,i,r,s){Nv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,n,!1),pi(t,e,s);i=e.stateNode,ib.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=i.state,r&&ym(e,n,!0),e.child}function Ov(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),bf(t,e.containerInfo)}function Fm(t,e,n,i,r){return Is(),yf(r),e.flags|=256,Ut(t,e,n,i),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uv(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ze(nt,r&1),t===null)return yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cu(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ad(n),e.memoizedState=Td,t):zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rb(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hi(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&yf(i),zs(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rb(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=bc(Error(ne(422))),Ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cu({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&zs(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Td,s);if((e.mode&1)===0)return Ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=bc(s,i,void 0),Ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,qt||a){if(i=Mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),Nn(i,t,r,-1))}return Bf(),i=bc(Error(ne(421))),Ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vb.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,sn=Ui(r.nextSibling),on=e,et=!0,Pn=null,t!==null&&(mn[gn++]=ai,mn[gn++]=li,mn[gn++]=br,ai=t.id,li=t.overflow,br=e),e=zf(e,i.children),e.flags|=4096,e)}function Nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sd(t.return,e,n)}function Tc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ut(t,e,i.children,n),i=nt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nm(t,n,e);else if(t.tag===19)Nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(nt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sb(t,e,n){switch(e.tag){case 3:Ov(e),Is();break;case 5:hv(e);break;case 1:Zt(e.type)&&Sl(e);break;case 4:bf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ze(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(nt,nt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Uv(t,e,n):(Ze(nt,nt.current&1),t=pi(t,e,n),t!==null?t.sibling:null);Ze(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Bv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ze(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return pi(t,e,n)}var Vv,Ld,Gv,Hv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};Gv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cr(qn.current);var s=null;switch(n){case"input":r=Kc(t,r),i=Kc(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=ed(t,r),i=ed(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}nd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ob(t,e,n){var i=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Zt(e.type)&&yl(),Rt(e),null;case 3:return i=e.stateNode,ks(),Qe(Yt),Qe(kt),Af(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pn!==null&&(Nd(Pn),Pn=null))),Ld(t,e),Rt(e),null;case 5:Tf(e);var r=cr(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)Gv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Rt(e),null}if(t=cr(qn.current),Ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(r=0;r<ho.length;r++)Ke(ho[r],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":$p(i,s),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ke("invalid",i);break;case"textarea":qp(i,s),Ke("invalid",i)}nd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ke("scroll",i)}switch(n){case"input":Ra(i),Xp(i,s,!0);break;case"textarea":Ra(i),Yp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[Bo]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(o=id(n,i),n){case"dialog":Ke("cancel",t),Ke("close",t),r=i;break;case"iframe":case"object":case"embed":Ke("load",t),r=i;break;case"video":case"audio":for(r=0;r<ho.length;r++)Ke(ho[r],t);r=i;break;case"source":Ke("error",t),r=i;break;case"img":case"image":case"link":Ke("error",t),Ke("load",t),r=i;break;case"details":Ke("toggle",t),r=i;break;case"input":$p(t,i),r=Kc(t,i),Ke("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Ke("invalid",t);break;case"textarea":qp(t,i),r=ed(t,i),Ke("invalid",t);break;default:r=i}nd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?x0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&v0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(t,l):typeof l=="number"&&Ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ke("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":Ra(t),Xp(t,i,!1);break;case"textarea":Ra(t),Yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=cr(Go.current),cr(qn.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Rt(e),null;case 13:if(Qe(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(et&&sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ov(),Is(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[jn]=e}else Is(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else Pn!==null&&(Nd(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(nt.current&1)!==0?xt===0&&(xt=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return ks(),Ld(t,e),t===null&&Oo(e.stateNode.containerInfo),Rt(e),null;case 10:return Mf(e.type._context),Rt(e),null;case 17:return Zt(e.type)&&yl(),Rt(e),null;case 19:if(Qe(nt),s=e.memoizedState,s===null)return Rt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ze(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ft()>Ns&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return Rt(e),null}else 2*ft()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,n=nt.current,Ze(nt,i?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(tn&1073741824)!==0&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ab(t,e){switch(xf(e),e.tag){case 1:return Zt(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),Qe(Yt),Qe(kt),Af(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Tf(e),null;case 13:if(Qe(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(nt),null;case 4:return ks(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Ha=!1,zt=!1,lb=typeof WeakSet=="function"?WeakSet:Set,me=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function Pd(t,e,n){try{n()}catch(i){ut(t,e,i)}}var Om=!1;function ub(t,e){if(hd=gl,t=X0(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pd={focusedElem:t,selectionRange:n},gl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:An(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){ut(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Om,Om=!1,_}function So(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pd(e,n,s)}r=r.next}while(r!==i)}}function lu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Bo],delete e[vd],delete e[jC],delete e[$C])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Um(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function Id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}var Ct=null,Ln=!1;function Ci(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(eu,n)}catch{}switch(n.tag){case 5:zt||ms(n,e);case 6:var i=Ct,r=Ln;Ct=null,Ci(t,e,n),Ct=i,Ln=r,Ct!==null&&(Ln?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(Ln?(t=Ct,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),ko(t)):yc(Ct,n.stateNode));break;case 4:i=Ct,r=Ln,Ct=n.stateNode.containerInfo,Ln=!0,Ci(t,e,n),Ct=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Pd(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!zt&&(ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Ci(t,e,n),zt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lb),e.forEach(function(i){var r=_b.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,Ln=!1;break e;case 3:Ct=a.stateNode.containerInfo,Ln=!0;break e;case 4:Ct=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Ct===null)throw Error(ne(160));$v(s,o,r),Ct=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xv(e,t),e=e.sibling}function Xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Vn(t),i&4){try{So(3,t,t.return),lu(3,t)}catch(p){ut(t,t.return,p)}try{So(5,t,t.return)}catch(p){ut(t,t.return,p)}}break;case 1:Tn(e,t),Vn(t),i&512&&n!==null&&ms(n,n.return);break;case 5:if(Tn(e,t),Vn(t),i&512&&n!==null&&ms(n,n.return),t.flags&32){var r=t.stateNode;try{Ro(r,"")}catch(p){ut(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),id(a,o);var u=id(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?x0(r,d):c==="dangerouslySetInnerHTML"?v0(r,d):c==="children"?Ro(r,d):rf(r,c,d,u)}switch(a){case"input":Qc(r,s);break;case"textarea":m0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?xs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Bo]=s}catch(p){ut(t,t.return,p)}}break;case 6:if(Tn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){ut(t,t.return,p)}}break;case 3:if(Tn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(p){ut(t,t.return,p)}break;case 4:Tn(e,t),Vn(t);break;case 13:Tn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nf=ft())),i&4&&Bm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||c,Tn(e,t),zt=u):Tn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(me=t,c=t.child;c!==null;){for(d=me=c;me!==null;){switch(f=me,g=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:ms(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){ut(i,n,p)}}break;case 5:ms(f,f.return);break;case 22:if(f.memoizedState!==null){Gm(d);continue}}g!==null?(g.return=f,me=g):Gm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_0("display",o))}catch(p){ut(t,t.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){ut(t,t.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tn(e,t),Vn(t),i&4&&Bm(t);break;case 21:break;default:Tn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ro(r,""),i.flags&=-33);var s=Um(t);Id(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Um(t);Dd(t,a,o);break;default:throw Error(ne(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cb(t,e,n){me=t,qv(t)}function qv(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Ha;var u=zt;if(Ha=o,(zt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Hm(r):l!==null?(l.return=o,me=l):Hm(r);for(;s!==null;)me=s,qv(s),s=s.sibling;me=r,Ha=a,zt=u}Vm(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,me=s):Vm(t)}}function Vm(t){for(;me!==null;){var e=me;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:zt||lu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Em(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&Rd(e)}catch(f){ut(e,e.return,f)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Gm(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Hm(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lu(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{Rd(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{Rd(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var db=Math.ceil,Pl=mi.ReactCurrentDispatcher,kf=mi.ReactCurrentOwner,xn=mi.ReactCurrentBatchConfig,Oe=0,Mt=null,mt=null,bt=0,tn=0,gs=Xi(0),xt=0,$o=null,Ar=0,uu=0,Ff=0,wo=null,Xt=null,Nf=0,Ns=1/0,ii=null,Rl=!1,zd=null,Vi=null,Wa=!1,Di=null,Dl=0,Mo=0,kd=null,rl=-1,sl=0;function Vt(){return(Oe&6)!==0?ft():rl!==-1?rl:rl=ft()}function Gi(t){return(t.mode&1)===0?1:(Oe&2)!==0&&bt!==0?bt&-bt:qC.transition!==null?(sl===0&&(sl=R0()),sl):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:O0(t.type)),t)}function Nn(t,e,n,i){if(50<Mo)throw Mo=0,kd=null,Error(ne(185));Qo(t,n,i),((Oe&2)===0||t!==Mt)&&(t===Mt&&((Oe&2)===0&&(uu|=n),xt===4&&Li(t,bt)),Kt(t,i),n===1&&Oe===0&&(e.mode&1)===0&&(Ns=ft()+500,su&&qi()))}function Kt(t,e){var n=t.callbackNode;qE(t,e);var i=ml(t,t===Mt?bt:0);if(i===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?XC(Wm.bind(null,t)):iv(Wm.bind(null,t)),HC(function(){(Oe&6)===0&&qi()}),n=null;else{switch(D0(i)){case 1:n=uf;break;case 4:n=L0;break;case 16:n=pl;break;case 536870912:n=P0;break;default:n=pl}n=n_(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(rl=-1,sl=0,(Oe&6)!==0)throw Error(ne(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=ml(t,t===Mt?bt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Il(t,i);else{e=i;var r=Oe;Oe|=2;var s=Kv();(Mt!==t||bt!==e)&&(ii=null,Ns=ft()+500,mr(t,e));do try{pb();break}catch(a){Zv(t,a)}while(1);wf(),Pl.current=s,Oe=r,mt!==null?e=0:(Mt=null,bt=0,e=xt)}if(e!==0){if(e===2&&(r=ld(t),r!==0&&(i=r,e=Fd(t,r))),e===1)throw n=$o,mr(t,0),Li(t,i),Kt(t,ft()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,(i&30)===0&&!fb(r)&&(e=Il(t,i),e===2&&(s=ld(t),s!==0&&(i=s,e=Fd(t,s))),e===1))throw n=$o,mr(t,0),Li(t,i),Kt(t,ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:nr(t,Xt,ii);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Nf+500-ft(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gd(nr.bind(null,t,Xt,ii),e);break}nr(t,Xt,ii);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*db(i/1960))-i,10<i){t.timeoutHandle=gd(nr.bind(null,t,Xt,ii),i);break}nr(t,Xt,ii);break;case 5:nr(t,Xt,ii);break;default:throw Error(ne(329))}}}return Kt(t,ft()),t.callbackNode===n?Yv.bind(null,t):null}function Fd(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Nd(e)),t}function Nd(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function fb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Ff,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Wm(t){if((Oe&6)!==0)throw Error(ne(327));Es();var e=ml(t,0);if((e&1)===0)return Kt(t,ft()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=ld(t);i!==0&&(e=i,n=Fd(t,i))}if(n===1)throw n=$o,mr(t,0),Li(t,e),Kt(t,ft()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Xt,ii),Kt(t,ft()),null}function Of(t,e){var n=Oe;Oe|=1;try{return t(e)}finally{Oe=n,Oe===0&&(Ns=ft()+500,su&&qi())}}function Lr(t){Di!==null&&Di.tag===0&&(Oe&6)===0&&Es();var e=Oe;Oe|=1;var n=xn.transition,i=Xe;try{if(xn.transition=null,Xe=1,t)return t()}finally{Xe=i,xn.transition=n,Oe=e,(Oe&6)===0&&qi()}}function Uf(){tn=gs.current,Qe(gs)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GC(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:ks(),Qe(Yt),Qe(kt),Af();break;case 5:Tf(i);break;case 4:ks();break;case 13:Qe(nt);break;case 19:Qe(nt);break;case 10:Mf(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(Mt=t,mt=t=Hi(t.current,null),bt=tn=e,xt=0,$o=null,Ff=uu=Ar=0,Xt=wo=null,ur!==null){for(e=0;e<ur.length;e++)if(n=ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ur=null}return t}function Zv(t,e){do{var n=mt;try{if(wf(),tl.current=Ll,Al){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Tr=0,wt=vt=rt=null,yo=!1,Ho=0,kf.current=null,n===null||n.return===null){xt=1,$o=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Rm(o);if(g!==null){g.flags&=-257,Dm(g,o,a,s,e),g.mode&1&&Pm(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){Pm(s,u,e),Bf();break e}l=Error(ne(426))}}else if(et&&a.mode&1){var h=Rm(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),Dm(h,o,a,s,e),yf(Fs(l,a));break e}}s=l=Fs(l,a),xt!==4&&(xt=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Iv(s,l,e);Mm(s,m);break e;case 1:a=l;var v=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Vi===null||!Vi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=zv(s,a,e);Mm(s,S);break e}}s=s.return}while(s!==null)}Jv(n)}catch(w){e=w,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(1)}function Kv(){var t=Pl.current;return Pl.current=Ll,t===null?Ll:t}function Bf(){(xt===0||xt===3||xt===2)&&(xt=4),Mt===null||(Ar&268435455)===0&&(uu&268435455)===0||Li(Mt,bt)}function Il(t,e){var n=Oe;Oe|=2;var i=Kv();(Mt!==t||bt!==e)&&(ii=null,mr(t,e));do try{hb();break}catch(r){Zv(t,r)}while(1);if(wf(),Oe=n,Pl.current=i,mt!==null)throw Error(ne(261));return Mt=null,bt=0,xt}function hb(){for(;mt!==null;)Qv(mt)}function pb(){for(;mt!==null&&!UE();)Qv(mt)}function Qv(t){var e=t_(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?Jv(t):mt=e,kf.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=ob(n,e,tn),n!==null){mt=n;return}}else{if(n=ab(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,mt=null;return}}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);xt===0&&(xt=5)}function nr(t,e,n){var i=Xe,r=xn.transition;try{xn.transition=null,Xe=1,mb(t,e,n,i)}finally{xn.transition=r,Xe=i}return null}function mb(t,e,n,i){do Es();while(Di!==null);if((Oe&6)!==0)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YE(t,s),t===Mt&&(mt=Mt=null,bt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wa||(Wa=!0,n_(pl,function(){return Es(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=xn.transition,xn.transition=null;var o=Xe;Xe=1;var a=Oe;Oe|=4,kf.current=null,ub(t,n),Xv(n,t),kC(pd),gl=!!hd,pd=hd=null,t.current=n,cb(n),BE(),Oe=a,Xe=o,xn.transition=s}else t.current=n;if(Wa&&(Wa=!1,Di=t,Dl=r),s=t.pendingLanes,s===0&&(Vi=null),HE(n.stateNode),Kt(t,ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=zd,zd=null,t;return(Dl&1)!==0&&t.tag!==0&&Es(),s=t.pendingLanes,(s&1)!==0?t===kd?Mo++:(Mo=0,kd=t):Mo=0,qi(),null}function Es(){if(Di!==null){var t=D0(Dl),e=xn.transition,n=Xe;try{if(xn.transition=null,Xe=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,Dl=0,(Oe&6)!==0)throw Error(ne(331));var r=Oe;for(Oe|=4,me=t.current;me!==null;){var s=me,o=s.child;if((me.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:So(8,c,s)}var d=c.child;if(d!==null)d.return=c,me=d;else for(;me!==null;){c=me;var f=c.sibling,g=c.return;if(Wv(c),c===u){me=null;break}if(f!==null){f.return=g,me=f;break}me=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}me=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,me=m;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){o=me;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,me=y;else e:for(o=v;me!==null;){if(a=me,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:lu(9,a)}}catch(w){ut(a,a.return,w)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if(Oe=r,qi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(eu,t)}catch{}i=!0}return i}finally{Xe=n,xn.transition=e}}return!1}function jm(t,e,n){e=Fs(n,e),e=Iv(t,e,1),t=Bi(t,e,1),e=Vt(),t!==null&&(Qo(t,1,e),Kt(t,e))}function ut(t,e,n){if(t.tag===3)jm(t,t,n);else for(;e!==null;){if(e.tag===3){jm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Fs(n,t),t=zv(e,t,1),e=Bi(e,t,1),t=Vt(),e!==null&&(Qo(e,1,t),Kt(e,t));break}}e=e.return}}function gb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Mt===t&&(bt&n)===n&&(xt===4||xt===3&&(bt&130023424)===bt&&500>ft()-Nf?mr(t,0):Ff|=n),Kt(t,e)}function e_(t,e){e===0&&((t.mode&1)===0?e=1:(e=za,za<<=1,(za&130023424)===0&&(za=4194304)));var n=Vt();t=hi(t,e),t!==null&&(Qo(t,e,n),Kt(t,n))}function vb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function _b(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)qt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return qt=!1,sb(t,e,n);qt=(t.flags&131072)!==0}else qt=!1,et&&(e.flags&1048576)!==0&&rv(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Ds(e,kt.current);Ms(e,n),r=Pf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cf(e),r.updater=ou,e.stateNode=r,r._reactInternals=e,Md(e,i,t,n),e=bd(null,e,i,!0,s,n)):(e.tag=0,et&&s&&_f(e),Ut(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yb(i),t=An(i,t),r){case 0:e=Cd(null,e,i,t,n);break e;case 1:e=km(null,e,i,t,n);break e;case 11:e=Im(null,e,i,t,n);break e;case 14:e=zm(null,e,i,An(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),km(t,e,i,r,n);case 3:e:{if(Ov(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lv(t,e),bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(ne(423)),e),e=Fm(t,e,i,n,r);break e}else if(i!==r){r=Fs(Error(ne(424)),e),e=Fm(t,e,i,n,r);break e}else for(sn=Ui(e.stateNode.containerInfo.firstChild),on=e,et=!0,Pn=null,n=fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===r){e=pi(t,e,n);break e}Ut(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&yd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,md(i,r)?o=null:s!==null&&md(i,s)&&(e.flags|=32),Nv(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return Uv(t,e,n);case 4:return bf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Ut(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Im(t,e,i,r,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ze(El,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!Yt.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Sn(r),i=i(r),e.flags|=1,Ut(t,e,i,n),e.child;case 14:return i=e.type,r=An(i,e.pendingProps),r=An(i.type,r),zm(t,e,i,r,n);case 15:return kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),il(t,e),e.tag=1,Zt(i)?(t=!0,Sl(e)):t=!1,Ms(e,n),cv(e,i,r),Md(e,i,r,n),bd(null,e,i,!0,t,n);case 19:return Bv(t,e,n);case 22:return Fv(t,e,n)}throw Error(ne(156,e.tag))};function n_(t,e){return A0(t,e)}function xb(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new xb(t,e,n,i)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yb(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return gr(n.children,r,s,e);case sf:o=8,r|=8;break;case Xc:return t=_n(12,n,e,r|2),t.elementType=Xc,t.lanes=s,t;case qc:return t=_n(13,n,e,r),t.elementType=qc,t.lanes=s,t;case Yc:return t=_n(19,n,e,r),t.elementType=Yc,t.lanes=s,t;case d0:return cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u0:o=10;break e;case c0:o=9;break e;case of:o=11;break e;case af:o=14;break e;case bi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function cu(t,e,n,i){return t=_n(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sb(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,i,r,s,o,a,l){return t=new Sb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function wb(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function i_(t){if(!t)return ji;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Zt(n))return nv(t,n,e)}return e}function r_(t,e,n,i,r,s,o,a,l){return t=Gf(n,i,!0,t,r,s,o,a,l),t.context=i_(null),n=t.current,i=Vt(),r=Gi(n),s=ci(i,r),s.callback=e!=null?e:null,Bi(n,s,r),t.current.lanes=r,Qo(t,r,i),Kt(t,i),t}function du(t,e,n,i){var r=e.current,s=Vt(),o=Gi(r);return n=i_(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(Nn(t,r,o,s),el(t,r,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hf(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function Mb(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wf(t){this._internalRoot=t}fu.prototype.render=Wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));du(t,e,null,null)};fu.prototype.unmount=Wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){du(null,t,null,null)}),e[fi]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&N0(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function Eb(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=zl(o);s.call(u)}}var o=r_(e,i,t,0,null,!1,!1,"",Xm);return t._reactRootContainer=o,t[fi]=o.current,Oo(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=zl(l);a.call(u)}}var l=Gf(t,0,!1,null,null,!1,!1,"",Xm);return t._reactRootContainer=l,t[fi]=l.current,Oo(t.nodeType===8?t.parentNode:t),Lr(function(){du(e,l,n,i)}),l}function pu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zl(o);a.call(l)}}du(e,o,t,r)}else o=Eb(n,e,t,r,i);return zl(o)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fo(e.pendingLanes);n!==0&&(cf(e,n|1),Kt(e,ft()),(Oe&6)===0&&(Ns=ft()+500,qi()))}break;case 13:Lr(function(){var i=hi(t,1);if(i!==null){var r=Vt();Nn(i,t,1,r)}}),Hf(t,1)}};df=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=Vt();Nn(e,t,134217728,n)}Hf(t,134217728)}};z0=function(t){if(t.tag===13){var e=Gi(t),n=hi(t,e);if(n!==null){var i=Vt();Nn(n,t,e,i)}Hf(t,e)}};k0=function(){return Xe};F0=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};sd=function(t,e,n){switch(e){case"input":if(Qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ru(i);if(!r)throw Error(ne(90));h0(i),Qc(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};w0=Of;M0=Lr;var Cb={usingClientEntryPoint:!1,Events:[ea,cs,ru,y0,S0,Of]},oo={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bb={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b0(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{eu=ja.inject(bb),Xn=ja}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cb;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(ne(200));return wb(t,e,null,n)};un.createRoot=function(t,e){if(!jf(t))throw Error(ne(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Wf(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=b0(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Lr(t)};un.hydrate=function(t,e,n){if(!hu(e))throw Error(ne(200));return pu(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r_(e,null,t,1,n!=null?n:null,r,!1,s,o),t[fi]=e.current,Oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fu(e)};un.render=function(t,e,n){if(!hu(e))throw Error(ne(200));return pu(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!hu(t))throw Error(ne(40));return t._reactRootContainer?(Lr(function(){pu(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};un.unstable_batchedUpdates=Of;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hu(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return pu(t,e,n,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=un})(r0);var qm=r0.exports;jc.createRoot=qm.createRoot,jc.hydrateRoot=qm.hydrateRoot;new rn().startUp();jc.createRoot(document.getElementById("root")).render(ue(vr.StrictMode,{children:ue(nx,{children:ue(EE,{})})}));
