import React from "react";


function Task({text, category, onDeleteTask, key}) {
 
  function handleDeleteClick(){
    console.log(text)
    onDeleteTask(text)
  }
  
  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick}className="delete" >
        X</button>
    </div>
  );
}

export default Task;
