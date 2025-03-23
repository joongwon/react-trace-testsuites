import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chain from "./chain";
import Binary from "./binary";
import ABC from "./abc";
import Inf from "./inf";
import Retry from "./retry";
import Rerender from "./rerender";
import ParentChild from "./parentChild";
import Button from "./button";
import ButtonState from "./buttonState";
import Curious1 from "./curious1";
import Curious2 from "./curious2";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            View Structure Testsuites
            <ul>
              <li>
                <Link to="/view-structure/abc">ABC</Link>
              </li>
              <li>
                <Link to="/view-structure/chain">Chain</Link>
              </li>
              <li>
                <Link to="/view-structure/binary-tree">Binary Tree</Link>
              </li>
            </ul>
          </li>
          <li>
            Render Cycle Testsuites
            <ul>
              <li>
                <Link to="/render-cycle/inf">Inf</Link>
              </li>
              <li>
                <Link to="/render-cycle/retry">Retry</Link>
              </li>
              <li>
                <Link to="/render-cycle/rerender">Rerender</Link>
              </li>
              <li>
                <Link to="/render-cycle/parent-child">Parent Child</Link>
              </li>
            </ul>
          </li>
          <li>
            Side Effects Testsuites
            <ul>
              <li>
                <Link to="/side-effect/button">Button</Link>
              </li>
              <li>
                <Link to="/side-effect/button-state">Button State</Link>
              </li>
              <li>
                <Link to="/side-effect/curious1">Curious1</Link>
              </li>
              <li>
                <Link to="/side-effect/curious2">Curious2</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>React-tRrace Testsuites</h1>} />
        <Route path="/view-structure/abc" element={<ABC />} />
        <Route path="/view-structure/chain" element={<Chain />} />
        <Route path="/view-structure/binary-tree" element={<Binary />} />
        <Route path="/render-cycle/inf" element={<Inf />} />
        <Route path="/render-cycle/retry" element={<Retry />} />
        <Route path="/render-cycle/rerender" element={<Rerender />} />
        <Route path="/render-cycle/parent-child" element={<ParentChild />} />
        <Route path="/side-effect/button" element={<Button />} />
        <Route path="/side-effect/button-state" element={<ButtonState />} />
        <Route path="/side-effect/curious1" element={<Curious1 />} />
        <Route path="/side-effect/curious2" element={<Curious2 />} />
      </Routes>
    </>
  );
}

export default App;
