import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import "./styles/styles.scss";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate replace to="/projet_kasa" />} />
        <Route path="/projet_kasa" element={<Home />} />
        <Route path="/projet_kasa/about" element={<About />} />
        <Route path="/projet_kasa/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
