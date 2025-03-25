import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

function App() {
  print("start App()");

  const [data, setData] = useState(() => {
    print("init");
    return 0;
  });

  useEffect(() => {
    print("effect");
  });

  print("end App()");

  const handleClick = () => {
    print("start onClick");
    setData((d) => {
      print("start set1: d =");
      print(d);
      setData((d) => {
        print("start set2: d =");
        print(d);
        print("end set2: return");
        print(d - 1);
        return d - 1;
      });
      print("end set1: return");
      print(d + 1);
      return d + 1;
    });
    print("end onClick");
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <div>{data}</div>
    </div>
  );
}

export default function EventSetterInSetter() {
  return <App />;
}
