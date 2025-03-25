import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import EventSetterInSetter from "./event_setterInSetter";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("Call setter in setter works correctly", () => {
  print.mockClear();

  const { container } = render(<EventSetterInSetter />);

  const button = container.querySelector("button");
  fireEvent.click(button);

  expect(print.mock.calls.map((call) => call[0])).toEqual([
    "start App()",
    "init",
    "end App()",
    "effect",
    "start onClick",
    "start set1: d =",
    0,
    "start set2: d =",
    0,
    "end set2: return",
    -1,
    "end set1: return",
    1,
    "end onClick",
    "start App()",
    "end App()",
    "effect",
  ]);
});
