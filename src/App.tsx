import React, { useState } from 'react';
import './App.css';
import { Button } from "react-bootstrap";

function App() {
  const [intro, setIntro] = useState<boolean>(true);
  const [use, setUse] = useState<boolean>(true);
  const [hooks, setHooks] = useState<boolean>(true);
  const [examples, setExamples] = useState<boolean>(true);
  return (
    <div className="App">
      <header className="App-header">React: Hooks In A Nutshell</header>
      <h2>Intro/Background <Button onClick={() => {setIntro(!intro);}}>
                Show/Hide
      </Button></h2>
      
      <div>
        {intro && <div className="App-body">
      <p>Before delving further into React hooks we need to discuss some vocabulary. It is important to know that React is divided into Components, and each component has its own state. So some important vocabulary in regards to state are: </p>
      <li>
        <ul>Model: </ul>
        <ul>View: </ul>
        <ul>Controller: </ul>
      </li>
      </div>}
      </div>
      <h2>useState <Button onClick={() => {setUse(!use);}}>
                Show/Hide
      </Button></h2>
      {use && <div>
      <div className="App-body">
        <p>useState is the example of a React Hook that we will be focusing on.</p>
        <li>
          <ul>state: </ul>
          <ul>setState: </ul>
          <ul>useState: </ul>
          <ul>initialValue: </ul>
        </li>
      </div>
      </div>}
      <h2>Hooks <Button onClick={() => {setHooks(!hooks);}}>
                Show/Hide
      </Button></h2>
      {hooks && <div>
      <div className="App-body">
        <p>Hooks are things that exist.</p>
      </div>
      </div>}
      <h2>Examples and Some Fun <Button onClick={() => {setExamples(!examples);}}>
                Show/Hide
      </Button></h2>
      {examples && <div>
      <div className="App-body">
        <h4>Example of trying to use local variable:</h4>
        <h4>Example of using State to make a counter:</h4>
        <h4>Example with memes:</h4>
      </div>
      </div>}
    </div>
  );
}

export default App;
