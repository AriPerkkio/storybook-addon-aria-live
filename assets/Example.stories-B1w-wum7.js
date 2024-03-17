import{r as l}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";var N={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=l,A=Symbol.for("react.element"),D=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,F=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,o){var n,i={},s=null,g=null;o!==void 0&&(s=""+o),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(g=r.ref);for(n in r)M.call(r,n)&&!L.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:A,type:e,key:s,ref:g,props:i,_owner:F.current}}p.Fragment=D;p.jsx=O;p.jsxs=O;N.exports=p;var t=N.exports;const H={title:"Example"};function a(){return t.jsx(m,{children:e=>t.jsx("div",{role:"status",children:e&&"Notification"})})}function c(){return t.jsx(m,{children:e=>t.jsx("div",{role:"alert",children:e&&"Alert"})})}function u(){return t.jsxs(t.Fragment,{children:[t.jsx(m,{children:e=>t.jsx("div",{role:"status",children:e&&"Notification"})}),t.jsx(m,{children:e=>t.jsx("div",{role:"alert",children:e&&"Alert"})})]})}function d(){const e=l.useRef(null),[r,o]=l.useReducer(s=>!s,!1),n=l.useMemo(()=>{const s=document.createElement("div");return s.textContent="Hello world",s},[]);function i(){r?e.current.shadowRoot.removeChild(n):e.current.shadowRoot.appendChild(n),o()}return l.useLayoutEffect(()=>{e.current.attachShadow({mode:"open"})},[]),t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:i,children:"Toggle"}),t.jsx("div",{"aria-live":"polite",ref:e})]})}function f(){const[e,r]=l.useReducer(s=>!s,!1),[o,n]=l.useState();function i(){if(o!=null){clearInterval(o),n(null);return}n(setInterval(r,500))}return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:i,children:o==null?"Start":"Stop"}),t.jsx("div",{role:"status",children:e&&"Notification"}),t.jsx("div",{role:"alert",children:e&&"Alert"})]})}function m({children:e}){const[r,o]=l.useReducer(n=>!n,!1);return t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:o,children:"Toggle"}),e(r)]})}a.__docgenInfo={description:"",methods:[],displayName:"Status"};c.__docgenInfo={description:"",methods:[],displayName:"Alert"};u.__docgenInfo={description:"",methods:[],displayName:"Both"};d.__docgenInfo={description:"",methods:[],displayName:"ShadowDOM"};f.__docgenInfo={description:"",methods:[],displayName:"Intervals"};var v,h,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`function Status() {
  return <Toggle>
      {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
    </Toggle>;
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,_,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`function Alert() {
  return <Toggle>
      {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
    </Toggle>;
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var j,V,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`function Both() {
  return <>
      <Toggle>
        {isVisible => <div role="status">{isVisible && 'Notification'}</div>}
      </Toggle>
      <Toggle>
        {isVisible => <div role="alert">{isVisible && 'Alert'}</div>}
      </Toggle>
    </>;
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var y,R,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`function ShadowDOM() {
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,E,C;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`function Intervals() {
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
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const U=["Status","Alert","Both","ShadowDOM","Intervals"];export{c as Alert,u as Both,f as Intervals,d as ShadowDOM,a as Status,U as __namedExportsOrder,H as default};
