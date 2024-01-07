import{r as n}from"./index-d1441864.js";import"./_commonjsHelpers-de833af9.js";var k={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=n,N=Symbol.for("react.element"),D=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,L=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function O(e,o,s){var r,l={},i=null,g=null;s!==void 0&&(i=""+s),o.key!==void 0&&(i=""+o.key),o.ref!==void 0&&(g=o.ref);for(r in o)F.call(o,r)&&!M.hasOwnProperty(r)&&(l[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:N,type:e,key:i,ref:g,props:l,_owner:L.current}}p.Fragment=D;p.jsx=O;p.jsxs=O;k.exports=p;var t=k.exports;const H={title:"Example"};function a(){return t.jsx(m,{children:e=>t.jsx("div",{role:"status",children:e&&"Notification"})})}function c(){return t.jsx(m,{children:e=>t.jsx("div",{role:"alert",children:e&&"Alert"})})}function u(){return t.jsxs(t.Fragment,{children:[t.jsx(m,{children:e=>t.jsx("div",{role:"status",children:e&&"Notification"})}),t.jsx(m,{children:e=>t.jsx("div",{role:"alert",children:e&&"Alert"})})]})}function d(){const e=n.useRef(null),[o,s]=n.useReducer(i=>!i,!1),r=n.useMemo(()=>{const i=document.createElement("div");return i.textContent="Hello world",i},[]);function l(){o?e.current.shadowRoot.removeChild(r):e.current.shadowRoot.appendChild(r),s()}return n.useLayoutEffect(()=>{e.current.attachShadow({mode:"open"})},[]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:l,children:"Toggle"}),t.jsx("div",{"aria-live":"polite",ref:e})]})}function f(){const[e,o]=n.useReducer(i=>!i,!1),[s,r]=n.useState();function l(){if(s!=null){clearInterval(s),r(null);return}r(setInterval(o,500))}return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:l,children:s==null?"Start":"Stop"}),t.jsx("div",{role:"status",children:e&&"Notification"}),t.jsx("div",{role:"alert",children:e&&"Alert"})]})}function m({children:e}){const[o,s]=n.useReducer(r=>!r,!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:s,children:"Toggle"}),e(o)]})}var v,h,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`function Status() {
  return <Toggle>
      {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
    </Toggle>;
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,S,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function Alert() {
  return <Toggle>
      {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
    </Toggle>;
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var V,_,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`function Both() {
  return <>
      <Toggle>
        {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
      </Toggle>
      <Toggle>
        {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
      </Toggle>
    </>;
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var T,E,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`function ShadowDOM() {
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
}`,...(w=(E=d.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var y,C,I;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`function Intervals() {
  const [isVisible, toggleVisible] = useReducer(s => !s, false);
  const [interval, setIntervalState] = useState<ReturnType<typeof setInterval> | null>();
  function onClick() {
    if (interval != null) {
      clearInterval(interval);
      setIntervalState(null);
      return;
    }
    setIntervalState(setInterval(toggleVisible, 500));
  }
  return <>
      <button onClick={onClick}>{interval == null ? 'Start' : 'Stop'}</button>

      <div role="status">{isVisible && 'Notification'}</div>
      <div role="alert">{isVisible && 'Alert'}</div>
    </>;
}`,...(I=(C=f.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const U=["Status","Alert","Both","ShadowDOM","Intervals"];export{c as Alert,u as Both,f as Intervals,d as ShadowDOM,a as Status,U as __namedExportsOrder,H as default};
//# sourceMappingURL=Example.stories-92bc90b8.js.map
