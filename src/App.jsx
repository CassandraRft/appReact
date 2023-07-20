import './App.css';

function App({tasks}) {
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id}>
              {
                task.title
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default App;
