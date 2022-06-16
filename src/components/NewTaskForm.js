import React, {useState} from "react";

function NewTaskForm({categories,  onTaskFormSubmit}) {

  const [newDetails, setNewDetails] = useState('')
  const [newCategory, setNewCategory] = useState('')

const categorySelectOption = categories.map(category => category==="All" ? <option key={category}>   </option> : <option>{category}</option> )

function handleDetailsChange(e){
  setNewDetails(e.target.value)
}

function handleCategoryChange(e) {
  setNewCategory(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  const newTask = {text: newDetails, category: newCategory}
  onTaskFormSubmit(newTask)

}
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categorySelectOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
