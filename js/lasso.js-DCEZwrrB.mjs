/*! third party licenses: js/vendor.LICENSE.txt */
import{g as l}from"./modulepreload-polyfill-CtIajbZu.mjs";import{a as g}from"./lasso-DUldcO7h.mjs";function f(r,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}function o(){o.warned||(o.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/lasso" instead of "highlight.js/lib/languages/lasso.js"'))}o();var s=g;const c=l(s),d=f({__proto__:null,default:c},[s]);export{d as l};