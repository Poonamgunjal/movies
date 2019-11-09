import React from 'react';
import './App.css';
import up from './assets/background.jpg';
import Cards from './components/cards/cards';
function App() {
  return (
    <div className="App">
      <div style={{'padding-bottom':'70px'}}></div>
      <div className="container"><Cards/></div>
    </div>
  );
}

export default App;
