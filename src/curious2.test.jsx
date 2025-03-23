import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./curious2";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("ButtonState prints Counter, Return, Effect and after clicked, Counter, Update, Return, Effect, Counter, Update, Return, Effect", () => {
  print.mockClear();

  const { container } = render(<Counter />);

  expect(print.mock.calls[0][0]).toBe("Counter");
  expect(print.mock.calls[1][0]).toBe("Return");
  expect(print.mock.calls[2][0]).toBe("Effect");

  const button = container.querySelector("button");

  fireEvent.click(button);
  expect(print.mock.calls[3][0]).toBe("Counter");
  expect(print.mock.calls[4][0]).toBe("Update");
  expect(print.mock.calls[5][0]).toBe("Return");
  expect(print.mock.calls[6][0]).toBe("Effect");
  expect(print.mock.calls[7][0]).toBe("Counter");
  expect(print.mock.calls[8][0]).toBe("Update");
  expect(print.mock.calls[9][0]).toBe("Return");
  expect(print.mock.calls[10][0]).toBe("Effect");
});
