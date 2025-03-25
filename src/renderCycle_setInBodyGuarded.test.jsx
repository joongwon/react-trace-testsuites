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

  const { container } = render(<RenderCycleSetInBodyGuarded />);

  // Should render with 43 after the guard prevents further re-renders
  expect(container).toHaveTextContent("43");

  // Effect should run once with the final state value
  expect(print).toHaveBeenCalledTimes(1);
  expect(print.mock.calls[0][0]).toBe("43");
});

