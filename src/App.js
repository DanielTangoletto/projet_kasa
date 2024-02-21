import React from "react"
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/styles.css";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
