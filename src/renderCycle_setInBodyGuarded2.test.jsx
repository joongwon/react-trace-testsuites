import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Retry from "./retry";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Retry renders counter with value 25", () => {
  print.mockClear();

  const { container } = render(<Retry />);

  expect(container).toHaveTextContent("25");
  expect(print).toHaveBeenCalledTimes(1);
  expect(print.mock.calls[0][0]).toBe("25");
});
