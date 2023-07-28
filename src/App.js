import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import About from "./routes/About"

import { Route, Routes } from "react-router-dom";
import App2 from "./routes/RegisterForm"
import Login from "./components/Login"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/App2" element={<App2 />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
