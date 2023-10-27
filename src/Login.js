import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ login, dataDemo }) {
  const [userType, setUserType] = useState("faculty");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    if (userType === "faculty") {
      if (username === "faculty" && password === "password") {
        if (login) {
          login(username, password);
        } else {
          alert("Faculty login function is not defined.");
        }
      } else {
        alert("Invalid faculty credentials");
      }
    } else if (userType === "student") {
      alert(`Student Login: Registration Number - ${registrationNumber}`);
    }
  };
  
  const handleLoginStudent = () => {
  console.log("d",dataDemo)
    // Check if the registration number exists in the data array
    const studentData = dataDemo.find((student) => student.registrationNumber === registrationNumber);
    
    if (studentData) {
      // If a match is found, redirect to the StudentData page with the data
      history.push("/student-data", { studentData });
    } else {
      alert("Invalid registration number");
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
          {userType === "faculty" ? (
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
          <button
            className="btn btn-primary w-100"
            onClick={userType === "student" ? handleLoginStudent : handleLogin}
          >
            {userType === "student" ? "Search" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
