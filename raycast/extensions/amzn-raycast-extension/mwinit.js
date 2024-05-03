"use strict";var nr=Object.create;var X=Object.defineProperty;var sr=Object.getOwnPropertyDescriptor;var ir=Object.getOwnPropertyNames;var lr=Object.getPrototypeOf,cr=Object.prototype.hasOwnProperty;var w=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),fr=(e,t)=>{for(var o in t)X(e,o,{get:t[o],enumerable:!0})},Ne=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ir(t))!cr.call(e,a)&&a!==o&&X(e,a,{get:()=>t[a],enumerable:!(r=sr(t,a))||r.enumerable});return e};var v=(e,t,o)=>(o=e!=null?nr(lr(e)):{},Ne(t||!e||!e.__esModule?X(o,"default",{value:e,enumerable:!0}):o,e)),pr=e=>Ne(X({},"__esModule",{value:!0}),e);var ve=w((mp,Io)=>{var Wn=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Io.exports=Wn});var Ie=w((hp,So)=>{var Un="2.0.0",Hn=Number.MAX_SAFE_INTEGER||9007199254740991,qn=16,Gn=250,Xn=["major","premajor","minor","preminor","patch","prepatch","prerelease"];So.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:qn,MAX_SAFE_BUILD_LENGTH:Gn,MAX_SAFE_INTEGER:Hn,RELEASE_TYPES:Xn,SEMVER_SPEC_VERSION:Un,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Co=w((A,Ao)=>{var{MAX_SAFE_COMPONENT_LENGTH:Se,MAX_SAFE_BUILD_LENGTH:Bn,MAX_LENGTH:Vn}=Ie(),Jn=ve();A=Ao.exports={};var Yn=A.re=[],Kn=A.safeRe=[],s=A.src=[],i=A.t={},Qn=0,Ae="[a-zA-Z0-9-]",Zn=[["\\s",1],["\\d",Vn],[Ae,Bn]],es=e=>{for(let[t,o]of Zn)e=e.split(`${t}*`).join(`${t}{0,${o}}`).split(`${t}+`).join(`${t}{1,${o}}`);return e},c=(e,t,o)=>{let r=es(t),a=Qn++;Jn(e,a,t),i[e]=a,s[a]=t,Yn[a]=new RegExp(t,o?"g":void 0),Kn[a]=new RegExp(r,o?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*");c("NUMERICIDENTIFIERLOOSE","\\d+");c("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Ae}*`);c("MAINVERSION",`(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})`);c("MAINVERSIONLOOSE",`(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})`);c("PRERELEASEIDENTIFIER",`(?:${s[i.NUMERICIDENTIFIER]}|${s[i.NONNUMERICIDENTIFIER]})`);c("PRERELEASEIDENTIFIERLOOSE",`(?:${s[i.NUMERICIDENTIFIERLOOSE]}|${s[i.NONNUMERICIDENTIFIER]})`);c("PRERELEASE",`(?:-(${s[i.PRERELEASEIDENTIFIER]}(?:\\.${s[i.PRERELEASEIDENTIFIER]})*))`);c("PRERELEASELOOSE",`(?:-?(${s[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[i.PRERELEASEIDENTIFIERLOOSE]})*))`);c("BUILDIDENTIFIER",`${Ae}+`);c("BUILD",`(?:\\+(${s[i.BUILDIDENTIFIER]}(?:\\.${s[i.BUILDIDENTIFIER]})*))`);c("FULLPLAIN",`v?${s[i.MAINVERSION]}${s[i.PRERELEASE]}?${s[i.BUILD]}?`);c("FULL",`^${s[i.FULLPLAIN]}$`);c("LOOSEPLAIN",`[v=\\s]*${s[i.MAINVERSIONLOOSE]}${s[i.PRERELEASELOOSE]}?${s[i.BUILD]}?`);c("LOOSE",`^${s[i.LOOSEPLAIN]}$`);c("GTLT","((?:<|>)?=?)");c("XRANGEIDENTIFIERLOOSE",`${s[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);c("XRANGEIDENTIFIER",`${s[i.NUMERICIDENTIFIER]}|x|X|\\*`);c("XRANGEPLAIN",`[v=\\s]*(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:${s[i.PRERELEASE]})?${s[i.BUILD]}?)?)?`);c("XRANGEPLAINLOOSE",`[v=\\s]*(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:${s[i.PRERELEASELOOSE]})?${s[i.BUILD]}?)?)?`);c("XRANGE",`^${s[i.GTLT]}\\s*${s[i.XRANGEPLAIN]}$`);c("XRANGELOOSE",`^${s[i.GTLT]}\\s*${s[i.XRANGEPLAINLOOSE]}$`);c("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Se}})(?:\\.(\\d{1,${Se}}))?(?:\\.(\\d{1,${Se}}))?`);c("COERCE",`${s[i.COERCEPLAIN]}(?:$|[^\\d])`);c("COERCEFULL",s[i.COERCEPLAIN]+`(?:${s[i.PRERELEASE]})?(?:${s[i.BUILD]})?(?:$|[^\\d])`);c("COERCERTL",s[i.COERCE],!0);c("COERCERTLFULL",s[i.COERCEFULL],!0);c("LONETILDE","(?:~>?)");c("TILDETRIM",`(\\s*)${s[i.LONETILDE]}\\s+`,!0);A.tildeTrimReplace="$1~";c("TILDE",`^${s[i.LONETILDE]}${s[i.XRANGEPLAIN]}$`);c("TILDELOOSE",`^${s[i.LONETILDE]}${s[i.XRANGEPLAINLOOSE]}$`);c("LONECARET","(?:\\^)");c("CARETTRIM",`(\\s*)${s[i.LONECARET]}\\s+`,!0);A.caretTrimReplace="$1^";c("CARET",`^${s[i.LONECARET]}${s[i.XRANGEPLAIN]}$`);c("CARETLOOSE",`^${s[i.LONECARET]}${s[i.XRANGEPLAINLOOSE]}$`);c("COMPARATORLOOSE",`^${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]})$|^$`);c("COMPARATOR",`^${s[i.GTLT]}\\s*(${s[i.FULLPLAIN]})$|^$`);c("COMPARATORTRIM",`(\\s*)${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]}|${s[i.XRANGEPLAIN]})`,!0);A.comparatorTrimReplace="$1$2$3";c("HYPHENRANGE",`^\\s*(${s[i.XRANGEPLAIN]})\\s+-\\s+(${s[i.XRANGEPLAIN]})\\s*$`);c("HYPHENRANGELOOSE",`^\\s*(${s[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[i.XRANGEPLAINLOOSE]})\\s*$`);c("STAR","(<|>)?=?\\s*\\*");c("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");c("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Oo=w((xp,$o)=>{var ts=Object.freeze({loose:!0}),os=Object.freeze({}),rs=e=>e?typeof e!="object"?ts:e:os;$o.exports=rs});var ko=w((gp,No)=>{var Ro=/^[0-9]+$/,To=(e,t)=>{let o=Ro.test(e),r=Ro.test(t);return o&&r&&(e=+e,t=+t),e===t?0:o&&!r?-1:r&&!o?1:e<t?-1:1},as=(e,t)=>To(t,e);No.exports={compareIdentifiers:To,rcompareIdentifiers:as}});var $e=w((yp,Lo)=>{var ne=ve(),{MAX_LENGTH:Do,MAX_SAFE_INTEGER:se}=Ie(),{safeRe:Po,t:Mo}=Co(),ns=Oo(),{compareIdentifiers:U}=ko(),Ce=class e{constructor(t,o){if(o=ns(o),t instanceof e){if(t.loose===!!o.loose&&t.includePrerelease===!!o.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Do)throw new TypeError(`version is longer than ${Do} characters`);ne("SemVer",t,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;let r=t.trim().match(o.loose?Po[Mo.LOOSE]:Po[Mo.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>se||this.major<0)throw new TypeError("Invalid major version");if(this.minor>se||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>se||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(a=>{if(/^[0-9]+$/.test(a)){let l=+a;if(l>=0&&l<se)return l}return a}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(ne("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),U(this.major,t.major)||U(this.minor,t.minor)||U(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let o=0;do{let r=this.prerelease[o],a=t.prerelease[o];if(ne("prerelease compare",o,r,a),r===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(r===void 0)return-1;if(r===a)continue;return U(r,a)}while(++o)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let o=0;do{let r=this.build[o],a=t.build[o];if(ne("prerelease compare",o,r,a),r===void 0&&a===void 0)return 0;if(a===void 0)return 1;if(r===void 0)return-1;if(r===a)continue;return U(r,a)}while(++o)}inc(t,o,r){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,r),this.inc("pre",o,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,r),this.inc("pre",o,r);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let a=Number(r)?1:0;if(!o&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[a];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(o===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(a)}}if(o){let l=[o,a];r===!1&&(l=[o]),U(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Lo.exports=Ce});var Oe=w((wp,Fo)=>{var _o=$e(),ss=(e,t,o=!1)=>{if(e instanceof _o)return e;try{return new _o(e,t)}catch(r){if(!o)return null;throw r}};Fo.exports=ss});var zo=w((bp,jo)=>{var is=Oe(),ls=(e,t)=>{let o=is(e.trim().replace(/^[=v]+/,""),t);return o?o.version:null};jo.exports=ls});var ie=w((Ep,Uo)=>{var Wo=$e(),cs=(e,t,o)=>new Wo(e,o).compare(new Wo(t,o));Uo.exports=cs});var qo=w((vp,Ho)=>{var fs=ie(),ps=(e,t,o)=>fs(e,t,o)>0;Ho.exports=ps});var Xo=w((Ip,Go)=>{var us=ie(),ds=(e,t,o)=>us(e,t,o)<0;Go.exports=ds});var Vo=w((Sp,Bo)=>{var ms=ie(),hs=(e,t,o)=>ms(e,t,o)<=0;Bo.exports=hs});var Yo=w((Ap,Jo)=>{var xs=Oe(),gs=(e,t)=>{let o=xs(e,t);return o?o.version:null};Jo.exports=gs});var As={};fr(As,{default:()=>ar});module.exports=pr(As);var ur=require("@raycast/api");var ke=require("child_process"),De=require("util");var y=(0,De.promisify)(ke.exec),N=e=>typeof e=="object"&&"stderr"in e?e.stderr:Pe(e);var dr=()=>y("ps -eo pid,comm").then(({stdout:e})=>e.split(`
`)),mr=e=>y(`kill -9 ${e}`),hr=e=>dr().then(t=>t.find(o=>o.includes(e))).then(t=>{let[,o]=t?.match(/(\d+)\s+(.*)/)??["","",""];return o}),Me=async(e,t=!1)=>{let o=t?await hr(e):e;o&&await mr(o)};var Le=(e=0)=>new Promise(t=>setTimeout(t,e)),ce=e=>{try{if(typeof e=="string"){let t=JSON.parse(e);if(t&&typeof t=="object")return!0}}catch{}return!1},D=e=>Array.isArray(e)?e.filter(t=>!!t):[];var $=require("@raycast/api"),fe=class{toast;abortable;_abortController;constructor(t){this.abortable=t.abortable,this.toast=$.environment.launchType===$.LaunchType.UserInitiated?new $.Toast(t):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(t){if(this.toast){let{title:o,style:r,message:a,secondaryAction:l}=this.toast;this.toast.title=t.title??o,this.toast.style=t.style??r,this.toast.message=t.message??a,this.abortable=t.abortable??this.abortable,this.toast.secondaryAction=t.secondaryAction??l,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},pe=async e=>{let t=new fe(e);return await t.show(),t};var _e=v(require("os"),1);var{username:xr}=_e.default.userInfo(),gr=(e,t)=>y(`security find-generic-password -a ${e} -s '${t}' -w`).then(({stdout:o})=>o.trim()).catch(o=>{throw console.error("Failed to get password: ",o),new Error(N(o))}),Fe=()=>gr(xr,"amzn_pin");var it=require("@raycast/api");function u(e){let t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function B(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function je(e,t){let o=+u(e);return B(e,o+t)}var yr=Math.pow(10,8)*24*60*60*1e3,zs=-yr;var ze=6e4;var H=43200,ue=1440;var wr=3600;var We=wr*24,Ws=We*7,br=We*365.2425,Er=br/12,Us=Er*3;var vr={};function Ue(){return vr}function de(e){let t=u(e),o=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return o.setUTCFullYear(t.getFullYear()),+e-+o}function He(e,t){return je(e,t*ze)}function P(e,t){let o=u(e),r=u(t),a=o.getTime()-r.getTime();return a<0?-1:a>0?1:a}function qe(e){return B(e,Date.now())}function Ge(e,t){let o=u(e),r=u(t),a=o.getFullYear()-r.getFullYear(),l=o.getMonth()-r.getMonth();return a*12+l}function Xe(e){return t=>{let r=(e?Math[e]:Math.trunc)(t);return r===0?0:r}}function Be(e,t){return+u(e)-+u(t)}function Ve(e){let t=u(e);return t.setHours(23,59,59,999),t}function Je(e){let t=u(e),o=t.getMonth();return t.setFullYear(t.getFullYear(),o+1,0),t.setHours(23,59,59,999),t}function Ye(e){let t=u(e);return+Ve(t)==+Je(t)}function Ke(e,t){let o=u(e),r=u(t),a=P(o,r),l=Math.abs(Ge(o,r)),f;if(l<1)f=0;else{o.getMonth()===1&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-a*l);let n=P(o,r)===-a;Ye(u(e))&&l===1&&P(e,r)===1&&(n=!1),f=a*(l-Number(n))}return f===0?0:f}function Qe(e,t,o){let r=Be(e,t)/1e3;return Xe(o?.roundingMethod)(r)}var Ir={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ze=(e,t,o)=>{let r,a=Ir[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),o?.addSuffix?o.comparison&&o.comparison>0?"in "+r:r+" ago":r};function V(e){return(t={})=>{let o=t.width?String(t.width):e.defaultWidth;return e.formats[o]||e.formats[e.defaultWidth]}}var Sr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ar={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Cr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},et={date:V({formats:Sr,defaultWidth:"full"}),time:V({formats:Ar,defaultWidth:"full"}),dateTime:V({formats:Cr,defaultWidth:"full"})};var $r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},tt=(e,t,o,r)=>$r[e];function M(e){return(t,o)=>{let r=o?.context?String(o.context):"standalone",a;if(r==="formatting"&&e.formattingValues){let f=e.defaultFormattingWidth||e.defaultWidth,n=o?.width?String(o.width):f;a=e.formattingValues[n]||e.formattingValues[f]}else{let f=e.defaultWidth,n=o?.width?String(o.width):e.defaultWidth;a=e.values[n]||e.values[f]}let l=e.argumentCallback?e.argumentCallback(t):t;return a[l]}}var Or={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Rr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Tr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Nr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},kr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Dr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Pr=(e,t)=>{let o=Number(e),r=o%100;if(r>20||r<10)switch(r%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},ot={ordinalNumber:Pr,era:M({values:Or,defaultWidth:"wide"}),quarter:M({values:Rr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:M({values:Tr,defaultWidth:"wide"}),day:M({values:Nr,defaultWidth:"wide"}),dayPeriod:M({values:kr,defaultWidth:"wide",formattingValues:Dr,defaultFormattingWidth:"wide"})};function L(e){return(t,o={})=>{let r=o.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=t.match(a);if(!l)return null;let f=l[0],n=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(n)?Lr(n,h=>h.test(f)):Mr(n,h=>h.test(f)),m;m=e.valueCallback?e.valueCallback(p):p,m=o.valueCallback?o.valueCallback(m):m;let d=t.slice(f.length);return{value:m,rest:d}}}function Mr(e,t){for(let o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&t(e[o]))return o}function Lr(e,t){for(let o=0;o<e.length;o++)if(t(e[o]))return o}function rt(e){return(t,o={})=>{let r=t.match(e.matchPattern);if(!r)return null;let a=r[0],l=t.match(e.parsePattern);if(!l)return null;let f=e.valueCallback?e.valueCallback(l[0]):l[0];f=o.valueCallback?o.valueCallback(f):f;let n=t.slice(a.length);return{value:f,rest:n}}}var _r=/^(\d+)(th|st|nd|rd)?/i,Fr=/\d+/i,jr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zr={any:[/^b/i,/^(a|c)/i]},Wr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ur={any:[/1/i,/2/i,/3/i,/4/i]},Hr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Br={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Vr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},at={ordinalNumber:rt({matchPattern:_r,parsePattern:Fr,valueCallback:e=>parseInt(e,10)}),era:L({matchPatterns:jr,defaultMatchWidth:"wide",parsePatterns:zr,defaultParseWidth:"any"}),quarter:L({matchPatterns:Wr,defaultMatchWidth:"wide",parsePatterns:Ur,defaultParseWidth:"any",valueCallback:e=>e+1}),month:L({matchPatterns:Hr,defaultMatchWidth:"wide",parsePatterns:qr,defaultParseWidth:"any"}),day:L({matchPatterns:Gr,defaultMatchWidth:"wide",parsePatterns:Xr,defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:Br,defaultMatchWidth:"any",parsePatterns:Vr,defaultParseWidth:"any"})};var me={code:"en-US",formatDistance:Ze,formatLong:et,formatRelative:tt,localize:ot,match:at,options:{weekStartsOn:0,firstWeekContainsDate:1}};function nt(e,t,o){let r=Ue(),a=o?.locale??r.locale??me,l=2520,f=P(e,t);if(isNaN(f))throw new RangeError("Invalid time value");let n=Object.assign({},o,{addSuffix:o?.addSuffix,comparison:f}),p,m;f>0?(p=u(t),m=u(e)):(p=u(e),m=u(t));let d=Qe(m,p),h=(de(m)-de(p))/1e3,x=Math.round((d-h)/60),E;if(x<2)return o?.includeSeconds?d<5?a.formatDistance("lessThanXSeconds",5,n):d<10?a.formatDistance("lessThanXSeconds",10,n):d<20?a.formatDistance("lessThanXSeconds",20,n):d<40?a.formatDistance("halfAMinute",0,n):d<60?a.formatDistance("lessThanXMinutes",1,n):a.formatDistance("xMinutes",1,n):x===0?a.formatDistance("lessThanXMinutes",1,n):a.formatDistance("xMinutes",x,n);if(x<45)return a.formatDistance("xMinutes",x,n);if(x<90)return a.formatDistance("aboutXHours",1,n);if(x<ue){let C=Math.round(x/60);return a.formatDistance("aboutXHours",C,n)}else{if(x<l)return a.formatDistance("xDays",1,n);if(x<H){let C=Math.round(x/ue);return a.formatDistance("xDays",C,n)}else if(x<H*2)return E=Math.round(x/H),a.formatDistance("aboutXMonths",E,n)}if(E=Ke(m,p),E<12){let C=Math.round(x/H);return a.formatDistance("xMonths",C,n)}else{let C=E%12,le=Math.trunc(E/12);return C<3?a.formatDistance("aboutXYears",le,n):C<9?a.formatDistance("overXYears",le,n):a.formatDistance("almostXYears",le+1,n)}}function st(e,t){return nt(e,qe(e),t)}function J(e){return u(e*1e3)}function he(e,t){let o=u(e),r=u(t);return+o<+r}var Jr=e=>e==null?"":String(e),Pe=e=>e instanceof Error?e.message:Jr(e);var lt=v(require("os")),{username:Yr}=lt.default.userInfo(),ct=(e,t)=>y(`rsync -r -e "ssh -o StrictHostKeyChecking=no" ${t} ${e}:/home/${Yr}`,{timeout:15e3}).then(()=>!0).catch(()=>!1),ft=e=>ct(e,'$HOME/.midway --include="cookie" --include="*/" --exclude="*"'),pt=e=>ct(e,'$HOME/.ssh --include="id_*" --include="*/" --exclude="*"');var Kr=(e,t)=>(e%t+t)%t,ut=e=>{let[,t]=e.split(".").map(o=>Buffer.from(`${o}${"=".repeat(Kr(o.length,4))}`,"base64").toString());return t&&JSON.parse(t).exp};var W=v(require("fs"));var Qr=typeof global=="object"&&global&&global.Object===Object&&global,dt=Qr;var Zr=typeof self=="object"&&self&&self.Object===Object&&self,ea=dt||Zr||Function("return this")(),O=ea;var ta=O.Symbol,I=ta;var mt=Object.prototype,oa=mt.hasOwnProperty,ra=mt.toString,q=I?I.toStringTag:void 0;function aa(e){var t=oa.call(e,q),o=e[q];try{e[q]=void 0;var r=!0}catch{}var a=ra.call(e);return r&&(t?e[q]=o:delete e[q]),a}var ht=aa;var na=Object.prototype,sa=na.toString;function ia(e){return sa.call(e)}var xt=ia;var la="[object Null]",ca="[object Undefined]",gt=I?I.toStringTag:void 0;function fa(e){return e==null?e===void 0?ca:la:gt&&gt in Object(e)?ht(e):xt(e)}var Y=fa;function pa(e){return e!=null&&typeof e=="object"}var yt=pa;var ua="[object Symbol]";function da(e){return typeof e=="symbol"||yt(e)&&Y(e)==ua}var wt=da;function ma(e,t){for(var o=-1,r=e==null?0:e.length,a=Array(r);++o<r;)a[o]=t(e[o],o,e);return a}var bt=ma;var ha=Array.isArray,Et=ha;var xa=1/0,vt=I?I.prototype:void 0,It=vt?vt.toString:void 0;function St(e){if(typeof e=="string")return e;if(Et(e))return bt(e,St)+"";if(wt(e))return It?It.call(e):"";var t=e+"";return t=="0"&&1/e==-xa?"-0":t}var At=St;function ga(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var K=ga;var ya="[object AsyncFunction]",wa="[object Function]",ba="[object GeneratorFunction]",Ea="[object Proxy]";function va(e){if(!K(e))return!1;var t=Y(e);return t==wa||t==ba||t==ya||t==Ea}var Ct=va;var Ia=O["__core-js_shared__"],Q=Ia;var $t=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sa(e){return!!$t&&$t in e}var Ot=Sa;var Aa=Function.prototype,Ca=Aa.toString;function $a(e){if(e!=null){try{return Ca.call(e)}catch{}try{return e+""}catch{}}return""}var Rt=$a;var Oa=/[\\^$.*+?()[\]{}|]/g,Ra=/^\[object .+?Constructor\]$/,Ta=Function.prototype,Na=Object.prototype,ka=Ta.toString,Da=Na.hasOwnProperty,Pa=RegExp("^"+ka.call(Da).replace(Oa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ma(e){if(!K(e)||Ot(e))return!1;var t=Ct(e)?Pa:Ra;return t.test(Rt(e))}var Tt=Ma;function La(e,t){return e?.[t]}var Nt=La;function _a(e,t){var o=Nt(e,t);return Tt(o)?o:void 0}var _=_a;function Fa(){}var kt=Fa;function ja(e,t,o,r){for(var a=e.length,l=o+(r?1:-1);r?l--:++l<a;)if(t(e[l],l,e))return l;return-1}var Dt=ja;function za(e){return e!==e}var Pt=za;function Wa(e,t,o){for(var r=o-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}var Mt=Wa;function Ua(e,t,o){return t===t?Mt(e,t,o):Dt(e,Pt,o)}var Lt=Ua;function Ha(e,t){var o=e==null?0:e.length;return!!o&&Lt(e,t,0)>-1}var _t=Ha;function qa(e,t){return e===t||e!==e&&t!==t}var Ft=qa;var Ga=_(Object,"create"),S=Ga;function Xa(){this.__data__=S?S(null):{},this.size=0}var jt=Xa;function Ba(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var zt=Ba;var Va="__lodash_hash_undefined__",Ja=Object.prototype,Ya=Ja.hasOwnProperty;function Ka(e){var t=this.__data__;if(S){var o=t[e];return o===Va?void 0:o}return Ya.call(t,e)?t[e]:void 0}var Wt=Ka;var Qa=Object.prototype,Za=Qa.hasOwnProperty;function en(e){var t=this.__data__;return S?t[e]!==void 0:Za.call(t,e)}var Ut=en;var tn="__lodash_hash_undefined__";function on(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=S&&t===void 0?tn:t,this}var Ht=on;function F(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}F.prototype.clear=jt;F.prototype.delete=zt;F.prototype.get=Wt;F.prototype.has=Ut;F.prototype.set=Ht;var xe=F;function rn(){this.__data__=[],this.size=0}var qt=rn;function an(e,t){for(var o=e.length;o--;)if(Ft(e[o][0],t))return o;return-1}var R=an;var nn=Array.prototype,sn=nn.splice;function ln(e){var t=this.__data__,o=R(t,e);if(o<0)return!1;var r=t.length-1;return o==r?t.pop():sn.call(t,o,1),--this.size,!0}var Gt=ln;function cn(e){var t=this.__data__,o=R(t,e);return o<0?void 0:t[o][1]}var Xt=cn;function fn(e){return R(this.__data__,e)>-1}var Bt=fn;function pn(e,t){var o=this.__data__,r=R(o,e);return r<0?(++this.size,o.push([e,t])):o[r][1]=t,this}var Vt=pn;function j(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}j.prototype.clear=qt;j.prototype.delete=Gt;j.prototype.get=Xt;j.prototype.has=Bt;j.prototype.set=Vt;var Jt=j;var un=_(O,"Map"),Yt=un;function dn(){this.size=0,this.__data__={hash:new xe,map:new(Yt||Jt),string:new xe}}var Kt=dn;function mn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Qt=mn;function hn(e,t){var o=e.__data__;return Qt(t)?o[typeof t=="string"?"string":"hash"]:o.map}var T=hn;function xn(e){var t=T(this,e).delete(e);return this.size-=t?1:0,t}var Zt=xn;function gn(e){return T(this,e).get(e)}var eo=gn;function yn(e){return T(this,e).has(e)}var to=yn;function wn(e,t){var o=T(this,e),r=o.size;return o.set(e,t),this.size+=o.size==r?0:1,this}var oo=wn;function z(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}z.prototype.clear=Kt;z.prototype.delete=Zt;z.prototype.get=eo;z.prototype.has=to;z.prototype.set=oo;var ro=z;function bn(e){return e==null?"":At(e)}var ao=bn;var En=_(O,"Set"),Z=En;var vn="__lodash_hash_undefined__";function In(e){return this.__data__.set(e,vn),this}var no=In;function Sn(e){return this.__data__.has(e)}var so=Sn;function ee(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new ro;++t<o;)this.add(e[t])}ee.prototype.add=ee.prototype.push=no;ee.prototype.has=so;var io=ee;function An(e,t){return e.has(t)}var lo=An;function Cn(e){var t=-1,o=Array(e.size);return e.forEach(function(r){o[++t]=r}),o}var te=Cn;function $n(e,t,o){for(var r=-1,a=e==null?0:e.length;++r<a;)if(o(t,e[r]))return!0;return!1}var co=$n;var fo=/[\\^$.*+?()[\]{}|]/g,On=RegExp(fo.source);function Rn(e){return e=ao(e),e&&On.test(e)?e.replace(fo,"\\$&"):e}var ge=Rn;var Tn=1/0,Nn=Z&&1/te(new Z([,-0]))[1]==Tn?function(e){return new Z(e)}:kt,po=Nn;var kn=200;function Dn(e,t,o){var r=-1,a=_t,l=e.length,f=!0,n=[],p=n;if(o)f=!1,a=co;else if(l>=kn){var m=t?null:po(e);if(m)return te(m);f=!1,a=lo,p=new io}else p=t?[]:n;e:for(;++r<l;){var d=e[r],h=t?t(d):d;if(d=o||d!==0?d:0,f&&h===h){for(var x=p.length;x--;)if(p[x]===h)continue e;t&&p.push(h),n.push(d)}else a(p,h,o)||(p!==n&&p.push(h),n.push(d))}return n}var uo=Dn;function Pn(e){return e&&e.length?uo(e):[]}var ye=Pn;var mo=v(require("os")),we=`${mo.default.homedir()}/.midway`,be=`${we}/cookie`;function oe(e){if(!W.default.existsSync(be))return[];let t=W.default.readFileSync(be,"utf8");return e?t:t.split(`
`).map(o=>{if(o.startsWith("#")&&!o.startsWith("#HttpOnly_"))return o;let r=o.split("	");if(r.length!==7)return o;let[a,l,f,n,p,m,d]=r;return{domain:a,includesSubdomains:l,path:f,overHttpsOnly:n,expiresAt:+p,name:m,value:d}})}var ho=async(e,t)=>{let o=await Fe();await y(`mwinit ${e.join(" ")} <<'EOF'
${o}
EOF`,{signal:t?.signal})},xo=e=>y("mwinit -d",{signal:e?.signal}),go=e=>{let t=oe().find(e);return t&&typeof t!="string"?t.expiresAt:void 0},Ee=()=>go(e=>typeof e!="string"&&/#HttpOnly_\.midway-auth\.amazon\.com/.test(e.domain)&&/amazon_enterprise_access/.test(e.name)),Mn=()=>go(e=>typeof e!="string"&&/#HttpOnly_midway-auth\.amazon\.com/.test(e.domain)&&/session/.test(e.name)),yo=()=>{let e=Ee(),t=Mn();return e&&t?Math.min(e,t):void 0},Ln=()=>Promise.any(["/usr/local/amazon/bin/acme_amazon_enterprise_access getAcmeDataLongLived","/usr/local/amazon/bin/acme_amazon_enterprise_access getAcmeData"].map(e=>y(e))).then(({stdout:e})=>JSON.parse(e).Jwt).catch(e=>{console.warn("Failed to get AEA JWT: ",e)}),wo=async()=>{let e=await Ln();if(!e)return!1;let t=ut(e);if(!t)return!1;let o=RegExp(ge(["midway-auth.aws-border.cn","midway-auth-itar.amazon.com","midway-auth.lck.aws-border.com","midway-auth.c2s.ic.gov"].join("|"))),r=!1,a=oe().map(l=>{if(typeof l=="string")return l;let{domain:f,includesSubdomains:n,path:p,overHttpsOnly:m,expiresAt:d,name:h,value:x}=l,E=!o.test(f)&&/#HttpOnly_\.(?:midway-auth|auth.midway)/.test(f)&&/amazon_enterprise_access/.test(h);return r=r||E,[f,n,p,m,E?t:d,h,E?e:x].join("	")})||[];return r||a.push(["#HttpOnly_.midway-auth.amazon.com","TRUE","/","TRUE",t,"amazon_enterprise_access",e].join("	")),W.default.existsSync(we)||W.default.mkdirSync(we),W.default.writeFileSync(be,a.join(`
`)),!0};var Eo=v(require("os"),1);var bo=`${Eo.default.homedir()}/.midway/cookie`,_n=e=>typeof e=="object"&&e!==null&&"__type"in e&&e.__type.includes("Exception"),Fn=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="error",jn=(e,t)=>{let{cookie:o,data:r,args:a=[],headers:l={},method:f,maxBuffer:n,cancel:p}=t,m=[`curl -sSL '${e}'`,`-X ${f??"GET"}`,Object.entries(l).map(([d,h])=>`-H '${d}: ${h}'`),a,r?[`-d '${JSON.stringify(r)}'`]:[],o?[`-b '${Object.entries(o).map(([d,h])=>`${d}=${h}`).join(";")}'`]:[]].flat();return y(m.join(" "),{maxBuffer:n,signal:p?.signal}).then(({stdout:d})=>ce(d)?JSON.parse(d):d).catch(d=>{throw new Error(N(d))})};var k=(e,t={})=>{let{ignoreCoralError:o=!1,writeToCookieFile:r=!0,args:a=[],...l}=t,f=[a,`--anyauth --location-trusted -k -u : -b ${bo}`,r?[`-c ${bo}`]:[]].flat();return jn(e,{...l,args:f}).then(n=>{if(!o&&_n(n))throw new Error(`${n.__type}${n.message?`: ${n.message}`:""}`);if(Fn(n))throw new Error(`${n.message??"Midway Error"}: ${n.desc??"You should authenticate (may use mwinit)"}`);return n})};var zn=(e,t)=>k("https://gitfarm-sso.corp.amazon.com",{...t,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${e}`}}),vo=e=>zn("getReferenceSha1s",{data:{repositoryId:e}}).then(t=>t.references);var re=require("@raycast/api");function ae(e,t=!0){let{launchType:o,extensionName:r,commandName:a}=re.environment;return!t||o===re.LaunchType.Background?Promise.resolve():k("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:a,extensionVersion:e,extensionName:r}}).catch(l=>console.warn(`Failed to publish stats for ${r}/${a}.`,l))}var b=require("@raycast/api");var ys=v(zo(),1),Re=v(qo(),1),ws=v(Xo(),1),bs=v(Vo(),1),Ko=v(Yo(),1);var Es=e=>vo(`pkg/${e}`).then(t=>D(t).map(o=>(o.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(o=>(0,Ko.default)(o))).then(t=>t.length===0?void 0:t.reduce((o,r)=>(0,Re.default)(r,o)?r:o,t[0])).catch(t=>{console.warn(`Failed to get the latest extension version for ${e}.`,t)}),Qo=async e=>{let{launchType:t,extensionName:o}=b.environment,{updateCommandName:r,changelogCommandName:a,currentVersion:l,pkg:f,extensionOwner:n}=e,p=await Es(f);if(t===b.LaunchType.UserInitiated&&p&&(0,Re.default)(p,l)){let m={type:b.LaunchType.UserInitiated,extensionName:o,ownerOrAuthorName:n};await(0,b.showToast)({style:b.Toast.Style.Success,title:`\u2728 New version (${p}) now available!`,message:`Upgrade from current version (${l}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,b.launchCommand)({name:r??"update-extension",...m})},secondaryAction:{title:"Changelog",onAction:()=>(0,b.launchCommand)({name:a??"extension-changelog",...m})}})}};var er="1.18.2";var tr="zhenpewu";var Te=er,vs="AmznRaycastExtension";var or=()=>Qo({pkg:vs,currentVersion:Te,extensionOwner:tr});var Is=()=>ae(Te,!0),rr=Is;var g=require("@raycast/api");var G=(0,g.getPreferenceValues)(),Ss=D([G["-s"]?"-s":void 0,G["--breakglass"]?" --breakglass":void 0]);async function ar(){if(g.environment.launchType===g.LaunchType.UserInitiated){let r=await pe({style:g.Toast.Style.Animated,title:"Deleting old midway cookie...",abortable:!0});try{await xo(r.abortController),r.updateContent({title:"Press the security key while it is blinking.",abortable:!0}),await ho(Ss,r.abortController);let a=[];ye(D(G["cloud-desktop-host"]?.split(",").map(n=>n.trim()))).forEach(n=>{a.push(ft(n).then(p=>[p,`sync midway cookie to ${n}`])),a.push(pt(n).then(p=>[p,`sync SSH certificate to ${n}`]))}),G["kill-exchangesyncd"]&&a.push(Me("exchangesyncd",!0).then(()=>!0).catch(()=>!1).then(n=>[n,"kill exchangesyncd"])),G["copy-cookie-to-clipboard"]&&a.push((async()=>{let n="copy midway cookie to clipboard";try{let p=oe(!0);return await g.Clipboard.copy({text:p},{concealed:!0}),[!0,n]}catch(p){return console.warn("Failed to copy midway cookie to clipboard: ",p),[!1,n]}})());let f;if(a.length>0){r.updateContent({style:g.Toast.Style.Animated,title:"Executing midway related tasks..."});let n=await Promise.all(a),p=n.filter(([m])=>!m);p.length===0?f=`\u2705 Executed ${n.length} midway tasks.`:f=[`\u26A0\uFE0F Failed to execute ${p.length} / ${n.length} midway tasks.`,...p.map(([,m])=>` - ${m}`)].join(`
`)}await Le(500),r.updateContent({style:g.Toast.Style.Success,title:"Successfully authenticated via midway U2F.",message:f,abortable:!1})}catch(a){r.updateContent({style:g.Toast.Style.Failure,title:"Failed to authenticate.",message:N(a),abortable:!1})}}let e=Ee();(!e||he(J(e),He(new Date,15)))&&await wo(),await or(),await rr();let t=yo(),o=t&&he(new Date,J(t));(0,g.updateCommandMetadata)({subtitle:o?`\u{1F60E}  ${st(J(t),{addSuffix:!0})}`:"\u{1F480}"})}
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/