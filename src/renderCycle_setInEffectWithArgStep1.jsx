import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function C({ x }) {
  const [s, setS] = useState(() => 42);

  useEffect(() => {
    print("C");

    if (s !== x) {
      setS(() => x);
    }
  });

  return <div></div>;
}

export default function RenderCycleSetInEffectWithArgStep1() {
  return <C x={42} />;
}

