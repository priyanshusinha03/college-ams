import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const login = (username, password) => {
    if (username === 'faculty' && password === 'password') {
      setAuthenticated(true);
      setUser(username);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser('');
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {authenticated ? <Redirect to="/dashboard" /> : <Login login={login} />}
        </Route>
        <Route path="/dashboard">
          <Dashboard user={user} logout={logout} authenticated={authenticated} />
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
