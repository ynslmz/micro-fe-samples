import { useRef, useEffect } from "react";
import React from "react";
import { mount } from "childReact/reactApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}>Mount</div>;
};
