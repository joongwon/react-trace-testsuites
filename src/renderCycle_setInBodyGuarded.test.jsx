import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleSetInBodyGuarded from "./renderCycle_setInBodyGuarded";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Guarded top-level setState stops re-rendering", () => {
  print.mockClear();

  render(<RenderCycleSetInBodyGuarded />);

  expect(print.mock.calls[0][0]).toBe("C");
  expect(print.mock.calls[1][0]).toBe("C");
  expect(print.mock.calls[2][0]).toBe("");
});

