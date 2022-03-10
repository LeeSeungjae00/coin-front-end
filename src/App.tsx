import React from 'react';
import Header from './components/header';
import './App.scss';
import { Reset } from 'styled-reset'
import Main from './components/main';
import { QueryClient, QueryClientProvider } from 'react-query'
import RouterCoinfig from './router/routerCoinfig';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <div className="App">
        <Header></Header>
        <RouterCoinfig></RouterCoinfig>
      </div>
    </QueryClientProvider>
  );
}

export default App;
