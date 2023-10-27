import React from 'react';
import { useLocation } from 'react-router-dom';

const StudentData = () => {
  const location = useLocation();
  const { studentData } = location.state;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Student Data</h2>
      {studentData && (
        <div className=" justify-content-center mt-5 row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name:</strong> {studentData.firstName} {studentData.lastName}
              </li>
              <li className="list-group-item">
                <strong>Branch:</strong> {studentData.branch}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong> {studentData.status}
              </li>
              <li className="list-group-item">
                <strong>Registration Number:</strong> {studentData.registrationNumber}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {studentData.email}
              </li>
              <li className="list-group-item">
                <strong>Attendance:</strong> {studentData.attendance}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentData;
