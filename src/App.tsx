import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink, Navigate,
} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import CharactersPage from './Pages/Characters/CharactersPage';
import CharacterPage from './Pages/Character/CharacterPage';
import Page404 from './Pages/404/Page404';

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
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink
          className="nav__link"
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/characters"
        element={<CharactersPage />}
      />
      <Route
        path="/characters/:id"
        element={<CharacterPage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="404"
        element={<Page404 />}
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </Router>
);

export default App;
