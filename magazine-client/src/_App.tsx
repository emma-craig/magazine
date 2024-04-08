import React from 'react';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Home from './App';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link
            to="./magazine"
            className="App-link">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
            />
          </Link>
          <p>
            <code>Magazine by Marina & Emma & .......</code>.
          </p>
        </header>
      </div>
      <Routes>
        <Route
          path="/"
          element={<App />}></Route>
        <Route
          path="/magazine"
          element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
