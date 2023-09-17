import{g as V}from"./_commonjsHelpers-de833af9.js";function Y(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in e)){const d=Object.getOwnPropertyDescriptor(o,r);d&&Object.defineProperty(e,r,d.get?d:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var T={},C={},l={},m={};Object.defineProperty(m,"__esModule",{value:!0});m.isDocument=m.isShadowRoot=m.isElement=void 0;function K(e){return e!=null&&e.nodeType===Node.ELEMENT_NODE}m.isElement=K;function Q(e){return e!=null&&e instanceof ShadowRoot}m.isShadowRoot=Q;function X(e){return e!=null&&e.nodeType===Node.DOCUMENT_NODE}m.isDocument=X;var h={},_={};Object.defineProperty(_,"__esModule",{value:!0});_.getConfig=_.configure=void 0;let w={includeShadowDom:!1};function J(e){w=Object.assign(Object.assign({},w),e)}_.configure=J;function Z(){return w}_.getConfig=Z;Object.defineProperty(h,"__esModule",{value:!0});h.querySelectorAll=h.getChildNodes=h.getParentNode=h.closest=void 0;const b=_,v=m;function x(e,...t){const n=e.closest(...t);if(n||!(0,b.getConfig)().includeShadowDom)return n;const o=e.getRootNode();return(0,v.isShadowRoot)(o)?x(o.host,...t):null}h.closest=x;function ee(e){return e.parentNode||!(0,b.getConfig)().includeShadowDom?e.parentNode:(0,v.isShadowRoot)(e)?e.host:null}h.getParentNode=ee;function F(e){return(0,b.getConfig)().includeShadowDom&&(0,v.isElement)(e)&&e.shadowRoot?F(e.shadowRoot):e.childNodes}h.getChildNodes=F;function te(e,...t){return(0,b.getConfig)().includeShadowDom?[e,...$([e])].reduce((o,r)=>[...o,...r.querySelectorAll(...t)],[]):Array.from(e.querySelectorAll(...t))}h.querySelectorAll=te;function $(e,t=[]){if(e.length===0)return t;const n=e.reduce((o,r)=>[...o,...ne(r)],[]);return $(n,[...t,...n])}function ne(e){const t=e.getRootNode({composed:!0}),n=[];if(!(0,v.isDocument)(t))return n;(0,v.isElement)(e)&&e.shadowRoot&&n.push(e.shadowRoot);const o=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_DOCUMENT_FRAGMENT,{acceptNode:oe});function r(d){const p=o.nextNode();return!(0,v.isElement)(p)||!p.shadowRoot?d:r([...d,p.shadowRoot])}return r(n)}function oe(e){return(0,v.isElement)(e)&&e.shadowRoot?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}Object.defineProperty(l,"__esModule",{value:!0});l.getTextContent=l.trimWhiteSpace=l.resolvePolitenessSetting=l.getClosestLiveRegion=l.isHidden=l.isInDOM=l.isLiveRegionAttribute=l.getClosestElement=l.getAllLiveRegions=void 0;const L=m,R=h,re=["status","log","alert"],q=['[role="status"]','[role="log"]','[role="alert"]','[aria-live="polite"]','[aria-live="assertive"]',"output"].join(", "),ie='[aria-hidden="true"]';function se(e){const t=R.querySelectorAll(e,q);return(0,L.isElement)(e)&&N(e)!=="off"&&U(e)?t.concat(e).filter(ce):t}l.getAllLiveRegions=se;function O(e){if((0,L.isElement)(e))return e;const t=R.getParentNode(e);return t?O(t):null}l.getClosestElement=O;function ue(e){return re.includes(e)||W(e)}l.isLiveRegionAttribute=ue;function U(e){const t=O(e);return t!=null&&R.closest(t,"html")!=null}l.isInDOM=U;function H(e){const t=O(e);if(!t||t.getAttribute("aria-hidden")==="true"||t.getAttribute("aria-live")==="off")return!0;const n=t.getAttribute("role");return n==="marquee"||n==="timer"?!0:R.closest(t,ie)!=null}l.isHidden=H;function P(e){return e?R.closest(e,q):null}l.getClosestLiveRegion=P;function W(e){return e==="polite"||e==="assertive"||e==="off"}function N(e){if(!e||!(0,L.isElement)(e))return"off";const t=e.getAttribute("aria-live");if(W(t))return t;const n=e.getAttribute("role");if(n==="marquee"||n==="timer")return"off";if(n==="status"||n==="log")return"polite";if(n==="alert")return"assertive";if(e.tagName.toLowerCase()==="output")return"polite";const o=P(e);return N(o===e?P(e.parentElement):o)}l.resolvePolitenessSetting=N;const le=/\s+/g;function D(e){const t=e.trim().replace(le," ");return t.length>0?t:null}l.trimWhiteSpace=D;function k(e){if(!e||H(e))return null;if(e.nodeType===Node.TEXT_NODE)return e.textContent?D(e.textContent):null;const t=R.getChildNodes(e);if(t.length===0)return null;const n=Array.from(t).map(k).filter(Boolean).join(" ");return D(n)}l.getTextContent=k;function ce(e,t,n){return n.indexOf(e)===t}var S={};Object.defineProperty(S,"__esModule",{value:!0});S.interceptMethod=S.interceptSetter=void 0;function fe(e,t,n){const o=Object.getOwnPropertyDescriptor(e,t);if(!o||!o.set)throw new Error(`Unable to intercept ${String(t)}. No descriptor available.`);const r=o.set;return o.set=function(p){const g=r.call(this,p);return n.call(this,p),g},Object.defineProperty(e,t,o),function(){o.set=r,Object.defineProperty(e,t,o)}}S.interceptSetter=fe;function ae(e,t,n,o="AFTER"){const r=e[t];if(typeof r!="function")throw new Error(`Expected ${String(t)} to be a function. Received ${typeof r}: ${r}`);if(typeof n!="function")throw new Error(`Expected method to be a function. Received ${typeof n}: ${n}`);function d(...p){o==="BEFORE"&&n.call(this,...p);const g=r.call(this,...p);return o==="AFTER"&&n.call(this,...p),g}return e[t]=d,function(){e[t]=r}}S.interceptMethod=ae;Object.defineProperty(C,"__esModule",{value:!0});C.__PrivateUnstableAPI=void 0;const a=l,c=S,A=m,de=_,f=new Map;function pe(e){(0,de.configure)({includeShadowDom:e.includeShadowDom||!1});const t=(i,u)=>{const s=(0,a.trimWhiteSpace)(i);s&&e.onCapture(s,u)};function n(i){if(f.size===0)return;const u=(0,a.getClosestElement)(i);if(!u)return;const s=(0,a.getClosestLiveRegion)(u);if(s){const E=(0,a.resolvePolitenessSetting)(s);if(E!=="off"&&(0,a.isInDOM)(s)){const I=f.get(s),y=(0,a.getTextContent)(s)||"";if((0,a.isHidden)(u)){I&&f.set(s,y);return}I!==y&&(t(y,E),f.set(s,y))}}}function o(i){if(f.has(i)||(0,a.isHidden)(i))return;const u=(0,a.resolvePolitenessSetting)(i);if(u==="off")return;const s=(0,a.getTextContent)(i);f.set(i,s),s&&i.getAttribute("role")==="alert"&&t(s,u)}function r(i){const u=(0,A.isElement)(i)?i:document;for(const s of(0,a.getAllLiveRegions)(u))o(s)}function d(){n(this)}function p(){n(this)}function g(i){r(i),n(i)}function M(){g(this)}function B(...i){if(!(0,A.isElement)(this)||!(0,a.isInDOM)(this)||!i[0])return;const[u]=i;switch(u){case"role":case"aria-live":{const s=f.has(this),E=(0,a.isLiveRegionAttribute)(i[1]);if(s&&!E){f.delete(this);return}if(!s&&E)return r(this);if(s&&E&&(0,a.resolvePolitenessSetting)(this)==="assertive")return n(this);break}case"aria-hidden":return r(this),n(this);default:return}}function G(...i){if(!(0,A.isElement)(this))return;const[u]=i;u==="aria-hidden"&&(r(this),n(this))}function j(...i){if(f.size===0)return;const[u]=i;if(u==null||!(0,A.isElement)(u))return n(this);const s=[u,...(0,a.getAllLiveRegions)(u)];for(const E of s)f.has(E)&&f.delete(E);n(this)}const z=[(0,c.interceptMethod)(DocumentFragment.prototype,"removeChild",j),(0,c.interceptMethod)(DocumentFragment.prototype,"append",g),(0,c.interceptMethod)(DocumentFragment.prototype,"prepend",g),(0,c.interceptMethod)(Element.prototype,"setAttribute",B),(0,c.interceptMethod)(Element.prototype,"removeAttribute",ge,"BEFORE"),(0,c.interceptMethod)(Element.prototype,"removeAttribute",G,"AFTER"),(0,c.interceptMethod)(Element.prototype,"removeChild",j),(0,c.interceptMethod)(Element.prototype,"insertAdjacentElement",M),(0,c.interceptMethod)(Element.prototype,"insertAdjacentHTML",M),(0,c.interceptMethod)(Element.prototype,"insertAdjacentText",M),(0,c.interceptMethod)(Element.prototype,"before",g),(0,c.interceptMethod)(Element.prototype,"append",g),(0,c.interceptMethod)(Element.prototype,"prepend",g),(0,c.interceptMethod)(Node.prototype,"appendChild",g),(0,c.interceptMethod)(Node.prototype,"insertBefore",g),(0,c.interceptMethod)(Node.prototype,"replaceChild",g),(0,c.interceptSetter)(Node.prototype,"textContent",d),(0,c.interceptSetter)(Node.prototype,"nodeValue",p)];return r(document),function(){z.splice(0).forEach(u=>u()),f.clear()}}C.default=pe;function ge(...e){if(f.size===0||!(0,A.isElement)(this))return;const[t]=e;this.hasAttribute(t)&&(t==="role"||t==="aria-live")&&f.has(this)&&f.delete(this)}C.__PrivateUnstableAPI={liveRegions:f};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=C;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})(T);const he=V(T),me=Y({__proto__:null,default:he},[T]),{useParameter:Ee,useChannel:ve,useEffect:_e}=__STORYBOOK_MODULE_ADDONS__;var Se="storybook/aria-live",Re={CAPTURE:`${Se}/capture`},Ae=ye(me);function Ce(e){let{includeShadowDom:t}=Ee("aria-live",{includeShadowDom:!1}),n=ve({});return _e(()=>Ae({includeShadowDom:t,onCapture:function(o,r){n(Re.CAPTURE,{textContent:o,politenessSetting:r})}}),[t]),e()}function ye(e){var t;return((t=e.default)==null?void 0:t.default)||e.default}var be=[Ce];export{be as decorators};
//# sourceMappingURL=preview-685519bc.js.map