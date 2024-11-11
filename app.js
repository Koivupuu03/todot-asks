import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        setTasks([...tasks, taskInput]);
        setTaskInput('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
