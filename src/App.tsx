import React from 'react';
import './App.css';
import { ClickThroughMeme } from './ClickThroughMeme';
//import logo from "../Assets/titleScreen.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickThroughMeme></ClickThroughMeme>
        <p>
          Edit <code>the code in App.tsx</code> and save to see your progress.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
