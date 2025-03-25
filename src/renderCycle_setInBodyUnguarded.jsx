import React from "react";
import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import print from "./print";

function C() {
  const [s, setS] = useState(() => 42);

  // Unguarded state update will cause infinite re-renders
  setS((s) => 43);

  useEffect(() => {
    print(`${s}`);
  });

  return <div>{s}</div>;
}

function Error() {
  return <div>Error</div>;
}

export default function RenderCycleSetInBodyUnguarded() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <C />
    </ErrorBoundary>
  );
}
