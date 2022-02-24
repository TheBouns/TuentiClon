import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loggin from "./components/loggin/loggin";
import Header from "./components/header/Header";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {/* <Loggin /> */}
          <Route path="/" element={<Loggin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
