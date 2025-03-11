import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function App() {
  print("App.jsx");
  const [count, setCount] = useState(0);
  useEffect(() => {
    print("Effect");
  });
  return (
    <>
      <div role="div">{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
    </>
  );
}

export default App;
