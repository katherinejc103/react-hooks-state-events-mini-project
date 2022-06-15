import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const tasksToRender = tasks.map(t => (<Task task={t} />))
  return (
    <div className="tasks">
      {tasksToRender}
    </div>
  );
}

export default TaskList;



 