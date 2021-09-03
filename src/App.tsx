import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './components/Background';

const VERSION: string = "0.0.2";

function App() {
  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Version {VERSION}
        </p>
      <Background/>
    </div>
  );
}

export default App;
