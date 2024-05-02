"use strict";var Vn=Object.create;var et=Object.defineProperty;var Wn=Object.getOwnPropertyDescriptor;var Xn=Object.getOwnPropertyNames;var Jn=Object.getPrototypeOf,Kn=Object.prototype.hasOwnProperty;var Y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yn=(e,t)=>{for(var r in t)et(e,r,{get:t[r],enumerable:!0})},nr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Xn(t))!Kn.call(e,i)&&i!==r&&et(e,i,{get:()=>t[i],enumerable:!(n=Wn(t,i))||n.enumerable});return e};var ne=(e,t,r)=>(r=e!=null?Vn(Jn(e)):{},nr(t||!e||!e.__esModule?et(r,"default",{value:e,enumerable:!0}):r,e)),Qn=e=>nr(et({},"__esModule",{value:!0}),e);var lr=Y((we,cr)=>{"use strict";var Et=require("crypto");we=cr.exports=qe;function qe(e,t){return t=or(e,t),Zn(e,t)}we.sha1=function(e){return qe(e)};we.keys=function(e){return qe(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})};we.MD5=function(e){return qe(e,{algorithm:"md5",encoding:"hex"})};we.keysMD5=function(e){return qe(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var Ce=Et.getHashes?Et.getHashes().slice():["sha1","md5"];Ce.push("passthrough");var ir=["buffer","hex","binary","base64"];function or(e,t){t=t||{};var r={};if(r.algorithm=t.algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=t.ignoreUnknown===!0,r.respectType=t.respectType!==!1,r.respectFunctionNames=t.respectFunctionNames!==!1,r.respectFunctionProperties=t.respectFunctionProperties!==!1,r.unorderedArrays=t.unorderedArrays===!0,r.unorderedSets=t.unorderedSets!==!1,r.unorderedObjects=t.unorderedObjects!==!1,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,typeof e>"u")throw new Error("Object argument required.");for(var n=0;n<Ce.length;++n)Ce[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=Ce[n]);if(Ce.indexOf(r.algorithm)===-1)throw new Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+Ce.join(", "));if(ir.indexOf(r.encoding)===-1&&r.algorithm!=="passthrough")throw new Error('Encoding "'+r.encoding+'"  not supported. supported values: '+ir.join(", "));return r}function ar(e){if(typeof e!="function")return!1;var t=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;return t.exec(Function.prototype.toString.call(e))!=null}function Zn(e,t){var r;t.algorithm!=="passthrough"?r=Et.createHash(t.algorithm):r=new sr,typeof r.write>"u"&&(r.write=r.update,r.end=r.update);var n=At(t,r);if(n.dispatch(e),r.update||r.end(""),r.digest)return r.digest(t.encoding==="buffer"?void 0:t.encoding);var i=r.read();return t.encoding==="buffer"?i:i.toString(t.encoding)}we.writeToStream=function(e,t,r){return typeof r>"u"&&(r=t,t={}),t=or(e,t),At(t,r).dispatch(e)};function At(e,t,r){r=r||[];var n=function(i){return t.update?t.update(i,"utf8"):t.write(i,"utf8")};return{dispatch:function(i){e.replacer&&(i=e.replacer(i));var a=typeof i;return i===null&&(a="null"),this["_"+a](i)},_object:function(i){var a=/\[object (.*)\]/i,y=Object.prototype.toString.call(i),s=a.exec(y);s?s=s[1]:s="unknown:["+y+"]",s=s.toLowerCase();var u=null;if((u=r.indexOf(i))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(i),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(i))return n("buffer:"),n(i);if(s!=="object"&&s!=="function"&&s!=="asyncfunction")if(this["_"+s])this["_"+s](i);else{if(e.ignoreUnknown)return n("["+s+"]");throw new Error('Unknown object type "'+s+'"')}else{var g=Object.keys(i);e.unorderedObjects&&(g=g.sort()),e.respectType!==!1&&!ar(i)&&g.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(g=g.filter(function(x){return!e.excludeKeys(x)})),n("object:"+g.length+":");var b=this;return g.forEach(function(x){b.dispatch(x),n(":"),e.excludeValues||b.dispatch(i[x]),n(",")})}},_array:function(i,a){a=typeof a<"u"?a:e.unorderedArrays!==!1;var y=this;if(n("array:"+i.length+":"),!a||i.length<=1)return i.forEach(function(g){return y.dispatch(g)});var s=[],u=i.map(function(g){var b=new sr,x=r.slice(),T=At(e,b,x);return T.dispatch(g),s=s.concat(x.slice(r.length)),b.read().toString()});return r=r.concat(s),u.sort(),this._array(u,!1)},_date:function(i){return n("date:"+i.toJSON())},_symbol:function(i){return n("symbol:"+i.toString())},_error:function(i){return n("error:"+i.toString())},_boolean:function(i){return n("bool:"+i.toString())},_string:function(i){n("string:"+i.length+":"),n(i.toString())},_function:function(i){n("fn:"),ar(i)?this.dispatch("[native]"):this.dispatch(i.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(i.name)),e.respectFunctionProperties&&this._object(i)},_number:function(i){return n("number:"+i.toString())},_xml:function(i){return n("xml:"+i.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(i){return n("regex:"+i.toString())},_uint8array:function(i){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(i))},_uint8clampedarray:function(i){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(i))},_int8array:function(i){return n("int8array:"),this.dispatch(Array.prototype.slice.call(i))},_uint16array:function(i){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(i))},_int16array:function(i){return n("int16array:"),this.dispatch(Array.prototype.slice.call(i))},_uint32array:function(i){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(i))},_int32array:function(i){return n("int32array:"),this.dispatch(Array.prototype.slice.call(i))},_float32array:function(i){return n("float32array:"),this.dispatch(Array.prototype.slice.call(i))},_float64array:function(i){return n("float64array:"),this.dispatch(Array.prototype.slice.call(i))},_arraybuffer:function(i){return n("arraybuffer:"),this.dispatch(new Uint8Array(i))},_url:function(i){return n("url:"+i.toString(),"utf8")},_map:function(i){n("map:");var a=Array.from(i);return this._array(a,e.unorderedSets!==!1)},_set:function(i){n("set:");var a=Array.from(i);return this._array(a,e.unorderedSets!==!1)},_file:function(i){return n("file:"),this.dispatch([i.name,i.size,i.type,i.lastModfied])},_blob:function(){if(e.ignoreUnknown)return n("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return n("domwindow")},_bigint:function(i){return n("bigint:"+i.toString())},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function sr(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}});var _t=Y((Vo,Pr)=>{var ui=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Pr.exports=ui});var Lt=Y((Wo,$r)=>{var di="2.0.0",pi=Number.MAX_SAFE_INTEGER||9007199254740991,fi=16,mi=250,hi=["major","premajor","minor","preminor","patch","prepatch","prerelease"];$r.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:fi,MAX_SAFE_BUILD_LENGTH:mi,MAX_SAFE_INTEGER:pi,RELEASE_TYPES:hi,SEMVER_SPEC_VERSION:di,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Nr=Y((me,Dr)=>{var{MAX_SAFE_COMPONENT_LENGTH:Ct,MAX_SAFE_BUILD_LENGTH:gi,MAX_LENGTH:yi}=Lt(),vi=_t();me=Dr.exports={};var Si=me.re=[],wi=me.safeRe=[],p=me.src=[],f=me.t={},bi=0,Pt="[a-zA-Z0-9-]",xi=[["\\s",1],["\\d",yi],[Pt,gi]],Ei=e=>{for(let[t,r]of xi)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},k=(e,t,r)=>{let n=Ei(t),i=bi++;vi(e,i,t),f[e]=i,p[i]=t,Si[i]=new RegExp(t,r?"g":void 0),wi[i]=new RegExp(n,r?"g":void 0)};k("NUMERICIDENTIFIER","0|[1-9]\\d*");k("NUMERICIDENTIFIERLOOSE","\\d+");k("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Pt}*`);k("MAINVERSION",`(${p[f.NUMERICIDENTIFIER]})\\.(${p[f.NUMERICIDENTIFIER]})\\.(${p[f.NUMERICIDENTIFIER]})`);k("MAINVERSIONLOOSE",`(${p[f.NUMERICIDENTIFIERLOOSE]})\\.(${p[f.NUMERICIDENTIFIERLOOSE]})\\.(${p[f.NUMERICIDENTIFIERLOOSE]})`);k("PRERELEASEIDENTIFIER",`(?:${p[f.NUMERICIDENTIFIER]}|${p[f.NONNUMERICIDENTIFIER]})`);k("PRERELEASEIDENTIFIERLOOSE",`(?:${p[f.NUMERICIDENTIFIERLOOSE]}|${p[f.NONNUMERICIDENTIFIER]})`);k("PRERELEASE",`(?:-(${p[f.PRERELEASEIDENTIFIER]}(?:\\.${p[f.PRERELEASEIDENTIFIER]})*))`);k("PRERELEASELOOSE",`(?:-?(${p[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${p[f.PRERELEASEIDENTIFIERLOOSE]})*))`);k("BUILDIDENTIFIER",`${Pt}+`);k("BUILD",`(?:\\+(${p[f.BUILDIDENTIFIER]}(?:\\.${p[f.BUILDIDENTIFIER]})*))`);k("FULLPLAIN",`v?${p[f.MAINVERSION]}${p[f.PRERELEASE]}?${p[f.BUILD]}?`);k("FULL",`^${p[f.FULLPLAIN]}$`);k("LOOSEPLAIN",`[v=\\s]*${p[f.MAINVERSIONLOOSE]}${p[f.PRERELEASELOOSE]}?${p[f.BUILD]}?`);k("LOOSE",`^${p[f.LOOSEPLAIN]}$`);k("GTLT","((?:<|>)?=?)");k("XRANGEIDENTIFIERLOOSE",`${p[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);k("XRANGEIDENTIFIER",`${p[f.NUMERICIDENTIFIER]}|x|X|\\*`);k("XRANGEPLAIN",`[v=\\s]*(${p[f.XRANGEIDENTIFIER]})(?:\\.(${p[f.XRANGEIDENTIFIER]})(?:\\.(${p[f.XRANGEIDENTIFIER]})(?:${p[f.PRERELEASE]})?${p[f.BUILD]}?)?)?`);k("XRANGEPLAINLOOSE",`[v=\\s]*(${p[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${p[f.XRANGEIDENTIFIERLOOSE]})(?:${p[f.PRERELEASELOOSE]})?${p[f.BUILD]}?)?)?`);k("XRANGE",`^${p[f.GTLT]}\\s*${p[f.XRANGEPLAIN]}$`);k("XRANGELOOSE",`^${p[f.GTLT]}\\s*${p[f.XRANGEPLAINLOOSE]}$`);k("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Ct}})(?:\\.(\\d{1,${Ct}}))?(?:\\.(\\d{1,${Ct}}))?`);k("COERCE",`${p[f.COERCEPLAIN]}(?:$|[^\\d])`);k("COERCEFULL",p[f.COERCEPLAIN]+`(?:${p[f.PRERELEASE]})?(?:${p[f.BUILD]})?(?:$|[^\\d])`);k("COERCERTL",p[f.COERCE],!0);k("COERCERTLFULL",p[f.COERCEFULL],!0);k("LONETILDE","(?:~>?)");k("TILDETRIM",`(\\s*)${p[f.LONETILDE]}\\s+`,!0);me.tildeTrimReplace="$1~";k("TILDE",`^${p[f.LONETILDE]}${p[f.XRANGEPLAIN]}$`);k("TILDELOOSE",`^${p[f.LONETILDE]}${p[f.XRANGEPLAINLOOSE]}$`);k("LONECARET","(?:\\^)");k("CARETTRIM",`(\\s*)${p[f.LONECARET]}\\s+`,!0);me.caretTrimReplace="$1^";k("CARET",`^${p[f.LONECARET]}${p[f.XRANGEPLAIN]}$`);k("CARETLOOSE",`^${p[f.LONECARET]}${p[f.XRANGEPLAINLOOSE]}$`);k("COMPARATORLOOSE",`^${p[f.GTLT]}\\s*(${p[f.LOOSEPLAIN]})$|^$`);k("COMPARATOR",`^${p[f.GTLT]}\\s*(${p[f.FULLPLAIN]})$|^$`);k("COMPARATORTRIM",`(\\s*)${p[f.GTLT]}\\s*(${p[f.LOOSEPLAIN]}|${p[f.XRANGEPLAIN]})`,!0);me.comparatorTrimReplace="$1$2$3";k("HYPHENRANGE",`^\\s*(${p[f.XRANGEPLAIN]})\\s+-\\s+(${p[f.XRANGEPLAIN]})\\s*$`);k("HYPHENRANGELOOSE",`^\\s*(${p[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${p[f.XRANGEPLAINLOOSE]})\\s*$`);k("STAR","(<|>)?=?\\s*\\*");k("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");k("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Mr=Y((Xo,Or)=>{var Ai=Object.freeze({loose:!0}),ki=Object.freeze({}),Ii=e=>e?typeof e!="object"?Ai:e:ki;Or.exports=Ii});var qr=Y((Jo,zr)=>{var Fr=/^[0-9]+$/,Ur=(e,t)=>{let r=Fr.test(e),n=Fr.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1},Ri=(e,t)=>Ur(t,e);zr.exports={compareIdentifiers:Ur,rcompareIdentifiers:Ri}});var Dt=Y((Ko,Hr)=>{var ct=_t(),{MAX_LENGTH:Gr,MAX_SAFE_INTEGER:lt}=Lt(),{safeRe:jr,t:Br}=Nr(),Ti=Mr(),{compareIdentifiers:Me}=qr(),$t=class e{constructor(t,r){if(r=Ti(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Gr)throw new TypeError(`version is longer than ${Gr} characters`);ct("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=t.trim().match(r.loose?jr[Br.LOOSE]:jr[Br.FULL]);if(!n)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>lt||this.major<0)throw new TypeError("Invalid major version");if(this.minor>lt||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>lt||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){let a=+i;if(a>=0&&a<lt)return a}return i}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(ct("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),Me(this.major,t.major)||Me(this.minor,t.minor)||Me(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],i=t.prerelease[r];if(ct("prerelease compare",r,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return Me(n,i)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let n=this.build[r],i=t.build[r];if(ct("prerelease compare",r,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return Me(n,i)}while(++r)}inc(t,r,n){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let i=Number(n)?1:0;if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[i];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(i)}}if(r){let a=[r,i];n===!1&&(a=[r]),Me(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Hr.exports=$t});var Nt=Y((Yo,Wr)=>{var Vr=Dt(),_i=(e,t,r=!1)=>{if(e instanceof Vr)return e;try{return new Vr(e,t)}catch(n){if(!r)return null;throw n}};Wr.exports=_i});var Jr=Y((Qo,Xr)=>{var Li=Nt(),Ci=(e,t)=>{let r=Li(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};Xr.exports=Ci});var ut=Y((Zo,Yr)=>{var Kr=Dt(),Pi=(e,t,r)=>new Kr(e,r).compare(new Kr(t,r));Yr.exports=Pi});var Zr=Y((es,Qr)=>{var $i=ut(),Di=(e,t,r)=>$i(e,t,r)>0;Qr.exports=Di});var tn=Y((ts,en)=>{var Ni=ut(),Oi=(e,t,r)=>Ni(e,t,r)<0;en.exports=Oi});var nn=Y((rs,rn)=>{var Mi=ut(),Fi=(e,t,r)=>Mi(e,t,r)<=0;rn.exports=Fi});var on=Y((ns,an)=>{var Ui=Nt(),zi=(e,t)=>{let r=Ui(e,t);return r?r.version:null};an.exports=zi});var Dn=Y(($n,vt)=>{((e,t)=>{typeof define=="function"&&define.amd?define([],t):typeof vt=="object"&&vt.exports?vt.exports=t():e.fuzzysort=t()})($n,e=>{"use strict";var t=(c,o)=>{if(c=="farzher")return{target:"farzher was here (^-^*)/",score:0,_indexes:[0]};if(!c||!o)return _;var l=g(c);ae(o)||(o=u(o));var m=l.bitflags;return(m&o._bitflags)!==m?_:x(l,o)},r=(c,o,l)=>{if(c=="farzher")return[{target:"farzher was here (^-^*)/",score:0,_indexes:[0],obj:o?o[0]:_}];if(!c)return l&&l.all?b(c,o,l):W;var m=g(c),h=m.bitflags,S=m.containsSpace,v=l&&l.threshold||J,d=l&&l.limit||ze,A=0,E=0,L=o.length;if(l&&l.key)for(var ee=l.key,D=0;D<L;++D){var oe=o[D],M=se(oe,ee);if(M&&(ae(M)||(M=u(M)),(h&M._bitflags)===h)){var U=x(m,M);U!==_&&(U.score<v||(U={target:U.target,_targetLower:"",_targetLowerCodes:_,_nextBeginningIndexes:_,_bitflags:0,score:U.score,_indexes:U._indexes,obj:oe},A<d?(R.add(U),++A):(++E,U.score>R.peek().score&&R.replaceTop(U))))}}else if(l&&l.keys)for(var tr=l.scoreFn||Se,w=l.keys,Ze=w.length,D=0;D<L;++D){for(var oe=o[D],re=new Array(Ze),ue=0;ue<Ze;++ue){var ee=w[ue],M=se(oe,ee);if(!M){re[ue]=_;continue}ae(M)||(M=u(M)),(h&M._bitflags)!==h?re[ue]=_:re[ue]=x(m,M)}re.obj=oe;var F=tr(re);F!==_&&(F<v||(re.score=F,A<d?(R.add(re),++A):(++E,F>R.peek().score&&R.replaceTop(re))))}else for(var D=0;D<L;++D){var M=o[D];if(M&&(ae(M)||(M=u(M)),(h&M._bitflags)===h)){var U=x(m,M);U!==_&&(U.score<v||(A<d?(R.add(U),++A):(++E,U.score>R.peek().score&&R.replaceTop(U))))}}if(A===0)return W;for(var Le=new Array(A),D=A-1;D>=0;--D)Le[D]=R.poll();return Le.total=A+E,Le},n=(c,o,l)=>{if(typeof o=="function")return i(c,o);if(c===_)return _;o===void 0&&(o="<b>"),l===void 0&&(l="</b>");var m="",h=0,S=!1,v=c.target,d=v.length,A=c._indexes;A=A.slice(0,A.len).sort((ee,D)=>ee-D);for(var E=0;E<d;++E){var L=v[E];if(A[h]===E){if(++h,S||(S=!0,m+=o),h===A.length){m+=L+l+v.substr(E+1);break}}else S&&(S=!1,m+=l);m+=L}return m},i=(E,o)=>{if(E===_)return _;var l=E.target,m=l.length,h=E._indexes;h=h.slice(0,h.len).sort((D,oe)=>D-oe);for(var S="",v=0,d=0,A=!1,E=[],L=0;L<m;++L){var ee=l[L];if(h[d]===L){if(++d,A||(A=!0,E.push(S),S=""),d===h.length){S+=ee,E.push(o(S,v++)),S="",E.push(l.substr(L+1));break}}else A&&(A=!1,E.push(o(S,v++)),S="");S+=ee}return E},a=c=>c._indexes.slice(0,c._indexes.len).sort((o,l)=>o-l),y=c=>{typeof c!="string"&&(c="");var o=O(c);return{target:c,_targetLower:o._lower,_targetLowerCodes:o.lowerCodes,_nextBeginningIndexes:_,_bitflags:o.bitflags,score:_,_indexes:[0],obj:_}},s=c=>{typeof c!="string"&&(c=""),c=c.trim();var o=O(c),l=[];if(o.containsSpace){var m=c.split(/\s+/);m=[...new Set(m)];for(var h=0;h<m.length;h++)if(m[h]!==""){var S=O(m[h]);l.push({lowerCodes:S.lowerCodes,_lower:m[h].toLowerCase(),containsSpace:!1})}}return{lowerCodes:o.lowerCodes,bitflags:o.bitflags,containsSpace:o.containsSpace,_lower:o._lower,spaceSearches:l}},u=c=>{if(c.length>999)return y(c);var o=te.get(c);return o!==void 0||(o=y(c),te.set(c,o)),o},g=c=>{if(c.length>999)return s(c);var o=Z.get(c);return o!==void 0||(o=s(c),Z.set(c,o)),o},b=(c,o,l)=>{var m=[];m.total=o.length;var h=l&&l.limit||ze;if(l&&l.key)for(var S=0;S<o.length;S++){var v=o[S],d=se(v,l.key);if(d){ae(d)||(d=u(d)),d.score=J,d._indexes.len=0;var A=d;if(A={target:A.target,_targetLower:"",_targetLowerCodes:_,_nextBeginningIndexes:_,_bitflags:0,score:d.score,_indexes:_,obj:v},m.push(A),m.length>=h)return m}}else if(l&&l.keys)for(var S=0;S<o.length;S++){for(var v=o[S],E=new Array(l.keys.length),L=l.keys.length-1;L>=0;--L){var d=se(v,l.keys[L]);if(!d){E[L]=_;continue}ae(d)||(d=u(d)),d.score=J,d._indexes.len=0,E[L]=d}if(E.obj=v,E.score=J,m.push(E),m.length>=h)return m}else for(var S=0;S<o.length;S++){var d=o[S];if(d&&(ae(d)||(d=u(d)),d.score=J,d._indexes.len=0,m.push(d),m.length>=h))return m}return m},x=(c,o,l=!1)=>{if(l===!1&&c.containsSpace)return T(c,o);for(var m=c._lower,h=c.lowerCodes,S=h[0],v=o._targetLowerCodes,d=h.length,A=v.length,D=0,E=0,L=0;;){var ee=S===v[E];if(ee){if(j[L++]=E,++D,D===d)break;S=h[D]}if(++E,E>=A)return _}var D=0,oe=!1,M=0,U=o._nextBeginningIndexes;U===_&&(U=o._nextBeginningIndexes=$(o.target));var tr=E=j[0]===0?0:U[j[0]-1],w=0;if(E!==A)for(;;)if(E>=A){if(D<=0||(++w,w>200))break;--D;var Ze=z[--M];E=U[Ze]}else{var ee=h[D]===v[E];if(ee){if(z[M++]=E,++D,D===d){oe=!0;break}++E}else E=U[E]}var re=o._targetLower.indexOf(m,j[0]),ue=~re;if(ue&&!oe)for(var F=0;F<L;++F)j[F]=re+F;var Le=!1;ue&&(Le=o._nextBeginningIndexes[re-1]===re);{if(oe)var de=z,bt=M;else var de=j,bt=L;for(var pe=0,rr=0,F=1;F<d;++F)de[F]-de[F-1]!==1&&(pe-=de[F],++rr);var Hn=de[d-1]-de[0]-(d-1);if(pe-=(12+Hn)*rr,de[0]!==0&&(pe-=de[0]*de[0]*.2),!oe)pe*=1e3;else{for(var xt=1,F=U[0];F<A;F=U[F])++xt;xt>24&&(pe*=(xt-24)*10)}ue&&(pe/=1+d*d*1),Le&&(pe/=1+d*d*1),pe-=A-d,o.score=pe;for(var F=0;F<bt;++F)o._indexes[F]=de[F];return o._indexes.len=bt,o}},T=(c,o)=>{for(var l=new Set,m=0,h=_,S=0,v=c.spaceSearches,L=0;L<v.length;++L){var d=v[L];if(h=x(d,o),h===_)return _;m+=h.score,h._indexes[0]<S&&(m-=S-h._indexes[0]),S=h._indexes[0];for(var A=0;A<h._indexes.len;++A)l.add(h._indexes[A])}var E=x(c,o,!0);if(E!==_&&E.score>m)return E;h.score=m;var L=0;for(let ee of l)h._indexes[L++]=ee;return h._indexes.len=L,h},O=c=>{for(var o=c.length,l=c.toLowerCase(),m=[],h=0,S=!1,v=0;v<o;++v){var d=m[v]=l.charCodeAt(v);if(d===32){S=!0;continue}var A=d>=97&&d<=122?d-97:d>=48&&d<=57?26:d<=127?30:31;h|=1<<A}return{lowerCodes:m,bitflags:h,containsSpace:S,_lower:l}},P=c=>{for(var o=c.length,l=[],m=0,h=!1,S=!1,v=0;v<o;++v){var d=c.charCodeAt(v),A=d>=65&&d<=90,E=A||d>=97&&d<=122||d>=48&&d<=57,L=A&&!h||!S||!E;h=A,S=E,L&&(l[m++]=v)}return l},$=c=>{for(var o=c.length,l=P(c),m=[],h=l[0],S=0,v=0;v<o;++v)h>v?m[v]=h:(h=l[++S],m[v]=h===void 0?o:h);return m},V=()=>{te.clear(),Z.clear(),j=[],z=[]},te=new Map,Z=new Map,j=[],z=[],Se=c=>{for(var o=J,l=c.length,m=0;m<l;++m){var h=c[m];if(h!==_){var S=h.score;S>o&&(o=S)}}return o===J?_:o},se=(c,o)=>{var l=c[o];if(l!==void 0)return l;var m=o;Array.isArray(o)||(m=o.split("."));for(var h=m.length,S=-1;c&&++S<h;)c=c[m[S]];return c},ae=c=>typeof c=="object",ze=1/0,J=-ze,W=[];W.total=0;var _=null,he=c=>{var o=[],l=0,m={},h=S=>{for(var v=0,d=o[v],A=1;A<l;){var E=A+1;v=A,E<l&&o[E].score<o[A].score&&(v=E),o[v-1>>1]=o[v],A=1+(v<<1)}for(var L=v-1>>1;v>0&&d.score<o[L].score;L=(v=L)-1>>1)o[v]=o[L];o[v]=d};return m.add=S=>{var v=l;o[l++]=S;for(var d=v-1>>1;v>0&&S.score<o[d].score;d=(v=d)-1>>1)o[v]=o[d];o[v]=S},m.poll=S=>{if(l!==0){var v=o[0];return o[0]=o[--l],h(),v}},m.peek=S=>{if(l!==0)return o[0]},m.replaceTop=S=>{o[0]=S,h()},m},R=he();return{single:t,go:r,highlight:n,prepare:y,indexes:a,cleanup:V}})});var fa={};Yn(fa,{default:()=>Bn});module.exports=Qn(fa);var Rt=ne(lr(),1),ye=require("react");var pr=require("@raycast/api"),Pe=require("react");var ur=require("react");function K(e){let t=(0,ur.useRef)(e);return t.current=e,t}function ei(e,t){let r=this[e];return r instanceof Date?`__raycast_cached_date__${r.toString()}`:Buffer.isBuffer(r)?`__raycast_cached_buffer__${r.toString("base64")}`:t}function ti(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}var ri=Symbol("cache without namespace"),dr=new Map;function kt(e,t,r){let n=r?.cacheNamespace||ri,i=dr.get(n)||dr.set(n,new pr.Cache({namespace:r?.cacheNamespace})).get(n);if(!i)throw new Error("Missing cache");let a=K(e),y=K(t),s=(0,Pe.useSyncExternalStore)(i.subscribe,()=>{try{return i.get(a.current)}catch(x){console.error("Could not get Cache data:",x);return}}),u=(0,Pe.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,ti)}catch(x){return console.warn("The cached data is corrupted",x),y.current}}else return y.current},[s,y]),g=K(u),b=(0,Pe.useCallback)(x=>{let T=typeof x=="function"?x(g.current):x;if(typeof T>"u")i.set(a.current,"undefined");else{let O=JSON.stringify(T,ei);i.set(a.current,O)}return T},[i,a,g]);return[u,b]}var be=require("@raycast/api"),X=require("react");var ce=require("@raycast/api"),It=class{toast;abortable;_abortController;constructor(t){this.abortable=t.abortable,this.toast=ce.environment.launchType===ce.LaunchType.UserInitiated?new ce.Toast(t):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(t){if(this.toast){let{title:r,style:n,message:i,secondaryAction:a}=this.toast;this.toast.title=t.title??r,this.toast.style=t.style??n,this.toast.message=t.message??i,this.abortable=t.abortable??this.abortable,this.toast.secondaryAction=t.secondaryAction??a,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},Ge=async e=>{let t=new It(e);return await t.show(),t},fr=e=>{let t=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:"Copy Logs",onAction(r){r.hide(),ce.Clipboard.copy(t)}}};function mr(e,t){let r=e instanceof Error?e.message:String(e);return(0,ce.showToast)({style:ce.Toast.Style.Failure,title:t?.title??"Something went wrong",message:r,primaryAction:t?.primaryAction??fr(e),secondaryAction:t?.primaryAction?fr(e):void 0})}var hr=Object.prototype.hasOwnProperty;function tt(e,t){var r,n;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&tt(e[n],t[n]););return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(hr.call(e,r)&&++n&&!hr.call(t,r)||!(r in t)||!tt(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}var je=require("react");function gr(e){let t=(0,je.useRef)(e),r=(0,je.useRef)(0);return tt(e,t.current)||(t.current=e,r.current+=1),(0,je.useMemo)(()=>t.current,[r.current])}function ge(e,t,r){let n=(0,X.useRef)(0),[i,a]=(0,X.useState)({isLoading:!0}),y=K(e),s=K(r?.abortable),u=K(t||[]),g=K(r?.onError),b=K(r?.onData),x=K(r?.onWillExecute),T=K(i.data),O=(0,X.useRef)(),P=(0,X.useRef)({page:0}),$=(0,X.useRef)(!1),V=(0,X.useRef)(!0),te=(0,X.useRef)(50),Z=(0,X.useCallback)((...J)=>{let W=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),x.current?.(J),a(R=>({...R,isLoading:!0}));let _=ni(y.current)(...J);function he(R){return R.name=="AbortError"||W===n.current&&(g.current?g.current(R):be.environment.launchType!==be.LaunchType.Background&&mr(R,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(c){c.hide(),O.current?.(...u.current||[])}}}),a({error:R,isLoading:!1})),R}return typeof _=="function"?($.current=!0,_(P.current).then(({data:R,hasMore:c,cursor:o})=>(W===n.current&&(P.current&&(P.current.cursor=o,P.current.lastItem=R?.[R.length-1]),b.current&&b.current(R,P.current),c&&(te.current=R.length),V.current=c,a(l=>P.current.page===0?{data:R,isLoading:!1}:{data:(l.data||[])?.concat(R),isLoading:!1})),R),R=>(V.current=!1,he(R)))):($.current=!1,_.then(R=>(W===n.current&&(b.current&&b.current(R),a({data:R,isLoading:!1})),R),he))},[s,b,g,u,y,a,O,x,P]);O.current=Z;let j=(0,X.useCallback)(()=>{P.current={page:0};let J=u.current||[];return Z(...J)},[Z,u]),z=(0,X.useCallback)(async(J,W)=>{let _;try{if(W?.optimisticUpdate){typeof W?.rollbackOnError!="function"&&W?.rollbackOnError!==!1&&(_=structuredClone(T.current?.value));let he=W.optimisticUpdate;a(R=>({...R,data:he(R.data)}))}return await J}catch(he){if(typeof W?.rollbackOnError=="function"){let R=W.rollbackOnError;a(c=>({...c,data:R(c.data)}))}else W?.optimisticUpdate&&W?.rollbackOnError!==!1&&a(R=>({...R,data:_}));throw he}finally{W?.shouldRevalidateAfter!==!1&&(be.environment.launchType===be.LaunchType.Background||be.environment.commandMode==="menu-bar"?await j():j())}},[j,T,a]),Se=(0,X.useCallback)(()=>{P.current.page+=1;let J=u.current||[];Z(...J)},[P,T,u,Z]);(0,X.useEffect)(()=>{P.current={page:0},r?.execute!==!1?Z(...t||[]):s.current&&s.current.current?.abort()},[gr([t,r?.execute,Z]),s,P]),(0,X.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let se=r?.execute!==!1?i.isLoading:!1,ae={...i,isLoading:se},ze=$.current?{pageSize:te.current,hasMore:V.current,onLoadMore:Se}:void 0;return{...ae,revalidate:j,mutate:z,pagination:ze}}function ni(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}var $e=Symbol();function ve(e,t,r){let{initialData:n,keepPreviousData:i,internal_cacheKeySuffix:a,...y}=r||{},s=(0,ye.useRef)(),[u,g]=kt((0,Rt.default)(t||[])+a,$e,{cacheNamespace:(0,Rt.default)(e)}),b=(0,ye.useRef)(u!==$e?u:n),x=(0,ye.useRef)(void 0),{mutate:T,revalidate:O,...P}=ge(e,t||[],{...y,onData(j,z){x.current=z,y.onData&&y.onData(j,z),!(z&&z.page>0)&&(s.current="promise",b.current=j,g(j))}}),$,V=P.pagination;x.current&&x.current.page>0&&P.data?$=P.data:s.current==="promise"?$=b.current:i&&u!==$e?($=u,V&&(V.hasMore=!0,V.pageSize=u.length)):i&&u===$e?$=b.current:u!==$e?($=u,V&&(V.hasMore=!0,V.pageSize=u.length)):$=n;let te=K($),Z=(0,ye.useCallback)(async(j,z)=>{let Se;try{if(z?.optimisticUpdate){typeof z?.rollbackOnError!="function"&&z?.rollbackOnError!==!1&&(Se=structuredClone(te.current));let se=z.optimisticUpdate(te.current);s.current="cache",b.current=se,g(se)}return await T(j,{shouldRevalidateAfter:z?.shouldRevalidateAfter})}catch(se){if(typeof z?.rollbackOnError=="function"){let ae=z.rollbackOnError(te.current);s.current="cache",b.current=ae,g(ae)}else z?.optimisticUpdate&&z?.rollbackOnError!==!1&&(s.current="cache",b.current=Se,g(Se));throw se}},[g,T,te,b,s]);return(0,ye.useEffect)(()=>{u!==$e&&(s.current="cache",b.current=u)},[u]),{data:$,isLoading:P.isLoading,error:P.error,mutate:x.current&&x.current.page>0?T:Z,pagination:V,revalidate:O}}var rt=require("react");var yr;(function(e){e.Required="required"})(yr||(yr={}));var vr=require("react");var ii=10,ai=24*60*60*1e3,Da=Math.log(2)/(ii*ai);var _r=ne(require("os"),1);var nt=(e=0)=>new Promise(t=>setTimeout(t,e)),Be=e=>{try{if(typeof e=="string"){let t=JSON.parse(e);if(t&&typeof t=="object")return!0}}catch{}return!1},B=e=>Array.isArray(e)?e.filter(t=>!!t):[];var Ir=require("child_process"),Rr=require("util");var oi=require("@raycast/api");var Sr=ne(require("os"),1);var{username:Ja}=Sr.default.userInfo();var Oe=require("@raycast/api");function Q(e){let t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function xe(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function wr(e,t){let r=Q(e);return isNaN(t)?xe(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function br(e,t){let r=Q(e);if(isNaN(t))return xe(e,NaN);if(!t)return r;let n=r.getDate(),i=xe(e,r.getTime());i.setMonth(r.getMonth()+t+1,0);let a=i.getDate();return n>=a?i:(r.setFullYear(i.getFullYear(),i.getMonth(),n),r)}function xr(e,t){let{years:r=0,months:n=0,weeks:i=0,days:a=0,hours:y=0,minutes:s=0,seconds:u=0}=t,g=Q(e),b=n||r?br(g,n+r*12):g,x=a||i?wr(b,a+i*7):b,T=s+y*60,P=(u+T*60)*1e3;return xe(e,x.getTime()+P)}function fe(e,t){let r=e<0?"-":"",n=Math.abs(e).toString().padStart(t,"0");return r+n}function Tt(e,t){let r=Q(e);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");let n=t?.format??"extended",i=t?.representation??"complete",a="",y="",s=n==="extended"?"-":"",u=n==="extended"?":":"";if(i!=="time"){let g=fe(r.getDate(),2),b=fe(r.getMonth()+1,2);a=`${fe(r.getFullYear(),4)}${s}${b}${s}${g}`}if(i!=="date"){let g=r.getTimezoneOffset();if(g!==0){let $=Math.abs(g),V=fe(Math.trunc($/60),2),te=fe($%60,2);y=`${g<0?"+":"-"}${V}:${te}`}else y="Z";let b=fe(r.getHours(),2),x=fe(r.getMinutes(),2),T=fe(r.getSeconds(),2),O=a===""?"":"T",P=[b,x,T].join(u);a=`${a}${O}${P}${y}`}return a}function Ne(e){return Q(e*1e3)}function Er(e){return Math.trunc(+Q(e)/1e3)}function Ar(e,t){let r=Q(e),n=Q(t);return r.getTime()>n.getTime()}var He=class e{static remove=async(t,r)=>Oe.LocalStorage.removeItem(e.getId(t,r));static get=async(t,r)=>Oe.LocalStorage.getItem(e.getId(t,r));static set=async(t,r,n)=>Oe.LocalStorage.setItem(e.getId(t,n),r);static store=async(t,r,n,i)=>e.set(t,JSON.stringify({...n?{ttl:Er(xr(new Date,n))}:{},data:r}),i);static retrieve=async(t,r)=>{let n=await e.get(t,r);if(!n)return;let i=JSON.parse(n);if(i.ttl&&Ar(new Date,Ne(+i.ttl))){await e.remove(t,r);return}return i.data};static getId=(t,r=!0)=>r?`${Oe.environment.commandName}-${t}`:t};var Ee=e=>e==null?"":String(e),kr=e=>e instanceof Error?e.message:Ee(e);var De=(0,Rr.promisify)(Ir.exec),it=e=>typeof e=="object"&&"stderr"in e?e.stderr:kr(e);var Tr=`${_r.default.homedir()}/.midway/cookie`,si=e=>typeof e=="object"&&e!==null&&"__type"in e&&e.__type.includes("Exception"),ci=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="error",at=(e,t)=>{let{cookie:r,data:n,args:i=[],headers:a={},method:y,maxBuffer:s,cancel:u}=t,g=[`curl -sSL '${e}'`,`-X ${y??"GET"}`,Object.entries(a).map(([b,x])=>`-H '${b}: ${x}'`),i,n?[`-d '${JSON.stringify(n)}'`]:[],r?[`-b '${Object.entries(r).map(([b,x])=>`${b}=${x}`).join(";")}'`]:[]].flat();return De(g.join(" "),{maxBuffer:s,signal:u?.signal}).then(({stdout:b})=>Be(b)?JSON.parse(b):b).catch(b=>{throw new Error(it(b))})},Lr=(e,t)=>{let{args:r=[],headers:n={},accessKeyId:i,secretAccessKey:a,service:y,region:s,sessionToken:u,...g}=t,b=[...r,`--aws-sigv4 'aws:amz:${s}:${y}' -u '${i}:${a}'`],x={...n,...u?{"x-amz-security-token":u}:{}};return at(e,{...g,args:b,headers:x})},le=(e,t={})=>{let{ignoreCoralError:r=!1,writeToCookieFile:n=!0,args:i=[],...a}=t,y=[i,`--anyauth --location-trusted -k -u : -b ${Tr}`,n?[`-c ${Tr}`]:[]].flat();return at(e,{...a,args:y}).then(s=>{if(!r&&si(s))throw new Error(`${s.__type}${s.message?`: ${s.message}`:""}`);if(ci(s))throw new Error(`${s.message??"Midway Error"}: ${s.desc??"You should authenticate (may use mwinit)"}`);return s})};var li=(e,t)=>le("https://gitfarm-sso.corp.amazon.com",{...t,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${e}`}}),Cr=e=>li("getReferenceSha1s",{data:{repositoryId:e}}).then(t=>t.references);var ot=require("@raycast/api");function st(e,t=!0){let{launchType:r,extensionName:n,commandName:i}=ot.environment;return!t||r===ot.LaunchType.Background?Promise.resolve():le("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:i,extensionVersion:e,extensionName:n}}).catch(a=>console.warn(`Failed to publish stats for ${n}/${i}.`,a))}var ie=require("@raycast/api");var qi=ne(Jr(),1),Ot=ne(Zr(),1),Gi=ne(tn(),1),ji=ne(nn(),1),sn=ne(on(),1);var Bi=e=>Cr(`pkg/${e}`).then(t=>B(t).map(r=>(r.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(r=>(0,sn.default)(r))).then(t=>t.length===0?void 0:t.reduce((r,n)=>(0,Ot.default)(n,r)?n:r,t[0])).catch(t=>{console.warn(`Failed to get the latest extension version for ${e}.`,t)}),cn=async e=>{let{launchType:t,extensionName:r}=ie.environment,{updateCommandName:n,changelogCommandName:i,currentVersion:a,pkg:y,extensionOwner:s}=e,u=await Bi(y);if(t===ie.LaunchType.UserInitiated&&u&&(0,Ot.default)(u,a)){let g={type:ie.LaunchType.UserInitiated,extensionName:r,ownerOrAuthorName:s};await(0,ie.showToast)({style:ie.Toast.Style.Success,title:`\u2728 New version (${u}) now available!`,message:`Upgrade from current version (${a}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,ie.launchCommand)({name:n??"update-extension",...g})},secondaryAction:{title:"Changelog",onAction:()=>(0,ie.launchCommand)({name:i??"extension-changelog",...g})}})}};var Ve=e=>e&&Tt(e,{representation:"date"}),dt=e=>e&&Tt(e,{representation:"complete",format:"extended"}),We=e=>e?new Date(e):void 0;var dn=ne(require("os")),{username:pt}=dn.default.userInfo(),Hi=/kerberos:\s*(.+)\s*@ANT.AMAZON.COM/,Xe=`kerberos:${pt}@ANT.AMAZON.COM`,Mt=e=>{if(!e)return;if(e.__typename==="EmailAliasIdentity")return e?.details?.label;let[,t]=e?.id.match(Hi)??["",void 0];return t},Vi=e=>Array.isArray(e)&&e.length>0?e[0]?.value:void 0,Wi={ONE:1,TWO:2,BUSINESS_HOURS_TWO:2.5,THREE:3,FOUR:4,FIVE:5},Xi=`
  query issueListView($query: String!, $rows: Int, $start: Int, $sort: String) {
    queryIssues(query: $query, rows: $rows, start: $start, sort: $sort) {
      total
      documents {
        id
        shortId
        alias
        severity
        title
        status
        ticketingStatus
        createDate
        lastUpdatedDate
        lastAssignedDate
        description
        ticketingPendingReason
        lastUpdatedConversationDate
        lastUpdated {
          id
          name
          __typename
        }
        lastResolvedDate
        ...Labels
        tags {
          id
          __typename
        }
        dedupes {
          id
          __typename
        }
        schedule {
          estimatedStartDate
          actualStartDate
          needByDate
          estimatedCompletionDate
          actualCompletionDate
          __typename
        }
        assignee {
          id
          name
          ...EmailAliasIdentity
          __typename
        }
        requester {
          id
          name
          ...EmailAliasIdentity
          __typename
        }
        resolvedBy {
          id
          name
          __typename
        }
        watchers {
          id
          type
          __typename
        }
        rootCauses {
          id
          value
          __typename
        }
        extensions {
          tt {
            troubleTicketId
            assignedGroup
            rootCause
            closureCode
            caseType
            category
            item
            type
            rootCauseDetails
            minImpact
            asin
            quantity
            vendorId
            upc
            building
            buildingId
            city
            country
            hostname
            isd
            binding
            shipOrigin
            physicalLocation
            bolNumber
            invoiceNumber
            stockNumber
            purchaseOrderId
            title
            trackingNumber
            pictureFileImdexLocation
            __typename
          }
          backlog {
            priority
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
  fragment EmailAliasIdentity on Identity {
    ... on EmailAliasIdentity {
      id
      details {
        id
        label
        __typename
      }
      __typename
    }
    __typename
  }
  fragment Labels on Issue {
    id
    labels {
      id
      ...LabelContent
      __typename
    }
    __typename
  }
  fragment LabelContent on Label {
    id
    label
    theme {
      backgroundColor
      textColor
      __typename
    }
    type
    status
    __typename
  }
`,Ji=`
  query fetchCurrentUserDetails {
    whoami {
      id
      identity {
        id
        name
        protocol
        __typename
      }
      login
      fullName
      email
      jobTitle
      department
      building
      city
      employeeId
      groups {
        id
        details {
          id
          label
          deleted
          defaultTicketingFolderId
          __typename
        }
        __typename
      }
      canModerateTickets
      __typename
    }
  }
`,Ki=`
  query allSavedSearches {
    whoami {
      id
      groups {
        id
        details {
          id
          deleted
          label
          preferenceId
          preferences {
            id
            ticketingSavedSearches {
              ...TicketingSavedSearch
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    currentUserPreferences {
      id
      ticketing {
        ...FavoritedSavedSearches
        __typename
      }
      ticketingSavedSearches {
        ...TicketingSavedSearch
        __typename
      }
      __typename
    }
  }
  fragment FavoritedSavedSearches on TicketingSettings {
    favoriteSavedSearches {
      id
      source
      savedSearchId
      __typename
    }
    __typename
  }
  fragment TicketingSavedSearch on SavedSearch {
    id
    searchName
    queryString
    __typename
  }
`,Yi=`
  mutation checkInMultiple($args: MultiCheckInInput!) {
    checkInMultiple(args: $args) {
      ...issueEngagement
      __typename
    }
  }
  fragment issueEngagement on Issue {
    id
    title
    engagementList {
      ...engagement
      __typename
    }
    __typename
  }
  fragment engagement on Engagement {
    identity {
      id
      name
      protocol
      ... on EmailAliasIdentity {
        details {
          id
          label
          __typename
        }
        __typename
      }
      ... on GroupIdentity {
        details {
          id
          label
          __typename
        }
        __typename
      }
      __typename
    }
    causalIdentity {
      id
      name
      protocol
      __typename
    }
    lastCheckedInByIdentity {
      id
      name
      protocol
      __typename
    }
    lastRemovedByIdentity {
      id
      name
      protocol
      __typename
    }
    email
    status
    reason
    lastUpdatedDate
    __typename
  }
`,ln=e=>le("https://sim-ticketing-graphql-fleet.corp.amazon.com/graphql",{headers:{"Content-Type":"application/json",Origin:"https://t.corp.amazon.com"},method:"POST",data:Array.isArray(e)?e:[e]}),[un,Qi,Zi,ea]=[5,1e3,3e3,.5],ft=async e=>{let t=await ln(e),r=1,n=Qi;for(;r<=un&&typeof t=="string"&&t.includes("POST body missing, invalid Content-Type, or JSON object has no keys");r++){console.warn(`Failed to call sim-ticketing endpoint and retry (${r}/${un}): `,t);let i=Math.random()*n*ea;await nt(i),n=Math.min(n*2,Zi),t=await ln(e)}return t},pn=e=>ft({operationName:"issueListView",query:Xi,variables:{query:B(e).join(" AND "),rows:200,sort:"createDate desc"}}).then(t=>B(t).flatMap(r=>B(r?.data?.queryIssues?.documents).map(n=>{let{id:i,shortId:a,severity:y,extensions:s}=n,{tt:u}=s;return{id:i,shortId:a,alias:n.alias,severity:Wi[y],title:n.title,status:n.status,ticketingStatus:n.ticketingStatus,lastUpdatedDate:We(n.lastUpdatedDate),lastAssignedDate:We(n.lastAssignedDate),description:n.description,ticketingPendingReason:n.ticketingPendingReason,lastUpdatedConversationDate:We(n.lastUpdatedConversationDate),requester:Mt(n.requester),assignee:Mt(n.assignee),watchers:n.watchers?.length??0,rootCause:Vi(n.rootCauses),lastResolvedDate:We(n.lastResolvedDate),labels:B(n.labels).map(g=>g.label),resolvedBy:Mt(n.resolvedBy),assignedGroup:u.assignedGroup}}))),fn=()=>ft({operationName:"fetchCurrentUserDetails",query:Ji,variables:{}}).then(e=>B(e).flatMap(t=>B(t?.data?.whoami?.groups).map(r=>{let{id:n,label:i}=r.details,y=`https://t.corp.amazon.com/issues/?${new URLSearchParams({q:['extensions.tt.status:(Researching OR "Work In Progress" OR Pending) ',`extensions.tt.assignedGroup:(${i})`].join(" AND ")})}`;return{id:n,label:i,url:y}}))),mn=()=>ft({operationName:"allSavedSearches",query:Ki,variables:{}}).then(e=>[...B(e).flatMap(t=>B(t?.data?.whoami?.groups).flatMap(r=>{let n=B(r?.details?.preferences?.ticketingSavedSearches).map(i=>{let{id:a,searchName:y,queryString:s}=i,u=new URLSearchParams(s).get("q"),g=`https://t.corp.amazon.com/issues/?${s}`;return{id:a,searchName:y,url:g,query:!u||Be(u)?void 0:u}});return B(n)})),{searchName:"Assigned to You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"${Xe}"`,"isTicket:true"].join(" AND ")},{searchName:"Requested by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Xe}`,"isTicket:true"].join(" AND ")},{searchName:"You've + 1'd",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`affects:${pt}`,"isTicket:true"].join(" AND ")},{searchName:"You're Cc'd on",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`watchers:${pt}`,"isTicket:true"].join(" AND ")},{searchName:"Pending Requester Info by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Xe}"`,"isTicket:true",'next_step.owner:"role:requester"',"next_step.action:Comment"].join(" AND ")},{searchName:"Approaching Need by Date",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"kerberos:${pt}@ANT.AMAZON.COM"`,"isTicket:true","schedule.needByDate:[NOW TO NOW+1DAYS]"].join(" AND ")}]),hn=({shortId:e})=>ft({operationName:"checkInMultiple",query:Yi,variables:{args:{identities:[Xe],issueId:e}}}).then(t=>B(t).some(r=>B(r?.data?.checkInMultiple?.engagementList).findIndex(n=>n?.identity?.id===Xe)>=0));var yn=require("@raycast/api");var mt=require("@raycast/api"),gn=(w=>(w.Amazon="amazon.svg",w.AmazonChime="amazon-chime.svg",w.Badge="badge.svg",w.Book="book.svg",w.BoxArchive="box-archive.svg",w.Broadcast="broadcast.svg",w.BuilderHub="builder-hub.svg",w.BuildingColumns="building-columns.svg",w.CheckSquare="check-square.svg",w.ClappingHands="clapping-hands.svg",w.Cube="cube.svg",w.Cubes="cubes.svg",w.Document="document.svg",w.Earth="earth.svg",w.EverGeen="ever-green.svg",w.Firefox="firefox.svg",w.InternalSearch="internal-search.svg",w.Isengard="isengard.svg",w.Issue="issue.svg",w.IT="it.svg",w.PaperPlane="paper-plane.svg",w.Pipeline="pipeline.svg",w.PipelineDisabled="pipeline-disabled.svg",w.PriorityHigh="priority-high.svg",w.PriorityLow="priority-low.svg",w.PriorityMedium="priority-medium.svg",w.Quip="quip.svg",w.Sage="sage.svg",w.SavedSearch="saved-search.svg",w.Siren="siren.svg",w.Slack="slack.svg",w.Slides="slides.svg",w.Spinner="spinner.svg",w.Spreadsheet="spreadsheet.svg",w.Sprint="sprint.svg",w.SquareFive="five.svg",w.SquareFour="four.svg",w.SquareOne="one.svg",w.SquareThree="three.svg",w.SquareTwo="two.svg",w[w.Story=mt.Icon.Book]="Story",w.TaskeiRoom="taskei-room.svg",w.TaskeiSubtask="taskei-subtask.svg",w.TaskeiTask="taskei-task.svg",w.ThumbsUp="thumbs-up.svg",w.Ticket="ticket.svg",w.Wiki="wiki.svg",w))(gn||{}),ta={...mt.Icon,...gn},I=ta;var vn=require("react/jsx-runtime");function Je({url:e,onCopy:t}){return(0,vn.jsx)(yn.Action.CopyToClipboard,{title:"Copy Link",content:e,shortcut:{modifiers:["cmd","shift"],key:"c"},icon:I.Clipboard,onCopy:t})}var bn=require("@raycast/api");var Sn=require("@raycast/api"),wn=(a=>(a.Bronze="#CD7F32",a.Gold="#FFD700",a.LightSilver="#D8D8D8",a.Orange="#F19F39",a.Rurikon="#0B346E",a))(wn||{}),ra={...Sn.Color,...wn},G=ra;var xn=require("react/jsx-runtime");function Ke({isShowingDetail:e,onShowingDetailChange:t}){return(0,xn.jsx)(bn.Action,{title:`${e?"Hide":"Show"} Detail`,icon:{source:I.Sidebar,tintColor:G.PrimaryText},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"."}})}var C=require("@raycast/api");var N=require("react/jsx-runtime"),Ft={1:{source:I.SquareOne,tintColor:G.Red},2:{source:I.SquareTwo,tintColor:G.Orange},2.5:{source:I.SquareTwo,tintColor:G.Yellow},3:{source:I.SquareThree,tintColor:G.Blue},4:{source:I.SquareFour,tintColor:G.LightSilver},5:{source:I.SquareFive,tintColor:G.SecondaryText}};function Ut({ticket:e,isShowingDetail:t,onShowingDetailChange:r,...n}){let{ignoreStatus:i,isShowingResolvedTickets:a,onShowingResolvedTicketsChange:y,mutateTickets:s}=n,{id:u,shortId:g,ticketingStatus:b,severity:x}=e,T=`https://t.corp.amazon.com/${g??u}`;return(0,N.jsx)(C.List.Item,{title:e.title,icon:x&&Ft[x]?Ft[x]:{source:I.Ticket,tintColor:G.Blue},accessories:!t&&(b==="Closed"||b==="Resolved")?[{icon:{source:I.CheckSquare,tintColor:G.Green}}]:void 0,detail:(0,N.jsx)(C.List.Item.Detail,{markdown:e.description,metadata:(0,N.jsxs)(C.Detail.Metadata,{children:[(0,N.jsx)(C.Detail.Metadata.Label,{title:"Alias",text:e.alias}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Assigned Group",text:e.assignedGroup}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Status",text:e.status}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Ticketing Status",text:b}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Assginee",text:e.assignee}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Requester",text:e.requester}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Resolved By",text:e.resolvedBy}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Severity",icon:x&&Ft[x]}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Ticketing Pending Reason",text:e.ticketingPendingReason??"None"}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Root Cause",text:e.rootCause}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Watchers",icon:I.Hashtag,text:Ee(e.watchers)}),(0,N.jsx)(C.Detail.Metadata.TagList,{title:"Labels",children:e.labels.map(O=>(0,N.jsx)(C.Detail.Metadata.TagList.Item,{text:O},O))}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Last Assigned Date",icon:I.Calendar,text:Ve(e.lastAssignedDate)??"None"}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Last Resolved Date",icon:I.Calendar,text:Ve(e.lastResolvedDate)??"None"}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Last Updated Date",icon:I.Calendar,text:Ve(e.lastUpdatedDate)??"None"}),(0,N.jsx)(C.Detail.Metadata.Label,{title:"Last Updated Conversation Date",icon:I.Calendar,text:Ve(e.lastUpdatedConversationDate)??"None"})]})}),actions:(0,N.jsxs)(C.ActionPanel,{children:[(0,N.jsx)(C.Action.OpenInBrowser,{url:T}),(0,N.jsx)(C.Action,{title:"Check In",icon:I.Flag,onAction:async()=>{let O=await Ge({style:C.Toast.Style.Animated,title:`Checking in ${g}...`});await hn(e)?O.updateContent({style:C.Toast.Style.Success,title:`Checked in ${g} successfully.`}):O.updateContent({style:C.Toast.Style.Failure,title:`Failed to check in ${g}.`}),await s()}}),(0,N.jsx)(Je,{url:T}),i?void 0:(0,N.jsx)(C.Action,{icon:a?I.XMarkTopRightSquare:{source:I.CheckSquare,tintColor:G.Green},title:`${a?"Hide":"Show"} Resolved Tasks`,onAction:y}),(0,N.jsx)(Ke,{isShowingDetail:t,onShowingDetailChange:r})]})},u)}var ht=require("react");function Ye(e,{sanitize:t=!1}={}){let[r,n]=(0,ht.useState)(e),i=(0,ht.useCallback)(a=>{n(t?a.replace(/\s/g,""):a.trim())},[t]);return[r,i]}var gt=require("react");function Fe(e){let[t,r]=(0,gt.useState)(!!e),n=(0,gt.useCallback)(()=>{r(i=>!i)},[]);return[t,n,r]}var yt=require("@raycast/api");var En=require("react"),Qe=require("react/jsx-runtime");function Ae({query:e,isLoading:t,ignoreStatus:r,searchBarAccessory:n}){let[i,a]=Fe(!1),[y,s,u]=Fe(!1),[g,b]=Ye(""),x=(0,En.useMemo)(()=>{let $=["Assigned","Work In Progress","Pending",...y?["Resolved","Closed"]:[]];return[g?`full_text:(${g})`:void 0,...Array.isArray(e)?e:[e],r?void 0:`extensions.tt.status:(${$.map(V=>JSON.stringify(V)).join(" OR ")})`]},[g,e,y]),{isLoading:T,data:O,mutate:P}=ve(pn,[x]);return(0,Qe.jsx)(yt.List,{isLoading:T||t,searchBarAccessory:n||(r?void 0:(0,Qe.jsx)(yt.List.Dropdown,{tooltip:"",value:Ee(y),onChange:$=>u(JSON.parse($)),children:[!1,!0].map($=>(0,Qe.jsx)(yt.List.Dropdown.Item,{icon:$?I.PlusSquare:I.Eye,title:`${$?"All":"Open"} Tickets`,value:Ee($)},Ee($)))})),isShowingDetail:i,onSearchTextChange:b,throttle:!0,children:O?.map($=>(0,Qe.jsx)(Ut,{ticket:$,isShowingDetail:i,onShowingDetailChange:a,ignoreStatus:r,isShowingResolvedTickets:y,onShowingResolvedTicketsChange:s,mutateTickets:P},$.id))})}var Ie=require("@raycast/api");var ke=require("react/jsx-runtime");function zt({group:e}){let{id:t,label:r,url:n}=e;return(0,ke.jsx)(Ie.List.Item,{icon:I.TwoPeople,title:r,actions:(0,ke.jsxs)(Ie.ActionPanel,{children:[(0,ke.jsx)(Ie.Action.Push,{icon:I.Ticket,title:"Tickets",target:(0,ke.jsx)(Ae,{query:`extensions.tt.assignedGroup:(${JSON.stringify(r)})`})}),(0,ke.jsx)(Ie.Action.OpenInBrowser,{url:n})]})},t)}var An=require("@raycast/api"),qt=require("react/jsx-runtime");function Gt({isLoadingGroups:e,groups:t,...r}){return(0,qt.jsx)(An.List,{...r,isLoading:e,children:t?.map(n=>(0,qt.jsx)(zt,{group:n},n.id))})}var jt=ne(require("fs"));var In=ne(require("os")),na=`${In.default.homedir()}/.midway`,kn=`${na}/cookie`;function Rn(e){if(!jt.default.existsSync(kn))return[];let t=jt.default.readFileSync(kn,"utf8");return e?t:t.split(`
`).map(r=>{if(r.startsWith("#")&&!r.startsWith("#HttpOnly_"))return r;let n=r.split("	");if(n.length!==7)return r;let[i,a,y,s,u,g,b]=n;return{domain:i,includesSubdomains:a,path:y,overHttpsOnly:s,expiresAt:+u,name:g,value:b}})}var Tn=ne(require("os")),{username:ia}=Tn.default.userInfo(),aa="us-west-2",oa="https://us-west-2.paging.corp.a2z.com",sa=/SIM ([A-Za-z0-9]+) .*/,_n=async()=>{await le("https://paging.corp.a2z.com");let t=Rn().find(s=>typeof s!="string"&&/\.paging\.corp\.a2z\.com/.test(s.domain)&&/amzn_sso_token/.test(s.name));if(!t||typeof t=="string")throw new Error("No SOS token found.");let{value:r}=t,n=new URLSearchParams({Version:"2011-06-15",Action:"AssumeRoleWithWebIdentity",RoleArn:"arn:aws:iam::991761955833:role/FederatedAccessRole-prod",RoleSessionName:"web-user",WebIdentityToken:r,DurationSeconds:"3600"}),a=(await at(`https://sts.amazonaws.com/?${n}`,{headers:{Accept:"application/json"},method:"POST"}))?.AssumeRoleWithWebIdentityResponse?.AssumeRoleWithWebIdentityResult?.Credentials;if(!a||!a.AccessKeyId||!a.SecretAccessKey)throw new Error("No valid SOS Credentials found.");return{accessKeyId:a.AccessKeyId,secretAccessKey:a.SecretAccessKey,sessionToken:a.SessionToken}},Ln=(e,t,r={})=>Lr(oa,{...r,...t,service:"sos",region:aa,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":`AwsSOSInterfaceService.${e}`}}),Cn=e=>Ln("ListPages",e,{data:{contactArn:`arn:aws:sos:us-west-2:991761955833:contact/amazon:${ia}`,maxResults:100,timeRange:{fromTime:0,toTime:new Date().getTime()/1e3}}}).then(t=>B(t.pages).map(r=>({acceptCode:r.acceptCode,arn:r.arn,content:r.content,contactArn:r.contactArn,deliveryTime:r.deliveryTime&&Ne(r.deliveryTime),engagementArn:r.engagementArn,originalRegion:r.originalRegion,readTime:r.readTime&&Ne(r.readTime),sender:r.sender,sentTime:Ne(r.sentTime),subject:r.subject.replace(/To:\S+@\S+\.\S+/,"").trim(),status:r.readTime?"Read":r.deliveryTime?"Delivered":"Sent",ticketUrl:r.sender.includes("issues")?`https://t.corp.amazon.com/${r.subject.match(sa)[1]}`:void 0}))),Pn=(e,t)=>Ln("AcceptPage",t,{data:{receiptType:"READ",acceptCode:e.acceptCode,arn:e.arn,engagementArn:e.engagementArn}}).then(r=>JSON.stringify(r)==="{}");var H=require("@raycast/api");var q=require("react/jsx-runtime"),ca={Sent:{source:I.PaperPlane,tintColor:G.Blue},Delivered:{source:I.PaperPlane,tintColor:G.Yellow},Read:{source:I.Eye,tintColor:G.Green}};function Bt({result:e,isShowingDetail:t,ackPage:r,...n}){let{onShowingDetailChange:i}=n,{ticketUrl:a,subject:y,status:s}=e,u=ca[s];return(0,q.jsx)(H.List.Item,{title:y,icon:u??"\u{1F4DF}",detail:(0,q.jsx)(H.List.Item.Detail,{markdown:`### ${y}
---
${e.content}`,metadata:(0,q.jsxs)(H.Detail.Metadata,{children:[(0,q.jsx)(H.Detail.Metadata.Label,{title:"Sender",text:e.sender,icon:"\u{1F4DF}"}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Contact",text:e.contactArn}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Status",text:s,icon:u}),(0,q.jsx)(H.Detail.Metadata.Separator,{}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Region",text:e.originalRegion}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Read Time",icon:I.Calendar,text:dt(e.readTime)}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Delivery Time",icon:I.Calendar,text:dt(e.deliveryTime)}),(0,q.jsx)(H.Detail.Metadata.Label,{title:"Last Sent Time",icon:I.Calendar,text:dt(e.sentTime)})]})}),actions:(0,q.jsxs)(H.ActionPanel,{children:[(0,q.jsx)(H.Action,{title:"Acknowledge",icon:{source:I.Flag,tintColor:G.Green},onAction:()=>r(e)}),(0,q.jsx)(Ke,{isShowingDetail:t,onShowingDetailChange:i}),a&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(H.Action.OpenInBrowser,{url:a,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,q.jsx)(Je,{url:a})]})]})},y)}var Ue=require("@raycast/api");var Nn=ne(Dn());function Ht(e,t=[],r){return e?Nn.default.go(e,t,{keys:typeof r=="string"?[r]:r,limit:1e3,threshold:-1e4}).map(n=>n.obj):t}var St=require("react"),Vt=require("react/jsx-runtime"),On="sos-credentials-v1";function Wt(e){let[t,r]=Ye(""),[n,i]=Fe(!1),{isLoading:a,data:y}=ge(async()=>{let T=await He.retrieve(On);return T||(T=await _n(),await He.store(On,T,{minutes:50})),T}),{isLoading:s,data:u,mutate:g}=ve(async T=>T?Cn(T):[],[y]),b=(0,St.useCallback)(async T=>{let O=await Ge({style:Ue.Toast.Style.Animated,title:"Acknowledging page..."}),P=!1;y&&(P=await Pn(T,y)),P?(await nt(1e3),await g(),O.updateContent({style:Ue.Toast.Style.Success,title:"Page acknowledged."})):O.updateContent({style:Ue.Toast.Style.Failure,title:"Failed to acknowledge page."})},[y,g]),x=(0,St.useMemo)(()=>Ht(t,u,["subject","content"]),[u,t]);return(0,Vt.jsx)(Ue.List,{...e,isLoading:a||s,isShowingDetail:n,onSearchTextChange:r,throttle:!0,children:x?.map(T=>(0,Vt.jsx)(Bt,{result:T,isShowingDetail:n,onShowingDetailChange:i,ackPage:b},T.arn))})}var Te=require("@raycast/api");var Re=require("react/jsx-runtime");function Xt({savedSearch:e}){let{id:t,searchName:r,url:n,query:i}=e;return(0,Re.jsx)(Te.List.Item,{icon:I.SavedSearch,title:r,accessories:[{text:i}],actions:(0,Re.jsxs)(Te.ActionPanel,{children:[i&&(0,Re.jsx)(Te.Action.Push,{title:"Tickets",icon:I.Ticket,target:(0,Re.jsx)(Ae,{ignoreStatus:!0,query:i})}),n&&(0,Re.jsx)(Te.Action.OpenInBrowser,{url:n})]})},t??r)}var Jt=require("@raycast/api"),Mn=require("react"),wt=require("react/jsx-runtime");function Kt(e){let{isLoading:t,data:r}=ve(mn,[]),n=(0,Mn.useMemo)(()=>({mySearches:{title:"Saved Searches",savedSearches:r?.filter(i=>!!i.id)},extensionDefinedSearches:{title:"Extension Defined Searches",savedSearches:r?.filter(i=>!i.id)}}),[r]);return(0,wt.jsx)(Jt.List,{...e,isLoading:t,children:[n.extensionDefinedSearches,n.mySearches].map(({title:i,savedSearches:a},y)=>(0,wt.jsx)(Jt.List.Section,{title:i,children:a?.map((s,u)=>(0,wt.jsx)(Xt,{savedSearch:s},s.id??u))},y))})}var Un="1.18.2";var zn="zhenpewu";var Yt=Un,la="AmznRaycastExtension";var qn=()=>cn({pkg:la,currentVersion:Yt,extensionOwner:zn});function Qt(){ge(qn,[])}var ua=()=>st(Yt,!0),Gn=ua;function Zt(){ge(Gn,[])}var er=require("@raycast/api");var jn=require("react"),_e=require("react/jsx-runtime"),da=["global","high_sev","paging","group","saved_search"],pa={global:{title:"All Groups",icon:I.Earth},group:{title:"Groups",icon:I.TwoPeople},high_sev:{title:"High-Sev",icon:{source:I.Siren,tintColor:G.Red}},saved_search:{title:"Saved Searches",icon:I.SavedSearch},paging:{title:"Paging",icon:"\u{1F4DF}"}};function Bn(){let[e,t]=(0,jn.useState)("global"),{isLoading:r,data:n}=ve(fn,[]),i=(0,_e.jsx)(er.List.Dropdown,{tooltip:"Mode",storeValue:!0,onChange:a=>t(a),children:da.map(a=>(0,_e.jsx)(er.List.Dropdown.Item,{...pa[a],value:a},a))});switch(Zt(),Qt(),e){case"saved_search":return(0,_e.jsx)(Kt,{searchBarAccessory:i});case"group":return(0,_e.jsx)(Gt,{groups:n,isLoadingGroups:r,searchBarAccessory:i});case"paging":return(0,_e.jsx)(Wt,{searchBarAccessory:i});default:return(0,_e.jsx)(Ae,{query:n&&[`extensions.tt.assignedGroup:(${n.map(a=>JSON.stringify(a.label)).join(" OR ")})`,...e==="high_sev"?["currentSeverity:(1 OR 2 OR 2.5)"]:[]],isLoading:r,searchBarAccessory:i})}}
