import React, { useState, useEffect } from 'react';
import './App.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.email} ({employee.role})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
