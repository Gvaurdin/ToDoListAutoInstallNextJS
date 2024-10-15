import { Component } from "react";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],      // список задач
            input: ''       // тек. значение ввода         
        };
        this.idCounter = 0; // счётчик для генерации уникальных ID
    }

    //обработчик изменения текстового поля 
    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    }

    // добавляем новую задачу
    addTask = () => {
        const { input, tasks } = this.state;
        if (input.trim() === '') return; // если строка ввода пустая , задачу не добавляем
        const newTask = { id: ++this.idCounter, text: input, completed: false };
        this.setState({
            tasks: [...tasks, newTask], // задачу добавили
            input: '' // строку ввода почистили
        });
    }

    // удаляем задачу по индексу
    deleteTask = (id) => {
        const { tasks } = this.state;
        const updatedTasks = tasks.filter(task => task.id !== id);
        this.setState({ tasks: updatedTasks });
    }

    // переключение состояния выполнения задачи 
    toggleTask = (id) => {
        const { tasks } = this.state;
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        this.setState({ tasks: updatedTasks });
    }

    render() {
        const { tasks, input } = this.state;

        return (
            <div className="todo-container">
                <h4>To Do List</h4>
                <div className="input-selection">
                    < input
                        type="text"
                        value={input}
                        onChange={this.handleInputChange}
                        placeholder="Enter to new task"
                        onKeyPress={(e) => { if (e.key === 'Enter') this.addTask(); }}
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={task.id} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTask(task.id)}
                            />
                            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                            <button className="delete-button" onClick={() => this.deleteTask(task.id)}>✖</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export function ToDoListApp() {
    return <>
        <ToDoList />
    </>
}