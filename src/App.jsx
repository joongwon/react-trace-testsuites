import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chain from "./chain";
import Binary from "./binary";
import ABC from "./abc";
import NoSideEffects from "./noSideEffects";
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
                <Link to="/render-cycle/no-side-effects">
                  No re-render when side effect is absent
                </Link>
              </li>
              <li>
                <Link to="/render-cycle/inf">
                  Infinite retries when top-level sets are unguarded
                </Link>
              </li>
              <li>
                <Link to="/render-cycle/retry">
                  No re-render with top-level sets
                </Link>
              </li>
              <li>
                <Link to="/render-cycle/rerender">
                  Re-render when sets are called in an Effect
                </Link>
              </li>
              <li>
                <Link to="/render-cycle/parent-child">
                  Re-render when parent re-renders
                </Link>
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
          <Route path="no-side-effects" element={<NoSideEffects />} />
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
