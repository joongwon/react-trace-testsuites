import React from "react";

function C({ n }) {
  if (n <= 0) {
    return 0;
  }
  return (
    <>
      <C n={n - 1} />
      <C n={n - 1} />
    </>
  );
}

export default function Binary() {
  return <C n={3} />;
}
