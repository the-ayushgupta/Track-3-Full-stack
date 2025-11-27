import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll create this CSS file next

function Home() {
  return (
    <div className="home-container">
      <h1>Employee & Task Management</h1>
      <p>Welcome to your management dashboard. Please select an option:</p>
      <div className="home-buttons">
        <Link to="/employees" className="home-button">Manage Employees</Link>
        <Link to="/tasks" className="home-button">Manage Tasks</Link>
      </div>
    </div>
  );
}

export default Home;
