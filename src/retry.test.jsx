import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Retry from "./retry";

test("Retry renders counter with value 25", () => {
  const { container } = render(<Retry />);

  expect(container).toHaveTextContent("25");
});
