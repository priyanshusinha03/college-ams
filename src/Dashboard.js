import React from 'react';
import { Redirect } from 'react-router-dom';
// import data from './Data';
function Dashboard({ user, logout, authenticated ,dataDemo}) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  
  
  
  return (
    <div>
      {/* <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button> */}
      <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Welcome, {user}!</h2>
        <div className="btn-group">
          <button className="btn btn-danger p-2 m-4" onClick={logout}>
            Logout
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><button className="dropdown-item" type="button">Option 1</button></li>
            <li><button className="dropdown-item" type="button">Option 2</button></li>
            <li><button className="dropdown-item" type="button">Option 3</button></li>
          </ul>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Status</th>
            <th scope="col">Registration No</th>
            <th scope="col">Email</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {dataDemo.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.branch}</td>
              <td>{item.status}</td>
              <td>{item.registrationNumber}</td>
              <td>{item.email}</td>
              <td>{item.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Dashboard;
