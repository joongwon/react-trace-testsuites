import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function Counter({ x }) {
  print("Counter");
  const [s, setS] = useState(x);
  useEffect(() => {
    print("Effect");
    if (s > 0) {
      setS(() => {
        print("Update");
        return 0;
      });
    }
  });
  print("Return");
  return (
    <div>
      <div>{s}</div>
      <button
        onClick={() => {
          setS((s) => s + 1);
          setS((s) => {
            print("Update");
            return s + 1;
          });
        }}
      >
        button
      </button>
    </div>
  );
}

export default function ButtonState() {
  return <Counter x={0} />;
}
