import React, { useState, useEffect } from 'react';
import './App.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description} (Assigned to: {task.Employee ? task.Employee.name : 'Unassigned'}) - Status: {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
