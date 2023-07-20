import React, { useState, useEffect } from 'react';

function TaskList({ tasks }) {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   // Appel à une API pour récupérer les données des tâches
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(data => setTasks(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;