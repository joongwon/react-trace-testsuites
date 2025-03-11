import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chain from "./chain";
import Binary from "./binary";
import ABC from "./abc";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>React-tRrace Testsuites</h1>} />
        <Route path="/view-structure/abc" element={<ABC />} />
        <Route path="/view-structure/chain" element={<Chain />} />
        <Route path="/view-structure/binary-tree" element={<Binary />} />
      </Routes>
    </>
  );
}

export default App;
