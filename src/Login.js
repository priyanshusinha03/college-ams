import React, { useState } from 'react';

function Login({ login }) {
  const [userType, setUserType] = useState('faculty');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleLogin = () => {
    if (userType === 'faculty') {
      if (username === 'faculty' && password === 'password') {
        login(username, password);
      } else {
        alert('Invalid faculty credentials');
      }
    } else if (userType === 'student') {
      alert(`Student Login: Registration Number - ${registrationNumber}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Login</h2>
          <select
            className="form-select mb-2"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          {userType === 'faculty' ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Registration Number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </>
          )}
          <button className="btn btn-primary w-100" onClick={handleLogin}>
            {userType === 'student' ? 'Search' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
