import React from 'react';
import Header from './components/header';
import './App.scss';
import { Reset } from 'styled-reset'

function App() {
  return (
    <>
    <Reset/>
    <div className="App">
      
      <Header></Header>
    </div>
    </>
  );
}

export default App;
