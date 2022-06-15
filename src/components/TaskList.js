import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const tasksToRender = tasks.map(t => (
  <Task 
  key={t.text}
  text={t.text}
  category={t.category}
  onDeleteTask={onDeleteTask}
   />))
  return (
    <div className="tasks">
      {tasksToRender}
    </div>
  );
}

export default TaskList;



 