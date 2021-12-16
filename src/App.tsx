import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './components/Background';

const VERSION: string = "0.0.3";

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
        <a href='https://www.instagram.com/enrique_casillas_/'>
          Instagram
        </a>
        <a href='https://www.twitch.tv/yoshi654654'>
          Twitch
        </a>
        <a href='https://www.youtube.com/channel/UCvmqyMGr2mtnRQ5sAbVnc6A'>
          Youtube
        </a>
        <a href='https://twitter.com/Enrique_______C'>
          Twitter
        </a>
        <a href='https://www.facebook.com/enrique.casillas.9003'>
          Facebook
        </a>
        <a href='https://github.com/casillasenrique'>
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/enrique-casillas-910018193/'>
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Background/>
    </div>
  );
}

export default App;
