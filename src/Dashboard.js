import React from 'react';
import { Redirect } from 'react-router-dom';

function Dashboard({ user, logout, authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
