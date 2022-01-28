import React, { useReducer } from "react";

export default {
  title: "Example",
};

export function Status() {
  return (
    <Toggle>
      {(isVisible) => <div role="status">{isVisible && "Notification"}</div>}
    </Toggle>
  );
}

export function Alert() {
  return (
    <Toggle>
      {(isVisible) => <div role="alert">{isVisible && "Alert"}</div>}
    </Toggle>
  );
}

export function Both() {
  return (
    <>
      <Toggle>
        {(isVisible) => <div role="status">{isVisible && "Notification"}</div>}
      </Toggle>
      <Toggle>
        {(isVisible) => <div role="alert">{isVisible && "Alert"}</div>}
      </Toggle>
    </>
  );
}

function Toggle({ children }) {
  const [isVisible, toggle] = useReducer((s) => !s, false);

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {children(isVisible)}
    </>
  );
}
