"use strict";var Qe=Object.create;var v=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var rt=Object.getPrototypeOf,ot=Object.prototype.hasOwnProperty;var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),at=(e,t)=>{for(var r in t)v(e,r,{get:t[r],enumerable:!0})},V=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of tt(t))!ot.call(e,n)&&n!==r&&v(e,n,{get:()=>t[n],enumerable:!(o=et(t,n))||o.enumerable});return e};var g=(e,t,r)=>(r=e!=null?Qe(rt(e)):{},V(t||!e||!e.__esModule?v(r,"default",{value:e,enumerable:!0}):r,e)),st=e=>V(v({},"__esModule",{value:!0}),e);var j=p(($o,ge)=>{var Ct=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};ge.exports=Ct});var z=p((Ao,ye)=>{var kt="2.0.0",Pt=Number.MAX_SAFE_INTEGER||9007199254740991,Dt=16,Ft=250,Mt=["major","premajor","minor","preminor","patch","prepatch","prerelease"];ye.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Dt,MAX_SAFE_BUILD_LENGTH:Ft,MAX_SAFE_INTEGER:Pt,RELEASE_TYPES:Mt,SEMVER_SPEC_VERSION:kt,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var we=p((h,Ee)=>{var{MAX_SAFE_COMPONENT_LENGTH:G,MAX_SAFE_BUILD_LENGTH:Ut,MAX_LENGTH:jt}=z(),zt=j();h=Ee.exports={};var Gt=h.re=[],qt=h.safeRe=[],a=h.src=[],s=h.t={},Wt=0,q="[a-zA-Z0-9-]",Bt=[["\\s",1],["\\d",jt],[q,Ut]],Ht=e=>{for(let[t,r]of Bt)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},i=(e,t,r)=>{let o=Ht(t),n=Wt++;zt(e,n,t),s[e]=n,a[n]=t,Gt[n]=new RegExp(t,r?"g":void 0),qt[n]=new RegExp(o,r?"g":void 0)};i("NUMERICIDENTIFIER","0|[1-9]\\d*");i("NUMERICIDENTIFIERLOOSE","\\d+");i("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${q}*`);i("MAINVERSION",`(${a[s.NUMERICIDENTIFIER]})\\.(${a[s.NUMERICIDENTIFIER]})\\.(${a[s.NUMERICIDENTIFIER]})`);i("MAINVERSIONLOOSE",`(${a[s.NUMERICIDENTIFIERLOOSE]})\\.(${a[s.NUMERICIDENTIFIERLOOSE]})\\.(${a[s.NUMERICIDENTIFIERLOOSE]})`);i("PRERELEASEIDENTIFIER",`(?:${a[s.NUMERICIDENTIFIER]}|${a[s.NONNUMERICIDENTIFIER]})`);i("PRERELEASEIDENTIFIERLOOSE",`(?:${a[s.NUMERICIDENTIFIERLOOSE]}|${a[s.NONNUMERICIDENTIFIER]})`);i("PRERELEASE",`(?:-(${a[s.PRERELEASEIDENTIFIER]}(?:\\.${a[s.PRERELEASEIDENTIFIER]})*))`);i("PRERELEASELOOSE",`(?:-?(${a[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[s.PRERELEASEIDENTIFIERLOOSE]})*))`);i("BUILDIDENTIFIER",`${q}+`);i("BUILD",`(?:\\+(${a[s.BUILDIDENTIFIER]}(?:\\.${a[s.BUILDIDENTIFIER]})*))`);i("FULLPLAIN",`v?${a[s.MAINVERSION]}${a[s.PRERELEASE]}?${a[s.BUILD]}?`);i("FULL",`^${a[s.FULLPLAIN]}$`);i("LOOSEPLAIN",`[v=\\s]*${a[s.MAINVERSIONLOOSE]}${a[s.PRERELEASELOOSE]}?${a[s.BUILD]}?`);i("LOOSE",`^${a[s.LOOSEPLAIN]}$`);i("GTLT","((?:<|>)?=?)");i("XRANGEIDENTIFIERLOOSE",`${a[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);i("XRANGEIDENTIFIER",`${a[s.NUMERICIDENTIFIER]}|x|X|\\*`);i("XRANGEPLAIN",`[v=\\s]*(${a[s.XRANGEIDENTIFIER]})(?:\\.(${a[s.XRANGEIDENTIFIER]})(?:\\.(${a[s.XRANGEIDENTIFIER]})(?:${a[s.PRERELEASE]})?${a[s.BUILD]}?)?)?`);i("XRANGEPLAINLOOSE",`[v=\\s]*(${a[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[s.XRANGEIDENTIFIERLOOSE]})(?:${a[s.PRERELEASELOOSE]})?${a[s.BUILD]}?)?)?`);i("XRANGE",`^${a[s.GTLT]}\\s*${a[s.XRANGEPLAIN]}$`);i("XRANGELOOSE",`^${a[s.GTLT]}\\s*${a[s.XRANGEPLAINLOOSE]}$`);i("COERCEPLAIN",`(^|[^\\d])(\\d{1,${G}})(?:\\.(\\d{1,${G}}))?(?:\\.(\\d{1,${G}}))?`);i("COERCE",`${a[s.COERCEPLAIN]}(?:$|[^\\d])`);i("COERCEFULL",a[s.COERCEPLAIN]+`(?:${a[s.PRERELEASE]})?(?:${a[s.BUILD]})?(?:$|[^\\d])`);i("COERCERTL",a[s.COERCE],!0);i("COERCERTLFULL",a[s.COERCEFULL],!0);i("LONETILDE","(?:~>?)");i("TILDETRIM",`(\\s*)${a[s.LONETILDE]}\\s+`,!0);h.tildeTrimReplace="$1~";i("TILDE",`^${a[s.LONETILDE]}${a[s.XRANGEPLAIN]}$`);i("TILDELOOSE",`^${a[s.LONETILDE]}${a[s.XRANGEPLAINLOOSE]}$`);i("LONECARET","(?:\\^)");i("CARETTRIM",`(\\s*)${a[s.LONECARET]}\\s+`,!0);h.caretTrimReplace="$1^";i("CARET",`^${a[s.LONECARET]}${a[s.XRANGEPLAIN]}$`);i("CARETLOOSE",`^${a[s.LONECARET]}${a[s.XRANGEPLAINLOOSE]}$`);i("COMPARATORLOOSE",`^${a[s.GTLT]}\\s*(${a[s.LOOSEPLAIN]})$|^$`);i("COMPARATOR",`^${a[s.GTLT]}\\s*(${a[s.FULLPLAIN]})$|^$`);i("COMPARATORTRIM",`(\\s*)${a[s.GTLT]}\\s*(${a[s.LOOSEPLAIN]}|${a[s.XRANGEPLAIN]})`,!0);h.comparatorTrimReplace="$1$2$3";i("HYPHENRANGE",`^\\s*(${a[s.XRANGEPLAIN]})\\s+-\\s+(${a[s.XRANGEPLAIN]})\\s*$`);i("HYPHENRANGELOOSE",`^\\s*(${a[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[s.XRANGEPLAINLOOSE]})\\s*$`);i("STAR","(<|>)?=?\\s*\\*");i("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");i("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Ie=p((vo,be)=>{var _t=Object.freeze({loose:!0}),Xt=Object.freeze({}),Vt=e=>e?typeof e!="object"?_t:e:Xt;be.exports=Vt});var ve=p((Ro,Ae)=>{var Se=/^[0-9]+$/,$e=(e,t)=>{let r=Se.test(e),o=Se.test(t);return r&&o&&(e=+e,t=+t),e===t?0:r&&!o?-1:o&&!r?1:e<t?-1:1},Jt=(e,t)=>$e(t,e);Ae.exports={compareIdentifiers:$e,rcompareIdentifiers:Jt}});var B=p((To,Oe)=>{var L=j(),{MAX_LENGTH:Re,MAX_SAFE_INTEGER:C}=z(),{safeRe:Te,t:Ne}=we(),Kt=Ie(),{compareIdentifiers:y}=ve(),W=class e{constructor(t,r){if(r=Kt(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Re)throw new TypeError(`version is longer than ${Re} characters`);L("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let o=t.trim().match(r.loose?Te[Ne.LOOSE]:Te[Ne.FULL]);if(!o)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+o[1],this.minor=+o[2],this.patch=+o[3],this.major>C||this.major<0)throw new TypeError("Invalid major version");if(this.minor>C||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>C||this.patch<0)throw new TypeError("Invalid patch version");o[4]?this.prerelease=o[4].split(".").map(n=>{if(/^[0-9]+$/.test(n)){let l=+n;if(l>=0&&l<C)return l}return n}):this.prerelease=[],this.build=o[5]?o[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(L("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),y(this.major,t.major)||y(this.minor,t.minor)||y(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let o=this.prerelease[r],n=t.prerelease[r];if(L("prerelease compare",r,o,n),o===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(o===void 0)return-1;if(o===n)continue;return y(o,n)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let o=this.build[r],n=t.build[r];if(L("build compare",r,o,n),o===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(o===void 0)return-1;if(o===n)continue;return y(o,n)}while(++r)}inc(t,r,o){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,o);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,o);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,o),this.inc("pre",r,o);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,o),this.inc("pre",r,o);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let n=Number(o)?1:0;if(!r&&o===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[n];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(r===this.prerelease.join(".")&&o===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(n)}}if(r){let l=[r,n];o===!1&&(l=[r]),y(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Oe.exports=W});var H=p((No,Ce)=>{var Le=B(),Yt=(e,t,r=!1)=>{if(e instanceof Le)return e;try{return new Le(e,t)}catch(o){if(!r)return null;throw o}};Ce.exports=Yt});var Pe=p((Oo,ke)=>{var Zt=H(),Qt=(e,t)=>{let r=Zt(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};ke.exports=Qt});var k=p((Lo,Fe)=>{var De=B(),er=(e,t,r)=>new De(e,r).compare(new De(t,r));Fe.exports=er});var Ue=p((Co,Me)=>{var tr=k(),rr=(e,t,r)=>tr(e,t,r)>0;Me.exports=rr});var ze=p((ko,je)=>{var or=k(),ar=(e,t,r)=>or(e,t,r)<0;je.exports=ar});var qe=p((Po,Ge)=>{var sr=k(),nr=(e,t,r)=>sr(e,t,r)<=0;Ge.exports=nr});var Be=p((Do,We)=>{var ir=H(),lr=(e,t)=>{let r=ir(e,t);return r?r.version:null};We.exports=lr});var hr={};at(hr,{default:()=>Ze});module.exports=st(hr);var he=g(require("os"),1);var D=e=>{try{if(typeof e=="string"){let t=JSON.parse(e);if(t&&typeof t=="object")return!0}}catch{}return!1};var de=require("child_process"),me=require("util");var nt=require("@raycast/api");var x=require("@raycast/api"),F=class{toast;abortable;_abortController;constructor(t){this.abortable=t.abortable,this.toast=x.environment.launchType===x.LaunchType.UserInitiated?new x.Toast(t):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(t){if(this.toast){let{title:r,style:o,message:n,secondaryAction:l}=this.toast;this.toast.title=t.title??r,this.toast.style=t.style??o,this.toast.message=t.message??n,this.abortable=t.abortable??this.abortable,this.toast.secondaryAction=t.secondaryAction??l,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},M=async e=>{let t=new F(e);return await t.show(),t};var J=g(require("os"),1);var{username:Ir}=J.default.userInfo();var K=require("@raycast/api");var it=typeof global=="object"&&global&&global.Object===Object&&global,Y=it;var lt=typeof self=="object"&&self&&self.Object===Object&&self,pt=Y||lt||Function("return this")(),Z=pt;var ft=Z.Symbol,m=ft;var Q=Object.prototype,ct=Q.hasOwnProperty,dt=Q.toString,S=m?m.toStringTag:void 0;function mt(e){var t=ct.call(e,S),r=e[S];try{e[S]=void 0;var o=!0}catch{}var n=dt.call(e);return o&&(t?e[S]=r:delete e[S]),n}var ee=mt;var ut=Object.prototype,ht=ut.toString;function xt(e){return ht.call(e)}var te=xt;var gt="[object Null]",yt="[object Undefined]",re=m?m.toStringTag:void 0;function Et(e){return e==null?e===void 0?yt:gt:re&&re in Object(e)?ee(e):te(e)}var oe=Et;function wt(e){return e!=null&&typeof e=="object"}var ae=wt;var bt="[object Symbol]";function It(e){return typeof e=="symbol"||ae(e)&&oe(e)==bt}var se=It;function St(e,t){for(var r=-1,o=e==null?0:e.length,n=Array(o);++r<o;)n[r]=t(e[r],r,e);return n}var ne=St;var $t=Array.isArray,ie=$t;var At=1/0,le=m?m.prototype:void 0,pe=le?le.toString:void 0;function fe(e){if(typeof e=="string")return e;if(ie(e))return ne(e,fe)+"";if(se(e))return pe?pe.call(e):"";var t=e+"";return t=="0"&&1/e==-At?"-0":t}var ce=fe;function vt(e){return e==null?"":ce(e)}var $=vt;function Rt(e){for(var t=-1,r=e==null?0:e.length,o=0,n=[];++t<r;){var l=e[t];l&&(n[o++]=l)}return n}var U=Rt;var T=e=>e instanceof Error?e.message:$(e);var I=(0,me.promisify)(de.exec),R=e=>typeof e=="object"&&"stderr"in e?e.stderr:T(e);var ue=`${he.default.homedir()}/.midway/cookie`,Tt=e=>typeof e=="object"&&e!==null&&"__type"in e&&e.__type.includes("Exception"),Nt=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="error",Ot=(e,t)=>{let{cookie:r,data:o,args:n=[],headers:l={},method:w,maxBuffer:c,cancel:b}=t,A=[`curl -sSL '${e}'`,`-X ${w??"GET"}`,Object.entries(l).map(([d,P])=>`-H '${d}: ${P}'`),n,o?[`-d '${JSON.stringify(o)}'`]:[],r?[`-b '${Object.entries(r).map(([d,P])=>`${d}=${P}`).join(";")}'`]:[]].flat();return I(A.join(" "),{maxBuffer:c,signal:b?.signal}).then(({stdout:d})=>D(d)?JSON.parse(d):d).catch(d=>{throw new Error(R(d))})};var u=(e,t={})=>{let{ignoreCoralError:r=!1,writeToCookieFile:o=!0,args:n=[],...l}=t,w=[n,`--anyauth --location-trusted -k -u : -b ${ue}`,o?[`-c ${ue}`]:[]].flat();return Ot(e,{...l,args:w}).then(c=>{if(!r&&Tt(c))throw new Error(`${c.__type}${c.message?`: ${c.message}`:""}`);if(Nt(c))throw new Error(`${c.message??"Midway Error"}: ${c.desc??"You should authenticate (may use mwinit)"}`);return c})};var Lt=(e,t)=>u("https://gitfarm-sso.corp.amazon.com",{...t,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${e}`}}),xe=e=>Lt("getReferenceSha1s",{data:{repositoryId:e}}).then(t=>t.references);var N=require("@raycast/api");function O(e,t=!0){let{launchType:r,extensionName:o,commandName:n}=N.environment;return!t||r===N.LaunchType.Background?Promise.resolve():u("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:n,extensionVersion:e,extensionName:o}}).catch(l=>console.warn(`Failed to publish stats for ${o}/${n}.`,l))}var f=require("@raycast/api");var pr=g(Pe(),1),_=g(Ue(),1),fr=g(ze(),1),cr=g(qe(),1),He=g(Be(),1);var dr=e=>xe(`pkg/${e}`).then(t=>U(t).map(r=>(r.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(r=>(0,He.default)(r))).then(t=>t.length===0?void 0:t.reduce((r,o)=>(0,_.default)(o,r)?o:r,t[0])).catch(t=>{console.warn(`Failed to get the latest extension version for ${e}.`,t)}),_e=async e=>{let{launchType:t,extensionName:r}=f.environment,{updateCommandName:o,changelogCommandName:n,currentVersion:l,pkg:w,extensionOwner:c}=e,b=await dr(w);if(t===f.LaunchType.UserInitiated&&b&&(0,_.default)(b,l)){let A={type:f.LaunchType.UserInitiated,extensionName:r,ownerOrAuthorName:c};await(0,f.showToast)({style:f.Toast.Style.Success,title:`\u2728 New version (${b}) now available!`,message:`Upgrade from current version (${l}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,f.launchCommand)({name:o??"update-extension",...A})},secondaryAction:{title:"Changelog",onAction:()=>(0,f.launchCommand)({name:n??"extension-changelog",...A})}})}};var Ve="1.18.4";var Je="zhenpewu";var X=Ve,mr="AmznRaycastExtension";var Ke=()=>_e({pkg:mr,currentVersion:X,extensionOwner:Je});var ur=()=>O(X,!0),Ye=ur;var E=require("@raycast/api");async function Ze(e){let t=await M({style:E.Toast.Style.Animated,title:"Generating Tiny URL..."}),r=new URLSearchParams({name:e.arguments.url,opaque:"1"});try{let o=await u(`https://tiny.amazon.com/submit/url?${r}`,{headers:{Accept:"application/json"}});if(o.error)throw new Error(o.error);await E.Clipboard.copy($(o.short_url)),t.updateContent({style:E.Toast.Style.Success,title:"\u{1F389} Copied generated Tiny URL to clipboard successfully."})}catch(o){t.updateContent({style:E.Toast.Style.Failure,title:"\u274C Failed to generate Tiny URL.",message:T(o)})}await Ye(),await Ke()}
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
