import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Login} from './views/Login/login.js';
import {Cadastro} from './views/Cadastro/cadastro.js';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} title='Login'/>
          <Route path="/Cadastro" element={<Cadastro/>} title='Cadastro de Usuario'/>
        </Routes>
      </div>
    </Router>
  );
}