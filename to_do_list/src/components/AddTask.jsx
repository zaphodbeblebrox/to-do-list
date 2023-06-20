import React, { useState } from "react";

const AddTask = ({tasks, setTasks}) => {
    const [task, setTask] = useState("");

    const AddTask = (event) => {
        event.preventDefault();
        const newTask = [...tasks, {"status":false, "task":task}];
        setTasks(newTask);
        setTask("");
    }

    return(
        <form onSubmit={AddTask}>
            <label htmlFor="task">New Task</label>
            <input type="text" name="task" id="task" value={task} onChange={event => setTask(event.target.value)}/>
            <button>Add</button>
        </form>
    );
}

export default AddTask;