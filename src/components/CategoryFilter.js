import React from "react";

function CategoryFilter({categories, selected, onClickAll}) {
  const categoriesRendered = categories.map(category => <button key={category} className={selected === category ? 'selected' : ""} onClick={e => onClickAll(category)}> {category} </button> );
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesRendered}
    </div>
  );
  }

export default CategoryFilter;
