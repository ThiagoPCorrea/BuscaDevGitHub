import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './views/Login/login.js';
import { Cadastro } from './views/Cadastro/cadastro.js';
import { Busca } from './views/Busca/busca.js';
import { Repositorios } from './views/Repositorios/repositorios.js';
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/Colors'
import './App.css'

export default function App() {
  return (
    <div className="App-header">
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Login />} title='Login' />
            <Route path="/Cadastro" element={<Cadastro />} title='Cadastro de Usuario' />
            <Route path="/Busca" element={<Busca />} title='Busca' />
            <Route path="/Repositorios" element={<Repositorios />} title='Repositorios' />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}