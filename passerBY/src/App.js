import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shops from './pages/Shops';
import Hotels from './pages/Hotels';
import Favorites from './pages/Favorites';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>PasserBY</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shops">Shops</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;