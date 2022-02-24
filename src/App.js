import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loggin from "./components/loggin/loggin";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>{/* <Loggin /> */}</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
