import{r as n}from"./index-d1441864.js";import"./_commonjsHelpers-de833af9.js";var V={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=n,C=Symbol.for("react.element"),k=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,N=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,i){var o,l={},s=null,p=null;i!==void 0&&(s=""+i),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(p=t.ref);for(o in t)A.call(t,o)&&!D.hasOwnProperty(o)&&(l[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)l[o]===void 0&&(l[o]=t[o]);return{$$typeof:C,type:e,key:s,ref:p,props:l,_owner:N.current}}m.Fragment=k;m.jsx=y;m.jsxs=y;V.exports=m;var r=V.exports;const F={title:"Example"};function a(){return r.jsx(f,{children:e=>r.jsx("div",{role:"status",children:e&&"Notification"})})}function c(){return r.jsx(f,{children:e=>r.jsx("div",{role:"alert",children:e&&"Alert"})})}function u(){return r.jsxs(r.Fragment,{children:[r.jsx(f,{children:e=>r.jsx("div",{role:"status",children:e&&"Notification"})}),r.jsx(f,{children:e=>r.jsx("div",{role:"alert",children:e&&"Alert"})})]})}function d(){const e=n.useRef(null),[t,i]=n.useReducer(s=>!s,!1),o=n.useMemo(()=>{const s=document.createElement("div");return s.textContent="Hello world",s},[]);function l(){t?e.current.shadowRoot.removeChild(o):e.current.shadowRoot.appendChild(o),i()}return n.useLayoutEffect(()=>{e.current.attachShadow({mode:"open"})},[]),r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:l,children:"Toggle"}),r.jsx("div",{"aria-live":"polite",ref:e})]})}function f({children:e}){const[t,i]=n.useReducer(o=>!o,!1);return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:i,children:"Toggle"}),e(t)]})}var g,h,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`function Status() {
  return <Toggle>
      {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
    </Toggle>;
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,b,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`function Alert() {
  return <Toggle>
      {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
    </Toggle>;
}`,...(_=(b=c.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var j,R,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`function Both() {
  return <>
      <Toggle>
        {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
      </Toggle>
      <Toggle>
        {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
      </Toggle>
    </>;
}`,...(S=(R=u.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var E,T,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`function ShadowDOM() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, toggleVisible] = useReducer(s => !s, false);
  const element = useMemo(() => {
    const el = document.createElement('div');
    el.textContent = 'Hello world';
    return el;
  }, []);
  function toggle() {
    if (isVisible) {
      ref.current!.shadowRoot!.removeChild(element);
    } else {
      ref.current!.shadowRoot!.appendChild(element);
    }
    toggleVisible();
  }
  useLayoutEffect(() => {
    ref.current!.attachShadow({
      mode: 'open'
    });
  }, []);
  return <>
      <button onClick={toggle}>Toggle</button>
      <div aria-live="polite" ref={ref}></div>
    </>;
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const B=["Status","Alert","Both","ShadowDOM"];export{c as Alert,u as Both,d as ShadowDOM,a as Status,B as __namedExportsOrder,F as default};
//# sourceMappingURL=Example.stories-077f6300.js.map
