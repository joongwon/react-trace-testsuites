import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// View Structure Tests
import Chain from "./viewStructure_chain";
import Binary from "./viewStructure_binary";
import ABC from "./viewStructure_abc";

// Render Cycle Tests
import NoSideEffects from "./renderCycle_noSideEffects";
import InfLoops from "./renderCycle_setInBodyUnguarded2";
import Retry from "./renderCycle_setInBodyGuarded2";
import Rerender from "./renderCycle_setInEffectGuardedStepN";
import ParentChild from "./renderCycle_parentChild";

// Side Effect Tests
import Button from "./sideEffect_button";
import ButtonState from "./sideEffect_buttonState";

// Render Cycle Tests
import RenderCycleSetStateGuarded from "./renderCycle_setStateGuarded";
import RenderCycleSetStateGuardedWithObj from "./renderCycle_setStateGuardedWithObj";
import RenderCycleSetInBodyGuarded from "./renderCycle_setInBodyGuarded";
import RenderCycleSetInBodyUnguarded from "./renderCycle_setInBodyUnguarded";
import RenderCycleSetInEffectStep1 from "./renderCycle_setInEffectStep1";
import RenderCycleSetInEffectStep2 from "./renderCycle_setInEffectStep2";
import RenderCycleSetInEffectGuardedStep2 from "./renderCycle_setInEffectGuardedStep2";
import RenderCycleSetInEffectTwiceStep1 from "./renderCycle_setInEffectTwiceStep1";
import RenderCycleSetInEffectWithArgStep1 from "./renderCycle_setInEffectWithArgStep1";
import RenderCycleSetInEffectWithArgStep2 from "./renderCycle_setInEffectWithArgStep2";
import RenderCycleSetInEffectIndefinite from "./renderCycle_setInEffectIndefinite";
import RenderCycleSetPassedStep2 from "./renderCycle_setPassedStep2";
import RenderCycleSetPassedInvalidPhase from "./renderCycle_setPassedInvalidPhase";
import RenderCycleSetPassedIndefinite from "./renderCycle_setPassedIndefinite";
import RenderCycleUpdateObjNoRerender from "./renderCycle_updateObjNoRerender";
import RenderCycleSetStateBeforeBind from "./renderCycle_setStateBeforeBind";
import RenderCycleSiblingSetter from "./renderCycle_setSiblingDuringEffect";

// Component Tests
import ComponentStateInRemoved from "./component_stateInRemoved";
import ComponentStatePersistence from "./component_statePersistence";
import ComponentCreateNew from "./component_createNew";

// Side Effect Tests
import SideEffectFlushQueue from "./sideEffect_flushQueue";
import SideEffectChildEffects from "./sideEffect_childEffects";
import SideEffectNestedViewOrder from "./sideEffect_nestedViewOrder";
import SideEffectEventHandler from "./sideEffect_eventHandler";

// Event Tests
import EventCounter from "./event_counter";
import EventSetterInSetter from "./event_setterInSetter";

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
              <li>Basic Render Behavior</li>
              <ul>
                <li>
                  <Link to="/render-cycle/no-side-effects">
                    No re-render when side effect is absent
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/retry">
                    No re-render with top-level guarded sets
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

              <li>State Updates in Render Phase</li>
              <ul>
                <li>
                  <Link to="/render-cycle/inf">
                    Infinite retries when top-level sets are unguarded
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-state-in-body-guarded">
                    Guarded setState in render phase
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-state-in-body-unguarded">
                    Unguarded setState in render phase
                  </Link>
                </li>
              </ul>

              <li>State Updates in Effects</li>
              <ul>
                <li>
                  <Link to="/render-cycle/set-state-guarded">
                    Re-render 5 times with guarded setState in Effect
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-state-guarded-obj">
                    Re-render 5 times with guarded setState on object
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-step1">
                    No re-render with identity setState in Effect
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-step2">
                    Re-render once with setState in Effect
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-guarded-step2">
                    Re-render once with guarded setState in Effect
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-twice-step1">
                    No re-render when setters compose to identity
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-indefinite">
                    Would render indefinitely with diverging setState
                  </Link>
                </li>
              </ul>

              <li>State Updates with Props</li>
              <ul>
                <li>
                  <Link to="/render-cycle/set-in-effect-with-arg-step1">
                    No re-render when identity setState with arg
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-in-effect-with-arg-step2">
                    Re-render once when setState with different arg
                  </Link>
                </li>
              </ul>

              <li>Passing setState to Children</li>
              <ul>
                <li>
                  <Link to="/render-cycle/set-passed-step2">
                    Re-render once when setter called in child
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-passed-invalid-phase">
                    Setting state in invalid phase
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-passed-indefinite">
                    Would render indefinitely with passed setter
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-state-before-bind">
                    Set state before binding
                  </Link>
                </li>
                <li>
                  <Link to="/render-cycle/set-sibling-during-effect">
                    Set sibling state during effect
                  </Link>
                </li>
              </ul>

              <li>Object Mutation</li>
              <ul>
                <li>
                  <Link to="/render-cycle/update-obj-no-rerender">
                    No re-render with direct object mutation
                  </Link>
                </li>
              </ul>
            </ul>
          </li>

          <li>
            Component Testsuites
            <ul>
              <li>
                <Link to="/component/state-in-removed">
                  State update in removed child
                </Link>
              </li>
              <li>
                <Link to="/component/state-persistence">
                  State persistence across renders
                </Link>
              </li>
              <li>
                <Link to="/component/create-new">
                  New child components with fresh state
                </Link>
              </li>
            </ul>
          </li>

          <li>
            Side Effects Testsuites
            <ul>
              <li>
                <Link to="/side-effect/button">Button Click</Link>
              </li>
              <li>
                <Link to="/side-effect/button-state">Button with State</Link>
              </li>
              <li>
                <Link to="/side-effect/flush-queue">Effect Queue Flushing</Link>
              </li>
              <li>
                <Link to="/side-effect/child-effects">
                  Child Component Effects
                </Link>
              </li>
              <li>
                <Link to="/side-effect/nested-view-order">
                  Nested View Effect Order
                </Link>
              </li>
              <li>
                <Link to="/side-effect/event-handler">
                  Event Handler Prints
                </Link>
              </li>
            </ul>
          </li>

          <li>
            Event Testsuites
            <ul>
              <li>
                <Link to="/event/counter">Counter with Limits</Link>
              </li>
              <li>
                <Link to="/event/setter-in-setter">Setter in Setter</Link>
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
          <Route path="inf" element={<InfLoops />} />
          <Route path="retry" element={<Retry />} />
          <Route path="rerender" element={<Rerender />} />
          <Route path="parent-child" element={<ParentChild />} />

          {/* State updates in render phase */}
          <Route
            path="set-state-in-body-guarded"
            element={<RenderCycleSetInBodyGuarded />}
          />
          <Route
            path="set-state-in-body-unguarded"
            element={<RenderCycleSetInBodyUnguarded />}
          />

          {/* State updates in effect */}
          <Route
            path="set-state-guarded"
            element={<RenderCycleSetStateGuarded />}
          />
          <Route
            path="set-state-guarded-obj"
            element={<RenderCycleSetStateGuardedWithObj />}
          />
          <Route
            path="set-in-effect-step1"
            element={<RenderCycleSetInEffectStep1 />}
          />
          <Route
            path="set-in-effect-step2"
            element={<RenderCycleSetInEffectStep2 />}
          />
          <Route
            path="set-in-effect-guarded-step2"
            element={<RenderCycleSetInEffectGuardedStep2 />}
          />
          <Route
            path="set-in-effect-twice-step1"
            element={<RenderCycleSetInEffectTwiceStep1 />}
          />
          <Route
            path="set-in-effect-with-arg-step1"
            element={<RenderCycleSetInEffectWithArgStep1 />}
          />
          <Route
            path="set-in-effect-with-arg-step2"
            element={<RenderCycleSetInEffectWithArgStep2 />}
          />
          <Route
            path="set-in-effect-indefinite"
            element={<RenderCycleSetInEffectIndefinite />}
          />

          {/* Passing setState to children */}
          <Route
            path="set-passed-step2"
            element={<RenderCycleSetPassedStep2 />}
          />
          <Route
            path="set-passed-invalid-phase"
            element={<RenderCycleSetPassedInvalidPhase />}
          />
          <Route
            path="set-passed-indefinite"
            element={<RenderCycleSetPassedIndefinite />}
          />
          <Route
            path="set-state-before-bind"
            element={<RenderCycleSetStateBeforeBind />}
          />
          <Route
            path="set-sibling-during-effect"
            element={<RenderCycleSiblingSetter />}
          />

          {/* Object mutation tests */}
          <Route
            path="update-obj-no-rerender"
            element={<RenderCycleUpdateObjNoRerender />}
          />
        </Route>

        <Route path="component">
          <Route
            path="state-in-removed"
            element={<ComponentStateInRemoved />}
          />
          <Route
            path="state-persistence"
            element={<ComponentStatePersistence />}
          />
          <Route path="create-new" element={<ComponentCreateNew />} />
        </Route>

        <Route path="side-effect">
          <Route path="button" element={<Button />} />
          <Route path="button-state" element={<ButtonState />} />
          <Route path="flush-queue" element={<SideEffectFlushQueue />} />
          <Route path="child-effects" element={<SideEffectChildEffects />} />
          <Route
            path="nested-view-order"
            element={<SideEffectNestedViewOrder />}
          />
          <Route path="event-handler" element={<SideEffectEventHandler />} />
        </Route>

        <Route path="event">
          <Route path="counter" element={<EventCounter />} />
          <Route path="setter-in-setter" element={<EventSetterInSetter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
