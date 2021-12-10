import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './views/Login/login';
import { Cadastro } from './views/Cadastro/cadastro';
import { Busca } from './views/Busca/busca';
import { Repositorios } from './views/Repositorios/repositorios';
import { Estatistica } from './views/Estatistica/estatistica';
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/Colors'

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
            <Route path="/Estatistica" element={<Estatistica />} title='Estatistica' />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}