import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderCycleSetInEffectWithArgStep1 from "./renderCycle_setInEffectWithArgStep1";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("No re-render when identity setter with arg is called in useEffect", () => {
  print.mockClear();

  const { container } = render(<RenderCycleSetInEffectWithArgStep1 />);

  expect(print).toHaveBeenCalledTimes(1);
  expect(print.mock.calls[0][0]).toBe("C");
});

