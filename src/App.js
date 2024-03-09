import React from 'react';
import SearchBooks from './components/SearchBooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Web Book Search</h1>
      </header>
      <SearchBooks />
    </div>
  );
}

export default App;
