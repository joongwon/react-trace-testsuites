import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleSetInBodyGuarded2 from "./setInBodyGuarded2";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Retry renders counter with value 25", () => {
  print.mockClear();

  render(<RenderCycleSetInBodyGuarded2 />);

  for (let i = 0; i <= 25; ++i) {
    expect(print.mock.calls[i][0]).toBe("C");
  }
  expect(print.mock.calls[26][0]).toBe("");
});
