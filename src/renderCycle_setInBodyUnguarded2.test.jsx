import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Inf from "./renderCycle_setInBodyUnguarded2";

test("Inf renders error fallback when component causes infinite loop", () => {
  const { container } = render(<Inf />);

  expect(container).toHaveTextContent("Error");
});
