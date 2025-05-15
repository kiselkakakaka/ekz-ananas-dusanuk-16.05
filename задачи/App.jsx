import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText('');
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      color: 'white',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>Список задач</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={addTask} style={{ marginLeft: '0.5rem' }}>Добавить</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '0.5rem' }}>
            <span
              onClick={() => toggleDone(task.id)}
              style={{
                textDecoration: task.done ? 'line-through' : 'none',
                color: task.done ? '#999' : 'white',
                cursor: 'pointer',
                marginRight: '1rem'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
