import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function C() {
  print("C");
  const [s, setS] = useState(() => 42);
  if (s === 42) {
    setS((s) => 43);
  }
  return <div></div>;
}

export default function RenderCycleSetInBodyGuarded() {
  return <C />;
}
