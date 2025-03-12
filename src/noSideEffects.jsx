import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function C() {
  const [s, _] = useState(() => 42);
  useEffect(() => {
    print(`${s}`);
  });
  return <div> {s} </div>;
}

export default function NoSideEffects() {
  return <C />;
}
