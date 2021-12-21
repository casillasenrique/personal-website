import React from 'react';
import './App.css';
import FrontPage from './pages/FrontPage';

const VERSION: string = '1.0.2';

function App() {
  return (
    <div className="App">
      <FrontPage version={VERSION} />
    </div>
  );
}

export default App;
