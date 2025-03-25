import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleSiblingSetter from "./renderCycle_setSiblingDuringEffect";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Set sibling state during effect works correctly", async () => {
  print.mockClear();

  await act(async () => {
    render(<RenderCycleSiblingSetter />);
  });

  expect(print.mock.calls).toEqual([["D"], ["D"], ["D"]]);
});

