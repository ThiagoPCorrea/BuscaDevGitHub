import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import {Login} from './views/Login/login.js';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} title='Login'/>
        </Routes>
      </div>
    </Router>
  );
}