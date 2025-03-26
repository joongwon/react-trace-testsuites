import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleSetInEffectStep2 from "./setInEffectStep2";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Re-render 1 time when setter is called in useEffect", () => {
  print.mockClear();

  const { container } = render(<RenderCycleSetInEffectStep2 />);

  expect(print).toHaveBeenCalledTimes(2);
  expect(print.mock.calls[0][0]).toBe("C");
  expect(print.mock.calls[1][0]).toBe("C");
});

