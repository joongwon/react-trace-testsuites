import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function C() {
  const [s, setS] = useState(() => 42);

  // Guarded state update
  if (s === 42) {
    setS((s) => 43);
  }

  useEffect(() => {
    print(`${s}`);
  });

  return <div>{s}</div>;
}

export default function RenderCycleSetInBodyGuarded() {
  return <C />;
}

