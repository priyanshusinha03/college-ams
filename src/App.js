import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import StudentData from "./StudentData";
// import data from "./Data";
import Data from './datademo.csv';
import Papa from 'papaparse';
//import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  // const [newData,setNewData] = useState([])
  const [dataDemo, setDataDemo] = useState([]);
  //fetching data from csv file
 // parse CSV data & store it in the component state

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (results) => {
  //       setNewData(results.data);
  //       console.log("res",results.data)
  //     },
  //   });
    
  // };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
    
      setDataDemo(parsedData);
    };
    fetchData();
  }, []);

  const login = (username, password) => {
    if (username === "faculty" && password === "password") {
      setAuthenticated(true);
      setUser(username);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser("");
  };

  return (
    <Router>
         {/* <input type="file" accept=".csv" onChange={handleFileUpload} /> */}

      <Switch>
        <Route path="/login">
          {authenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login login={login} dataDemo={dataDemo} />
          )}
        </Route>
        <Route path="/dashboard">
          <Dashboard
            user={user}
            logout={logout}
            authenticated={authenticated}
            dataDemo={dataDemo}
          />
        </Route>
        <Route path="/student-data">
          <StudentData />
        </Route>
        <Route path="*">
          {authenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login login={login} dataDemo={dataDemo} />
          )}{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
