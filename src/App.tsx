import React from 'react';
import Header from './components/header';
import './App.scss';
import { Reset } from 'styled-reset'
import Main from './container/main';
import { QueryClient, QueryClientProvider } from 'react-query'
import RouterCoinfig from './router/routerCoinfig';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <div className="App">
        <Header></Header>
        {/* <Main></Main> */}
        <RouterCoinfig></RouterCoinfig>
      </div>
    </QueryClientProvider>
  );
}

export default App;
