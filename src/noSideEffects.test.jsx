import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoSideEffects from "./noSideEffects";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("No side effects implies not re-render", () => {
  print.mockClear();

  const { container } = render(<NoSideEffects />);

  expect(container).toHaveTextContent("42");
  expect(print).toHaveBeenCalledTimes(1);
  expect(print.mock.calls[0][0]).toBe("42");
});
