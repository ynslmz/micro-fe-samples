import { useRef, useEffect } from "react";
import React from "react";
import { mount } from "childVue/vueApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}>Mount</div>;
};
