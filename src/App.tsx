import React from 'react';
import Header from './components/header';
import './App.scss';
import { Reset } from 'styled-reset'
import Main from './components/main';


function App() {
  return (
    <>
    <Reset/>
    <div className="App">
      
      <Header></Header>
      <Main></Main>
    </div>
    </>
  );
}

export default App;
