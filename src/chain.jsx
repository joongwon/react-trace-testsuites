import React from "react";

function C({ n }) {
  if (n <= 0) {
    return <>0</>;
  }
  return (
    <>
      {n}
      <C n={n - 1} />
    </>
  );
}

export default function Chain() {
  return <C n={5} />;
}
