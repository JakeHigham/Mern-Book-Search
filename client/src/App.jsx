// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import { fetchMe } from './utils/API';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const me = await fetchMe();
      console.log('User Data:', me);
      setUser(me);
    };

    getUserData();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes> {/* Updated from Switch to Routes */}
        <Route path="/" element={<SearchBooks />} /> {/* Updated Route usage */}
        <Route path="/saved" element={<SavedBooks />} /> {/* Updated Route usage */}
        {/* other routes */}
      </Routes>
    </Router>
  );
};

export default App;
