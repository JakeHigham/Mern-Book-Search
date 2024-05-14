// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import { fetchMe } from './utils/API';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const me = await fetchMe();
      setUser(me);
    };

    getUserData();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Switch>
        <Route exact path='/' component={SearchBooks} />
        <Route exact path='/saved' component={SavedBooks} />
        {/* other routes */}
      </Switch>
    </Router>
  );
};

export default App;
