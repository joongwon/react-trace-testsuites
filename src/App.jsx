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
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h1>React-tRrace Testsuites</h1>} />
        <Route path="view-structure">
          <Route path="abc" element={<ABC />} />
          <Route path="chain" element={<Chain />} />
          <Route path="binary-tree" element={<Binary />} />
        </Route>
        <Route path="render-cycle">
          <Route path="inf" element={<Inf />} />
          <Route path="retry" element={<Retry />} />
          <Route path="rerender" element={<Rerender />} />
          <Route path="parent-child" element={<ParentChild />} />
        </Route>
        <Route path="side-effect">
          <Route path="button" element={<Button />} />
          <Route path="button-state" element={<ButtonState />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
