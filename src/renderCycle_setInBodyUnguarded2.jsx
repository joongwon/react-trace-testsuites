import React from "react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function C() {
  const [s, setS] = useState(() => 0);
  setS((s) => s + 1);
  return <div> </div>;
}

function Error() {
  return <div>Error</div>;
}

export default function Inf() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <C />
    </ErrorBoundary>
  );
}
