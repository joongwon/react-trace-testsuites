import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Inf from "./inf";

test("Inf renders error fallback when component causes infinite loop", () => {
  const originalConsoleError = console.error;
  console.error = jest.fn();

  const { container } = render(<Inf />);

  expect(container).toHaveTextContent("Error");

  console.error = originalConsoleError;
});
