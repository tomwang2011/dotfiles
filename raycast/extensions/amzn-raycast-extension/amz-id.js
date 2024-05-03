"use strict";var Qe=Object.create;var R=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty;var l=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),rt=(t,e)=>{for(var n in e)R(t,n,{get:e[n],enumerable:!0})},ee=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of et(e))!nt.call(t,o)&&o!==n&&R(t,o,{get:()=>e[o],enumerable:!(r=Ye(e,o))||r.enumerable});return t};var h=(t,e,n)=>(n=t!=null?Qe(tt(t)):{},ee(e||!t||!t.__esModule?R(n,"default",{value:t,enumerable:!0}):n,t)),ot=t=>ee(R({},"__esModule",{value:!0}),t);var ie=l(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.decryptCustomerId=w.encryptCustomerId=void 0;var re=[2053205313,1663987311,1109421423,1936420719],j=2654435769,it=Math.pow(2,43),te=15,st=0xffffffffffffffffn,at=0x10000n,N=0x100000n,E=0x100000000n,ct=0xc2f93n;function lt(t,e){let n=Number(t[0]),r=Number(t[1]),o=0;for(let a=0;a<32;a++)o+=j,n+=(r<<4)+e[0]^r+o^(r>>>5)+e[1],n>>>=0,r+=(n<<4)+e[2]^n+o^(n>>>5)+e[3],r>>>=0;return[BigInt(n),BigInt(r)]}function pt(t,e){let n=Number(t[0]),r=Number(t[1]),o=j<<5;for(let a=0;a<32;a++)r-=(n<<4)+e[2]^n+o^(n>>>5)+e[3],r>>>=0,n-=(r<<4)+e[0]^r+o^(r>>>5)+e[1],n>>>=0,o-=j;return[BigInt(n),BigInt(r)]}function ne(t){let[e,n]=lt([t%E,t/E],re);return(e+n*E).toString(36)}function dt(t){let[e,n]=pt([t%E,t/E],re);return e+n*E}function oe(t){let e=t,n=e%N;for(let r=0;r<3;r++)e=e/at,n=n+e%N;return(n^ct)&N-1n}function ut(t,e){return Array.from(t).reduce((n,r)=>n*BigInt(e)+BigInt(parseInt(r,e)),0n)}function mt(t){if(t==null||typeof t=="string"&&t.length===0)throw new Error(`Cannot encrypt null or empty ID: ${t}`);let e=BigInt(t);if(e<1n||e>st)throw new Error(`ID out of bounds: ${t}`);let n=oe(e);return"A"+(e<it?ne((e<<20n)+n):String(n).padStart(7,"0")+ne(e)).toUpperCase()}w.encryptCustomerId=mt;function ht(t){if(t==null||t.length===0)throw new Error(`Cannot decrypt null or empty ID: ${t}`);let e=dt(ut(t.slice(t.length<te?1:8),36)),n,r;if(t.length<te?(n=e&N-1n,r=e>>20n):(n=BigInt(t.slice(1,8)),r=e),oe(r)!==n)throw new Error(`Unexpected checksum decrypting ID: ${t}`);return String(r)}w.decryptCustomerId=ht});var se=l(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.decryptShipmentId=I.encryptShipmentId=void 0;var ft=4839182330,gt=0x4f027a359ffff,yt="PqnpRxJrdsGL0fCYlHcTzh6Q9WwZbtV2MBg8D71jmk3Fy4N5SvXK",Et="RNkbH49BwyYDF2VzvcQsL7r1MJ3xnTPtGd6S0lmKWpCX8g5qZjfh",wt="DUTMXGQBPNLFWERHAKZCVYJIOS",It="qwertyuadfghxcvb",$t=[0,8,6,4,2,7,5,3,1],C=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,12,38,31,42,45,47,22,37,35,24,-1,-1,-1,-1,-1,-1,-1,-1,33,14,36,-1,43,10,17,-1,6,51,11,32,46,-1,0,23,4,48,19,-1,30,25,50,15,27,-1,-1,-1,-1,-1,-1,-1,28,18,8,-1,13,34,21,-1,39,41,16,40,2,-1,3,1,7,9,29,-1,49,26,5,44,20],T=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,36,23,13,26,5,46,34,21,44,6,-1,-1,-1,-1,-1,-1,-1,-1,7,42,11,-1,12,32,4,-1,25,39,20,24,1,-1,30,18,0,35,29,-1,14,40,43,10,48,-1,-1,-1,-1,-1,-1,-1,3,17,33,-1,50,45,51,-1,49,2,37,38,28,-1,41,47,22,19,31,-1,16,8,27,9,15],bt=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,16,7,19,0,13,11,5,15,23,22,17,10,3,9,24,8,6,14,25,2,1,20,12,4,21,18,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],xt=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,15,13,8,2,9,10,11,-1,-1,-1,-1,-1,-1,-1,-1,0,3,-1,4,6,14,1,12,5],vt=[bt,T,C,T,C,T,C,T,C];function St(t){let e=[],n=t,r=0,o="";for(;n>0;)e.push(n&15),n=Math.floor(n/16);for(let a=0;a<e.length;a+=2)o+=It[e[a]];for(let a=e.length-1-e.length%2;a>0;a-=2)r<<=4,r|=e[a];return`${o}${r}`}function At(t){let e=[],n=t,r;for(let o=0;o<8;o++){let a=o<4?o*2+1:(o-3)*2;r=n%52,n=Math.floor(n/52),e[a]=o%2===0?yt[r]:Et[r]}return wt[n]+e.join("")}function Rt(t){if(!/^[qwertyuadfghxcvb]+[0-9]+$/.test(t))throw new Error(`Cannot decrypt ID: ${t}`);let e=[],n=0;for(let a=0;a<t.length&&!/^[0-9]$/.test(t[a]);a++)e[a*2]=xt[t.charCodeAt(a)];let r=t.match(/\d+/);if(r==null)throw new Error(`Cannot decrypt ID: ${t}`);let o=Number(r[0]);for(let a=1;o>0;a+=2)e[a]=o&15,o>>=4;for(let a=e.length-1;a>=0;a--)n*=16,n+=e[a]|0;return String(n)}function Nt(t){if(!/^[a-z][0-9bcdfghjklmnpqrstvwxyz]{8}$/i.test(t))throw new Error(`Cannot decrypt ID: ${t}`);let e=0;for(let n=0;n<t.length;n++)e*=52,e+=vt[n][t[$t[n]].charCodeAt(0)];return String(e)}function Ct(t){if(t==null||typeof t=="string"&&t.length===0)throw new Error(`Cannot encrypt null or empty ID: ${t}`);let e=Number(t);if(e<1||e>gt)throw new Error(`ID out of bounds: ${t}`);return e<=ft?St(e):At(e)}I.encryptShipmentId=Ct;function Tt(t){if(t==null||t.length===0)throw new Error(`Cannot decrypt null or empty ID: ${t}`);return/^[a-z]$/.test(t[0])?Rt(t):Nt(t)}I.decryptShipmentId=Tt});var ce=l(f=>{"use strict";var Ot=f&&f.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),ae=f&&f.__exportStar||function(t,e){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&Ot(e,t,n)};Object.defineProperty(f,"__esModule",{value:!0});ae(ie(),f);ae(se(),f)});var X=l((or,ge)=>{var Ut=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};ge.exports=Ut});var B=l((ir,ye)=>{var zt="2.0.0",jt=Number.MAX_SAFE_INTEGER||9007199254740991,Gt=16,_t=250,qt=["major","premajor","minor","preminor","patch","prepatch","prerelease"];ye.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Gt,MAX_SAFE_BUILD_LENGTH:_t,MAX_SAFE_INTEGER:jt,RELEASE_TYPES:qt,SEMVER_SPEC_VERSION:zt,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var we=l((m,Ee)=>{var{MAX_SAFE_COMPONENT_LENGTH:V,MAX_SAFE_BUILD_LENGTH:Ht,MAX_LENGTH:Xt}=B(),Bt=X();m=Ee.exports={};var Vt=m.re=[],Wt=m.safeRe=[],i=m.src=[],s=m.t={},Jt=0,W="[a-zA-Z0-9-]",Zt=[["\\s",1],["\\d",Xt],[W,Ht]],Kt=t=>{for(let[e,n]of Zt)t=t.split(`${e}*`).join(`${e}{0,${n}}`).split(`${e}+`).join(`${e}{1,${n}}`);return t},c=(t,e,n)=>{let r=Kt(e),o=Jt++;Bt(t,o,e),s[t]=o,i[o]=e,Vt[o]=new RegExp(e,n?"g":void 0),Wt[o]=new RegExp(r,n?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*");c("NUMERICIDENTIFIERLOOSE","\\d+");c("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${W}*`);c("MAINVERSION",`(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`);c("MAINVERSIONLOOSE",`(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`);c("PRERELEASEIDENTIFIER",`(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`);c("PRERELEASEIDENTIFIERLOOSE",`(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`);c("PRERELEASE",`(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`);c("PRERELEASELOOSE",`(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`);c("BUILDIDENTIFIER",`${W}+`);c("BUILD",`(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`);c("FULLPLAIN",`v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`);c("FULL",`^${i[s.FULLPLAIN]}$`);c("LOOSEPLAIN",`[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`);c("LOOSE",`^${i[s.LOOSEPLAIN]}$`);c("GTLT","((?:<|>)?=?)");c("XRANGEIDENTIFIERLOOSE",`${i[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);c("XRANGEIDENTIFIER",`${i[s.NUMERICIDENTIFIER]}|x|X|\\*`);c("XRANGEPLAIN",`[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${i[s.PRERELEASE]})?${i[s.BUILD]}?)?)?`);c("XRANGEPLAINLOOSE",`[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`);c("XRANGE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`);c("XRANGELOOSE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`);c("COERCEPLAIN",`(^|[^\\d])(\\d{1,${V}})(?:\\.(\\d{1,${V}}))?(?:\\.(\\d{1,${V}}))?`);c("COERCE",`${i[s.COERCEPLAIN]}(?:$|[^\\d])`);c("COERCEFULL",i[s.COERCEPLAIN]+`(?:${i[s.PRERELEASE]})?(?:${i[s.BUILD]})?(?:$|[^\\d])`);c("COERCERTL",i[s.COERCE],!0);c("COERCERTLFULL",i[s.COERCEFULL],!0);c("LONETILDE","(?:~>?)");c("TILDETRIM",`(\\s*)${i[s.LONETILDE]}\\s+`,!0);m.tildeTrimReplace="$1~";c("TILDE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`);c("TILDELOOSE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`);c("LONECARET","(?:\\^)");c("CARETTRIM",`(\\s*)${i[s.LONECARET]}\\s+`,!0);m.caretTrimReplace="$1^";c("CARET",`^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`);c("CARETLOOSE",`^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`);c("COMPARATORLOOSE",`^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`);c("COMPARATOR",`^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`);c("COMPARATORTRIM",`(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`,!0);m.comparatorTrimReplace="$1$2$3";c("HYPHENRANGE",`^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`);c("HYPHENRANGELOOSE",`^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`);c("STAR","(<|>)?=?\\s*\\*");c("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");c("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var $e=l((sr,Ie)=>{var Qt=Object.freeze({loose:!0}),Yt=Object.freeze({}),en=t=>t?typeof t!="object"?Qt:t:Yt;Ie.exports=en});var Se=l((ar,ve)=>{var be=/^[0-9]+$/,xe=(t,e)=>{let n=be.test(t),r=be.test(e);return n&&r&&(t=+t,e=+e),t===e?0:n&&!r?-1:r&&!n?1:t<e?-1:1},tn=(t,e)=>xe(e,t);ve.exports={compareIdentifiers:xe,rcompareIdentifiers:tn}});var Z=l((cr,Ce)=>{var P=X(),{MAX_LENGTH:Ae,MAX_SAFE_INTEGER:F}=B(),{safeRe:Re,t:Ne}=we(),nn=$e(),{compareIdentifiers:$}=Se(),J=class t{constructor(e,n){if(n=nn(n),e instanceof t){if(e.loose===!!n.loose&&e.includePrerelease===!!n.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Ae)throw new TypeError(`version is longer than ${Ae} characters`);P("SemVer",e,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=e.trim().match(n.loose?Re[Ne.LOOSE]:Re[Ne.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>F||this.major<0)throw new TypeError("Invalid major version");if(this.minor>F||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>F||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let a=+o;if(a>=0&&a<F)return a}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(P("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),$(this.major,e.major)||$(this.minor,e.minor)||$(this.patch,e.patch)}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=e.prerelease[n];if(P("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return $(r,o)}while(++n)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let n=0;do{let r=this.build[n],o=e.build[n];if(P("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return $(r,o)}while(++n)}inc(e,n,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[o];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let a=[n,o];r===!1&&(a=[n]),$(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Ce.exports=J});var K=l((lr,Oe)=>{var Te=Z(),rn=(t,e,n=!1)=>{if(t instanceof Te)return t;try{return new Te(t,e)}catch(r){if(!n)return null;throw r}};Oe.exports=rn});var ke=l((pr,Le)=>{var on=K(),sn=(t,e)=>{let n=on(t.trim().replace(/^[=v]+/,""),e);return n?n.version:null};Le.exports=sn});var M=l((dr,Pe)=>{var De=Z(),an=(t,e,n)=>new De(t,n).compare(new De(e,n));Pe.exports=an});var Me=l((ur,Fe)=>{var cn=M(),ln=(t,e,n)=>cn(t,e,n)>0;Fe.exports=ln});var ze=l((mr,Ue)=>{var pn=M(),dn=(t,e,n)=>pn(t,e,n)<0;Ue.exports=dn});var Ge=l((hr,je)=>{var un=M(),mn=(t,e,n)=>un(t,e,n)<=0;je.exports=mn});var qe=l((fr,_e)=>{var hn=K(),fn=(t,e)=>{let n=hn(t,e);return n?n.version:null};_e.exports=fn});var bn={};rt(bn,{default:()=>Ke});module.exports=ot(bn);var U=h(ce());var Lt=require("@raycast/api");var le=require("child_process"),pe=require("util");var S=(0,pe.promisify)(le.exec),O=t=>typeof t=="object"&&"stderr"in t?t.stderr:L(t);var G=t=>{try{if(typeof t=="string"){let e=JSON.parse(t);if(e&&typeof e=="object")return!0}}catch{}return!1},_=t=>Array.isArray(t)?t.filter(e=>!!e):[];var g=require("@raycast/api"),q=class{toast;abortable;_abortController;constructor(e){this.abortable=e.abortable,this.toast=g.environment.launchType===g.LaunchType.UserInitiated?new g.Toast(e):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(e){if(this.toast){let{title:n,style:r,message:o,secondaryAction:a}=this.toast;this.toast.title=e.title??n,this.toast.style=e.style??r,this.toast.message=e.message??o,this.abortable=e.abortable??this.abortable,this.toast.secondaryAction=e.secondaryAction??a,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},H=async t=>{let e=new q(t);return await e.show(),e};var de=h(require("os"),1);var{username:Dn}=de.default.userInfo();var ue=require("@raycast/api");var kt=t=>t==null?"":String(t),L=t=>t instanceof Error?t.message:kt(t);var he=h(require("os"),1);var me=`${he.default.homedir()}/.midway/cookie`,Dt=t=>typeof t=="object"&&t!==null&&"__type"in t&&t.__type.includes("Exception"),Pt=t=>typeof t=="object"&&t!==null&&"status"in t&&t.status==="error",Ft=(t,e)=>{let{cookie:n,data:r,args:o=[],headers:a={},method:x,maxBuffer:d,cancel:v}=e,A=[`curl -sSL '${t}'`,`-X ${x??"GET"}`,Object.entries(a).map(([u,z])=>`-H '${u}: ${z}'`),o,r?[`-d '${JSON.stringify(r)}'`]:[],n?[`-b '${Object.entries(n).map(([u,z])=>`${u}=${z}`).join(";")}'`]:[]].flat();return S(A.join(" "),{maxBuffer:d,signal:v?.signal}).then(({stdout:u})=>G(u)?JSON.parse(u):u).catch(u=>{throw new Error(O(u))})};var y=(t,e={})=>{let{ignoreCoralError:n=!1,writeToCookieFile:r=!0,args:o=[],...a}=e,x=[o,`--anyauth --location-trusted -k -u : -b ${me}`,r?[`-c ${me}`]:[]].flat();return Ft(t,{...a,args:x}).then(d=>{if(!n&&Dt(d))throw new Error(`${d.__type}${d.message?`: ${d.message}`:""}`);if(Pt(d))throw new Error(`${d.message??"Midway Error"}: ${d.desc??"You should authenticate (may use mwinit)"}`);return d})};var Mt=(t,e)=>y("https://gitfarm-sso.corp.amazon.com",{...e,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${t}`}}),fe=t=>Mt("getReferenceSha1s",{data:{repositoryId:t}}).then(e=>e.references);var k=require("@raycast/api");function D(t,e=!0){let{launchType:n,extensionName:r,commandName:o}=k.environment;return!e||n===k.LaunchType.Background?Promise.resolve():y("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:o,extensionVersion:t,extensionName:r}}).catch(a=>console.warn(`Failed to publish stats for ${r}/${o}.`,a))}var p=require("@raycast/api");var gn=h(ke(),1),Q=h(Me(),1),yn=h(ze(),1),En=h(Ge(),1),He=h(qe(),1);var wn=t=>fe(`pkg/${t}`).then(e=>_(e).map(n=>(n.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(n=>(0,He.default)(n))).then(e=>e.length===0?void 0:e.reduce((n,r)=>(0,Q.default)(r,n)?r:n,e[0])).catch(e=>{console.warn(`Failed to get the latest extension version for ${t}.`,e)}),Xe=async t=>{let{launchType:e,extensionName:n}=p.environment,{updateCommandName:r,changelogCommandName:o,currentVersion:a,pkg:x,extensionOwner:d}=t,v=await wn(x);if(e===p.LaunchType.UserInitiated&&v&&(0,Q.default)(v,a)){let A={type:p.LaunchType.UserInitiated,extensionName:n,ownerOrAuthorName:d};await(0,p.showToast)({style:p.Toast.Style.Success,title:`\u2728 New version (${v}) now available!`,message:`Upgrade from current version (${a}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,p.launchCommand)({name:r??"update-extension",...A})},secondaryAction:{title:"Changelog",onAction:()=>(0,p.launchCommand)({name:o??"extension-changelog",...A})}})}};var Ve="1.18.2";var We="zhenpewu";var Y=Ve,In="AmznRaycastExtension";var Je=()=>Xe({pkg:In,currentVersion:Y,extensionOwner:We});var $n=()=>D(Y,!0),Ze=$n;var b=require("@raycast/api");async function Ke(t){let e=t.arguments.id.trim(),n=/^\d+$/.test(e),r=await H({style:b.Toast.Style.Animated,title:`${n?"Encrypt":"Decrypt"}ing ID...`});try{let o=n?(0,U.encryptCustomerId)(e):(0,U.decryptCustomerId)(e);await b.Clipboard.copy(o),r.updateContent({style:b.Toast.Style.Success,title:`\u{1F389} Copied ${n?"encrypt":"decrypt"}ed ID ${o} to clipboard.`})}catch(o){r.updateContent({style:b.Toast.Style.Failure,title:`\u274C Failed to ${n?"encrypt":"decrypt"} ID.`,message:L(o)})}await Ze(),await Je()}