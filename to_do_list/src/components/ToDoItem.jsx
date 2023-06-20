import React from "react";
import "./static/ToDoItem.css"

const ToDoItem = ({tasks, setTasks}) => {

    const checkboxChange = (event, idx) => {
        const updatedTasks = [...tasks];
        updatedTasks[idx].status = event.target.checked;
        setTasks(updatedTasks);
    }

    const deleteTask = (event, idx) => {
        event.preventDefault();
        const taskToKeep = [...tasks];
        taskToKeep.splice(idx,1);
        setTasks(taskToKeep);
    }

    return(
        <ul>
            {tasks.map((task, idx) => {

                return(
                    <form className="flex-row centered" onSubmit={event => deleteTask(event, idx)}>
                        {task.status === false ?
                        <li>{task.task}</li> :
                        <li className="strikeout">{task.task}</li>}
                        <input type="checkbox" onChange={event => checkboxChange(event, idx)}/>
                        <button>Delete</button>
                    </form>
                );
            })}

        </ul>
    );
}

export default ToDoItem;