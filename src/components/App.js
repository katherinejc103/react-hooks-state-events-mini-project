import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  
  

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask));
  }

  function onClickAll(selectedCategory){
    // event.preventDefault();
    setCategory(selectedCategory)
    console.log(selectedCategory)
  }
const filteredTask = category === "All" ? tasks : tasks.filter(task => task.category === category) 
console.log(tasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={category} onClickAll={onClickAll}/>
      <NewTaskForm categories={CATEGORIES} setNewTaskList={setTasks} tasks={tasks}/>
      <TaskList onDeleteTask={handleDeleteTask} tasks={filteredTask}/>
    </div>
  );
}

export default App;
