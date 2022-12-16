import React from "react";
import Header from "./components/header";
import "./App.scss";
import { Reset } from "styled-reset";
import Main from "./components/main";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterCoinfig from "./router/routerCoinfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <div className="App">
        <ToastContainer></ToastContainer>

        <Header></Header>
        <RouterCoinfig></RouterCoinfig>
      </div>
    </QueryClientProvider>
  );
}

export default App;
