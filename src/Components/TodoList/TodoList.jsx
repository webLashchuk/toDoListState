import { useState } from "react";

const TodoList = ({ tasks, setTasks }) => {
    const [title, setTitle] = useState('');

    const addTaskHandler = () => {
        let newTask = {
            id: tasks.length + 1,
            title: title
        }

        setTasks([...tasks, newTask])
        setTitle('');
    }

    const onInputHandler = (e) => {
        setTitle(e.target.value)
    }

    const toggleTaskHandler = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ));
    }

    return (
        <>
            <div className="Panel">
                <input type="text" onInput={onInputHandler} value={title} />
                <button onClick={addTaskHandler}>Add task</button>
            </div>
            <>
                <h1>
                    Add your task
                </h1>
            </>
            <div className="tasks">
                {
                    tasks.map(task => <div>
                        <input type="checkbox" value={task.isDone} 
                            onChange={() => toggleTaskHandler(task.id)}
                        />
                        <h2 className={task.isDone ? "Green" : "Red"}>{task.title}</h2>
                    </div>)
                }
            </div>
        </>
    )
}

export default TodoList;