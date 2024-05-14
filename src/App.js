// App.js
import React from "react";
import { StudentProvider } from "./StudentContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Student from "./Student";
import Admin from "./Admin";
import Login from "./Login";
import Account from "./Account";
import Register from "./Register";

function App() {
  return (
    <Router>
      <StudentProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </StudentProvider>
    </Router>
  );
}

export default App;
