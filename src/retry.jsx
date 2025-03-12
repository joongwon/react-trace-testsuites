import React from "react";
import { useState } from "react";

function C() {
  const [s, setS] = useState(() => 0);
  if (s < 25) {
    setS((s) => s + 1);
  }
  return <div role="counter">{s}</div>;
}

export default function Retry() {
  return <C />;
}
