import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ComponentStateInRemoved from "./component_stateInRemoved";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Child state update happens before it is removed", () => {
  print.mockClear();

  render(<ComponentStateInRemoved />);

  expect(print.mock.calls.length).toEqual(2);
});
