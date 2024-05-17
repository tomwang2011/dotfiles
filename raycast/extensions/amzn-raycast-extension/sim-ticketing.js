"use strict";var xo=Object.create;var nt=Object.defineProperty;var vo=Object.getOwnPropertyDescriptor;var So=Object.getOwnPropertyNames;var wo=Object.getPrototypeOf,bo=Object.prototype.hasOwnProperty;var Z=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Eo=(e,t)=>{for(var r in t)nt(e,r,{get:t[r],enumerable:!0})},ur=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of So(t))!bo.call(e,o)&&o!==r&&nt(e,o,{get:()=>t[o],enumerable:!(a=vo(t,o))||a.enumerable});return e};var re=(e,t,r)=>(r=e!=null?xo(wo(e)):{},ur(t||!e||!e.__esModule?nt(r,"default",{value:e,enumerable:!0}):r,e)),Ao=e=>ur(nt({},"__esModule",{value:!0}),e);var yr=Z((we,hr)=>{"use strict";var Tt=require("crypto");we=hr.exports=je;function je(e,t){return t=mr(e,t),ko(e,t)}we.sha1=function(e){return je(e)};we.keys=function(e){return je(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})};we.MD5=function(e){return je(e,{algorithm:"md5",encoding:"hex"})};we.keysMD5=function(e){return je(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var _e=Tt.getHashes?Tt.getHashes().slice():["sha1","md5"];_e.push("passthrough");var dr=["buffer","hex","binary","base64"];function mr(e,t){t=t||{};var r={};if(r.algorithm=t.algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=t.ignoreUnknown===!0,r.respectType=t.respectType!==!1,r.respectFunctionNames=t.respectFunctionNames!==!1,r.respectFunctionProperties=t.respectFunctionProperties!==!1,r.unorderedArrays=t.unorderedArrays===!0,r.unorderedSets=t.unorderedSets!==!1,r.unorderedObjects=t.unorderedObjects!==!1,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,typeof e>"u")throw new Error("Object argument required.");for(var a=0;a<_e.length;++a)_e[a].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=_e[a]);if(_e.indexOf(r.algorithm)===-1)throw new Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+_e.join(", "));if(dr.indexOf(r.encoding)===-1&&r.algorithm!=="passthrough")throw new Error('Encoding "'+r.encoding+'"  not supported. supported values: '+dr.join(", "));return r}function pr(e){if(typeof e!="function")return!1;var t=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;return t.exec(Function.prototype.toString.call(e))!=null}function ko(e,t){var r;t.algorithm!=="passthrough"?r=Tt.createHash(t.algorithm):r=new gr,typeof r.write>"u"&&(r.write=r.update,r.end=r.update);var a=Rt(t,r);if(a.dispatch(e),r.update||r.end(""),r.digest)return r.digest(t.encoding==="buffer"?void 0:t.encoding);var o=r.read();return t.encoding==="buffer"?o:o.toString(t.encoding)}we.writeToStream=function(e,t,r){return typeof r>"u"&&(r=t,t={}),t=mr(e,t),Rt(t,r).dispatch(e)};function Rt(e,t,r){r=r||[];var a=function(o){return t.update?t.update(o,"utf8"):t.write(o,"utf8")};return{dispatch:function(o){e.replacer&&(o=e.replacer(o));var n=typeof o;return o===null&&(n="null"),this["_"+n](o)},_object:function(o){var n=/\[object (.*)\]/i,y=Object.prototype.toString.call(o),s=n.exec(y);s?s=s[1]:s="unknown:["+y+"]",s=s.toLowerCase();var u=null;if((u=r.indexOf(o))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(o),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(o))return a("buffer:"),a(o);if(s!=="object"&&s!=="function"&&s!=="asyncfunction")if(this["_"+s])this["_"+s](o);else{if(e.ignoreUnknown)return a("["+s+"]");throw new Error('Unknown object type "'+s+'"')}else{var x=Object.keys(o);e.unorderedObjects&&(x=x.sort()),e.respectType!==!1&&!pr(o)&&x.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(x=x.filter(function(b){return!e.excludeKeys(b)})),a("object:"+x.length+":");var w=this;return x.forEach(function(b){w.dispatch(b),a(":"),e.excludeValues||w.dispatch(o[b]),a(",")})}},_array:function(o,n){n=typeof n<"u"?n:e.unorderedArrays!==!1;var y=this;if(a("array:"+o.length+":"),!n||o.length<=1)return o.forEach(function(x){return y.dispatch(x)});var s=[],u=o.map(function(x){var w=new gr,b=r.slice(),D=Rt(e,w,b);return D.dispatch(x),s=s.concat(b.slice(r.length)),w.read().toString()});return r=r.concat(s),u.sort(),this._array(u,!1)},_date:function(o){return a("date:"+o.toJSON())},_symbol:function(o){return a("symbol:"+o.toString())},_error:function(o){return a("error:"+o.toString())},_boolean:function(o){return a("bool:"+o.toString())},_string:function(o){a("string:"+o.length+":"),a(o.toString())},_function:function(o){a("fn:"),pr(o)?this.dispatch("[native]"):this.dispatch(o.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(o.name)),e.respectFunctionProperties&&this._object(o)},_number:function(o){return a("number:"+o.toString())},_xml:function(o){return a("xml:"+o.toString())},_null:function(){return a("Null")},_undefined:function(){return a("Undefined")},_regexp:function(o){return a("regex:"+o.toString())},_uint8array:function(o){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(o))},_uint8clampedarray:function(o){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(o))},_int8array:function(o){return a("int8array:"),this.dispatch(Array.prototype.slice.call(o))},_uint16array:function(o){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(o))},_int16array:function(o){return a("int16array:"),this.dispatch(Array.prototype.slice.call(o))},_uint32array:function(o){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(o))},_int32array:function(o){return a("int32array:"),this.dispatch(Array.prototype.slice.call(o))},_float32array:function(o){return a("float32array:"),this.dispatch(Array.prototype.slice.call(o))},_float64array:function(o){return a("float64array:"),this.dispatch(Array.prototype.slice.call(o))},_arraybuffer:function(o){return a("arraybuffer:"),this.dispatch(new Uint8Array(o))},_url:function(o){return a("url:"+o.toString(),"utf8")},_map:function(o){a("map:");var n=Array.from(o);return this._array(n,e.unorderedSets!==!1)},_set:function(o){a("set:");var n=Array.from(o);return this._array(n,e.unorderedSets!==!1)},_file:function(o){return a("file:"),this.dispatch([o.name,o.size,o.type,o.lastModfied])},_blob:function(){if(e.ignoreUnknown)return a("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return a("domwindow")},_bigint:function(o){return a("bigint:"+o.toString())},_process:function(){return a("process")},_timer:function(){return a("timer")},_pipe:function(){return a("pipe")},_tcp:function(){return a("tcp")},_udp:function(){return a("udp")},_tty:function(){return a("tty")},_statwatcher:function(){return a("statwatcher")},_securecontext:function(){return a("securecontext")},_connection:function(){return a("connection")},_zlib:function(){return a("zlib")},_context:function(){return a("context")},_nodescript:function(){return a("nodescript")},_httpparser:function(){return a("httpparser")},_dataview:function(){return a("dataview")},_signal:function(){return a("signal")},_fsevent:function(){return a("fsevent")},_tlswrap:function(){return a("tlswrap")}}}function gr(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}});var Ct=Z((vc,ta)=>{var an=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};ta.exports=an});var Ot=Z((Sc,ra)=>{var on="2.0.0",nn=Number.MAX_SAFE_INTEGER||9007199254740991,sn=16,cn=250,ln=["major","premajor","minor","preminor","patch","prepatch","prerelease"];ra.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:sn,MAX_SAFE_BUILD_LENGTH:cn,MAX_SAFE_INTEGER:nn,RELEASE_TYPES:ln,SEMVER_SPEC_VERSION:on,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var oa=Z((he,aa)=>{var{MAX_SAFE_COMPONENT_LENGTH:$t,MAX_SAFE_BUILD_LENGTH:fn,MAX_LENGTH:un}=Ot(),dn=Ct();he=aa.exports={};var pn=he.re=[],mn=he.safeRe=[],d=he.src=[],p=he.t={},gn=0,Dt="[a-zA-Z0-9-]",hn=[["\\s",1],["\\d",un],[Dt,fn]],yn=e=>{for(let[t,r]of hn)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},k=(e,t,r)=>{let a=yn(t),o=gn++;dn(e,o,t),p[e]=o,d[o]=t,pn[o]=new RegExp(t,r?"g":void 0),mn[o]=new RegExp(a,r?"g":void 0)};k("NUMERICIDENTIFIER","0|[1-9]\\d*");k("NUMERICIDENTIFIERLOOSE","\\d+");k("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Dt}*`);k("MAINVERSION",`(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})`);k("MAINVERSIONLOOSE",`(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})`);k("PRERELEASEIDENTIFIER",`(?:${d[p.NUMERICIDENTIFIER]}|${d[p.NONNUMERICIDENTIFIER]})`);k("PRERELEASEIDENTIFIERLOOSE",`(?:${d[p.NUMERICIDENTIFIERLOOSE]}|${d[p.NONNUMERICIDENTIFIER]})`);k("PRERELEASE",`(?:-(${d[p.PRERELEASEIDENTIFIER]}(?:\\.${d[p.PRERELEASEIDENTIFIER]})*))`);k("PRERELEASELOOSE",`(?:-?(${d[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[p.PRERELEASEIDENTIFIERLOOSE]})*))`);k("BUILDIDENTIFIER",`${Dt}+`);k("BUILD",`(?:\\+(${d[p.BUILDIDENTIFIER]}(?:\\.${d[p.BUILDIDENTIFIER]})*))`);k("FULLPLAIN",`v?${d[p.MAINVERSION]}${d[p.PRERELEASE]}?${d[p.BUILD]}?`);k("FULL",`^${d[p.FULLPLAIN]}$`);k("LOOSEPLAIN",`[v=\\s]*${d[p.MAINVERSIONLOOSE]}${d[p.PRERELEASELOOSE]}?${d[p.BUILD]}?`);k("LOOSE",`^${d[p.LOOSEPLAIN]}$`);k("GTLT","((?:<|>)?=?)");k("XRANGEIDENTIFIERLOOSE",`${d[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);k("XRANGEIDENTIFIER",`${d[p.NUMERICIDENTIFIER]}|x|X|\\*`);k("XRANGEPLAIN",`[v=\\s]*(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:${d[p.PRERELEASE]})?${d[p.BUILD]}?)?)?`);k("XRANGEPLAINLOOSE",`[v=\\s]*(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:${d[p.PRERELEASELOOSE]})?${d[p.BUILD]}?)?)?`);k("XRANGE",`^${d[p.GTLT]}\\s*${d[p.XRANGEPLAIN]}$`);k("XRANGELOOSE",`^${d[p.GTLT]}\\s*${d[p.XRANGEPLAINLOOSE]}$`);k("COERCEPLAIN",`(^|[^\\d])(\\d{1,${$t}})(?:\\.(\\d{1,${$t}}))?(?:\\.(\\d{1,${$t}}))?`);k("COERCE",`${d[p.COERCEPLAIN]}(?:$|[^\\d])`);k("COERCEFULL",d[p.COERCEPLAIN]+`(?:${d[p.PRERELEASE]})?(?:${d[p.BUILD]})?(?:$|[^\\d])`);k("COERCERTL",d[p.COERCE],!0);k("COERCERTLFULL",d[p.COERCEFULL],!0);k("LONETILDE","(?:~>?)");k("TILDETRIM",`(\\s*)${d[p.LONETILDE]}\\s+`,!0);he.tildeTrimReplace="$1~";k("TILDE",`^${d[p.LONETILDE]}${d[p.XRANGEPLAIN]}$`);k("TILDELOOSE",`^${d[p.LONETILDE]}${d[p.XRANGEPLAINLOOSE]}$`);k("LONECARET","(?:\\^)");k("CARETTRIM",`(\\s*)${d[p.LONECARET]}\\s+`,!0);he.caretTrimReplace="$1^";k("CARET",`^${d[p.LONECARET]}${d[p.XRANGEPLAIN]}$`);k("CARETLOOSE",`^${d[p.LONECARET]}${d[p.XRANGEPLAINLOOSE]}$`);k("COMPARATORLOOSE",`^${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]})$|^$`);k("COMPARATOR",`^${d[p.GTLT]}\\s*(${d[p.FULLPLAIN]})$|^$`);k("COMPARATORTRIM",`(\\s*)${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]}|${d[p.XRANGEPLAIN]})`,!0);he.comparatorTrimReplace="$1$2$3";k("HYPHENRANGE",`^\\s*(${d[p.XRANGEPLAIN]})\\s+-\\s+(${d[p.XRANGEPLAIN]})\\s*$`);k("HYPHENRANGELOOSE",`^\\s*(${d[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[p.XRANGEPLAINLOOSE]})\\s*$`);k("STAR","(<|>)?=?\\s*\\*");k("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");k("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var ia=Z((wc,na)=>{var xn=Object.freeze({loose:!0}),vn=Object.freeze({}),Sn=e=>e?typeof e!="object"?xn:e:vn;na.exports=Sn});var fa=Z((bc,la)=>{var sa=/^[0-9]+$/,ca=(e,t)=>{let r=sa.test(e),a=sa.test(t);return r&&a&&(e=+e,t=+t),e===t?0:r&&!a?-1:a&&!r?1:e<t?-1:1},wn=(e,t)=>ca(t,e);la.exports={compareIdentifiers:ca,rcompareIdentifiers:wn}});var Mt=Z((Ec,ma)=>{var pt=Ct(),{MAX_LENGTH:ua,MAX_SAFE_INTEGER:mt}=Ot(),{safeRe:da,t:pa}=oa(),bn=ia(),{compareIdentifiers:Ne}=fa(),Nt=class e{constructor(t,r){if(r=bn(r),t instanceof e){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>ua)throw new TypeError(`version is longer than ${ua} characters`);pt("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let a=t.trim().match(r.loose?da[pa.LOOSE]:da[pa.FULL]);if(!a)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+a[1],this.minor=+a[2],this.patch=+a[3],this.major>mt||this.major<0)throw new TypeError("Invalid major version");if(this.minor>mt||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>mt||this.patch<0)throw new TypeError("Invalid patch version");a[4]?this.prerelease=a[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let n=+o;if(n>=0&&n<mt)return n}return o}):this.prerelease=[],this.build=a[5]?a[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(pt("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),Ne(this.major,t.major)||Ne(this.minor,t.minor)||Ne(this.patch,t.patch)}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{let a=this.prerelease[r],o=t.prerelease[r];if(pt("prerelease compare",r,a,o),a===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(a===void 0)return-1;if(a===o)continue;return Ne(a,o)}while(++r)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let r=0;do{let a=this.build[r],o=t.build[r];if(pt("build compare",r,a,o),a===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(a===void 0)return-1;if(a===o)continue;return Ne(a,o)}while(++r)}inc(t,r,a){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,a);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,a);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,a),this.inc("pre",r,a);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,a),this.inc("pre",r,a);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(a)?1:0;if(!r&&a===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[o];else{let n=this.prerelease.length;for(;--n>=0;)typeof this.prerelease[n]=="number"&&(this.prerelease[n]++,n=-2);if(n===-1){if(r===this.prerelease.join(".")&&a===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let n=[r,o];a===!1&&(n=[r]),Ne(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=n):this.prerelease=n}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};ma.exports=Nt});var Ft=Z((Ac,ha)=>{var ga=Mt(),En=(e,t,r=!1)=>{if(e instanceof ga)return e;try{return new ga(e,t)}catch(a){if(!r)return null;throw a}};ha.exports=En});var xa=Z((kc,ya)=>{var An=Ft(),kn=(e,t)=>{let r=An(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};ya.exports=kn});var gt=Z((Ic,Sa)=>{var va=Mt(),In=(e,t,r)=>new va(e,r).compare(new va(t,r));Sa.exports=In});var ba=Z((Tc,wa)=>{var Tn=gt(),Rn=(e,t,r)=>Tn(e,t,r)>0;wa.exports=Rn});var Aa=Z((Rc,Ea)=>{var Ln=gt(),_n=(e,t,r)=>Ln(e,t,r)<0;Ea.exports=_n});var Ia=Z((Lc,ka)=>{var Pn=gt(),Cn=(e,t,r)=>Pn(e,t,r)<=0;ka.exports=Cn});var Ra=Z((_c,Ta)=>{var On=Ft(),$n=(e,t)=>{let r=On(e,t);return r?r.version:null};Ta.exports=$n});var no=Z((oo,bt)=>{((e,t)=>{typeof define=="function"&&define.amd?define([],t):typeof bt=="object"&&bt.exports?bt.exports=t():e.fuzzysort=t()})(oo,e=>{"use strict";var t=(c,i)=>{if(c=="farzher")return{target:"farzher was here (^-^*)/",score:0,_indexes:[0]};if(!c||!i)return L;var l=x(c);oe(i)||(i=u(i));var m=l.bitflags;return(m&i._bitflags)!==m?L:b(l,i)},r=(c,i,l)=>{if(c=="farzher")return[{target:"farzher was here (^-^*)/",score:0,_indexes:[0],obj:i?i[0]:L}];if(!c)return l&&l.all?w(c,i,l):K;var m=x(c),g=m.bitflags,S=m.containsSpace,v=l&&l.threshold||Y,f=l&&l.limit||ze,A=0,E=0,_=i.length;if(l&&l.key)for(var te=l.key,$=0;$<_;++$){var ne=i[$],z=ie(ne,te);if(z&&(oe(z)||(z=u(z)),(g&z._bitflags)===g)){var j=b(m,z);j!==L&&(j.score<v||(j={target:j.target,_targetLower:"",_targetLowerCodes:L,_nextBeginningIndexes:L,_bitflags:0,score:j.score,_indexes:j._indexes,obj:ne},A<f?(T.add(j),++A):(++E,j.score>T.peek().score&&T.replaceTop(j))))}}else if(l&&l.keys)for(var lr=l.scoreFn||Se,qe=l.keys,ot=qe.length,$=0;$<_;++$){for(var ne=i[$],h=new Array(ot),ue=0;ue<ot;++ue){var te=qe[ue],z=ie(ne,te);if(!z){h[ue]=L;continue}oe(z)||(z=u(z)),(g&z._bitflags)!==g?h[ue]=L:h[ue]=b(m,z)}h.obj=ne;var q=lr(h);q!==L&&(q<v||(h.score=q,A<f?(T.add(h),++A):(++E,q>T.peek().score&&T.replaceTop(h))))}else for(var $=0;$<_;++$){var z=i[$];if(z&&(oe(z)||(z=u(z)),(g&z._bitflags)===g)){var j=b(m,z);j!==L&&(j.score<v||(A<f?(T.add(j),++A):(++E,j.score>T.peek().score&&T.replaceTop(j))))}}if(A===0)return K;for(var Le=new Array(A),$=A-1;$>=0;--$)Le[$]=T.poll();return Le.total=A+E,Le},a=(c,i,l)=>{if(typeof i=="function")return o(c,i);if(c===L)return L;i===void 0&&(i="<b>"),l===void 0&&(l="</b>");var m="",g=0,S=!1,v=c.target,f=v.length,A=c._indexes;A=A.slice(0,A.len).sort((te,$)=>te-$);for(var E=0;E<f;++E){var _=v[E];if(A[g]===E){if(++g,S||(S=!0,m+=i),g===A.length){m+=_+l+v.substr(E+1);break}}else S&&(S=!1,m+=l);m+=_}return m},o=(E,i)=>{if(E===L)return L;var l=E.target,m=l.length,g=E._indexes;g=g.slice(0,g.len).sort(($,ne)=>$-ne);for(var S="",v=0,f=0,A=!1,E=[],_=0;_<m;++_){var te=l[_];if(g[f]===_){if(++f,A||(A=!0,E.push(S),S=""),f===g.length){S+=te,E.push(i(S,v++)),S="",E.push(l.substr(_+1));break}}else A&&(A=!1,E.push(i(S,v++)),S="");S+=te}return E},n=c=>c._indexes.slice(0,c._indexes.len).sort((i,l)=>i-l),y=c=>{typeof c!="string"&&(c="");var i=U(c);return{target:c,_targetLower:i._lower,_targetLowerCodes:i.lowerCodes,_nextBeginningIndexes:L,_bitflags:i.bitflags,score:L,_indexes:[0],obj:L}},s=c=>{typeof c!="string"&&(c=""),c=c.trim();var i=U(c),l=[];if(i.containsSpace){var m=c.split(/\s+/);m=[...new Set(m)];for(var g=0;g<m.length;g++)if(m[g]!==""){var S=U(m[g]);l.push({lowerCodes:S.lowerCodes,_lower:m[g].toLowerCase(),containsSpace:!1})}}return{lowerCodes:i.lowerCodes,bitflags:i.bitflags,containsSpace:i.containsSpace,_lower:i._lower,spaceSearches:l}},u=c=>{if(c.length>999)return y(c);var i=M.get(c);return i!==void 0||(i=y(c),M.set(c,i)),i},x=c=>{if(c.length>999)return s(c);var i=G.get(c);return i!==void 0||(i=s(c),G.set(c,i)),i},w=(c,i,l)=>{var m=[];m.total=i.length;var g=l&&l.limit||ze;if(l&&l.key)for(var S=0;S<i.length;S++){var v=i[S],f=ie(v,l.key);if(f){oe(f)||(f=u(f)),f.score=Y,f._indexes.len=0;var A=f;if(A={target:A.target,_targetLower:"",_targetLowerCodes:L,_nextBeginningIndexes:L,_bitflags:0,score:f.score,_indexes:L,obj:v},m.push(A),m.length>=g)return m}}else if(l&&l.keys)for(var S=0;S<i.length;S++){for(var v=i[S],E=new Array(l.keys.length),_=l.keys.length-1;_>=0;--_){var f=ie(v,l.keys[_]);if(!f){E[_]=L;continue}oe(f)||(f=u(f)),f.score=Y,f._indexes.len=0,E[_]=f}if(E.obj=v,E.score=Y,m.push(E),m.length>=g)return m}else for(var S=0;S<i.length;S++){var f=i[S];if(f&&(oe(f)||(f=u(f)),f.score=Y,f._indexes.len=0,m.push(f),m.length>=g))return m}return m},b=(c,i,l=!1)=>{if(l===!1&&c.containsSpace)return D(c,i);for(var m=c._lower,g=c.lowerCodes,S=g[0],v=i._targetLowerCodes,f=g.length,A=v.length,$=0,E=0,_=0;;){var te=S===v[E];if(te){if(F[_++]=E,++$,$===f)break;S=g[$]}if(++E,E>=A)return L}var $=0,ne=!1,z=0,j=i._nextBeginningIndexes;j===L&&(j=i._nextBeginningIndexes=R(i.target));var lr=E=F[0]===0?0:j[F[0]-1],qe=0;if(E!==A)for(;;)if(E>=A){if($<=0||(++qe,qe>200))break;--$;var ot=B[--z];E=j[ot]}else{var te=g[$]===v[E];if(te){if(B[z++]=E,++$,$===f){ne=!0;break}++E}else E=j[E]}var h=i._targetLower.indexOf(m,F[0]),ue=~h;if(ue&&!ne)for(var q=0;q<_;++q)F[q]=h+q;var Le=!1;ue&&(Le=i._nextBeginningIndexes[h-1]===h);{if(ne)var de=B,kt=z;else var de=F,kt=_;for(var pe=0,fr=0,q=1;q<f;++q)de[q]-de[q-1]!==1&&(pe-=de[q],++fr);var yo=de[f-1]-de[0]-(f-1);if(pe-=(12+yo)*fr,de[0]!==0&&(pe-=de[0]*de[0]*.2),!ne)pe*=1e3;else{for(var It=1,q=j[0];q<A;q=j[q])++It;It>24&&(pe*=(It-24)*10)}ue&&(pe/=1+f*f*1),Le&&(pe/=1+f*f*1),pe-=A-f,i.score=pe;for(var q=0;q<kt;++q)i._indexes[q]=de[q];return i._indexes.len=kt,i}},D=(c,i)=>{for(var l=new Set,m=0,g=L,S=0,v=c.spaceSearches,_=0;_<v.length;++_){var f=v[_];if(g=b(f,i),g===L)return L;m+=g.score,g._indexes[0]<S&&(m-=S-g._indexes[0]),S=g._indexes[0];for(var A=0;A<g._indexes.len;++A)l.add(g._indexes[A])}var E=b(c,i,!0);if(E!==L&&E.score>m)return E;g.score=m;var _=0;for(let te of l)g._indexes[_++]=te;return g._indexes.len=_,g},U=c=>{for(var i=c.length,l=c.toLowerCase(),m=[],g=0,S=!1,v=0;v<i;++v){var f=m[v]=l.charCodeAt(v);if(f===32){S=!0;continue}var A=f>=97&&f<=122?f-97:f>=48&&f<=57?26:f<=127?30:31;g|=1<<A}return{lowerCodes:m,bitflags:g,containsSpace:S,_lower:l}},O=c=>{for(var i=c.length,l=[],m=0,g=!1,S=!1,v=0;v<i;++v){var f=c.charCodeAt(v),A=f>=65&&f<=90,E=A||f>=97&&f<=122||f>=48&&f<=57,_=A&&!g||!S||!E;g=A,S=E,_&&(l[m++]=v)}return l},R=c=>{for(var i=c.length,l=O(c),m=[],g=l[0],S=0,v=0;v<i;++v)g>v?m[v]=g:(g=l[++S],m[v]=g===void 0?i:g);return m},N=()=>{M.clear(),G.clear(),F=[],B=[]},M=new Map,G=new Map,F=[],B=[],Se=c=>{for(var i=Y,l=c.length,m=0;m<l;++m){var g=c[m];if(g!==L){var S=g.score;S>i&&(i=S)}}return i===Y?L:i},ie=(c,i)=>{var l=c[i];if(l!==void 0)return l;var m=i;Array.isArray(i)||(m=i.split("."));for(var g=m.length,S=-1;c&&++S<g;)c=c[m[S]];return c},oe=c=>typeof c=="object",ze=1/0,Y=-ze,K=[];K.total=0;var L=null,ye=c=>{var i=[],l=0,m={},g=S=>{for(var v=0,f=i[v],A=1;A<l;){var E=A+1;v=A,E<l&&i[E].score<i[A].score&&(v=E),i[v-1>>1]=i[v],A=1+(v<<1)}for(var _=v-1>>1;v>0&&f.score<i[_].score;_=(v=_)-1>>1)i[v]=i[_];i[v]=f};return m.add=S=>{var v=l;i[l++]=S;for(var f=v-1>>1;v>0&&S.score<i[f].score;f=(v=f)-1>>1)i[v]=i[f];i[v]=S},m.poll=S=>{if(l!==0){var v=i[0];return i[0]=i[--l],g(),v}},m.peek=S=>{if(l!==0)return i[0]},m.replaceTop=S=>{i[0]=S,g()},m},T=ye();return{single:t,go:r,highlight:a,prepare:y,indexes:n,cleanup:N}})});var di={};Eo(di,{default:()=>ho});module.exports=Ao(di);var _t=re(yr(),1),xe=require("react");var Sr=require("@raycast/api"),Pe=require("react");var xr=require("react");function Q(e){let t=(0,xr.useRef)(e);return t.current=e,t}function Io(e,t){let r=this[e];return r instanceof Date?`__raycast_cached_date__${r.toString()}`:Buffer.isBuffer(r)?`__raycast_cached_buffer__${r.toString("base64")}`:t}function To(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}var Ro=Symbol("cache without namespace"),vr=new Map;function Ge(e,t,r){let a=r?.cacheNamespace||Ro,o=vr.get(a)||vr.set(a,new Sr.Cache({namespace:r?.cacheNamespace})).get(a);if(!o)throw new Error("Missing cache");let n=Q(e),y=Q(t),s=(0,Pe.useSyncExternalStore)(o.subscribe,()=>{try{return o.get(n.current)}catch(b){console.error("Could not get Cache data:",b);return}}),u=(0,Pe.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,To)}catch(b){return console.warn("The cached data is corrupted",b),y.current}}else return y.current},[s,y]),x=Q(u),w=(0,Pe.useCallback)(b=>{let D=typeof b=="function"?b(x.current):b;if(typeof D>"u")o.set(n.current,"undefined");else{let U=JSON.stringify(D,Io);o.set(n.current,U)}return D},[o,n,x]);return[u,w]}var be=require("@raycast/api"),J=require("react");var se=require("@raycast/api"),Lt=class{toast;abortable;_abortController;constructor(t){this.abortable=t.abortable,this.toast=se.environment.launchType===se.LaunchType.UserInitiated?new se.Toast(t):void 0,this.updateAbortAction()}updateAbortAction(){this.toast&&(this._abortController=this.abortable?new AbortController:void 0,this.toast.primaryAction=this.abortable?{title:"Cancel",onAction:()=>{console.warn("Aborting..."),this._abortController?.abort()}}:void 0)}updateContent(t){if(this.toast){let{title:r,style:a,message:o,secondaryAction:n}=this.toast;this.toast.title=t.title??r,this.toast.style=t.style??a,this.toast.message=t.message??o,this.abortable=t.abortable??this.abortable,this.toast.secondaryAction=t.secondaryAction??n,this.updateAbortAction()}}show(){return this.toast?this.toast.show():Promise.resolve()}hide(){return this.toast?this.toast.hide():Promise.resolve()}get abortController(){return this._abortController}},Be=async e=>{let t=new Lt(e);return await t.show(),t},wr=e=>{let t=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:"Copy Logs",onAction(r){r.hide(),se.Clipboard.copy(t)}}};function br(e,t){let r=e instanceof Error?e.message:String(e);return(0,se.showToast)({style:se.Toast.Style.Failure,title:t?.title??"Something went wrong",message:r,primaryAction:t?.primaryAction??wr(e),secondaryAction:t?.primaryAction?wr(e):void 0})}var Er=Object.prototype.hasOwnProperty;function it(e,t){var r,a;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((a=e.length)===t.length)for(;a--&&it(e[a],t[a]););return a===-1}if(!r||typeof e=="object"){a=0;for(r in e)if(Er.call(e,r)&&++a&&!Er.call(t,r)||!(r in t)||!it(e[r],t[r]))return!1;return Object.keys(t).length===a}}return e!==e&&t!==t}var We=require("react");function Ar(e){let t=(0,We.useRef)(e),r=(0,We.useRef)(0);return it(e,t.current)||(t.current=e,r.current+=1),(0,We.useMemo)(()=>t.current,[r.current])}function ce(e,t,r){let a=(0,J.useRef)(0),[o,n]=(0,J.useState)({isLoading:!0}),y=Q(e),s=Q(r?.abortable),u=Q(t||[]),x=Q(r?.onError),w=Q(r?.onData),b=Q(r?.onWillExecute),D=Q(o.data),U=(0,J.useRef)(),O=(0,J.useRef)({page:0}),R=(0,J.useRef)(!1),N=(0,J.useRef)(!0),M=(0,J.useRef)(50),G=(0,J.useCallback)((...Y)=>{let K=++a.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),b.current?.(Y),n(T=>({...T,isLoading:!0}));let L=Lo(y.current)(...Y);function ye(T){return T.name=="AbortError"||K===a.current&&(x.current?x.current(T):be.environment.launchType!==be.LaunchType.Background&&br(T,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(c){c.hide(),U.current?.(...u.current||[])}}}),n({error:T,isLoading:!1})),T}return typeof L=="function"?(R.current=!0,L(O.current).then(({data:T,hasMore:c,cursor:i})=>(K===a.current&&(O.current&&(O.current.cursor=i,O.current.lastItem=T?.[T.length-1]),w.current&&w.current(T,O.current),c&&(M.current=T.length),N.current=c,n(l=>O.current.page===0?{data:T,isLoading:!1}:{data:(l.data||[])?.concat(T),isLoading:!1})),T),T=>(N.current=!1,ye(T)))):(R.current=!1,L.then(T=>(K===a.current&&(w.current&&w.current(T),n({data:T,isLoading:!1})),T),ye))},[s,w,x,u,y,n,U,b,O]);U.current=G;let F=(0,J.useCallback)(()=>{O.current={page:0};let Y=u.current||[];return G(...Y)},[G,u]),B=(0,J.useCallback)(async(Y,K)=>{let L;try{if(K?.optimisticUpdate){typeof K?.rollbackOnError!="function"&&K?.rollbackOnError!==!1&&(L=structuredClone(D.current?.value));let ye=K.optimisticUpdate;n(T=>({...T,data:ye(T.data)}))}return await Y}catch(ye){if(typeof K?.rollbackOnError=="function"){let T=K.rollbackOnError;n(c=>({...c,data:T(c.data)}))}else K?.optimisticUpdate&&K?.rollbackOnError!==!1&&n(T=>({...T,data:L}));throw ye}finally{K?.shouldRevalidateAfter!==!1&&(be.environment.launchType===be.LaunchType.Background||be.environment.commandMode==="menu-bar"?await F():F())}},[F,D,n]),Se=(0,J.useCallback)(()=>{O.current.page+=1;let Y=u.current||[];G(...Y)},[O,D,u,G]);(0,J.useEffect)(()=>{O.current={page:0},r?.execute!==!1?G(...t||[]):s.current&&s.current.current?.abort()},[Ar([t,r?.execute,G]),s,O]),(0,J.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let ie=r?.execute!==!1?o.isLoading:!1,oe={...o,isLoading:ie},ze=R.current?{pageSize:M.current,hasMore:N.current,onLoadMore:Se}:void 0;return{...oe,revalidate:F,mutate:B,pagination:ze}}function Lo(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}var Ce=Symbol();function ve(e,t,r){let{initialData:a,keepPreviousData:o,internal_cacheKeySuffix:n,...y}=r||{},s=(0,xe.useRef)(),[u,x]=Ge((0,_t.default)(t||[])+n,Ce,{cacheNamespace:(0,_t.default)(e)}),w=(0,xe.useRef)(u!==Ce?u:a),b=(0,xe.useRef)(void 0),{mutate:D,revalidate:U,...O}=ce(e,t||[],{...y,onData(F,B){b.current=B,y.onData&&y.onData(F,B),!(B&&B.page>0)&&(s.current="promise",w.current=F,x(F))}}),R,N=O.pagination;b.current&&b.current.page>0&&O.data?R=O.data:s.current==="promise"?R=w.current:o&&u!==Ce?(R=u,N&&(N.hasMore=!0,N.pageSize=u.length)):o&&u===Ce?R=w.current:u!==Ce?(R=u,N&&(N.hasMore=!0,N.pageSize=u.length)):R=a;let M=Q(R),G=(0,xe.useCallback)(async(F,B)=>{let Se;try{if(B?.optimisticUpdate){typeof B?.rollbackOnError!="function"&&B?.rollbackOnError!==!1&&(Se=structuredClone(M.current));let ie=B.optimisticUpdate(M.current);s.current="cache",w.current=ie,x(ie)}return await D(F,{shouldRevalidateAfter:B?.shouldRevalidateAfter})}catch(ie){if(typeof B?.rollbackOnError=="function"){let oe=B.rollbackOnError(M.current);s.current="cache",w.current=oe,x(oe)}else B?.optimisticUpdate&&B?.rollbackOnError!==!1&&(s.current="cache",w.current=Se,x(Se));throw ie}},[x,D,M,w,s]);return(0,xe.useEffect)(()=>{u!==Ce&&(s.current="cache",w.current=u)},[u]),{data:R,isLoading:O.isLoading,error:O.error,mutate:b.current&&b.current.page>0?D:G,pagination:N,revalidate:U}}var st=require("react");var kr;(function(e){e.Required="required"})(kr||(kr={}));var Ir=require("react");var _o=10,Po=24*60*60*1e3,Oi=Math.log(2)/(_o*Po);var Qr=re(require("os"),1);var ct=(e=0)=>new Promise(t=>setTimeout(t,e)),Ve=e=>{try{if(typeof e=="string"){let t=JSON.parse(e);if(t&&typeof t=="object")return!0}}catch{}return!1};var Kr=require("child_process"),Jr=require("util");var Co=require("@raycast/api");var Tr=re(require("os"),1);var{username:Xi}=Tr.default.userInfo();var De=require("@raycast/api");function ee(e){let t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Ee(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function Rr(e,t){let r=ee(e);return isNaN(t)?Ee(e,NaN):(t&&r.setDate(r.getDate()+t),r)}function Lr(e,t){let r=ee(e);if(isNaN(t))return Ee(e,NaN);if(!t)return r;let a=r.getDate(),o=Ee(e,r.getTime());o.setMonth(r.getMonth()+t+1,0);let n=o.getDate();return a>=n?o:(r.setFullYear(o.getFullYear(),o.getMonth(),a),r)}function _r(e,t){let{years:r=0,months:a=0,weeks:o=0,days:n=0,hours:y=0,minutes:s=0,seconds:u=0}=t,x=ee(e),w=a||r?Lr(x,a+r*12):x,b=n||o?Rr(w,n+o*7):w,D=s+y*60,O=(u+D*60)*1e3;return Ee(e,b.getTime()+O)}function me(e,t){let r=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return r+a}function Pt(e,t){let r=ee(e);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");let a=t?.format??"extended",o=t?.representation??"complete",n="",y="",s=a==="extended"?"-":"",u=a==="extended"?":":"";if(o!=="time"){let x=me(r.getDate(),2),w=me(r.getMonth()+1,2);n=`${me(r.getFullYear(),4)}${s}${w}${s}${x}`}if(o!=="date"){let x=r.getTimezoneOffset();if(x!==0){let R=Math.abs(x),N=me(Math.trunc(R/60),2),M=me(R%60,2);y=`${x<0?"+":"-"}${N}:${M}`}else y="Z";let w=me(r.getHours(),2),b=me(r.getMinutes(),2),D=me(r.getSeconds(),2),U=n===""?"":"T",O=[w,b,D].join(u);n=`${n}${U}${O}${y}`}return n}function $e(e){return ee(e*1e3)}function Pr(e){return Math.trunc(+ee(e)/1e3)}function Cr(e,t){let r=ee(e),a=ee(t);return r.getTime()>a.getTime()}var He=class e{static remove=async(t,r)=>De.LocalStorage.removeItem(e.getId(t,r));static get=async(t,r)=>De.LocalStorage.getItem(e.getId(t,r));static set=async(t,r,a)=>De.LocalStorage.setItem(e.getId(t,a),r);static store=async(t,r,a,o)=>e.set(t,JSON.stringify({...a?{ttl:Pr(_r(new Date,a))}:{},data:r}),o);static retrieve=async(t,r)=>{let a=await e.get(t,r);if(!a)return;let o=JSON.parse(a);if(o.ttl&&Cr(new Date,$e(+o.ttl))){await e.remove(t,r);return}return o.data};static getId=(t,r=!0)=>r?`${De.environment.commandName}-${t}`:t};var Oo=typeof global=="object"&&global&&global.Object===Object&&global,Or=Oo;var $o=typeof self=="object"&&self&&self.Object===Object&&self,Do=Or||$o||Function("return this")(),$r=Do;var No=$r.Symbol,ge=No;var Dr=Object.prototype,Mo=Dr.hasOwnProperty,Fo=Dr.toString,Xe=ge?ge.toStringTag:void 0;function Uo(e){var t=Mo.call(e,Xe),r=e[Xe];try{e[Xe]=void 0;var a=!0}catch{}var o=Fo.call(e);return a&&(t?e[Xe]=r:delete e[Xe]),o}var Nr=Uo;var zo=Object.prototype,qo=zo.toString;function jo(e){return qo.call(e)}var Mr=jo;var Go="[object Null]",Bo="[object Undefined]",Fr=ge?ge.toStringTag:void 0;function Wo(e){return e==null?e===void 0?Bo:Go:Fr&&Fr in Object(e)?Nr(e):Mr(e)}var Ur=Wo;function Vo(e){return e!=null&&typeof e=="object"}var zr=Vo;var Ho="[object Symbol]";function Xo(e){return typeof e=="symbol"||zr(e)&&Ur(e)==Ho}var qr=Xo;function Ko(e,t){for(var r=-1,a=e==null?0:e.length,o=Array(a);++r<a;)o[r]=t(e[r],r,e);return o}var jr=Ko;var Jo=Array.isArray,Gr=Jo;var Yo=1/0,Br=ge?ge.prototype:void 0,Wr=Br?Br.toString:void 0;function Vr(e){if(typeof e=="string")return e;if(Gr(e))return jr(e,Vr)+"";if(qr(e))return Wr?Wr.call(e):"";var t=e+"";return t=="0"&&1/e==-Yo?"-0":t}var Hr=Vr;function Qo(e){return e==null?"":Hr(e)}var Ke=Qo;function Zo(e){for(var t=-1,r=e==null?0:e.length,a=0,o=[];++t<r;){var n=e[t];n&&(o[a++]=n)}return o}var H=Zo;var Xr=e=>e instanceof Error?e.message:Ke(e);var Oe=(0,Jr.promisify)(Kr.exec),lt=e=>typeof e=="object"&&"stderr"in e?e.stderr:Xr(e);var Yr=`${Qr.default.homedir()}/.midway/cookie`,en=e=>typeof e=="object"&&e!==null&&"__type"in e&&e.__type.includes("Exception"),tn=e=>typeof e=="object"&&e!==null&&"status"in e&&e.status==="error",ft=(e,t)=>{let{cookie:r,data:a,args:o=[],headers:n={},method:y,maxBuffer:s,cancel:u}=t,x=[`curl -sSL '${e}'`,`-X ${y??"GET"}`,Object.entries(n).map(([w,b])=>`-H '${w}: ${b}'`),o,a?[`-d '${JSON.stringify(a)}'`]:[],r?[`-b '${Object.entries(r).map(([w,b])=>`${w}=${b}`).join(";")}'`]:[]].flat();return Oe(x.join(" "),{maxBuffer:s,signal:u?.signal}).then(({stdout:w})=>Ve(w)?JSON.parse(w):w).catch(w=>{throw new Error(lt(w))})},Zr=(e,t)=>{let{args:r=[],headers:a={},accessKeyId:o,secretAccessKey:n,service:y,region:s,sessionToken:u,...x}=t,w=[...r,`--aws-sigv4 'aws:amz:${s}:${y}' -u '${o}:${n}'`],b={...a,...u?{"x-amz-security-token":u}:{}};return ft(e,{...x,args:w,headers:b})},le=(e,t={})=>{let{ignoreCoralError:r=!1,writeToCookieFile:a=!0,args:o=[],...n}=t,y=[o,`--anyauth --location-trusted -k -u : -b ${Yr}`,a?[`-c ${Yr}`]:[]].flat();return ft(e,{...n,args:y}).then(s=>{if(!r&&en(s))throw new Error(`${s.__type}${s.message?`: ${s.message}`:""}`);if(tn(s))throw new Error(`${s.message??"Midway Error"}: ${s.desc??"You should authenticate (may use mwinit)"}`);return s})};var rn=(e,t)=>le("https://gitfarm-sso.corp.amazon.com",{...t,method:"POST",headers:{"Content-Encoding":"amz-1.0","Content-Type":"application/json; charset=UTF-8","X-Amz-Target":`com.amazon.brazil.gitfarm.service.GitFarmService.${e}`}}),ea=e=>rn("getReferenceSha1s",{data:{repositoryId:e}}).then(t=>t.references);var ut=require("@raycast/api");function dt(e,t=!0){let{launchType:r,extensionName:a,commandName:o}=ut.environment;return!t||r===ut.LaunchType.Background?Promise.resolve():le("https://analytics.raycast.tools.aws.dev/v2/stats",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},data:{commandName:o,extensionVersion:e,extensionName:a}}).catch(n=>console.warn(`Failed to publish stats for ${a}/${o}.`,n))}var ae=require("@raycast/api");var Dn=re(xa(),1),Ut=re(ba(),1),Nn=re(Aa(),1),Mn=re(Ia(),1),La=re(Ra(),1);var Fn=e=>ea(`pkg/${e}`).then(t=>H(t).map(r=>(r.name.match(/refs\/tags\/(.*)/)??["",""])[1]).filter(r=>(0,La.default)(r))).then(t=>t.length===0?void 0:t.reduce((r,a)=>(0,Ut.default)(a,r)?a:r,t[0])).catch(t=>{console.warn(`Failed to get the latest extension version for ${e}.`,t)}),_a=async e=>{let{launchType:t,extensionName:r}=ae.environment,{updateCommandName:a,changelogCommandName:o,currentVersion:n,pkg:y,extensionOwner:s}=e,u=await Fn(y);if(t===ae.LaunchType.UserInitiated&&u&&(0,Ut.default)(u,n)){let x={type:ae.LaunchType.UserInitiated,extensionName:r,ownerOrAuthorName:s};await(0,ae.showToast)({style:ae.Toast.Style.Success,title:`\u2728 New version (${u}) now available!`,message:`Upgrade from current version (${n}) for the latest features and improvements.`,primaryAction:{title:"Update Extension",onAction:()=>(0,ae.launchCommand)({name:a??"update-extension",...x})},secondaryAction:{title:"Changelog",onAction:()=>(0,ae.launchCommand)({name:o??"extension-changelog",...x})}})}};var Je=e=>e&&Pt(e,{representation:"date"}),ht=e=>e&&Pt(e,{representation:"complete",format:"extended"}),Ye=e=>e?new Date(e):void 0;var Oa=re(require("os")),{username:qt}=Oa.default.userInfo(),Un=/kerberos:\s*(.+)\s*@ANT.AMAZON.COM/,Me=`kerberos:${qt}@ANT.AMAZON.COM`,zt=e=>{if(!e)return;if(e.__typename==="EmailAliasIdentity")return e?.details?.label;let[,t]=e?.id.match(Un)??["",void 0];return t},zn=e=>Array.isArray(e)&&e.length>0?e[0]?.value:void 0,yt=["Work In Progress","Assigned","Pending","Closed","Resolved"],Qe=[1,2,2.5,3,4,5],$a=e=>Qe.includes(e),qn={ONE:1,TWO:2,BUSINESS_HOURS_TWO:2.5,THREE:3,FOUR:4,FIVE:5},jn=`
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
`,Gn=`
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
`,Bn=`
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
`,Wn=`
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
`,Pa=e=>le("https://sim-ticketing-graphql-fleet.corp.amazon.com/graphql",{headers:{"Content-Type":"application/json",Origin:"https://t.corp.amazon.com"},method:"POST",data:Array.isArray(e)?e:[e]}),[Ca,Vn,Hn,Xn]=[5,1e3,3e3,.5],xt=async e=>{let t=await Pa(e),r=1,a=Vn;for(;r<=Ca&&typeof t=="string"&&t.includes("POST body missing, invalid Content-Type, or JSON object has no keys");r++){console.warn(`Failed to call sim-ticketing endpoint and retry (${r}/${Ca}): `,t);let o=Math.random()*a*Xn;await ct(o),a=Math.min(a*2,Hn),t=await Pa(e)}return t},Da=e=>xt({operationName:"issueListView",query:jn,variables:{query:H(e).join(" AND "),rows:200,sort:"createDate desc"}}).then(t=>H(t).flatMap(r=>H(r?.data?.queryIssues?.documents).map(a=>{let{id:o,shortId:n,severity:y,extensions:s}=a,{tt:u}=s;return{id:o,shortId:n,alias:a.alias,severity:qn[y],title:a.title,status:a.status,ticketingStatus:a.ticketingStatus,lastUpdatedDate:Ye(a.lastUpdatedDate),lastAssignedDate:Ye(a.lastAssignedDate),description:a.description,ticketingPendingReason:a.ticketingPendingReason,lastUpdatedConversationDate:Ye(a.lastUpdatedConversationDate),requester:zt(a.requester),assignee:zt(a.assignee),watchers:a.watchers?.length??0,rootCause:zn(a.rootCauses),lastResolvedDate:Ye(a.lastResolvedDate),labels:H(a.labels).map(x=>x.label),resolvedBy:zt(a.resolvedBy),assignedGroup:u.assignedGroup}}))),Na=()=>xt({operationName:"fetchCurrentUserDetails",query:Gn,variables:{}}).then(e=>H(e).flatMap(t=>H(t?.data?.whoami?.groups).map(r=>{let{id:a,label:o}=r.details,y=`https://t.corp.amazon.com/issues/?${new URLSearchParams({q:['extensions.tt.status:(Researching OR "Work In Progress" OR Pending) ',`extensions.tt.assignedGroup:(${o})`].join(" AND ")})}`;return{id:a,label:o,url:y}}))),Ma=()=>xt({operationName:"allSavedSearches",query:Bn,variables:{}}).then(e=>[...H(e).flatMap(t=>H(t?.data?.whoami?.groups).flatMap(r=>{let a=H(r?.details?.preferences?.ticketingSavedSearches).map(o=>{let{id:n,searchName:y,queryString:s}=o,u=new URLSearchParams(s).get("q"),x=`https://t.corp.amazon.com/issues/?${s}`;return{id:n,searchName:y,url:x,query:!u||Ve(u)?void 0:u}});return H(a)})),{searchName:"Assigned to You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"${Me}"`,"isTicket:true"].join(" AND ")},{searchName:"Requested by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Me}`,"isTicket:true"].join(" AND ")},{searchName:"You've + 1'd",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`affects:${qt}`,"isTicket:true"].join(" AND ")},{searchName:"You're Cc'd on",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`watchers:${qt}`,"isTicket:true"].join(" AND ")},{searchName:"Pending Requester Info by You",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`requesterIdentity:"${Me}"`,"isTicket:true",'next_step.owner:"role:requester"',"next_step.action:Comment"].join(" AND ")},{searchName:"Approaching Need by Date",query:['extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)',`assigneeIdentity:"${Me}"`,"isTicket:true","schedule.needByDate:[NOW TO NOW+1DAYS]"].join(" AND ")}]),Fa=({shortId:e})=>xt({operationName:"checkInMultiple",query:Wn,variables:{args:{identities:[Me],issueId:e}}}).then(t=>H(t).some(r=>H(r?.data?.checkInMultiple?.engagementList).find(a=>a?.identity?.id===Me)>=0));var za=require("@raycast/api");var vt=require("@raycast/api"),Ua=(h=>(h.Amazon="amazon.svg",h.AmazonChime="amazon-chime.svg",h.Badge="badge.svg",h.Book="book.svg",h.BoxArchive="box-archive.svg",h.Broadcast="broadcast.svg",h.BuilderHub="builder-hub.svg",h.BuildingColumns="building-columns.svg",h.CheckSquare="check-square.svg",h.ClappingHands="clapping-hands.svg",h.Cube="cube.svg",h.Cubes="cubes.svg",h.Document="document.svg",h.Earth="earth.svg",h.EverGeen="ever-green.svg",h.Filter="filter.svg",h.FilterCircleXmark="filter-circle-xmark.svg",h.Firefox="firefox.svg",h.InternalSearch="internal-search.svg",h.Isengard="isengard.svg",h.Issue="issue.svg",h.IT="it.svg",h.PaperPlane="paper-plane.svg",h.Pipeline="pipeline.svg",h.PipelineDisabled="pipeline-disabled.svg",h.PriorityHigh="priority-high.svg",h.PriorityLow="priority-low.svg",h.PriorityMedium="priority-medium.svg",h.Quip="quip.svg",h.Sage="sage.svg",h.SavedSearch="saved-search.svg",h.Siren="siren.svg",h.Slack="slack.svg",h.Slides="slides.svg",h.Spinner="spinner.svg",h.Spreadsheet="spreadsheet.svg",h.Sprint="sprint.svg",h.SquareFive="five.svg",h.SquareFour="four.svg",h.SquareOne="one.svg",h.SquareThree="three.svg",h.SquareTwo="two.svg",h[h.Story=vt.Icon.Book]="Story",h.TaskeiRoom="taskei-room.svg",h.TaskeiSubtask="taskei-subtask.svg",h.TaskeiTask="taskei-task.svg",h.ThumbsUp="thumbs-up.svg",h.Ticket="ticket.svg",h.Wiki="wiki.svg",h))(Ua||{}),Kn={...vt.Icon,...Ua},I=Kn;var qa=require("react/jsx-runtime");function Ze({url:e,onCopy:t}){return(0,qa.jsx)(za.Action.CopyToClipboard,{title:"Copy Link",content:e,shortcut:{modifiers:["cmd","shift"],key:"c"},icon:I.Clipboard,onCopy:t})}var Ba=require("@raycast/api");var ja=require("@raycast/api"),Ga=(n=>(n.Bronze="#CD7F32",n.Gold="#FFD700",n.LightSilver="#D8D8D8",n.Orange="#FF9900",n.KoopaGreen="#5FD86C",n))(Ga||{}),Jn={...ja.Color,...Ga},V=Jn;var Wa=require("react/jsx-runtime");function jt({isFiltering:e,onFilteringChange:t,title:r,...a}){return(0,Wa.jsx)(Ba.Action,{...a,icon:e?I.Filter:{source:I.FilterCircleXmark,tintColor:V.SecondaryText},title:`Filter: ${r}`,onAction:t})}var Va=require("@raycast/api");var Ha=require("react/jsx-runtime");function et({isShowingDetail:e,onShowingDetailChange:t}){return(0,Ha.jsx)(Va.Action,{title:`${e?"Hide":"Show"} Detail`,icon:{source:I.Sidebar,tintColor:V.PrimaryText},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"."}})}var P=require("@raycast/api");var C=require("react/jsx-runtime"),Gt={1:{source:I.SquareOne,tintColor:V.Red},2:{source:I.SquareTwo,tintColor:V.Orange},2.5:{source:I.SquareTwo,tintColor:V.Yellow},3:{source:I.SquareThree,tintColor:V.Blue},4:{source:I.SquareFour,tintColor:V.LightSilver},5:{source:I.SquareFive,tintColor:V.SecondaryText}},Yn=[...yt,...Qe];function Bt({ignoreFilters:e,filters:t,setFilters:r}){return!e&&(0,C.jsx)(P.ActionPanel.Section,{children:Yn.map(a=>(0,C.jsx)(jt,{title:$a(a)?`Sev ${a}`:a,isFiltering:t[a],onFilteringChange:()=>r({...t,[a]:!t[a]})}))})}function Wt({ticket:e,isShowingDetail:t,onShowingDetailChange:r,...a}){let{ignoreFilters:o,filters:n,setFilters:y,mutateTickets:s}=a,{id:u,shortId:x,ticketingStatus:w,severity:b}=e,D=`https://t.corp.amazon.com/${x??u}`;return(0,C.jsx)(P.List.Item,{title:e.title,icon:b&&Gt[b]?Gt[b]:{source:I.Ticket,tintColor:V.Blue},accessories:(!t&&(w==="Closed"||w==="Resolved")||void 0)&&[{icon:{source:I.CheckSquare,tintColor:V.KoopaGreen}}],detail:(0,C.jsx)(P.List.Item.Detail,{markdown:e.description,metadata:(0,C.jsxs)(P.Detail.Metadata,{children:[(0,C.jsx)(P.Detail.Metadata.Label,{title:"Alias",text:e.alias}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Assigned Group",text:e.assignedGroup}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Status",text:e.status}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Ticketing Status",text:w}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Assginee",text:e.assignee}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Requester",text:e.requester}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Resolved By",text:e.resolvedBy}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Severity",icon:b&&Gt[b]}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Ticketing Pending Reason",text:e.ticketingPendingReason??"None"}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Root Cause",text:e.rootCause}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Watchers",icon:I.Hashtag,text:Ke(e.watchers)}),(0,C.jsx)(P.Detail.Metadata.TagList,{title:"Labels",children:e.labels.map(U=>(0,C.jsx)(P.Detail.Metadata.TagList.Item,{text:U},U))}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Last Assigned Date",icon:I.Calendar,text:Je(e.lastAssignedDate)??"None"}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Last Resolved Date",icon:I.Calendar,text:Je(e.lastResolvedDate)??"None"}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Last Updated Date",icon:I.Calendar,text:Je(e.lastUpdatedDate)??"None"}),(0,C.jsx)(P.Detail.Metadata.Label,{title:"Last Updated Conversation Date",icon:I.Calendar,text:Je(e.lastUpdatedConversationDate)??"None"})]})}),actions:(0,C.jsxs)(P.ActionPanel,{children:[(0,C.jsx)(P.Action.OpenInBrowser,{url:D}),(0,C.jsx)(P.Action,{title:"Check In",icon:I.Flag,onAction:async()=>{let U=await Be({style:P.Toast.Style.Animated,title:`Checking in ${x}...`});await Fa(e)?U.updateContent({style:P.Toast.Style.Success,title:`Checked in ${x} successfully.`}):U.updateContent({style:P.Toast.Style.Failure,title:`Failed to check in ${x}.`}),await s()}}),(0,C.jsx)(Ze,{url:D}),(0,C.jsx)(et,{isShowingDetail:t,onShowingDetailChange:r}),(0,C.jsx)(Bt,{ignoreFilters:o,filters:n,setFilters:y})]})},u)}var St=require("react");function tt(e,{sanitize:t=!1}={}){let[r,a]=(0,St.useState)(e),o=(0,St.useCallback)(n=>{a(t?n.replace(/\s/g,""):n.trim())},[t]);return[r,o]}var wt=require("react");function rt(e){let[t,r]=(0,wt.useState)(!!e),a=(0,wt.useCallback)(()=>{r(o=>!o)},[]);return[t,a]}var Fe=require("@raycast/api"),Xa=require("react"),at=require("react/jsx-runtime"),Qn=`${Fe.environment.commandName}-v1`,Zn={"Work In Progress":!1,Assigned:!1,Pending:!1,Closed:!0,Resolved:!0,1:!1,2:!1,2.5:!1,3:!1,4:!1,5:!1},[Vt,ei]=[20,10];function Ae({query:e,isLoading:t,ignoreFilters:r,searchBarAccessory:a}){let[o,n]=rt(!1),[y,s]=Ge("ticket-filters",Zn,{cacheNamespace:Qn}),[u,x]=tt(""),w=(0,Xa.useMemo)(()=>{let M=yt.filter(F=>!y[F]).map(F=>JSON.stringify(F)).join(" OR "),G=Qe.filter(F=>!y[F]).join(" OR ");return[u&&`full_text:(${u})`,...Array.isArray(e)?e:[e],...r?[]:[`extensions.tt.status:(${M})`,`currentSeverity:(${G})`]]},[u,e,y]),{isLoading:b,data:D,mutate:U}=ve(Da,[w],{initialData:[]}),{isLoading:O,data:R,pagination:N}=ce(M=>async({page:G})=>({data:M?.slice(G*Vt,(G+1)*Vt),hasMore:(G+1)*Vt<=M?.length&&G+1<ei}),[D]);return(0,at.jsx)(Fe.List,{isLoading:t||b||O,searchBarAccessory:a,isShowingDetail:o,onSearchTextChange:x,pagination:N,throttle:!0,actions:(0,at.jsx)(Fe.ActionPanel,{children:(0,at.jsx)(Bt,{filters:y,setFilters:s})}),children:R?.map(M=>(0,at.jsx)(Wt,{ticket:M,isShowingDetail:o,onShowingDetailChange:n,ignoreFilters:r,filters:y,setFilters:s,mutateTickets:U},M.id))})}var Ie=require("@raycast/api");var ke=require("react/jsx-runtime");function Ht({group:e}){let{id:t,label:r,url:a}=e;return(0,ke.jsx)(Ie.List.Item,{icon:I.TwoPeople,title:r,actions:(0,ke.jsxs)(Ie.ActionPanel,{children:[(0,ke.jsx)(Ie.Action.Push,{icon:I.Ticket,title:"Tickets",target:(0,ke.jsx)(Ae,{query:`extensions.tt.assignedGroup:(${JSON.stringify(r)})`})}),(0,ke.jsx)(Ie.Action.OpenInBrowser,{url:a})]})},t)}var Ka=require("@raycast/api"),Xt=require("react/jsx-runtime");function Kt({isLoadingGroups:e,groups:t,searchBarAccessory:r}){return(0,Xt.jsx)(Ka.List,{searchBarAccessory:r,isLoading:e,children:t?.map(a=>(0,Xt.jsx)(Ht,{group:a},a.id))})}var Jt=re(require("fs"));var Ya=re(require("os")),ti=`${Ya.default.homedir()}/.midway`,Ja=`${ti}/cookie`;function Qa(e){if(!Jt.default.existsSync(Ja))return[];let t=Jt.default.readFileSync(Ja,"utf8");return e?t:t.split(`
`).map(r=>{if(r.startsWith("#")&&!r.startsWith("#HttpOnly_"))return r;let a=r.split("	");if(a.length!==7)return r;let[o,n,y,s,u,x,w]=a;return{domain:o,includesSubdomains:n,path:y,overHttpsOnly:s,expiresAt:+u,name:x,value:w}})}var Za=re(require("os")),{username:ri}=Za.default.userInfo(),ai="us-west-2",oi="https://us-west-2.paging.corp.a2z.com",ni=/SIM ([A-Za-z0-9]+) .*/,eo=async()=>{await le("https://paging.corp.a2z.com");let t=Qa().find(s=>typeof s!="string"&&/\.paging\.corp\.a2z\.com/.test(s.domain)&&/amzn_sso_token/.test(s.name));if(!t||typeof t=="string")throw new Error("No SOS token found.");let{value:r}=t,a=new URLSearchParams({Version:"2011-06-15",Action:"AssumeRoleWithWebIdentity",RoleArn:"arn:aws:iam::991761955833:role/FederatedAccessRole-prod",RoleSessionName:"web-user",WebIdentityToken:r,DurationSeconds:"3600"}),n=(await ft(`https://sts.amazonaws.com/?${a}`,{headers:{Accept:"application/json"},method:"POST"}))?.AssumeRoleWithWebIdentityResponse?.AssumeRoleWithWebIdentityResult?.Credentials;if(!n||!n.AccessKeyId||!n.SecretAccessKey)throw new Error("No valid SOS Credentials found.");return{accessKeyId:n.AccessKeyId,secretAccessKey:n.SecretAccessKey,sessionToken:n.SessionToken}},to=(e,t,r={})=>Zr(oi,{...r,...t,service:"sos",region:ai,method:"POST",headers:{"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":`AwsSOSInterfaceService.${e}`}}),ro=e=>to("ListPages",e,{data:{contactArn:`arn:aws:sos:us-west-2:991761955833:contact/amazon:${ri}`,maxResults:200,timeRange:{fromTime:0,toTime:new Date().getTime()/1e3}}}).then(t=>H(t.pages).map(r=>({acceptCode:r.acceptCode,arn:r.arn,content:r.content,contactArn:r.contactArn,deliveryTime:r.deliveryTime&&$e(r.deliveryTime),engagementArn:r.engagementArn,originalRegion:r.originalRegion,readTime:r.readTime&&$e(r.readTime),sender:r.sender,sentTime:$e(r.sentTime),subject:r.subject.replace(/To:\S+@\S+\.\S+/,"").trim(),status:r.readTime?"Read":r.deliveryTime?"Delivered":"Sent",ticketUrl:r.sender.includes("issues")?`https://t.corp.amazon.com/${r.subject.match(ni)[1]}`:void 0}))),ao=({acceptCode:e,arn:t,engagementArn:r},a)=>to("AcceptPage",a,{data:{receiptType:"READ",acceptCode:e,arn:t,engagementArn:r}}).then(o=>JSON.stringify(o)==="{}");var X=require("@raycast/api");var W=require("react/jsx-runtime"),ii={Sent:{source:I.PaperPlane,tintColor:V.Blue},Delivered:{source:I.PaperPlane,tintColor:V.Yellow},Read:{source:I.Eye,tintColor:V.KoopaGreen}};function Yt({result:e,isShowingDetail:t,ackPage:r,onShowingDetailChange:a}){let{ticketUrl:o,subject:n,status:y}=e,s=ii[y];return(0,W.jsx)(X.List.Item,{title:n,icon:s??"\u{1F4DF}",detail:(0,W.jsx)(X.List.Item.Detail,{markdown:`### ${n}
---
${e.content}`,metadata:(0,W.jsxs)(X.Detail.Metadata,{children:[(0,W.jsx)(X.Detail.Metadata.Label,{title:"Sender",text:e.sender,icon:"\u{1F4DF}"}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Contact",text:e.contactArn}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Status",text:y,icon:s}),(0,W.jsx)(X.Detail.Metadata.Separator,{}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Region",text:e.originalRegion}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Read Time",icon:I.Calendar,text:ht(e.readTime)}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Delivery Time",icon:I.Calendar,text:ht(e.deliveryTime)}),(0,W.jsx)(X.Detail.Metadata.Label,{title:"Last Sent Time",icon:I.Calendar,text:ht(e.sentTime)})]})}),actions:(0,W.jsxs)(X.ActionPanel,{children:[(0,W.jsx)(X.Action,{title:"Acknowledge",icon:{source:I.Flag,tintColor:V.KoopaGreen},onAction:()=>r(e)}),(0,W.jsx)(et,{isShowingDetail:t,onShowingDetailChange:a}),o&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(X.Action.OpenInBrowser,{url:o,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,W.jsx)(Ze,{url:o})]})]})},n)}var Ue=require("@raycast/api");var io=re(no());function Qt(e,t=[],r){return e?io.default.go(e,t,{keys:Array.isArray(r)?r:[r],limit:1e3,threshold:-1e4}).map(a=>a.obj):t}var Et=require("react"),er=require("react/jsx-runtime"),so="sos-credentials-v1",[Zt,si]=[20,10];function tr({searchBarAccessory:e}){let[t,r]=tt(""),[a,o]=rt(!1),{isLoading:n,data:y}=ce(async()=>{let R=await He.retrieve(so);return R||(R=await eo(),await He.store(so,R,{minutes:50})),R}),{isLoading:s,data:u,mutate:x}=ve(async R=>R?ro(R):[],[y]),w=(0,Et.useCallback)(async R=>{let N=await Be({style:Ue.Toast.Style.Animated,title:"Acknowledging page..."}),M=!1;y&&(M=await ao(R,y)),M?(await ct(1e3),await x(),N.updateContent({style:Ue.Toast.Style.Success,title:"Page acknowledged."})):N.updateContent({style:Ue.Toast.Style.Failure,title:"Failed to acknowledge page."})},[y,x]),b=(0,Et.useMemo)(()=>Qt(t,u,["subject","content"]),[u,t]),{isLoading:D,data:U,pagination:O}=ce(R=>async({page:N})=>({data:R.slice(N*Zt,(N+1)*Zt),hasMore:(N+1)*Zt<=R.length&&N+1<si}),[b]);return(0,er.jsx)(Ue.List,{searchBarAccessory:e,isLoading:n||s||D,isShowingDetail:a,onSearchTextChange:r,pagination:O,throttle:!0,children:U?.map(R=>(0,er.jsx)(Yt,{result:R,isShowingDetail:a,onShowingDetailChange:o,ackPage:w},R.arn))})}var Re=require("@raycast/api");var Te=require("react/jsx-runtime");function rr({savedSearch:e}){let{id:t,searchName:r,url:a,query:o}=e;return(0,Te.jsx)(Re.List.Item,{icon:I.SavedSearch,title:r,accessories:[{text:o}],actions:(0,Te.jsxs)(Re.ActionPanel,{children:[o&&(0,Te.jsx)(Re.Action.Push,{title:"Tickets",icon:I.Ticket,target:(0,Te.jsx)(Ae,{ignoreFilters:!0,query:o})}),a&&(0,Te.jsx)(Re.Action.OpenInBrowser,{url:a})]})},t??r)}var ar=require("@raycast/api"),co=require("react"),At=require("react/jsx-runtime");function or({searchBarAccessory:e}){let{isLoading:t,data:r}=ve(Ma,[]),a=(0,co.useMemo)(()=>({mySearches:{title:"Saved Searches",savedSearches:r?.filter(o=>!!o.id)},extensionDefinedSearches:{title:"Extension Defined Searches",savedSearches:r?.filter(o=>!o.id)}}),[r]);return(0,At.jsx)(ar.List,{searchBarAccessory:e,isLoading:t,children:[a.extensionDefinedSearches,a.mySearches].map(({title:o,savedSearches:n},y)=>(0,At.jsx)(ar.List.Section,{title:o,children:n?.map((s,u)=>(0,At.jsx)(rr,{savedSearch:s},s.id??u))},y))})}var fo="1.18.4";var uo="zhenpewu";var nr=fo,ci="AmznRaycastExtension";var po=()=>_a({pkg:ci,currentVersion:nr,extensionOwner:uo});function ir(){ce(po,[])}var li=()=>dt(nr,!0),mo=li;function sr(){ce(mo,[])}var cr=require("@raycast/api");var go=require("react"),fe=require("react/jsx-runtime"),fi=["global","high_sev","paging","group","saved_search"],ui={global:{title:"All Groups",icon:I.Earth},group:{title:"Groups",icon:I.TwoPeople},high_sev:{title:"High-Sev",icon:{source:I.Siren,tintColor:V.Red}},saved_search:{title:"Saved Searches",icon:I.SavedSearch},paging:{title:"Paging",icon:"\u{1F4DF}"}};function ho(){let[e,t]=(0,go.useState)("global"),{isLoading:r,data:a}=ve(Na,[]);function o(){return(0,fe.jsx)(cr.List.Dropdown,{tooltip:"Mode",storeValue:!0,onChange:n=>t(n),children:fi.map(n=>(0,fe.jsx)(cr.List.Dropdown.Item,{...ui[n],value:n},n))})}switch(sr(),ir(),e){case"saved_search":return(0,fe.jsx)(or,{searchBarAccessory:(0,fe.jsx)(o,{})});case"group":return(0,fe.jsx)(Kt,{groups:a,isLoadingGroups:r,searchBarAccessory:(0,fe.jsx)(o,{})});case"paging":return(0,fe.jsx)(tr,{searchBarAccessory:(0,fe.jsx)(o,{})});default:return(0,fe.jsx)(Ae,{query:a&&[`extensions.tt.assignedGroup:(${a.map(n=>JSON.stringify(n.label)).join(" OR ")})`,...e==="high_sev"?["currentSeverity:(1 OR 2 OR 2.5)",'extensions.tt.status:(Assigned OR Researching OR "Work In Progress" OR Pending)']:[]],ignoreFilters:e==="high_sev",isLoading:r,searchBarAccessory:(0,fe.jsx)(o,{})})}}
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
