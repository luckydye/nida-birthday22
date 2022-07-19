const _t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}};_t();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),X=new WeakMap;class vt{constructor(t,e,i){if(this._$cssResult$=!0,i!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&X.set(e,t))}return t}toString(){return this.cssText}}const wt=n=>new vt(typeof n=="string"?n:n+"",void 0,Y),$=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new vt(e,n,Y)},At=(n,t)=>{V?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},F=V?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return wt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const G=window.trustedTypes,xt=G?G.emptyScript:"",J=window.reactiveElementPolyfillSupport,K={toAttribute(n,t){switch(t){case Boolean:n=n?xt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},gt=(n,t)=>t!==n&&(t==t||n==n),L={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:gt};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(F(s))}else t!==void 0&&e.push(F(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var s,o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const c=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:K.toAttribute)(e,i.type);this._$El=t,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$El=null}}_$AK(t,e){var i,s;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const c=o.getPropertyOptions(r),a=c.converter,l=(s=(i=a==null?void 0:a.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&s!==void 0?s:K.fromAttribute;this._$El=r,this[r]=l(e,c.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||gt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},J==null||J({ReactiveElement:w}),((D=globalThis.reactiveElementVersions)!==null&&D!==void 0?D:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const x=globalThis.trustedTypes,Z=x?x.createPolicy("lit-html",{createHTML:n=>n}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,yt="?"+y,Ct=`<${yt}>`,C=document,k=(n="")=>C.createComment(n),O=n=>n===null||typeof n!="object"&&typeof n!="function",$t=Array.isArray,Et=n=>{var t;return $t(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,tt=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,et=/'/g,it=/"/g,bt=/^(?:script|style|textarea|title)$/i,St=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=St(1),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),st=new WeakMap,Pt=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new T(t.insertBefore(k(),c),c,void 0,e!=null?e:{})}return r._$AI(n),r},A=C.createTreeWalker(C,129,null,!1),kt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=P;for(let a=0;a<e;a++){const l=n[a];let v,d,h=-1,f=0;for(;f<l.length&&(r.lastIndex=f,d=r.exec(l),d!==null);)f=r.lastIndex,r===P?d[1]==="!--"?r=Q:d[1]!==void 0?r=tt:d[2]!==void 0?(bt.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=b):d[3]!==void 0&&(r=b):r===b?d[0]===">"?(r=s!=null?s:P,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,v=d[1],r=d[3]===void 0?b:d[3]==='"'?it:et):r===it||r===et?r=b:r===Q||r===tt?r=P:(r=b,s=void 0);const j=r===b&&n[a+1].startsWith("/>")?" ":"";o+=r===P?l+Ct:h>=0?(i.push(v),l.slice(0,h)+"$lit$"+l.slice(h)+y+j):l+y+(h===-2?(i.push(void 0),a):j)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Z!==void 0?Z.createHTML(c):c,i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,a=this.parts,[l,v]=kt(t,e);if(this.el=N.createElement(l,i),A.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=A.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(y)){const f=v[r++];if(d.push(h),f!==void 0){const j=s.getAttribute(f.toLowerCase()+"$lit$").split(y),I=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:I[2],strings:j,ctor:I[1]==="."?Nt:I[1]==="?"?Ht:I[1]==="@"?jt:M})}else a.push({type:6,index:o})}for(const h of d)s.removeAttribute(h)}if(bt.test(s.tagName)){const d=s.textContent.split(y),h=d.length-1;if(h>0){s.textContent=x?x.emptyScript:"";for(let f=0;f<h;f++)s.append(d[f],k()),A.nextNode(),a.push({type:2,index:++o});s.append(d[h],k())}}}else if(s.nodeType===8)if(s.data===yt)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){var s,o,r,c;if(t===_)return t;let a=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const l=O(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=a:e._$Cu=a),a!==void 0&&(t=E(n,a._$AS(n,t.values),a,i)),t}class Ot{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:C).importNode(i,!0);A.currentNode=o;let r=A.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let v;l.type===2?v=new T(r,r.nextSibling,this,t):l.type===1?v=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(v=new It(r,this,t)),this.v.push(v),l=s[++a]}c!==(l==null?void 0:l.index)&&(r=A.nextNode(),c++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==_&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Et(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&O(this._$AH)?this._$AA.nextSibling.data=t:this.k(C.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new Ot(o,this),c=r.p(this.options);r.m(i),this.k(c),this._$AH=r}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new N(t)),e}S(t){$t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new T(this.M(k()),this.M(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=E(this,c[i+a],e,a),l===_&&(l=this._$AH[a]),r||(r=!O(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Nt extends M{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const Tt=x?x.emptyScript:"";class Ht extends M{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,Tt):this.element.removeAttribute(this.name)}}class jt extends M{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:u)===_)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const nt=window.litHtmlPolyfillSupport;nt==null||nt(N,T),((R=globalThis.litHtmlVersions)!==null&&R!==void 0?R:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,B;class m extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _}}m.finalized=!0,m._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:m});const ot=globalThis.litElementPolyfillSupport;ot==null||ot({LitElement:m});((B=globalThis.litElementVersions)!==null&&B!==void 0?B:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){window.customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function U(n){return(t,e)=>e!==void 0?((i,s,o)=>{s.constructor.createProperty(o,i)})(n,t,e):Mt(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null;var Ut=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Lt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Dt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ut(t,e,s),s};let Rt=(n,t)=>{let e=0;n.forEach(i=>{i.isIntersecting&&(setTimeout(()=>{i.target.show()},e*100),e++)})};const zt=new IntersectionObserver(Rt,{rootMargin:"-100px"});let rt=class extends m{static get styles(){return $`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 2deg)) translate(0, 0px);
      }
      :host(:hover) {
        transform: rotate(var(--rot, 2deg)) translate(0, 0px) scale(1.0069);
        box-shadow: #00000005 2px 4px 24px;
      }
      .wrapper {
        padding: 30px 20px;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
        background: white;
      }
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*4}deg`),zt.observe(this)}render(){return p`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};rt=Lt([g("nida-card")],rt);var Bt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,H=(n,t,e,i)=>{for(var s=i>1?void 0:i?qt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Bt(t,e,s),s};let S=class extends m{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return $`
			:host {
				display: contents;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: opacity 0.5s ease;
				opacity: 1;
			}

			img.hidden {
				opacity: 0;
			}
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(n,t,e){super.attributeChangedCallback(n,t,e),n==="src"&&(this._image.src=e,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return p`${this._image}`}};H([U({type:String})],S.prototype,"src",2);H([U({type:String})],S.prototype,"alt",2);H([U({type:String})],S.prototype,"width",2);H([U({type:String})],S.prototype,"height",2);S=H([g("aui-lazyimage")],S);var Kt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Vt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Wt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Kt(t,e,s),s};let at=class extends m{constructor(){super(...arguments),this.cards=[],this.init=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("cards",t=>{this.cards=t.detail});const n=document.querySelector(".page");if(n)n.addEventListener("scroll",()=>{!this.init&&this.cards.length>0&&(this.init=!0,this.requestUpdate())});else throw new Error("Something went wrong")}renderMedia(n){switch(n.type){default:return n.embed?p`<iframe
            src="${n.embed}"
            width="100%"
            height="280px"
            style="border: none;"
            allow="autoplay"
          ></iframe>`:p`Media not suppoerted. ${n.type}`}}renderCard(n){return p`
      <nida-card>
        <div class="message">
          <nida-message>${n.message}</nida-message>
        </div>

        ${n.media?p` <div class="media">${this.renderMedia(n.media)}</div> `:""}

        <div class="name">
          <span>${n.name}</span>
        </div>
      </nida-card>
    `}render(){if(!this.init)return;const n=[];let t=0;for(let e of this.cards){const i=t%3;n[i]=n[i]||[],n[i].push(e),t++}return p`
      <div class="grid">
        ${n.map(e=>p`
            <div class="column">
              ${e.map(i=>this.renderCard(i))}
            </div>
          `)}
      </div>
    `}};at=Vt([g("nida-cardlist")],at);const Yt=["nidali1NidaHeart nidali1NidaHeart","When's your birthday? Is it this year?","Uranus","nidali1Pew","nidali1NidaHype nidali1NidaHype nidali1NidaHype"];var Xt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Gt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ft(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Xt(t,e,s),s};let lt=class extends m{constructor(){super(...arguments),this.messages=[]}static get styles(){return $`
      :host {
        display: block;
        position: absolute;
        bottom: 120px;
        margin: 10px;
        color: white;
      }
      .message {
        margin-top: 8px;
        animation: slide-up 0.2s ease;
      }
      @keyframes slide-up {
        from {
          transform: translate(0, 20px);
        }
      }
      .messages {
        overflow: hidden;
      }
      img {
        width: 32px;
      }
    `}connectedCallback(){super.connectedCallback();const n=()=>{const e=Yt,i=e[Math.floor(e.length*Math.random())],s=document.createElement("nida-message");s.className="message",s.innerHTML=i,this.messages.push(s),this.messages.length>5&&this.messages.shift()};n(),n(),n(),n();const t=()=>{n(),this.requestUpdate(),setTimeout(()=>t(),750*Math.random()+500*1.5)};t()}render(){return p`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `}};lt=Gt([g("nida-chat")],lt);var Jt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Qt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Zt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Jt(t,e,s),s};let dt=class extends m{constructor(n){super(),this.original=n,this.position=null}static get styles(){return $`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: black;
      }
      .content {
        height: auto;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        max-width: 900px;
        margin: auto;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}connectedCallback(){super.connectedCallback(),this.position=this.original.getBoundingClientRect(),window.addEventListener("keydown",n=>{n.key==="Escape"&&this.close()})}updated(){var t;const n=(t=this.shadowRoot)==null?void 0:t.querySelector(".content");!n||!this.position||(n.style.width=this.position.width+"px",n.style.height=this.position.height+"px",n.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`,n.offsetHeight,this.original&&(this.original.style.opacity="0",this.original.style.transition="opacity .125s ease"),n.style.transform="translate(0, 0)",n.style.width="900px",n.style.height="auto")}close(){this.remove(),this.original&&(this.original.style.opacity="")}render(){return p`
      <div
        class="blackbox"
        @click="${n=>{n.target.className==="blackbox"&&this.close()}}"
      >
        <div class="close-btn" @click="${n=>this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};dt=Qt([g("image-show")],dt);const te=[{date:"18/07/2022 22:13:09",message:`Nidaaa nidali1NidaHeart 

Alles gute zum Geburtstag ma friend!
Im so glad I got to know you and see you create this community.

I hope you have a great day and I'm looking forward to many more fun moments with you nidali1NidaHeart nidali1NidaHeart`,media:null,name:"luckydye"},{date:"17/07/2022 15:12:20",message:`Being part of your community has been awesome. Seeing you as well as others in the community grow and bond has been amazing. Thank you for creating this wonderful community with such awesome people and allowing me to become a part of it. It has genuinely become my favorite place over the months.

I feel like you will accomplish so much and will always be here to follow along! I envy your dedication, and respect you a lot as a person as well as a good friend. Looking forward to getting to know you irl this year. Thank you for always caring and being so incredibly kind. I really appreciate you! 

Happy Birthday Nida! Have an amazing Birthday ^^`,media:null,name:"Charan"},{date:"17/07/2022 23:28:18",message:`YO NIDA! Happy 21st birthday! It hasn\u2019t been long since I\u2019ve met you but I\u2019m glad I did!

I look forward to meeting in Korea!
Keep up the good work mate `,media:null,name:"BangTTS"},{date:"18/07/2022 15:06:53",message:"happy birthday nida i know we dont know each other but i did silently lurked in some of your streams  like a hawk and i will stop by properly have a wonderful birthday you are an amazing person ",media:null,name:"destroyer "},{date:"18/07/2022 15:50:50",message:"Happy 50th Birthday Space Callisto!!!!  nidaClown :yasBih",media:null,name:"Ecl"},{date:"18/07/2022 21:07:02",message:"Wishing you the happies birthday and healthiest life. May your pillow be cold on both sides nidali1NidaHeart (There will be a short video for you so extra uwu warning ahead! )",media:{src:"media/1T9wR-W2r6-NXxkx9IC8EJSn_KRH6l91d.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1T9wR-W2r6-NXxkx9IC8EJSn_KRH6l91d/preview"},name:"Dende"},{date:"19/07/2022 14:26:24",message:"GEFELICITEERD NIDAAA. I hope you have a great day. You\u2019ve created an amazing community and I\u2019m very glad I get to be a part of it. Cheers to more life and more blessings coming ur way nidali1NidaHeart",media:null,name:"stylo"},{date:"19/07/2022 14:28:05",message:"HAPPY BIRTHDAY NIDA! Thanks for putting a smile on our faces and making our days that little bit better with your antics. I hope all your wishes and dreams come true. Time to finally break out that lobster. NidaHeart",media:null,name:"ACE"},{date:"19/07/2022 17:23:10",message:`Happy Birthday Nida! nidali1Pew Happy Forever 21! nidali1Pew 
Wish nothing but the best for you and that you will always be forever beautiful like this nidaClown   `,media:null,name:"Niessuh21"}],ee={showPage(){const n=document.querySelector(".page");n&&(n.removeAttribute("loading"),window.dispatchEvent(new CustomEvent("cards",{detail:te})))}},ct=["Hey Nida :)","Im sorry to remind you,","but I think today is your brithday!","And sorry again, we did not buy any gifts for you :(","But instead, we tell you how much we all appreciate you! :)"];var ie=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ne=(n,t,e,i)=>{for(var s=i>1?void 0:i?se(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ie(t,e,s),s};let ht=class extends m{constructor(){super(),this.index=-1,location.hash!=="#intro"&&this.onEnded()}static get styles(){return $`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: inherit;
        filter: contrast(1.1);
      }
      .overlay {
        object-fit: cover;
        opacity: 0.1;
        pointer-events: none;
        position: absolute;
        z-index: 1000;
      }
      .container {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
        padding: 40px;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 20%;
        transform: translateX(-50%);
        color: #333;
        animation: attention 3s ease infinite both;
      }
      @keyframes attention {
        0% {
          opacity: 1;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .title {
        font-size: 48px;
        font-weight: bold;
        color: #333;
      }
      strong {
        font-weight: bold;
      }
    `}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("keydown",this.onKeyDown.bind(this)),this.addEventListener("click",()=>{this.next()}),this.next()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(n){n.code==="Space"&&this.next()}next(){this.index++,this.index>ct.length-1?this.onEnded():(this.headline=ct[this.index],this.requestUpdate())}onEnded(){location.hash="",localStorage.setItem("into-finished","true"),ee.showPage(),this.remove()}render(){return p`
      <img
        class="overlay"
        width="100%"
        height="100%"
        src="./images/noise.png"
      />
      <div class="container">
        <types-text class="title">${this.headline}</types-text>
      </div>

      <div class="info-message">Press <strong>Space</strong> to continue.</div>
    `}};ht=ne([g("nida-intro")],ht);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=n=>(...t)=>({_$litDirective$:n,values:t});class ae{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class W extends ae{constructor(t){if(super(t),this.it=u,t.type!==oe.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||t==null)return this.ft=void 0,this.it=t;if(t===_)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}W.directiveName="unsafeHTML",W.resultType=1;const le=re(W),ut={nidali1Clown:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0"
  />`,nidali1Slam:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_3198daa9971143cbbc0bdbc44d8d87a0/default/dark/2.0"
  />`,nidali1Rage:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b5c7966f57434590b767045a150975dc/default/dark/2.0"
  />`,nidali1Yes:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a9dc49e835ae4b1381bfa4ed520b7882/default/dark/2.0"
  />`,nidali1Knife:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_2aa813508979418492e8d778ccd8d3df/default/dark/2.0"
  />`,nidali1Pew:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b9227add596045da95066c117d899695/default/dark/2.0"
  />`,nidali1Pog:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_7a256807916c4f609de80dc7d71bc8dd/default/dark/2.0"
  />`,nidali1Thankyou:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_956e65ab20d048dc97c99ff52e296200/default/dark/2.0"
  />`,nidali1NidaCry:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ecd71f3ad1c349459c0e64cd3e63eabd/default/dark/2.0"
  />`,nidali1NidaHeart:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"
  />`,nidali1NidaWave:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_5c9c5b1b75434261b39c615ad3b62dba/default/dark/2.0"
  />`,nidali1PowderPat:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2e29618473840c88b58137ff8b5f9de/default/dark/2.0"
  />`,nidali1NidaHype:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_da86360a2caa405199c8e270013f3ecd/default/dark/2.0"
  />`,nidali1Huh:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_8125272c5aba40fc839d7b62adef22ca/default/dark/2.0"
  />`,nidali1Sip:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_99e6fc19b9d3409791243a93247b09a2/default/dark/2.0"
  />`,nidali1Oop:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_d8858cdff3d449518d523310776019d9/default/dark/2.0"
  />`,nidali1Swog:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_643649db5cfe49e38344033b8fb6518f/default/dark/2.0"
  />`,nidaClown:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0"
  />`,yasBih:`<img
    src="https://cdn.betterttv.net/emote/6167425a054a252a431ef190/2x"
  />`,":yasBih":`<img
    src="https://cdn.betterttv.net/emote/6167425a054a252a431ef190/2x"
  />`,NidaHeart:`<img
    src="//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"
  />`};var de=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,he=(n,t,e,i)=>{for(var s=i>1?void 0:i?ce(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&de(t,e,s),s};let pt=class extends m{constructor(){super(...arguments),this.content=""}static get styles(){return $`
      :host {
        display: block;
        text-align: left;
        font-size: 1rem;
        color: #333;
        margin: 4px 0;
      }

      p {
        white-space: pre-wrap;
        margin: 0;
      }

      img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
      }
    `}onContentChange(){const n=[...this.childNodes].find(s=>s.nodeName==="#text"),e=(n==null?void 0:n.data).split(" "),i=[];for(let s of e)s in ut?i.push(ut[s]):i.push(s);this.content=i.join(" "),this.requestUpdate()}render(){return p`
      <p class="message">${le(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `}};pt=he([g("nida-message")],pt);var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,me=(n,t,e,i)=>{for(var s=i>1?void 0:i?pe(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ue(t,e,s),s};let mt=class extends m{static get styles(){return $`
      :host {
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        pointer-events: none;
        transition: opacity 0.33s ease;
        z-index: 0;
        opacity: 0;

        animation: bounce 2s ease infinite both;
        animation-delay: 3s;
      }
      :host([shown]) {
        opacity: 1;
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-20px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
    `}connectedCallback(){super.connectedCallback();const n=document.querySelector(".page");if(n){const t=()=>{Math.floor(n.scrollTop/20)>0?this.removeAttribute("shown"):this.setAttribute("shown","")};n.addEventListener("scroll",t),t()}else throw new Error("Something went wrong")}render(){return p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="85.965"
        height="51.382"
        viewBox="0 0 85.965 51.382"
        class="scroll-indicator"
      >
        <defs>
          <filter
            id="Path_1"
            x="0"
            y="0"
            width="85.965"
            height="51.382"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="2" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
          <path
            id="Path_1-2"
            data-name="Path 1"
            d="M2931.512,1003.219l26.781,20.181,26.781-20.181"
            transform="translate(-2915.31 -989.02)"
            fill="none"
            stroke="#615051"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          />
        </g>
      </svg>
    `}};mt=me([g("scroll-indicator")],mt);var fe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ge=(n,t,e,i)=>{for(var s=i>1?void 0:i?ve(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&fe(t,e,s),s};async function ye(n){return new Promise(t=>{setTimeout(()=>{t(1)},n)})}let ft=class extends m{constructor(){super(...arguments),this.content=[],this.lastData=null}static get styles(){return $`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `}async onContentChange(){const n=[...this.childNodes].find(i=>i.nodeName==="#text"),t=n==null?void 0:n.data,e=t.split("");this.content=[],this.lastData=t;for(let i of e){if(this.lastData!=t)break;this.content.push(i),this.requestUpdate(),await ye(20+Math.random()*50)}}connectedCallback(){super.connectedCallback(),new MutationObserver(t=>{this.onContentChange()}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this.onContentChange()}render(){return p` ${this.content.join("")} `}};ft=ge([g("types-text")],ft);
