import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
