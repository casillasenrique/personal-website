import React from 'react';
import './App.css';
import FrontPage from './pages/FrontPage';

const VERSION: string = '1.4.0';

function App() {
  return (
    <div className="App">
      <FrontPage version={VERSION} />
    </div>
  );
}

export default App;
