import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink, Navigate,
} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import CharactersPage from './Pages/Characters/CharactersPage';

const App = () => (
  <Router>
    <header className="header">
      <nav className="nav">
        <NavLink
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="nav__link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="nav__link"
          to="/characters"
        >
          Characters
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="/characters"
        element={<CharactersPage />}
      />
    </Routes>
  </Router>
);

export default App;
