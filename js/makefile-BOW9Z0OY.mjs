/*! third party licenses: js/vendor.LICENSE.txt */
import{g as d}from"./modulepreload-polyfill-DZeoc1eZ.mjs";function f(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const n={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},t={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},i={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[n]},r={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},a={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},o={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,n,t,i,r,a,o]}}var s=l;const c=d(s),b=f({__proto__:null,default:c},[s]);export{s as a,b as m};