const $e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}};$e();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),J=new WeakMap;class fe{constructor(e,t,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(t,e))}return e}toString(){return this.cssText}}const Ae=n=>new fe(typeof n=="string"?n:n+"",void 0,q),w=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,a,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[s+1],n[0]);return new fe(t,n,q)},He=(n,e)=>{K?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),a=window.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=t.cssText,n.appendChild(i)})},F=K?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ae(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const X=window.trustedTypes,ke=X?X.emptyScript:"",Z=window.reactiveElementPolyfillSupport,Y={toAttribute(n,e){switch(e){case Boolean:n=n?ke:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ve=(n,e)=>e!==n&&(e==e||n==n),R={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ve};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const a=this._$Ep(i,t);a!==void 0&&(this._$Ev.set(a,i),e.push(a))}),e}static createProperty(e,t=R){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);a!==void 0&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const s=this[e];this[t]=a,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||R}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of i)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)t.unshift(F(a))}else e!==void 0&&t.push(F(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return He(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=R){var a,s;const o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){const h=((s=(a=i.converter)===null||a===void 0?void 0:a.toAttribute)!==null&&s!==void 0?s:Y.toAttribute)(t,i.type);this._$El=e,h==null?this.removeAttribute(o):this.setAttribute(o,h),this._$El=null}}_$AK(e,t){var i,a;const s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){const h=s.getPropertyOptions(o),r=h.converter,d=(a=(i=r==null?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof r=="function"?r:null)!==null&&a!==void 0?a:Y.fromAttribute;this._$El=o,this[o]=d(t,h.type),this._$El=null}}requestUpdate(e,t,i){let a=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ve)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,s)=>this[s]=a),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(a=>{var s;return(s=a.hostUpdate)===null||s===void 0?void 0:s.call(a)}),this.update(i)):this._$Ek()}catch(a){throw t=!1,this._$Ek(),a}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var a;return(a=i.hostUpdated)===null||a===void 0?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},Z==null||Z({ReactiveElement:$}),((D=globalThis.reactiveElementVersions)!==null&&D!==void 0?D:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var U;const H=globalThis.trustedTypes,V=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,we="?"+v,xe=`<${we}>`,k=document,P=(n="")=>k.createComment(n),E=n=>n===null||typeof n!="object"&&typeof n!="function",be=Array.isArray,Ne=n=>{var e;return be(n)||typeof((e=n)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,ee=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,te=/'/g,ie=/"/g,_e=/^(?:script|style|textarea|title)$/i,Ce=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=Ce(1),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ae=new WeakMap,Pe=(n,e,t)=>{var i,a;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=s._$litPart$;if(o===void 0){const h=(a=t==null?void 0:t.renderBefore)!==null&&a!==void 0?a:null;s._$litPart$=o=new T(e.insertBefore(P(),h),h,void 0,t!=null?t:{})}return o._$AI(n),o},A=k.createTreeWalker(k,129,null,!1),Ee=(n,e)=>{const t=n.length-1,i=[];let a,s=e===2?"<svg>":"",o=C;for(let r=0;r<t;r++){const d=n[r];let g,l,c=-1,y=0;for(;y<d.length&&(o.lastIndex=y,l=o.exec(d),l!==null);)y=o.lastIndex,o===C?l[1]==="!--"?o=Q:l[1]!==void 0?o=ee:l[2]!==void 0?(_e.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=b):l[3]!==void 0&&(o=b):o===b?l[0]===">"?(o=a!=null?a:C,c=-1):l[1]===void 0?c=-2:(c=o.lastIndex-l[2].length,g=l[1],o=l[3]===void 0?b:l[3]==='"'?ie:te):o===ie||o===te?o=b:o===Q||o===ee?o=C:(o=b,a=void 0);const j=o===b&&n[r+1].startsWith("/>")?" ":"";s+=o===C?d+xe:c>=0?(i.push(g),d.slice(0,c)+"$lit$"+d.slice(c)+v+j):d+v+(c===-2?(i.push(void 0),r):j)}const h=s+(n[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[V!==void 0?V.createHTML(h):h,i]};class S{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let s=0,o=0;const h=e.length-1,r=this.parts,[d,g]=Ee(e,t);if(this.el=S.createElement(d,i),A.currentNode=this.el.content,t===2){const l=this.el.content,c=l.firstChild;c.remove(),l.append(...c.childNodes)}for(;(a=A.nextNode())!==null&&r.length<h;){if(a.nodeType===1){if(a.hasAttributes()){const l=[];for(const c of a.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const y=g[o++];if(l.push(c),y!==void 0){const j=a.getAttribute(y.toLowerCase()+"$lit$").split(v),O=/([.?@])?(.*)/.exec(y);r.push({type:1,index:s,name:O[2],strings:j,ctor:O[1]==="."?Te:O[1]==="?"?je:O[1]==="@"?Oe:B})}else r.push({type:6,index:s})}for(const c of l)a.removeAttribute(c)}if(_e.test(a.tagName)){const l=a.textContent.split(v),c=l.length-1;if(c>0){a.textContent=H?H.emptyScript:"";for(let y=0;y<c;y++)a.append(l[y],P()),A.nextNode(),r.push({type:2,index:++s});a.append(l[c],P())}}}else if(a.nodeType===8)if(a.data===we)r.push({type:2,index:s});else{let l=-1;for(;(l=a.data.indexOf(v,l+1))!==-1;)r.push({type:7,index:s}),l+=v.length-1}s++}}static createElement(e,t){const i=k.createElement("template");return i.innerHTML=e,i}}function x(n,e,t=n,i){var a,s,o,h;if(e===_)return e;let r=i!==void 0?(a=t._$Cl)===null||a===void 0?void 0:a[i]:t._$Cu;const d=E(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==d&&((s=r==null?void 0:r._$AO)===null||s===void 0||s.call(r,!1),d===void 0?r=void 0:(r=new d(n),r._$AT(n,t,i)),i!==void 0?((o=(h=t)._$Cl)!==null&&o!==void 0?o:h._$Cl=[])[i]=r:t._$Cu=r),r!==void 0&&(e=x(n,r._$AS(n,e.values),r,i)),e}class Se{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:a}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:k).importNode(i,!0);A.currentNode=s;let o=A.nextNode(),h=0,r=0,d=a[0];for(;d!==void 0;){if(h===d.index){let g;d.type===2?g=new T(o,o.nextSibling,this,e):d.type===1?g=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(g=new Be(o,this,e)),this.v.push(g),d=a[++r]}h!==(d==null?void 0:d.index)&&(o=A.nextNode(),h++)}return s}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class T{constructor(e,t,i,a){var s;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cg=(s=a==null?void 0:a.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),E(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==_&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Ne(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==u&&E(this._$AH)?this._$AA.nextSibling.data=e:this.k(k.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=S.createElement(a.h,this.options)),a);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(i);else{const o=new Se(s,this),h=o.p(this.options);o.m(i),this.k(h),this._$AH=o}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new S(e)),t}S(e){be(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const s of e)a===t.length?t.push(i=new T(this.M(P()),this.M(P()),this,this.options)):i=t[a],i._$AI(s),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class B{constructor(e,t,i,a,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const s=this.strings;let o=!1;if(s===void 0)e=x(this,e,t,0),o=!E(e)||e!==this._$AH&&e!==_,o&&(this._$AH=e);else{const h=e;let r,d;for(e=s[0],r=0;r<s.length-1;r++)d=x(this,h[i+r],t,r),d===_&&(d=this._$AH[r]),o||(o=!E(d)||d!==this._$AH[r]),d===u?e=u:e!==u&&(e+=(d!=null?d:"")+s[r+1]),this._$AH[r]=d}o&&!a&&this.C(e)}C(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Te extends B{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===u?void 0:e}}const Ie=H?H.emptyScript:"";class je extends B{constructor(){super(...arguments),this.type=4}C(e){e&&e!==u?this.element.setAttribute(this.name,Ie):this.element.removeAttribute(this.name)}}class Oe extends B{constructor(e,t,i,a,s){super(e,t,i,a,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=x(this,e,t,0))!==null&&i!==void 0?i:u)===_)return;const a=this._$AH,s=e===u&&a!==u||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==u&&(a===u||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const ne=window.litHtmlPolyfillSupport;ne==null||ne(S,T),((U=globalThis.litHtmlVersions)!==null&&U!==void 0?U:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,L;class m extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return _}}m.finalized=!0,m._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:m});const se=globalThis.litElementPolyfillSupport;se==null||se({LitElement:m});((L=globalThis.litElementVersions)!==null&&L!==void 0?L:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=n=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:a,elements:s}=i;return{kind:a,elements:s,finisher(o){window.customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function M(n){return(e,t)=>t!==void 0?((i,a,s)=>{a.constructor.createProperty(s,i)})(n,e,t):Me(n,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;((W=window.HTMLSlotElement)===null||W===void 0?void 0:W.prototype.assignedElements)!=null;var De=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ue=(n,e,t,i)=>{for(var a=i>1?void 0:i?Re(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&De(e,t,a),a};let ze=(n,e)=>{let t=0;n.forEach(i=>{i.isIntersecting&&(setTimeout(()=>{i.target.show()},t*100),t++)})};const Le=new IntersectionObserver(ze,{rootMargin:"-100px"});let oe=class extends m{static get styles(){return w`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        background: white;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
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
        box-shadow: #00000010 2px 4px 24px;
      }
      .wrapper {
        padding: 30px 20px;
      }
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*4}deg`),Le.observe(this)}render(){return p`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};oe=Ue([f("nida-card")],oe);var We=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,I=(n,e,t,i)=>{for(var a=i>1?void 0:i?Ye(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&We(e,t,a),a};let N=class extends m{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return w`
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
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(n,e,t){super.attributeChangedCallback(n,e,t),n==="src"&&(this._image.src=t,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return p`${this._image}`}};I([M({type:String})],N.prototype,"src",2);I([M({type:String})],N.prototype,"alt",2);I([M({type:String})],N.prototype,"width",2);I([M({type:String})],N.prototype,"height",2);N=I([f("aui-lazyimage")],N);var Ge=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,qe=(n,e,t,i)=>{for(var a=i>1?void 0:i?Ke(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&Ge(e,t,a),a};let re=class extends m{constructor(){super(...arguments),this.cards=[],this.init=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("cards",e=>{this.cards=e.detail});const n=document.querySelector(".page");if(n)n.addEventListener("scroll",()=>{!this.init&&this.cards.length>0&&(this.init=!0,this.requestUpdate())});else throw new Error("Something went wrong")}renderMedia(n){switch(n.type){default:return n.embed?p`<iframe
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
    `}render(){if(!this.init)return;const n=[];let e=0;for(let t of this.cards){const i=e%3;n[i]=n[i]||[],n[i].push(t),e++}return p`
      <div class="grid">
        ${n.map(t=>p`
            <div class="column">
              ${t.map(i=>this.renderCard(i))}
            </div>
          `)}
      </div>
    `}};re=qe([f("nida-cardlist")],re);const Je=["nidali1Pew yasBih nidali1Pew yasBih nidali1Pew yasBih ","When's your birthday? Is it this year?","nidali1Pew nidali1Pew nidali1Pew","nidali1Pew nidali1NidaHeart nidali1Pew","nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype","nidali1NidaHype nidali1NidaHype nidali1NidaHype"];var Fe=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Ze=(n,e,t,i)=>{for(var a=i>1?void 0:i?Xe(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&Fe(e,t,a),a};let de=class extends m{constructor(){super(...arguments),this.messages=[]}static get styles(){return w`
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
    `}connectedCallback(){super.connectedCallback();const n=()=>{const t=Je,i=t[Math.floor(t.length*Math.random())],a=document.createElement("nida-message");a.className="message",a.innerHTML=i,this.messages.push(a),this.messages.length>5&&this.messages.shift()};n(),n(),n(),n();const e=()=>{n(),this.requestUpdate(),setTimeout(()=>e(),750*Math.random()+500*1.5)};e()}render(){return p`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `}};de=Ze([f("nida-chat")],de);var Ve=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,et=(n,e,t,i)=>{for(var a=i>1?void 0:i?Qe(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&Ve(e,t,a),a};let le=class extends m{constructor(n){super(),this.original=n,this.position=null}static get styles(){return w`
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
    `}connectedCallback(){super.connectedCallback(),this.position=this.original.getBoundingClientRect(),window.addEventListener("keydown",n=>{n.key==="Escape"&&this.close()})}updated(){var e;const n=(e=this.shadowRoot)==null?void 0:e.querySelector(".content");!n||!this.position||(n.style.width=this.position.width+"px",n.style.height=this.position.height+"px",n.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`,n.offsetHeight,this.original&&(this.original.style.opacity="0",this.original.style.transition="opacity .125s ease"),n.style.transform="translate(0, 0)",n.style.width="900px",n.style.height="auto")}close(){this.remove(),this.original&&(this.original.style.opacity="")}render(){return p`
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
    `}};le=et([f("image-show")],le);const tt=[{date:"18/07/2022 22:13:09",message:`Nidaaa nidali1NidaHeart 

Alles gute zum Geburtstag ma friend!
Im so glad I got to know you and see you create this community.

I hope you have a great day and I'm looking forward to many more fun moments with you nidali1NidaHeart nidali1NidaHeart`,media:null,name:"luckydye"},{date:"24/07/2022 14:52:50",message:`Being part of your community has been awesome. Seeing you as well as others in the community grow and bond has been amazing. Thank you for creating this wonderful community with such awesome people and allowing me to become a part of it. It has genuinely become my favorite place over the months.

I feel like you will accomplish so much and will always be here to follow along! I envy your dedication, and respect you a lot as a person as well as a good friend. Looking forward to getting to know you irl this year. Thank you for always caring and being so incredibly kind. I really appreciate you! 

Happy Birthday Nida! Have an amazing Birthday ^^ nidali1NidaHeart`,media:{src:"media/17dN___rCx08TU61m1v5R_HJoZE5W_iBN.png",type:"image/png",embed:"https://drive.google.com/file/d/17dN___rCx08TU61m1v5R_HJoZE5W_iBN/preview"},name:"Charan"},{date:"24/07/2022 14:28:16",message:`Bro,
Brooo,
BROOOOO! Its your freaking birthday today!! 

Hoch sollst du leben, hoch sollst du leben, dreimal hoch nidali1NidaHype 

HAPPY BIRTHDAY Nida! nidali1NidaHype
Cheers to you and all the amazing things you have accomplished so far! Wishing you the happiest of birthdays and many more! nidali1NidaHeart

Also, you suck at aging! Can you at least try to look older? hihi nidali1Pew

All the best,
Your drinking buddy Viet 

PS: Remember our first selfie toghether in Hongdae? T_T
`,media:{src:"media/1F6y24pxoZxmK3k12lgspTwprB0NmwtDo.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1F6y24pxoZxmK3k12lgspTwprB0NmwtDo/preview"},name:"Viet"},{date:"24/07/2022 04:38:01",message:`HAPPYY 30TH BURFDAYY!! nidali1NidaHype 
heute geht's nur um dich girl!! hope powda lets u hold her eeextra long today! nidali1PowderPat 
just 40y old and u managed to cultivate this awesome community to which i can proudly say 'i'm part of this' nidali1NidaHeart 
imma be corny rq- u and chat helped me in ways i cant even begin to describe! so..
thank u and cheers to more IRLing, slaying and pooping! nidali1Thankyou 
my fave ajumma strimmer.. TT 60y.. just wow :)

ps: spam peepooPooPoo chat`,media:{src:"media/1RioPriD1ucMbdAPpaE0AgdpqnIyl8vrJ.png",type:"image/png",embed:"https://drive.google.com/file/d/1RioPriD1ucMbdAPpaE0AgdpqnIyl8vrJ/preview"},name:"eleganto poopi"},{date:"24/07/2022 14:35:15",message:`Happy Birthday Nida! You're such an amazing, talented and wholesome person! you truly deserve all the happiness in the world and I'm so glad to have been a part of the best community on twitch nidali1NidaHeart . I'm sure everyone around you gets to learn something new from you and you've always inspired me as a person I really like how you're honest and dedicated in everything you do and care about the teensy tiniest things and I've always wanted to say that you have such a cute laugh which always cheers me up. Its another year of you being wise beyond your ears and even more crazier but never stop doing what you love, Wish you a lot of success in all of your ventures in life be it modeling, singing, dancing, streaming, or acting I know you'll be amazing at everything you do. Happy Birthday Nida/Poopy Head/cult leader/chicken gang/nidaliada!  nidali1NidaHype 
- Jash `,media:{src:"media/1NyXrTLZRv0MyupGTcti7xpqH5j-Xx0gC.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1NyXrTLZRv0MyupGTcti7xpqH5j-Xx0gC/preview"},name:"Jash"},{date:"17/07/2022 23:28:18",message:`YO NIDA! Happy 21st birthday! It hasn\u2019t been long since I\u2019ve met you but I\u2019m glad I did!

I look forward to meeting in Korea!
Keep up the good work mate `,media:null,name:"BangTTS"},{date:"18/07/2022 15:06:53",message:"happy birthday nida i know we dont know each other but i did silently lurked in some of your streams  like a hawk and i will stop by properly have a wonderful birthday you are an amazing person ",media:null,name:"destroyer "},{date:"18/07/2022 15:50:50",message:"Happy 50th Birthday Space Callisto!!!!  nidaClown :yasBih",media:null,name:"Ecl"},{date:"18/07/2022 21:07:02",message:"Wishing you the happies birthday and healthiest life. May your pillow be cold on both sides nidali1NidaHeart (There will be a short video for you so extra uwu warning ahead! )",media:{src:"media/1T9wR-W2r6-NXxkx9IC8EJSn_KRH6l91d.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1T9wR-W2r6-NXxkx9IC8EJSn_KRH6l91d/preview"},name:"Dende"},{date:"19/07/2022 14:26:24",message:"GEFELICITEERD NIDAAA. I hope you have a great day. You\u2019ve created an amazing community and I\u2019m very glad I get to be a part of it. Cheers to more life and more blessings coming ur way nidali1NidaHeart",media:null,name:"stylo"},{date:"19/07/2022 14:28:05",message:"HAPPY BIRTHDAY NIDA! Thanks for putting a smile on our faces and making our days that little bit better with your antics. I hope all your wishes and dreams come true. Time to finally break out that lobster. NidaHeart",media:null,name:"ACE"},{date:"19/07/2022 17:23:10",message:`Happy Birthday Nida! nidali1Pew Happy Forever 21! nidali1Pew 
Wish nothing but the best for you and that you will always be forever beautiful like this nidaClown   `,media:null,name:"Niessuh21"},{date:"19/07/2022 20:25:39",message:"Happy Birthday Nida! I'm so happy to have stumbled upon you! There's great things ahead!",media:null,name:"Niveus"},{date:"20/07/2022 15:52:20",message:"Happppppy Birthday Nida. Wish you a year full of poops and surprises. Stay Happy, blessed and beautiful Always :nidali1NidaHeart: :nidali1NidaHeart:",media:{src:"media/14fdj8ax4UJnq4wu-6BQh1TbJf-r1m8za.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/14fdj8ax4UJnq4wu-6BQh1TbJf-r1m8za/preview"},name:"Akshay Khanna (Red Titan Poopy)"},{date:"20/07/2022 17:35:53",message:`Happy 30th oh i mean 28th birthday!  \u{1F38A}\u{1F973} \u{1F381} \u{1F389}\u{1F38A}.Thank you for bringing all the joy and laughter into our lives with your quirky personality and litt streams. It was great to see you go from "what is loggey tech? " to streaming flawlessly with nintendo switch. We've noticed the amount of time and dedication you've committed into making the stream enjoyable for us viewers and for that kamsamNIDA nidali1Thankyou . Here's to creating many more great memories with you and the community nidali1Pew nidali1NidaHeart  (This is where i redeem hydrate) CHEERS \u{1F942} *cling* \u{1F942}`,media:null,name:"NotYo\u{1F4A9}"},{date:"21/07/2022 01:00:49",message:"hi Nida HAHAHAHAHA getting older BBoomer. Hope you are blessed with health, wealth and may all your wishes/dreams come true. Keep being wholesome like you always did. Whats for dinner Nida?",media:null,name:"Fir "},{date:"21/07/2022 08:10:04",message:"Happy Birthday Nida! nidali1NidaHeart ! I hope you have a very nice day!  Keep sparkling joy :)",media:null,name:"Treehousewrath"},{date:"21/07/2022 11:18:13",message:'Aus der Heimat alles Liebe. Ich denke du wei\xDFt, wen die "Kacke" am dampfen ist, kannst du immer mit meiner Hilfe rechnen. PS: Als Model sind die B-days eigentlich Trauertage. Aber je reifer die Frucht umso saftiger und s\xFC\xDFer der Geschmack.',media:{src:"media/1082fTpoJFzbj-GRUujiMGSc9REjjhkax.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1082fTpoJFzbj-GRUujiMGSc9REjjhkax/preview"},name:"Taschentuchi"},{date:"21/07/2022 14:37:06",message:`Hi Nida nidali1NidaWave ,
I know we just met recently but a very Happy Birthday to you, keep being yourself and may all your wishes come true nidali1NidaHeart Let me share some German birthday wisdom with you on your special day:
Leb deinen Traum, denn er wird wahr. Geh deinen Weg, stelle dich der Gefahr. Alles was wichtig ist, wirst du erkennen wenn die Zeit gekommen ist. Greif nach den Sternen, du bist bereit. Glaub an dich, bald ist es so weit. Wir werden bei dir sein.

Happy happy Birthday nidali1Pew 
`,media:null,name:"Samurai_hamster"},{date:"21/07/2022 15:26:55",message:"HAPPIESTT BDAYYY NIDAA!! God blessing you and keep being the incredible and sweet person you are!!! you are so lovedd and you are amazinggg!! BIG LOVE AND HUG FROM ME !!! ",media:null,name:"Sharon"},{date:"22/07/2022 11:19:14",message:"Happy Birthday! Wishing lots of blessing and happiness!  Even tho im rarely in your community!",media:null,name:"Candy3z"},{date:"22/07/2022 13:00:59",message:`NIDAAA
HAPPY BIRTHDAY NIDA!!!
Man there's numerous things I could say about how much of an amazing person you are, you are so sweet, so lovable and caring of a human being. Honestly the best kind of person to be around. I am so happy to discover your channel through will's streams otherwise I would have not known of how much of a fun and interesting person you are. Truly there are a lot of things that I'm grateful to you and I'm thankful that I am able to drop by your streams and have a great time with you and your community. 
I could go on and on about all the things about why I'm grateful to you but i know i don't have the luxury for long messages (because I'm not the only one writing this so heheh). But once again Happy birthday Nida and i wish you the best birthday with all the yummy foods that are waiting for you.

by yours truly
Katsu nidali1NidaHeart`,media:{src:"media/1qpaVRsNfU37jJn1-m_YKOHT3RT8ObRIS.png",type:"image/png",embed:"https://drive.google.com/file/d/1qpaVRsNfU37jJn1-m_YKOHT3RT8ObRIS/preview"},name:"SEIKATSU"},{date:"22/07/2022 14:06:56",message:"Hi Nida, happy birthday to you. Hope you have a blast and a wonderful time <3 Really like watching your streams and the fun content you put out. Even though I may not chat much or seem like I'm not there know that I am always lurking (at least to the stream I do make it to). Once again have a very happy birthday Nida nidali1Pew nidali1NidaHype nidali1NidaHeart ",media:null,name:"Mastema51"},{date:"22/07/2022 18:51:17",message:"Didn't go to Greece or got tanned but here you go",media:{src:"media/1JglMhJFsTAfzZh07Hbi4yGDdAXGWgFCW.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1JglMhJFsTAfzZh07Hbi4yGDdAXGWgFCW/preview"},name:"sanddrifter"},{date:"22/07/2022 21:06:34",message:"Happy Birthday nidali1NidaHeart ",media:null,name:"Tim"},{date:"22/07/2022 21:24:15",message:"I just wanted to take this opportunity and say sorry and a very Happy Birth Anniversary to you Lutz Von Nida. Sending this E-Puddingteilchen for your indulgence. ",media:{src:"media/1cSsBcdwOGQ1oB1UbrM-PUamiB9QaGb53.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1cSsBcdwOGQ1oB1UbrM-PUamiB9QaGb53/preview"},name:"the worst OG oat"},{date:"23/07/2022 02:26:16",message:"\uB2C8\uB2E4\uB204\uB098  \uC0DD\uC77C\uCD95\uD558\uD574\uC6A9. \uC6B0\uB9AC \uB204\uB098\uAC00 \uB108\uBB34 \uC608\uC05C\uD558\uACE0 \uAFC0\uC7BC \uC0AC\uB78C\uC774\uC5D0\uC694. That's as far my Korean goes. Congratulations on turning 22 this year! KEKW Our dear Nidar, wishing you the best of health and luck on your career. ",media:null,name:"\uC624\uB2C8\uC628 \uD558\uC138\uC694? \uAC10\uC790 \uD569\uBBF8\uB2E4?"},{date:"23/07/2022 02:43:06",message:"nidali1NidaWave Happy Birthday Nida. I am very happen to have found your stream through Rei. You have a very great and fun personality. Hope I am able to meet the cool Nida one day. Have a great birthday. Hope you always stay healthy and continue being the great person you are! nidali1NidaHeart nidali1Pew nidali1Pew",media:null,name:"Pingdd7"},{date:"23/07/2022 08:43:01",message:"\xA1Feliz Cumplea\xF1os! Today is your day to be the center of attention, well something called Powder might take some. Coke jokes are probably not very accessible to most so I will put that line away and instead try for a line to Katsu. Ok back to you, the birthday queen! It has been great getting to know you through chats as well as a pleasure meeting a group of awesome people from your community that you have fostered. In case I don't tell you enough, I really appreciate your streams and I'm so grateful for all that you do.",media:{src:"media/1-nYwHki3XtiamkiGNOi2qgeFO8cOrWS7.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1-nYwHki3XtiamkiGNOi2qgeFO8cOrWS7/preview"},name:"SputNikPlop"},{date:"23/07/2022 10:13:34",message:"nida u slay guurrrll u so fine queeen anyways I hope u celebrate your birthday like the day you were born, naked, screaming, and covered in blood. love xoxo \u015Fi\u015Fedibi",media:null,name:"\u015Fi\u015Fedibitanrisi"},{date:"23/07/2022 10:32:28",message:"HAPPY BIRTHDAY NIDA nidali1NidaHeart nidali1NidaHype",media:{src:"media/1Y1ABPrighgFlYrw3x9OBjWTjK4AIrkKD.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1Y1ABPrighgFlYrw3x9OBjWTjK4AIrkKD/preview"},name:"Tommy"},{date:"23/07/2022 13:39:48",message:"Happy Birthday Nidaaa!! Knowing you is one of the biggest blessings last year and I'm glad to have you as a fren nidali1NidaHeart I hope you nothing but the best and continue to thrive in everything that you do nidali1NidaHype Hope we can meet soon one day! nidali1Pew",media:null,name:"LadyReii"},{date:"23/07/2022 14:25:58",message:"Happy Birthday my MJ Queen, love the streams, thanks for all the good times on stream ",media:{src:"media/1CCTSs6N4cR3aXrkckgAb9qHGCaMzP1ne.gif",type:"image/gif",embed:"https://drive.google.com/file/d/1CCTSs6N4cR3aXrkckgAb9qHGCaMzP1ne/preview"},name:"os_x_esquilax"},{date:"23/07/2022 16:15:53",message:"Hi ms. Nida. I would like to wish you a happy birthday. I hope that you will be successful in reaching you goals and endure in your future endeavors. nidali1NidaHeart nidali1NidaHeart",media:null,name:"Juniopawzzz"},{date:"23/07/2022 17:22:43",message:"Happy birthday to the best gal~~~ \u{1F382}\u{1F382}, I'm waiting for you to be Korea's next top model",media:null,name:"Starkie"},{date:"23/07/2022 17:44:49",message:"Happy Birthday",media:null,name:"Siege84"},{date:"23/07/2022 17:49:41",message:`Happy Birthday! I hope you win all your 50/50s on genshin! Prayge
and remember to smile awkwardly when people sing you a Happy Birthday KEKW`,media:null,name:"FizzuDesu"},{date:"23/07/2022 21:33:35",message:"Happy Birthday Nida!! Hope you have a great one. Thank you for not being annoyed with us. The past year we learned so much from you. How you are yourself and not ashamed of whom you are. Thank you for always putting a smile on each of your viewers smile. Keep being you. Also do you want to do a chat movie (pg-13 not Japanese lesbian) night? Hehe ",media:null,name:"Duyphamm"},{date:"23/07/2022 21:38:07",message:"Hello Nida! This is duane. I wish you a happy birthday and all the happiness you deserve. Meowlone, M'baku and Elvis are sending you love too. I'm always thankful to have you as my friend. You are sweet, kind and gorgeous. Stay healthy sis. Love ya.",media:{src:"media/1GCwwpmbKtjUhXuYCKGGkHZw2zTdDj47I.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1GCwwpmbKtjUhXuYCKGGkHZw2zTdDj47I/preview"},name:"Duane"},{date:"24/07/2022 02:02:40",message:`Happy Birthday Nida, Thank you for all the streams who could of thought that asking a streamer to help lift a hex from me could result in such a pleasant experience not only with you but also with your community who have been nothing but a pleasure to interact with. 

I hope your birthday is filled with love and positivity, 

Grove Street 4 life xxoo`,media:{src:"media/1E-4s712ktHo80IkcluJEELOTeNvOWnCM.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1E-4s712ktHo80IkcluJEELOTeNvOWnCM/preview"},name:"Neo_Zeong"},{date:"24/07/2022 13:55:44",message:"A true friend remembers your birthday but not your age... Happy Birthday!!",media:null,name:"Karlostdmc"},{date:"24/07/2022 15:06:41",message:"My babe Nida! Happy birthday to my lovely famous streamer and amazing model friend~ cannot wait to celebrate together \u{1F389} for more years being amazingly cool and doing what u love in life, I\u2019ll be always cheering for you \u{1F90D} love ya tons \u263A\uFE0F",media:{src:"media/1xBUN6LLOQsOaS37niWs7I4D8zvVDISzW.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1xBUN6LLOQsOaS37niWs7I4D8zvVDISzW/preview"},name:"Hemwild"},{date:"24/07/2022 15:39:07",message:"\uC0DD\uC77C \uCD95\uD558\uD574 \uC0AC\uB791\uD558\uB294 \uB2C8\uB2E4\uC528 nidali1NidaHeart You might be a year older but you're also a year wiser nidali1Pew So make the most of it and have an another amazing year \uB2C8\uB2E4\uC528. \uC0AC\uB791\uD574 nidali1Pew",media:null,name:"\uC2A4\uD330 \uBC1C\uAC74 (SpareFalcon6)"},{date:"24/07/2022 15:50:34",message:`Hi Nida,
Just want to say I appreciate you and the poop community you have harvested. You are a smrt, funny, cool, dank, memey, wonderful, beautiful, edumacated and kind hearted hoomans. Don't say nuor cause I am a expert on great and shitty humans. Thank you for bringing so much funnies and awesomeness to our lives Nida. We love youu. Baiiiii`,media:{src:"media/1wAi6ZwZpdF3bQP2_r0esILk1zjYaxnuP.png",type:"image/png",embed:"https://drive.google.com/file/d/1wAi6ZwZpdF3bQP2_r0esILk1zjYaxnuP/preview"},name:"1o11er poop"},{date:"24/07/2022 16:15:52",message:"Hey Nida! Happy birthday to youuu \u{1F382} I would have loved to be here like you were for my bday, but I wish you are having a blast anyway and eat some cake, or some chicken butthole which is the legacy you left me hahaha \u{1F440} thank you so much for the norebang nights and time spent together, which was short but super fun \u{1F601} best wishes from me and Marta!!",media:null,name:"MarcRyuu"}],he={showPage(){const n=document.querySelector(".page");n&&(n.removeAttribute("loading"),window.dispatchEvent(new CustomEvent("cards",{detail:tt})))}},ce=["Hey Nida!","Im sorry to remind you,","but today is your birthday! :O","To celebrate,","we decided to make a game for you.","jk","But look at this!"];var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,nt=(n,e,t,i)=>{for(var a=i>1?void 0:i?at(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&it(e,t,a),a};let ue=class extends m{constructor(){super(),this.index=-1,location.hash!=="#intro"&&(location.hash="",localStorage.setItem("into-finished","true"),he.showPage(),this.remove())}static get styles(){return w`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        color: #333;
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
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translateX(-50%);
        color: inherit;
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
        color: inherit;
      }
      strong {
        font-weight: bold;
      }
    `}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("keydown",this.onKeyDown.bind(this)),this.next()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(n){n.code==="Space"&&this.next()}next(){this.index++,this.index>ce.length-1?this.onEnded():(this.headline=ce[this.index],this.requestUpdate())}onEnded(){location.hash="";const n=document.createElement("video");n.src="./nida-bday-king.mp4",n.muted=!0,n.className="intro-video",n.oncanplay=()=>{n.play()},n.onanimationend=()=>{n.remove()},document.body.append(n),setTimeout(()=>{localStorage.setItem("into-finished","true"),he.showPage(),this.remove()},3e3)}render(){return p`
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
    `}};ue=nt([f("nida-intro")],ue);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ot=n=>(...e)=>({_$litDirective$:n,values:e});class rt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G extends rt{constructor(e){if(super(e),this.it=u,e.type!==st.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this.ft=void 0,this.it=e;if(e===_)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}G.directiveName="unsafeHTML",G.resultType=1;const dt=ot(G),pe={nidali1Clown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",nidali1Slam:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_3198daa9971143cbbc0bdbc44d8d87a0/default/dark/2.0",nidali1Rage:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b5c7966f57434590b767045a150975dc/default/dark/2.0",nidali1Yes:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a9dc49e835ae4b1381bfa4ed520b7882/default/dark/2.0",nidali1Knife:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_2aa813508979418492e8d778ccd8d3df/default/dark/2.0",nidali1Pew:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b9227add596045da95066c117d899695/default/dark/2.0",nidali1Pog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_7a256807916c4f609de80dc7d71bc8dd/default/dark/2.0",nidali1Thankyou:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_956e65ab20d048dc97c99ff52e296200/default/dark/2.0",nidali1NidaCry:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ecd71f3ad1c349459c0e64cd3e63eabd/default/dark/2.0",nidali1NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0",nidali1NidaWave:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_5c9c5b1b75434261b39c615ad3b62dba/default/dark/2.0",nidali1PowderPat:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2e29618473840c88b58137ff8b5f9de/default/dark/2.0",nidali1NidaHype:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_da86360a2caa405199c8e270013f3ecd/default/dark/2.0",nidali1Huh:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_8125272c5aba40fc839d7b62adef22ca/default/dark/2.0",nidali1Sip:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_99e6fc19b9d3409791243a93247b09a2/default/dark/2.0",nidali1Oop:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_d8858cdff3d449518d523310776019d9/default/dark/2.0",nidali1Swog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_643649db5cfe49e38344033b8fb6518f/default/dark/2.0",yasBih:"https://cdn.betterttv.net/emote/6167425a054a252a431ef190/2x",nidaClown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"};var lt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,ct=(n,e,t,i)=>{for(var a=i>1?void 0:i?ht(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&lt(e,t,a),a};function ut(n){return n.matchAll(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu)}let me=class extends m{constructor(){super(...arguments),this.content=""}static get styles(){return w`
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

      .emote img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
      }

      .emote {
        font-size: 32px;
        vertical-align: middle;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
      }
    `}onContentChange(){const n=[...this.childNodes].find(a=>a.nodeName==="#text"),t=(n==null?void 0:n.data).replaceAll(`
`,` 
`).split(" "),i=[];for(let a of t)if(a=a.replace(/:/g,""),a in pe)i.push(`<span class="emote"><img src="${pe[a]}" alt="${a}" /></span>`);else{let s=a;for(let o of ut(a))s=s.replace(o[0],`<span class="emote">${o[0]}</span>`);i.push(s)}this.content=i.join(" "),this.requestUpdate()}render(){return p`
      <p class="message">${dt(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `}};me=ct([f("nida-message")],me);var pt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,yt=(n,e,t,i)=>{for(var a=i>1?void 0:i?mt(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&pt(e,t,a),a};let ye=class extends m{static get styles(){return w`
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
    `}connectedCallback(){super.connectedCallback();const n=document.querySelector(".page");if(n){const e=()=>{Math.floor(n.scrollTop/20)>0?this.removeAttribute("shown"):this.setAttribute("shown","")};n.addEventListener("scroll",e),e()}else throw new Error("Something went wrong")}render(){return p`
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
    `}};ye=yt([f("scroll-indicator")],ye);var gt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,vt=(n,e,t,i)=>{for(var a=i>1?void 0:i?ft(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=(i?o(e,t,a):o(a))||a);return i&&a&&gt(e,t,a),a};async function wt(n){return new Promise(e=>{setTimeout(()=>{e(1)},n)})}let ge=class extends m{constructor(){super(...arguments),this.content=[],this.lastData=null}static get styles(){return w`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `}async onContentChange(){const n=[...this.childNodes].find(i=>i.nodeName==="#text"),e=n==null?void 0:n.data,t=e.split("");this.content=[],this.lastData=e;for(let i of t){if(this.lastData!=e)break;this.content.push(i),this.requestUpdate(),await wt(20+Math.random()*50)}}connectedCallback(){super.connectedCallback(),new MutationObserver(e=>{this.onContentChange()}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this.onContentChange()}render(){return p` ${this.content.join("")} `}};ge=vt([f("types-text")],ge);
