import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Create from "./Pages/CreatePage/Create";
import HeaderMain from "./components/HeaderMain";
import React from "react";

function App() {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
