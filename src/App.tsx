import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { ClickThroughMeme } from "./clickThroughMeme";
import { Counter } from "./Counter";
import { BadCounter } from "./BadCounter";
//import logo from "../Assets/titleScreen.jpg";

function App() {
  const [intro, setIntro] = useState<boolean>(true);
  const [use, setUse] = useState<boolean>(true);
  const [hooks, setHooks] = useState<boolean>(true);
  const [examples, setExamples] = useState<boolean>(true);
  const [furtherReading, setFurtherReading] = useState<boolean>(true);
  return (
    <div className="App">
      <header className="App-header">React: Hooks In A Nutshell</header>
      <h1>By Maxwell Wang, Eric Toreki and Joshua Strassle</h1>
      <h2>
        Intro/Background{" "}
        <Button
          onClick={() => {
            setIntro(!intro);
          }}
        >
          Show/Hide
        </Button>
      </h2>

      <div>
        {intro && (
          <div className="App-body">
            <p>
              Before delving further into React hooks we need to discuss some
              vocabulary. It is important to know that React is divided into
              Components, and each component has its own state. So some
              important vocabulary in regards to state are:{" "}
            </p>
            <li>
              <ul>
                Model: describes the possible values that the State can live in.
              </ul>
              <ul>View: what shows your current State</ul>
              <ul>
                Controller: part that allows changes to be made to the current
                State
              </ul>
            </li>
            <p>
              React is organized by Components, and each of these Components has
              a State. The main Component that is focused on is called App and
              therefore its State is the most important. This State is our{" "}
              <strong>Model</strong>. The Components function which simply
              returns HTML as something to display is our <strong>View</strong>.
              Finally the View can have interactability such as clicking
              buttons, checkmarks, or entering text. These events can be bound
              to functions that are called when the event occurs that modify the
              Model. The functions are the <strong>Controllers</strong>.
            </p>
          </div>
        )}
      </div>
      <h2>
        useState{" "}
        <Button
          onClick={() => {
            setUse(!use);
          }}
        >
          Show/Hide
        </Button>
      </h2>
      {use && (
        <div>
          <div className="App-body">
            <p>
              useState is the example of a React Hook that we will be focusing
              on.The most important line for useState is below: {"\n"}
            </p>
            <p>[state,setState] = useState{"<type>"}(initialValue)</p>
            <li>
              <ul>state: represents our current Model</ul>
              <ul>
                setState: sets the state of our Model, this is a low level
                Controller
              </ul>
              <ul>
                useState: This creates the hook for storing our Model, it will
                return the state and setState
              </ul>
              <ul>type: this is the type of the state</ul>
              <ul>
                initialValue: The initial value in state, it should be the same
                type as type
              </ul>
            </li>
            <p>
              Key things to remember when using useState is that useState should
              not be put inside loops, conditionals, or functions, and useState
              must always be called within a Component function.
            </p>
          </div>
        </div>
      )}
      <h2>
        Hooks{" "}
        <Button
          onClick={() => {
            setHooks(!hooks);
          }}
        >
          Show/Hide
        </Button>
      </h2>
      {hooks && (
        <div>
          <div className="App-body">
            <p>
              In the case of useState, the hook is created by the useState part
              of the command. This creates a hook for us to store our state
              setState on. As the data exists on the hook it will persist when
              the Component Function is rendered again. The Component Function
              is called to rerender again when the setState function has been
              called. The hook is needed as local variables would not stick
              around with a new call to the Component Function.
            </p>
          </div>
        </div>
      )}
      <h2>
        Examples and Some Fun{" "}
        <Button
          onClick={() => {
            setExamples(!examples);
          }}
        >
          Show/Hide
        </Button>
      </h2>
      {examples && (
        <div>
          <div className="App-body">
            <h4>Example of trying to use local variable:</h4>
            <BadCounter></BadCounter>
            <h4>Example of using State to make a counter:</h4>
            <Counter></Counter>
            <h4>Example with memes:</h4>
            <ClickThroughMeme></ClickThroughMeme>
          </div>
        </div>
      )}
      <h2>
        Further Reading{" "}
        <Button
          onClick={() => {
            setFurtherReading(!furtherReading);
          }}
        >
          Show/Hide
        </Button>
      </h2>
      {furtherReading && (
        <div>
          <div className="App-body">
            <li>
              <ul>
                <a href="https://frontend-fun.github.io/react-hooks-typescript-tome/4-state/state.html#model-view-and-controller">
                  React TypeScript Tome
                </a>
              </ul>
              <ul>
                <a href="https://reactjs.org/docs/hooks-intro.html">
                  Intro to Hooks on reactjs.org
                </a>
              </ul>
              <ul>
                <a href="https://www.w3schools.com/react/react_hooks.asp">
                  Hooks at w3schools
                </a>
              </ul>
            </li>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
