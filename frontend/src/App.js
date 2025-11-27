import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import EmployeeList from './EmployeeList';
import TaskList from './TaskList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Employee & Task Management</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employees">Employees</Link>
            <Link to="/tasks">Tasks</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/tasks" element={<TaskList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
