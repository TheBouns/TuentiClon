import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loggin from "./components/loggin/loggin";
import Header from "./components/header/Header";
import Form from "./components/Form/Form";
import Profile from "./components/Profile/Profile";
import PrivateZone from "./guards/PrivateZone";
import { MainRouter } from "./router/Router";


function App() {
  return (
    <MainRouter/>     
  );
}

export default App;
