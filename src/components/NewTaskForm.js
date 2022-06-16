import React, {useState} from "react";

function NewTaskForm({categories, setNewTaskList, tasks, key}) {

  const [newDetails, setNewDetails] = useState('')
  const [newCategory, setNewCategory] = useState('')

const categorySelectOption = categories.map(category => category==="All" ? <option>   </option> : <option>{category}</option> )

function handleDetailsChange(e){
  setNewDetails(e.target.value)
}

function handleCategoryChange(e) {
  setNewCategory(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  const newTask = {text: newDetails, category: newCategory}
console.log(newTask)
  setNewTaskList( [...tasks, newTask])
}
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" key={key} onChange={handleCategoryChange}>
          {categorySelectOption}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;
