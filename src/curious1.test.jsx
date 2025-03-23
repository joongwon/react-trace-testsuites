import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./curious1";
import print from "./print";

jest.mock("./print", () => ({
  __esModule: true,
  default: jest.fn(),
}));

test("ButtonState prints Counter, Return, and after clicked, Counter, Update, Return", () => {
  print.mockClear();

  const { container } = render(<Counter />);

  expect(print.mock.calls[0][0]).toBe("Counter");
  expect(print.mock.calls[1][0]).toBe("Return");

  const button = container.querySelector("button");

  fireEvent.click(button);
  expect(print.mock.calls[2][0]).toBe("Counter");
  expect(print.mock.calls[3][0]).toBe("Update");
  expect(print.mock.calls[4][0]).toBe("Return");
});
