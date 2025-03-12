import React from "react";
import { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

const print = jest.fn();
function expectPrintCalls(...calls) {
  expect(print.mock.calls.map((c) => c.map((x) => `${x}`))).toEqual(
    calls.map((c) => [`${c}`]),
  );
}

const doneMarker = "__done__";
const clickMarker = "__click__";
function DoneButton() {
  const [done, setDone] = useState(false);
  return (
    <button onClick={() => setDone(true)} disabled={done}>
      {done ? doneMarker : clickMarker}
    </button>
  );
}

async function clickDone() {
  userEvent.click(screen.getByText(clickMarker));
  await screen.findByText(doneMarker);
}

function testRender(C) {
  render(
    <>
      <C />
      <DoneButton />
    </>,
  );
}

test("Flush effect queue on retry", async () => {
  function C() {
    const [s, setS] = useState(0);
    print("C");
    if (s === 0) {
      setS((s) => s + 1);
    }
    useEffect(() => {
      print("useEffect");
      setS((s) => 42);
    });
    return s;
  }

  testRender(C);

  await clickDone();

  expectPrintCalls("C", "C", "useEffect", "C", "useEffect", "C");
});

test("Flush effect queue on retry", async () => {
  function C() {
    useEffect(() => {
      print("useEffect");
      setS((s) => 42);
    });
    const [s, setS] = useState(0);
    print("C");
    if (s === 0) {
      setS((s) => s + 1);
    }
    return s;
  }

  testRender(C);

  await clickDone();

  expectPrintCalls("C", "C", "useEffect", "C", "useEffect", "C");
});

test("Component is called once more after set state in effect", async () => {
  function C() {
    const [s, setS] = useState(0);
    useEffect(() => {
      print("useEffect");
      setS((s) => 42);
    });
    print("C");
    return s;
  }

  testRender(C);

  await clickDone();

  expectPrintCalls("C", "useEffect", "C", "useEffect", "C");
});

test("Idle child's effects are run when parent re-renders", async () => {
  function C(x) {
    useEffect(() => {
      print("C");
    });
    return "C";
  }
  function D() {
    const [s, setS] = useState(0);
    useEffect(() => {
      setS(() => 42);
    });
    return <C s={0} />;
  }

  testRender(D);
  await clickDone();
  expectPrintCalls("C", "C");
});

test("Nested view render order", async () => {
  function C({ x }) {
    useEffect(() => {
      print(x);
    });
    return x;
  }
  function D() {
    const [x, setX] = useState(0);
    useEffect(() => {
      setX(() => 42);
    });
    useEffect(() => {
      print("D");
    });
    return (
      <>
        <C x={0} />
        <>
          <C x={1} />
          <C x={2} />
        </>
      </>
    );
  }
  function E() {
    useEffect(() => {
      print("E");
    });
    return (
      <>
        <D />
        <C x="3" />
      </>
    );
  }

  testRender(E);
  await clickDone();
  expectPrintCalls("0", "1", "2", "D", "3", "E", "0", "1", "2", "D");
});

test("Event handler prints", async () => {
  function C() {
    return (
      <>
        <button onClick={() => print("0")}>0</button>
        <button onClick={() => print("1")}>1</button>
      </>
    );
  }

  testRender(C);
  userEvent.click(screen.getByText("0"));
  userEvent.click(screen.getByText("1"));
  await clickDone();
  expectPrintCalls("0", "1");
});
