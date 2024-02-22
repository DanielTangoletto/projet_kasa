import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Error from "./pages/Error/Error";
import "./styles/styles.css";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
