import React, { useState } from 'react';

const TextInputFunc = () => {
    const [inputText, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setText(event.target.value);
    }

    const [Id, setId] = useState(0);

    const addTask = () => {
        if (inputText) {
            setTasks([...tasks, { id: Id, task: inputText, completed: false }]);
            setId(Id + 1);
            setText('');
        }
    }

    const toggleTask = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    const deleteTask = (id) => {

        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    const deleteCompletedTasks = () => {
        const updatedTasks = tasks.filter((task) => !task.completed);
        setTasks(updatedTasks);
    }

    return <>
        <div className='todo-container'>
            <h4>To Do List</h4>
            <input
                type="text"
                value={inputText}
                placeholder='Enter to new task'
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add</button>
            <button onClick={deleteCompletedTasks}>Delete completed tasks</button>
            <ul className='task-list'>
                {tasks.map((task) =>
                (<li key={task.id} className='task-item'>
                    <input
                        type='checkbox'
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span className={task.completed ? 'completed' : ''}>{task.task}</span>
                    <button className='delete-button' onClick={() => deleteTask(task.id)}>✖</button>
                </li>))}
            </ul>
            <h4>Made with functional components</h4>
        </div>
    </>
}

export default TextInputFunc;