import React, {useState} from "react";

const [currentTask, SetTask] = useState("ALL")

function handleTaskCategory(event){
  SetTask(event.target.value)
}

function handleTaskText(event){
  SetTask(event.target.value)
}

function Task({tasks}) {
  return (
    <div className="task">
      <div className="label">{handleTaskCategory}</div>
      <div className="text">{handleTaskText}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
