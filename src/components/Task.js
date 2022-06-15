import React, {useState} from "react";
import { TASKS } from "../data";


function Task({task}) {

  console.log(task)
 
  function handleDelete(event) {
    const task = event.target.getAttribute('task')
  }
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
