import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubwayPath from './components/SubwayPath';

const VERSION: string = "0.0.1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Version {VERSION}
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
      <SubwayPath
        color={"red"}
      />
    </div>
  );
}

export default App;
