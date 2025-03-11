import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import * as Print from "./print";

const printMock = jest.fn();
Print.default = printMock;
function expectPrintCalls(calls) {
  expect(printMock.mock.calls).toEqual(calls.map((c) => [c]));
}

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<App />);

  // ACT
  await userEvent.click(screen.getByText("click"));
  await screen.findByRole("div");

  // ASSERT
  expect(screen.getByRole("div")).toHaveTextContent("1");
  expectPrintCalls(["App.jsx", "Effect", "App.jsx", "Effect"]);
});
