import React from "react";

function C() {
  return <>C</>;
}
function B() {
  return (
    <>
      B
      <C />
    </>
  );
}
function A() {
  return (
    <>
      A
      <B />
    </>
  );
}

export default function ABC() {
  return <A />;
}
