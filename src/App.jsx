import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
