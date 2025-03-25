import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleUpdateObjNoRerender from "./renderCycle_updateObjNoRerender";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("No re-render when object is mutated without setState", () => {
  print.mockClear();

  const { container } = render(<RenderCycleUpdateObjNoRerender />);

  expect(print).toHaveBeenCalledTimes(1);
  expect(print.mock.calls[0][0]).toBe("C");
});

