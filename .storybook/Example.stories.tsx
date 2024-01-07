import React, {
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

export default {
  title: 'Example',
};

export function Status() {
  return (
    <Toggle>
      {(isVisible) => <div role="status">{isVisible && 'Notification'}</div>}
    </Toggle>
  );
}

export function Alert() {
  return (
    <Toggle>
      {(isVisible) => <div role="alert">{isVisible && 'Alert'}</div>}
    </Toggle>
  );
}

export function Both() {
  return (
    <>
      <Toggle>
        {(isVisible) => <div role="status">{isVisible && 'Notification'}</div>}
      </Toggle>
      <Toggle>
        {(isVisible) => <div role="alert">{isVisible && 'Alert'}</div>}
      </Toggle>
    </>
  );
}

export function ShadowDOM() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, toggleVisible] = useReducer((s) => !s, false);

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
    ref.current!.attachShadow({ mode: 'open' });
  }, []);

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <div aria-live="polite" ref={ref}></div>
    </>
  );
}

export function Intervals() {
  const [isVisible, toggleVisible] = useReducer((s) => !s, false);
  const [interval, setIntervalState] = useState<ReturnType<
    typeof setInterval
  > | null>();

  function onClick() {
    if (interval != null) {
      clearInterval(interval);
      setIntervalState(null);
      return;
    }

    setIntervalState(setInterval(toggleVisible, 500));
  }

  return (
    <>
      <button onClick={onClick}>{interval == null ? 'Start' : 'Stop'}</button>

      <div role="status">{isVisible && 'Notification'}</div>
      <div role="alert">{isVisible && 'Alert'}</div>
    </>
  );
}

function Toggle({
  children,
}: {
  children: (isVisible: boolean) => React.ReactNode;
}) {
  const [isVisible, toggle] = useReducer((s) => !s, false);

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {children(isVisible)}
    </>
  );
}
