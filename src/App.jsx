import React from "react";
import { useState, useEffect } from "react";
import print from "./print";

//let C _ =
//  let (setter, setSetter) = useState^setter () in
//  let (render, setRender) = useState^render 0 in
//  (if render < 3 then setRender(fun r -> r + 1));
//
//  (if (setter <> ()) && (render < 3) then setter(fun _ -> 1));
//  let (value, setValue) = useState^value 0 in
//  (if (setter = ()) && (render < 3) then setSetter(fun _ -> setValue));
//  print render;
//  print value;
//  value

//function App() {
//  const [setter, setSetter] = useState();
//  const [render, setRender] = useState(0);
//  if (render < 3) {
//    setRender((r) => r + 1);
//  }
//
//  if (setter && render < 3) {
//    setter(() => 1);
//  }
//
//  const [value, setValue] = useState(0);
//  if (!setter && render < 3) {
//    setSetter(() => setValue);
//  }
//  console.log("r", render);
//  console.log("v", value);
//  return value;
//}

//let App _ =
//  print("start App()");
//  let (data, setData) = useState(
//    print("init");
//    0
//  ) in
//  useEffect(print("effect"));
//  print("end App()");
//  [
//    fun _ -> (
//      print("start onClick");
//      setData(fun d -> (
//        print("start set1: d =");
//        print(d);
//        setData(fun d -> (
//          print("start set2: d =");
//          print(d);
//          print("end set2: return");
//          print(d - 1);
//          d - 1
//        ));
//        print("end set1: return");
//        print(d + 1);
//        d + 1
//      ));
//      print("end onClick")
//    ),
//    data
//  ]
//;;
//App ()

//function App() {
//  console.log("start App()");
//  const [data, setData] = useState(() => {
//    console.log("init");
//    return 0;
//  });
//  useEffect(() => {
//    console.log("effect");
//  });
//  console.log("end App()");
//  return <button onClick={
//    () => {
//      console.log("start onClick");
//      setData((d) => {
//        console.log("start set1: d =", d);
//        setData((d) => {
//          console.log("start set2: d =", d);
//          console.log("end set2: return", d - 1);
//          return d - 1;
//        });
//        console.log("end set1: return", d + 1);
//        return d + 1;
//      });
//      console.log("end onClick");
//    }
//  } />;
//}


function App() {
  print("Couter");
  const [s, setS] = useState(0);
  useEffect(() => {
    print("Effect");
    setS((s) => {if (s % 2 === 0) {print("Update"); return s + 1} else {return s}});
  });
  print("Return");
  return <> {s} </>;
}

export default App;
